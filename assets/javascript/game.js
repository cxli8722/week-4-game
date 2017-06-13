$('#myModal').modal('show');


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
	   	{
    	darthVader: { name: "Darth Vador", hp: 34, power: 45,  counterattack:30, image: 'assets/images/vedar.jpg'   },
    	lukeSkywalker: { name: "Luke Skywalker", hp: 35, power: 48,counterattack:30, image: "assets/images/luke.jpg"  },
    	yoda: { name: "yoda", hp: 55, power: 58,counterattack:40, image: "assets/images/yoda.png"  },
		
		};

		console.log (characterList.darthVader.image)
		

	   	//reset();

	   //.	<img class="avatorstorage" src="assets/images/vedar.jpg" alt="DarthVedar">

 	var avatorimages = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    	avatorimages.addClass("newimages");

    // Each imageCrystal will be given a src link to the crystal image
   	 	avatorimages.attr("src", characterList.darthVader.image);


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
   	 	
  	  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    	$("#Characters").append(avatorimages);




	var battlecharacter = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    	avatorimages.addClass("newimages");

    // Each imageCrystal will be given a src link to the crystal image
   	 	avatorimages.attr("src", characterList.darthVader.image);


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
   	 	
  	  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    	$("#yourcharacterimage").append(avatorimages);

    	




	var avatorimages2 = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    	avatorimages2.addClass("newimages");

    // Each imageCrystal will be given a src link to the crystal image
   	 	avatorimages2.attr("src", characterList.lukeSkywalker.image);
   	 	$("#Characters2").append(avatorimages2);
   	 	


	var avatorimages3 = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    	avatorimages3.addClass("newimages");

    // Each imageCrystal will be given a src link to the crystal image
   	 	avatorimages3.attr("src", characterList.yoda.image);





    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
   	 	
  	  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    	$("#Characters3").append(avatorimages3);

	$(".newimages").on("click", function() {

    // Clicking the button triggers an alert message.
   		
   		
        $("#Characters2").hide();
       // alert("You clicked on Darth luke!");

  });

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
