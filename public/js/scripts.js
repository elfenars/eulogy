var $target;
var lastIndex = 0;
var randomStuff =
  [
    "I love what I do and I get paid to do it :D",
    "I code for a living :D",
    "Sometimes I see real life in code, just like in The Matrix",
    "Did you know coders are the best lovers?<br> ... and I'm one, so... love me",
    "I like to think of myself as a Hi-Tech Hippie",
    "If you want to see my full CV, check my LinkedIn",
    "People also call me Red, cause I'm a Ginger<br> (if you didn't notice by the pic)",
    "Gingers do have souls, at least I think so...",
    "pssssst!... this web is responsive also, try it on your phone!"
  ];

function changeLead(){
  $target.fadeOut(function() {
    lastIndex = dnr(lastIndex, randomStuff.length);
    var str = randomStuff[lastIndex];
    // var str = randomStuff[8];
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