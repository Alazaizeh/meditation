var Name = prompt('Please enter your name');
alert("Welcome " + Name);

function ChooseOne(A,B) {
  var ans = "";
  while (ans != A && ans != B) {
    ans = prompt("Do you like '"+A+"' or '"+B+"'?")
  }
  return ans;
}

function DoYouLike(item) {
 var x = -1;
  while (x < 0 || x > 10) {
    x = prompt("How much do you like " + item + " 1 - 10?")
  }
  return x;
}

function DrawImg(alt, link, num) {
  image = '<img src="' + link + '" alt= "' + alt + '"/>';
  for (var i = 0; i < num; i++) {
    document.write(image);
  }
  window.scrollTo(0, document.body.scrollHeight);

}


if (confirm("Would you like to visit our Meditation guide ?")) {
  window.location.href = "howto.html";
} else {

  var animal = ChooseOne("cats","dogs");

  var score = DoYouLike(animal);


  if (animal == "dogs") {
    var link = "https://i.ibb.co/tPn3qxM/82842a3426446a5db6b9d34446cf7c97-removebg-preview.png";

    DrawImg(animal, link, score);
  }
  else if (animal == "cats") {
    var link = "https://i.ibb.co/bQQKXBM/meditating-cat-illustrated-greetings-card-matt-witt-illustration-removebg-preview.png";

    DrawImg(animal, link, score);

  }
}