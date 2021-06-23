'use strict'

export class Settings {
	//На вход путь к файлу с настройками + информацией
	constructor(path) {
		this.path = path
		this._settings = {}
	}

	async downloadData() {
		try {
			this._settings = await import(/* webpackMode: "eager" */'../data/settings.js')
		} catch(err) {
			alert('Ошибка подключения файла конфигураций! - "./data/settings.js"')
			console.log(err)
		}

		return this
	}

	get settings() {
		return this._settings.modules[this.path];
	}

	get allNames() {
		let names = []

		for (let key in this._settings.modules) {
			names.push(this._settings.modules[key].name)
		}

		return names
	}
}