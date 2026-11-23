from flask import Flask, render_template, request, jsonify
# Flask crea la aplicación web, de no estar instalado Flask aquí
# mandaría error.
# render_template: permite enviar archivos HTML al navegador.
# request: recibe información enviada desde el cliente (HTML/frontend).
# jsonify: convierte datos de Python en textos u objetos JSON (JavaScript Object).
app = Flask(__name__)
# app es el nombre de la aplicación.
# __name__ indica a Flask dónde está el archivo principal.

@app.route('/')
# Define una ruta o URL.
# La diagonal / representa:
# http://127.0.0.1:5000/ se ejecuta esta ruta.
def inicio():
    # Crea una función llamada inicio.
    # Cuando el usuario visite 127.0.0.1...
    return render_template('index.html')
# Retorna un valor, busca el archivo index dentro de la carpeta plantillas.
@app.route('/sumar', methods=['POST'])
# Existe el método GET y el método POST, ambos reciben valores, pero el
# POST es más seguro.
def sumar():
    datos = request.get_json()
    # Lee el JSON enviado desde JavaScript.
    # JavaScript Object Notation (Notación de objeto de JavaScript).
    # Texto ligero diseñado para almacenar y transportar datos.

    num1 = int(datos['num1'])
    num2 = int(datos['num2'])
    # Extrae el valor asociado a la clave: 'num1'.
    resultado = num1 + num2
    return jsonify({'resultado': resultado})
    # Regresa el resultado.
if __name__ == '__main__':
    # ¿Este archivo se está ejecutando directamente?
    # Si la respuesta es sí, ejecuta las líneas de abajo.
    app.run(debug=True)
    # Inicia Flask.
    # Normalmente muestra algo parecido a:
    # Running on http://127.0.0.1:5000