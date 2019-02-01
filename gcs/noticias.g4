grammar noticias;

@header {
    import java.io.*;
    import com.mongodb.*;
    import com.mongodb.MongoClient;
    import com.mongodb.client.MongoCollection;
    import com.mongodb.client.MongoDatabase;
    import com.mongodb.client.model.Filters;
    import static com.mongodb.client.model.Filters.*;
    import static com.mongodb.client.model.Updates.*;
    import com.mongodb.client.model.UpdateOptions;
    import com.mongodb.client.result.*;
    import org.bson.Document;
    import org.bson.types.ObjectId;
}

sistema
@init {
   MongoClient mongoClient = new MongoClient("localhost", 27017);   
   MongoDatabase database = mongoClient.getDatabase("amd");
   MongoCollection<Document> coll = database.getCollection("noticias");
  
}
@after {


        mongoClient.close();
}
        : (noticia {
                Document entry = new Document("titulo", ""+$noticia.valortitulo)
                    .append("subtitulo", ""+$noticia.valorsubtitulo)
                    .append("data", ""+$noticia.valordata)
                    .append("hash", ""+$noticia.valorhash)
                    .append("img_path", ""+$noticia.valorimgpath)
                    .append("corpo", ""+$noticia.valorcorpo)
                    .append("visivel", ""+$noticia.valorvisivel);
                coll.insertOne(entry);     
          })+
        ;
noticia returns [String valordata, String valortitulo , String valorcorpo, String valorsubtitulo, String valorhash, String valorimgpath, String valorvisivel] 
        : infoBasica infoOpcional {
            $noticia.valordata=$infoBasica.valordata; 
            $noticia.valortitulo=$infoBasica.valortitulo; 
            $noticia.valorcorpo=$infoBasica.valorcorpo;
            $noticia.valorsubtitulo=$infoOpcional.valorsubtitulo; 
            $noticia.valorhash=$infoOpcional.valorhash;
            $noticia.valorimgpath=$infoOpcional.valorimgpath; 
            $noticia.valorvisivel=$infoOpcional.valorvisivel;
          }
        ;
infoBasica returns [String valordata, String valortitulo , String valorcorpo]
           : 'DATA:' data 'TÍTULO:' titulo 'CORPO:' corpo { 
                $infoBasica.valordata=$data.valor; 
                $infoBasica.valortitulo=$titulo.valor; 
                $infoBasica.valorcorpo=$corpo.valor;
              }
           ;
infoOpcional returns [String valorsubtitulo, String valorhash, String valorimgpath, String valorvisivel] 
@init {
       
}
             : ('SUBTÍTULO:' subtitulo)? ('HASH:' hash)? ('IMG:' imgpath)? ('VISÍVEL:' visivel)? {                                                                              
                    try {
                        $infoOpcional.valorsubtitulo=$subtitulo.valor;
                    } catch(Exception e) {
                        System.out.println("Exceção no subtítulo.");
                        $infoOpcional.valorsubtitulo="";
                    }
                    try {
                        $infoOpcional.valorhash=$hash.valor;
                    } catch(Exception e) {
                        System.out.println("Exceção no Hash.");
                        $infoOpcional.valorhash="";
                    }
                    try {
                        $infoOpcional.valorimgpath=$imgpath.valor; 
                    } catch(Exception e) {
                        System.out.println("Exceção no Imagem.");
                        $infoOpcional.valorimgpath="";
                    }
                    try {
                        $infoOpcional.valorvisivel=$visivel.valor;
                    } catch(Exception e) {
                        System.out.println("Exceção no Visível.");
                        $infoOpcional.valorvisivel="";
                    }
               }
             ;
data returns [String valor]
     : DATA {$data.valor=$DATA.text;}
     ;
titulo returns [String valor]
       : TEXT {$titulo.valor=$TEXT.text.replaceAll("'", "");}
       ;
corpo returns [String valor]
      : TEXT {$corpo.valor=$TEXT.text.replaceAll("'", "");}
      ;
subtitulo returns [String valor]
          : TEXT {$subtitulo.valor=$TEXT.text.replaceAll("'", "");}
          ;
imgpath returns [String valor]
        : TEXT {$imgpath.valor=$TEXT.text.replaceAll("'", "");}
        ;
hash returns [String valor]
     : TEXT {$hash.valor=$TEXT.text.replaceAll("'", "");}
     ;
visivel returns [String valor]
        : 'true' {$visivel.valor="true";}
        | 'false' {$visivel.valor="false";}
        ;

/*Analisador Léxico */
TEXT: (('\''|'\"') ~('\''|'\"')* ('\''|'\"')); 
DATA: [0-9][0-9][0-9][0-9]'-'[0-9][0-9]'-'[0-9][0-9];
SEPARADOR: [ \t\n\r]+ -> skip;





