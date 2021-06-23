'use strict'

export class AboutPage {
	constructor() {
		this.VDOM = document.createElement('div')
		this.VDOM.className = 'about-page-place hidden'
		
		this.aboutPage = document.createElement('div')
		this.aboutPage.className = 'about-page '
		this.aboutPage.style.transform = `translate3d(610px,0,0)`

		this.VDOM.onclick = (e) => {
			this.close()
		}

		this.aboutPage.onclick = (e) => {
			e.stopPropagation()
		}

		this.infoText = document.createElement('div')
		this.infoText.innerHTML = '<h1 class = "about-page__h1">Информация о проекте</h1><h2 class="about-page__h2">Анимированные визуализации патологических примеров множеств и функций</h2><p class="about-page__p">Программа предназначена для обучения студентов.<br />Каждый раздел может содержать описание, задачии, дополнительные материалы, а также трехмерную параметризированную модель, с элементами управления.</p>'
		this.infoText.className = 'info-text hidden'

		this.settingsText = document.createElement('div')
		this.settingsText.innerHTML = '<h2>Настройки</h2>'
		this.settingsText.className = 'settings-text hidden'

		this.settingsText = this.buildSettings(this.settingsText)

		this.copyText = document.createElement('div')
		this.copyText.innerHTML = '<h3>Программа выполнена в рамках курсовой работы 3 курса<br />Сидоров Максим О. 2020 БПИ НИУ ВШЭ</h3>'
		this.copyText.className = 'copy-text hidden'

		this.aboutPage.append(this.infoText)

		this.aboutPage.append(this.settingsText)

		this.aboutPage.append(this.copyText)

		this.VDOM.append(this.aboutPage)

		this.render()

		this.isOpen = false
	}

	render() {
		document.getElementById('app').append(this.VDOM)
	}

	setSettings(settings) {
		this.settings = settings
	}

	f1set(event) {
		event.preventDefault()

		let html = document.getElementsByTagName('html')[0];
		html.style.setProperty("--info-width", document.getElementById('s0').value+'px');
	}

	f2set(event) {
		event.preventDefault()

		let html = document.getElementsByTagName('html')[0];
		html.style.setProperty("--cont-color", document.getElementById('s1').value);
	}

	f3set(event) {
		event.preventDefault()

		let html = document.getElementsByTagName('html')[0];
		html.style.setProperty("--root-font-size", document.getElementById('s2').value+'px');
	}


	buildSettings(elem) {
		let data = [{
			label:'<h3>Изменить ширину Информационной панели</h3><i>Ширину задать в px</i>',
			function:this.f1set,
			button:'Сохранить',
			inputType:'number'
		},{
			label:'<h3>Изменить цвет контроллеров управления</h3>',
			function:this.f2set,
			button:'Сохранить',
			inputType:'color'
		},{
			label:'<h3>Изменить размер шрифта</h3><i>Размер шрифта задать в px</i>',
			function:this.f3set,
			button:'Сохранить',
			inputType:'number'
		}]

		for (var i = data.length - 1; i >= 0; i--) {
			let form = document.createElement('form')
			let label = document.createElement('label')
			label.innerHTML = data[i].label

			form.append(label)

			let container = document.createElement('div')
			let input = document.createElement('input')
			input.type = data[i].inputType
			input.id = 's' + i

			let button = document.createElement('button')
			button.innerHTML = data[i].button
			button.onclick = data[i].function

			container.append(input)
			container.append(button)

			form.append(container)

			elem.append(form)
		}

		return elem
	}

	async open() {
		this.isOpen = true

		this.VDOM.className = 'about-page-place'

		this.aboutPage.className += 'about-page_move'
		if (this.isOpen) {
			this.settings.className = 's-c_open'

			await new Promise(res => setTimeout(res, 400))

			this.showText()	
		}
	}

	async close() {
		this.settings.className = ''

		this.isOpen = false

		this.hiddenText()

		await new Promise(res => setTimeout(res, 500))

		this.hiddenText()

		this.settings.className = ''

		this.VDOM.className = 'about-page-place hidden'

		this.aboutPage.className = 'about-page '
	}

	async showText() {
		this.infoText.className = 'info-text'

		await new Promise(res => setTimeout(res, 200))

		this.settingsText.className = 'settings-text'

		await new Promise(res => setTimeout(res, 200))

		this.copyText.className = 'copy-text'
	}

	async hiddenText() {
		this.copyText.className = 'copy-text hidden'

		await new Promise(res => setTimeout(res, 200))

		this.settingsText.className = 'settings-text hidden'

		await new Promise(res => setTimeout(res, 200))

		this.infoText.className = 'info-text hidden'
	}
}