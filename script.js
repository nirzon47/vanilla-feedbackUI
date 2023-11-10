// DOM elements
const submit = document.getElementById('submit')
const feedback = document.getElementsByClassName('feedback')
let highlighted = ''

// Event listener
Array.from(feedback).forEach((button) => {
	button.addEventListener('click', (event) => {
		highlightButton(event.target)
	})
})

// Functions
const highlightButton = (element) => {
	resetButtons()

	element.classList.remove('bg-neutral')
	element.style.backgroundColor = '#059669'
	highlighted = element.parentElement.children[1].innerText
}

const resetButtons = () => {
	Array.from(feedback).forEach((button) => {
		button.style.backgroundColor = '#1D3557'
	})
}
