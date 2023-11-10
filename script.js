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
