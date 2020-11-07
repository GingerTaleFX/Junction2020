$(document).ready(function(){

    var fadeInTime = 600;
    var fadeOutTime = 600;
    var popupWindow = $('#user-window');
    var HistoryWindow = $('#history');
    var RulesWindow = $('#rules');

    function fadein(el) {
      $(el).fadeIn(fadeInTime);
    }
    function fadeout(el) {
      $(el).fadeOut(fadeOutTime);
    }

    $('#popup-trigger').on('click touchend', function(){
      fadein(popupWindow);
      $('.btn_start_block').remove();
    })

    $('#history_trigger').on('click touched', function(){
        fadein(HistoryWindow);
    })

    $('#rules_trigger').on('click touched', function(){
        fadein(RulesWindow);
    })


    /* close #popup-window on click of .popup-close */
    /*----------------------------------------------*/

    $('.popup-close_history').on('click touchend', function() {
      fadeout(HistoryWindow);
    });

    $('.popup-close_rules').on('click touchend', function() {
        fadeout(RulesWindow);
      });

    // /* close #popup-window on click a anywhere outside the window*/
    // /*------------------------------------------------------------*/
    // $(document).on('mouseup', function(e) {
    //     if (!popupWindow.is(e.target) // target not container...
    //         && popupWindow.has(e.target).length === 0) // ... nor descendant of container
    //     {
    //     fadeout(popupWindow);
    //     }
    // });

    // /* close #popup-window on pressing ESC*/
    // /*------------------------------------------------------------*/
    // $(document).on('keyup', function(e) {
    //     if (e.keyCode == 27) { // (escape key)
    //     fadeout(popupWindow);
    //     }
    // });

  });