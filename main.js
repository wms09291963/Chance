    // Define the Players
	var player1 = "Player 1";
	var player2 = "Player 2";
    var player3 = "Player 3";
    var player4 = "Player 4";
    var Player5 = "Player 5";

	// Function to change the player name - patterned after code from 
    //https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
    
	function editNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");
        player3 = prompt("Change Player3 name");
        player4 = prompt("Change Player4 name");
        player5 = prompt("Change Player5 name");

		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
        document.querySelector("p.Player3").innerHTML = player3;
        document.querySelector("p.Player4").innerHTML = player4;
        document.querySelector("p.Player5").innerHTML = player5;
	}
	
	// Function to roll the dice patterned from https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
	function rollTheDice() {
		setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			var randomNumber2 = Math.floor(Math.random() * 6) + 1;
            var randomNumber3 = Math.floor(Math.random() * 6) + 1;
            var randomNumber4 = Math.floor(Math.random() * 6) + 1;
            var randomNumber5 = Math.floor(Math.random() * 6) + 1;
            var randomNumber6 = Math.floor(Math.random() * 6) + 1;
            var randomNumber7 = Math.floor(Math.random() * 6) + 1;
            var randomNumber8 = Math.floor(Math.random() * 6) + 1;
            var randomNumber9 = Math.floor(Math.random() * 6) + 1;
            var randomNumber10 = Math.floor(Math.random() * 6) + 1;

            // adds the 2 dice together. 
            let roll_1= randomNumber1+randomNumber6
            let roll_2 = randomNumber2+randomNumber7
            let roll_3 = randomNumber3+randomNumber8
            let roll_4 = randomNumber4+randomNumber9
            let roll_5 = randomNumber5+randomNumber10

			document.querySelector(".img1").setAttribute("src",
                "dice" + randomNumber1 +".png");

			document.querySelector(".img2").setAttribute("src",
				"dice" + randomNumber2 + ".png");

            document.querySelector(".img3").setAttribute("src",
				"dice" + randomNumber3 + ".png");

            document.querySelector(".img4").setAttribute("src",
				"dice" + randomNumber4 + ".png");

            document.querySelector(".img5").setAttribute("src",
				"dice" + randomNumber5 + ".png");    
            document.querySelector(".img6").setAttribute("src",
				"dice" + randomNumber6 + ".png"); 
            document.querySelector(".img7").setAttribute("src",
				"dice" + randomNumber7 + ".png"); 
            document.querySelector(".img8").setAttribute("src",
				"dice" + randomNumber8 + ".png"); 
            document.querySelector(".img9").setAttribute("src",
				"dice" + randomNumber9 + ".png"); 
            document.querySelector(".img10").setAttribute("src",
				"dice" + randomNumber10 + ".png"); 
            


			if (randomNumber1 === randomNumber2) {
				document.querySelector("h4").innerHTML = "Draw!";
			}

			else if (randomNumber1 < randomNumber2) {
				document.querySelector("h4").innerHTML
								= (player2 + " WINS!");
			}

			else {
				document.querySelector("h4").innerHTML
								= (player1 + " WINS!");
			}
		}, 2500);
    }
    //For Loop returns highest roll - from PPT Slide js-2-Loops
      let results = [roll_1, roll_2, roll_3, roll_4, roll_5]
      let highestRoll=0

      for (let i=0; i<results.length; i++){
        if (results[i]>highestRoll){
            highestRoll = results[i]
              
      document.querySelector("h5").innerHTML = (highestRoll)
      }
    }


//get the largest number in the array per stackoverflow:
// https://stackoverflow.com/questions/35425292/return-largest-numbers-in-arrays-in-javascript
//      Array.max=function(results){
//          return Math.max.apply(Math,results)
//       }
	
// document.querySelector{("h4").innerHTML
//  = array.max
//}

    