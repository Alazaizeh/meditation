var Name = prompt('Please enter your name');
alert("Welcome " +Name );

if (confirm("Would you like to visit our Meditation guide ?")) {
  window.location.href ="howto.html";
} else {
  var x = prompt("Do you like 'dogs' or 'cats'?")
  if(x=="dogs"){
  var image = '<img src="https://i.ibb.co/tPn3qxM/82842a3426446a5db6b9d34446cf7c97-removebg-preview.png" alt= "dog"/>';
  document.write(image);
  }
  else if(x=="cats"){
  var image = '<img src="https://i.ibb.co/bQQKXBM/meditating-cat-illustrated-greetings-card-matt-witt-illustration-removebg-preview.png" alt= "cat"/>';
  document.write(image);
  }
}

