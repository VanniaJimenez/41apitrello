var boton = document.getElementById("boton");
var divpadre = document.getElementById("divpadre");
	boton.onclick = function(){
		crearForm();
	};

function crearForm() {
		var div = document.createElement("div");
		divpadre.appendChild(div);
		var input = document.createElement("input");
		var button = document.createElement("button");
		div.appendChild(input);
		div.appendChild(button);
		button.innerHTML = "Guardar";
		button.className ="btn btn-primary ";
		button.onclick = function(){
			funcional();
		}

		function funcional(){
			console.log(input.value);
 			 if (input.value == "") {
  		alert("introduce una tarea");
  			} else{
  			crear();
  			};
		};

		function crear(){
			boton.style.display="none";
			var bienvenido = document.getElementById("bienvenido").style.display="none";
			var simplon = document.getElementById("simplon").style.display = "none";
			var txt = input.value;
			var t = document.createTextNode(txt);
			divpadre.appendChild(t);
			var textarea = document.createElement("textarea");
			divpadre.appendChild(textarea);
			textarea.setAttribute("placeholder","añadir tarjeta");
			var botonbebe = document.createElement("button");
			botonbebe.innerHTML = "añadir tarjeta"
			divpadre.appendChild(botonbebe);
			input.value="";
			botonbebe.className ="btn btn-primary";
			botonbebe.onclick = function(){
					var texto = textarea.value;
				var te = document.createTextNode(texto);
				divpadre.appendChild(te);
				

				};

			
			
		};

		
	};




