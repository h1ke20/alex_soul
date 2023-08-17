$(document).ready(function () {
    let width = document.documentElement.clientWidth;
    let body = document.querySelector('body');

    width <= 900 ? body.classList.add('mobile') : body.classList.remove('mobile');

    window.addEventListener('resize', (e) => {
        width = window.innerWidth;
        width <= 900 ? body.classList.add('mobile') : body.classList.remove('mobile');
    });
    
    console.log(document.documentElement.clientWidth);

   $('.header_burger').click(function (event){
       $('.header_burger,.menuBar').toggleClass('active');
       $('body').toggleClass('lock');
   });

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

    $(".button_close").click(function (){
        if ($('.header_burger').hasClass('active')){
            $('.header_burger,.menuBar').toggleClass('active');
            $('body').toggleClass('lock');
        }
        else{
            $('.header_burger,.menuBar').toggleClass('active');
        }
    });

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

    $(".aboutMe_button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".sixth_container").offset().top
        }, 500);
    });

    $('.contacts_button').click(function (event){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".footer_container").offset().top
        }, 500);
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

    $(function (){
        let scroll_timer;
        let displayed = false;
        let $message = $('.scroller');
        let $window = $(window);
        let top = $(document.body).children(0).position().top;

        $window.scroll(function () {
            window.clearTimeout(scroll_timer);
            scroll_timer = window.setTimeout(function () {
                if($window.scrollTop() <= top)
                {
                    displayed = false;
                    $message.fadeOut(100);
                }
                else if(displayed == false)
                {
                    displayed = true;
                    $message.stop(true, true).fadeIn(500).click(function () {
                        $message.fadeOut(100);
                    });
                }
                if ($('.header_burger').hasClass('.active')){
                    $('body').toggleClass('lock');
                }

            }, 100);
        });

        $('.scroller').click(function() {
            window.scrollTo(0, 0);
        });
    })

});






