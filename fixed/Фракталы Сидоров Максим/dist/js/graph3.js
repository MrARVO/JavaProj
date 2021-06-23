{
	let pan3d = new grafar.Panel(document.getElementById('render')).setAxes([' ',' ', ' ']).drawAxes(0)

	pan3d.camera.position.set(0, 0, 250)

	let max = 486

	let flagForFill = true

	let path = build()

	let curColor = []
	let forConnect = []

	let camera = {
		cx:pan3d.camera.position.x,
		cy:pan3d.camera.position.y,
		cz:pan3d.camera.position.z,
		rx:pan3d.camera.rotation.x,
		ry:pan3d.camera.rotation.y,
		rz:pan3d.camera.rotation.z,
		qx:pan3d.camera.quaternion.x,
		qy:pan3d.camera.quaternion.y,
		qz:pan3d.camera.quaternion.z,
		sx:pan3d.camera.scale.x,
		sy:pan3d.camera.scale.y,
		sz:pan3d.camera.scale.z,
	}

	// Центрировать?

	{
		let c01 = document.getElementById('c01')

		c01.onclick = async () => {
			pan3d.camera.position.set(camera.cx,camera.cy,camera.cz)
			pan3d.camera.rotation.set(camera.rx,camera.ry,camera.rz)
			pan3d.camera.quaternion.set(camera.qx,camera.qy,camera.qz)
			pan3d.camera.scale.set(camera.sx,camera.sy,camera.sz)
		}
	}

	function build() {
		let path = []

		for (let i = 1; i <= max; i++) {
			path.push({i:i})
		}

		return path
	}

	// Заливка Цветной режим

	let fill = true

	{
		let c12Flag = fill

		let c12 = document.getElementById('c12')
		c12.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

		c12.onclick = () => {
			if (!narrowMode) {
				if(c12Flag) {
					fill = false
					c12.style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

					clearColor()
				} else {
					fill = true
					c12.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

					fillColor(flagForFill)
				}
			} else {

			}

			c12Flag = !c12Flag		
		}
	}

	// Режим отрезков

	let connect = false

	{
		let c13Flag = connect

		let c13 = document.getElementById('c13')
		c13.style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

		c13.onclick = () => {
			if (!narrowMode) {
				if(c13Flag) {
					connect = false
					c13.style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

					path.forEach((item) => {
						item.gr.hide(true)
					})
					forConnect = []

					
				} else {
					connect = true
					c13.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'			
				}

				connectFunc()
			} else {

			}

			c13Flag = !c13Flag		
		}
	}

	// Заливка Цветной режим

	let narrowMode = false

	let narrowPath = []
	let narrow = []
	let narrowGr = []

	{
		let c14Flag = narrowMode

		let c14 = document.getElementById('c14')
		c14.style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

		c14.onclick = () => {
			if(c14Flag) {
				narrowMode = false
				c14.style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

				hideNarrow()

				pan3d.camera.position.set(0, 0, 250)

				document.getElementById('c11').max = 50
				document.getElementById('c11').value = 0
				startPos = 0


			} else {
				narrowMode = true
				c14.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

				hidePath()

				pan3d.camera.position.set(0, 0, 200)

				document.getElementById('c11').max = 90
				document.getElementById('c11').value = 0
				startPos = 0


				narrowBuild(0,0,1000,100,0,9)
				prepareData()

				if(!narrowGr[0]){
					renderNarrow()
				}
				
				renderFrame()
			}

			c14Flag = !c14Flag		
		}
	}

	function prepareData() {
		narrowPath.forEach((item) => {
			if (narrow[item.i]){
				narrow[item.i].push(item)
			} else {
				narrow[item.i] = [item]
			}
		})
	}

	let t1 = grafar.range(0, 7, 8).select()
	let t2 = grafar.range(0, 7, 8).select()
	let p = grafar.set([0,0], true).select()

	function renderFrame() {
		let r = grafar.set([30 / 255]).select()
		let g = grafar.set([30 / 255]).select()
		let b = grafar.set([30 / 255]).select()

		x = 0
		s = 100
						
		// let gr = grafar.pin({axes:[
		// 		grafar.map([t1, t2, p], (t1, t2, p) => cos(t1, p) * sin(t2, p) - 5),
		// 		grafar.map([t1, t2, p], (t1, t2, p) => x*2+s + (s) * cos(t1, p) * cos(t2, p) - 100),
		// 		grafar.map([t1, t2, p], (t1, t2, p) =>  100 + .33*sin(t1, p) - 50)
		// 	],color:[r,g,b]}, pan3d
		// )

		// narrowGr.push({gr:gr})

		//  gr = grafar.pin({axes:[
		// 		grafar.map([t1, t2, p], (t1, t2, p) => cos(t1, p) * sin(t2, p) - 5),
		// 		grafar.map([t1, t2, p], (t1, t2, p) => 200 + (.33) * cos(t1, p) * cos(t2, p) - 99.7),
		// 		grafar.map([t1, t2, p], (t1, t2, p) =>  0 + 50.3*sin(t1, p) )
		// 	],color:[r,g,b]}, pan3d
		// )

		// narrowGr.push({gr:gr})

		 gr = grafar.pin({axes:[
				grafar.map([t1, t2, p], (t1, t2, p) => cos(t1, p) * sin(t2, p) - 5),
				grafar.map([t1, t2, p], (t1, t2, p) => 0 + (.33) * cos(t1, p) * cos(t2, p) - 100.3),
				grafar.map([t1, t2, p], (t1, t2, p) =>  0 + 50.3*sin(t1, p))
			],color:[r,g,b]}, pan3d
		)

		narrowGr.push({gr:gr})

		gr = grafar.pin({axes:[
				grafar.map([t1, t2, p], (t1, t2, p) => cos(t1, p) * sin(t2, p) - 5),
				grafar.map([t1, t2, p], (t1, t2, p) => x*2+s + (s) * cos(t1, p) * cos(t2, p) - 100),
				grafar.map([t1, t2, p], (t1, t2, p) =>  0 + .33*sin(t1, p) - 50)
			],color:[r,g,b]}, pan3d
		)

		narrowGr.push({gr:gr})
	}

	let narrowI = [[]]

	function renderNarrow() {
		let sw = .2
		let sh = 1

		narrow.forEach((itemi,i) => {
			itemi.forEach((itemj,j) => {
				let x = itemj.x /10
				let s = itemj.s /10
				let y = itemj.y

				let r = grafar.set([0 / 255]).select()
				let g = grafar.set([140 / 255]).select()
				let b = grafar.set([240 / 255]).select()
						
				let gr = grafar.pin({axes:[
						grafar.map([t1, t2, p], (t1, t2, p) => .7*cos(t1, p) * sin(t2, p) - 5),
						grafar.map([t1, t2, p], (t1, t2, p) => x*2+s + (s) * cos(t1, p) * cos(t2, p) - 100),
						grafar.map([t1, t2, p], (t1, t2, p) =>  y + .33*sin(t1, p) - 50)
					],color:[r,g,b]}, pan3d
				)

				gr.hide(true)

				if(narrowI[i]){
					narrowI[i].push(gr)
				} else {
					narrowI.push([gr])
				}

				narrowGr.push({gr:gr})
			})
		})




	}

	function narrowBuild(x1,y1,x2,y2,i,j) {
		let s = (x2-x1) / 3

		let x = x1 + s

		let y = y1 + (y2 - y1) / 2

		narrowPath.push({i:i,s:s,x:x,y:y})

		i++

		if (i < j) {
			narrowBuild(x1,y1,x,y,i,j)
			narrowBuild(x+s,y,x2,y2,i,j)
		}
	}

	function hideNarrow() {
		narrowGr.forEach((item) => {
			item.gr.hide(true)
		})
	}

	function hidePath() {
		path.forEach((item) => {
			item.gr.hide(true)
		})
	}

	let arrStages = [{st:0,sp:max}]

	// Смещение

	let startPos = 0

	{
		let range = document.getElementById('c11')

		range.min = 0
		range.value = startPos * 10
		range.max = 50
		range.step = 10

		let count = 243
		let curPos = 0

		range.oninput = () => {
			if (!narrowMode) {
				startPos = range.value / 10

				clearColor()

				changePos(curPos,startPos)

				curPos = startPos

				path[max-1].i = max
			} else {
				startPos = range.value / 10

				narrowI.forEach((item,i) => {
					if(i <startPos) {
						item.forEach((itemj) => {itemj.hide(false)})
					} else {
						item.forEach((itemj) => {itemj.hide(true)})
					}
				})
			}
		}
	}

	function changePos(start, stop) {
		arrForConnect = []
		if (start < stop) {
			for (let i = start; i < stop; i++) {
				let  arr = []

				arrStages.forEach((item,i) => {
					up(item.st, item.sp, true)

					let start = item.st
					let stop = item.st + (item.sp - item.st) / 3
					

					arr.push({st:start, sp:stop})

					start = item.st + 2*(item.sp - item.st) / 3
					stop = item.sp

					arr.push({st:start, sp:stop})
				})

				arrStages = arr
			}
		} else {
			for (let i = stop; i < start; i++) {
				let  arr = []

				for (let i = 0; i < arrStages.length - 1; i += 2) {
					let start = arrStages[i].st
					let stop = arrStages[i + 1].sp

					arr.push({st:start, sp:stop})

					up(start, stop, false)	
				}

				arrStages = arr
			}
		}

		connectFunc(start < stop)
	}

	function connectFunc(bool){
		if(connect) {
			path.forEach((item) => {
				item.gr.hide(false)
			})
		} else {
			path.forEach((item) => {
				item.gr.hide(true)
			})
			forConnect.forEach((item) => {
				item.gr.hide(false)
			})

			if (bool) {
				fillColor(true)
			} else {
				fillColor(false)
			}

			arrForConnect.forEach((item) => {
				item.gr.hide(true)
			})
		}
	}

	let sw = .2

	

	path.forEach((item,i) => {
		let sh = grafar.set([item.i]).select()

		let r = grafar.set([0 / 255]).select()
		let g = grafar.set([140 / 255]).select()
		let b = grafar.set([240 / 255]).select()
		
		let gr = grafar.pin({axes:[
				grafar.map([t1, t2, p], (t1, t2, p) => 10*sw * cos(t1, p) * sin(t2, p) - 60),
				grafar.map([t1, t2, p], (t1, t2, p) => i * sw * 4 +1.8* sw * cos(t1, p) * cos(t2, p) - 185),
				grafar.map([t1, t2, p,sh], (t1, t2, p,sh) =>  .2*sh + .2*sh * sin(t1, p) - 100)
			],color:[r,g,b]}, pan3d
		)

		gr.hide(true)

		item.gr = gr
		item.sh = sh
		item.r = r
		item.g = g
		item.b = b
	})

	let arrForConnect = []

	function up(start,stop,flag) {
		if (stop == max) {
			stop--
		}

		if (flag) {
			let j = path[start].i

			for (let i = start; i < stop; i++) {	
				if (i < start + (stop - start) / 3) {
					grafar.constant(j).into(path[i].sh)
					path[i].i = j
					arrForConnect.push(path[i])
					j += (((-path[start].i + path[stop].i) / 2)) / ((stop - start) / 3)
				} else if (i < start + 2 * (stop - start) / 3) {
					grafar.constant((path[start].i + path[stop].i) / 2).into(path[i].sh)
					path[i].i = (path[start].i + path[stop].i) / 2
					flagForFill = true
					curColor.push(path[i])

					forConnect.push(path[i])
				} else {
					grafar.constant(j).into(path[i].sh)
					path[i].i = j

					arrForConnect.push(path[i])

					j += (((-path[start].i + path[stop].i) / 2)) / ((stop - start) / 3)
				}
			}

			fillColor(true)
		} else {
			let j = path[start].i
			for (let i = start; i <= stop; i ++) {
				grafar.constant(j).into(path[i].sh)
				path[i].i = j
				flagForFill = false
				curColor.push(path[i])
				j += (path[stop].i - path[start].i) / (stop - start)
			}
			fillColor(false)
		}
	}

	function clearColor() {
		curColor.forEach((item,i) => {
			grafar.constant(0 / 255).into(item.r)
			grafar.constant(140 / 255).into(item.g)
			grafar.constant(240 / 255).into(item.b)
		})

		curColor = []
	}

	function fillColor(flag) {
		if (fill){
			if (flag) {
				curColor.forEach((item,i) => {
					grafar.constant(1).into(item.r)
					grafar.constant(0).into(item.g)
					grafar.constant(0).into(item.b)
				})
			} else {
				curColor.forEach((item,i) => {
					grafar.constant(0).into(item.r)
					grafar.constant(1).into(item.g)
					grafar.constant(0).into(item.b)
				})

				if(!connect) {
					curColor.forEach((item,i) => {
						item.gr.hide(true)
					})
				}
			}
		}
	}

	function cos(arg, deg) {
		let sgn = Math.cos(arg) < 0 ? -1 : 1
		return sgn*Math.pow(Math.abs(Math.cos(arg)), deg)
	}

	function sin(arg, deg) {
		let sgn = Math.sin(arg) < 0 ? -1 : 1;
		return sgn*Math.pow(Math.abs(Math.sin(arg)), deg)
	}
}