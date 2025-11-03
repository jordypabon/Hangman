var POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenestrate", "obsequious", "dissonant","toady","idempotent"];
var MAX_GUESSES = 6;
var word = '';
var guesses = '';
var guess_count = MAX_GUESSES;

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    guesses = "";
    guess_count = MAX_GUESSES
    updatePage();
}
function guessLetter() {

    var input = document.getElementById("guess");
    var letter = input.value;

    if(word== ''){
        alert('Start Game');
        input.value= '';
        return;
    }

    if(guesses.include (letter)){
        alert('Letter has been guessed already');
        input.value= '';
        return;
    }

    if(word.indexOf(letter)< 0)
    {
        guess_count--;
    }
    guesses += letter;

    updatePage();

    input.value = '';
}

function updatePage() {
    var clueString = "";
     for (var i = 0; i < word.length; i++) {
        clueString += "_ ";
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        } else {
            clueString += " ";
        }
           
        }
         var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

       var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

 document.getElementById('hangmanImage');
 Image.src = 'images/hangman' + guess_count + '.gif';

    if(!clueString.includes('_')){
    alert('Good Job. Your word was '+ word);
    word= '';
    }
    if(guess_count <=0){
    alert('Sorry, the word was actually '+ word);
    word= '';
     }

}