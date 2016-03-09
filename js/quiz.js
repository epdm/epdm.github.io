
"use strict";

$(document).ready(function(){
  'hello world';

  $('#submit').click(function(e){
    e.preventDefault();

    var q1_correct = $('#q1').val() === 'Total Quality Management';
    var q2_correct = $('#q2').val() === 'Anthony Walton';

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
