<meta charset="UTF-8">


<input/>

<button>Confira o resultado!</button>

<div></div>

<script>

	var input = document.querySelector("input");
	input.focus();

	var div = document.querySelector("div");

	function pulaLinha(){

		document.write("<br>");
		document.write("<br>");
	}

	function mostra(frase){

		div.innerHTML = div.innerHTML + "<br>" + "<p>" + frase + "</p>";
		
	}
	
	function numeroaleatorio (){

	return Math.round(Math.random() * 10);

	}

	var numeroPensado = numeroaleatorio();

	var tentativas = 1;

	function verificacao () {	

		if (tentativas <= 3) {

			if (input.value == numeroPensado) {

				mostra("Você acertou! O número pensado era " + numeroPensado);

			} else{

				mostra("Você errou!");
			}
		}else{

			mostra("Suas chances acabaram, o numero era " + numeroPensado);
		}
		
		input.value = "";
		input.focus();
		tentativas++;
	}	

	var button = document.querySelector("button");
	button.onclick = verificacao;

</script>