import languages from './languages.js'

const body = document.querySelector('body')
const nigthTheme = document.querySelector('.night__theme')

const ruKeyboard = languages.ru
const enKeyboard = languages.en

// nigthTheme.addEventListener('click', toggleNightTheme())

// function toggleNightTheme() {
// 	if(nigthTheme.classList.contains('active'))
// 	nigthTheme.classList.toggle('active')
// 	body.classList.toggle('body--night-theme')
// }

function keyBoardContainer() {
	const container = document.createElement('div')
	container.classList.add('container')

	const toggleNightTheme = document.createElement('div')
	toggleNightTheme.classList.add('night__theme')
	toggleNightTheme.innerHTML = `<div class="toggle__circle"><span class="material-icons">
	dark_mode
	</span></div>`
	
	const textarea = document.createElement('textarea')
	textarea.classList.add('text')

	//const keyboard = generateKeyboard()

	container.append(textarea, toggleNightTheme) //keyboard)
	document.body.append(container)
}

keyBoardContainer()
