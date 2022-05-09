import Key from './key.js'

function handler(e, textarea) {
	const textField = textarea
	let pos = textField.dataset.position 
	switch(e.target.dataset.keycode) {
		case 'Space': 
		textField.value = `${textField.value.slice(0, pos
			)}${' '}${textField.value.slice(pos)}`
		textField.dataset.position = 	+textField.dataset.position + 1
		break
		case 'Backspace': 
		textField.value = `${textField.value.slice(
			0, pos - 1
		 )}${textField.value.slice(pos)}`
		 textField.dataset.position =
		 textField.dataset.position > 0 ? +textField.dataset.position - 1 : 0
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
		textField.value = `${textField.value.slice(0, pos)}${
			e.target.innerText
		}${textField.value.slice(pos)}`
		textField.dataset.position = 	+textField.dataset.position + 1
}
}

export default (keyboardLang, textarea) => {
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
		if(event.target.dataset.keycode) {
			handler(event, textarea)
		}
	})

	return keyboard
}

