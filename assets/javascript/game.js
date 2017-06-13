$('#myModal').modal('show');


function reset() {
	var StarWar = {
		characterList: [
	    // 1.  array with property and value. including name, image, hp, attackpower, counterattack power
	    

				    {
				        characterName: 'dark vedar',
				        display: '../images/vedar.jpg',
				        HP: 200, 
				        characterPower: 30,
				        enemyPower: 40,
				    },
				    {
				        characterName: 'luke',
				        display: '../images/luke.jpg', 
				        HP: 160,
				        characterPower: 20,
				        enemyPower: 30,
				    },
				    {
				        characterName: 'yoda',
				        display: '../images/yoda.png',
				        HP: 130, 
				        characterPower: 10,
				        enemyPower: 20,
				    },
				    {
				        characterName: 'Han Solo',
				        display: '../images/hansolo.png',
				        HP: 150,
				        characterPower: 20,
				        enemyPower: 25,
				    },
				    {
				        characterName: 'General Grievous',
				        display: '../images/general.jpg',
				        HP: 155,
				        characterPower: 15,
				        enemyPower: 20,
				    },
				   	{
				        characterName: 'Chewbacca',
				        display: '../images/chewbacca.png',
				        HP: 120,
				        characterPower: 15,
				        enemyPower: 30,
				    }
	   			]

	   		}

	   		for(var i=0; i<StarWar.characterList.length; i++)
	   		{
	   			console.log(StarWar.characterList[i].characterName)//obj: starWar.characterList[i]
	   		}

	   	};

	   	reset();

/// var charaalist= 




//on click and hid










/*var storedimages = [
    "../week-4-game/assets/images/darthvader.gif",
    "../week-4-game/assets/images/GeneralGrievous.png",
    "../week-4-game/assets/images/hansolo.png",
    "../week-4-game/assets/images/luke.jpg"
  
];*/




//var imgNames = ['../images/darthvader.jpg', '../images/GeneralGrievous.png', '../images/GeneralGrievous.png', '../images/luke.jpg'];
//console.log(imgNames[0])





/*
var characters = [];
for(var i = 0; i < storedimages.length; i++) {
    var pic = new Image();
    pic.src = storedimages[i];
    characters[i] = pic;
console.log(characters[i])
}
*/
//get teh character to appear ont eh div first and then do the attack 

//select your character--> will display all four characters using jquery


// select your character --> when click on the character, a function will be called to created a div with that/your character and another div that contain remainding 3 characters
//select defender --> When click on the remainding 3 characters, a function will be called to remove the chosen defender into a new div below the previous div. 
// attack- each imagewill have attr(health point, attack power, counterattack)
// if statemnt to record the increment 

 ///<div id="mydiv" data-atkPower="10" data-healthPoints =  "20" data-counterAtk = "30" ></div>
