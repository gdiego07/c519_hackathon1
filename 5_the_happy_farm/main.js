$(document).ready(initializeApp);


function initializeApp() {
    new UserAnimalCards();
}
class UserAnimalCards {
    constructor() {
        this.sadFace = true;
        $(".playerAnimalCard").on("click", this.getSadFaceAnimal);
        $(".playerAnimalCard").on("click", this.getAnimalTail);
        
    }
    getSadFaceAnimal() {
        $('.frontAnimalCard').text('cowSadFace -3');
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