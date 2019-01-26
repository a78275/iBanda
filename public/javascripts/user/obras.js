$(() => {
    //pesquisar as obras por tipo
    $("#tipoButton").click( e => {
        var tipo = $("#tipoPesq").val()
        $("#tipoPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/obra/tipo/" + tipo,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/obra/tipo/" + tipo
            },
            error: e => console.log('Erro na pesquisa das obras por tipo: ' + e)
        })
    })
    //pesquisar as obras por compositor
    $("#compositorButton").click( e => {
        var c = $("#compositorPesq").val()
        $("#compositorPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/obra/compositor/" + c,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/obra/compositor/" + c
            },
            error: e => console.log('Erro na pesquisa das obras por compositor: ' + e)
        })
    })
    //pesquisar as obras por título
    $("#tituloButton").click( e => {
        var t = $("#tituloPesq").val()
        $("#tituloPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/obra/titulo/" + t,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/obra/titulo/" + t
            },
            error: e => console.log('Erro na pesquisa das obras por título: ' + e)
        })
    })
})