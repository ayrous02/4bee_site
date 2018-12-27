//Aplicando eventos diretamente no JS(addEventListener)
	window.addEventListener("load", function(){
			var um = document.getElementById('imagemUm');
			var mudar = document.getElementById('muda');
			var mudarDois = document.getElementById('mudaDois');
			var fundo = document.getElementById('prints');
			var textoUm = document.getElementById('caixa');
			var imagemUm = document.getElementById('primeiro');
			var imagemDois = document.getElementById('segundo');
			var textoDois = document.getElementById('caixaDois');
			var imagemTres = document.getElementById('tres');
			var textoTres = document.getElementById('caixaTres');
			var textoQuatro = document.getElementById('caixaQuatro');
			var imagemQuatro = document.getElementById('quatro');
			var imagemCinco = document.getElementById('cinco');
			var textoCinco = document.getElementById('caixaCinco');
			var imagemSeis = document.getElementById('seis');
			var textoSeis = document.getElementById('caixaSeis');
			var imagemSete = document.getElementById('sete');
			var textoSete = document.getElementById('caixaSete');
			var imagemOito = document.getElementById('oito');
			var textoOito = document.getElementById('caixaOito');
			var top = document.getElementById('nav');
			var voltar = document.getElementById('back');
				
			mudar.onclick = function(){
				um.style.backgroundImage = "url('prints/cola.png')";
				fundo.style.backgroundImage= "url('site/backgroud/green.jpg')";
				mudar.style.backgroundColor= "#129476";
				mudar.style.color = "black";
				mudarDois.style.backgroundColor = "#129476";
				mudarDois.style.color = "black";
				mudar.style.borderColor = "#129476";
				mudarDois.style.borderColor = "#129476";
			

			}

			mudarDois.onclick = function(){
				um.style.backgroundImage = "url('prints/gestor.png')";
				fundo.style.backgroundImage= "url('site/backgroud/orange.jpg')";
				mudar.style.backgroundColor= "#F09D19";
				mudar.style.color = "white";
				mudarDois.style.backgroundColor = "#F09D19";
				mudarDois.style.color = "white";
				mudar.style.borderColor = "#F09D19";
				mudarDois.style.borderColor = "#F09D19";
				
			}


			imagemUm.onmouseover = function(){
				caixa.style.visibility = "visible";	
			}

			imagemUm.onmouseout = function(){
			caixa.style.visibility = "hidden";
			}



			imagemDois.onmouseover = function(){
				caixaDois.style.visibility = "visible";	
			}

			imagemDois.onmouseout = function(){
			caixaDois.style.visibility = "hidden";
			}



			imagemTres.onmouseover = function(){
				caixaTres.style.visibility = "visible";	
			}

			imagemTres.onmouseout = function(){
			caixaTres.style.visibility = "hidden";
			}


			imagemQuatro.onmouseover = function(){
				caixaQuatro.style.visibility = "visible";	
			}

			imagemQuatro.onmouseout = function(){
			caixaQuatro.style.visibility = "hidden";
			}

			imagemCinco.onmouseover = function(){
				caixaCinco.style.visibility = "visible";	
			}

			imagemCinco.onmouseout = function(){
				caixaCinco.style.visibility = "hidden";
			}


			imagemSeis.onmouseover = function(){
				caixaSeis.style.visibility = "visible";	
			}

			imagemSeis.onmouseout = function(){
				caixaSeis.style.visibility = "hidden";
			}	


			imagemSete.onmouseover = function(){
				caixaSete.style.visibility = "visible";	
			}

			imagemSete.onmouseout = function(){
			caixaSete.style.visibility = "hidden";
			}		

			imagemOito.onmouseover = function(){
				caixaOito.style.visibility = "visible";	
			}

			imagemOito.onmouseout = function(){
			caixaOito.style.visibility = "hidden";
			}


			top.onclick = function(){
				window.scrollTo(0,0);
			}

			voltar.onclick = function(){
				window.scrollTo(0,0);
			}
	});
	