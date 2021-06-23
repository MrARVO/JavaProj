export class Controller {
	reservedX() {
		return ['left','center','right','extend']
	}

	reservedY() {
		return ['top','center','bottom','extend']
	}

	reservedTypes() {
		return ['button','color','range','text']
	}

	constructor(content,i) {
		({
			direction:this.direction = 'row',
			name:this.name,
			label:this.label,
			verticalAlign:this.verticalAlign,
			fontSize:this.fontSize,
			x:this.x = 'center',
			y:this.y,
			extendPosition:this.extendPosition = {
				x:'100px',
				y:'10px'
			},
			content:this.content,
			infoPortability:this.infoPortability = false,
			isDefContName:this.isDefContName,
			action:this.action,
			inputType:this.inputType = 'button',
			style:this.style = ''
		} = content)

		this.i = parseInt(i, 10)

		this.controllerId = `controller_area${i}`

		this._id = []
	}

	getId() {
		return this._id
	}

	build() {
		if(this.isDefContName) return this.getContName()

		let style = this.style

		let controller = document.createElement('div')
		controller.style.cssText = ``

		controller.className = 'controller__area '
		controller.setAttribute('id',this.controllerId)

		if (this.direction == 'column') {
			controller.className += 'controller__direction-column '
		} else {
			controller.className += 'controller__direction-row '
		}

		this.x = this.x.toLowerCase() 

		if (this.reservedX().includes(this.x)) {
			if (this.x == 'extend'){
				style += `left:${this.extendPosition.x}px;`
			} else {
				controller.className += `controller__position_x-${this.x} `
			}
		} else {
			controller.className += 'controller__position_x-left '
		}

		if (this.reservedY().includes(this.y)) {
			if (this.y == 'extend'){
				style += `top:${this.extendPosition.y}px;`
			} else {
				controller.className += `controller__position_y-${this.y} `
			}
		} else {
			controller.className += 'controller__position_y-left '
		}

		if (this.infoPortability) {
			controller.className += 'controller__position-portability-off '
		}

		this.height = this.width = 0

		let id = this.i

		let { fragment:localContent, height:localHeight, width:localWidth } = this.buildContent(this.content,this.direction,id)

		controller.append(localContent)
		this.height = localHeight
		this.width = localWidth

		style += `height: ${this.height}px;width: ${this.width}px;`

		if (this.y == 'top') {
			style += `transform:translate3D(0,-${this.height + 10}px,0)`
		} else if (this.y == 'bottom') {
			style += `transform:translate3D(0,${this.height + 10}px,0)`
		} else if (this.y == 'center') {
			if (this.x == 'left'){
				style += `transform:translate3D(-${this.width + 10}px,0,0)`
			} else if (this.x == 'right') {
				style += `transform:translate3D(${this.width + 10}px,0,0)`
			} else {
				style += `transform:translate3D(0,-${this.height + document.documentElement.clientWidth / 2}px,0)`
			}
		} else {
			if (this.extendPosition && this.extendPosition.y < document.documentElement.clientWidth / 2) {
				style += `transform:translate3D(0,-${this.height + this.extendPosition.y}px,0)` 
			} else {
				style += `transform:translate3D(0,${this.height + this.extendPosition.y}px,0)`
			}
		}

		controller.style.cssText = style

		document.getElementById('app').append(controller)

		return controller
	}

	buildContent(content,direction,id) {
		let fragment = document.createDocumentFragment();
		let maxHeight = 0
		let height = 0
		let width = 0
		let maxWidth = 0

		let curId = 0

		for (var i = content.length - 1; i >= 0; i--) {
			if (content[i].type == 'controllerArea'){
				let controllerArea = document.createElement('div')
				controllerArea.className = 'controller__area-container '

				if(content[i].direction == 'row'){
					controllerArea.className += 'controller__direction-row '
				} else {	
					controllerArea.className += 'controller__direction-column '
				}

				curId = 1 + parseInt(curId, 10)
				let id1 = id + '' + curId

				let { fragment:localContent, height:localHeight, width:localWidth } = this.buildContent(content[i].content,content[i].direction,id1)

				controllerArea.append(localContent)

				if (direction == 'row') {
					if (localHeight >= maxHeight) {
						maxHeight = localHeight
					}
					width += localWidth
				} else {
					if (localWidth >= maxWidth) {
						maxWidth = localWidth
					}
					height += localHeight
				}

				fragment.append(controllerArea)
			} else if (content[i].type == 'controller') {
				curId = 1 + parseInt(curId, 10)
				let id1 = id + '' + curId
				let controller = document.createElement('div')

				controller.className = 'controller '

				let input = document.createElement('input')

				input.style.cssText = content[i].style

				controller.style.minHeight = content[i].height + 'px'
				controller.style.minWidth = content[i].width + 'px'

				if (content[i].inputType == 'button'){
					input.type = 'button'

					if (content[i].content) {
						input.value = content[i].content
						input.style.transform = `rotate(${content[i].rotate}deg)`

						if (content[i].height > content[i].width) {
							input.style.width = content[i].height - 20 + 'px'
							input.style.height = content[i].width - 20 + 'px'
						} else {
							input.style.height = content[i].height - 20 + 'px'
							input.style.width = content[i].width - 20 + 'px'
						}

					}
				} else if (content[i].inputType == 'range') {
					input.type = 'range'
					if (content[i].height > content[i].width) {
						input.style.transform = `rotate(-90deg)` // translateX(-${content[i].width / 2 }px)
						input.style.width = content[i].height - 20 + 'px'
						input.style.height = content[i].width - 20 + 'px'
					} else {
						input.style.height = content[i].height - 20 + 'px'
						input.style.width = content[i].width - 20 + 'px'
					}
				} else if (content[i].inputType == 'color') {
					input.type = 'color'
				} else if (content[i].inputType == 'datalist') {
					input.setAttribute('list','d' + id1)

					input.type = 'text'

					input.placeholder = content[i].content

					if (content[i].height > content[i].width) {
						if (content[i].rotate) {
							input.style.transform = `rotate(${content[i].rotate}deg)`
						}
						input.style.width = content[i].height - 20 + 'px'
						input.style.height = content[i].width - 20 + 'px'
					} else {
						input.style.height = content[i].height - 20 + 'px'
						input.style.width = content[i].width - 20 + 'px'
					}
				} else if (content[i].inputType == 'text') {
					input.type = 'text'

					if (content[i].height > content[i].width) {
						if (content[i].rotate) {
							input.style.transform = `rotate(${content[i].rotate}deg)`
						}
						input.style.width = content[i].height - 20 + 'px'
						input.style.height = content[i].width - 20 + 'px'
					} else {
						input.style.height = content[i].height - 20 + 'px'
						input.style.width = content[i].width - 20 + 'px'
					}
				} else {
					input.type = 'button'
				}

				
				input.id = 'c' + id1
				this._id.push(id1)

				controller.append(input)

				if (direction == 'row') {
					if (content[i].height >= maxHeight) {
						maxHeight = content[i].height
					}
					width += content[i].width
				} else {
					if (content[i].width >= maxWidth) {
						maxWidth = content[i].width
					}
					height += content[i].height
				}

				if (content[i].label) {
					let _label = content[i].label

					let labelElement
					let flag = false

					input.onmouseover = async function(e) {
						flag = true

						await new Promise(res => setTimeout(res, 1000))

						if (flag) {
							function getCoords(elem) {
								let box = elem.getBoundingClientRect()

							 	return {
							    	top: box.top + pageYOffset,
							    	left: box.left + pageXOffset
							  	}
							}

							labelElement = document.createElement('div')
							labelElement.className = "label"
							labelElement.id = 'label'
							labelElement.innerHTML = _label
							let style
							let coords = getCoords(controller)

							let infoPage = document.getElementsByClassName('description')[0]

							let infoPageWidth = 0


							if (infoPage) {
								infoPageWidth = infoPage.clientWidth + getCoords(infoPage).left
							}
							
							if (coords.left - infoPageWidth < 200){
								style = `top:${coords.top}px; left:${controller.clientWidth + coords.left + 10}px; `
							}
							else if (document.documentElement.clientWidth - coords.left < 150){

								style = `top:${coords.top}px; right:${document.documentElement.clientWidth - coords.left + 10}px; `
							} else {
								if (coords.top < document.documentElement.clientHeight / 3) {
									style = `top:${coords.top + controller.clientHeight + 10}px; left:${coords.left}px; `
								} else {
									style = `bottom:${document.documentElement.clientHeight - coords.top + 10}px; left:${coords.left}px; `
								}			
							}

							labelElement.style.cssText = style

							document.getElementById('app').append(labelElement)
							flag = true	

						}
  					}

					input.onmouseout = async function() {
						if(labelElement){
							labelElement.remove()
						}

						flag = false

						await new Promise(res => setTimeout(res, 990))

						if(labelElement){
							labelElement.remove()
						}
					}

					input.onclick = function() {
						if(labelElement){
							labelElement.remove()
						}
					}
				}

				fragment.append(controller)
			} else {
				throw Error('Упс! Ошибка в данных!')
			}
		}

		height += maxHeight
		width += maxWidth

		return {fragment,height,width}
	}

	getContName() {
		let controller = document.createElement('div')

		controller.className = 'controller-name'

		let underInfo = document.createElement('h1')
		let overInfo = document.createElement('h1')

		underInfo.className = 'controller-name__under-info'
		overInfo.className = 'controller-name__over-info'

		underInfo.innerHTML = overInfo.innerHTML = this.name

		controller.append(underInfo)
		controller.append(overInfo)

		if (this.action){
			let button = document.createElement('button')
			button.className = 'controller-name__toggle'
			button.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.62v6.756c0 .287-.105.575-.314.795-.418.44-1.097.44-1.515 0L4.886 8.797a1.165 1.165 0 0 1 0-1.59L9.17 3.83c.42-.44 1.098-.44 1.516 0 .208.218.312.504.314.79z" fill="currentColor"></path></svg>'

			button.id = 'button_infoPage_-1'

			let isOpen = 1

			button.onclick = () => {
				if (isOpen == 0){
					this.action.open()
					isOpen = 1
				} else { 
					this.action.close()
					isOpen = 0
				}
			}

			controller.append(button)
		}

		document.getElementById('app').append(controller)

		return controller
	}
}