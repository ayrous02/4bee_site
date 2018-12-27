

	//Aplicando eventos diretamente no JS(addEventListener)
	window.addEventListener("load", function(){
		
		//Pegando elementos do DOM
		var bot = document.getElementById('botao');
		var botUm = document.getElementById('botaoUm');
		var botDois = document.getElementById('botaoDois');
		var mudar = document.getElementById('myCarousel');
		var primeiro = document.getElementById('pensamento');
		var segundo = document.getElementById('caixaTexto');
		var barra = document.getElementById('barraMetade');
		var caixa = document.getElementById('caixinhaTexto');
		var car = document.getElementById('myCarousel');
		var seta = document.getElementById('mover');
		var textinho = document.getElementById('oi');
		var video = document.getElementById('video-4bee');
		
		var escrever = document.getElementById('escrevendo');
		var texto = '"Sua rede social corporativa."';

		var botoes = [bot, botUm, botDois];
		var indiceBotAtual = 0;
		
			
			function escreve(str, el) {
  				var char = str.split('').reverse();
  				var typer = setInterval(function() {
   			
   			 if (!char.length)
   			 	return clearInterval(typer);

    			var next = char.pop();
    			el.innerHTML += next;
  			}, 100);
		}

	escreve(texto, escrever);
	



		//Add o evento de click no botão


	botUm.onclick = function(){
		car.style.transition = "linear 0.6s";
		mudar.style.backgroundImage = "url('slides/dois.jpg')";
		segundo.style.visibility = "visible";
		primeiro.style.visibility = "hidden";
		barra.style.visibility = "visible";		
		caixa.style.visibility = "visible";
		botUm.style.backgroundColor = "white";
		botDois.style.backgroundColor = "initial";
		bot.style.backgroundColor = "initial";
		seta.style.visibility = "hidden";
		textinho.style.visibility = "hidden";

		indiceBotAtual = 1;
	}

	$('body').keyup(function(e){
  	const KEY_LEFT  = 37;
  	const KEY_RIGHT = 39;
  	switch(e.keyCode){
    case KEY_LEFT  : 
    	if(indiceBotAtual === 0){
    		indiceBotAtual = botoes.length-1;
    	}else{
    		indiceBotAtual--;
    	}
    	break;
    case KEY_RIGHT : 
    	if(indiceBotAtual === botoes.length-1){
    		indiceBotAtual = 0;
    	}else{
    		indiceBotAtual++;
    	}
    	break;
    }

    botoes[indiceBotAtual].click();
});



	botDois.onclick = function(){
		car.style.transition = "linear 0.6s";
		mudar.style.backgroundImage = "url('slides/projeto.png')";
		primeiro.style.visibility = "hidden";
		segundo.style.visibility = "hidden";
		barra.style.visibility="hidden";
		caixa.style.visibility = "hidden";
		botDois.style.backgroundColor = "white";
		botUm.style.backgroundColor = "initial";
		bot.style.backgroundColor = "initial";
		seta.style.visibility = "visible";
		textinho.style.visibility = "visible";

		indiceBotAtual = 2;
	}


	bot.onclick = function(){
		car.style.transition = "ease 0.9s";
		mudar.style.backgroundImage = "url('slides/primeiro.png')";
		primeiro.style.visibility = "visible";	
		segundo.style.visibility = "hidden";
		barra.style.visibility="hidden";
		caixa.style.visibility = "hidden";
		bot.style.backgroundColor = "white";
		botUm.style.backgroundColor = "initial";
		botDois.style.backgroundColor = "initial";
		seta.style.visibility = "hidden";
		textinho.style.visibility = "hidden";

		indiceBotAtual = 0;
	}
	
});