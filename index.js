

$(document).ready(function () {
    let qAnswerArray = [];

    $(".qno1").on('click', 'a', function () {
        let selectedElementId = $('.active').data('qid');
        let qno1Answer = $(this).text();
        qAnswerArray[selectedElementId-1] = qno1Answer;
        $('.qno1 .btn-group .btn-primary:first-child').text(qno1Answer);
        $('.proceed-button button').prop("disabled", false);
    });

    $(".q-container").on('click', 'input[type="radio"]', function(){
        let selectedElementId = $('.active').data('qid');
        qAnswerArray[selectedElementId-1] = $(this).val();
        $('.proceed-button button').prop("disabled", false);
    });

    $(".qno6").on('click', 'input[type="radio"]', function(){
        $('.show-archi-button button').prop("disabled", false);
    });

    $('.show-archi-button').on('click', 'button', function(){
        $('.architecture-diagram-box').removeClass('d-none');
        $('.active').removeClass('active').addClass('d-none');
        $('.show-archi-button').addClass('d-none');
    })

    $('.proceed-button').on('click', 'button', function(){
        let selectedElement = $('.active');
        let selectedElementId = $('.active').data('qid')-1;
        selectedElement.animate({ width: [ "toggle" ], height: [ "toggle" ], opacity: "toggle" });
        selectedElement.next().removeClass('d-none');
        selectedElement.next().fadeIn('fast');
        setTimeout(function(){
            selectedElement.addClass('d-none');
            selectedElement.removeClass('active')
            selectedElement.next().addClass('active');
        },500)
        $('.proceed-button button').prop("disabled", true);
        $('.menu-container .accordion').children().eq(selectedElementId).find('.answer').html(qAnswerArray[selectedElementId]);
        if($('.q-container').length == selectedElementId+2){
            $('.proceed-button').addClass('d-none');
            $('.show-archi-button').removeClass('d-none');
        } else {
            $('.proceed-button').removeClass('d-none');
            $('.show-archi-button').addClass('d-none');
        }
    })
    
});