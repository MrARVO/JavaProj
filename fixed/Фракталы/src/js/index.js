import {App} from './App.js'
import {Settings} from './Settings.js'

// Запуск приложения
async function start() {
	// Стягиваем первые настройки отображения
	let settings = new Settings('StartPage')

	// Загружаем все необходимое
	let data = (await settings.downloadData()).settings

	let app = new App(data,settings)

	await app.start()
}

start()

