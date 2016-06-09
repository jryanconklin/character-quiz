$(document).ready(function(){
  $("form#lotr").submit(function(event){
    var character = 0;
    var height = $("input:radio[name=height]:checked").val();
    var beard = $("input:radio[name=beard]:checked").val();
    var weapon = $("input:radio[name=weapon]:checked").val();


    if (height === "cloaked" ) {
      character += 5;
    } else if ( height === "tall" ) {
      character += 3;
    } else if ( height === "short" ) {
      character += 1;
    }
    if (beard === "long" ) {
      character += 5;
    } else if ( beard === "groomed" ) {
      character += 3;
    } else if ( beard === "smooth" ) {
      character += 1;
    }
    if (weapon === "staff" ) {
      character += 5;
    } else if ( weapon === "longsword" ) {
      character += 3;
    } else if ( weapon === "shortsword" ) {
      character += 1;
    }

    if ( character === 7 && beard === "long" ) {
      alert("Did you shave your feet and paste it to your face? You're a Bearded Baggins!");
    } else if ( character < 4 ) {
      alert("You are Frodo Baggins!");
    } else if ( character < 10 ) {
      alert("You are Aragorn!");
    } else if ( character < 16 && height === "short" ) {
      alert("You are a very short Gandalf the White!");
    } else if ( character < 16 ) {
      alert("You are Gandalf the White");
    }
    console.log(character);


    event.preventDefault();
  });
});
