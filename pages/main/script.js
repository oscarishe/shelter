var pets = [
  {
    name: "Jennifer",
    img: "./assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: [
      "none"
    ],
    diseases: [
      "none"
    ],
    parasites: [
      "none"
    ]
  },
  {
    name: "Sophia",
    img: "./assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: [
      "parvovirus"
    ],
    diseases: [
      "none"
    ],
    parasites: [
      "none"
    ]
  },
  {
    name: "Woody",
    img: "./assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: [
      "adenovirus",
      "distemper"
    ],
    diseases: [
      "right back leg mobility reduced"
    ],
    parasites: [
      "none"
    ]
  },
  {
    name: "Scarlett",
    img: "./assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: [
      "parainfluenza"
    ],
    diseases: [
      "none"
    ],
    parasites: [
      "none"
    ]
  },
  {
    name: "Katrine",
    img: "./assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: [
      "panleukopenia"
    ],
    diseases: [
      "none"
    ],
    parasites: [
      "none"
    ]
  },
  {
    name: "Timmy",
    img: "./assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: [
      "calicivirus",
      "viral rhinotracheitis"
    ],
    diseases: [
      "kidney stones"
    ],
    parasites: [
      "none"
    ]
  },
  {
    name: "Freddie",
    img: "./assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: [
      "rabies"
    ],
    diseases: [
      "none"
    ],
    parasites: [
      "none"
    ]
  },
  {
    name: "Charly",
    img: "./assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: [
      "bordetella bronchiseptica",
      "leptospirosis"
    ],
    diseases: [
      "deafness",
      "blindness"
    ],
    parasites: [
      "lice",
      "fleas"
    ]
  }
]
const closeBurgerMenu =() => {
	    document.getElementsByClassName('hidden_menu')[0].className="hidden_menu";
      document.getElementsByClassName('hidden_menu')[0].style.visibility="hidden";
      document.getElementsByClassName('logo')[0].style.visibility="visible";
      document.getElementById('hidden_menu_field').style.display="none";
      burger.className="burger_hidden";
      document.querySelector('body').style.overflow = "visible";
}
window.onload = function() {
let start = document.getElementById('start_arrow');
let arr = [];
  while(arr.length < 3){
      var r = Math.floor(Math.random() * (8)) + 0;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
for(let i=0;i<3;i++)
start.insertAdjacentHTML('afterend', `<div class="pets_card" onclick="popup('${pets[arr[i]].name}')"><div class="card_image" style="background-image:url(${pets[arr[i]].img})" ></div><div class="card_name">${pets[arr[i]].name}</div><div class="card_button" >Learn more</div></div>`) //katrine jennifer woody

var burger = document.getElementById('burger');
burger.addEventListener("click", function(){
    if(burger.className=="burger_hidden") {
      let hiddenMenu = document.getElementsByClassName('hidden_menu')[0];
      hiddenMenu.style.visibility="visible";
      hiddenMenu.style.opacity=1;
      hiddenMenu.className="hidden_menu opened";
      document.getElementById('hidden_menu_field').style.display="block";
      document.getElementsByClassName('logo')[0].style.visibility="hidden";
      burger.className="burger_hidden active";
      document.querySelector('body').style.overflow = "hidden";
    }
    else if (burger.className=="burger_hidden active") {
      document.getElementsByClassName('hidden_menu')[0].className="hidden_menu";
      document.getElementsByClassName('hidden_menu')[0].style.visibility="hidden";
      document.getElementsByClassName('logo')[0].style.visibility="visible";
      document.getElementById('hidden_menu_field').style.display="none";
      burger.className="burger_hidden";
      document.querySelector('body').style.overflow = "visible";
    }

});

}
const slide = () => {
	let startArrow =  document.getElementById('start_arrow');
	let currentNames = [];
	for(item of document.querySelectorAll('.card_name'))
		currentNames.push(item.innerHTML);
	console.log(currentNames);
	let n = currentNames.length;
	let newPets = pets.filter(obj=> !currentNames.includes(obj.name));
	document.querySelectorAll(".pets_card").forEach(el => el.remove());
	let arr = [];
	while(arr.length < n){
	    var r = Math.floor(Math.random() * (8-n)) + 0;
	    if(arr.indexOf(r) === -1) arr.push(r);
	}
	for(let i=0;i<arr.length;i++) {
			startArrow.insertAdjacentHTML('afterend', `<div class="pets_card" onclick="popup('${newPets[arr[i]].name}')"><div class="card_image" style="background-image:url(${newPets[arr[i]].img})" ></div><div class="card_name">${newPets[arr[i]].name}</div><div class="card_button">Learn more</div></div>`)
			n--;
		
		if(n==0)
			break;
	}
}
const popup = (petName) => {
	let popup = document.getElementById('popup');
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
  let pet = pets.find(obj => obj.name == petName);
  document.getElementById('popup_pet_name').innerHTML= `<h3>${pet.name}</h3>`;
  document.getElementById('popup_pet_description').innerHTML = `<h5>${pet.description}</h5>`;
  document.getElementById('popup_image').style.backgroundImage = `url(${pet.img}`;
  document.getElementById('popup_pet_type').innerHTML = `<h4>${pet.type} - ${pet.breed}</h4>`
  document.getElementById('popup_pet_list').innerHTML = `<ul>
                <li><b>Age</b>: ${pet.age}</li>
                <li><b>Inoculations</b>: ${pet.inoculations}</li>
                <li><b>Diseases</b>: ${pet.diseases}</li>
                <li><b>Parasites</b>: ${pet.parasites}</li>
              </ul>`;
  document.querySelector('body').style.overflow = "hidden";
}
const closePopup = () => {
  let popup = document.getElementById('popup');
  popup.style.visibility = "hidden";
  popup.style.opacity = 0;
  document.querySelector('body').style.overflow = "visible";
}

window.addEventListener('resize', function(event){
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  if (mediaQuery.matches && document.getElementsByClassName('hidden_menu')[0].style.visibility == "visible") {
    closeBurgerMenu();
}
});
