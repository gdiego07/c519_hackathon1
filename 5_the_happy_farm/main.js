$(document).ready(initializeApp);


function initializeApp() {
    new DealOneCardToPlayerEachTurn();
    new Plant();
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
}