$(() => {
    $("#eventoRepButton").click( e => {
        var ev = $("#eventoRepPesq").val()
        $("#eventoRepPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/repertorio/evento/" + ev,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/repertorio/evento/" + ev
            },
            error: e => console.log(e)
        })
    })

    $("#obraRepButton").click( e => {
        var o = $("#obraRepPesq").val()
        $("#obraRepPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/repertorio/obra/" + o,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/repertorio/obra/" + o
            },
            error: e => console.log(e)
        })
    })
})