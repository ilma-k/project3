function changeBackgorund(x){
  x.style.background = "#406343";
  document.getElementById("name").style.color = "#FFF";
}

function unchangeBackgorund(x){
  x.style.background = "#91C788";
  document.getElementById("name").style.color = " #1b4332"
}

function showMap() {
  var x = document.getElementById("map");
  var y = document.getElementById("btn");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  switch(y.innerHTML){
    case "Hide a map":
          y.innerHTML ="Show a map";
      break;
    case "Show a map":
      y.innerHTML ="Hide a map";
      break;
  }
}

$(document).ready(function() {
  $(".bio").css("font-size","17px");
});




$(document).ready(function(){
  $(".profilepic").click(function(){
    var div = $(".profilepic");
    div.animate({height: '350px', width: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '200px', height: '250px', opacity: '1'}, "slow");
  });
});

$(document).ready(function(){
  $(".hob").click(function(){
    $(".hobby").slideDown();
  });
});


function changeColor(){
  var x = document.getElementById("lang");
  var y = x.getElementsByClassName("namelang");
  for (i = 0; i < y.length; i++) {
    y[i].style.color = "#081c15";
  }
}

$(document).ready(function() {
  $('.accordion-item').hide();
  $('.accordion-header').click(function() {
  $(this).next('.accordion-item').toggle(500);
    return false;
  });
});

var quote = {
  text: 'How honorable is knowledge that one who does not have it says he does, and how dishonorable is ignorance, that the one who has it says he does not',
  author:'Imam Ali(AS)'
};

var write1 = document.getElementById('quote');
write1.innerHTML = quote.text;
