$(document).ready(function () {

   $('.header_burger').click(function (event){
       $('.header_burger,.menuBar').toggleClass('active');
       $('body').toggleClass('lock');
   })
   $('.exit').click(function (event){
       $(this).toggleClass('active');
       let id = this.id;

       if (id == "first_exit")
           $('#first_list_info').toggleClass('active');

       if (id == "second_exit")
           $('#second_list_info').toggleClass('active');

       if (id == "third_exit")
           $('#third_list_info').toggleClass('active');

   })
    const $button = document.getElementById('button_consult');
    const $form = document.getElementsByClassName('fourth_container');

    $("#button_consult").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".form_container").offset().top
        }, 500);
    });
    $(".services_button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".container").offset().top
        }, 500);
    });
    $(".soul_button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".fourth_container").offset().top
        }, 500);
    });

    $('.contacts_button').click(function (event){
        $('.contacts_container').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.exit_contacts').click(function (event){
        $('.contacts_container').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $("#phone").mask("+7 (999) 999-99-99");

    $('.send-form').click(function (){

        let form = $(this).closest('form');

        if (form.valid()){
            let actUrl = form.attr('action');
            $.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data){
                    form.find('.status').html('Форма отправлена успешно');
                },
                error: function (){
                    form.find('.status').html('Серверная ошибка');
                }
            });
        }
    });
});






