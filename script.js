const body = document.querySelector('body')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const toggleSwitch = document.querySelector('.toggle-switch')
const input = document.querySelector('input')

/*
* Dark Theme Function
*/
function darkTheme() {
  body.style.backgroundColor = '#38285c';
  title.innerHTML = 'Dark Mode';
  console.log('checked')
}

/*
* Light Theme Function
*/
function lightTheme() {
  body.style.backgroundColor = '#87ceeb';
  title.innerHTML = 'Light Mode';
  title.style.color = '#000'
  console.log('un-checked')
}

/*
* Toggle Event Listener
*/
// toggleSwitch.addEventListener('click', function() {
//   if (input.checked) {
//     darkTheme()
//   } else {
//     lightTheme()
//   }
// })

/*
* ES6 Toggle Event
*/

// Handle Toggle
const handleToggle = () => {
  input.checked ? darkTheme() : lightTheme()
}

toggleSwitch.onclick = handleToggle