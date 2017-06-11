







var storedimages = [
    "../week-4-game/assets/images/darthvader.gif",
    "../week-4-game/assets/images/GeneralGrievous.png",
    "../week-4-game/assets/images/hansolo.png",
    "../week-4-game/assets/images/luke.jpg"
  
];



var characters = [];
for(var i = 0; i < storedimages.length; i++) {
    var pic = new Image();
    pic.src = storedimages[i];
    characters[i] = pic;
console.log(characters[i])
}


 var buttons = function () {
    letterButton = document.getElementById("userButton");// go to id=userButton
    letter = document.createElement('ul');// then create ul

    for (var i = 0; i < alphabet.length; i++) { //loop all the letter
      letter.id = 'alphabet';//assign id to new <ul>
      list = document.createElement('li'); //create li
      list.id = 'letter'//assign id to list
      list.innerHTML = alphabet[i];  // will list alla teh alphabet in the array
      letterButton.appendChild(letter);// put letter inside of parent div letterbutton
      letter.appendChild(list);  //put list inside of parent letter


    }
  }
buttons();

//select your character--> will display all four characters using jquery


// select your character --> when click on the character, a function will be called to created a div with that/your character and another div that contain remainding 3 characters
//select defender --> When click on the remainding 3 characters, a function will be called to remove the chosen defender into a new div below the previous div. 
// attack- each imagewill have attr(health point, attack power, counterattack)
// if statemnt to record the increment 

 ///<div id="mydiv" data-atkPower="10" data-healthPoints =  "20" data-counterAtk = "30" ></div>
