var POSSIBLE_WORDS = ["obdurate", "versatimilitude", "defenestrate", "obsequious", "dissonant","toady","idempotent"]
var word = '';

function newGame(){
    var randomIndex = parseInt(Math.random()) * POSSIBLE_WORDS.length;

    var clueString = '';
    for(var i = 0; i < word.length; i++){
        clueString += '_ ';
    }
    var clue = document.getElementById('clue');
    clue.innerHTML = clueString
}