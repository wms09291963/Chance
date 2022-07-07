    // Initialize variables - the Players, thier rolls, bets, and wallets.
	var player1 = "Player 1";
	var player2 = "Player 2";
    //var player3 = "Player 3";
    //var player4 = "Player 4";
    //var player5 = "Player 5";
    let randomNumber1
    let randomNumber2
    let randomNumber3
    let randomNumber4
    let randomNumber5
    let randomNumber6
    let randomNumber7
    let randomNumber8
    let randomNumber9
    let randomNumber10
    var bet_1 = "Bet 1";
    var bet_2 = "Bet 2";
    var bet_3 = "Bet 3";
    var bet_4 = "Bet 4";
    var bet_5 = "Bet 5";
    let startWal_1=1000
    let startWal_2=1000
    let wallet_3
    let wallet_4
    let wallet_5
    let roll_1
    let roll_2
    let roll_3
    let roll_4
    let roll_5
    let totalPot
    let getLargestNumber
    let currRound =1

    
//Players determine number of rounds they want to play. 
//Patterned after stackoverflow at the below link:
// https://stackoverflow.com/questions/61625548/i-have-a-counter-to-track-the-number-or-rounds-but-i-cannot-figure-out-how-to-e
    
    let numOfRounds = prompt('How many rounds should we play?',11);
    let numRounds = (numOfRounds !=0) ? numOfRounds : 11;
    
   
// Function to change the player name - patterned after code from 
//https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
    
	function editNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");
        //player3 = prompt("Change Player3 name");
        //player4 = prompt("Change Player4 name");
        //player5 = prompt("Change Player5 name");

		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
        //document.querySelector("p.Player3").innerHTML = player3;
        //document.querySelector("p.Player4").innerHTML = player4;
        //document.querySelector("p.Player5").innerHTML = player5;

	}

// Players place your bets! 
    function placeBets() {
		bet_1 = prompt(player1+" "+ "What's your bet?");
		bet_2 = prompt(player2+" "+ "What's your bet?");
        //bet_3 = prompt(player3+" "+ "What's your bet?");
        //bet_4 = prompt(player4+" "+ "What's your bet?");
        //bet_5 = prompt(player5+" "+ "What's your bet?");

		document.querySelector("p.Bet_1").innerHTML = bet_1;
		document.querySelector("p.Bet_2").innerHTML = bet_2;
        //document.querySelector("p.Bet_3").innerHTML = bet_3;
        //document.querySelector("p.Bet_4").innerHTML = bet_4;
        //document.querySelector("p.Bet_5").innerHTML = bet_5;

        

        totalPot = parseInt(bet_1) + parseInt(bet_2);
        document.querySelector("h6").innerHTML = "Total Pot for Round" + " "+(currRound)+" "+ "is" + " " + (totalPot)
        
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
            roll_1= randomNumber1+randomNumber6
            roll_2 = randomNumber2+randomNumber7
            roll_3 = randomNumber3+randomNumber8
            roll_4 = randomNumber4+randomNumber9
            roll_5 = randomNumber5+randomNumber10

            // adds the bets to get the total pot for the round. 
            totalPot = parseInt(bet_1) + parseInt(bet_2)
             
            const img1 = document.querySelector('.img1')
            const img2 = document.querySelector('.img2')
            const img3 = document.querySelector('.img3')
            const img4 = document.querySelector('.img4')
            const img5 = document.querySelector('.img5')
            const img6 = document.querySelector('.img6')
            const img7 = document.querySelector('.img7')
            const img8 = document.querySelector('.img8')
            const img9 = document.querySelector('.img9')
            const img10 = document.querySelector('.img10')


if (img1) {

  img1.setAttribute("src","dice" + randomNumber1 +".png");
}

if (img2) {

    img2.setAttribute("src","dice" + randomNumber2 +".png");
}

    if (img3) { 
        
     img3.setAttribute("src","dice" + randomNumber3 +".png");
}

    if (img4) {   

        img4.setAttribute("src", "dice" + randomNumber4 +".png");

}

    if (img5) {

        img5.setAttribute("src", "dice" + randomNumber5 +".png");

    }

    if (img6) {

        img6.setAttribute("src", "dice" + randomNumber6 +".png");

    }

    if (img7) {

        img7.setAttribute("src", "dice" + randomNumber7 +".png");

    }

    if (img8) {

        img8.setAttribute("src", "dice" + randomNumber8 +".png");

    }

    if (img9) {

        img9.setAttribute("src", "dice" + randomNumber9 +".png");

    }

    if (img10) {

        img10.setAttribute("src", "dice" + randomNumber10 +".png");

    }
	
    
  //For Loop returns highest roll - from PPT Slide js-2-Loops
  let results = [roll_1, roll_2,]
    let highestRoll=0

        for (let i=0; i<results.length; i++){
        if (results[i]>highestRoll){
            highestRoll = results[i]
               
        }
        if (roll_1==roll_2) {
        document.querySelector("h5").innerHTML = "Tie for" + " "+"Round"+" "+(currRound)+ " "+"of"+ " " + " "+ numOfRounds + " " + "with a" + " "+ (highestRoll)+" "+"roll again!"
        }
        else if (roll_2 < roll_1) {
        document.querySelector("h5").innerHTML = player1 + " "+ "wins Round" +" "+(currRound)+ " "+"of"+ " " + " "+ numOfRounds + " " + "with a" + " "+ (highestRoll)
        startWal_1= parseInt(startWal_1) + parseInt(bet_1)
        document.querySelector("p.startWal_1").innerHTML = "Wallet" + "=" + parseInt(startWal_1)
        }
        else if (roll_2 > roll_1) {
        document.querySelector("h5").innerHTML = player2 + " " + "wins Round" +" "+(currRound)+ " "+"of"+ " " + " "+ numOfRounds + " " + "with a" + " "+ (highestRoll)
        startWal_2= parseInt (startWal_2) + parseInt (bet_1)
        document.querySelector("p.startWal_1").innerHTML = "Wallet" + parseInt(startWal_1)
            }

            currRound++
    }
})
            
          
    //document.querySelector("h5").innerHTML = "Winning combination" + " "+"Round"+" "+(currRound)+ " "+"of"+ " " + " "+ numOfRounds + " " + "with" + " "+ (highestRoll)
        
            }
            if (currRound == numRounds) {
                alert("That's all the rounds you wanted to play! Game over!");
            }
        

			


			

			
	
    
		
       
    
        


    
    

    