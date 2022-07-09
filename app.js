// const playerValue = prompt('what do you play?');
const mobutu = document.getElementById('mobutu');
const tie = document.getElementById('tie');
const win = document.getElementById('win');
const form = document.querySelector('.form')
const counter = document.querySelector('#winCounter')
const playerValue = document.querySelector('#choice');

const computerValue = () => {
  const choiceList = ["rock", 'paper', "scissors"]
  const choice = Math.floor(Math.random() *3);
  return choiceList[choice];
};

const Play = (player, computer) => {
  if (player === 'rock' || player === 'paper' || player === 'scissors') {
    if (computer === 'rock') {
      if (player === 'rock') {
        win.innerHTML = "It is a tie 👽";
      }
      if (player === 'scissors') {
        win.innerHTML= "Nooo, you lost to the computer 😉😉";
      };
      if (player === "paper") {
        win.innerHTML = "Yeees, you win 🎈🎈";
      }
    };

    if (computer === 'paper') {
      if (player === 'rock') {
        win.innerHTML = "Nooo, you lost to the computer 😉😉";
      }
      if (player === 'scissors') {
        win.innerHTML = "Yeees, you win 🎈🎈";
      };
      if (player === "paper") {
        win.innerHTML = "It is a tie 👽";
      }
    }


    if (computer === 'scissors') {
      if (player === 'rock') {
        win.innerHTML = "Yeees, you win 🎈🎈";
      }
      if (player === 'scissors') {
        win.innerHTML = "It is a tie 👽";
      };
      if (player === "paper") {
        win.innerHTML = "Nooo, you lost to the computer 😉😉";
      }
    }
    
  } else {
    win.innerHTML="Please enter a valid value. Allowed values are (rock), (paper) or (scissors)!";
  }
};




form.addEventListener('submit', (e) => {
  e.preventDefault()
  Play(playerValue.value.trim(), computerValue())
  form.reset()
})