function sumar(){
    //Se crea una función llamada sumar().
    //Esta función normalmente se ejecuta al hacer clic en un botón.

    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    //Busca los elementos HTML con los identificadores id num1 y num2
    //Obtiene lo que escribió el usuario

    fetch("/sumar", {
        //fetch() permite comunicarse con el backend
        //Corresponde normalmente a Flask: (/sumar)
        method: "POST",
        //Indica que se enviarán datos al servidor usando POST.
        headers: {
            "Content-Type": "application/json"
            //Le indica al servidor: "Voy a enviar datos en formato JSON".
        },
        body: JSON.stringify({
            num1: num1,
            num2: num2
        })
        //Convierte el objeto JavaScript:
        //en un texto JSON:
        //que será enviado al servidor Flask.
    })
    .then(response=> response.json())
    .then(data=>{
        //Cuando Flask responde, esta línea convierte la respuesta JSON en un objeto JavaScript.


        document.getElementById("resultado").innerHTML=
            "Resultado: "+data.resultado;
        //Esta línea es la que muestra el resultado en la página web:
        //getElemntById("resultado"): Busca el elemento HTML cuyo id es "resultado".
        //innerHTML: Permite escribir contenido dentro de ese elemento.
        //Resultado: Es una cadena de texto fija.
        //data.resultado: Es el valor que envió Flask.
JavaScript
    })
    .catch(error=>{
        //Se ejecuta cuando ocurre algún error en cualquiera de los pasos anteriore del fetch().
        //Si Flask no está funcionando o la ruta /sumar no existe,
        //se producirá un error y se ejecutará el bloque .catch().
        console.error("Error:", error);
        //Muestra el error en la consola del navegador
    });

}