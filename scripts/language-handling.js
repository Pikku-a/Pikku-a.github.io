//Language handling script
//© Pikku-a 2023
function languageChange(lang /*, id1, id2, ... */) {
	$(document).ready(function() {
		console.log("Version 0.3");
		$.getJSON("https://pikkua.com/text/pikkuacom.json",function(data) {
			for (var i = 0; i < arguments.length+1; i++) {
				//var t = arguments[i+1];
				if (lang == "en") {
					$(`#${arguments[i+1]}`).text(data.general.en[arguments[i+1]]);
					localStorage.setItem("language","en");
				}else if (lang == "fi") {
					$(`#${arguments[i+1]}`).text(data.general.fi[arguments[i+1]]);
					localStorage.setItem("language","fi");
				}else if (lang == "es") {
					$(`#${arguments[i+1]}`).text(data.general.es[arguments[i+1]]);
					localStorage.setItem("language","es");
				}
				console.log("Language changed and saved.");
			}
		})
	});
}