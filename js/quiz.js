
"use strict";

$(document).ready(function(){
  'hello world';

  $('#submit').click(function(e){
    e.preventDefault();

    var q1_correct = $('#q1').val() === 'total-quality-management';
    var q2_correct = $('#q2').val() === 'anthony-walton';

    console.log('test');
    if (q1_correct && q2_correct)
    {
      alert('nice job');
    }
    else
    {
      alert("you're shit mate");
    }
  });
});
