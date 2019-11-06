//crystals
var crystal = {
    blue:
    {
        name: "blue",
        value: 0
    },

    purple:
    {
        name: "purple",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    orange:
    {
        name: "orange",
        value:0
    }
};

//variables
var currentScore = 0;
var targetScore = 0;

var lose = 0;
var win = 0;

//random number function
var getRandom = function(min, max){
    return Math.floor((Math.random() * max-min +1) + min);
};

//the initialize game function
var initGame = function(){
    //initialize current score to 0
        currentScore = 0;
        //get random number for the target score
        targetNumber = getRandom(19, 120);
        console.log(targetNumber);
        $(".targetScore").html(targetNumber);
        $(".userScore").html(currentScore);
};

//get random number for each crystal
    crystal.blue.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.orange.value = getRandom(1,12);

    console.log("blue:" + crystal.blue.value);
    console.log("purple:" + crystal.purple.value);
    console.log("green:" + crystal.green.value);
    console.log("orange:" + crystal.orange.value);

    //function to add the value of the crystals to the current score
    var crystalValue = function(crystal){
        currentScore = currentScore + crystal.value;
        $("#userScore").html(currentScore);

        checkWins();
    }

//check to see if you have matched the target score thereby winning ...else losing
var checkWins = function(){
   // var lose = 0;
    if(currentScore > targetNumber){
        alert("you lost");
        console.log("you lost");
        lose++;
        $("#losses").html(lose);
        //restart game
        initGame();
    }
else if(currentScore === targetNumber){
   // var win = 0;
    alert("you won");
    console.log("you won");
    win++;
    $("#win").html(win);
    //restart game
    initGame();
    }
};

//reinitialize game
initGame();

//on-click for the crystal images
    $("#blue").on("click", function(){
    crystalValue(crystal.blue);
    console.log(crystalValue);
});

$("#green").on("click", function(){
    crystalValue(crystal.green);
    console.log(crystalValue);
});

$("#purple").on("click", function(){
    crystalValue(crystal.purple);
    console.log(crystalValue);
});

$("#orange").on("click", function(){
    crystalValue(crystal.orange);
    console.log(crystalValue);
});