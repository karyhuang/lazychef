// alert('testing');

$(document).ready(function(){
    
    // hide the banner text first then display after a short while
    $('p.lead').hide();
    setTimeout(function(){
        $('#home-about').slideDown(500);
    }, 500);
    setTimeout(function(){
        $('p.lead').slideDown(1200);
    }, 1000);
    

    // underline the ready time when pointing to its perspective section
    function underlineTime(){
      $('.brf-row').on({
          'mouseenter':function(){
            $(this).find('#time').css('border-bottom', '2px solid #e53d3d');
          },
          'mouseleave':function(){
            $(this).find('#time').css('border-bottom', '2px solid white');
          }
      });
      $('.lunch-desc-row .desc').on({
          'mouseenter':function(){
          $(this).find('#time').css('border-bottom', '2px solid #e53d3d');
        },
          'mouseleave':function(){
          $(this).find('#time').css('border-bottom', '2px solid white');
        }
      });
    };
    underlineTime();
    
    
    // fade in the food categories on scroll when come into view
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fadeInView').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight(); 
            // use outerHeight to fade in when the whole object is in view;
            // use height to fade in when part of the object comes into view
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }    
        }); 
    });
    
    // food category accordion-like tab switch 
    $('#category-brf').click(function(){
        origin = $(this).parent().parent().next();
        new1 = $('#breakfast');
        origin.html(new1.html());
        origin.prop('id', 'breakfast');
        $(this).css('background-color', '#e53d3d').css('color', 'white');
        $(this).siblings().css('backgroundColor','white').css('color','black');
        underlineTime();    
    }); 

    $('#category-lun').click(function(){
        origin = $(this).parent().parent().next();
        new1 = $('#lunch');
        origin.html(new1.html());
        origin.prop('id', 'lunch');
        $(this).css('background-color', '#e53d3d').css('color', 'white');
        $(this).siblings().css('backgroundColor','white').css('color','black');
        underlineTime();
    });

    $('#category-din').click(function(){
        origin = $(this).parent().parent().next();
        new1 = $('#dinner');
        origin.html(new1.html());
        origin.prop('id', 'dinner');
        $(this).css('background-color', '#e53d3d').css('color', 'white');
        $(this).siblings().css('backgroundColor','white').css('color','black');
    });
    
});


