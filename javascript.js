/* 

const userName = prompt("Hello. What is your name?");
console.log(userName);

const username = prompt("Hi " + userName + ". Nice to meet you. Have a great day!")

*/


const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})


