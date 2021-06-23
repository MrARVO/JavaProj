export const settings = {
	name: 'StartPage',
	pageInfo: {
		countOfSection: 3,
		sections:[{
			name:'Главная',
			content:'<h1>Анимированные визуализации патологических примеров множеств и функций</h1><p>В программе представлены следующие разделы:</p><ul><li>Простейшие фракталы</li><li>Фрактальные кривые</li><li>Канторова лестница</li></ul><br><h3>Раздел Простейшие фракталы включает в себя:</h3><ul><li>Канторово множество</li><li>Ковер Серпинского</li><li>Кладбище Серпинского</li></ul><br><h3>Раздел Фрактальные кривые включает в себя:</h3><ul><li>Кривая Гильберта</li></ul>'
		},{
			name:'Обучение',
			content:'<h1>Обучение</h1><p>Данная программа предназначена демонстраций учебного материала.</p><p>Способы управления моделью:</p><ul style="list-style: none;"><li><figure><p><img src="./dist/image/button.png" alt="Картинка кнопки" /></p><figcaption>Кнопка</figcaption></figure></li><li><figure><p><img src="./dist/image/text.png" alt="Картинка текстового блока" /></p><figcaption>Текстовый блок</figcaption></figure></li><li><figure><p><img src="./dist/image/textWithOptions.png" alt="Картинка выпадающего списка" /></p><figcaption>Текстовый блок с вариантами</figcaption></figure></li><li><figure><p><img src="./dist/image/color.png" alt="Картинка блока с выбором цвета" /></p><figcaption>Выбор цвета</figcaption></figure></li><li><figure><p><img src="./dist/image/range.png" alt="Картинка ползунка" /></p> <figcaption>Ползунок</figcaption> </figure> </li> </ul> <p>У каждого элемента управления может присутствовать описание:</p> <figure> <p><img src="./dist/image/aboutController.png" alt="Описание элемента управления" /></p> <figcaption>Описание элемента управления</figcaption> </figure> <p>В программе присутствует возможность выбора "Глав" у каждой "Главы" может присутствовать страница с описанием, элементы управления и модель для демонстраций.</p> <p>Выбор "Глав" происходит через меню - выпадающий список в правом верхнем углу</p> <figure> <p><img src="./dist/image/textWithOptions.png" alt="Выбор главы" /></p> <figcaption>Выбор главы</figcaption> </figure> <p>В каждой главе может присутствовать информационная панель, свернуть ее можно воспользовавшись кнопкой справа от панели</p> <figure> <p><img src="./dist/image/close.png" alt="Свернуть панель" /></p> <figcaption>Свернуть панель</figcaption> </figure> <p>В информационной панели присутствует переключание между разделами: </p> <figure> <p><img src="./dist/image/menu.png" alt="Переключение между разделами" /></p> <figcaption>Переключение между разделами</figcaption> </figure> <p>В разделах может содержаться любой html документ - т.е. могут присутствовать текст, картинки, видео, элементы контроля (например Google Формы)</p> <p>В правом верхнем углу присутствует кнопка, для открытия панели Настроек</p> <figure> <p><img src="./dist/image/sett.png" alt="Настройки" /></p> <figcaption>Настройки</figcaption> </figure> <p>В настройках содержится краткая информация о программе и некоторые характеристики программы, которые можно изменить.</p> <figure> <p><img src="./dist/image/sett1.png" alt="Параметры страницы" /></p> <figcaption>Параметры страницы</figcaption></figure><p>Для работы программы может потребоваться доступ к сети Интернет</p><b>Для работы программы рекомендуется использовать последние версии браузеров Google Chrome, Microsoft Edge или Mozilla Firefox</b>'
		},{
			name:'Информация',
			content:'<h1>Анимированные визуализации патологических примеров множеств и функций</h1><p>Программа предназначена для обучения студентов.</p><p>Программа разработана в рамках курсовой работы за 3 курс БПИ НИУ ВШЭ.</p><p>Автор: Сидоров Максим О.</p><p>2020</p>'
		}]
	},
	grafarInfo:{
		backgroundColor:'white',
		path:'./dist/js/default.js'
	},
	controllers:{
		count:1,
		controllers: [{
			direction:'row',
			x:'center',
			y:'bottom',
			infoPortability:true,
			content:[{
				type:'controllerArea',
				direction:'column',
				content:[{
					type:'controller',
					inputType:'text',
					height:50,
					width:150,
					label:'Сюда вы можете ввести необходимое значение'
				},{
					type:'controller',
					inputType:'button',
					height:50,
					content:'Кнопка!',
					width:150,
					label:'Самая обычная кнопка, очень полезная штука!'
				}] 
			},{
				type:'controller',
				inputType:'range',
				height:100,
				width:50,
				label:'Текст описания может быть очень большим! А еще сюда можно добавлять форматирование: <b style = "color:red;">Пример1</b> или <i>Пример2</i> и многое другое!<br><i>Можно вставлять картинки!</i>'
			},{
				type:'controllerArea',
				direction:'column',
				content:[{
					type:'controller',
					inputType:'button',
					height:50,
					content:'Действие',
					width:150,
					label:'Описание действия'	
				},{
					type:'controllerArea',
					direction:'row',
					content:[{
						type:'controller',
						inputType:'color',
						height:50,
						width:75,
						label:'Тут вы можете выбрать цвет'
					},{
						type:'controller',
						inputType:'datalist',
						height:50,
						content:'№',
						width:75,
						label:'Тут может быть выпадающий список'
					}] 
				}] 
			}]
		}]
	}
}
