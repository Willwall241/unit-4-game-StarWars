var gameOn = true;
var storedPower = 0;
var defenderEmpty = true;
var currentHp = 0;
var enemyHp = 0;
var enemyKill = 0;


var availableChar = [

  {
    name: "Mace Windu",
    hp: 160,
    attack: 10,
    counter: 12,
    switchFighter: function () {
      $("#charOne").removeClass("select").addClass("fighter");
      $("#charTwo").removeClass("select").addClass("enemy");
      $("#charThree").removeClass("select").addClass("enemy");
      $("#charFour").removeClass("select").addClass("enemy");
    },
    moveChar: function () {
      if (($("#charOne").hasClass("select") && defenderEmpty == true) || ($("#charOne").hasClass("fighter") && defenderEmpty == true)) {
        $("#charOne").appendTo("#activeChar");
        $("#charTwo").appendTo("#enemies");
        $("#charThree").appendTo("#enemies");
        $("#charFour").appendTo("#enemies");
      }
      else if ($("#charOne").hasClass("enemy") && ($("#defender").is(':empty'))) {
        $("#charOne").appendTo("#defender");
        defenderEmpty = false;
      }
    },
  },

  {
    name: "Darth Vader",
    hp: 170,
    attack: 12,
    counter: 20,

    switchFighter: function () {
      $("#charTwo").removeClass("select").addClass("fighter");
      $("#charOne").removeClass("select").addClass("enemy");
      $("#charThree").removeClass("select").addClass("enemy");
      $("#charFour").removeClass("select").addClass("enemy");
    },

    moveChar: function () {

      if (($("#charTwo").hasClass("select") && defenderEmpty == true) || ($("#charTwo").hasClass("fighter") && defenderEmpty == true)) {
        $("#charTwo").appendTo("#activeChar");
        $("#charOne").appendTo("#enemies");
        $("#charThree").appendTo("#enemies");
        $("#charFour").appendTo("#enemies");
      }
      else if ($("#charTwo").hasClass("enemy") && defenderEmpty == true) {
        $("#charTwo").appendTo("#defender");
        defenderEmpty = false;
      }
    }

  },

  {
    name: "Yoda",
    hp: 200,
    attack: 15,
    counter: 25,

    switchFighter: function () {
      $("#charThree").removeClass("select").addClass("fighter");
      $("#charOne").removeClass("select").addClass("enemy");
      $("#charTwo").removeClass("select").addClass("enemy");
      $("#charFour").removeClass("select").addClass("enemy");
    },

    moveChar: function () {

      if (($("#charThree").hasClass("select") && defenderEmpty == true) || ($("#charThree").hasClass("fighter") && defenderEmpty == true)) {
        $("#charThree").appendTo("#activeChar");
        $("#charOne").appendTo("#enemies");
        $("#charTwo").appendTo("#enemies");
        $("#charFour").appendTo("#enemies");
      }
      else if ($("#charThree").hasClass("enemy") && ($("#defender").is(':empty'))) {
        $("#charThree").appendTo("#defender");
        defenderEmpty = false;
      }
    }

  },

  {
    name: "Count Dooku",
    hp: 150,
    attack: 9,
    counter: 15,

    switchFighter: function () {
      $("#charFour").removeClass("select").addClass("fighter");
      $("#charOne").removeClass("select").addClass("enemy");
      $("#charThree").removeClass("select").addClass("enemy");
      $("#charTwo").removeClass("select").addClass("enemy");
    },

    moveChar: function () {

      if (($("#charFour").hasClass("select") && defenderEmpty == true) || ($("#charFour").hasClass("fighter") && defenderEmpty == true)) {
        $("#charFour").appendTo("#activeChar");
        $("#charOne").appendTo("#enemies");
        $("#charTwo").appendTo("#enemies");
        $("#charThree").appendTo("#enemies");
      }
      else if ($("#charFour").hasClass("enemy") && ($("#defender").is(':empty'))) {
        $("#charFour").appendTo("#defender");
        defenderEmpty = false;
      }
    }
  },


];

var Mace = availableChar[0];
var Vader = availableChar[1];
var Yoda = availableChar[2];
var Dooku = availableChar[3];



function startGame() {
  $(".mace-hP").text(Mace.hp);
  $(".vader-hP").text(Vader.hp);
  $(".yoda-hP").text(Yoda.hp);
  $(".dooku-hP").text(Dooku.hp);
}

$("#charOne").on("click", function () {

  if (gameOn && $("#charOne").hasClass("select")) {

    Mace.switchFighter();

  }

  Mace.moveChar();

});

$("#charTwo").on("click", function () {

  if (gameOn && $("#charTwo").hasClass("select")) {

    
    Vader.switchFighter();

  }

  Vader.moveChar();
});

$("#charThree").on("click", function () {

  if (gameOn && $("#charThree").hasClass("select")) {

    
    Yoda.switchFighter();

  }

  Yoda.moveChar();

});

$("#charFour").on("click", function () {

  if (gameOn && $("#charFour").hasClass("select")) {

    
    Dooku.switchFighter();

  }

  Dooku.moveChar();

});

startGame();