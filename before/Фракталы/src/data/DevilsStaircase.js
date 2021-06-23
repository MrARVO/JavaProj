export const settings = {
	name: 'DevilsStaircase',
	pageInfo: {
		countOfSection: 3,
		sections:[{
			name:'Теория',
			content:'<h1>Канторова лестница</h1><p><b>Канторова лестница</b> — пример непрерывной монотонной функции [0, 1] → [0, 1], которая не является константой, но при этом имеет производную, равную нулю в почти всех точках (сингулярной функции). Иногда называется «Чёртовой лестницей» или «дьявольской лестницей».</p><img src="./dist/image/Kantor_Stairs.png">'
		},{
			name:'Канторова лестница',
			content:'<h1>Канторова лестница</h1><h3>Построение</h3><p>В точках 0 и 1 значение функции принимается равным соответственно 0 и 1. Далее интервал (0, 1) разбивается на три равные части (0, 1/3), (1/3, 2/3) и (2/3, 1). На среднем сегменте полагаем F (x) = 1 / 2. Оставшиеся два сегмента снова разбиваются на три равные части каждый, и на средних сегментах F(x) полагается равной 1/4 и 3/4. Каждый из оставшихся сегментов снова делится на три части, и на внутренних сегментах F(x) определяется как постоянная, равная среднему арифметическому между соседними, уже определенными значениями F(x). На остальных точках единичного отрезка определяется по непрерывности. Полученная функция называется канторовой лестницей. </p><h3>Свойства</h3><ul style="list-style: none;"><li>Производная канторовой лестницы определена и равна нулю во всех точках, кроме канторова множества.</li><li>Канторова лестница непрерывна, ограниченной вариации, но не абсолютно непрерывна.</li><li>Канторова лестница не обладает свойством Лузина.</li></ul><img src="./dist/image/Cantor_function.gif">'
		},{
			name:'Практика',
			content:'<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiL-tKiaZWLnCqJnkp0mJkfm1tC3PTQOImNjOTBZ1ErVau5g/viewform?embedded=true" width="100%" height="1200px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>'
		}]
	},
	grafarInfo:{
		backgroundColor:'white',
		path:'./dist/js/graph3.js'
	},
	controllers:{
		count:1,
		controllers: [{
			direction:'column',
			x:'left',
			y:'bottom',
			infoPortability:true,
			content:[{
				type:'controller',
				inputType:'button',
				height:50,
				content:'Центрировать',
				width:130,
				label:'Переместить модель в стартовое положение'
			}]
		},{
			direction:'row',
			x:'center',
			y:'bottom',
			infoPortability:true,
			content:[{
				type:'controller',
				inputType:'button',
				content:'Кривая',
				height:50,
				width:80,
				label:'Узкая кривая'
			},{
				type:'controller',
				inputType:'button',
				content:'Отрезки',
				height:50,
				width:80,
				label:'Соединить отрезки'
			},{
				type:'controller',
				inputType:'button',
				content:'Цвет',
				height:50,
				width:80,
				label:'Цветной режим'
			},{
				type:'controller',
				inputType:'range',
				height:50,
				width:500,
				label:'Порядок кривой'
			}]
		}
		]
	}
}
