class ButtonText {
	constructor(num, text, path){
		this.num = num;
		this.text = text;
		this.path = path;
	}
	constructor_btn() {
		let ul = document.createElement("ul")
		ul.setAttribute("class", "ul_button");
		for (let i = 0; i < this.num; i++) {
			let li = document.createElement("li");
			let button = document.createElement("button");
			let path = this.path[i] + ".html"
	      	button.setAttribute("onclick", `go('${path}')`);
	      	button.setAttribute("type", "button");
	      	button.textContent = this.text[i];
	      	li.appendChild(button);
	      	ul.appendChild(li);
		}
		return ul

}
}


let button_list = [
	new ButtonText(7, ["Опис предметного середовища", "Тема, Мета, Місце розташування", 
		"Структура документа", "HTML-код ТАБЛИЦЬ", "HTML-код ФОРМИ", 
		"HTML-код ЗОБРАЖЕННЯ", "Висновки"], 
		["Lab1/predmet", "Lab1/tema", "Lab1/structure", "Lab1/table", "Lab1/lab", "Lab1/image", "Lab1/sumup"]),
	new ButtonText(9, ["Тема, Мета, Місце розташування", "Списки", 
		"Ідентифікатори", "Відступи", "Плаваючі елементи", 
		"Селектори", "Селектори тегу і класу", "Інші селектори",  "Висновки"],
		["Lab2/tema", "Lab2/list", "Lab2/ident", "Lab2/margin", "Lab2/float", "Lab2/select", 
		"Lab2/seltag", "Lab2/selother", "Lab2/sumup"]),
	new ButtonText(9, ["Тема, Мета, Місце розташування", "Зовнішній вигляд макету", 
		"HTML-код макету", "Розмітка сторінки за допомогою таблиці", "Розмітка сторінки за допомогою плаваючих блоків", 
		"Висновок", "HTML-код сторінки завдання", "CSS-код завдання", "Висновки"],
		["Lab3/tema", "Lab3/layuot", "Lab3/layuotHTML", "Lab3/table", "Lab3/float", "Lab3/sumup1", "Lab3/var7HTML", 
		"Lab3/css", "Lab3/sumup"]
		),
	new ButtonText(9, ["Постановка задачі Лабораторної роботи №4", "Спроби функціонального Застосування JS", 
		"Схема URL", "Обробник подій", "Підстановка (entity)", 
		"Вставка (script)", "Масиви 4п", "Виконання 6п", "ВИСНОВКИ"],
		["Lab4/tema", "Lab4/connect", "Lab4/URL", "Lab4/handler", "Lab4/entity", "Lab4/script", 
		"Lab4/array", "Lab4/gist", "Lab4/sumup"]
		),
	new ButtonText(9, ["Постановка задачі Лабораторної роботи №5", "Динамічні елементи 3 пункт", 
		"Галерея UniteGallery", "Фотогалерея", "Слайдер фотографій", 
		"Слайдер відеоматеріалів", "Кнопки соціальних мереж", "Інформери", "ВИСНОВКИ"],
		["Lab5/tasks/tema", "Lab5/index", "Lab5/tasks/unitegallery", "Lab5/unitegallery/Lab5/tilesgrid", 
		"Lab5/unitegallery/Lab5/carousel", "Lab5/unitegallery/Lab5/carousel_video", 
		"Lab5/tasks/socialnet", "Lab5/tasks/informers", "Lab5/tasks/sumup"]
		),
	new ButtonText(6, ["Постановка задачі Лабораторної роботи №6", "Структура роботи", 
		"Веб-сторінка", "Програмний код", "Підключення", 
		"Висновки"],
		["Lab6/tema", "Lab6/strucyure", "Lab6/sample", "Lab6/kod", "Lab6/include",
		"Lab6/sumup"]
		),
	new ButtonText(7, ["Постановка задачі Лабораторної роботи №7", "Опис об'єктної області БД", 
		"Інфологічна модель, опис", "Датологічна модель, опис. Зв'язки між таблицями", 
		"Реалізація БД в СУБД MySQL, phpMyAdmin", "Виведення та пошук в БД", "Висновки"],
		["Lab7/tema", "Lab7/op_ob_mod", "Lab7/info_mod", "Lab7/data_mod", "Lab7/relise_db",
		"Lab7/output_db", "Lab7/sumup"]
		)
]


function CreateButton(i) {
     
      	let info = document.querySelector('.ul_button');
     	info.replaceWith( button_list[i-1].constructor_btn());
   
};






/*
class ChoiseImg {
	constructor(image){
		this.image = image;
	}
	Init() {
		let newImage = document.createElement("img");
      	newImage.setAttribute("class", "clone");		
		newImage.src = this.image;
      	//let newCard = document.createElement("div");
      	//newCard.setAttribute("class", "outInfo");

		return newImage;
	}
}

function buttonImg(i) {
	switch (i) {
		case 1:
			replaceWi("img/1.png");
			break;
		case 2:
			replaceWi("img/2.png");			
			break;
		case 3:
			replaceWi("img/3.png");			
			break;
		case 4:
			replaceWi("img/4.png");			
			break;
		case 5:
			replaceWi("img/4.png");			
			break;
		case 6:
			replaceWi("img/4.png");			
			break;
		case 7:
			replaceWi("img/4.png");			
			break;			
		default:
			break;
	}

}

function replaceWi(path) {
	let imgCh = new ChoiseImg(path);
	//alert("Hello world");
	let info = document.querySelector('.clone');
     info.replaceWith(imgCh.Init());
     console.log(imgCh.image);
}*/

function go(loc) {
    document.getElementById("labframe").src = loc;
  }