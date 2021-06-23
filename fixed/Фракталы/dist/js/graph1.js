{
	// c21 - button центрировать

	// c31 - c34 - range 
	//		   1 - levels count
	//		   2 - width
	// 		   3 - height
	//  	   4 - dist

	// c3511 - dataset 
	// c3512 - color
	// c352 - button 

	// c11 - button заполнение

	// c01 - c03 - button 
	//		   1 - 3
	//		   2 - 2
	// 		   3 - 1 

	let pan3d = new grafar.Panel(document.getElementById('render'))
	pan3d.camera.position.set(-15, 13, 5)

	let curmod = 2

	let countOfIteration = 4

	function fillFract1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,curmod,kantorData) {
		kantorData.active.gr.forEach((itemi) => {
			itemi.forEach((itemj) => {
				itemj.gr.hide(true)
			})
		})

		if(kantorData['v'+curmod].fill.length > 0) {
			kantorData['v'+curmod].fill.forEach((itemi) => {
				itemi.forEach((itemj) => {
					itemj.gr.hide(false)
				})
			})
		} else {
			let p = grafar.set([0]).select();

			if (curmod != 2) {
				countOfIteration = countOfIteration > 5 ? 5: countOfIteration 
			}

			if (curmod != 1) {
				countOfIteration = countOfIteration > 2 ? 2: countOfIteration 
			}


			let data = kantor(0,0,-sizeOfIteration,Z,curSize/3,SWC,sizeOfIteration,DB,distBetwen,0,countOfIteration,ref,p,t1,t2,curmod)

			return data
		}

		return kantorData['v'+curmod].fill
	}

	function notFillFrac1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,curmod,kantorData) {
		kantorData.active.gr.forEach((itemi) => {
			itemi.forEach((itemj) => {
				itemj.gr.hide(true)
			})
		})

		if(kantorData['v'+curmod].notFill.length > 0) {
			kantorData['v'+curmod].notFill.forEach((itemi) => {
				itemi.forEach((itemj) => {
					itemj.gr.hide(false)
				})
			})
		} else {
			let p = grafar.set([0,0], false).select();

			if (curmod != 2) {
				countOfIteration = countOfIteration > 5 ? 5: countOfIteration 
			}

			if (curmod != 1) {
				countOfIteration = countOfIteration > 2 ? 2: countOfIteration 
			}

			let data = kantor(0,0,-sizeOfIteration,Z,curSize/3,SWC,sizeOfIteration,DB,distBetwen,0,countOfIteration,ref,p,t1,t2,curmod)

			return data
		}

		return kantorData['v'+curmod].notFill
	}

	function build(curmod,fill,kantorData) {
		let data

		if(fill) {
			if(curmod == 1){
				data = fillFract1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,1,kantorData)

				kantorData.v1.fill = data
			} else if(curmod == 2) {
				document.getElementById('c32').value = 3
				sizeOfIteration = 0.3

				data = fillFract1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,2,kantorData)

				document.getElementById('c31').value = 10
			countOfIteration = 8

				kantorData.v2.fill = data
			} else {
				data = fillFract1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,3,kantorData)

				kantorData.v3.fill = data
			}
		} else {
			if(curmod == 1){
				data = notFillFrac1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,1,kantorData)

				kantorData.v1.notFill = data
			} else if(curmod == 2) {

				document.getElementById('c32').value = 3
				sizeOfIteration = 0.3
				data = notFillFrac1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,2,kantorData)

				document.getElementById('c31').value = 10
				countOfIteration = 8


				kantorData.v2.notFill = data
			} else {
				data = notFillFrac1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,3,kantorData)

				kantorData.v3.notFill = data
			}
		}

		kantorData.active.gr = data

		fix()
	}
	
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

	let fill = true

	
	let sizeOfIteration = 0.5

	let distBetwen = 0

	let updateFlag = false

	let ref = grafar.set([0]).select()

	let DB = grafar.set([sizeOfIteration]).select()
	
	let levels = []

	let t1 = grafar.logseq(0, 7, 8).select()
	
	let t2 = grafar.logseq(0, 7, 8).select()

	let SI = grafar.set([sizeOfIteration]).select()
			
	let kantorData = {
		'v1':{
			fill:[],
			notFill:[]
		},
		'v2':{
			fill:[],
			notFill:[]
		},
		'v3':{
			fill:[],
			notFill:[]
		},
		'active':{
			gr:[]
		}
	}

	let curentViev = []

	let curSize = 9

	let Z = grafar.set([-sizeOfIteration]).select()

	let SWC = grafar.set([curSize/3]).select()

	// Заливка

	{
		let c11Flag = fill

		let c11 = document.getElementById('c11')
		c11.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

		c11.onclick = () => {
			if(c11Flag) {
				fill = false
				c11.style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'
				// fillFract1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,curmod,kantorData)
			} else {
				fill = true
				c11.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'
				// notFillFrac1(sizeOfIteration,Z,curSize,SWC,DB,distBetwen,ref,curmod,kantorData)
			}

			build(curmod,fill,kantorData)

			c11Flag = !c11Flag			
		}
	}

	// Покрасить уровень

	{
		function hex2rgb(c) {
		    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c)

		    return result ? {
		        r: parseInt(result[1], 16),
		        g: parseInt(result[2], 16),
		        b: parseInt(result[3], 16)
		    } : null
		}

		document.getElementById('c342').onclick = () => {
			let number = document.getElementById('c3411').value

			if(!(number.replace(/\s/g, '').length === 0 || isNaN(number))){
				let color = hex2rgb(document.getElementById('c3412').value)

				if(number>=0&&number<=countOfIteration){
					kantorData.active.gr.forEach((itemi,i) => {
						if (i == number){
							itemi.forEach((itemj) => {
								grafar.constant(color.r /255).into(itemj.r)
								grafar.constant(color.g /255).into(itemj.g)
								grafar.constant(color.b /255).into(itemj.b)

							})
						}
					})
				}
			}
		}
	}

	// Выбор модели

	{
		let c0xFlag = 2

		let c0x = [document.getElementById('c01'),document.getElementById('c02'),document.getElementById('c03')]

		c0x[c0xFlag].style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

		build(curmod,fill,kantorData)

		c01.onclick = () => {
			c0x[c0xFlag].style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

			c0xFlag = 0

			c0x[c0xFlag].style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

			curmod = 3

			build(curmod,fill,kantorData)
		}

		c02.onclick = () => {
			c0x[c0xFlag].style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

			c0xFlag = 1

			c0x[c0xFlag].style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

			curmod = 1

			build(curmod,fill,kantorData)
		}

		c03.onclick = () => {
			c0x[c0xFlag].style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'

			c0xFlag = 2

			c0x[c0xFlag].style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

			curmod = 2

			build(curmod,fill,kantorData)
		}
	}

	// Центрировать?

	{
		let c21 = document.getElementById('c21')

		c21.onclick = async () => {
			pan3d.camera.position.set(camera.cx,camera.cy,camera.cz)
			pan3d.camera.rotation.set(camera.rx,camera.ry,camera.rz)
			pan3d.camera.quaternion.set(camera.qx,camera.qy,camera.qz)
			pan3d.camera.scale.set(camera.sx,camera.sy,camera.sz)
		}
	}

	// Количество уровней 	

	{
		let range = document.getElementById('c31')

		range.min = 1
		range.value = countOfIteration  +2
		range.max = 10
		range.step = 1

		range.oninput = () => {

			countOfIteration = range.value -1
			kantorData.active.gr.forEach((itemi,i) => {
				if (i >= countOfIteration){
					itemi.forEach((itemj) => {
						itemj.gr.hide(true)

					})
				} else {
					itemi.forEach((itemj) => {
						itemj.gr.hide(false)

					})
				}
			})
			countOfIteration--
		}
	}

	// Высота уровня

	{
		let range = document.getElementById('c32')

		range.min = 0
		range.value = sizeOfIteration * 10
		range.max = 15
		range.step = 0.5

		range.oninput = () => {
			sizeOfIteration = range.value / 10

			grafar.constant(sizeOfIteration).into(DB)

			levels.forEach((item1,i) => {
				item1.forEach((item2,j) => {
					if(i > 0){	
						grafar.constant(levels[i - 1][0].z + sizeOfIteration*2+distBetwen).into(item2.Z)
						item2.z = levels[i - 1][0].z    + sizeOfIteration*2+distBetwen 
					} else {
						grafar.constant(-sizeOfIteration).into(item2.Z)
						item2.z = -sizeOfIteration
					}
				})
			})
		}
	}

	// Расстояние между уровнями

	{
		let range = document.getElementById('c33')

		range.min = 0
		range.value = distBetwen * 10
		range.max = 15
		range.step = 0.5

		range.oninput = () => {
			distBetwen = range.value / 10

			levels.forEach((item1,i) => {
				item1.forEach((item2,j) => {
					if(i > 0){	
						grafar.constant(levels[i - 1][0].z + sizeOfIteration*2+distBetwen).into(item2.Z)
						item2.z = levels[i - 1][0].z    + sizeOfIteration*2+distBetwen 
					} else {
						grafar.constant(-sizeOfIteration).into(item2.Z)
						item2.z = -sizeOfIteration
					}
				})
			})
		}
	}

	function kantor(x,y,z,ZC,sw,SWC,sh,SHC,sd,i,ci,ref,p,t1,t2,mod = 1) {
		let kantorArray = []

		function recKantor1(x,y,z,ZC,sw,SWC,sh,SHC,sd,i,ci,ref,p,t1,t2) {
			let r = grafar.set([0 / 255]).select()
			let g = grafar.set([140 / 255]).select()
			let b = grafar.set([240 / 255]).select()


			let gr = grafar.pin({axes:[
					grafar.map([t1, t2, p], (t1, t2, p) => x + sw * cos(t1, p) * cos(t2, p)),
					grafar.map([t1, t2, p], (t1, t2, p) => y + sw * cos(t1, p) * sin(t2, p)),
					grafar.map([t1, t2, p, ZC, SHC, ref], (t1, t2, p, ZC, SHC, ref) => ZC + SHC * sin(t1, p))
				],color:[r,g,b]}, pan3d
			)

			if(!kantorArray[i]) {
				kantorArray.push([])
			}

			kantorArray[i].push({
				gr:gr,
				i:i,
				r:r,
				g:g,
				b:b
			})

			let Z = grafar.set([z+sh+sd]).select()

			let curArr = []

			if (!levels[i]) {
				levels.push([])
			}

			levels[i].push({
				Z:ZC,
				z:z,
				sh:sh,
				sd:sd
			})

			if (i<ci){
				let r = 2/3

				let SWC = grafar.set([sw/3]).select()

				recKantor1(x-sw*r,y-sw*r,z+sh+sd,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor1(x+sw*r,y+sw*r,z+sh+sd,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor1(x-sw*r,y+sw*r,z+sh+sd,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor1(x+sw*r,y-sw*r,z+sh+sd,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
			}
		}

		function recKantor2(x,y,z,ZC,sw,SWC,sh,SHC,sd,i,ci,ref,p,t1,t2) {
			let r = grafar.set([0 / 255]).select()
			let g = grafar.set([140 / 255]).select()
			let b = grafar.set([240 / 255]).select()


			let gr = grafar.pin({axes:[
					grafar.map([t1, t2, p], (t1, t2, p) => x + sw * cos(t1, p) * cos(t2, p)),
					grafar.map([t1, t2, p], (t1, t2, p) => y + cos(t1, p) * sin(t2, p)),
					grafar.map([t1, t2, p, ZC, SHC, ref], (t1, t2, p, ZC, SHC, ref) => ZC + SHC * sin(t1, p))
				],color:[r,g,b]}, pan3d
			)

			if(!kantorArray[i]) {
				kantorArray.push([])
			}

			kantorArray[i].push({
				gr:gr,
				i:i,
				r:r,
				g:g,
				b:b
			})

			let Z = grafar.set([z+sh+sd]).select()

			let curArr = []

			if (!levels[i]) {
				levels.push([])
			}

			levels[i].push({
				Z:ZC,
				z:z,
				sh:sh,
				sd:sd
			})

			if (i<ci){
				let r = 2/3

				let SWC = grafar.set([sw/3]).select()

				recKantor2(x-sw*r,y,z+sh+sd,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor2(x+sw*r,y,z+sh+sd,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
			}
		}

		function recKantor3(x,y,z,ZC,sw,SWC,sh,SHC,sd,i,ci,ref,p,t1,t2) {
			let r = grafar.set([0 / 255]).select()
			let g = grafar.set([140 / 255]).select()
			let b = grafar.set([240 / 255]).select()


			let gr = grafar.pin({axes:[
					grafar.map([t1, t2, p], (t1, t2, p) => x + sw * cos(t1, p) * cos(t2, p)),
					grafar.map([t1, t2, p], (t1, t2, p) => y + sw * cos(t1, p) * sin(t2, p)),
					grafar.map([t1, t2, p, ZC, SHC, ref], (t1, t2, p, ZC, SHC, ref) => z + sw * sin(t1, p))
				],color:[r,g,b]}, pan3d
			)

			if(!kantorArray[i]) {
				kantorArray.push([])
			}

			kantorArray[i].push({
				gr:gr,
				i:i,
				r:r,
				g:g,
				b:b
			})

			let Z = grafar.set([z+sh]).select()

			let curArr = []

			if (!levels[i]) {
				levels.push([])
			}

			levels[i].push({
				Z:ZC,
				z:z,
				sh:sh,
				sd:sd
			})

			if (i<ci){
				let r = 2/3

				let SWC = grafar.set([sw/3]).select()

				recKantor3(x+sw*2,y+sw*2,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x+sw*2,y+sw*2,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x+sw*2,y+sw*2,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x+sw*2,y,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x+sw*2,y,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x+sw*2,y,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x+sw*2,y-sw*2,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x+sw*2,y-sw*2,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x+sw*2,y-sw*2,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x-sw*2,y+sw*2,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x-sw*2,y+sw*2,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x-sw*2,y+sw*2,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x-sw*2,y,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x-sw*2,y,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x-sw*2,y,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x-sw*2,y-sw*2,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x-sw*2,y-sw*2,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x-sw*2,y-sw*2,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x,y+sw*2,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x,y+sw*2,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x,y+sw*2,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x,y,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x,y,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)

				recKantor3(x,y-sw*2,z-sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x,y-sw*2,z,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
				recKantor3(x,y-sw*2,z+sw*2,Z,sw/3,SWC,sh,SHC,sd,i+1,ci,ref,p,t1,t2)
			}
		}

		if(mod == 1){
			recKantor1(x,y,z,ZC,sw,SWC,sh,SHC,sd,i,fill?4:5,ref,p,t1,t2)
		} else if(mod == 2) {
			recKantor2(x,y,z,ZC,sw,SWC,sh,SHC,sd,i,8,ref,p,t1,t2)

		} else {
			recKantor3(x,y,z,ZC,sw,SWC,sh,SHC,sd,i,2,ref,p,t1,t2)
		}

		return kantorArray
	}

	function cos(arg, deg) {
		let sgn = Math.cos(arg) < 0 ? -1 : 1
		return sgn*Math.pow(Math.abs(Math.cos(arg)), deg)
	}

	function sin(arg, deg) {
		let sgn = Math.sin(arg) < 0 ? -1 : 1;
		return sgn*Math.pow(Math.abs(Math.sin(arg)), deg)
	}

	function fix() {

		grafar.constant(sizeOfIteration).into(DB)
		levels.forEach((item1,i) => {
				item1.forEach((item2,j) => {
					if(i > 0){	
						grafar.constant(levels[i - 1][0].z + sizeOfIteration*2+distBetwen).into(item2.Z)
						item2.z = levels[i - 1][0].z    + sizeOfIteration*2+distBetwen 
					} else {
						grafar.constant(-sizeOfIteration).into(item2.Z)
						item2.z = -sizeOfIteration
					}

				})
			})
	}

	fix()
}