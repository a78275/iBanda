$(document).ready(function(){
    var addButton = $('.add_button') //Add button selector
    var wrapper = $('.field_wrapper') //Input field wrapper
    //New input field html 
    var fieldHTML = '<div class="w3-row w3-section w3-border w3-panel w3-border-gold">'
    fieldHTML += '<div class="w3-col w3-margin-top" style="width:6%"><i class="w3-xxlarge w3-left far fa-keyboard" style="color:#c0b283"/></div><div class="w3-col w3-margin-top" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].nome\' placeholder=\'Nome\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-center fa fa-microphone" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.voz\' placeholder=\'Voz\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-left fas fa-volume-up" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.afinacao\' placeholder=\'Afinação\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-left fas fa-microphone-alt" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.clave\' placeholder=\'Clave\'/></div>'
    fieldHTML += '<div class="w3-col" style="width:6%"><i class="w3-xxlarge w3-left fa fa-file-text" style="color:#c0b283"/></div><div class="w3-col" style="width:91%"><input class="w3-input w3-border" type=\'text\' name=\'instrumentos[0].partitura.path\' placeholder=\'Ficheiro\'/></div>'
    fieldHTML += '<a href="javascript:void(0);" class="remove_button"><span><i class="w3-large w3-left w3-padding-small fa fa-minus-square" style="color:#373737"/></span></a></div>'
    
    //Once add button is clicked
    $(addButton).click(function(){
        $(wrapper).append(fieldHTML); //Add field html
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});