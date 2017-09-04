jQuery(document).ready(function(){

function goTo(){
    var $li = $('.header_nav li a');
    if($(window).width() < 768)  {
        $li = $('.responsive-nav .header_nav li a');        
    }
    $li.eq(0).click(function(){
        var scrollpos = $('#product').offset().top - 120;
        $("html,body").animate({scrollTop: scrollpos},1000);	 
    });
    $li.eq(1).click(function(){
        var scrollpos = $('#about').offset().top - 220;
        $("html,body").animate({scrollTop: scrollpos},1000);	
    });

    $li.eq(2).click(function(){
        var scrollpos = $('#activity').offset().top - 220;
        $("html,body").animate({scrollTop: scrollpos},1000);	
    });
    $li.eq(3).click(function(){
        var scrollpos = $('#partners').offset().top - 220;
        $("html,body").animate({scrollTop:scrollpos},1000);	
    });
    $li.eq(4).click(function(){
        var scrollpos = $('#contacts').offset().top - 100;
        $("html,body").animate({scrollTop: scrollpos},2000);	
    });
}
    goTo();       
    
    $(window).on('scroll',function(){
        var $li = $('.header_nav li a');
        var scrolltop = $('header').offset().top;
        var prod = $('#product').height();
        var prod_off = $('#product').offset().top;
        console.log(scrolltop - prod_off - prod);

        if(scrolltop >= 350 && scrolltop <= 1720) {
          $li.eq(0).addClass('active');
        } else {
            $li.eq(0).removeClass('active');
        }

        if(scrolltop >= 1721 && scrolltop <= 2440) {
            $li.eq(1).addClass('active');
        } else {
            $li.eq(1).removeClass('active');
        }

        if(scrolltop >= 2441 && scrolltop <= 3260) {
            $li.eq(2).addClass('active');
        } else {
            $li.eq(2).removeClass('active');
        }

        if(scrolltop >= 3261 && scrolltop <= 4500) {
            $li.eq(3).addClass('active');
        } else {
            $li.eq(3).removeClass('active');
        }  
        if(scrolltop >= 4501) {
            $li.eq(4).addClass('active');
        } else {
            $li.eq(4).removeClass('active');
        }       

        if($(window).width() > 1200) {
            if(scrolltop >= 50) {
                $('header').removeClass('t_h').addClass('m_h');
            } else {
                $('header').removeClass('m_h').addClass('t_h');
            }
        }                    
    });

    $('#responsive').click(function(){
        if($('.responsive-nav').hasClass('active')) {
            $('.responsive-nav').slideUp();
            $('.responsive-nav').removeClass('active');
        } else {
            $('.responsive-nav').slideDown();
            $('.responsive-nav').addClass('active');
        }
    });
});