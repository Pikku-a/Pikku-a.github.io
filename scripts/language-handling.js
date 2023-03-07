//Language handling script
//© Pikku-a 2023
function languageChange(lang /*, id1, id2, ... */) {
	$(document).ready(function() {
		console.log("Version 0.91");
		$.getJSON("https://pikkua.com/text/pikkuacom.json",function(data) {
			for (var i = 0; i < arguments.length-1; i++) {
				console.log(i);
				console.log(arguments[i]);
				console.log(lang);
				//let str = arguments[i].toString().substring(1); //Removes #?
				//console.log(str);
				if (i!=0) { //Don't do this with the first argument
					if (lang == "en") {
						console.log("Language is en");
						$(`${arguments[i]}`).text(data.general.en[arguments[i]]); //data.general.en[arguments[i]]
						localStorage.setItem("language","en");
					}else if (lang == "fi") {
						console.log("Language is fi");
						$(`${arguments[i]}`).text(data.general.fi[arguments[i]]);
						localStorage.setItem("language","fi");
					}else if (lang == "es") {
						console.log("Language is es");
						$(`${arguments[i]}`).text(data.general.es[arguments[i]]);
						localStorage.setItem("language","es");
					}
					console.log("Loaded string "+String(i));
				}
			}
			console.log("Language loaded or changed and saved.");
		})
	});
}