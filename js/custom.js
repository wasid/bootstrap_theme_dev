// show and hide menu

$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function(){
        
        'use strict';
        
        if ($(window).scrollTop() < 80){
            
            $('.navbar').css({
                
                'margin-top': "-100px",
                'opacity': '0'
                
            });
            
            $('.navbar-default').css({
                
                'background-color':'rgba(59, 59, 59, 0)'
                
            });
        }
        
        else{
            $('.navbar').css({
                
                'margin-top': "0px",
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                
                'background-color':'rgba(59, 59, 59, 0.7)',
                'border-color': '#444'
                
            });
            
             $('.navbar-brand img').css({
                
                'height':'35px',
                'padding-top': '0px'
                
            });
            
             $('.navbar-nav > li > a').css({
                
                'padding-top':'15px'
                
            });
        }
        
    });
    
    // Smooth Scrolling
     'use strict';
    $('.nav-item, .scroll-to-top').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
  
  
//  Active menu item on click
 'use strict';

    $('.navbar-nav li a').click(function() {
        
        'use strict';
       
       $('.navbar-nav li a').parent().removeClass('active');
       
       $(this).parent().addClass('active');
       
    });
    
//  Highlight menu on scroll
 'use strict';

     $(window).scroll(function(){
         
         'use strict';
         
         $('section').each(function(){
             
             'use strict';
             
             var sec_id = $(this).attr('id'); // about, contact, download etc...
             var height = $(this).outerHeight();
             var gtop   = $(this).offset().top - 70;
             
             if($(window).scrollTop() > gtop && $(window).scrollTop() < gtop + height){
                 
                 $(".navbar-nav li a[href='#"+ sec_id + "']").parent().addClass('active');
             }
             
             else{
                 
                 $(".navbar-nav li a[href='#"+ sec_id + "']").parent().removeClass('active');

             }
             
         });
         
     });
     
    //  Add auto padding to header
     'use strict';
    setInterval(function(){
        
        'use strict'
        
        var winheight = $(window).height();
        
        var containerheader = $('.header-container').height();
        
        var toppadding = winheight - containerheader;
        
        $('.header-container').css({
            
            'padding-top' : Math.round(toppadding / 2) + 'px',
            
            'padding-bottom' : Math.round(toppadding / 2) + 'px'
            
        });
        
    }, 10);
    
    // BX Slider
    
     'use strict'
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
        
    });
    
    // Counter Up 
    
    'use strict'
    
    $('.counter-num').counterUp({
    delay: 10,
    time: 2000
    });
    
    // Animation
    
    'use strict'
    
    new WOW().init();
  
});