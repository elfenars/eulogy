var $target;
var lastIndex = 0;
var randomStuff =
  [
    "Work is not only what you get paid to do<br> ... but the money really helps to continue doing it",
    "Did you know coders are the best lovers?<br> ... maybe not, but it rhymes",
    "I like to think of myself as a Hi-Tech nature lover",
    "If you want to see my full CV, check my LinkedIn",
    "People also call me Red, cause I'm a Ginger<br> (if you didn't notice by the pic)",
    "Gingers DO have souls... true story"
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
