{
	let pan3d = new grafar.Panel(document.getElementById('render')).setAxes([' ', ' ', ' ']).drawAxes(0)

	pan3d.camera.position.set(-34, 89, 0)

	let levelS = 5

	let path = getBlocks()
	let colorLine = []

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

	// Заливка Цветной режим

	let fill = false

	{
		let c11Flag = fill

		let c11 = document.getElementById('c11')
		c11.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'

		c11.onclick = () => {
			if(c11Flag) {
				fill = false
				c11.style.background = '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)'
			} else {
				fill = true
				c11.style.background = 'rgb(218,218,218) linear-gradient(rgb(218,218,208), rgb(204,204,204))'
			}

			path.forEach((item,i) => {
				if(i <= 4**levelS){
					let color = HSVtoRGB((i+startPos/360*4**levelS)/(4**levelS),1,1)
				
					grafar.constant(color.r / 255).into(item.r)
					grafar.constant(color.g / 255).into(item.g)
					grafar.constant(color.b / 255).into(item.b)
				}
			})

			colorLine.forEach((item,i) => {
				let color = HSVtoRGB((i+startPos/360*(2**(levelS + 1)-1))/(2 ** (levelS + 1) - 1),1,1)

				grafar.constant(color.r / 255).into(item.r)
				grafar.constant(color.g / 255).into(item.g)
				grafar.constant(color.b / 255).into(item.b)
			})

			c11Flag = !c11Flag		
		}
	}

	// Смещение

	let startPos = 0

	{
		let range = document.getElementById('c31')

		range.min = 0
		range.value = startPos * 10
		range.max = 3600
		range.step = 180

		range.oninput = () => {
			startPos = range.value / 10

			path.forEach((item,i) => {
				if(i <= 4**levelS){
					let color = HSVtoRGB((i+startPos/360*4**levelS)/(4**levelS),1,1)
				
					grafar.constant(color.r / 255).into(item.r)
					grafar.constant(color.g / 255).into(item.g)
					grafar.constant(color.b / 255).into(item.b)
				}
			})

			let len = colorLine.length

			colorLine.forEach((item,i) => {
				let color = HSVtoRGB((i+startPos/360*(2**(levelS + 1)-1))/(2 ** (levelS + 1) - 1),1,1)

				grafar.constant(color.r / 255).into(item.r)
				grafar.constant(color.g / 255).into(item.g)
				grafar.constant(color.b / 255).into(item.b)
			})
		}
	}

	//Количество блоков

	let count = 4 ** levelS

	let rangeC21 = document.getElementById('c21')

	{
		rangeC21.min = 0
		rangeC21.value = 4 ** levelS - count * 10
		rangeC21.max = 4 ** levelS
		rangeC21.step = 1

		rangeC21.oninput = () => {

			count = 4 ** levelS - rangeC21.value
			for (let index = path.length - 1; index >= 0; --index) {
				if(count <= index) {
					path[index].gr.hide(true)
				} else {
					path[index].gr.hide(false)
				}
			}

			for (let index = colorLine.length - 1; index >= 0; --index) {
				if(count*2 / (2 ** (levelS)) <= index) {

					colorLine[index].gr.hide(true)
				} else {
					colorLine[index].gr.hide(false)
				}
			}
		}
	}

	//Количество уровней

	{
		let range = document.getElementById('c42')

		range.min = 0
		range.value = (levelS+1) * 10
		range.max = levelS *10
		range.step = 10

		range.oninput = () => {
			lastLevel = levelS

			levelS = range.value / 10

			if(lastLevel < levelS) {
				path.forEach((item,i) => {
					if(i < 4 ** levelS) {
						item.gr.hide(false)
					}
				})

				colorLine.forEach((item,i) => {
					if(i < 2 ** (levelS + 1)) {
						item.gr.hide(false)
					}
				})
			} else {
				path.forEach((item,i) => {
					if(i < 4 ** lastLevel && i >= 4 ** levelS) {
						item.gr.hide(true)
					}
				})

				colorLine.forEach((item,i) => {
					if(i <  2 ** (lastLevel + 1) && i >=  2 ** (levelS + 1)) {
						item.gr.hide(true)
					}
				})
			}

			count = 4 ** levelS
			rangeC21.max = 4 ** levelS
			rangeC21.value = 0

			path.forEach((item,i) => {
				if(i <= 4**levelS){
					let color = HSVtoRGB((i+startPos/360*4**levelS)/(4**levelS),1,1)
				
					grafar.constant(color.r / 255).into(item.r)
					grafar.constant(color.g / 255).into(item.g)
					grafar.constant(color.b / 255).into(item.b)
				}
			})

			colorLine.forEach((item,i) => {
				let color = HSVtoRGB((i+startPos/360*(2**(levelS + 1)-1))/(2 ** (levelS + 1) - 1),1,1)

				grafar.constant(color.r / 255).into(item.r)
				grafar.constant(color.g / 255).into(item.g)
				grafar.constant(color.b / 255).into(item.b)
			})
		}
	}

	//Расстояние между блоками

	let distBetwen = 1.5

	{
		let range = document.getElementById('c41')

		range.min = 10
		range.value = distBetwen * 10
		range.max = 30
		range.step = 5

		range.oninput = () => {
			distBetwen = range.value / 10

			grafar.constant(distBetwen).into(H)
		}
	}

	function getBlocks() {
		let path=[]
			
		path.push({x:0,y:0})
		path.push({x:1,y:0})
		path.push({x:1,y:1})
		path.push({x:0,y:1})
		
		let len=1

		for(let level=0;level<levelS-1;level++){
			let cnt=path.length
			let newpath=[]
			
			for(let i=0;i<cnt;i++){
				newpath[i]={}
				newpath[i].x=path[i].y
				newpath[i].y=path[i].x
			}
			
			for(let i=cnt;i<cnt*2;i++){
				newpath[i]={}
				newpath[i].x=path[i%cnt].x+len+1
				newpath[i].y=path[i%cnt].y
			}

			for(let i=cnt*2;i<cnt*3;i++){
				newpath[i]={}
				newpath[i].x=path[i%cnt].x+len+1
				newpath[i].y=path[i%cnt].y+len+1
			}

			for(let i=cnt*3;i<cnt*4;i++){
				newpath[i]={}
				newpath[i].x=len-path[i%cnt].y
				newpath[i].y=len-path[i%cnt].x+len+1
			}
			
			len=len*2+1
			path=newpath
		}

		return path
	}

	let sw = sh = 1

	let ff = 1

	let t1 = grafar.range(0, 7, 8).select()
	let t2 = grafar.range(0, 7, 8).select()
	let p = grafar.set([0,0], true).select()
	
	let H = grafar.constant(distBetwen).select()

	let len = path.length

	path.forEach((item,i) => {

		let color = HSVtoRGB((i+startPos)/len,1,1)

		let r = grafar.constant(color.r / 255).select()
		let g = grafar.constant(color.g / 255).select()
		let b = grafar.constant(color.b / 255).select()
		
		let gr = grafar.pin({axes:[
				grafar.map([t1, t2, p,H], (t1, t2, p,h) => item.x*(sw +h) + sw * cos(t1, p) * cos(t2, p) - 32- h),
				grafar.map([t1, t2, p,H], (t1, t2, p,h) => item.y*(sw +h) + sw * sin(t1, p) - 32),
				grafar.map([t1, t2, p], (t1, t2, p) => sh * cos(t1, p) * sin(t2, p) - 20)
			],color:[r,g,b]}, pan3d
		)

		item.gr = gr
		item.r = r
		item.g = g
		item.b = b
	})

	let s = grafar.constant(sw).select()

	for (let i = 0; i <= 2 ** (levelS + 1) - 1; i++) {
		let color = HSVtoRGB((i+startPos/360*(2**(levelS + 1)-1))/(2 ** (levelS + 1) - 1),1,1)

		let r = grafar.constant(color.r / 255).select()
		let g = grafar.constant(color.g / 255).select()
		let b = grafar.constant(color.b / 255).select()
		
		let gr = grafar.pin({axes:[
				grafar.map([t1, t2, p,H], (t1, t2, p,h) => 2 * sw * sin(t1, p) -34 - 4 - h ),
				grafar.map([t1, t2, p,H,s], (t1, t2, p,h,s) => i*(sw +h) /2 + s * cos(t1, p) * cos(t2, p) /2 - 32 -s/2),
				grafar.map([t1, t2, p], (t1, t2, p) => sh * cos(t1, p) * sin(t2, p) - 20)
			],color:[r,g,b]}, pan3d
		)

		colorLine.push({
			gr:gr,
			r:r,
			g:g,
			b:b
		})
	}

	function HSVtoRGB(h, s, v) {
	    let r, g, b, i, f, p, q, t

	    if (arguments.length === 1) {
	        s = h.s, v = h.v, h = h.h
	    }
	    
	    i = Math.floor(h * 6)
	    f = h * 6 - i
	    p = v * (1 - s)
	    q = v * (1 - f * s)
	    t = v * (1 - (1 - f) * s)
	    
	    switch (i % 6) {
	        case 0: r = v, g = t, b = p; break
	        case 1: r = q, g = v, b = p; break
	        case 2: r = p, g = v, b = t; break
	        case 3: r = p, g = q, b = v; break
	        case 4: r = t, g = p, b = v; break
	        case 5: r = v, g = p, b = q; break
	    }

	    if(fill){
	    	return{
				r: Math.round(r * 255),
	       		g: Math.round(r * 255),
	        	b: Math.round(r * 255)	
			}
		}
	    
	    return {
	        r: Math.round(r * 255),
	        g: Math.round(g * 255),
	        b: Math.round(b * 255)
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