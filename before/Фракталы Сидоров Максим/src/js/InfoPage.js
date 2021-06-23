'use strict'

export class InfoPage {
	constructor(content) {
		({
			countOfSection:this.countOfSection,
			sections:this.sections
		} = content)

		this.isOpen = false
		this.bindControllers = []
	}

	build() {
		let _this = this
		this.VDOM = document.createElement('section')
		this.VDOM.className = 'description'

		if (this.countOfSection > 0) {
			let nav = document.createElement('nav')
			nav.className = 'description-nav'

			this.sections.forEach(function(item, i, arr) {
  				let span = document.createElement('span')
  				span.className = 'description-nav__item'
  				span.innerHTML = item.name
  				span.id = 'description-nav__item-' + i

  				span.onclick = function(){
  					_this.openSection(i)
  				}

  				nav.append(span)
			})

			nav.getElementsByClassName('description-nav__item')[0].className += ' active' 

			this.VDOM.append(nav)
		}

		let article = document.createElement('article')
		article.className = 'article'
		article.innerHTML = this.sections[0].content

		this.VDOM.append(article)

		return this.VDOM
	}

	render() {
		document.getElementById('app').append(this.VDOM)
	}

	addController(controllerId) {
		this.bindControllers.push(controllerId)
	}

	openSection(i) {
		let article = this.VDOM.getElementsByClassName('article')[0]

		article.innerHTML = this.sections[i].content

		let spans = this.VDOM.getElementsByClassName('description-nav__item')

		for (var j = this.countOfSection - 1; j >= 0; j--) {
			if(spans[j].className != 'description-nav__item') {	
				spans[j].className = 'description-nav__item'
			}
		}

		spans[i].className += ' active' 
	}

	addController(id) {
		this.bindControllers.push(id)
	}

	async open() {
		let infoArea = document.getElementsByClassName('description')[0]

		let descriptionHeader = document.getElementsByClassName('controller-name__over-info')[0]

		let buttonHeader = document.getElementsByClassName('controller-name__toggle')[0]

		let controllers = this.bindControllers.map(function(item){
			return document.getElementById(item)
		})

		if (!infoArea.classList.contains('info_on')) {
			infoArea.classList.add('info_on')
		}

		if (!buttonHeader.classList.contains('info_on')) {
			buttonHeader.classList.add('info_on')
		}

		buttonHeader.getElementsByTagName('svg')[0].style.transform = 'rotate(0deg)'

		if (!descriptionHeader.classList.contains('info_on')) {
			descriptionHeader.classList.add('info_on')
		}

		for (var i = controllers.length - 1; i >= 0; i--) {
			if (!controllers[i].className.includes('controller__position-portability-on ')) {
				controllers[i].className += 'controller__position-portability-on ' 
			}
		}

		for (var i = controllers.length - 1; i >= 0; i--) {
			if (controllers[i].className.includes('controller__position-portability-off ')) {
				controllers[i].className = controllers[i].className.replace('controller__position-portability-off ','')
			}
		}
	}

	close() {
		let infoArea = document.getElementsByClassName('description')[0]

		let descriptionHeader = document.getElementsByClassName('controller-name__over-info')[0]

		let buttonHeader = document.getElementsByClassName('controller-name__toggle')[0]

		let controllers = this.bindControllers.map(function(item){
			return document.getElementById(item)
		})

		if (infoArea.classList.contains('info_on')) {
			infoArea.classList.remove('info_on')
		}

		buttonHeader.getElementsByTagName('svg')[0].style.transform = 'rotate(180deg)'

		if (descriptionHeader.classList.contains('info_on')) {
			descriptionHeader.classList.remove('info_on')
		}

		for (var i = controllers.length - 1; i >= 0; i--) {
			if (!controllers[i].className.includes('controller__position-portability-off ')) {
				controllers[i].className += 'controller__position-portability-off ' 
			}
		}

		for (var i = controllers.length - 1; i >= 0; i--) {
			if (controllers[i].className.includes('controller__position-portability-on ')) {
				controllers[i].className = controllers[i].className.replace('controller__position-portability-on ','')
			}
		}
	}
}