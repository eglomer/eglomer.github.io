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
				if (answer == 0) object.innerHTML += "Bienvenido/a al portfolio de �glomer.</br>�Puedo ayudarle en algo?</br>";
				else if (answer == 1) object.innerHTML += "�En qu� puedo ayudarle?</br>";
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:StopTalking();'>S�lo quiero echar un vistazo.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,0);'>H�blame de �glomer.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,0);'>Quiero saber m�s sobre ti.</a></span></br>";
		
			}else if (question == 1){ // Eglomer's menu
				object.style.maxWidth = "800px";
				if (answer == 0) object.innerHTML += "�Qu� quiere saber de �glomer?</br>";
				else if (answer == 1) object.innerHTML += // Who is?
					  "<p>�glomer es en realidad Javier Moya N�jera, un valenciano de "+WriteAge()+" a�os apasionado por el mundo de los videojuegos y la tecnolog�a, aunque tambi�n tiene otros hobbys como la escritura, la m�sica y la meteorolog�a.</p>"
					+ "<p>Es trabajador, ordenado, disciplinado y tiene una GRAN facilidad para aprender, y poco m�s puedo decirle: esto es todo lo que pon�a en el gui�n que me dio para preguntas como �sta.</p>"
					;
				else if (answer == 2) object.innerHTML += // Studies?
					  "<p>Est� diplomado en Magisterio Musical por la Universidad Jaume I de Castell�n, habiendo conseguido todos los honores posibles. Tambi�n estudi� un a�o de Ingenier�a Inform�tica en la Universidad Polit�cnica de Valencia, y ha realizado cursos de programaci�n en C/C++ y en Visual Basic en el Centro Ciencias de la Informaci�n de Castell�n.</p>"
					+ "<p>El curso pasado finaliz� el Grado Superior de Desarrollo de Aplicaciones Multiplataforma (una de las variantes LOE del antiguo Ciclo Superior de Desarrollo de Aplicaciones Inform�ticas) en modalidad a distancia, con una nota media de 9'3, y actualmente est� finalizando el Grado Superior de Desarrollo de Aplicaciones Web en la misma modalidad.</p>"
					;
				else if (answer == 3) object.innerHTML += // Experience
					  "<p>Durante varios a�os ha estado desarrollando juegos y aplicaciones para el mundo de la Scene de la Nintendo DS, y ha ganado diversos premios por ello. Tambi�n ha programado algunas aplicaciones para PC, y ha hecho tambi�n alg�n trabajo de �ndole profesional con muy buena aceptaci�n.</p>"
					+ "<p>Adem�s de esto, durante el a�o 2013 realiz� 400 horas de pr�cticas del Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma en la empresa de videojuegos <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a>, donde trabaja actualmente.</p>"
					+ "<p>Los lenguajes de programaci�n con los que cuenta en su haber son: C/C++ (desde 2004), Visual Basic (desde 2005), SQL, XHTML, CSS, PHP y javascript (desde 2011 de manera formal), XML, java (desde 2012), C# (desde 2013).</p>"
					+ "<p>Ha trabajado con los siguientes entornos: Visual Studio 2010, SQL Server 2005, MySQL, Code::Blocks, Code::Lite, Dev-CPP, Eclipse, Unity3D.</p>"
					;
				else if (answer == 7) object.innerHTML += // Internships
					  "<p>Su trabajo en <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a> durante las pr�cticas consisti� principalmente en desarrollar mejoras y herramientas para el motor de la empresa, utilizando el lenguaje de programaci�n C++. Entre ellos, podemos destacar:</br>- La creaci�n de un empaquetador de archivos y la inclusi�n del correspondiente desempaquetador en el motor.</br>- La creaci�n de funciones para que el motor soportase caracteres UTF-8.</br>- El desarrollo de un editor de escenas 3D utilizando el motor como base, siendo �ste capaz de manejar modelos, c�maras, luces y terrenos.</p>"
					+ "<p>Actualmente su trabajo en la empresa, dado el cambio de rumbo que esta ha tomado, consiste en realizar labores de QA para videojuegos de las plataformas de Sony (PS3, PS4 y Vita) bajo el nombre de <a href='http://www.lollipoprobot.com/' target='_blank'>Lollipop Robot</a>, habiendo trabajado en t�tulos como: <a href='http://spelunkyworld.com/' target='_blank'>Spelunky</a> (PS3, Vita) y <a href='http://fezgame.com/' target='_blank'>FEZ</a> (PS3, PS4, Vita), entre otros.<p>"
					+ "<p>Si tiene inter�s en conocer m�s sobre el tema, puede <u><a href='mailto:"+WriteEmail("info","ninjafever.com")+"'>contactar con la empresa</a></u> para pedir referencias.</p>"
					;
				else if (answer == 4) object.innerHTML += // Languages
					  "<p>De idiomas no se puede decir que vaya mal. Es biling�e en castellano y catal�n, teniendo el t�tulo de Maestro de Valenciano, y con el ingl�s no se defiende mal, aunque siendo sinceros se le da mejor el escrito que el oral.</p>"
					;
				else if (answer == 5) object.innerHTML += // Contact
					  "<p>Puede escribirle un e-mail a <a href=\"mailto:"+WriteEmail("jmoyan","hotmail.com")+"\">"+WriteEmail("jmoyan","hotmail.com")+"</a>. Lo revisa a menudo, as� que no creo que tarde en contestar.</p>"
					;
				else if (answer == 6) object.innerHTML += // trust you?
					  "<p>�Por supuesto que s�! Siempre intento ir con la verdad por delante, tanto para lo bueno como para lo malo. Adem�s, ahora que �glomer no est� por aqu�, �qu� me impide hablar con claridad?</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(1,1);'>�Qui�n es?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,2);'>�Qu� estudios tiene?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,3);'>�Qu� experiencia tiene?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,7);'>H�blame de su trabajo en Ninja Fever.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,4);'>�Y c�mo va de idiomas?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,5);'>�C�mo puedo contactar con �l?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,6);'>�Est�s siendo sincero conmigo?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Hablemos de otra cosa.</a></span></br>";
					
					
			}else if (question == 2){ // Zippo's menu
				object.style.maxWidth = "400px";
				if (answer == 0) object.innerHTML += "Puede preguntarme lo que quiera.</br>";
				else if (answer == 1) object.innerHTML += // Who are you?
					  "<p>Soy Zippo, el <del>becario contratado para servir caf�s</del> ayudante personal de �glomer y su imagen representativa desde el a�o 2008. Me gusta pasear, hacer paracaidismo y viajar, aunque actualmente no dispongo de mucho tiempo para ello.</p>"
					;
				else if (answer == 2) object.innerHTML += // What are you?
					  "<p>Soy un miembro de una raza desconocida, parte del mundo imaginario de una de las historias que �glomer escribi� hace tiempo.</p>"
					;
				else if (answer == 3) object.innerHTML += // Why are you here?
					  "<p>Bueno, teniendo en cuenta la crisis mundial en la que estamos, incluso los seres imaginarios nos hemos tenido que buscar la vida para poder subsistir.</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(2,1);'>�Qui�n eres?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,2);'>�Qu� eres exactamente?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,3);'>�Por qu� est�s aqu�?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Hablemos de otra cosa.</a></span></br>";
			}
			
			object.innerHTML +=
				  "<span class='option'>&raquo; <a href='javascript:HideZippo();'>�Podr�as ocultarte, por favor?</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(1);'>Talk me in English, please.</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(2);'>Parlam en Catal�, per favor.</a></span></br>";
		}
		
		
		
		
		
		
		
		
		
		
		// ENGLISH
		else if (lang == 1){
			// QUESTIONS
			if (question == 0){ // main menu
				if (answer == 0) object.innerHTML += "Welcome to �glomer's portfolio.</br>Could I help you?</br>";
				else if (answer == 1) object.innerHTML += "What could I do for you?</br>";
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:StopTalking();'>I want to take a look.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,0);'>Talk me about �glomer.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,0);'>I want to know more about you.</a></span></br>";
		
			}else if (question == 1){ // Eglomer's menu
				object.style.maxWidth = "800px";
				if (answer == 0) object.innerHTML += "What do you want to know about �glomer?</br>";
				else if (answer == 1) object.innerHTML += // Who is?
					  "<p>�glomer's real name is Javier Moya N�jera, a valencian one of "+WriteAge()+" years old that go mad with videogames and technology, though he has other hobbies like writing, music and meteorology.</p>"
					+ "<p>He is hard-working, tidy, disciplined and has a GREAT facility to learn, and I couldn't tell you nothing more: this is everything what he wrote in the script that gave me to answer questions like this.</p>"
					;
				else if (answer == 2) object.innerHTML += // Studies?
					  "<p>He was graduated in Musical Teaching by Jaume I University from Castell�, and he got all honours in this. He also studied one year of IT Engineering in Technical University from Valencia, and he has realized some courses of programming in C/C ++ and Visual Basic in the Information Sciences Center from Castell�n.</p>"
					+ "<p>Last course he has finished the High Degree of Development of Multiplatform Applications (a LOE's variant of old Development IT Applications Superior Degree) in distance-learning modality, with an average of 9'3, and nowadays he is finishing the Development of Web Applications High Degree in the same modality.</p>"
					;
				else if (answer == 3) object.innerHTML += // Experience
					  "<p>For several years he has been developing games and applications for the Nintendo DS Scene, and he has won some awards for it. He also has programmed some applications for PC and he has done some professional work with a very good acceptance.</p>"
					+ "<p>In addition, during 2013 performed 400 hours because of the Development of Multiplatform Applications High Degree's Internships in the videogame's company <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a>, where he is working nowadays.</p>"
					+ "<p>Programming languages that he know are: C/C++ (since 2004), Visual Basic (since 2005), SQL, XHTML, CSS, PHP and javascript (since 2011 formally), XML, java (since 2012), c# (since 2013).</p>"
					+ "<p>He worked with these environments: Visual Studio 2010, SQL Server 2005, MySQL, Code::Blocks, Code::Lite, Dev-CPP, Eclipse, Unity3D.</p>"
					;
				else if (answer == 7) object.innerHTML += // Internships
					  "<p>His work during the internships in <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a> was to develop improvements and tools for the company's engine, using the C++ language to do it. We can emphasize:</br>- The creation of a file packer and the inclusion of a file unpacker in the engine.</br>- The creation of functions for the engine to support UTF-8 characters.</br>- The development of a 3D Scene Editor using the engine as a base, which can handle models, cameras, lights and terrains.</p>"
					+ "<p>Nowadays his work, due to internal changes into the company, consist in make QA task for Sony platforms videogames (PS3, PS4 and Vita), all under the <a href='http://www.lollipoprobot.com/' target='_blank'>Lollipop Robot</a> name. He has worked in titles like: <a href='http://spelunkyworld.com/' target='_blank'>Spelunky</a> (PS3, Vita) and <a href='http://fezgame.com/' target='_blank'>FEZ</a> (PS3, PS4, Vita), among others.<p>" 
					+ "<p>If you are interested, you can <u><a href='mailto:"+WriteEmail("info","ninjafever.com")+"'>contact with the company</a></u> to ask for references.</p>"
					;
				else if (answer == 4) object.innerHTML += // Languages
					  "<p>He is bilingual in Castilian and Catalan, he has the Valencian's Teacher title, and with English don't work badly, but I must say that he is better in writing than speaking.</p>"
					;
				else if (answer == 5) object.innerHTML += // Contact
					  "<p>You could contact it by <a href=\"mailto:"+WriteEmail("jmoyan","hotmail.com")+"\">"+WriteEmail("jmoyan","hotmail.com")+"</a>. He checks it often, so he won't be late in answering.</p>"
					;
				else if (answer == 6) object.innerHTML += // trust you?
					  "<p>Of course yes! I always tell the truth, even for good and bad things. And �glomer isn't here right now, so, what does prevent me from speaking with clarity?</p>"
					;
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(1,1);'>Who is?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,2);'>Studies?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,3);'>Experience?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,7);'>His work in Ninja Fever.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,4);'>Languages?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,5);'>Contact?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,6);'>Can I trust you?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Let's talk about another thing.</a></span></br>";
					
					
			}else if (question == 2){ // Zippo's menu
				object.style.maxWidth = "400px";
				if (answer == 0) object.innerHTML += "Ask me what wants.</br>";
				else if (answer == 1) object.innerHTML += // Who are you?
					  "<p>I'm Zippo, <del>a scholarship holder contracted to serve coffees</del> the personal assistant of �glomer and his corporative image since 2008. I like to walk, to do parachuting and to travel, but nowadays I haven't time enough to do it.</p>"
					;
				else if (answer == 2) object.innerHTML += // What are you?
					  "<p>I'm a member of a unknown race, part of the imaginary world of one of the stories that �glomer wrote time ago.</p>"
					;
				else if (answer == 3) object.innerHTML += // Why are you here?
					  "<p>Well, having in mind the worldwide crisis in which we are, even imaginary beings have had to do something to survive.</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(2,1);'>Who are you?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,2);'>What are you exactly?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,3);'>Why are you here?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Let's talk about another thing.</a></span></br>";
			}
			
			object.innerHTML +=
				  "<span class='option'>&raquo; <a href='javascript:HideZippo();'>Can you hide yourself, please?</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(0);'>H�blame en Espa�ol, por favor.</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(2);'>Parlam en Catal�, per favor.</a></span></br>";
		}
		
		
		
		
		
		
		
		
		
		// CATALA
		else if (lang == 2){
			// QUESTIONS
			if (question == 0){ // main menu
				if (answer == 0) object.innerHTML += "Benvingut/da al portfolio d'�glomer.</br>Puc ajudar-li?</br>";
				else if (answer == 1) object.innerHTML += "En qu� puc ajudar-li?</br>";
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:StopTalking();'>Sols vull fer un ull.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,0);'>Parlam d'�glomer.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,0);'>Vull saber m�s sobre tu.</a></span></br>";
		
			}else if (question == 1){ // Eglomer's menu
				object.style.maxWidth = "800px";
				if (answer == 0) object.innerHTML += "Qu� vols saber d'�glomer?</br>";
				else if (answer == 1) object.innerHTML += // Who is?
					  "<p>�glomer �s en realitat Javier Moya N�jera, un valenci� de "+WriteAge()+" anys apassionat pel m�n dels videojocs i la tecnologia, tot i que tamb� t� altres hobbys com l'escriptura, la m�sica i la meteorologia.</p>"
					+ "<p>�s treballador, ordenat, disciplinat i t� una GRAN facilitat per aprendre, i poc m�s puc dir-li: a�� �s tot el que posava en el gui� que em va donar per preguntes com aquesta.</p>"
					;
				else if (answer == 2) object.innerHTML += // Studies?
					  "<p>Est� diplomat en Magisteri Musical per la Universitat Jaume I de Castell�, i ha aconseguit tots els honors possibles. Tamb� va estudiar un any d'Enginyeria Inform�tica a la Universitat Polit�cnica de Val�ncia, i ha realitzat cursos de programaci� en C/C++ i Visual Basic al Centre Ci�ncies de la Informaci� de Castell�.</p>"
					+ "<p>El curs passat va finalitzar el Grau Superior de Desenvolupament d'Aplicacions Multiplataforma (una de les variants LOE de l'antic Cicle Superior de Desenvolupament d'Aplicacions Inform�tiques) en modalitat a dist�ncia, amb una nota mitja de 9'3, i actualment est� finalitzant el Grau Superior de Desenvolupament d'Aplicacions Web en la mateixa modalitat.</p>"
					;
				else if (answer == 3) object.innerHTML += // Experience
					  "<p>Durant uns anys ha estat desenvolupant jocs i aplicacions per al m�n de l'Scene de la Nintendo DS, on ha guanyat ja diversos premis. Tamb� ha programat algunes aplicacions per a PC i ha fet tamb� algun treball d'�ndole professional amb molt bona acceptaci�.</p>"
					+ "<p>A m�s, al 2013 va realitzar 400 hores de pr�ctiques del Cicle Superior de Desenvolupament d'Aplicacions Multiplataforma a l'empresa de videojocs <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a>, on est� treballant actualment.</p>"
					+ "<p>Els llenguatges de programaci� amb els que compta s�n: C/C++ (des de 2004), Visual Basic (des de 2005), SQL, XHTML, CSS, PHP i javascript (des de 2011 de manera formal), XML, java (des de 2012), C# (des de 2013).</p>"
					+ "<p>Ha treballat amb els seg�ents entorns: Visual Studio 2010, SQL Server 2005, MySQL, Code::Blocks, Code::Lite, Dev-CPP, Eclipse, Unity3D.</p>"
					;
				else if (answer == 7) object.innerHTML += // Internships
					  "<p>El seu treball durant les pr�ctiques en <a href='http://www.ninjafever.com/' target='_blank'>Ninja Fever</a> va consistir principalment en desenvolupar millores i ferramentes per al motor de l'empresa, utilitzant el llenguatge de programaci� C++. Entre altres, podem destacar:</br>- La creaci� d'un empaquetador d'arxius i la inclusi� del corresponent desempaquetador al motor. </br>- La creaci� de funciones per a donar suport al motor per utilitzar car�cters UTF-8.</br>- El desenvolupament d'un editor d'escenes 3D utilitzant el motor de l'empresa com a base, capa� de manipular models, c�meres, llums i terrenys.</p>"
					+ "<p>Actualment el seu treball en l'empresa, donat el canvi de romb que aquesta ha pres, consisteix en realitzar tasques de QA per a videojocs de les plataformes de Sony (PS3, PS4 y Vita) sota el nom de <a href='http://www.lollipoprobot.com/' target='_blank'>Lollipop Robot</a>, i ha treballat en t�tols com: <a href='http://spelunkyworld.com/' target='_blank'>Spelunky</a> (PS3, Vita) i <a href='http://fezgame.com/' target='_blank'>FEZ</a> (PS3, PS4, Vita), entre d'altres.<p>"
					+ "<p>Si t� inter�s, pot <u><a href='mailto:"+WriteEmail("info","ninjafever.com")+"'>contactar amb l'empresa</a></u> per demanar refer�ncies.</p>"
					;
				else if (answer == 4) object.innerHTML += // Languages
					  "<p>D'idiomes no es pot fir que vaja malament. �s biling�e en castell� i catal�, t� el t�tol de Mestre de Valenci�, i amb l'angl�s no es defensa malament, encara que sent sincers se li dona millor l'escrit que l'oral.</p>"
					;
				else if (answer == 5) object.innerHTML += // Contact
					  "<p>Pot escriure-li un e-mail a <a href=\"mailto:"+WriteEmail("jmoyan","hotmail.com")+"\">"+WriteEmail("jmoyan","hotmail.com")+"</a>. El revisa prou sovint, aix� que no crec que tarde en contestar-li.</p>"
					;
				else if (answer == 6) object.innerHTML += // trust you?
					  "<p>Per descomptat! Sempre intente anar amb la veritat en la m�, tant per les coses bones com per les ro�nes. A m�s, ara que �glomer no est� per ac�, qu� m'impedeix parlar amb claredat?</p>"
					;
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(1,1);'>Qui �s?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,2);'>Quins estudis t�?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,3);'>Quina experi�ncia t�?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,7);'>Parlam del seu treball en Ninja Fever.</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,4);'>I com va d'idiomes?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,5);'>Com puc contactar amb ell?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(1,6);'>Ets sincer amb mi?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Parlem d'un altra cosa.</a></span></br>";
					
					
			}else if (question == 2){ // Zippo's menu
				object.style.maxWidth = "400px";
				if (answer == 0) object.innerHTML += "Pot preguntar-me el que vulga.</br>";
				else if (answer == 1) object.innerHTML += // Who are you?
					  "<p>S�c Zippo, <del>el becari contractat per servir caf�</del> l'ajudant personal d'�glomer i la seua imatge representativa des de l'any 2008. M'agrada passejar, fer paracaigudisme i viatjar, encara que actualment no dispose de molt de temps per fer-ho.</p>"
					;
				else if (answer == 2) object.innerHTML += // What are you?
					  "<p>S�c un membre d'una ra�a desconeguda, part del m�n imaginari d'una de les hist�ries que �glomer va escriure fa temps.</p>"
					;
				else if (answer == 3) object.innerHTML += // Why are you here?
					  "<p>Doncs, tenint en compte la crisi mundial en la que estem, incl�s els sers imaginaris ens hem tingut que buscar la vida per eixir endavant.</p>"
					;
				
				
				object.innerHTML +=
					  "<span class='option'>&raquo; <a href='javascript:Option(2,1);'>Qui eres?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,2);'>Qu� eres exactament?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(2,3);'>Per qu� est�s ac�?</a></span></br>"
					+ "<span class='option'>&raquo; <a href='javascript:Option(0,1);'>Parlem d'un altra cosa.</a></span></br>";
			}
			
			object.innerHTML +=
				  "<span class='option'>&raquo; <a href='javascript:HideZippo();'>Podries amagar-te, per favor?</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(1);'>Talk me in English, please.</a></span></br>"
				+ "<span class='option'>&raquo; <a href='javascript:Translate(0);'>H�blame en Espa�ol, por favor.</a></span></br>";
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
			object.innerHTML = "El Taller de �glomer";
			document.title = "El Taller de �glomer";
					
			object = document.getElementById("hidded");
			object.innerHTML = "LLAMAR A ZIPPO";	

			object = document.getElementById("foot");
			object.innerHTML = "<a href='http://validator.w3.org/check?uri="+document.location.href+"' target='_blank'><img src='http://www.w3.org/Icons/valid-xhtml10' alt='Valid XHTML 1.0 Transitional' height='31' width='88' /></a>"
							 + "<br/>&copy; Javier Moya N&aacute;jera (2012). Todos los derechos reservados.";
			
			
			object = document.getElementById("hangman_n");
			object.innerHTML = "El ahorcado";
			object = document.getElementById("hangman_t");
			object.innerHTML = "Cl�sico";
			object = document.getElementById("hangman_d");
			object.innerHTML = "�De tu libreta a tu Android! Disfruta como nunca del juego de toda la vida.";
			
			object = document.getElementById("tictactoe_n");
			object.innerHTML = "Tres en raya";
			object = document.getElementById("tictactoe_t");
			object.innerHTML = "Cl�sico";
			object = document.getElementById("tictactoe_d");
			object.innerHTML = "Atr�vete a jugar a este divertido cl�sico, ahora para tu dispositivo Android.";
			
			object = document.getElementById("halguens_t");
			object.innerHTML = "MMORPG est�tico";
			object = document.getElementById("halguens_d");
			object.innerHTML = "Dragones y F�nix. Dos razas enfrentadas desde el albor de los tiempos y cuya guerra perdura hasta nuestros d�as. ��nete al bando que m�s te guste y colabora en la guerra para llevar a tus aliados hacia la victoria!";
			
			object = document.getElementById("swordmaster_t");
			object.innerHTML = "Reflejos, Lucha, Arcade";
			object = document.getElementById("swordmaster_d");
			object.innerHTML = "Convi�rtete en un samurai y empu�a tu katana para vencer a tu adversario en un duelo a muerte. S�lo escuchando tu voz interior te alzar�s con la victoria en este entretenido juego que mezcla lucha y reflejos, y que fue ganador del tercer puesto del Scenery Beta 2011.";
			
			object = document.getElementById("gravity_t");
			object.innerHTML = "Arcade, Habilidad, OnLine";
			object = document.getElementById("gravity_d");
			object.innerHTML = "Huye de los enemigos tanto tiempo como puedas, o haz que choquen con las paredes para deshacerte de ellos y superar el nivel. Incluye un sistema de carga de m�sica por archivos externos '.mp3' y ranking online.";
			
			object = document.getElementById("lightsout_t");
			object.innerHTML = "Puzle";
			object = document.getElementById("lightsout_d");
			object.innerHTML = "Apaga todas las luces del tablero... si puedes. Todo un cl�sico ahora disponible para la Nintendo DS. Ganador del quinto puesto del Scenery Beta 2009.";
			
			object = document.getElementById("mysdiads_d");
			object.innerHTML = "Prueba de concepto de MMORPG con implementaci�n del sistema de creaci�n de cuentas y personajes, chat, y posicionamiento y animaci�n de hasta cien personajes, tanto en el mundo como en el mapa.";
			
			object = document.getElementById("fungus_d");
			object.innerHTML = "Programa que permite enviar correos electr�nicos haciendo uso de una cuenta de Gmail, con la diferencia de que podemos cambiar el nombre que se mostrar� al receptor. Tambi�n permite administrar tu cuenta de Gmail mediante comandos IMAP.";
			
			object = document.getElementById("stormalarm_t");
			object.innerHTML = "Meteorolog�a";
			object = document.getElementById("stormalarm_d");
			object.innerHTML = "Programa que analiza los mapas de la AEMET (Asociaci�n Estatal de Meteorolog�a) y que, entre otras opciones, nos avisa en caso de haber n�cleos convectivos o tormenta cerca de la posici�n que definamos como zona de alarma.";
			
			object = document.getElementById("himitsu_t");
			object.innerHTML = "Encriptador";
			object = document.getElementById("himitsu_d");
			object.innerHTML = "Programa que permite codificar y decodificar mensajes de texto, ya sea escribi�ndolos directamente en el programa o mediante archivos '.txt'.";
			
			object = document.getElementById("workshop_n");
			object.innerHTML = "El Taller de �glomer";
			object = document.getElementById("workshop_d");
			object.innerHTML = "Portfolio personal de Javier Moya N�jera. Se adapta autom�ticamente al idioma del navegador y est� realizado combinando XHTML, CSS y Javascript. �Si�ntete libre de visualizar su c�digo fuente si quieres!";
			
			object = document.getElementById("chdk_t");
			object.innerHTML = "Meteorolog�a";
			object = document.getElementById("chdk_d");
			object.innerHTML = "Script para el hack de Canon (CHDK) que a�ade a nuestra c�mara la posibilidad de crear timelapses, cazar rayos o ambas cosas, pudiendo establecer la hora de inicio de cada modo.";
			
			object = document.getElementById("intercultural_n");
			object.innerHTML = "La construcci�n de la escuela intercultural inclusiva desde procesos de investigaci�n-acci�n";
			object = document.getElementById("intercultural_t");
			object.innerHTML = "Educaci�n";
			object = document.getElementById("intercultural_d");
			object.innerHTML = "Dise�o t�cnico y gr�fico del CD que acompa�a a esta investigaci�n publicada dentro de la colecci�n <em>e-educaci�</em> de la Universidad Jaume I de Castell�n de la Plana.";
			
			object = document.getElementById("nemorak_t");
			object.innerHTML = "Libros";
			object = document.getElementById("nemorak_d");
			object.innerHTML = "La tranquila vida de Darko cambia dr�sticamente cuando una peligrosa organizaci�n contacta con �l y le obliga a retomar su antigua vida de asesino a sueldo. Mientras tanto Julio, un adolescente aficionado a los juegos de l�gica, disfruta con sus amigos sin saber el agitado destino que le aguarda. Dos mundos distintos que confluyen inesperadamente y que desencadenan en una fren�tica historia de acci�n y misterio cuyo nexo de uni�n s�lo tiene un nombre: N�morak.";
			
			object = document.getElementById("otherplatforms");
			object.innerHTML = "Otras Plataformas";
			
			object = document.getElementById("publications");
			object.innerHTML = "Publicaciones";
			
			
			
			
			
		}else if (lang == 1){ // en
			object = document.getElementById("close");
			object.innerHTML = "Close";
					
			object = document.getElementById("head");
			object.innerHTML = "�glomer's Workshop";
			document.title = "�glomer's Workshop";
					
			object = document.getElementById("hidded");
			object.innerHTML = "CALL ZIPPO";
					
			object = document.getElementById("foot");
			object.innerHTML = "<a href='http://validator.w3.org/check?uri="+document.location.href+"' target='_blank'><img src='http://www.w3.org/Icons/valid-xhtml10' alt='Valid XHTML 1.0 Transitional' height='31' width='88' /></a>"
							 + "<br/>&copy; Javier Moya N&aacute;jera (2012). All rights reserved.";
			
			object = document.getElementById("hangman_n");
			object.innerHTML = "Hangman";
			object = document.getElementById("hangman_t");
			object.innerHTML = "Classic";
			object = document.getElementById("hangman_d");
			object.innerHTML = "From your notebook to your Android! Enjoys like never of the classical game.";
			
			object = document.getElementById("tictactoe_n");
			object.innerHTML = "Tic Tac Toe";
			object = document.getElementById("tictactoe_t");
			object.innerHTML = "Classic";
			object = document.getElementById("tictactoe_d");
			object.innerHTML = "Dare to play to this fun classical, now for your Android gadget.";
			
			object = document.getElementById("halguens_t");
			object.innerHTML = "Static MMORPG";
			object = document.getElementById("halguens_d");
			object.innerHTML = "Dragons and Phoenix. These two races are fighting since the dawn of times and their war has continued ultil today. Join to one of them and fight to take your faction to victory!";
			
			object = document.getElementById("swordmaster_t");
			object.innerHTML = "Coordination, Fight, Arcade";
			object = document.getElementById("swordmaster_d");
			object.innerHTML = "Become yourself into a samurai and fight with your katana to win your adversary in a deathmatch. In this game, which mix fight and coordination, you only will win by listening your interior voice. Third place winner of Scenery Beta 2011.";
			
			object = document.getElementById("gravity_t");
			object.innerHTML = "Arcade, Ability, OnLine";
			object = document.getElementById("gravity_d");
			object.innerHTML = "Go away from enemies as long as you can, or do they collide with walls to destroy them and pass the level. It includes an external '.mp3' file loading system for music and an online ranking.";
			
			object = document.getElementById("lightsout_t");
			object.innerHTML = "Puzzle";
			object = document.getElementById("lightsout_d");
			object.innerHTML = "Turn off all lights of the board... if you can do it. A classic now available for Nintendo DS. Fifth place winner of Scenery Beta 2009.";
			
			object = document.getElementById("mysdiads_d");
			object.innerHTML = "An MMORPG proof of concept that implements an account and characters creation system, chat, and positioning and animation of until a hundred characters, both in the world and in the map.";
			
			object = document.getElementById("fungus_d");
			object.innerHTML = "Program that allow us to send emails through a Gmail account, but with the difference that you can change the name that your receivers will see. The program allows you to manage your Gmail account through IMAP commands too.";
			
			object = document.getElementById("stormalarm_t");
			object.innerHTML = "Meteorology";
			object = document.getElementById("stormalarm_d");
			object.innerHTML = "An application which uses maps of AEMET (State Meteorology Association) for alert us when there's convective cells or storm near of the position marked as alarm zone.";
			
			object = document.getElementById("himitsu_t");
			object.innerHTML = "Encryptor";
			object = document.getElementById("himitsu_d");
			object.innerHTML = "Program that can encode and decode text messages, either by typing directly in the program or using '.txt' files.";
			
			object = document.getElementById("workshop_n");
			object.innerHTML = "�glomer's Workshop";
			object = document.getElementById("workshop_d");
			object.innerHTML = "Personal portfolio of Javier Moya N�jera. It adapts automatically to browser language and it was made by mixing XHTML, CSS and Javascript. Feel free to view its Source Code if you want!";
			
			object = document.getElementById("chdk_t");
			object.innerHTML = "Meteorology";
			object = document.getElementById("chdk_d");
			object.innerHTML = "Script for Canon's hack (CHDK) that adds to our camera the ability of create timelapses, catch beams or both things by setting the start time of each mode.";
			
			object = document.getElementById("intercultural_n");
			object.innerHTML = "Construction of the inclusive intercultural school from research-action processes";
			object = document.getElementById("intercultural_t");
			object.innerHTML = "Education";
			object = document.getElementById("intercultural_d");
			object.innerHTML = "Technical and graphical design of the CD that accompanies this research published into the collection <em>e-educaci�</em> of Jaume I University from Castell� de la Plana.";
			
			object = document.getElementById("nemorak_t");
			object.innerHTML = "Books";
			object = document.getElementById("nemorak_d");
			object.innerHTML = "The quiet Darko's life changes drastically when a dangerous organization contact him and forces him to resume his old life of murderer. Meanwhile Julio, a teenage fan of puzzle games, enjoys with his friends without knowing the agitated fate that awaits him. Two different worlds who unexpectedly come together to trigger a frenzy story of action and mistery and which link has only one name: N�morak.";
			
			object = document.getElementById("otherplatforms");
			object.innerHTML = "Other Platforms";
			
			object = document.getElementById("publications");
			object.innerHTML = "Publications";
		
		
		
		
		
		}else if (lang == 2){ // ca
			object = document.getElementById("close");
			object.innerHTML = "Tancar";
			
			object = document.getElementById("head");
			object.innerHTML = "El Taller d'�glomer";
			document.title = "El Taller d'�glomer";
					
			object = document.getElementById("hidded");
			object.innerHTML = "CRIDAR A ZIPPO";
					
			object = document.getElementById("foot");
			object.innerHTML = "<a href='http://validator.w3.org/check?uri="+document.location.href+"' target='_blank'><img src='http://www.w3.org/Icons/valid-xhtml10' alt='Valid XHTML 1.0 Transitional' height='31' width='88' /></a>"
							 + "<br/>&copy; Javier Moya N&aacute;jera (2012). Tots els drets reservats.";
			
			object = document.getElementById("hangman_n");
			object.innerHTML = "El penjat";
			object = document.getElementById("hangman_t");
			object.innerHTML = "Cl�ssic";
			object = document.getElementById("hangman_d");
			object.innerHTML = "De la teua llibreta al teu Android! Gaudeix com mai del joc de tota la vida.";
			
			object = document.getElementById("tictactoe_n");
			object.innerHTML = "Tres en l�nia";
			object = document.getElementById("tictactoe_t");
			object.innerHTML = "Cl�ssic";
			object = document.getElementById("tictactoe_d");
			object.innerHTML = "Atreveix-te a jugar a aquest divertit cl�ssic, ara disponible per al teu dispositiu Android";
			
			object = document.getElementById("halguens_t");
			object.innerHTML = "MMORPG est�tic";
			object = document.getElementById("halguens_d");
			object.innerHTML = "Dragons i F�nix. Dos races enfrontades des de l'albor dels temps i la guerra dels quals perdura encara hui dia. Uneix-te a la facci� que m�s t'agrade i col�labora en la guerra per dur als teus aliats a la vict�ria!";
			
			object = document.getElementById("swordmaster_t");
			object.innerHTML = "Reflexos, Lluita, Arcade";
			object = document.getElementById("swordmaster_d");
			object.innerHTML = "Converteix-te en un samurai i blandeix la katana per v�ncer al teu adversari en una lluita a mort. Tan sols escoltant la teua veu interior aconseguir�s guanyar en aquest entretingut joc que barreja lluita i reflexes, i que va guanyar el tercer premi de l'Scenery Beta 2011.";
			
			object = document.getElementById("gravity_t");
			object.innerHTML = "Arcade, Habilitat, OnLine";
			object = document.getElementById("gravity_d");
			object.innerHTML = "Escapa dels enemics tant de temps com pugues, o fes que xoquen contra les parets per desfer-te d'ells i superar el nivell. Inclou un sistema de c�rrega de m�sica per arxius '.mp3' i ranking online.";
			
			object = document.getElementById("lightsout_t");
			object.innerHTML = "Puzle";
			object = document.getElementById("lightsout_d");
			object.innerHTML = "Apaga totes les llums del tauler... si pots. Tot un cl�ssic ara disponible per la Nintendo DS. Guanyador del cinqu� premi de l'Scenery Beta 2009.";
			
			object = document.getElementById("mysdiads_d");
			object.innerHTML = "Proba de concepte d'un MMORPG amb implementaci� del sistema de creaci� de comptes i personatges, xat, i posicionament i animaci� de fins a cent personatges alhora, tant al m�n com al mapa.";
			
			object = document.getElementById("fungus_d");
			object.innerHTML = "Programa que permet enviar correus electr�nics mitjan�ant un compte de Gmail, amb la difer�ncia de que podem canviar el nom que es mostrar� al receptor. Tamb� permet administrar el teu compte de Gmail fent �s d'ordres IMAP.";
			
			object = document.getElementById("stormalarm_t");
			object.innerHTML = "Meteorologia";
			object = document.getElementById("stormalarm_d");
			object.innerHTML = "Programa que analitza els mapes de l'AEMET (Associaci� Estatal de Meteorologia) i que ens avisa en cas d'haver-hi nuclis convectius o tempesta a prop de la posici� definida com zona d'alarma.";
			
			object = document.getElementById("himitsu_t");
			object.innerHTML = "Encriptador";
			object = document.getElementById("himitsu_d");
			object.innerHTML = "Programa que permet codificar i descodificar missatges de text, ja siga escrivint-los directament al programa o mitjan�ant arxius '.txt'.";
			
			object = document.getElementById("workshop_n");
			object.innerHTML = "El Taller d'�glomer";
			object = document.getElementById("workshop_d");
			object.innerHTML = "Portfolio personal de Javier Moya N�jera. S'adapta autom�ticament a l'idioma del navegador i est� realitzat combinant XHTML, CSS i Javascript. Ets lliure de visualitzar el seu codi font si vols!";
			
			object = document.getElementById("chdk_t");
			object.innerHTML = "Meteorologia";
			object = document.getElementById("chdk_d");
			object.innerHTML = "Script per al hack de Canon (CHDK) que afegix a la nostra c�mera la possibilitat de crear timelapses, ca�ar raigs o ambdues coses establint l'hora d'inici de cada mode.";
			
			object = document.getElementById("intercultural_n");
			object.innerHTML = "La construcci� de l'escola intercultural inclusiva des de processos d'investigaci�-acci�";
			object = document.getElementById("intercultural_t");
			object.innerHTML = "Educaci�";
			object = document.getElementById("intercultural_d");
			object.innerHTML = "Disseny t�cnic i gr�fic del CD que acompanya a aquesta investigaci� publicada dins la col�lecci� <em>e-educaci�</em> de la Universitat Jaume I de Castell� de la Plana.";
			
			object = document.getElementById("nemorak_t");
			object.innerHTML = "Llibres";
			object = document.getElementById("nemorak_d");
			object.innerHTML = "La tranquil�la vida de Darko canvia dr�sticament quan una perillosa organitzaci� contacta amb ell i l'obliga a reprendre la seua antiga vida d'assass� a sou. Mentres tant Julio, un adolescent aficionat als jocs de l�gica, gaudeix amb els seus amics sense saber l'agitat dest� que l'espera. Dos m�ns distints que conflueixen inesperadament i que desencadenen en una fren�tica hist�ria d'acci� i misteri, i dels quals el nexe nom�s t� un nom: N�morak.";
			
			object = document.getElementById("otherplatforms");
			object.innerHTML = "Altres Plataformes";
			
			object = document.getElementById("publications");
			object.innerHTML = "Publicacions";
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
		if (lang == 0) objetc.innerHTML = "Por supuesto.</br>Si me necesita, ll�meme.";
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
		if (lang == 0) objetc.innerHTML = "Si necesita cualquier cosa av�seme.</br>�Disfrute de su estancia!";
		else if (lang == 1) objetc.innerHTML = "Call me if needed.</br>Enjoy!";
		else if (lang == 2) objetc.innerHTML = "Avisem si em necessita.</br>Passe-ho b�!";
				
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
	
//]]>