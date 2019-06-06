$(document).ready(initializeApp);

var coinAction;   
function initializeApp() {

    new DealOneCardToPlayerEachTurn();
    new Plant();
    new MoveCardUpFarmSeasons();
    coinAction = new takeCoinAction()
}

class DealOneCardToPlayerEachTurn {

    constructor(){
        $(".playerCropCard").text("carrot click to plant");
    }

    changeCard (){

    }

}
class Plant {
  
    constructor(click) {
        $(".playerCropCard").on("click", this.plant);
    }

    plant() {
        $(".spring").append(" carrot has been planted");
        $(".playerCropCard").text("no cards");
    }
}

class MoveCardUpFarmSeasons {

    constructor(){
        $(".spring").on("click",this.moveUpToSummer);
        $(".summer").on("click",this.moveUpToAutumn);
        $(".autumn").on("click",this.storeInFarm);
    }

    moveUpToSummer(){
        $(".spring").text("spring");
        $(".summer").append(" carrot can be harvest");
    }
    moveUpToAutumn(){
        $(".summer").text("summer");
        $(".autumn").append(" carrot harvest in autumn");
    }
    storeInFarm(){
        $(".autumn").text("autumn");
        $(".farmBoard").append(" carrot harvest in autumn");
    }
       
}
class takeCoinAction {
    constructor() {
         this.moneyAmount = 2;
         $('.moneySack').text(this.moneyAmount);
        $('.takeCoin').on('click', this.addCoin.bind(this));
    }


    addCoin() {
        console.log('addcoin');
           this.moneyAmount += 1 ;
        $('.moneySack').text(this.moneyAmount);
        console.log(this.moneyAmount)

    }
}