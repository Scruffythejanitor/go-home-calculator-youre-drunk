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
      
    function newGame() {  
        total = 0
        crystalAssign()
        randomNumberGenerator()
        $('.random-number').text(randomNumber)
        $('.wins').text('Wins: '+ wins)
        $('.losses').text('Losses: '+ losses)
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
        return total
    }
    function crystalTwoClickd() {
        total = total + crystalTwo
        playerTotalUpdate()
        scoreChecker()
        return total
    }
    function crystalThreeClickd() {
        total = total + crystalThree
        playerTotalUpdate()
        scoreChecker()
        return total
    }
    function crystalFourClickd() {
        total = total + crystalFour
        playerTotalUpdate()
        scoreChecker()
        return total
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


        return crystalOne
        return crystalTwo
        return crystalThree
        return crystalFour
    }
})