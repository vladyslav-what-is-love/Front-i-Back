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

function array(){
	var size = document.getElementById('size').value;
	var Arr = Array.from({length: size}, () => Math.floor(Math.random() * size));
	

  	
	  let maxPar = 0;
	  let minPar = size;
	  let maxNePar = 0;
	  let minNePar = size;
	for(let i = 0; i<size;i++){

		if ( i%2==0 && Arr[i]>maxPar){
			maxPar = Arr[i] ;
		}
		if (i%2==0 && Arr[i]<minPar){
			minPar = Arr[i];
		}
		if ( i%2!=0 && Arr[i]>maxNePar){
			maxNePar = Arr[i] ;
		}
		if (i%2!=0 && Arr[i]<minNePar){
			minNePar = Arr[i];
		}
	}
	console.log(maxPar, minPar, maxNePar, minNePar);
	let arr = Arr;

	for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }

	
	text = "Масив: " + Arr + "<br>"+'Максимальний і мінімальний елементи з парним індексом: ' + maxPar +" "+ minPar + "<br>" + 'Максимальний і мінімальний елементи з непарним індексом: ' + maxNePar +" "+ minNePar+"<br>"+ 'Масив відсовтований вибором: '+arr;


	document.getElementById("output1").innerHTML = text;
}