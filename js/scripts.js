$(document).ready(function() {
  $("#fortune").submit(function(event) {
    event.preventDefault();

    var lucky = 0;
    var unlucky = 0;

    $("input:checkbox:checked").each(function() {
      if ($(this).val() === "lucky") {
        lucky += 1;
      } else {
        unlucky += 1;
      }
    });
    $(".result").hide();

    if (lucky - 1 > unlucky) {
      $("#lucky").show();
    } else if (unlucky - 1 > lucky) {
      $("#unlucky").show();
    } else {
      $("#whatever").show();
    }

  });

});
