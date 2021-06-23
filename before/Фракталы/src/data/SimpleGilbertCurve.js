export const settings = {
	name: 'SimpleGilbertCurve',
	pageInfo: {
		countOfSection: 3,
		sections:[{
			name:'Теория',
			content:'<h1>Кривая Пеано</h1><p><b>Крива́я Пеа́но</b> - общее название для параметрических кривых, образ которых содержит квадрат (или, в более общем смысле, открытые области пространства). Другое название — заполняющая пространство кривая.</p><p>Интуитивно, непрерывная кривая в размерностях 2 или 3 (или выше) может пониматься как путь, проходимый непрерывно движущейся точкой. Чтобы исключить неотъемлемую неопределённость этого понимания, Жордан в 1887 предложил следующее определение, которое с тех пор было принято как точное определение непрерывной кривой:Кривая (с конечными точками) — это непрерывное отображение, областью определения которого служит единичный отрезок [0, 1].</p> <img src = "./dist/image/2560px-Peanocurve.svg.png">'
		},{
			name:'Кривая Гильберта',
			content:'<h1>Кривая Гильберта</h1><p>— это непрерывная фрактальная заполняющая пространство кривая, впервые описанная немецким математиком Давидом Гильбертом в 1891 году, как вариант заполняющих пространство кривых Пеано, открытых итальянским математиком Джузеппе Пеано в 1890 году.</p><p>Поскольку кривая заполняет плоскость, её размерность Хаусдорфа равна  2 (в точности, её образ является единичным квадратом, размерность которого равна 2 при любом определении размерности, а её граф является компактным множеством, гомеоморфным замкнутому единичному интервалу с хаусдорфовой размерностью 2). </p><img src = "./dist/image/Hilbert_curve.gif">'
		},{
			name:'Практика',
			content:'<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiL-tKiaZWLnCqJnkp0mJkfm1tC3PTQOImNjOTBZ1ErVau5g/viewform?embedded=true" width="100%" height="1200px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>'
		}]
	},
	grafarInfo:{
		backgroundColor:'white',
		path:'./dist/js/graph2.js'
	},
	controllers:{
		count:5,
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
			direction:'column',
			x:'right',
			y:'bottom',
			content:[{
				type:'controller',
				inputType:'button',
				height:50,
				content:'Цветной режим',
				width:130,
				label:'Включить/Выключить цветной режим'
			}]
		},{
			direction:'column',
			x:'right',
			y:'center',
			content:[{
				type:'controller',
				inputType:'range',
				height:250,
				width:50,
				label:'Изменить количество блоков'
			}]
		},{
			direction:'column',
			x:'left',
			y:'center',
			infoPortability:true,
			content:[{
				type:'controller',
				inputType:'range',
				height:250,
				width:50,
				label:'Сместить цвета'
			}]
		},{
			direction:'row',
			x:'center',
			y:'bottom',
			infoPortability:true,
			content:[{
				type:'controller',
				inputType:'range',
				height:110,
				width:50,
				label:'Порядок кривой'
			},{
				type:'controller',
				inputType:'range',
				height:110,
				width:50,
				label:'Расстояние между блоками'
			}]
		}
		]
	}
}
