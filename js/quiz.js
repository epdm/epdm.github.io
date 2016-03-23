
"use strict";

$(document).ready(function(){
  $('.response').hide();

  $('#submit').click(function(e){
    e.preventDefault();

    var all       = $('select.quiz');
    var incorrect = all.filter(function(){
      return $(this).val() !== "correct";
    });
    var correct   = all.not(incorrect);

    incorrect.each(function(){
      $(this).removeClass("label-success");
      $(this).addClass("label-warning");
    });

    correct.each(function(){
      $(this).removeClass("label-warning");
      $(this).addClass("label-success");
    });

    var wrong = incorrect.size();
    if (wrong === 0)
    {
      $(this).attr('disabled', true);
      $(this).html('<span class="glyphicon glyphicon-ok"></span> Great job!');
      $('.response').hide()
                    .removeClass('alert-info')
                    .html("");
    }
    else
    {
      $('.response').show()
                    .addClass('alert-info')
                    .html("Oops, looks like there are " +
                          wrong +
                          " mistakes. Try again?");
    }
  });
});
