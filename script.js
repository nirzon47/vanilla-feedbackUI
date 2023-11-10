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

submit.addEventListener('click', () => {
	handleModal()
})

// Functions

/**
 * Highlights a button by changing its background color.
 *
 * @param {HTMLElement} element - The button element to be highlighted.
 */
const highlightButton = (element) => {
	resetButtons()

	element.classList.remove('bg-neutral')
	element.style.backgroundColor = '#059669'
	highlighted = element.parentElement.children[1].innerText
}

/**
 * Resets the background color of all buttons in the feedback array to '#1D3557'.
 *
 * @param {Array} feedback - the array of buttons to be reset
 * @return {undefined} - no return value
 */
const resetButtons = () => {
	Array.from(feedback).forEach((button) => {
		button.style.backgroundColor = '#1D3557'
	})
}

/**
 * Handles modal based on the value of `highlighted`.
 *
 * @return {void} No return value.
 */
const handleModal = () => {
	if (highlighted === 'Sad') {
		sad.showModal()
	} else if (highlighted === 'Neutral') {
		neutral.showModal()
	} else if (highlighted === 'Happy') {
		happy.showModal()
	} else {
		alert('Please give us a feedback')
	}
}
