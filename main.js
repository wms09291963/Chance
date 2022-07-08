    // Initialize variables - the Players, thier rolls, bets, and wallets.
	var player1 = "Player 1";
	var player2 = "Player 2";
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
    let currWall_1=1000
    let currWall_2=1000
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
    let currRound 
    let numOfRounds
    let numRounds
    let cumulWall_1=1000
    let cumulWall_2=1000
    let score_1
    let score_2
    let rndWinner

//Players determine number of rounds they want to play. 
//Patterned after stackoverflow at the below link:
// https://stackoverflow.com/questions/61625548/i-have-a-counter-to-track-the-number-or-rounds-but-i-cannot-figure-out-how-to-e
    

//Function to begin play determines player names and # of rounds in the game. 
//Function to change the player name - patterned after code from 
//https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
   
      function editNames() {
        location.reload;
        currRound=0;
        bet_1=0;
        bet_2=0;
        currWall_1=1000;
        currWall_2=1000;
		player1 = prompt("What's Player 1's name?");
		player2 = prompt("What's Player 2's name?");
		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
        numOfRounds = prompt('How many rounds should we play?',7);
        numRounds = (numOfRounds !=0) ? numOfRounds : 7;
        document.querySelector("h5").innerHTML = "Total Rounds to play is"+" " + numRounds;
        
             
    }

       	  
// Function to change the player name - patterned after code from 
//https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
    
// Players place your bets! 

    function placeBets() {
        currRound++
		bet_1 = prompt(player1+" "+ "What's your bet for round" + " "+ currRound + "?");
		bet_2 = prompt(player2+" "+ "What's your bet for round" + " "+ currRound + "?");

		document.querySelector("p.Bet_1").innerHTML = player1 + "'s" + " " + "bet is" + " " + "$" + parseInt(bet_1) + " " + "for" + " " + "Round" + " " + currRound;
		document.querySelector("p.Bet_2").innerHTML = player2 + "'s" + " " + "bet is" + " " + "$" + parseInt(bet_2) + " " + "for" + " " + "Round" + " " + currRound;
        document.querySelector("p.currWall_1").innerHTML = player1 + "'s" + " " + "wallet is" + " " + "$" + (cumulWall_1 - parseInt(bet_1)) + " " + "for" + " " + "Round" + " " + currRound;
        document.querySelector("p.currWall_2").innerHTML = player2 + "'s" + " " + "wallet is" + " " + "$" + (cumulWall_2 - parseInt(bet_2)) + " " + "for" + " " + "Round" + " " + currRound;
            
        currWall_1=startWal_1-parseInt(bet_1)
        currWall_2=startWal_2-parseInt(bet_2)
        
        totalPot = parseInt(bet_1) + parseInt(bet_2);
        document.querySelector("h6").innerHTML = "Total Pot for the Round" + " " + "is" + " " + "$"+(totalPot)
        
    }
        	
	// Function to roll the dice patterned from https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
	function rollTheDice() {
        //if (currRound == numRounds) {
         //   querySelector

      //  {
         //   alert("That's all the rounds you wanted to play! Game over!");
       // }
        
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
            //totalPot = parseInt(bet_1) + parseInt(bet_2)
             
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
        document.querySelector("h5").innerHTML = player1 + " "+ "wins Round" +" "+(currRound)+ " "+"of"+ " " + " "+ numOfRounds + " " + "with a" + " "+ (roll_1)
        document.querySelector("p.currWall_1").innerHTML = "Wallet" + "=" + ((currWall_1) + parseInt(totalPot))
        document.querySelector("p.currWall_2").innerHTML = "Wallet" + "=" + ((currWall_2) - parseInt(bet_2))
        cumulWall_1=(currWall_1+parseInt(totalPot))
        cumulWall_2=currWall_2
        
        }
        else if (roll_2 > roll_1) {
        document.querySelector("h5").innerHTML = player2 + " " + "wins Round" +" "+(currRound)+ " "+"of"+ " " + " "+ numOfRounds + " " + "with a" + " "+ (roll_2)
        document.querySelector("p.currWall_2").innerHTML = "Wallet" + "=" + ((currWall_2) + parseInt(totalPot))
        document.querySelector("p.currWall_1").innerHTML = "Wallet" + "=" + ((currWall_1) - parseInt(bet_2))
        cumulWall_2=currWall_2+parseInt(totalPot)
        cumulWall_1=currWall_1
                
        }
   }
    
})
score_1 =[currRound, startWal_1, bet_1, currWall_1, cumulWall_1]
score_2 =[currRound, startWal_2, bet_2, currWall_2, cumulWall_2]
   
document.querySelector("h7").innerHTML=score_1

}



        
            
        
    
    