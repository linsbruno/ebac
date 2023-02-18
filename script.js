$(document).ready(function(){

    $('form').on('submit', function(evento){
        evento.preventDefault();
        const novaTarefa = $('#campo').val();
        const tarefa = $('<li></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(tarefa);
        $(tarefa).appendTo('ul');
        $('#campo').val('');
        })
        $('ul').on('click','p',function(){
            $(this).css('text-decoration','line-through')
        })
        
})