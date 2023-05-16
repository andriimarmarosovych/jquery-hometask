$(document).ready(function() {

    $("h2.head").each(function() {
      $(this).css("background-color", "green");
    });
  

    $("h2.head").each(function() {
      $(this).find(".inner").each(function() {
        $(this).css("font-size", "35px");
      });
    });
  });