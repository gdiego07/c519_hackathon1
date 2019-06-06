$(document).ready(initializeApp);

var coinAction;
function initializeApp() {
dealcard
    new DealOneCardToPlayerEachTurn();
    new Plant();
    coinAction = new takeCoinAction();
}
class DealOneCardToPlayerEachTurn {

    constructor(){
        $(".playerCropCard").text("carrot click to plant");
    }

    changeCard (){

    }

}
class Plant {

    constructor(click){
        $(".playerCropCard").on("click",this.plant);
    }
    plant(){
        $(".spring").append(" carrot has been planted");
        $(".playerCropCard").text("no cards");
      
      
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