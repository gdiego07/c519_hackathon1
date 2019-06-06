$(document).ready(initializeApp);


    
function initializeApp() {

    new DealOneCardToPlayerEachTurn();
    new Plant();
    new MoveCardUpFarmSeasons();
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