
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

// USANDO ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch (error) {
    console.error(error);
  }
}

  



// 
//   document.getElementById('container')
//   jokeEl.innerHTML = data.joke

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }