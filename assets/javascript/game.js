$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    var buttonOne;
    var buttonTwo;
    var buttonThree;
    var buttonFour;
    var randomNumber;
    var total = 0;
    
    newGame()

    $(".image-1").on('click', buttonOneClickd)
    $(".image-2").on('click', buttonTwoClickd)
    $(".image-3").on('click', buttonThreeClickd)
    $(".image-4").on('click', buttonFourClickd)
    $(".reset-button").on('click', resetGame)
      
    function newGame() {  
        total = 0
        playerTotalUpdate()
        crystalAssign()
        randomNumberGenerator()
        $('.random-number').text(randomNumber)
        $('.wins').text('Wins: '+ wins)
        $('.losses').text('Losses: '+ losses)
    }
    
    function resetGame() {
        total = 0
        wins = 0
        losses = 0
        $('.wins').text('Wins: '+ wins)
        $('.losses').text('Losses: '+ losses)
        $('.player-number').text(total)
    }
    
    function scoreChecker() {
        if (total === randomNumber) {
            wins++;
            alert('You Win!')
            
            newGame()
        }
        if (total > randomNumber) {
            losses++;
            alert('You Loose!')
            newGame()
        } 
    }


    function buttonOneClickd() {
        total = total + buttonOne
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function buttonTwoClickd() {
        total = total + buttonTwo
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function buttonThreeClickd() {
        total = total + buttonThree
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function buttonFourClickd() {
        total = total + buttonFour
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function playerTotalUpdate() {
        $('.player-number').text(total)
        
    }

    function randomNumberGenerator() {
        randomNumber = Math.ceil(Math.random() * 100) +19;
        return randomNumber
    }
    function buttonNumberGenerator() {
        var buttonNumbers = Math.ceil(Math.random() * 12);
        return buttonNumbers
    }

    function crystalAssign() {
        buttonOne = buttonNumberGenerator()
        buttonTwo = buttonNumberGenerator()
        buttonThree = buttonNumberGenerator()
        buttonFour = buttonNumberGenerator()

        duplicateChecker()
    }

    function duplicateChecker() {
        if (buttonTwo == buttonOne) {
            crystalAssign()
        }
        if (buttonThree == buttonOne) {
            crystalAssign()
        }
        if (buttonFour == buttonOne) {
            crystalAssign()
        }
        if (buttonThree == buttonTwo) {
            crystalAssign()
        }
        if (buttonFour == buttonTwo) {
            crystalAssign()
        }
        if (buttonFour == buttonThree) {
            crystalAssign()
        }
    }

    console.log(buttonOne);
    console.log(buttonTwo);
    console.log(buttonThree);
    console.log(buttonFour);

    this.$slideOut = $('#slideOut');

// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function() {
  $("#slideOut").toggleClass('showSlideOut');
});
})