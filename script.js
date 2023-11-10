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
