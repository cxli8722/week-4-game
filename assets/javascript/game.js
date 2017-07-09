$('#myModal').modal('show');
var chosencharacter; //flag -state of application 
var chosenenemies;

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
	   	//change to object
	   	// for loop in fucntion 

	   	var characterList = {
	   	
  		
  		 "DarthVador": { name: "Darth Vador", hp: 34, power: 45,  counterattack:30, image: 'assets/images/vedar.jpg'   },
    	"LukeSkywalker": { name: "Luke Skywalker", hp: 35, power: 48,counterattack:30, image: "assets/images/luke.jpg"  },
    	"Yoda": { name: "yoda", hp: 55, power: 58,counterattack:40, image: "assets/images/yoda.png"  }
    };
	

	var emeny=[];
	//var "key" be anything 

	for ( var key in characterList)
	{

		console.log("key"+key)
	var imagespan= $("<span>");
	var avatorimage = $("<img>");
	avatorimage.addClass("newimage");
	avatorimage.attr("src", characterList[key].image);
	avatorimage.attr("data-id", key)
	console.log(avatorimage)

	avatorimage.click(choicecharacter)
	imagespan.append(avatorimage);
	$("#characters").append(imagespan);


	}
		

	   




function choicecharacter ()
{


	chosencharacter= characterList[$(this).attr("data-id")]//this avatorimage.click
	console.log(chosencharacter)//chosencharacter=object
	$("#yourcharacterimage").append(this)
		$("#avator").text("Please select your enemy");
	//off function will turn off even handler so that when the user chose a character they can't clikc on it again. 
	$( this ).off();
	if (chosencharacter=false){
		
	}
	//remove the event for the chosen character - can do same one for enmeies 
	//if chosencharacter=flase - 
	

	
	//chosenenemies =same as above 

	};
	

//};

//function attack (){
	
//	if(chosencharacter && chosenenemies){
//		choseenemies.hp-= chosencharacter.power 
//	chosencharacter.power+=10;


//	}
//}



// if hit attack button  defener hp - user power && user hp - defender power  
// user power + 10
//have to updated both character power and hp 

// 



//