//Language handling script
//© Pikku-a 2023
function languageChange(lang /*, id1, id2, ... */) {
	$(document).ready(function() {
		console.log("Version 0.7");
		$.getJSON("https://pikkua.com/text/pikkuacom.json",function(data) {
			for (var i = 0; i < arguments.length+1; i++) {
				str = arguments[i+1].substring(1); //Removes #
				if (lang == "en") {
					$(`${arguments[i+1]}`).text(data.general.en[str]); //data.general.en[arguments[i+1]]
					localStorage.setItem("language","en");
				}else if (lang == "fi") {
					$(`${arguments[i+1]}`).text(data.general.fi[str]);
					localStorage.setItem("language","fi");
				}else if (lang == "es") {
					$(`${arguments[i+1]}`).text(data.general.es[str]);
					localStorage.setItem("language","es");
				}
				console.log("Language changed and saved.");
			}
		})
	});
}