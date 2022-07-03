let choice = document.querySelector('#choice').value.trim().toLocaleLowerCase();
const form = document.querySelector('#submit');
const rom = document.querySelector('.form')

const computerPlay = (jatugo) => {
  const compPlay =['Rock', 'Paper', 'Scissors'];
  let guess = Math.floor(Math.random()*3);
  const computer = compPlay[guess].toLocaleLowerCase();
  let wins =0
  if (jatugo !== '') {
    if (jatugo === computer) {
      wins ++
      console.log(`Yeeeey! You won💯💯🎉✨ ${wins}`)
    } else {
      console.log("OOOOHHH 🥱😫 machine beats man again (❁´◡`❁)")
    }
  } else {
    console.log("Please enter a value")
  }
  choice = ''
};


window.onload = computerPlay(choice)

// rom.addEventListener('submit', (e) => {
//   e.preventDefault()
//   computerPlay(choice)
// })

// const computer = computerPlay();

// let wins = 0;
// const game = (User, Comp) => {
//   if (User !== '') {
//     if (User === Comp) {
//     wins ++
//     console.log(`Yeeeey! You won💯💯🎉✨ ${wins}`)
//     } else {
//       console.log("OOOOHHH 🥱😫 machine beats man again (❁´◡`❁)")
//     }
//   } else {
//     console.log('Please enter a value')
//   }
  
// }



// form.addEventListener('click', (e) => {
//   game(choice, computer)
//   e.preventDefault()
// })



// game(choice, computer)