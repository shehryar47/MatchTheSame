
const items=[
    {"name":"burger","imgPath":"./images/burger.png"},
    {"name":"pie","imgPath":"./images/pie.png"},
    {"name":"egg","imgPath":"./images/egg.png"},
    {"name":"burger-d","imgPath":"./images/burger-d.png"},
    {"name":"taco","imgPath":"./images/taco.png"},
    {"name":"coffee","imgPath":"./images/coffee.png"},
    {"name":"burger","imgPath":"./images/burger.png"},
    {"name":"pie","imgPath":"./images/pie.png"},
    {"name":"egg","imgPath":"./images/egg.png"},
    {"name":"burger-d","imgPath":"./images/burger-d.png"},
    {"name":"taco","imgPath":"./images/taco.png"},
    {"name":"coffee","imgPath":"./images/coffee.png"},
]

let selectCards=[];
let selectCardsId=[];
let score=[];

items.sort(()=> 0.5-Math.random());

const result =document.querySelector('#score');
const grid=document.querySelector("#container");


function createGrid(){
    for(let i= 0;i<items.length; i++){
    card=document.createElement('img');
    card.setAttribute('src',"./images/blank.jpg");
    card.setAttribute('id',i);
    card.addEventListener('click',clickCard)
    grid.appendChild(card);
    
    
    }
}

function clickCard(){
    cardId= this.getAttribute('id');
    cardClicked= items[cardId].imgPath;
    this.setAttribute('src',cardClicked);
    selectCardsId.push(cardId);
    console.log(selectCardsId);
    selectCards.push(items[cardId].name);
    console.log(selectCards);
    if(selectCards.length===2){
        setTimeout(checkCard,500);
    }
   
}

function checkCard(){
    let allCards=document.querySelectorAll('#container img');
    const optionOne = selectCardsId[0];
    const optionTwo = selectCardsId[1];
    
    if(optionOne==optionTwo){
        alert("Same");
        allCards[selectCardsId[0]].setAttribute('src',"./images/blank.jpg");
        allCards[selectCardsId[1]].setAttribute('src',"./images/blank.jpg");
    }

    else if(selectCards[0]==selectCards[1] && optionOne!=optionTwo){
        allCards[selectCardsId[0]].setAttribute('src',"./images/tick.jpg");
        allCards[selectCardsId[1]].setAttribute('src',"./images/tick.jpg");
        allCards[selectCardsId[0]].removeEventListener('click',clickCard);
        allCards[selectCardsId[1]].removeEventListener('click',clickCard);
        score.push(selectCards);
        
    }
    
    
    else{
        allCards[selectCardsId[0]].setAttribute('src',"./images/blank.jpg");
        allCards[selectCardsId[1]].setAttribute('src',"./images/blank.jpg");
    }
    selectCards=[];
    selectCardsId=[];
    result.textContent=score.length;
    if(score.length===items.length/2){
        result.textContent=("You won");
        setTimeout(reload,3000);
    }
}

function reload(){
    location.reload(); 
}

createGrid();



