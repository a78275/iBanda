$(() => {
    $("#tipoEvButton").click( e => {
        var tipo = $("#tipoEvPesq").val()
        $("#tipoEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/tipo/" + tipo,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/tipo/" + tipo
            },
            error: e => console.log(e)
        })
    })

    $("#designacaoEvButton").click( e => {
        var d = $("#designacaoEvPesq").val()
        $("#designacaoEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/designacao/" + d,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/designacao/" + d
            },
            error: e => console.log(e)
        })
    })

    $("#dataEvButton").click( e => {
        var d = $("#dataEvPesq").val()
        $("#dataEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/data/" + d,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/data/" + d
            },
            error: e => console.log(e)
        })
    })

    $("#dataexEvButton").click( e => {
        var d = $("#dataexEvPesq").val()
        $("#dataexEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/dataex/" + d,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/dataex/" + d
            },
            error: e => console.log(e)
        })
    })

    $("#localEvButton").click( e => {
        var l = $("#localEvPesq").val()
        $("#localEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/local/" + l,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/local/" + l
            },
            error: e => console.log(e)
        })
    })
})