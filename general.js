//<![CDATA[
	// Global variables
	var lang = -1; // Language (0 es, 1 en, 2 ca)
	var answer = 0;
	var question = 0;	
	
	
	// Initial functions	
	function OpenWorkshop(){
		InternetExplorerIssues();
		GetLang();
		Translate(lang);
		DisableHighlight('body');
		DisableHighlight('hidded');
	}
	
	// Disable Highlight of an element
	function DisableHighlight(id){
		var object = document.getElementById(id);
		object.onselectstart = function(){ return false };	
	}
	
	// Solve some CSS3 issues in IE
	function InternetExplorerIssues(){
		if (navigator.appName == "Microsoft Internet Explorer"){
			document.bgColor = "#037bc3";
		}
	}
	
	
	// Get the navigator language
	function GetLang() {
		var language = "nl";
		if (navigator.userAgent.indexOf("Opera")!=-1 || navigator.appName == "Netscape") language = navigator.language;
		else language=navigator.browserLanguage;
		
		language = language.substring(0,2);

		switch (language){
			case "es": lang = 0; break;
			case "ca": lang = 2; break;
			default: lang = 1; break;
		}
	}
	
	
	// Check if we click out of a card, and then close it
	function CheckOut(event, id){
		// Obtain mouse pointer coords
		var x = event.clientX + document.body.scrollLeft;
			
		// Obtain id coords
		var object = document.getElementById(id);
		var object_x = 0;
		var object_x2 = parseInt(object.offsetWidth);
			
		while (object != null){
			object_x += object.offsetLeft; 
			object = object.offsetParent;
		}
		object_x2 += object_x;
			
		// Check if it is out of id
		if (x < object_x || x > object_x2){
			HideCard();
		}
	}
	
	
	// View source code
	function SourceCode() {
		if (navigator.appName == "Netscape"){ // for chrome, mozilla, *safari
			//window.location = "view-source:" + window.location.href;
			window.open("view-source:" + window.location.href);
		
		}else if (navigator.appName == "Opera" || navigator.appName == "Microsoft Internet Explorer"){
			var popup=window.open();
			popup.document.open('text/plain').write(document.documentElement.outerHTML);
		}
	}

	
	
	// Print my email indirectly, for spammers.
	function WriteEmail(account, server){
		return account+"@"+server;
	}
	
	
	// Print my age after calculate it.
	function WriteAge(){
		var now = new Date()
		if (now.getMonth() < 4 || (now.getMonth() == 4 && now.getDate() < 21) ){
			return now.getFullYear() - 1986 - 1;
		}else{
			return now.getFullYear() - 1986;
		}		
	}
	
	
	// Show a hided object
	function Show(id){
		var object;
		object = document.getElementById(id);
		object.style.visibility = 'visible';
	}
			
			
	// Hide an object
	function Hide(id){
		var object;
		object = document.getElementById(id);
		object.style.visibility = 'hidden';
	}

//]]>