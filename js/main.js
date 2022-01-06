function divisas(selectObject) {
    document.getElementById('alert').style.display = 'none';   


    var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
    

    // aqui dependera de donde obtienes los datos para ingresar las opciones de tu combo, puede ser una invocacion `ajax`
    
    var selectO = document.getElementById("cbOrigen");
    moneda.forEach(element => {
        var option = document.createElement("option");
        option.text = element;
        selectO.appendChild(option);     
    });
    

    var selectD = document.getElementById("cbDestino");
    moneda.forEach(element => {
        var option = document.createElement("option");
        option.text = element;
        selectD.appendChild(option);     
    });
    
    var select = document.getElementById('cbOrigen');
    select.addEventListener('change',
      function(){
        var selectedOption = this.options[select.selectedIndex];
        console.log(selectedOption.value + ': ' + selectedOption.text);
        document.getElementById("alert").innerHTML=selectedOption.value;
      });
}

function validacion(selectObject) {
    valor = document.getElementById("dinero").value;
    document.getElementById("alert").innerHTML="";
    document.getElementById('alert').style.display = 'none';   
    if( isNaN(valor) ) {
        document.getElementById('alert').style.display = 'block';   
        document.getElementById("alert").innerHTML="Se requiere valor";
    }
}


function convertir(selectObject){

    var valOrigen = document.getElementById("cbOrigen").selectedIndex;
    var valDestino = document.getElementById("cbDestino").selectedIndex; 
    valor = document.getElementById("dinero").value;
    console.log(valOrigen,valDestino);


    if((valOrigen ==1) && (valDestino ==2)){
          var result=20.46 * valor;
          alert("La Conversion de "+dinero.value+" dolares a pesos mexicanos es: "+result.toFixed(2));
      }
      
      if((valOrigen ==1) && (valDestino ==3)){
        var result=4070.50 * valor;
        alert("La Conversion de "+dinero.value+" dolares a pesos colombianos es: "+result.toFixed(2));
    }

    if((valOrigen ==1) && (valDestino ==4)){
        var result=0.88 * valor;
        alert("La Conversion de "+dinero.value+" dolares a euros es: "+result.toFixed(2));
    }

    if((valOrigen ==1) && (valDestino ==5)){
        var result=0.74 * valor;
        alert("La Conversion de "+dinero.value+" dolares a libras esterlinas es: "+result.toFixed(2));
    }
    //peso mexicano 
    
    if((valOrigen ==2) && (valDestino ==1)){
        var result=0.049 * valor;
        alert("La Conversion de "+dinero.value+" pesos mexicanos a dolares es: "+result.toFixed(3));
    }
    
    if((valOrigen ==2) && (valDestino ==3)){
      var result=199.59 * valor;
      alert("La Conversion de "+dinero.value+" pesos mexicanos a pesos colombianos es: "+result.toFixed(2));
  }

  if((valOrigen ==2) && (valDestino ==4)){
      var result=0.043 * valor;
      alert("La Conversion de "+dinero.value+" pesos mexicanos a euros es: "+result.toFixed(2));
  }

  if((valOrigen ==2) && (valDestino ==5)){
      var result=0.036 * valor;
      alert("La Conversion de "+dinero.value+" pesos mexicanos a libras esterlinas es: "+result.toFixed(2));
  }

//pesos colombianos

if((valOrigen ==3) && (valDestino ==1)){
    var result=0.00025 * valor;
    alert("La Conversion de "+dinero.value+" pesos colombianos a dolares es: "+result.toFixed(3));
}

if((valOrigen ==3) && (valDestino ==2)){
  var result=0.0050 * valor;
  alert("La Conversion de "+dinero.value+" pesos colombianos a pesos mexicanos es: "+result.toFixed(2));
}

if((valOrigen ==3) && (valDestino ==4)){
  var result=0.00022 * valor;
  alert("La Conversion de "+dinero.value+" pesos colombianos a euros es: "+result.toFixed(2));
}

if((valOrigen ==3) && (valDestino ==5)){
  var result=0.00018 * valor;
  alert("La Conversion de "+dinero.value+" pesos colombianos a libras esterlinas es: "+result.toFixed(2));
}

//euros

if((valOrigen ==4) && (valDestino ==1)){
    var result=1.13 * valor;
    alert("La Conversion de "+dinero.value+" euros a dolares es: "+result.toFixed(3));
}

if((valOrigen ==4) && (valDestino ==2)){
  var result=23.13 * valor;
  alert("La Conversion de "+dinero.value+" euros a pesos mexicanos es: "+result.toFixed(2));
}

if((valOrigen ==4) && (valDestino ==3)){
  var result=4619.15 * valor;
  alert("La Conversion de "+dinero.value+" euros a pesos colombianos es: "+result.toFixed(2));
}

if((valOrigen ==4) && (valDestino ==5)){
  var result=0.84 * valor;
  alert("La Conversion de "+dinero.value+" euros a libras esterlinas es: "+result.toFixed(2));
}

//libra esterlina

if((valOrigen ==5) && (valDestino ==1)){
    var result=1.36 * valor;
    alert("La Conversion de "+dinero.value+" libra esterlina a dolares es: "+result.toFixed(3));
}

if((valOrigen ==5) && (valDestino ==2)){
  var result=27.66 * valor;
  alert("La Conversion de "+dinero.value+" libra esterlina a pesos mexicanos es: "+result.toFixed(2));
}

if((valOrigen ==5) && (valDestino ==3)){
  var result=5525.83 * valor;
  alert("La Conversion de "+dinero.value+" libra esterlina a pesos colombianos es: "+result.toFixed(2));
}

if((valOrigen ==5) && (valDestino ==4)){
  var result=1.20 * valor;
  alert("La Conversion de "+dinero.value+" libra esterlina a euros es: "+result.toFixed(2));
}


}