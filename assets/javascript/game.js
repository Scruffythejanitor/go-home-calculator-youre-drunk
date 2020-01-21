$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;
    var randomNumber;
    var total = 0;
    
    newGame()

    $(".image-1").on('click', crystalOneClickd)
    $(".image-2").on('click', crystalTwoClickd)
    $(".image-3").on('click', crystalThreeClickd)
    $(".image-4").on('click', crystalFourClickd)
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


    function crystalOneClickd() {
        total = total + crystalOne
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function crystalTwoClickd() {
        total = total + crystalTwo
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function crystalThreeClickd() {
        total = total + crystalThree
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function crystalFourClickd() {
        total = total + crystalFour
        playerTotalUpdate()
        scoreChecker()
        // return total
    }
    function playerTotalUpdate() {
        $('.player-number').text(total)
        
    }

    function randomNumberGenerator() {
        randomNumber = Math.ceil(Math.random() * 120);
        return randomNumber
    }
    function crystalNumberGenerator() {
        var crystalNumber = Math.ceil(Math.random() * 12);
        return crystalNumber
    }

    function crystalAssign() {
        crystalOne = crystalNumberGenerator()
        crystalTwo = crystalNumberGenerator()
        crystalThree = crystalNumberGenerator()
        crystalFour = crystalNumberGenerator()

        duplicateChecker()
    }

    function duplicateChecker() {
        if (crystalTwo == crystalOne) {
            crystalAssign()
        }
        if (crystalThree == crystalOne) {
            crystalAssign()
        }
        if (crystalFour == crystalOne) {
            crystalAssign()
        }
        if (crystalThree == crystalTwo) {
            crystalAssign()
        }
        if (crystalFour == crystalTwo) {
            crystalAssign()
        }
        if (crystalFour == crystalThree) {
            crystalAssign()
        }
    }

    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);

    this.$slideOut = $('#slideOut');

// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function() {
  $("#slideOut").toggleClass('showSlideOut');
});
})