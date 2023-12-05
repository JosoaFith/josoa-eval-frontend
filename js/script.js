
const VEHICULES = [
    {
        "id": 1,
        "image": "vehicule1.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 2,
        "image": "vehicule2.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 3,
        "image": "vehicule3.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 4,
        "image": "vehicule4.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 5,
        "image": "vehicule1.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 6,
        "image": "vehicule2.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 7,
        "image": "vehicule3.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 8,
        "image": "vehicule4.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 9,
        "image": "vehicule1.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    },
    {
        "id": 10,
        "image": "vehicule2.png",
        "model":"peugeot",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg",
            "vignette3.jpg"
        ]
    }
]

const vehicules = VEHICULES;
const carsItems = document.querySelector('#cars-items');
const filter = document.querySelector('#filter div');

filter.insertAdjacentHTML('beforebegin', `<p>${vehicules.length}  résultats</p>`);

for(let i = 0;i < vehicules.length;i++) {
    carsItems.insertAdjacentHTML('beforeend', `
    <li class="car-item flex align-center w-100">
                    <div class="illustration flex">
                        <i class="fa-solid fa-circle-chevron-left fa-2x arrow-left"></i>
                        <img src="images/${vehicules[i].image}" alt="vehicule">
                        <i class="fa-solid fa-circle-chevron-right fa-2x arrow-right"></i>
                    </div>
                    <div class="car-about">
                        <h3>${vehicules[i].model}</h3>
                        <p>${vehicules[i].description}</p>
                        <p>${vehicules[i].price} € - Agence de ${vehicules[i].agence}</p>
                        <button>Réserver et Payer</button>
                    </div>
                </li>
    `);

}

const btMenu = document.getElementById('menu');
const navigation = document.querySelector('#primary-nav');

const fctNav = () => {
    // ***** FLAG ******
    let i = 0;
    btMenu.addEventListener('click', (e) => {
        btMenu.classList.toggle("change");
        if(i == 0){
            navigation.style.animation = "anim-nav 1s forwards";
            i = 1;                 
        } else {
            navigation.style.animation = "anim-nav-reverse 1s forwards";
            i = 0;
        }         
    });
}

fctNav();

