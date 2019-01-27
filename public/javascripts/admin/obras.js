$(document).ready(function(){
    var x = -1
    var addButton = $('.add_button') 
    var wrapper = $('.field_wrapper')
    //código adicionado depois de clicar no botão +
    var fieldHTML = '<div class="w3-row w3-section w3-border w3-panel w3-border-gold">'
    fieldHTML += '<div class=\"w3-col w3-margin-top\" style=\"width:6%\"><i class=\"w3-xxlarge w3-center fa fa-pencil-square\" style=\"color:#c0b283\"/></div><div class=\"w3-col w3-margin-top\" style=\"width:91%\"><input class=\"w3-input w3-border\" type=\'text\' name=\'instrumentos['+x+'].nome\' placeholder=\'Nome\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-center fa fa-microphone" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.voz\' placeholder=\'Voz\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-left fas fa-volume-up" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.afinacao\' placeholder=\'Afinação\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-left fas fa-microphone-alt" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.clave\' placeholder=\'Clave\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-left fa fa-file-text" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.path\' placeholder=\'Ficheiro\'/></div>'
    fieldHTML += '<a href="javascript:void(0);" class="remove_button"><span><i class="w3-large w3-left w3-margin-top w3-margin-bottom fa fa-minus-square" style="color:#373737"/></span></a></div>'
    
    $(addButton).click(function(){
        x++
        $(wrapper).append(fieldHTML)
    })
    
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault()
        x--
        $(this).parent('div').remove() //remover o código que foi adicionado, ao clicar no botão -
    })
})

$(() => {
    //pesquisar nas obras por tipo
    $("#tipoButton").click( e => {
        var tipo = $("#tipoPesq").val()
        $("#tipoPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/obra/tipo/" + tipo,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/obra/tipo/" + tipo
            },
            error: e => console.log('Erro na pesquisa das obras por tipo: ' + e)
        })
    })
    //pesquisar nas obras por compositor
    $("#compositorButton").click( e => {
        var c = $("#compositorPesq").val()
        $("#compositorPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/obra/compositor/" + c,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/obra/compositor/" + c
            },
            error: e => console.log('Erro na pesquisa das obras por compositor: ' + e)
        })
    })
    //pesquisar nas obras por título
    $("#tituloButton").click( e => {
        var t = $("#tituloPesq").val()
        $("#tituloPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admin/obra/titulo/" + t,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/admin/obra/titulo/" + t
            },
            error: e => console.log('Erro na pesquisa das obras por título: ' + e)
        })
    })
})