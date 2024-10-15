function mostrar(){

    let suma=0;
    let cantidadpizzas= Number (document.querySelector('#cantidad').value);
    let tipopizza="";
    let ingredientesExtra1="";
    let ingredientesExtra2="";
    let ingredientesExtra3="";
    let ingredientesExtra4="";
    let ingredientesExtra5="";

    



    if(document.getElementById('base').value==1){
        suma+=14000;
        tipopizza="solo queso";
    }else if(document.getElementById('base').value==2){
        suma+=16000;
        tipopizza="jamon y queso";

    }else{
        suma+=20000;
        tipopizza="Especial"
    }



    if(document.getElementById('1').checked){
        suma+=10000;
        ingredientesExtra1="Maiz";

    }

    if(document.getElementById('2').checked){
        suma+=2000;
        ingredientesExtra2="Queso";
    }

    if(document.getElementById('3').checked){
        suma+=5000;
        ingredientesExtra3="Guacamole"
    }

    if(document.getElementById('4').checked){
        suma+=7000;
        ingredientesExtra4="Tocino"
    }

    if(document.getElementById('5').checked){
        suma+=8000;
        ingredientesExtra5="Pepperoni"
    }

    let valortotal= suma * cantidadpizzas;


    document.getElementById('ver').innerText = "El total a pagar es de: "+valortotal + " pediste "+cantidadpizzas+" de tipo "+tipopizza +" con los ingredientes "+ ingredientesExtra1 +", "+ ingredientesExtra2+", "+ ingredientesExtra3+", "+ingredientesExtra4+", "+ingredientesExtra5  ;
 
    




    
}

