function creare_input() {
	num = document.getElementById('num').value.split(' ');

	for (let i = 0; i < num.length; i++) {
		num[i] = Number(num[i]);
	}
	num = num.sort();

	let array = [];
	for (let i = 0; i < num.length; i++) {
		console.log(Math.max(...num));
		if (num[i] > Math.min(...num) && num[i] < Math.max(...num)) {
			array.push(num[i]);
		}
	}


	text = "Масив: " + num.join(", ") + " Між min i max " + array.join(", ")+ " К-ть між "+ array.length;
	let output = document.getElementById('output');

	data = document.createElement('h3');
	data.setAttribute("id", "array");
	data.textContent = text;

  	output.appendChild(data);
}


function gisto() {
	let num = document.getElementById('input').value;

	let color = ["red","green", "blue", "yellow"];
	let array = [];
	for (var i = 0; i < num; i++) {
		array[i] = Math.floor(Math.random() * 500);
	}

	let wrapper = document.createElement("div");
	wrapper.setAttribute("id", "wrapper");
	let wrapp = document.getElementById('wrapper');

	let left = 0
	for (var i = 0; i < num; i++) {
		
		let column = document.createElement("div");
		let p = document.createElement("p");
		p.textContent = array[i];
		column.setAttribute("style", `
			left: ${left}px;
			height: ${array[i]}px;
			width: ${(500/num) *0.8}px;
			background-color: ${color[i%4]};
			`);
		column.appendChild(p);
		wrapper.appendChild(column);
		left += (500/num);
	}
	wrapp.replaceWith(wrapper);
	

	console.log(array);
}