$(document).ready(initializeApp);

var coinAction;
function initializeApp() {
 coinAction = new takeCoinAction();
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