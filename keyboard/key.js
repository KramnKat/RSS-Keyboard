export default class Key {
constructor({small, shift, code}) {
		this.small = small
		this.shift = shift
		this.code = code
	}

	generateKey() {
		const key = document.createElement('button')
		key.classList.add('keyboard__key')
		key.dataset.keycode = this.code

		switch(this.code) {
			case 'Space': 
			key.classList.add('space__key')
			break
			case 'Backspace': 
			key.classList.add('backspace__key')
			key.innerText = this.small
			break
			case 'Tab': 
			key.classList.add('tab__key')
			key.innerText = this.small
			break
			case 'Delete': 
			key.classList.add('keyboard__key')
			key.innerText = this.small
			break
			case 'CapsLock': 
			key.classList.add('caps__key')
			key.innerText = this.small
			break
			case 'Enter': 
			key.classList.add('enter__key')
			key.innerText = this.small
			break
			case 'ArrowUp': 
			key.classList.add('keyboard__key')
			key.innerHTML = `<span class="material-icons">
			keyboard_arrow_up
			</span>`
			break
			case 'ArrowDown': 
			key.classList.add('keyboard__key')
			key.innerHTML = `<span class="material-icons">
			keyboard_arrow_down
			</span>`
			break
			case 'ArrowLeft': 
			key.classList.add('keyboard__key')
			key.innerHTML = `<span class="material-icons">
			keyboard_arrow_left
			</span>`
			break
			case 'ArrowRight': 
			key.classList.add('keyboard__key')
			key.innerHTML = `<span class="material-icons">
			keyboard_arrow_right
			</span>`
			break
			case 'ShiftLeft': 
			key.classList.add('keyboard__key', 'shift__key', 'shift__key--left')
			key.innerText = this.small
			break
			case 'ShiftRight': 
			key.classList.add('keyboard__key', 'shift__key',  'shift__key--right')
			key.innerText = this.small
			break
			case 'ControlLeft': 
			key.classList.add('keyboard__key', 'ctrl__key', 'ctrl__left')
			key.innerText = this.small
			break
			case 'ControlRight': 
			key.classList.add('keyboard__key', 'ctrl__key', 'ctrl__right')
			key.innerText = this.small
			break
			case 'AltLeft': 
			key.classList.add('keyboard__key', 'alt__key', 'alt__lef')
			key.innerText = this.small
			break
			case 'AltRight': 
			key.classList.add('keyboard__key', 'alt__key', 'alt__right')
			key.innerText = this.small
			break
			default:
				key.classList.add('keyboard__key')
				key.innerText = this.small
		}
		return key;
	}
}