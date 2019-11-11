class CardFlipper{
    
    card:HTMLDivElement;
    button:HTMLButtonElement; 

    constructor(card:HTMLDivElement,button:HTMLButtonElement){
        this.card = card;
        this.button = button;
        this.button.addEventListener("click",this.FlipCard.bind(this));
    }

    FlipCard(){
        
        if(this.card.style.transform === 'rotateX(180deg)'){
            this.card.style.transform = "rotateX(0deg)";
        }
        else{
            this.card.style.transform = 'rotateX(180deg)';
        }
    }

}

let card = document.getElementById("card");
let button = document.getElementById("flip");

if(button !== null && button instanceof HTMLButtonElement && card !== null && card instanceof HTMLDivElement){
    let CardFlip = new CardFlipper(card,button);
}

