/*Reference https://developer.mozilla.org/fr/docs/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript*/


/*let myElements = document.querySelectorAll('li');

myElements.forEach(function(element) {
  if (element.textContent === 'builders') {
    element.textContent = 'Hello world!';
  }
});
*/

let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox-icon2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});
$('.btn').hover(function(){
  $('.btn').show().animate({'font-size':'3em'},1000)
});

$('.display3').hover(function(){
	$('.display3').animate({  borderSpacing: -360 }, {
		step: function(now,fx) {
			  $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			  $(this).css('-moz-transform','rotate('+now+'deg)');
			  $(this).css('transform','rotate('+now+'deg)');
			  $(this).css('font-size','green');

		},
		duration:'slow'
	});
});


$('.edit').click(function() {
  setUserName();
  
});
$('.first-title').click(function() {
  setUserName();
  
});


let myHeading = document.querySelector('h1');
let name = document.createElement("div");

function setUserName() {
  let myName = prompt('Veuillez saisir quelque chose d\' autre à la place.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Hello ';
  name.textContent = myName+" !";
  name.classList.add("titlename");
  myHeading.appendChild(name);
  name.addEventListener('click', function() {
	setUserName();
  });
}

/*
  : ;
  : ;

  : ;
  transform-origin:;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Hello ' + storedName;
}*/

let myButton = document.querySelector('button');

myButton.addEventListener('click', function() {
  setUserName();
});
