$(() => {
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
            error: e => console.log(e)
        })
    })

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
            error: e => console.log(e)
        })
    })

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
            error: e => console.log(e)
        })
    })
})