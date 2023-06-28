const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const itemsContainer = document.querySelector('.items');

images.forEach((singleImageObj, i) => {
    let itemClasses = `item`;

    if(i == 0){
        itemClasses += ` active`;
    }

    
    itemsContainer.innerHTML +=  //al vecchio elemento ci aggiungo il nuovo 
         `
                <div class="${itemClasses}">
                    <img src="${singleImageObj.image}" alt="">
    
                    <div class="text">
                            <h3>
                               ${singleImageObj.title}
                            </h3>
                            <p>
                                ${singleImageObj.text}
                            </p>
                         </div>
    
                    </div>
         `;
});

currentlyActiveElementIndex = 0; // variabile dello stato del mio applicativo, quale elemento è attivo

// for (let i = 0; i < images.length; i++){
//     console.log(i, images[i])

//     if (i == 0){
//         itemsContainer.innerHTML = itemsContainer.innerHTML + //al vecchio elemento ci aggiungo il nuovo 
//     `
//             <div class="item active">
//                 <img src="${images.images}" alt="">

//                 <div class="text">
//                         <h3>
//                             Titolo
//                         </h3>
//                         <p>
//                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores adipisci consequuntur sint repudiandae, sed numquam minus aliquam. Facilis, aspernatur necessitatibus.
//                         </p>
//                     </div>

//             </div>
//     `;
//     } 
//     else{
//         itemsContainer.innerHTML = itemsContainer.innerHTML + //al vecchio elemento ci aggiungo il nuovo 
//     `
//             <div class="item">
//                 <img src="${images.image}" alt="">

//                 <div class="text">
//                         <h3>
//                             Titolo
//                         </h3>
//                         <p>
//                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores adipisci consequuntur sint repudiandae, sed numquam minus aliquam. Facilis, aspernatur necessitatibus.
//                         </p>
//                     </div>

//             </div>
//     `;
//     }
// };

const allItems = document.querySelectorAll('.item');
console.log('allItems', allItems, typeof allItems)

const nextArrow = document.querySelector('.next')

nextArrow.addEventListener('click',

    function(){
        // If (NON sono all'ultimo elemento(allItems.lenght - 1)) 
        if (currentlyActiveElementIndex < allItems.length - 1){
            console.log('Elemento attivo prima del click su NEXT', currentlyActiveElementIndex);
            //Qui rimuovo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.remove('active');
            currentlyActiveElementIndex++;
            console.log('Elemento attivo dopo del clck su NEXT', currentlyActiveElementIndex);
            //Qui aggiungo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.add('active')
        }
        else{
            console.log('Ora ti fermi');
        }
    }

);

const prevArrow = document.querySelector('.prev')

prevArrow.addEventListener('click',

    function(){
        //se non sono al primo elemento
        if (currentlyActiveElementIndex > 0){
            console.log('elemento attivo prima del click su PREV', currentlyActiveElementIndex);
            //Qui rimuovo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.remove('active');
            currentlyActiveElementIndex--;
            console.log('Elemento attivo dopo clck su PREV', currentlyActiveElementIndex);
            //Qui aggiungo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.add('active')
        }
        else{
            console.log('Ora ti fermi');
        }
    }

);