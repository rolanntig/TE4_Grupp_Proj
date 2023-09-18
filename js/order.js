const orderContainer = document.getElementById('orderContainer');
const orderLeft = document.getElementById('left');
const orderRight = document.getElementById('items');
const sub = document.getElementById('sub');
const tot = document.getElementById('tot');
let subcalc = 0;



const menuList = [
    {id:1, image: '../img/chicken-gyoza.jpg',title: 'Chicken Gyoza', price:150, amount:0},
    {id:2, image: '../img/japanese-udon-noodles.jpg', title: 'Udon', price:150, amount:0},
    {id:3, image: '../img/pokebowl.png', title: 'Pokebowl', price:125, amount:0},
    {id:4, image: '../img/Sashimi.png', title: 'Sashimi', price:115, amount:0},
    {id:5, image: '../img/Tempura.png', title: 'Tempura', price:100, amount:0},
    {id:6, image: '../img/Yakitori-6177-I-500x500.jpg', title: 'Yakitori', price:150, amount:0},

];



let menu = menuList.map(item => {
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');
    cardContainer.classList.add('card'+ item.id);

    let cardImg = document.createElement('img');
    cardImg.src = item.image;

    let cardTitle = document.createElement('h3');
    cardTitle.textContent = item.title;

    let cardPrice = document.createElement('h4');
    cardPrice.textContent = item.price + 'kr';

    let cardBtn = document.createElement('button');
    cardBtn.textContent = 'Add To Cart';



    //when pressed adds to card in right
    cardBtn.addEventListener('click', () => {

        
        if(item.amount < 1){
            item.amount++;
            let cartContainer = document.createElement('div');
            cartContainer.classList.add('crtContainer');
            cartContainer.style.display = 'flex';

            let cartImg = document.createElement('img');
            cartImg.src = item.image;
        
            let cartTitle = document.createElement('h3');
            cartTitle.textContent = item.title;
        
            let cartPrice = document.createElement('h4');
            cartPrice.textContent = item.price + 'kr';

            let cartAmount = document.createElement('span');
            cartAmount.id = "test"+item.id;
            cartAmount.textContent = item.amount;





            cartContainer.appendChild(cartImg);
            cartContainer.appendChild(cartTitle);
            cartContainer.appendChild(cartPrice);
            cartContainer.appendChild(cartAmount);
            orderRight.appendChild(cartContainer);

            subcalc += item.price;
            sub.textContent = subcalc + 'kr';
            tot.textContent = subcalc + 'kr';



        }else{
            subcalc += item.price;
            sub.textContent = subcalc + 'kr';
            tot.textContent = subcalc + 'kr';

            item.amount++;
            let cartAmount = document.getElementById('test'+item.id);
            cartAmount.textContent = item.amount;

            console.log(item.amount);
        }

    });



    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardPrice);
    cardContainer.appendChild(cardBtn);
    orderLeft.appendChild(cardContainer);

});