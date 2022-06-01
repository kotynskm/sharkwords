const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];


let numWrong = 0;
let numCorrect = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  // Replace this with your code
  for(let char of word){
    document.querySelector('#word-container').insertAdjacentHTML('beforeend', `<div class="letter-box ${char}"></div>`)
  }
  

};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  // Replace this with your code
  for(let char of ALPHABET){
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', `<button>${char}</button>`)
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
  buttonEl.disabled = true;
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  // Replace this with your code
  return document.querySelector(`.${letter}`) !== null;
};

const handleCorrectGuess = (letter,word) => {
  const letter_divs = document.querySelectorAll(`div.${letter}`)
  for(let char of letter_divs){
    char.innerHTML = letter;
    numCorrect += 1;
  }
  if (numCorrect === word.length) {
    alert("You won!")
    document.querySelector('#play-again').style.display = '';
    const buttons = document.querySelectorAll('button')
    for(let button of buttons){
      disableLetterButton(button);
    }
  }
  
  
}

const handleIncorrectGuess = () => {
  numWrong += 1;
  document.querySelector('img').setAttribute('src', `/static/images/guess${numWrong}.png`)
  if (numWrong >=5) {
    const buttons = document.querySelectorAll('button')
    for(let button of buttons){
      disableLetterButton(button);
    }
    document.querySelector('#play-again').style.display = '';
  }
}

const resetGame = () => {
  location.reload();
}


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  // const random = WORDS[Math.floor(Math.random()*WORDS.length)]
  const random = "hello"
  
  const link = document.querySelector('#play-again');
  link.addEventListener('click', () => {
    resetGame();
  });

  // call the function that makes an empty line for each letter in the word
  createDivsForChars(random)

  // call the function that makes a button for each letter in the alphabet
  generateLetterButtons()

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click',() => {
      const letter = button.innerHTML;
      disableLetterButton(button);
      if(isLetterInWord(letter)){
        handleCorrectGuess(letter,random);
      }else{
        handleIncorrectGuess();
      }
    })
  }
  

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
