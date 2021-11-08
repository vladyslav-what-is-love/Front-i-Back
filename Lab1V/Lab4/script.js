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


	text = "Масив: " + array.join(", ") + " Між min i max " + array.join(", ")+ " К-ть між "+ array.length;
	let output = document.getElementById('output');

	data = document.createElement('h3');
	data.setAttribute("id", "array");
	data.textContent = text;

  	output.appendChild(data);
}