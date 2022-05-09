import generateKeyBoard from './generateKeyBoard.js'
import languages from './languages.js'

export default () => {
	const container = document.createElement('div')
	container.classList.add('container')

	const toggleNightTheme = document.createElement('div')
	toggleNightTheme.classList.add('night__theme')
	toggleNightTheme.innerHTML = `<div class="toggle__circle"><span class="material-icons">
	dark_mode
	</span></div>`
	// toggleNightTheme.addEventListener('click', (event) =>
	// 	nigthTheme.classList.toggle('active')
	// 	document.body.classList.toggle('body--night-theme')
	// )
	
	const textarea = document.createElement('textarea')
	textarea.classList.add('text')

	const keyboard = generateKeyBoard(languages.en)

	const text = document.createElement('div')
	text.classList.add('info')
	text.innerHTML = `<span>The keyboard was created in the Windows operating system</span><br>
	<span>To switch the language combination: left ctrl + alt</span>`

	container.append(textarea, toggleNightTheme, keyboard, text)
	document.body.append(container)
}



