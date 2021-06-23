import {Controller} from './Controller.js'
import {InfoPage} from './InfoPage.js'
import {ControllerFactory} from './ControllerFactory.js'
import {Settings} from './Settings.js'
import {AboutPage} from './AboutPage.js'

'use strict'

export class App {
	constructor(settings = {},allSettings = {}) {
		this.init(settings,allSettings)
	}

	init(settings,allSettings) {
		({
			name: this.name = 'default',
			pageInfo: this.pageInfo,
			grafarInfo: this.grafarInfo = {
				backgroundColor:'white',
				path:'./dist/js/default.js'	
			},
			controllers: this.controllers = {
				count:2,
				controllers: [{
					name:'1'
				}]
			}
		} = settings)

		this.allSettings = allSettings

		this.infoIsOpen = false
		this.controllersIsOpen = false
	}

	//Запуск приложения
	async start() {
		// Загружаем все необходимое
		await Promise.all([this.downloadScript(),this.downloadSettings(),this.downloadCss()]) //DONE	
		// Создаем описание
		this.createPageInfo() //DONE
		// создаем контроллеры
		this.createControllers()
		// подготавливаем все к рендерингу 
		this.build()
		// останавливаем онимацию загрузки
		await this.stopAnimation() //DONE
		// выводим на экран
		this.render()
		// запускаем рендеринг графической модели
		await this.createGrafar()
		// запускаем анимацию открытия элементов управления
		await this.openUI() //DONE
		// окончательно останавливаем загрузку
		await this.stopLoading()//DONE
		// Убираем загрузку
		await this.deleteLoading()//DONE
	}

	// обновление раздела
	async refresh(name) {
		let n=document.getElementsByClassName("loading")[0];
		n.classList.contains("unavailable")&&n.classList.remove("unavailable")
		n.classList.contains("end")&&n.classList.remove("end")

		for (let i = 0; i < n.children.length; i++) {
     		n.children[i].classList.contains("end")&&n.children[i].classList.remove("end")
   		}

		let prevApp = document.getElementById('app')

		prevApp.innerHTML = ''

		this.protoFactory = undefined
		this.protoControllers = undefined
		this.protoPageInfo = undefined

		document.scripts[2].remove();

		let settings = new Settings(name)

		let data = (await settings.downloadData()).settings

		this.init(data,settings)

		await this.downloadSettings() //DONE

		this.createPageInfo() //DONE
		this.createControllers() 
		this.build()
		await this.stopAnimation() //DONE
		this.render()
		
		await this.createGrafar()
		await this.openUI() //DONE
		await this.stopLoading()//DONE
		await this.deleteLoading()//DONE
	}

	async downloadCss() {
		let link = document.createElement('link')
		
		link.rel = 'stylesheet'
		link.type = 'text/css'
		link.href = './dist/css/mainPage.css'

		document.head.appendChild(link)
	}

	async downloadScript() {
		async function waitDownloadScript() {
    		await new Promise(res => setTimeout(res, 100))
    		if (!App.flag) waitDownloadScript()
		}

		App.flag = false	
		let script = document.createElement('script')

		script.src = './dist/js/grafar.js'
		document.head.append(script)

		script.onload = () => {
			setTimeout(function() {App.flag = true}, 100)	
		} 

		script.onerror = () => alert('Ошибка загрузки: ' + script.src)

		await waitDownloadScript()
	}

	async downloadSettings() {
		function getCookie(name) {
  			let matches = document.cookie.match(new RegExp(
    			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  			))

  			return matches ? decodeURIComponent(matches[1]) : undefined
		}
	}

	async createGrafar() {
		let script = document.createElement('script')

		script.src = this.grafarInfo.path
		document.head.append(script)
	}

	async stopAnimation() {
		await new Promise(res => setTimeout(res, 3000))

		let loadingImages = document.getElementsByClassName('loading__image')
		for(let item of loadingImages){
			item.classList.add('end')			
		}

		if(app.classList.contains('unavailable')) {	
			app.classList.remove('unavailable')
		}
	}

	async stopLoading() {
		let loading = document.getElementsByClassName('loading')[0]

		if (!loading.classList.contains('end')) {
			loading.classList.add('end')
		}

		// await new Promise(res => setTimeout(res, 100))
	}

	async deleteLoading() {
		let loading = document.getElementsByClassName('loading')[0]

		await new Promise(res => setTimeout(res, 1000))

		if (!loading.classList.contains('unavailable')) {
			loading.classList.add('unavailable')
		}
	}

	createControllers() {
		this.protoAboutPage = new AboutPage()

		let controllerFactory = new ControllerFactory(this.controllers,this.name,this.allSettings,this,this.protoAboutPage);

		if(this.pageInfo){
			this.protoControllers = controllerFactory.setInfo({infoPageCreated:true,infoPage:this.protoPageInfo}).start().getControllers()
		} else {
			this.protoControllers = controllerFactory.setInfo({infoPageCreated:false}).start().getControllers()
		}

		this.protoFactory = controllerFactory
	}

	createPageInfo() {
		if(this.pageInfo && this.pageInfo.countOfSection > 0) {
			this.protoPageInfo = new InfoPage(this.pageInfo)
		}
	}

	async toggleControllers() {
		for (var i = this.protoControllers.length - 1; i >= 1; i--) {			
			document.getElementById(this.protoControllers[i].controllerId).className = 'on ' + document.getElementById(this.protoControllers[i].controllerId).className
		}
	}

	async openUI() {
		if(this.protoPageInfo) {
			await Promise.all([this.protoPageInfo.open(),this.toggleControllers()])

			this.infoIsOpen = true
		} else {	
			await this.toggleControllers()
		}
		this.controllersIsOpen = true
	}

	build() {
		this.VDOM = document.createElement('main')
		this.VDOM.className = 'app'

		let grafar = document.createElement('div')
		grafar.className = 'main_area__graph'
		grafar.id = 'render'

		if (this.protoPageInfo){
			this.VDOM.append(this.protoPageInfo.build())
		}

		this.VDOM.append(grafar)
	}

	render() {
		document.getElementById('app').prepend(this.VDOM)
	}
}