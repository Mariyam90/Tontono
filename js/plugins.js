/*global $,alert,console, html*/

$(function () {
    'use strict';
    //Trigger Nice scroll plugins
    
    //change header height
    $('.header').height($(window).height());
    
    
        
  
    $('.header .arrow i').click(function () {
        $('html,body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    $('.hire').click(function () {
        $('html,body').animate({
            scrollTop: $('.ourTeam').offset().top
        }, 1000);
    });
    
    $('.showmore').click(function () {
        $('.ourwork .hidden').fadeIn();
    });
    
    var leftArrow = $('.testimon .fa-chevron-circle-right'),
        rightArrow = $('.testimon .fa-chevron-circle-left');
    function checkclint() {
        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($('client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeOut();
        }
    }
    checkclint();
    $('.testimon i').click(function () {
        if ($(this).hasClass('fa-chevron-circle-right')) {
            $('.testimon .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkclint();
            });
        }
    });
    $('.testimon i').click(function () {
        if ($(this).hasClass('fa-chevron-circle-left')) {
            $('.testimon .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('activ').fadeIn();
                checkclint();
              
            });
        }
    });
    
});