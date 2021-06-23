
export const settings = {
	name: 'SimplestFractals',
	pageInfo: {
		countOfSection: 8,
		sections:[{
			name:'Теория',
			content:'<h1>Фактралы</h1><p><b>Фракта́л</b> — множество, обладающее свойством самоподобия (объект, в точности или приближённо совпадающий с частью себя самого, то есть целое имеет ту же форму, что и одна или более частей).<br> В математике под фракталами понимают множества точек в евклидовом пространстве, имеющие дробную метрическую размерность (в смысле Минковского или Хаусдорфа), либо метрическую размерность, отличную от топологической, поэтому их следует отличать от прочих геометрических фигур, ограниченных конечным числом звеньев. Самоподобные фигуры, повторяющиеся конечное число раз, называются предфракталами.</p><img width="100%" src="./dist/image/800px-Mandel_zoom_00_mandelbrot_set.jpg"><p>Первые примеры самоподобных множеств с необычными свойствами появились в XIX веке в результате изучения непрерывных недифференцируемых функций (например, функция Больцано, функция Вейерштрасса, множество Кантора).<br>Термин «фрактал» введён Бенуа Мандельбротом в 1975 году и получил широкую известность с выходом в 1977 году его книги «Фрактальная геометрия природы». Особую популярность фракталы обрели с развитием компьютерных технологий, позволивших эффектно визуализировать эти структуры.</p><p>Слово «фрактал» употребляется не только в качестве математического термина. Фракталом может называться предмет, обладающий, по крайней мере, одним из указанных ниже свойств: </p><ul style="list-style: square inside; background-color: rgba(0,0,0,0.05);"><li>Обладает нетривиальной структурой на всех масштабах. В этом отличие от регулярных фигур (таких как окружность, эллипс, график гладкой функции): если рассмотреть небольшой фрагмент регулярной фигуры в очень крупном масштабе, то он будет похож на фрагмент прямой. Для фрактала увеличение масштаба не ведёт к упрощению структуры, то есть на всех шкалах можно увидеть одинаково сложную картину.</li><li>Является самоподобным или приближённо самоподобным.</li><li>Обладает дробной метрической размерностью или метрической размерностью, превосходящей топологическую.</li></ul><p>Многие объекты в природе обладают свойствами фрактала, например: побережья, облака, кроны деревьев, снежинки, система кровообращения, альвеолы. </p>'
		},{
			name:'Примеры',
			content:'<h1>Примеры</h1><h2>Самоподобные множества с необычными свойствами в математике</h2><p>Начиная с конца XIX века, в математике появляются примеры самоподобных объектов с патологическими с точки зрения классического анализа свойствами. К ним можно отнести следующие: </p><ul><li>Множество Кантора — нигде не плотное несчётное совершённое множество. Модифицировав процедуру, можно также получить нигде не плотное множество положительной длины</li><li>Треугольник Серпинского («скатерть») и ковёр Серпинского — аналоги множества Кантора на плоскости</li><li>Губка Менгера — аналог множества Кантора в трёхмерном пространстве</li><li>Примеры Вейерштрасса и Ван дер Вардена нигде не дифференцируемой непрерывной функции</li><li>Кривая Коха — несамопересекающаяся непрерывная кривая бесконечной длины, не имеющая касательной ни в одной точке</li><li>Кривая Пеано — непрерывная кривая, проходящая через все точки квадрата</li></ul><h2>Рекурсивная процедура получения фрактальных кривых</h2><img src="./dist/image/Koch_curve_construction.svg.png"><p>Существует простая рекурсивная процедура получения фрактальных кривых на плоскости. Зададим произвольную ломаную с конечным числом звеньев, называемую генератором. Далее заменим в ней каждый отрезок генератором (точнее, ломаной, подобной генератору). В получившейся ломаной вновь заменим каждый отрезок генератором. Продолжая до бесконечности, в пределе получим фрактальную кривую. На рисунке справа приведены первый, второй и четвёртый шаги этой процедуры для кривой Коха.</p><p>Примерами таких кривых служат: </p><ul><li>Кривая Коха (снежинка Коха)</li><li>Кривая Леви</li><li>Кривая Минковского</li><li>Кривая Гильберта</li><li>Ломаная (кривая) дракона (Фрактал Хартера-Хейтуэя)</li></ul><br><img src="./dist/image/Fractal_julia.png"><a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%BE_%D0%96%D1%8E%D0%BB%D0%B8%D0%B0">Множество Жюлиа́</a>'
		},{
			name:'1 - Множество Кантора',
			content:'<h1><h1>Множество Кантора</h1><p><b>Ка́нторово мно́жество (канторов дисконтинуум, канторова пыль)</b> — один из простейших фракталов, подмножество единичного отрезка вещественной прямой, которое является классическим примером дисконтинуума в математическом анализе. Описано в 1883 году Георгом Кантором.</p><h2>Классическое построение</h2><p>Из единичного отрезка <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{0}=[0,1]}"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>0</mn> </mrow> </msub> <mo>=</mo> <mo stretchy="false">[</mo> <mn>0</mn> <mo>,</mo> <mn>1</mn> <mo stretchy="false">]</mo> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle C_{0}=[0,1]}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/74582af582e1f60ff548ee41c59f5d38f7023032" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:10.467ex; height:2.843ex;" alt="C_0=[0,1]"></span> удалим среднюю треть, то есть <a href="/wiki/%D0%9F%D1%80%D0%BE%D0%BC%D0%B5%D0%B6%D1%83%D1%82%D0%BE%D0%BA_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)" title="Промежуток (математика)">интервал</a> <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle (1/3,2/3)}"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <mo stretchy="false">(</mo> <mn>1</mn> <mrow class="MJX-TeXAtom-ORD"> <mo>/</mo> </mrow> <mn>3</mn> <mo>,</mo> <mn>2</mn> <mrow class="MJX-TeXAtom-ORD"> <mo>/</mo> </mrow> <mn>3</mn> <mo stretchy="false">)</mo> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle (1/3,2/3)}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/93c00d24a19cb19c7b001e09232f999f81a6e0b9" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:9.818ex; height:2.843ex;" alt="{\displaystyle (1/3,2/3)}"></span>. Оставшееся точечное множество обозначим через <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{1}}"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>1</mn> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle C_{1}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/babf569931f1a7b5182b9bec51873c2f5692fbb8" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.716ex; height:2.509ex;" alt="C_{1}"></span>. Множество <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{1}=[0,1/3]\cup [2/3,1]}"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>1</mn> </mrow> </msub> <mo>=</mo> <mo stretchy="false">[</mo> <mn>0</mn> <mo>,</mo> <mn>1</mn> <mrow class="MJX-TeXAtom-ORD"> <mo>/</mo> </mrow> <mn>3</mn> <mo stretchy="false">]</mo> <mo>∪<!-- ∪ --></mo> <mo stretchy="false">[</mo> <mn>2</mn> <mrow class="MJX-TeXAtom-ORD"> <mo>/</mo> </mrow> <mn>3</mn> <mo>,</mo> <mn>1</mn> <mo stretchy="false">]</mo> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle C_{1}=[0,1/3]\cup [2/3,1]}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/16422c93078116035290989bc2c16dc25634589e" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; width:22.352ex; height:2.843ex;" alt="C_1=[0,1/3]\cup[2/3,1]"></span> состоит из двух отрезков; удалим теперь из каждого отрезка его среднюю треть, и оставшееся множество обозначим через <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{2}}"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>2</mn> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle C_{2}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7ec545f7870665e1028b7492746848d149878808" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.716ex; height:2.509ex;" alt="C_{2}"></span>. Повторив эту процедуру опять, удаляя средние трети у всех четырёх отрезков, получаем <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{3}}"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>3</mn> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle C_{3}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/66e9abeb5057b7afbf88e3169101849354f13c65" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:2.716ex; height:2.509ex;" alt="C_{3}"></span>. Дальше таким же образом получаем последовательность замкнутых множеств <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C_{0}\supset C_{1}\supset C_{2}\supset \dots }"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>0</mn> </mrow> </msub> <mo>⊃<!-- ⊃ --></mo> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>1</mn> </mrow> </msub> <mo>⊃<!-- ⊃ --></mo> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mn>2</mn> </mrow> </msub> <mo>⊃<!-- ⊃ --></mo> <mo>…<!-- … --></mo> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle C_{0}\supset C_{1}\supset C_{2}\supset \dots }</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0441028f4e27559c3b8084620e48400a53ef77f9" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.671ex; width:20.167ex; height:2.509ex;" alt="C_0\supset C_1\supset C_2\supset\dots"></span>. Пересечение <dl><dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="{\displaystyle C=\bigcap _{i=0}^{\infty }C_{i}}"> <semantics> <mrow class="MJX-TeXAtom-ORD"> <mstyle displaystyle="true" scriptlevel="0"> <mi>C</mi> <mo>=</mo> <munderover> <mo>⋂<!-- ⋂ --></mo> <mrow class="MJX-TeXAtom-ORD"> <mi>i</mi> <mo>=</mo> <mn>0</mn> </mrow> <mrow class="MJX-TeXAtom-ORD"> <mi mathvariant="normal">∞<!-- ∞ --></mi> </mrow> </munderover> <msub> <mi>C</mi> <mrow class="MJX-TeXAtom-ORD"> <mi>i</mi> </mrow> </msub> </mstyle> </mrow> <annotation encoding="application/x-tex">{\displaystyle C=\bigcap _{i=0}^{\infty }C_{i}}</annotation> </semantics> </math></span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/345eae41ffa1177cd020204356bae5f91c630b34" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -3.005ex; width:10.381ex; height:6.843ex;" alt="C=\bigcap_{i=0}^\infty C_i"></span></dd></dl> называется канторовым множеством. </p> <img src="./dist/image/Cantordamm_i_sju_iterationer.png"><h2>Свойства</h2><ul><li>Канторово множество является нигде не плотным совершенным множеством.</li><li>Канторово множество континуально.</li><li>Канторово множество имеет топологическую размерность 0.</li><li>Каждый нульмерный метризуемый компакт без изолированных точек гомеоморфен канторову множеству.</li><li>Всякий метризуемый компакт — образ канторова множества при некотором непрерывном отображении.</li><li>Канторово множество универсально для всех нульмерных пространств со счётной базой.</li></ul>'
		},{
			name:'2 - Кладбище Серпинского',
			content:'<h1>Кладбище Серпинского</h1><p>Фрактал, один из двумерных аналогов множества Кантора, предложенный польским математиком Вацлавом Серпинским.</p><img src="./dist/image/Figura-4-Construcao-do-Triangulo-de-Sierpinski-Este-conjunto-representa-duas.png"><br><img src="./dist/image/HxcA5dc0RX8.jpg">'
		},{
			name:'3 - Ковер Серпинского',
			content:'<h1>Ковер Серпинского</h1><p><b>Ковёр Серпинского (квадрат Серпинского)</b> — фрактал, один из двумерных аналогов множества Кантора, предложенный польским математиком Вацлавом Серпинским. </p><img src="./dist/image/Sierpinski6.png"><h2>Итеративный метод</h2><p>Квадрат делится прямыми, параллельными его сторонам, на 9 равных квадратов. Из квадрата удаляется внутренность центрального квадрата. Получается множество, состоящее из 8 оставшихся квадратов «первого ранга». Поступая точно так же с каждым из квадратов первого ранга, получим множество, состоящее из 64 квадратов второго ранга.</p><h2>Свойства</h2><ul><li>Ковёр Серпинского представляет собой частный случай многоугольного множества Серпинского. Он состоит из 8 одинаковых частей, коэффициент подобия 1/3.</li><li>Ковер Серпинского замкнут.</li><li>Ковер Серпинского имеет топологическую размерность 1.</li><li>Ковер Серпинского имеет промежуточную (то есть не целую) Хаусдорфову размерность</li><li>Если гиперболическая группа имеет одномерную границу и при этом не является полупрямым произведением, то её граница гомеоморфна ковру Серпинского.</li></ul>'
		},{
			name:'Полезная информация',
			content:'<h1>Полезная информация</h1><a href="https://b-ok.xyz/book/3676309/794444">Математический анализ. Углубленный курс</a><br><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BE_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%BE">Канторово множество</a><br><a href="https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BA%D1%82%D0%B0%D0%BB">Фрактал</a><br><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D1%91%D1%80_%D0%A1%D0%B5%D1%80%D0%BF%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE">Ковёр Серпинского</a>'
		},{
			name:'Картинки',
			content:'<h3>Множество Кантора</h3><img src="./dist/image/ZB3CY.png"><img src="./dist/image/mktr.png"><h3>Клабище Серпинского</h3><img src="./dist/image/Аннотация 2020-04-04 072346.png"><img src="./dist/image/Аннотация 2020-04-04 072730.png"><h3>Ковер Серпинского</h3><img src="./dist/image/Аннотация 2020-04-04 072921.png"><img src="./dist/image/Аннотация 2020-04-04 073005.png">'
		},{
			name:'Практика',
			content:'<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiL-tKiaZWLnCqJnkp0mJkfm1tC3PTQOImNjOTBZ1ErVau5g/viewform?embedded=true" width="100%" height="1200px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>'
		}]
	},grafarInfo:{
		backgroundColor:'white',
		path:'./dist/js/graph1.js'
	},
	controllers:{
		count:3,
		controllers: [{
			direction:'column',
			x:'right',
			y:'center',
			content:[{
				type:'controller',
				inputType:'button',
				height:50,
				content:'1',
				width:50,
				label:'Множество Кантора'
			},{
				type:'controller',
				inputType:'button',
				height:50,
				content:'2',
				width:50,
				label:'Кладбище Серпинского'
			},{
				type:'controller',
				inputType:'button',
				height:50,
				content:'3',
				width:50,
				label:'Ковер Серпинского'
			}]
		},{
			direction:'column',
			x:'right',
			y:'bottom',
			content:[{
				type:'controller',
				inputType:'button',
				height:50,
				content:'Заполнение',
				width:130,
				label:'Ускорить анимацию'
			}]
		},{
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
				type:'controllerArea',
				direction:'column',
				content:[{
					type:'controller',
					inputType:'button',
					height:50,
					content:'Закрасить',
					width:150,
					label:'Введите номер и выберите цвет, для изменения цвета уровня'	
				},{
					type:'controllerArea',
					direction:'row',
					content:[{
						type:'controller',
						inputType:'color',
						height:60,
						width:50,
						label:'Будущий цвет уровня'
					},{
						type:'controller',
						inputType:'datalist',
						height:60,
						content:'№',
						width:80,
						label:'Номер уровня, который нужно закрасить'
					}] 
				}] 
			},{
				type:'controller',
				inputType:'range',
				height:110,
				width:50,
				label:'Дистанция между уровнями'
			},{
				type:'controller',
				inputType:'range',
				height:110,
				width:50,
				label:'Высота уровня'
			},{
				type:'controller',
				inputType:'range',
				height:110,
				width:50,
				label:'Количество уровней'
			}]
		}]
	}
}
