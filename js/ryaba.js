// // const skazka = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

let obj = {
	var1: "",
	var2: "",
	var3: "",
	var4: "",
	var5: "",
	var6: "",
	speach: ""
};

function handleButton() {
  handleData(skazka); // взять данные по dataUrl, вытащить их и передать в handleData
}

function handleData(data) {
	let skazka = "";

	for (key in obj) {
		obj [key] = $("input[name=" + key + "]") [0].value;
	}
	data["text"].forEach(function(item, index) {
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
		}
		skazka = skazka + item + "<br>";
	});

	for (key in obj) {
		if (obj[key] == "") skazka = "Необходимо заполнить все поля формы!";
	}

	$(".result").html(skazka);
}
//   // кажется, какой-то из этих способов сработает
//   //const var1 = $("input[name=var1]")[0].value()
//   //const var1 = $("input[name=var1]").value()
//   //const var1 = $("input[name=var1]")[0].default()

//   // надо сделать так чтобы сообщения подменились на значения из формы
  // let text = "Здесь могла быть ваша реклама";
// 	$("#result").text(text);
// }

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);


