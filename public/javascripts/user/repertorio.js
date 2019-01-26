$(() => {
    //pesquisar no repertório por designação do evento
    $("#eventoRepButton").click( e => {
        var ev = $("#eventoRepPesq").val()
        $("#eventoRepPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/repertorio/evento/" + ev,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/repertorio/evento/" + ev
            },
            error: e => console.log('Erro na pesquisa do repertório por evento: ' + e)
        })
    })
    //pesquisar no repertório por título da obra
    $("#obraRepButton").click( e => {
        var o = $("#obraRepPesq").val()
        $("#obraRepPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/repertorio/obra/" + o,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/repertorio/obra/" + o
            },
            error: e => console.log('Erro na pesquisa do repertório por obra: ' + e)
        })
    })
})