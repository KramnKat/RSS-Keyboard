import Key from './key.js'

function handler(e) {
	switch(this.code) {
		case 'Space': 
		break
		case 'Backspace': 
		break
		case 'Tab': 
		break
		case 'Delete': 
		break
		case 'CapsLock': 
		break
		case 'Enter': 
		break
		case 'ArrowUp': 
		break
		case 'ArrowDown': 
		break
		case 'ArrowLeft': 
		break
		case 'ArrowRight': 
		break
		case 'ShiftLeft': 
		break
		case 'ShiftRight': 
		break
		case 'ControlLeft':
		break
		case 'ControlRight': 
		break
		case 'AltLeft': 
		break
		case 'AltRight': 
		break
		default:
}
}

export default (keyboardLang) => {
	const keyboard = document.createElement('div')
	keyboard.classList.add('keyboard')

	keyboardLang.forEach(keyboardRow => {
		const row = document.createElement('div')
		row.classList.add('keyboard__row')
		
		keyboardRow.forEach((key) => {
			const keyboardKey = new Key(key)
			row.append(keyboardKey.generateKey())
		})
		keyboard.append(row)
	});

	keyboard.addEventListener('click', (event) => {
		handler(event)
	})

	return keyboard
}

