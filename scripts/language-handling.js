//Language handling script
//© Pikku-a 2023
function languageChange(lang, ...args) { //Getting the argument works if it's added here, but otherwise it won't work
	$(document).ready(function() {
		console.log("Version 0.9.3");
		$.getJSON("https://pikkua.com/text/pikkuacom.json",function(data) {
			for (var i = 0; i < args.length; i++) {
				console.log(i);
				console.log(String(args[i])); //String(args[i]) taitaa olla sama kuin `${args[i]}`
				let str = args[i].toString().substring(1); //Removes #?
				console.log(str);
				console.log("Lanuage: "+lang);
				if (i!=0) { //Don't do this with the first argument
					if (lang == "en") {
						$(`${args[i]}`).text(data.general.en[str]); //data.general.en[args[i]]
						localStorage.setItem("language","en");
					}else if (lang == "fi") {
						$(`${args[i]}`).text(data.general.fi[str]);
						localStorage.setItem("language","fi");
					}else if (lang == "es") {
						$(`${args[i]}`).text(data.general.es[str]);
						localStorage.setItem("language","es");
					}else{
						console.log("Language not selected, so using English.");
					}
					console.log("Loaded string "+String(i));
				}
			}
			console.log("Language loaded or changed and saved.");
		})
	});
}