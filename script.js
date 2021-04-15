

var Name = prompt('Please enter your name');
alert("Welcome " +Name );

if (confirm("Would you like to visit our Meditation guide ?")) {
  window.location.href ="howto.html";
} else {
  var animal = prompt("OK !! Do you like 'dogs' or 'cats'?")
  
  while( animal!="cats" && animal!="dogs") {
  animal = prompt("OK !! Do you like 'dogs' or 'cats'?")
  }

  var x = prompt("How much do you like "+animal+" 1 - 10?")
  while( x<0 || x>10) {
  x = prompt("How much do you like "+animal+" 1 - 10?")
  }


  if(animal=="dogs"){
  var image = '<img src="https://i.ibb.co/tPn3qxM/82842a3426446a5db6b9d34446cf7c97-removebg-preview.png" alt= "dog"/>';
  for(var i=0;i<x;i++)
  {
    document.write(image);
  }
  window.scrollTo(0,document.body.scrollHeight);
  }
  else if(animal=="cats"){
  var image = '<img src="https://i.ibb.co/bQQKXBM/meditating-cat-illustrated-greetings-card-matt-witt-illustration-removebg-preview.png" alt= "cat"/>';
  for(var i=0;i<x;i++)
  {
    document.write(image);
  }
  window.scrollTo(0,document.body.scrollHeight);
  }
}

