$('#myModal').modal('show');
chosencharacter=false//flag -state of application 

//function reset() {
	/*var StarWar = {
		characterList: [
	    // 1.  array with property and value. including name, image, hp, attackpower, counterattack power
	    

				    {
				        characterName: "'dark vedar'",
				        display: 'assets/images/vedar.jpg',
				        HP: 200, 
				        characterPower: 30,
				        enemyPower: 40,
				    },
				    {
				        characterName: 'luke',
				        display: '"assets/images/luke.jpg"', 
				        HP: 160,
				        characterPower: 20,
				        enemyPower: 30,
				    },
				    {
				        characterName: 'yoda',
				        display: 'assets/images/yoda.png',
				        HP: 130, 
				        characterPower: 10,
				        enemyPower: 20,
				    },
				    {
				        characterName: 'Han Solo',
				        display: 'assets/images/hansolo.png',
				        HP: 150,
				        characterPower: 20,
				        enemyPower: 25,
				    },
				    {
				        characterName: 'General Grievous',
				        display: 'assets/images/general.jpg',
				        HP: 155,
				        characterPower: 15,
				        enemyPower: 20,
				    },
				   	{
				        characterName: 'Chewbacca',
				        display: 'assets/images/chewbacca.png',
				        HP: 120,
				        characterPower: 15,
				        enemyPower: 30,
				    }
	   			]

	   		}

	   		for(var i=0; i<StarWar.characterList.length; i++)
	   		{
	   			console.log(StarWar.characterList[0].display)//obj: starWar.characterList[i]
	   		}

	   	};*/

	   	var characterList = 
	   	
  		[
  		 { name: "Darth Vador", hp: 34, power: 45,  counterattack:30, image: 'assets/images/vedar.jpg'   },
    	{ name: "Luke Skywalker", hp: 35, power: 48,counterattack:30, image: "assets/images/luke.jpg"  },
    	{ name: "yoda", hp: 55, power: 58,counterattack:40, image: "assets/images/yoda.png"  },
		
		];

		
		
for(var i=0; i<characterList.length; i++){
	var imagespan= $("<span>");
	var avatorimage = $("<img>");
	avatorimage.addClass("newimage");
	avatorimage.attr("src", characterList[i].image);
	avatorimage.attr("data-id", i);
	avatorimage.click(choicecharacter);
	imagespan.append(avatorimage);
	$("#characters").append(imagespan);


}
	   //
function choicecharacter (event){
	var image = $(event.target);

	
var character=characterList[(image.attr("data-id"))-0]


//characterList[image.target.data("id")]; // get chcaracter represent by the image is click .. 
console.log(event.target)
console.log(character)
	if( chosencharacter){
		makeEnemy(character)

	}
	else {
		makePlayer(character)
		chosenCharacter=true;
	}

}

//created mycharacter 
// enemies 
// 
