// let count = 1

// document.getElementById('radio1').checked = true

// setInterval(function () {
//   nextImage()
// }, 5000)

// function nextImage() {
//   count++
//   if (count > 4) {
//     count = 1
//   }

//   document.getElementById('radio' + count).checked = true
// }

const menu = document.querySelector('#menu-nav')
const hamburguer = document.querySelector('.menu')

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})
