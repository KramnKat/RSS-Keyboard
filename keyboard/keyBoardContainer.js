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
	container.append(toggleNightTheme)
	toggleNightTheme.addEventListener('click', () => {
		toggleNightTheme.classList.toggle('active')
		document.body.classList.toggle('body--night-theme')
		keyboard.classList.toggle('night--theme')
		textarea.classList.toggle('night--theme')
	})
	
	const textarea = document.createElement('textarea')
	textarea.classList.add('text')
	container.append(textarea)
	textarea.dataset.position = 0;
	textarea.addEventListener('click', (event) => {
		textarea.dataset.position = event.target.selectionStart
	})
	
	const keyboard = generateKeyBoard(languages.en, textarea)
	container.append(keyboard)
	
	const text = document.createElement('div')
	text.classList.add('info')
	text.innerHTML = `<span>The keyboard was created in the Windows operating system</span><br>
	<span>To switch the language combination: left ctrl + alt</span>`
	
	container.append(text)
	document.body.append(container)
	
	
}



