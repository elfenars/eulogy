var $target;
var lastIndex = 0;
var randomStuff =
  [
    "I love what i do and i get paid to do it :D.",
    "I code for a living :D.",
    "Sometimes i see real life in code, just like in The Matrix.",
    "Did you know coders are the best lovers?<br> ...and i'm one, so... love me.",
    "I like to think of myself as a Hi-Tech Hippie."
  ];

function changeLead(){
  $target.fadeOut(function() {
    // var str = randomStuff[Math.floor((Math.random()*randomStuff.length)+1)];
    lastIndex = dnr(lastIndex, randomStuff.length);
    var str = randomStuff[lastIndex];
    $target.html(str);
    $target.fadeIn();
  });
}

// Do not repeat
function dnr(lastIndex, length){
  var randIndex = Math.floor((Math.random()*length));

  while (randIndex == lastIndex){
    var randIndex = Math.floor((Math.random()*length));
  }
  return randIndex;
}