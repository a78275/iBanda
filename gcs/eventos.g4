grammar eventos;
@header {
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
   MongoClient mongoClient=new MongoClient("localhost", 27017);   
   MongoDatabase database = mongoClient.getDatabase("amd");
   MongoCollection<Document> coll = database.getCollection("eventos");
  
}
@after {
        mongoClient.close();
}
        : (evento {   
            Document entry = new Document("data", ""+$evento.valordata)
                .append("designacao", ""+$evento.valordesignacao)
                .append("tipo", ""+$evento.valortipo)
                .append("local", ""+$evento.valorlocal)
                .append("horario", new Document("hinicio", ""+$evento.valorhorarioI).append("hfim", ""+$evento.valorhorarioF))
                .append("informacoes", ""+$evento.valorinformacoes);
            coll.insertOne(entry);     
          })+
        ;
evento returns [String valordesignacao, String valordata, String valortipo, String valorlocal, String valorhorarioI, String valorhorarioF, String valorinformacoes]
      : infoBasica infoOpcional {
            $evento.valordesignacao=$infoBasica.valordesignacao; 
            $evento.valordata = $infoBasica.valordata; 
            $evento.valortipo=$infoBasica.valortipo; 
            $evento.valorlocal=$infoBasica.valorlocal;
            $evento.valorhorarioI=$infoOpcional.valorhorarioI; 
            $evento.valorhorarioF=$infoOpcional.valorhorarioF; 
            $evento.valorinformacoes=$infoOpcional.valorinformacoes;
        }
      ;
infoBasica returns [String valordata, String valortipo , String valorlocal, String valordesignacao]
          : 'DESIGNAÇÃO:' designacao 'DATA:' data 'TIPO:' tipo 'LOCAL:' local { 
                $infoBasica.valordesignacao=$designacao.valor;
                $infoBasica.valordata=$data.valor; 
                $infoBasica.valortipo=$tipo.valor; 
                $infoBasica.valorlocal=$local.valor;
            }
          ;
infoOpcional returns [String valorhorarioI, String valorhorarioF, String valorinformacoes]
            : ('HORARIO:' horario)? ('INFORMAÇÕES:' informacoes)? { 
                try {
                        $infoOpcional.valorhorarioI=$horario.valorI;
                    } catch(Exception e) {
                        System.out.println("Exceção no Horário de início.");
                        $infoOpcional.valorhorarioI="";
                    }
                    try {
                        $infoOpcional.valorhorarioF=$horario.valorF;
                    } catch(Exception e) {
                        System.out.println("Exceção no Horário de fim.");
                        $infoOpcional.valorhorarioF="";
                    }
                    try {
                        $infoOpcional.valorinformacoes=$informacoes.valor; 
                    } catch(Exception e) {
                        System.out.println("Exceção nas Informações.");
                        $infoOpcional.valorinformacoes="";
                    }
              }
            ;
data returns [String valor]
    : DATA {
        $data.valor=$DATA.text;
      }
    ;
tipo returns [String valor]
    : 'Concerto' {
         $tipo.valor="Concerto";
      }
    | 'Ensaio' {
         $tipo.valor="Ensaio";
      }
    ;
local returns [String valor]
     : TEXT {
         $local.valor=$TEXT.text.trim();
       }
     ;
horario returns [String valorI, String valorF]
       : hinicio {
            $horario.valorI=$hinicio.valor;
         } '-' hfim {
                $horario.valorF=$hfim.valor;
         }  
       | hinicio {
            $horario.valorI=$hinicio.valor; 
            $horario.valorF="";
         }
       ;

hinicio returns [String valor]
       : HORA {$hinicio.valor=$HORA.text;}
       ;

hfim returns [String valor]
    : HORA {$hfim.valor=$HORA.text;}
    ;

designacao returns [String valor]
          : TEXT {$designacao.valor=$TEXT.text.trim();}
          ;

informacoes returns [String valor]
           : TEXT {$informacoes.valor=$TEXT.text.trim();}
           ;

/*Analisador Léxico */
TEXT: [a-zA-Z0-9áéíóúàèìòùãõç\ \.\,\;]+;
HORA: [0-9][0-9]':'[0-9][0-9];
DATA: [0-9][0-9][0-9][0-9]'-'[0-9][0-9]'-'[0-9][0-9];
SEPARADOR: ('\r'? '\n' | ' ' | '\t')+  -> skip;