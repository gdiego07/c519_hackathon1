$(document).ready(initializeApp);

var coinAction;   
function initializeApp() {

    new DealOneCardToPlayerEachTurn();
    new Plant();
    new MoveCardUpFarmSeasons();

    coinAction = new takeCoinAction();

    new UserAnimalCards();
    new CompareFeedToHarvest();
    new BuyCropCard();
}

class UserAnimalCards {
    constructor() {
        this.sadFace = true;
        $(".playerAnimalCard").on("click", this.getSadFaceAnimal);
        $(".playerAnimalCard").on("click", this.getAnimalTail);

    }

    getSadFaceAnimal() {
        $('.frontAnimalCard').text('cowSadFace -3');
        $('.frontAnimalCard').addClass('sadcowimage');
        console.log('Sad')

    }

    getAnimalTail() {
        $('.tailAnimalCard').text('cowTail');
        console.log('Im a tail')
    }

    addHappyFace() {
        $(".frontAnimalCard").text("cowHappyFace");
    }
}
class DealOneCardToPlayerEachTurn {

    constructor() {
        $(".playerCropCard").text("carrot click to plant");
        $('.playerCropCard').addClass('carrotimage')
    }

    changeCard() {

    }

}
class Plant {
  
    constructor(click) {
        $(".playerCropCard").on("click", this.plant);
    }

    plant() {
        $(".spring").append(" carrot has been planted");
        $(".playerCropCard").text("no cards");
        $('.playerCropCard').removeClass('carrotimage');
        $('.spring').addClass('carrotimage');
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
        $('.spring').removeClass('carrotimage');
        $(".summer").append(" carrot can be harvest");
        $('.summer').addClass('carrotimage');

    }
    moveUpToAutumn(){
        $(".summer").text("summer");
        $('.summer').removeClass('carrotimage');
        $(".autumn").append(" carrot harvest in autumn");
        $('.autumn').addClass('carrotimage');
    }
    storeInFarm(){
        $(".autumn").text("autumn");
        $('.autumn').removeClass('carrotimage');
        $('.farmBoard').addClass('carrotimage');
        $(".farmBoard").append(" carrot ready to buy feed card");
        $(".farmBoard").addClass("carrot")
    }
       
}
class takeCoinAction {
    constructor () {
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
class CompareFeedToHarvest {

    constructor() {
        $(".feedingCard1").on("click", this.compareCards);
        $('.frontAnimalCard').removeClass('sadcowimage');

    }

    compareCards() {
        if ($(".farmBoard").hasClass("carrot")&& $(".feedingCard1").hasClass("carrot")) {
            $(".frontAnimalCard").text("happy cow 9000");
            $('.farmBoard').removeClass('carrotimage');
            $('.frontAnimalCard').removeClass('sadcowimage');
            $('.frontAnimalCard').addClass('happycowimage');
            alert('Your cow was fed, you win!');

        }
    }
}
class BuyCropCard {

    constructor(){
        $(".CropCard1").on("click",this.buyCropCard)
    }
    buyCropCard(){
        if ($(".moneySack").text()>=1) {
            $(".playerCropCard").text("carrot");
          var x=  $(".moneySack").text();
          var y = parseInt(x);
          var z = --y;
          $(".moneySack").text(z);


        }
    }
}










