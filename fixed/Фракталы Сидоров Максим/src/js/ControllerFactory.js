import {Controller} from './Controller.js'

'use strict'

export class ControllerFactory {
	constructor(content, name, allSettings,app,aboutPage) {
		({
			count:this.countOfcontrollers,
			controllers:this.controllers
		} = content)

		this.name = name

		this.allSettings = allSettings

		this._controllers = []

		this._id = []

		this.app = app

		this.aboutPage = aboutPage
	}

	getControllers() {
		return this._controllers
	}

	start() {
		
		
		this.createNameController()
		this.createControllers()
		this.createСhoiceController()
		this.createSettingControllers()	
		//this.createCustomControllers()

		return this
	}

	setInfo(content) {
		({
			infoPageCreated:this.infoPageCreated,
			infoPage:this.infoPage
		} = content)

		return this
	}

	getId() {
		return this._id
	}

	createSettingControllers() {
		let controller

		let protoController = new Controller({
			direction:'column',
			x:'right',
			y:'extend',
			style:'z-index:15;background-color:rgb(193, 193, 193);',
			extendPosition:{
				y:70
			},
			content:[{
				inputType:'button',
				type:'controller',
				height:50,
				width:50,
				style:'background:transparent url("./dist/image/cogwheel_icon-icons.com_70237.svg") center center no-repeat;background-size: contain;border:none;outline:none; box-shadow:none;',
				label:'Настройки',
			}]
		},this._controllers.length)

		this._controllers.push(protoController)

		controller = protoController.build()

		this._id.push(protoController.getId())

		if (this.infoPageCreated && controller.className.includes('controller__position-portability-off')){
				this.infoPage.addController(controller.id)
		}

		document.getElementById('c' + protoController.getId()).setAttribute('id','s-c')

		let settings = document.getElementById('s-c')

		let _this = this

		_this.aboutPage.setSettings(settings)

		settings.onclick = () => {
			if(!_this.aboutPage.isOpen) {
				_this.aboutPage.isOpen = true

				_this.aboutPage.open()
			} else {
				_this.aboutPage.isOpen = false
			
				_this.aboutPage.close()
			}
		}

		return controller
	}

	createControllers() {
		let controller

		for (var i = this.controllers.length - 1; i >= 0; i--) {
			let protoController = new Controller(this.controllers[i],i)

			this._controllers.push(protoController)

			controller = protoController.build()

			this._id.push(protoController.getId())

			if (this.infoPageCreated && controller.className.includes('controller__position-portability-off')){
				this.infoPage.addController(controller.id)
			}
		}

		return controller
	}

	createСhoiceController() {
		let controller

		let protoController = new Controller({
			direction:'column',
			x:'right',
			y:'top',
			style:'background-color:rgb(193, 193, 193);',
			content:[{
				inputType:'datalist',
				type:'controller',
				height:50,
				width:200,
				label:'Выбрать модуль',
				content:this.app.name
			}]
		},this._controllers.length)

		this._controllers.push(protoController)

		controller = protoController.build()

		this._id.push(protoController.getId())

		if (this.infoPageCreated && controller.className.includes('controller__position-portability-off')){
				this.infoPage.addController(controller.id)
		}

		let beforeDatalist = document.getElementById('c' + protoController.getId()[0])
		let datalist = document.createElement('datalist')

		datalist.id = 'd' + protoController.getId()[0]

		for (var i = this.allSettings.allNames.length - 1; i >= 0; i--) {
			let option = document.createElement('option')

			option.value = this.allSettings.allNames[i]
			datalist.append(option)
		}

		beforeDatalist.after(datalist)

		let _this = this

		beforeDatalist.onchange = function(e) {
			if (_this.allSettings.allNames.includes(this.value)) {
				_this.app.refresh(this.value)
			}
		}

		return controller
	}

	createNameController() {
		let controller

		if (this.infoPageCreated) {
			controller = new Controller({
				isDefContName: true,
				name: this.name,
				action: this.infoPage
			})
		} else {
			controller = new Controller({
				isDefContName: true,
				name: this.name,
			})
		}

		this._controllers.push(controller)

		return controller.build()
	}

}