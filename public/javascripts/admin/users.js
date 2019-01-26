$(() => {
    //pesquisar utilizadores por tipo
    $("#tipoUtButton").click( e => {
        var tipo = $("#tipoUtPesq").val()
        $("#tipoUtPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/user/tipo/" + tipo,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/user/tipo/" + tipo
            },
            error: e => console.log('Erro na pesquisa dos utilizadores por tipo: ' + e)
        })
    })
    //pesquisar utilizadores por nome
    $("#nomeButton").click( e => {
        var n = $("#nomePesq").val()
        $("#nomePesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/user/nome/" + n,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/user/nome/" + n
            },
            error: e => console.log('Erro na pesquisa dos utilizadores por nome: ' + e)
        })
    })
    //pesquisar utilizadores por email
    $("#emailButton").click( e => {
        var em = $("#emailPesq").val()
        $("#emailPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/user/email/" + em,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/user/email/" + em
            },
            error: e => console.log('Erro na pesquisa dos utilizadores por email: ' + e)
        })
    })
})