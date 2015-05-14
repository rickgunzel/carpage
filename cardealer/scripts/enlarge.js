             $(function () {
    $('[id^=thumb]').mouseenter(function () {
      
    $(this).css("cursor", "pointer");
    $(this).animate({
        width: "50%",
        height: "50%"
    }, 'slow');
        });
  });
             $(function () {
    $('[id^=thumb]').mouseout(function () {
      
    $(this).css("cursor", "pointer");
    $(this).animate({
        width: "30%",
        height: "30%"
    }, 'slow');
        });
  });


