//<![CDATA[ 

	// Change Zippo's options
	function Option(quest, ans){
		answer = ans;
		question = quest;
		Translate(lang);
	}	
	
	// Generate Zippo's messages
	function GetMessages (){
		var object;
		object = document.getElementById("talking");
		object.style.maxWidth = "300px";
		object.innerHTML = "";

		// SPANISH
		if (lang == 0){
			// QUESTIONS
			if (question == 0){ // main menu
				if (answer == 0) object.innerHTML += "Bienvenido/a al portfolio de Églomer.</br>¿Puedo ayudarle en algo?</br>";
				else if (answer == 1) object.innerHTML += "¿En qué puedo ayudarle?</br>";
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:StopTalking();'>Sólo quiero echar un vistazo, gracias.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,0);'>Háblame de Églomer.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,0);'>Quiero saber más sobre ti.</a></span></br>";
		
			}else if (question == 1){ // Eglomer's menu
				object.style.maxWidth = "800px";
				if (answer == 0) object.innerHTML += "¿Qué quiere saber de Églomer?</br>";
				else if (answer == 1) object.innerHTML += // Who is?
					  "<img src='eglomer.png' alt'eglomer' style='display:block; margin-left:auto; margin-right:auto;'>"
					+ "<center style='font-size:12px; margin-bottom:17px;'><i>Imagen por <a href='https://www.derekyu.com/' target='_blank'>Derek Yu</a></i></center>"
					+ "<p>Églomer es en realidad Javier Moya Nájera, un valenciano de "+WriteAge()+" años apasionado por el mundo de los videojuegos y la tecnología, aunque también tiene otros hobbies como la escritura, la música y la meteorología.</p>"
					+ "<p>Es trabajador, ordenado, disciplinado y tiene una gran facilidad para aprender, y poco más puedo decirle: esto es todo lo que ponía en el guión que me dio para preguntas como ésta.</p>"
					;
				else if (answer == 2) object.innerHTML += // Studies?
					  "<p>Está diplomado en <em>Magisterio Musical</em> por la Universidad Jaume I de Castellón, habiendo conseguido todos los honores posibles. También estudió un año de <em>Ingeniería Informática</em> en la Universidad Politécnica de Valencia, y ha realizado <em>varios cursos de programación en C/C++ y en Visual Basic</em> en el Centro Ciencias de la Información de Castellón.</p>"
					+ "<p>En 2013 finalizó el <em>Grado Superior de Desarrollo de Aplicaciones Multiplataforma</em> en modalidad a distancia, con una nota media de 9'3, y en 2014 el <em>Grado Superior de Desarrollo de Aplicaciones Web</em> en la misma modalidad, con una media de 8.57.</p>"
					;
				else if (answer == 3) object.innerHTML += // Experience
					  "<p>Durante varios años estuvo desarrollando juegos y aplicaciones para el mundo de la Scene de la Nintendo DS, y ganó diversos premios por ello. También ha programado algunas aplicaciones para PC, móviles, e incluso para cámaras digitales.</p>"
					+ "<p>Durante el año 2013 realizó 400 horas de prácticas en la empresa de videojuegos <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a>, donde pasó a formar parte de la plantilla poco tiempo después.</p>"
					+ "<p>En 2014 Ninja Fever pasó a ser <a href='https://lollipoprobot.com/' target='_blank'>Lollipop Robot</a>, en la que trabajó haciendo labores de QA en juegos como <em>OlliOlli</em> o <em>Don't Starve</em>.</p>"
					+ "<p>Ese mismo año pasó a formar parte del equipo de <a href='https://blitsoftware.com/' target='_blank'>Blit Software</a>, desarrollando aplicaciones para dispositivos iOS como <em>MotoGP™ Live Experience</em>, <em>Virtual Arena</em> o <em>MiniAtlas</em>.</p>"
					+ "<p>A partir de 2015 trabajó en <a href='https://blitworks.com/' target='_blank'>BlitWorks</a> realizando ports de grandes videojuegos como <em>Divinity: Original Sin II</em>, <em>Broken Age</em> o <em>Streets of Rage 4</em>. ¡Y también ha sido uno de los desarrolladores principales en <em>Spelunky 2</em>!</p>"
					+ "<p>En 2021 pasó a <a href='https://larian.com/' target='_blank'>Larian Studios</a> como programador de UI, y ha trabajado en juegos como <em>Baldur's Gate 3</em>.</p>"
					;
				else if (answer == 4) object.innerHTML += // Languages
					  "<p>De idiomas no se puede decir que vaya mal. Es bilingüe en castellano y catalán, y con el inglés no se defiende mal del todo, teniendo un nivel equivalente a un B1.</p>"
					;
				else if (answer == 5) object.innerHTML += // Contact
					  "<p>Puede escribirle un e-mail a <a href=\"mailto:"+WriteEmail("jmoyan","hotmail.com")+"\">"+WriteEmail("jmoyan","hotmail.com")+"</a>. Lo revisa a menudo, así que no creo que tarde en contestar.</p>"
					;
				else if (answer == 6) object.innerHTML += // trust you?
					  "<p>¡Por supuesto que sí! Siempre intento ir con la verdad por delante, tanto para lo bueno como para lo malo. Además, ahora que Églomer no está por aquí, ¿qué me impide hablar con claridad?</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(1,1);'>¿Quién es?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,2);'>¿Qué estudios tiene?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,3);'>¿Qué experiencia tiene?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,4);'>¿Y cómo va de idiomas?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,5);'>¿Cómo puedo contactar con él?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,6);'>¿Estás siendo sincero conmigo?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Hablemos de otra cosa.</a></span></br>";
					
					
			}else if (question == 2){ // Zippo's menu
				object.style.maxWidth = "400px";
				if (answer == 0) object.innerHTML += "Puede preguntarme lo que quiera.</br>";
				else if (answer == 1) object.innerHTML += // Who are you?
					  "<p>Soy Zippo, el <del>minion</del> ayudante personal de Églomer y su imagen representativa desde el año 2008. Me gusta pasear, hacer paracaidismo y viajar, aunque actualmente no dispongo de mucho tiempo para ello.</p>"
					;
				else if (answer == 2) object.innerHTML += // What are you?
					  "<p>Soy un miembro de una raza desconocida, parte del mundo imaginario de una de las historias que Églomer escribió hace tiempo. No tengo extremidades ni torso, y aún así soy capaz de apañármelas con este taller de locura, ¡e incluso tomar notas!</p>"
					;
				else if (answer == 3) object.innerHTML += // Why are you here?
					  "<p>Bueno, teniendo en cuenta cómo está el mundo hoy en día, incluso los seres imaginarios nos hemos tenido que buscar la vida para poder subsistir. Églomer no paga demasiado, pero es suficiente para llevar una buena vida.</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(2,1);'>¿Quién eres?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,2);'>¿Qué eres exactamente?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,3);'>¿Por qué estás aquí?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Hablemos de otra cosa.</a></span></br>";
			}
			
			object.innerHTML +=
				  "<span class='option'>&raquo; <a href='javascript:HideZippo();'>¿Podrías ocultarte, por favor?</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(1);'>Talk with me in English, please.</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(2);'>Parlam en Català, per favor.</a></span></br>";
		}
		
		
		
		
		
		
		
		
		
		
		// ENGLISH
		else if (lang == 1){
			// QUESTIONS
			if (question == 0){ // main menu
				if (answer == 0) object.innerHTML += "Welcome to Églomer's portfolio.</br>Could I help you?</br>";
				else if (answer == 1) object.innerHTML += "What could I do for you?</br>";
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:StopTalking();'>I just want to take a look, thank you.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,0);'>Tell me more about Églomer.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,0);'>I want to know more about you.</a></span></br>";
		
			}else if (question == 1){ // Eglomer's menu
				object.style.maxWidth = "800px";
				if (answer == 0) object.innerHTML += "What do you want to know about Églomer?</br>";
				else if (answer == 1) object.innerHTML += // Who is?
					  "<img src='eglomer.png' alt'eglomer' style='display:block; margin-left:auto; margin-right:auto;'>"
					+ "<center style='font-size:12px; margin-bottom:17px;'><i>Image by <a href='https://www.derekyu.com/' target='_blank'>Derek Yu</a></i></center>"
					+ "<p>Eglomer's real identity is Javier Moya Nájera, a "+WriteAge()+" years old person who loves videogames and technology, although he has also other hobbies like writing, play music, and meteorology.</p>"
					+ "<p>He is a hard-working, tidy, disciplined person, and he is also a really good learner. And I am afraid that is all can I say about him: this is all that he wrote me in the script for answering questions like this...</p>"
					;
				else if (answer == 2) object.innerHTML += // Studies?
					  "<p>He graduated in <em>Musical Teaching</em> at Jaume I University from Castelló with all honors. He also studied the first year of <em>IT Engineering</em> at the Polytechnic University of Valencia, and he has also cursed some <em>courses of programming in C/C++ and Visual Basic</em> in the Information Sciences Center of Castelló.</p>"
					+ "<p>In 2013 he finished the <em>Development of Multiplatform Applications</em>' high degree in distance-learning modality, with an average of 9,3, and in 2014 the <em>Development of Web Applications</em>' high degree in the same modality, with an average of 8,57.</p>"
					;
				else if (answer == 3) object.innerHTML += // Experience
					  "<p>For several years he developed games and apps on the Nintendo DS Scene, even winning some prizes in contests. He also has developed some apps for PC, mobile, and even digital cameras.</p>"
					+ "<p>In 2013 he performed 400 hours of internship in the videogame company <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a>, where he got a contract shortly after."
					+ "<p>In 2014 Ninja Fever converted into <a href='https://lollipoprobot.com/' target='_blank'>Lollipop Robot</a>, where he worked on QA in some games like <em>OlliOlli</em> and <em>Don't Starve</em>.</p>"
					+ "<p>In the same year, he moved to <a href='https://blitsoftware.com/' target='_blank'>Blit Software</a>, where he developed applications for iOS devices like <em>MotoGP™ Live Experience</em>, <em>Virtual Arena</em>, and <em>MiniAtlas</em>.</p>"
					+ "<p>Since 2015 he worked at <a href='https://blitworks.com/' target='_blank'>BlitWorks</a>, porting some great games like <em>Divinity: Original Sin II</em>, <em>Broken Age</em>, and <em>Streets of Rage 4</em>. And he has been one of the main developers of <em>Spelunky</em> 2 as well!</p>"
					+ "<p>In 2021 he moved to <a href='https://larian.com/' target='_blank'>Larian Studios</a> as a UI programmer, where he is currently working on titles like <em>Baldur's Gate 3</em>.</p>"
					;
				else if (answer == 4) object.innerHTML += // Languages
					  "<p>He is native in Spanish and Catalonian, and he is not bad at all in English, having a B1 level equivalent.</p>"
					;
				else if (answer == 5) object.innerHTML += // Contact
					  "<p>You can contact him at <a href=\"mailto:"+WriteEmail("jmoyan","hotmail.com")+"\">"+WriteEmail("jmoyan","hotmail.com")+"</a>. He checks it often, so he probably won't be late in answering.</p>"
					;
				else if (answer == 6) object.innerHTML += // trust you?
					  "<p>Of course, you can! I always tell the truth, for better and for worse. Besides, since Églomer is not around I can speak completely free.</p>"
					;
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(1,1);'>Who is him?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,2);'>Studies?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,3);'>Experience?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,4);'>Languages?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,5);'>Contact?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,6);'>Can I trust you?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Let's talk about another thing.</a></span></br>";
					
					
			}else if (question == 2){ // Zippo's menu
				object.style.maxWidth = "400px";
				if (answer == 0) object.innerHTML += "You can ask me whatever you want.</br>";
				else if (answer == 1) object.innerHTML += // Who are you?
					  "<p>I'm Zippo, the <del>minion</del> personal assistant of Églomer and his corporative image since 2008. I like to walk, skydive, and travel, but nowadays I am so busy that I barely can't do it.</p>"
					;
				else if (answer == 2) object.innerHTML += // What are you?
					  "<p>I am an unknown race specimen of one of the imaginary worlds that Églomer wrote up a long time ago. I have no limbs nor chest, but I am still able to manage this crazy workshop and even take notes!</p>"
					;
				else if (answer == 3) object.innerHTML += // Why are you here?
					  "<p>Well, in this world, even imaginary creatures like me have to find a way to live. Églomer doesn't pay very much, but it is enough to have a good life.</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(2,1);'>Who are you?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,2);'>What are you?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,3);'>Why are you here?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Let's talk about another thing.</a></span></br>";
			}
			
			object.innerHTML +=
				  "<span class='option'>&raquo; <a href='javascript:HideZippo();'>Could you hide yourself, please?</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(0);'>Háblame en Español, por favor.</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(2);'>Parlam en Català, per favor.</a></span></br>";
		}
		
		
		
		
		
		
		
		
		
		// CATALA
		else if (lang == 2){
			// QUESTIONS
			if (question == 0){ // main menu
				if (answer == 0) object.innerHTML += "Benvingut/da al portfolio d'Églomer.</br>Puc ajudar-li?</br>";
				else if (answer == 1) object.innerHTML += "En què puc ajudar-li?</br>";
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:StopTalking();'>Tan sols vull fer un ull, gràcies.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,0);'>Parlam d'Églomer.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,0);'>Vull saber més sobre tu.</a></span></br>";
		
			}else if (question == 1){ // Eglomer's menu
				object.style.maxWidth = "800px";
				if (answer == 0) object.innerHTML += "Què vols saber d'Églomer?</br>";
				else if (answer == 1) object.innerHTML += // Who is?
					  "<img src='eglomer.png' alt'eglomer' style='display:block; margin-left:auto; margin-right:auto;'>"
					+ "<center style='font-size:12px; margin-bottom:17px;'><i>Imatge per <a href='https://www.derekyu.com/' target='_blank'>Derek Yu</a></i></center>"
					+ "<p>Églomer és en realitat Javier Moya Nájera, un valencià de "+WriteAge()+" anys apassionat pel món dels videojocs i la tecnologia, tot i que també té altres hobbies com l'escriptura, la música i la meteorologia.</p>"
					+ "<p>És treballador, ordenat, disciplinat i té una gran facilitat per aprendre, i poc més puc dir-li: açò és tot el que posava en el guió que em va donar per preguntes com aquesta.</p>"
					;
				else if (answer == 2) object.innerHTML += // Studies?
					  "<p>Està diplomat en <em>Magisteri Musical</em> per la Universitat Jaume I de Castelló, on va aconseguit tots els honors possibles. També va estudiar un any d'<em>Enginyeria Informàtica</em> a la Universitat Politècnica de València, i ha realitzat alguns <em>cursos de programació en C/C++ i Visual Basic</em> al Centre Ciències de la Informació de Castelló.</p>"
					+ "<p>En 2013 va acabar el <em>Grau Superior de Desenvolupament d'Aplicacions Multiplataforma</em> en modalitat a distància, amb una mitja de 9'3, i en 2014 el <em>Grau Superior de Desenvolupament d'Aplicacions Web</em> en la mateixa modalitat, amb una mitja de 8.57.</p>"
					;
				else if (answer == 3) object.innerHTML += // Experience
					  "<p>Durant uns anys va estar desenvolupant jocs i aplicacions per al món de l'Scene de la Nintendo DS, on va guanyar diversos premis. També ha programat algunes aplicacions per a PC, mòbils i inclús càmeres digitals.</p>"
					+ "<p>L'any 2013 va realitzar 400 hores de pràctiques en l'empresa de videojocs <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a>, on va passar a formar part de la plantilla poc temps després.</p>"
					+ "<p>En 2014 Ninja Fever va passar a ser <a href='https://lollipoprobot.com/' target='_blank'>Lollipop Robot</a>, en la que va treballar fent tasques de QA en jocs com <em>OlliOlli</em> o <em>Don't Starve</em>.</p>"
					+ "<p>Aquell mateix any va passar a formar part de l'equip de <a href='https://blitsoftware.com/' target='_blank'>Blit Software</a>, desenvolupant aplicacions per a dispositius iOS com <em>MotoGP™ Live Experience</em>, <em>Virtual Arena</em> o <em>MiniAtlas</em>.</p>"
					+ "<p>Des de 2015 va treballar en <a href='https://blitworks.com/' target='_blank'>BlitWorks</a> realitzant ports de grans videojocs com <em>Divinity: Original Sin II</em>, <em>Broken Age</em> o <em>Streets of Rage 4</em>. I també ha sigut un dels programadors principals en <em>Spelunky 2</em>!</p>"
					+ "<p>Al 2021 va passar a <a href='https://larian.com/' target='_blank'>Larian Studios</a> com a programador de UI, i ha treballat en juegos com <em>Baldur's Gate 3</em>.</p>"
					;
				else if (answer == 4) object.innerHTML += // Languages
					  "<p>D'idiomes no es pot fir que vaja malament. És bilingüe en castellà i català, té el títol de Mestre de Valencià, i amb l'anglès no es defensa malament, on té un nivell equivalent a un B1.</p>"
					;
				else if (answer == 5) object.innerHTML += // Contact
					  "<p>Pot escriure-li un e-mail a <a href=\"mailto:"+WriteEmail("jmoyan","hotmail.com")+"\">"+WriteEmail("jmoyan","hotmail.com")+"</a>. El revisa prou sovint, així que no crec que trigue en respondre.</p>"
					;
				else if (answer == 6) object.innerHTML += // trust you?
					  "<p>Per descomptat! Sempre intente anar amb la veritat en la mà, tant per les coses bones com per les roïnes. A més, ara que Églomer no està per ací, què m'impedeix parlar amb claredat?</p>"
					;
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(1,1);'>Qui és?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,2);'>Quins estudis té?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,3);'>Quina experiència té?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,4);'>Com va d'idiomes?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,5);'>Com puc contactar amb ell?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,6);'>Ets sincer amb mi?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Parlem d'un altra cosa.</a></span></br>";
					
					
			}else if (question == 2){ // Zippo's menu
				object.style.maxWidth = "400px";
				if (answer == 0) object.innerHTML += "Pot preguntar-me el que vulga.</br>";
				else if (answer == 1) object.innerHTML += // Who are you?
					  "<p>Sóc Zippo, <del>el minion</del> l'ajudant personal d'Églomer i la seua imatge representativa des de l'any 2008. M'agrada passejar, fer paracaigudisme i viatjar, encara que actualment no dispose de molt de temps per fer-ho.</p>"
					;
				else if (answer == 2) object.innerHTML += // What are you?
					  "<p>Sóc membre d'una raça desconeguda, part del món imaginari d'una de les històries que Églomer va escriure fa temps. No tinc cos ni extremitats, i tot i això em desempenyale prou bé en aquest taller de bojos. I fins i tot puc prendre notes!</p>"
					;
				else if (answer == 3) object.innerHTML += // Why are you here?
					  "<p>Tenint en compte com està el món avui dia, inclòs els éssers imaginaris ens hem hagut de buscar la vida per viure. Églomer no paga molt, però és prou per a dur una bona vida.</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(2,1);'>Qui eres?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,2);'>Què ets exactament?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,3);'>Per què estàs ací?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Parlem d'un altra cosa.</a></span></br>";
			}
			
			object.innerHTML +=
				  "<span class='option'>&raquo; <a href='javascript:HideZippo();'>Podries amagar-te, per favor?</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(1);'>Talk me in English, please.</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(0);'>Háblame en Español, por favor.</a></span></br>";
		} 
	}
		
	// Set and translate Zippo's messages, main content and card content.
	function Translate (newlang){
		var object;
		if (lang != newlang) lang = newlang;
		GetMessages();
		if (cardLoaded != "") LoadCard(cardLoaded); // If we are watching some card, translate it too
					
		if (lang == 0){ // es		
			object = document.getElementById("close");
			object.innerHTML = "Cerrar";
			
			object = document.getElementById("head");
			object.innerHTML = "El Taller de Églomer";
			document.title = "El Taller de Églomer";
					
			object = document.getElementById("hidded");
			object.innerHTML = "LLAMAR A ZIPPO";	

			object = document.getElementById("foot");
			object.innerHTML = "<a href='http://validator.w3.org/check?uri="+document.location.href+"' target='_blank'><img src='http://www.w3.org/Icons/valid-xhtml10' alt='Valid XHTML 1.0 Transitional' height='31' width='88' /></a>"
							 + "<br/>&copy; Javier Moya N&aacute;jera (2021). Todos los derechos reservados.";
			
			
			object = document.getElementById("menu_my");
			object.innerHTML = "Proyectos propios";
			object = document.getElementById("menu_pro");
			object.innerHTML = "Proyectos profesionales";			
			
			object = document.getElementById("hangman_n");
			object.innerHTML = "El ahorcado";
			object = document.getElementById("hangman_t");
			object.innerHTML = "Clásico";
			object = document.getElementById("hangman_d");
			object.innerHTML = "¡De tu libreta a tu Android! Disfruta como nunca del juego de toda la vida.";
			
			object = document.getElementById("tictactoe_n");
			object.innerHTML = "Tres en raya";
			object = document.getElementById("tictactoe_t");
			object.innerHTML = "Clásico";
			object = document.getElementById("tictactoe_d");
			object.innerHTML = "Atrévete a jugar a este divertido clásico, ahora para tu dispositivo Android.";
			
			object = document.getElementById("halguens_t");
			object.innerHTML = "MMORPG estático";
			object = document.getElementById("halguens_d");
			object.innerHTML = "Dragones y Fénix. Dos razas enfrentadas desde el albor de los tiempos y cuya guerra perdura hasta nuestros días. ¡Únete al bando que más te guste y colabora en la guerra para llevar a tus aliados hacia la victoria!";
			
			object = document.getElementById("swordmaster_t");
			object.innerHTML = "Reflejos, Lucha, Arcade";
			object = document.getElementById("swordmaster_d");
			object.innerHTML = "Conviértete en un samurai y empuña tu katana para vencer a tu adversario en un duelo a muerte. Sólo escuchando tu voz interior te alzarás con la victoria en este entretenido juego que mezcla lucha y reflejos, y que fue ganador del tercer puesto del Scenery Beta 2011.";
			
			object = document.getElementById("gravity_t");
			object.innerHTML = "Arcade, Habilidad, OnLine";
			object = document.getElementById("gravity_d");
			object.innerHTML = "Huye de los enemigos tanto tiempo como puedas, o haz que choquen con las paredes para deshacerte de ellos y superar el nivel. Incluye un sistema de carga de música por archivos externos '.mp3' y ranking online.";
			
			object = document.getElementById("lightsout_t");
			object.innerHTML = "Puzle";
			object = document.getElementById("lightsout_d");
			object.innerHTML = "Apaga todas las luces del tablero... si puedes. Todo un clásico ahora disponible para la Nintendo DS. Ganador del quinto puesto del Scenery Beta 2009.";
			
			object = document.getElementById("mysdiads_d");
			object.innerHTML = "Prueba de concepto de MMORPG con implementación del sistema de creación de cuentas y personajes, chat, y posicionamiento y animación de hasta cien personajes, tanto en el mundo como en el mapa.";
			
			object = document.getElementById("fungus_d");
			object.innerHTML = "Programa que permite enviar correos electrónicos haciendo uso de una cuenta de Gmail, con la diferencia de que podemos cambiar el nombre que se mostrará al receptor. También permite administrar tu cuenta de Gmail mediante comandos IMAP.";
			
			object = document.getElementById("stormalarm_t");
			object.innerHTML = "Meteorología";
			object = document.getElementById("stormalarm_d");
			object.innerHTML = "Programa que analiza los mapas de la AEMET (Asociación Estatal de Meteorología) y que, entre otras opciones, nos avisa en caso de haber núcleos convectivos o tormenta cerca de la posición que definamos como zona de alarma.";
			
			object = document.getElementById("himitsu_t");
			object.innerHTML = "Encriptador";
			object = document.getElementById("himitsu_d");
			object.innerHTML = "Programa que permite codificar y decodificar mensajes de texto, ya sea escribiéndolos directamente en el programa o mediante archivos '.txt'.";
			
			object = document.getElementById("workshop_n");
			object.innerHTML = "El Taller de Églomer";
			object = document.getElementById("workshop_d");
			object.innerHTML = "Portfolio personal de Javier Moya Nájera. Se adapta automáticamente al idioma del navegador y está realizado combinando XHTML, CSS y Javascript. ¡Siéntete libre de visualizar su código fuente si quieres!";
			
			object = document.getElementById("chdk_t");
			object.innerHTML = "Meteorología";
			object = document.getElementById("chdk_d");
			object.innerHTML = "Script para el hack de Canon (CHDK) que añade a nuestra cámara la posibilidad de crear timelapses, cazar rayos o ambas cosas, pudiendo establecer la hora de inicio de cada modo.";
			
			object = document.getElementById("intercultural_n");
			object.innerHTML = "La construcción de la escuela intercultural inclusiva desde procesos de investigación-acción";
			object = document.getElementById("intercultural_t");
			object.innerHTML = "Educación";
			object = document.getElementById("intercultural_d");
			object.innerHTML = "Diseño técnico y gráfico del CD que acompaña a esta investigación publicada dentro de la colección <em>e-educació</em> de la Universidad Jaume I de Castellón de la Plana.";
			
			object = document.getElementById("nemorak_t");
			object.innerHTML = "Libros";
			object = document.getElementById("nemorak_d");
			object.innerHTML = "La tranquila vida de Darko cambia drásticamente cuando una peligrosa organización contacta con él y le obliga a retomar su antigua vida de asesino a sueldo. Mientras tanto Julio, un adolescente aficionado a los juegos de lógica, disfruta con sus amigos sin saber el agitado destino que le aguarda. Dos mundos distintos que confluyen inesperadamente y que desencadenan en una frenética historia de acción y misterio cuyo nexo de unión sólo tiene un nombre: Némorak.";
			
			object = document.getElementById("otherplatforms");
			object.innerHTML = "Otras Plataformas";
			
			object = document.getElementById("publications");
			object.innerHTML = "Publicaciones";
			
			// PRO
			object = document.getElementById("arsonandplunder_d");
			object.innerHTML = "Creación de un empaquetador de archivos e integración en el motor del juego.<br/>Testeo general del juego.";
			
			object = document.getElementById("spelunky_d");
			object.innerHTML = "QA del juego en las plataformas de Sony.";
			
			object = document.getElementById("fez_d");
			object.innerHTML = "QA del juego en las plataformas de Sony.";
			
			object = document.getElementById("dontstarve_d");
			object.innerHTML = "QA del juego en PlayStation Vita.";
			
			object = document.getElementById("olliolli_d");
			object.innerHTML = "QA del juego en algunas plataformas de Sony.";
			
			object = document.getElementById("miniatlas_d");
			object.innerHTML = "Desarrollador principal de la aplicación, destacando la posibilidad de dibujar sobre las imágenes, y el guardado y envío por correo electrónico de las modificaciones.";
			
			object = document.getElementById("flipchart_d");
			object.innerHTML = "Desarrollador principal de la aplicación, destacando la creación de PDFs con los montajes realizados y su posterior envío por correo electrónico.";
			
			object = document.getElementById("virtualarena_d");
			object.innerHTML = "Parte del equipo de desarrollo de la aplicación, destacando la creación de menús y la lógica en algunas funciones como la creación de líneas de unión entre jugadores.";
			
			object = document.getElementById("motogplive_d");
			object.innerHTML = "Desarrollador principal del front-end de la aplicación, destacando el tratamiento en tiempo real de la posición y tiempo de los pilotos y su visualización en todo tipo de dispositivos iOS.";
			
			object = document.getElementById("motogpvideo_d");
			object.innerHTML = "Desarrollador principal del front-end de la aplicación, destacando la visualización en tiempo real de las carreras y los entrenamientos.";
			
			object = document.getElementById("spelunky2_d");
			object.innerHTML = "Uno de los desarrolladores principales del juego, destacando el desarrollo de gameplay, IA e input.<br/>Moderador del servidor de Discord.";
			
			object = document.getElementById("brokenage_d");
			object.innerHTML = "Encargado principal del port en todas las plataformas, realizando todo el porting exceptuando la parte gráfica en Xbox One y el audio en Switch.";
			
			object = document.getElementById("dos2_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input y savegames, y destacando el desarrollo del cross-save de Switch con Steam.";
			
			object = document.getElementById("sor4_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input, savegame, achievements y otros aspectos lógicos de la plataforma. Ayuda puntual en el online y los leaderboards.";
			
			object = document.getElementById("fmf_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input, savegame, achievements y otros aspectos lógicos de la plataforma.";
			
			object = document.getElementById("clicker_d");
			object.innerHTML = "Encargado principal del port, realizando todo el porting exceptuando los aspectos nativos de PlayStation 4. A destacar la adaptación a gamepad de todo el input.";
			
			object = document.getElementById("invisible_d");
			object.innerHTML = "Encargado principal del port, realizando todo el porting del juego.";
			
			object = document.getElementById("hammerwatch_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input, savegame, achievements y otros aspectos lógicos de la plataforma. Guionista del trailer de anuncio de la versión de consola.";
			
			object = document.getElementById("tjd_d");
			object.innerHTML = "Uno de los encargado principales del port, realizando la gran mayoría del porting exceptuando los aspectos nativos de PlayStation 4. A destacar la adaptación a gamepad de todo el input, manteniendo a su vez el input táctil para Switch.";
			
			object = document.getElementById("deblob_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input, savegame, achievements y otros aspectos lógicos de la plataforma. A destacar el soporte de mandos de Wii en la versión de PC.";
			
			object = document.getElementById("deblob2_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input, savegame, achievements y otros aspectos lógicos de la plataforma. A destacar el soporte de mandos de Wii en la versión de PC.";
			
			object = document.getElementById("braid_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input, savegame, achievements y otros aspectos lógicos de la plataforma.";
			
			object = document.getElementById("tricky_d");
			object.innerHTML = "Parte del equipo del port, realizando labores de input, savegame, achievements y otros aspectos lógicos de la plataforma.";
			
			object = document.getElementById("wargroove_d");
			object.innerHTML = "Uno de los encargado principales del port, realizando la gran mayoría del porting exceptuando los aspectos de red del online.";
			
			object = document.getElementById("starbound_d");
			object.innerHTML = "Encargado principal del port, realizando todo el trabajo de porting. A destacar el porting de toda la red del modo online.";
			
			object = document.getElementById("bg3_d");
			object.innerHTML = "Programador de UI.";
			
		}else if (lang == 1){ // en
			object = document.getElementById("close");
			object.innerHTML = "Close";
					
			object = document.getElementById("head");
			object.innerHTML = "Églomer's Workshop";
			document.title = "Églomer's Workshop";
					
			object = document.getElementById("hidded");
			object.innerHTML = "CALL ZIPPO";
					
			object = document.getElementById("foot");
			object.innerHTML = "<a href='http://validator.w3.org/check?uri="+document.location.href+"' target='_blank'><img src='http://www.w3.org/Icons/valid-xhtml10' alt='Valid XHTML 1.0 Transitional' height='31' width='88' /></a>"
							 + "<br/>&copy; Javier Moya N&aacute;jera (2021). All rights reserved.";
			
			object = document.getElementById("menu_my");
			object.innerHTML = "Own projects";
			object = document.getElementById("menu_pro");
			object.innerHTML = "Professional projects";
			
			object = document.getElementById("hangman_n");
			object.innerHTML = "Hangman";
			object = document.getElementById("hangman_t");
			object.innerHTML = "Classic";
			object = document.getElementById("hangman_d");
			object.innerHTML = "From your notebook to your Android! Enjoy like never before of this classical game.";
			
			object = document.getElementById("tictactoe_n");
			object.innerHTML = "Tic Tac Toe";
			object = document.getElementById("tictactoe_t");
			object.innerHTML = "Classic";
			object = document.getElementById("tictactoe_d");
			object.innerHTML = "Dare yourself to play this fun classical game, now on your Android device.";
			
			object = document.getElementById("halguens_t");
			object.innerHTML = "Static MMORPG";
			object = document.getElementById("halguens_d");
			object.innerHTML = "Dragons and Phoenixes. These two races are fighting since the dawn of time and their war has continued until today. Join one of them and fight to take your faction to victory!";
			
			object = document.getElementById("swordmaster_t");
			object.innerHTML = "Coordination, Fight, Arcade";
			object = document.getElementById("swordmaster_d");
			object.innerHTML = "Become yourself into a samurai and fight with your katana to defeat your adversary in a deathmatch. In this game, which mix fight and coordination, you will only win by listening to your interior voice. Third place winner of the Scenery Beta 2011 contest.";
			
			object = document.getElementById("gravity_t");
			object.innerHTML = "Arcade, Ability, OnLine";
			object = document.getElementById("gravity_d");
			object.innerHTML = "Flee from enemies as long as you can, or make them collide with walls to destroy them and pass to the next level. It includes an external '.mp3' file loading system for music and an online ranking.";
			
			object = document.getElementById("lightsout_t");
			object.innerHTML = "Puzzle";
			object = document.getElementById("lightsout_d");
			object.innerHTML = "Turn off all lights on the board... if you can do it! A classic game now available on your Nintendo DS. Fifth place winner of the Scenery Beta 2009 contest.";
			
			object = document.getElementById("mysdiads_d");
			object.innerHTML = "An MMORPG's proof of concept that implements an account and characters creation system, chat, and positioning and animation of up to a hundred characters, both in the world and on the map.";
			
			object = document.getElementById("fungus_d");
			object.innerHTML = "A program that allows you to send emails through a Gmail account, but with the difference that you can change the name that your receivers will see. The program allows you to manage your Gmail account through IMAP commands too.";
			
			object = document.getElementById("stormalarm_t");
			object.innerHTML = "Meteorology";
			object = document.getElementById("stormalarm_d");
			object.innerHTML = "An application that uses maps from the AEMET (State Meteorology Association) to alert us when there are convective cells or storms near the position marked as the alarm zone.";
			
			object = document.getElementById("himitsu_t");
			object.innerHTML = "Encryptor";
			object = document.getElementById("himitsu_d");
			object.innerHTML = "A program that can encode and decode text messages, either by typing directly in the program or loading '.txt' files.";
			
			object = document.getElementById("workshop_n");
			object.innerHTML = "Églomer's Workshop";
			object = document.getElementById("workshop_d");
			object.innerHTML = "The personal portfolio of Javier Moya Nájera. It adapts automatically to the browser language and it was made by mixing XHTML, CSS, and Javascript. Feel free to view its Source Code if you want!";
			
			object = document.getElementById("chdk_t");
			object.innerHTML = "Meteorology";
			object = document.getElementById("chdk_d");
			object.innerHTML = "Script for Canon's hack (CHDK) that adds to our camera the ability to create timelapses, thunder-hunting, or both by setting the start time of each mode.";
			
			object = document.getElementById("intercultural_n");
			object.innerHTML = "Construction of the inclusive intercultural school from research-action processes";
			object = document.getElementById("intercultural_t");
			object.innerHTML = "Education";
			object = document.getElementById("intercultural_d");
			object.innerHTML = "Technical and graphical design of the CD that accompanies this research published into the collection <em>e-educació</em> of Jaume I University of Castelló.";
			
			object = document.getElementById("nemorak_t");
			object.innerHTML = "Books";
			object = document.getElementById("nemorak_d");
			object.innerHTML = "The quiet Darko's life changes drastically when a dangerous organization contacts him and forces him to resume his old slayer life. Meanwhile, Julio, a teenage fan of puzzle games, enjoys with his friends without knowing the agitated fate that awaits him. Two different worlds which unexpectedly come together to trigger a frenzied story of action and mystery and which link has only one name: Némorak.";
			
			object = document.getElementById("otherplatforms");
			object.innerHTML = "Other Platforms";
			
			object = document.getElementById("publications");
			object.innerHTML = "Publications";
		
			// PRO
			object = document.getElementById("arsonandplunder_d");
			object.innerHTML = "Creation of a file packer and integration into the game engine.<br/>Game testing and QA.";
			
			object = document.getElementById("spelunky_d");
			object.innerHTML = "Testing and QA of the game on Sony's platforms.";
			
			object = document.getElementById("fez_d");
			object.innerHTML = "Testing and QA of the game on Sony's platforms.";
			
			object = document.getElementById("dontstarve_d");
			object.innerHTML = "Testing and QA of the game on PlayStation Vita.";
			
			object = document.getElementById("olliolli_d");
			object.innerHTML = "Testing and QA of the game in some of Sony's platforms.";
			
			object = document.getElementById("miniatlas_d");
			object.innerHTML = "Main developer, highlighting the image editor, being able to modify, save, and send these modifications by e-mail.";
			
			object = document.getElementById("flipchart_d");
			object.innerHTML = "Main developer, highlighting the PDF creation of the compositions and the sending of these files by e-mail.";
			
			object = document.getElementById("virtualarena_d");
			object.innerHTML = "Part of the development team, highlighting the creation of the menus and the logic of some functions like the creation of union lines between players.";
			
			object = document.getElementById("motogplive_d");
			object.innerHTML = "Front-end's main developer, highlighting the real-time treatment of pilots' position and times, and its visualization in all kinds of iOS devices.";
			
			object = document.getElementById("motogpvideo_d");
			object.innerHTML = "Front-end's main developer, highlighting the feature for watching training and races in real-time.";
			
			object = document.getElementById("spelunky2_d");
			object.innerHTML = "One of the main game developers, highlighting the work on gameplay, AI, and input.<br/>Discord server moderator.";
			
			object = document.getElementById("brokenage_d");
			object.innerHTML = "Main port manager in all platforms, making the whole port except the graphics in Xbox One, and the audio in Switch.";
			
			object = document.getElementById("dos2_d");
			object.innerHTML = "Part of the porting team, working on input and savegame tasks and highlighting the development of the cross-save feature between Switch and Steam.";
			
			object = document.getElementById("sor4_d");
			object.innerHTML = "Part of the porting team, working on input, savegame, achievements, and some other logical aspects of the platform. Punctual helper in online and leaderboards.";
			
			object = document.getElementById("fmf_d");
			object.innerHTML = "Part of the porting team, working on input, savegame, achievements, and some other logical aspects of the platform.";
			
			object = document.getElementById("clicker_d");
			object.innerHTML = "Main port manager in all platforms, making the whole port except the native aspects of PlayStation 4. To highlight the input adaption to the gamepad.";
			
			object = document.getElementById("invisible_d");
			object.innerHTML = "Main port manager in all platforms, making the whole port of the game.";
			
			object = document.getElementById("hammerwatch_d");
			object.innerHTML = "Part of the porting team, working on input, savegame, achievements, and some other logical aspects of the platform. Scriptwriter of the console version announcement trailer.";
			
			object = document.getElementById("tjd_d");
			object.innerHTML = "One of the main workers of the port, doing most of the port except the native aspects of PlayStation 4. To highlight the input adaption to the gamepad, maintaining the tactile input for Switch.";
			
			object = document.getElementById("deblob_d");
			object.innerHTML = "Part of the porting team, working on input, savegame, achievements, and some other logical aspects of the platform. To highlight the Wii controller support in the PC version.";
			
			object = document.getElementById("deblob2_d");
			object.innerHTML = "Part of the porting team, working on input, savegame, achievements, and some other logical aspects of the platform. To highlight the Wii controller support in the PC version.";
			
			object = document.getElementById("braid_d");
			object.innerHTML = "Part of the porting team, working on input, savegame, achievements, and some other logical aspects of the platform.";
			
			object = document.getElementById("tricky_d");
			object.innerHTML = "Part of the porting team, working on input, savegame, achievements, and some other logical aspects of the platform.";
			
			object = document.getElementById("wargroove_d");
			object.innerHTML = "One of the main workers of the port, doing most of the port except the online stuff.";
			
			object = document.getElementById("starbound_d");
			object.innerHTML = "Main port manager, making the whole port of the game. To highlight the port of all the online stuff.";
			
			object = document.getElementById("bg3_d");
			object.innerHTML = "UI programmer.";
		
		}else if (lang == 2){ // ca
			object = document.getElementById("close");
			object.innerHTML = "Tancar";
			
			object = document.getElementById("head");
			object.innerHTML = "El Taller d'Églomer";
			document.title = "El Taller d'Églomer";
					
			object = document.getElementById("hidded");
			object.innerHTML = "CRIDAR A ZIPPO";
					
			object = document.getElementById("foot");
			object.innerHTML = "<a href='http://validator.w3.org/check?uri="+document.location.href+"' target='_blank'><img src='http://www.w3.org/Icons/valid-xhtml10' alt='Valid XHTML 1.0 Transitional' height='31' width='88' /></a>"
							 + "<br/>&copy; Javier Moya N&aacute;jera (2021). Tots els drets reservats.";
			
			object = document.getElementById("menu_my");
			object.innerHTML = "Projectes propis";
			object = document.getElementById("menu_pro");
			object.innerHTML = "Projectes professionals";
			
			object = document.getElementById("hangman_n");
			object.innerHTML = "El penjat";
			object = document.getElementById("hangman_t");
			object.innerHTML = "Clàssic";
			object = document.getElementById("hangman_d");
			object.innerHTML = "De la teua llibreta al teu Android! Gaudeix com mai del joc de tota la vida.";
			
			object = document.getElementById("tictactoe_n");
			object.innerHTML = "Tres en línia";
			object = document.getElementById("tictactoe_t");
			object.innerHTML = "Clàssic";
			object = document.getElementById("tictactoe_d");
			object.innerHTML = "Atreveix-te a jugar a aquest divertit clàssic, ara disponible per al teu dispositiu Android";
			
			object = document.getElementById("halguens_t");
			object.innerHTML = "MMORPG estàtic";
			object = document.getElementById("halguens_d");
			object.innerHTML = "Dragons i Fènix. Dos races enfrontades des de l'albor dels temps i la guerra dels quals perdura encara hui dia. Uneix-te a la facció que més t'agrade i col·labora en la guerra per dur als teus aliats a la victòria!";
			
			object = document.getElementById("swordmaster_t");
			object.innerHTML = "Reflexos, Lluita, Arcade";
			object = document.getElementById("swordmaster_d");
			object.innerHTML = "Converteix-te en un samurai i blandeix la katana per véncer al teu adversari en una lluita a mort. Tan sols escoltant la teua veu interior aconseguiràs guanyar en aquest entretingut joc que barreja lluita i reflexes, i que va guanyar el tercer premi de l'Scenery Beta 2011.";
			
			object = document.getElementById("gravity_t");
			object.innerHTML = "Arcade, Habilitat, OnLine";
			object = document.getElementById("gravity_d");
			object.innerHTML = "Escapa dels enemics tant de temps com pugues, o fes que xoquen contra les parets per desfer-te d'ells i superar el nivell. Inclou un sistema de càrrega de música per arxius '.mp3' i ranking online.";
			
			object = document.getElementById("lightsout_t");
			object.innerHTML = "Puzle";
			object = document.getElementById("lightsout_d");
			object.innerHTML = "Apaga totes les llums del tauler... si pots. Tot un clàssic ara disponible per la Nintendo DS. Guanyador del cinquè premi de l'Scenery Beta 2009.";
			
			object = document.getElementById("mysdiads_d");
			object.innerHTML = "Proba de concepte d'un MMORPG amb implementació del sistema de creació de comptes i personatges, xat, i posicionament i animació de fins a cent personatges alhora, tant al món com al mapa.";
			
			object = document.getElementById("fungus_d");
			object.innerHTML = "Programa que permet enviar correus electrònics mitjançant un compte de Gmail, amb la diferència de que podem canviar el nom que es mostrarà al receptor. També permet administrar el teu compte de Gmail fent ús d'ordres IMAP.";
			
			object = document.getElementById("stormalarm_t");
			object.innerHTML = "Meteorologia";
			object = document.getElementById("stormalarm_d");
			object.innerHTML = "Programa que analitza els mapes de l'AEMET (Associació Estatal de Meteorologia) i que ens avisa en cas d'haver-hi nuclis convectius o tempesta a prop de la posició definida com zona d'alarma.";
			
			object = document.getElementById("himitsu_t");
			object.innerHTML = "Encriptador";
			object = document.getElementById("himitsu_d");
			object.innerHTML = "Programa que permet codificar i descodificar missatges de text, ja siga escrivint-los directament al programa o mitjançant arxius '.txt'.";
			
			object = document.getElementById("workshop_n");
			object.innerHTML = "El Taller d'Églomer";
			object = document.getElementById("workshop_d");
			object.innerHTML = "Portfolio personal de Javier Moya Nájera. S'adapta automàticament a l'idioma del navegador i està realitzat combinant XHTML, CSS i Javascript. Ets lliure de visualitzar el seu codi font si vols!";
			
			object = document.getElementById("chdk_t");
			object.innerHTML = "Meteorologia";
			object = document.getElementById("chdk_d");
			object.innerHTML = "Script per al hack de Canon (CHDK) que afegix a la nostra càmera la possibilitat de crear timelapses, caçar raigs o ambdues coses establint l'hora d'inici de cada mode.";
			
			object = document.getElementById("intercultural_n");
			object.innerHTML = "La construcció de l'escola intercultural inclusiva des de processos d'investigació-acció";
			object = document.getElementById("intercultural_t");
			object.innerHTML = "Educació";
			object = document.getElementById("intercultural_d");
			object.innerHTML = "Disseny tècnic i gràfic del CD que acompanya a aquesta investigació publicada dins la col·lecció <em>e-educació</em> de la Universitat Jaume I de Castelló de la Plana.";
			
			object = document.getElementById("nemorak_t");
			object.innerHTML = "Llibres";
			object = document.getElementById("nemorak_d");
			object.innerHTML = "La tranquil·la vida de Darko canvia dràsticament quan una perillosa organització contacta amb ell i l'obliga a reprendre la seua antiga vida d'assassí a sou. Mentres tant Julio, un adolescent aficionat als jocs de lògica, gaudeix amb els seus amics sense saber l'agitat destí que l'espera. Dos móns distints que conflueixen inesperadament i que desencadenen en una frenètica història d'acció i misteri, i dels quals el nexe només té un nom: Némorak.";
			
			object = document.getElementById("otherplatforms");
			object.innerHTML = "Altres Plataformes";
			
			object = document.getElementById("publications");
			object.innerHTML = "Publicacions";
			
			// PRO
			object = document.getElementById("arsonandplunder_d");
			object.innerHTML = "Creació d'un empaquetador d'arxius i integració en el motor del joc.<br/>Testatge general del joc.";
			
			object = document.getElementById("spelunky_d");
			object.innerHTML = "QA del joc en les plataformes de Sony.";
			
			object = document.getElementById("fez_d");
			object.innerHTML = "QA del joc en les plataformes de Sony.";
			
			object = document.getElementById("dontstarve_d");
			object.innerHTML = "QA del joc en PlayStation Vita.";
			
			object = document.getElementById("olliolli_d");
			object.innerHTML = "QA del joc en algunes plataformes de Sony.";
			
			object = document.getElementById("miniatlas_d");
			object.innerHTML = "Programador principal de l'aplicació, destacant la possibilitat de dibuixar a les imatges, i el guardat i l'enviament per correu electrònic de les modificacions.";
			
			object = document.getElementById("flipchart_d");
			object.innerHTML = "Programador principal de l'aplicació, destacant la creació de PDFs amb els muntatges realitzats i el seu enviament per correu electrònic.";
			
			object = document.getElementById("virtualarena_d");
			object.innerHTML = "Part de l'equip de desenvolupament de l'aplicació, destacant la creació de menús i la lògica en algunes funcions com la creació de línies d'unió entre jugadors.";
			
			object = document.getElementById("motogplive_d");
			object.innerHTML = "Programador principal del front-end de l'aplicació, destacant el tractament en temps real de la posició i el temps dels pilots i la seua visualització en tota mena de dispositius iOS.";
			
			object = document.getElementById("motogpvideo_d");
			object.innerHTML = "Programador principal de l'aplicació, destacant la visualització en temps real de les carreres i els entrenaments.";
			
			object = document.getElementById("spelunky2_d");
			object.innerHTML = "Un dels programadors principals del joc, destacant el desenvolupament de gameplay, IA i input.<br/>Moderador del servidor de Discord.";
			
			object = document.getElementById("brokenage_d");
			object.innerHTML = "Encarregat principal del port en totes les plataformes, realitzant tot el porting excepte la part gràfica de Xbox One i l'audio de Switch.";
			
			object = document.getElementById("dos2_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input i savegames, i destacant el desenvolupament del cross-save de Switch amb Steam.";
			
			object = document.getElementById("sor4_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input, savegame, achievements i altres aspectes lògics de la plataforma. Ajuda puntual en l'online i els leaderboards.";
			
			object = document.getElementById("fmf_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input, savegame, achievements i altres aspectes lògics de la plataforma.";
			
			object = document.getElementById("clicker_d");
			object.innerHTML = "Encarregat principal del port, realitzant tot el porting exceptuant els aspectes natius de PlayStation 4. Cal destacar l'adaptació a gamepad de tot l'input.";
			
			object = document.getElementById("invisible_d");
			object.innerHTML = "Encarregat principal del port, realitzant tot el porting del joc.";
			
			object = document.getElementById("hammerwatch_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input, savegame, achievements i altres aspectes lògics de la plataforma. Guionista de l'anunci de la versió de consola.";
			
			object = document.getElementById("tjd_d");
			object.innerHTML = "Un dels encarregats principals del port, realitzant la gran part del porting exceptuant els aspectes natius de PlayStation 4. Cal destacar l'adaptació a gamepad de tot l'input, mantenint al mateix temps l'input tàctil per a Switch.";
			
			object = document.getElementById("deblob_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input, savegame, achievements i altres aspectes lògics de la plataforma. Cal destacar el suport de comandaments de Wii a la versió de PC.";
			
			object = document.getElementById("deblob2_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input, savegame, achievements i altres aspectes lògics de la plataforma. A destacar el soporte de mandos de Wii en la versión de PC.";
			
			object = document.getElementById("braid_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input, savegame, achievements i altres aspectes lògics de la plataforma.";
			
			object = document.getElementById("tricky_d");
			object.innerHTML = "Part de l'equip del port, realitzant tasques d'input, savegame, achievements i altres aspectes lògics de la plataforma.";
			
			object = document.getElementById("wargroove_d");
			object.innerHTML = "Un dels encarregats principals del port, realitzant la majoria del porting exceptuant els aspectes de la xarxa de l'online.";
			
			object = document.getElementById("starbound_d");
			object.innerHTML = "Encarregat principal del port, realitzant tot el treball de porting. Cal destacar el porting de tota la xarxa del mode online.";
			
			object = document.getElementById("bg3_d");
			object.innerHTML = "Programador de UI.";
		}				
	}
	
	// Show Zippo
	function ShowZippo(){
		Hide("hidded");
		Show("zippo");
		Show("talking");
	}
	
	// Hide Zippo
	function HideZippo(){
		var object;
		objetc = document.getElementById("talking");
				
		// Set bye message
		if (lang == 0) objetc.innerHTML = "Por supuesto.</br>Si me necesita, llámeme.";
		else if (lang == 1) objetc.innerHTML = "Of course.</br>If you need me, call me.";
		else if (lang == 2) objetc.innerHTML = "Per descomptat.</br>Si em necessita, cridem";
				
		// Hide talking window and Zippo, show call button and reset Zippo's message, all after a few seconds
		setTimeout('Hide("talking")', 3000); 
		setTimeout('Hide("zippo")', 3000); 
		setTimeout('Show("hidded")', 3000); 
		setTimeout('Option(0, 1)', 3000);
	}
	
	// Silence Zippo
	function StopTalking(){
		var object;
		objetc = document.getElementById("talking");
		
		// Set bye message
		if (lang == 0) objetc.innerHTML = "Si necesita cualquier cosa avíseme.</br>¡Disfrute de su estancia!";
		else if (lang == 1) objetc.innerHTML = "Call me if needed.</br>Enjoy!";
		else if (lang == 2) objetc.innerHTML = "Avisem si em necessita.</br>Passe-ho bé!";
				
		// Hide talking window and reset Zippo's message after a few seconds
		setTimeout('Hide("talking")', 3000);  
		setTimeout('Option(0, 1)', 3000);
				
		// Set title message
		object = document.getElementById("zippo");
		if (lang == 0) object.title = "Hablar con Zippo";
		else if (lang == 1) object.title = "Talk to Zippo";
		else if (lang == 2) object.title = "Parlar amb Zippo";
	}
	
	// Talk to Zippo
	function TalkingZippo(){
		// Show Zippo
		Show("talking");  
				
		// Unset title message
		object = document.getElementById("zippo");
		object.title = "";
	}
	
	// Change tab
	function SetPro(setAsPro)
	{
		isPro = setAsPro;
		
		var object;
		object = document.getElementById("menu_my");
		if (isPro)
			object.classList.remove('menu_entry_selected');
		else
			object.classList.add('menu_entry_selected');
		
		object = document.getElementById("menu_pro");
		if (isPro)
			object.classList.add('menu_entry_selected');
		else
			object.classList.remove('menu_entry_selected');	
		
		object = document.getElementById("body");
		if (isPro)
			object.style.display = "none";
		else
			object.style.display = "";
		
		object = document.getElementById("body_pro");
		if (isPro)
			object.style.display = "";
		else
			object.style.display = "none";
	}
//]]>