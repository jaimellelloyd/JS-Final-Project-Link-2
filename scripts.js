// Smooth Scroll Effect
$(document).ready(function () {
  $(".header .menu li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault()
      var hash = this.hash

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500
      ) // 800ms for smooth scrolling
    }
  })

  // Hamburger Menu Button
  $(".menu-btn").click(function () {
    $(".header .menu").toggleClass("active")
    $(".menu-btn img").toggleClass("active")
  })
})

// Alert Button
const alertButton = document.getElementById("alertButton")

alertButton.addEventListener("click", function () {
  alert("Welcome to my portfolio that is built from pure coding!")
})

// Show more skills Button
const moreskills = document.getElementById("moreSkills")
const skillsButton = document.getElementById("skillsButton")

skillsButton.addEventListener("click", function () {
  if (moreskills.style.display === "none") {
    moreskills.style.display = "block"
  } else {
    moreskills.style.display = "none"
  }
})

// DOM Manipulation, Adding a paragraph
const addParagraphButton = document.getElementById("addParagraphButton")
const paragraphContainer = document.getElementById("paragraphContainer")

addParagraphButton.addEventListener("click", function () {
  const newParagraph = document.createElement("p")
  newParagraph.textContent = "I will add my own introduction video in the future."
  paragraphContainer.appendChild(newParagraph)
})

// increment and decrement button
const counterDisplay = document.getElementById("counter")
const increment = document.getElementById("incrementButton")
const decrement = document.getElementById("decrementButton")

let count = 0

increment.addEventListener("click", function () {
  count += 1
  counterDisplay.textContent = count
})
decrement.addEventListener("click", function () {
  count -= 1
  counterDisplay.textContent = count
})

// Form Validation Using Regex for USERNAME
const usernameInput = document.getElementById("username")
const greetButton = document.getElementById("greetButton")
const greetMessage = document.getElementById("greetingMessage")

function isValidName(name) {
  const namePattern = /^[a-zA-Z\s]+$/
  return namePattern.test(name)
}

greetButton.addEventListener("click", function () {
  const username = usernameInput.value.trim()

  if (username === "") {
    greetingMessage.textContent = "Please enter your name"
  } else if (!isValidName(username)) {
    greetingMessage.textContent = "Invalid input. Please use only letters."
  } else {
    greetingMessage.textContent = `Hello, ${username}!`
  }
})

// reset button
const resetButton = document.getElementById("resetButton")

resetButton.addEventListener("click", function () {
  location.reload()
})
