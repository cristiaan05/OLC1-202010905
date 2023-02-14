
# Manual Técnico

 - Introducción
 - Objetivos
 - Funciones
	 - [Cambiar Frecuencia]( #1-Cambiar-Frecuencia)
	 - [Check Button](##-checkButton)
	 - moverLetrero()
 - Conclusiones

Bienvenido al manual técnico para el prototipo de dispositivo interactivo diseñado para presentar mensajes dinámicos y un juego de "Breakout" con características avanzadas. El prototipo está compuesto por un display formado por dos matrices LED de 8x8 y algunos botones para la interacción con el dispositivo. En este manual, encontrará información detallada sobre la arquitectura del hardware y el software, así como las especificaciones técnicas del dispositivo, incluyendo cómo configurar y utilizar las funciones de presentación de mensajes y el juego. Este manual está diseñado para proporcionar una guía completa para el desarrollo y la implementación de este prototipo para cumplir con los requisitos del proyecto.



##  1. Cambiar Frecuencia

Este código lee el valor del potenciómetro, ajusta la frecuencia del tono generado y muestra la frecuencia en el monitor serie. Además, llama a la función "pintarFila" para iluminar ciertas filas de una matriz de LED, según el valor del potenciómetro.

Tiene como objetivo cambiar la frecuencia de un tono generado por un zumbador, utilizando un potenciómetro analógico conectado a una entrada analógica de una placa Arduino. En este caso, el rango de lectura del potenciómetro se divide en siete secciones, y se asigna una frecuencia diferente a cada sección.

    void  cambiarFrecuencia(){
    
    int pot = analogRead(potenciometro);
    
    if (0<=pot<125){
    
    frecuencia = 250;
    
    freq = map(pot, frecuencia, frecuencia, frecuencia, frecuencia);
    
    Serial.println(freq);
    
    tone(buzzPin, freq, 250);
    
    pintarFila(1);
    
      
    
    }if (250<=pot<375){
    
    frecuencia = 325;
    
    freq = map(pot, frecuencia, frecuencia, frecuencia, frecuencia);
    
    Serial.println(freq);
    
    tone(buzzPin, freq, 250);
    
    pintarFila(3);
    
      
    
    } if (375<=pot<500){
    
    frecuencia = 400;
    
    freq = map(pot, frecuencia, frecuencia, frecuencia, frecuencia);
    
    Serial.println(freq);
    
    tone(buzzPin, freq, 250);
    
    pintarFila(5);
    
      
    
    } if (500<=pot<625){
    
    frecuencia = 475;
    
    freq = map(pot, frecuencia, frecuencia, frecuencia, frecuencia);
    
    Serial.println(freq);
    
    tone(buzzPin, freq, 250);
    
    pintarFila(7);
    
      
    
    } if (625<=pot<750){
    
    frecuencia = 550;
    
    freq = map(pot, frecuencia, frecuencia, frecuencia, frecuencia);
    
    Serial.println(freq);
    
    tone(buzzPin, freq, 250);
    
    pintarFila(9);
    
      
    
    } if (750<=pot<875){
    
    frecuencia = 625;
    
    freq = map(pot, frecuencia, frecuencia, frecuencia, frecuencia);
    
    Serial.println(freq);
    
    tone(buzzPin, freq, 250);
    
    pintarFila(9);
    
      
    
    } if (875<=pot<1000){
    
    frecuencia = 725;
    
    freq = map(pot, frecuencia, frecuencia, frecuencia, frecuencia);
    
    Serial.println(pot);
    
    tone(buzzPin, freq, 250);
    
    pintarFila(9);
    
    }
    
    }

*El código anterior cambia la la frecuencia del potenciometro según el valor que tenga asignado.*
 


## checkButton
Este código es una función en Arduino que verifica si se han presionado los botones izquierdo y derecho, y realiza acciones según corresponda. Si el botón izquierdo se presiona y ha pasado un tiempo suficiente, la función activa un efecto de desplazamiento continuo hacia la izquierda. Si el botón derecho se presiona y ha pasado el tiempo suficiente, la función activa el efecto de desplazamiento continuo hacia la derecha. Se imprime un mensaje en la consola serial para cada botón presionado. La última parte del código está comentada y es solo para fines de depuración.

    void  checkButtons() {
    
    if ((millis() - timeEval) > 500) {
    
	    if (!digitalRead(btnIzq)) {
    
	    timeEval = millis();
    
    Serial.println("Presiono el izquierda");
    
    soundBuzzer();
    
    if (!letrero_izq) {
    
    letrero_izq = true;
    
    posicion_columna_siguiente = (posicion_columna_siguiente + 15 < 92) ? posicion_columna_siguiente + 15 : (posicion_columna_siguiente + 15) - total_columnas_texto;
    
    }
    
    }
    
    }
    
      
    
    if ((millis() - timeEval) > 500) {
    
	    if (!digitalRead(btnDer)) {
    
		    timeEval = millis();
    
		    Serial.println("Presiono el derecha");
    
	    if (letrero_izq) {
    
    letrero_izq = false;
    
    posicion_columna_siguiente = (posicion_columna_siguiente - 15 > 0) ? posicion_columna_siguiente - 15 : total_columnas_texto + (posicion_columna_siguiente - 15);
    
    }
    
    }
    
    }
    
      
    
    //Serial.print("puedo hacer otras tareas ");
    
    //Serial.println(contador++);
    
    }

## moverLetrero()

La función "moverLetrero" se encarga de desplazar el texto en el letrero LED de derecha a izquierda o de izquierda a derecha, dependiendo del valor de la variable "letrero_izq". La velocidad de desplazamiento se controla mediante la variable "velocidad_letrero", que determina el tiempo que transcurre entre cada desplazamiento de columna. La función utiliza dos bucles "for" para recorrer las columnas y las filas del letrero LED, actualizando la matriz "frame" con los valores correspondientes de la matriz "cadena" según la dirección del desplazamiento. Si el desplazamiento llega al final del texto, la función vuelve al principio o al final según la dirección.

    void  moverLetrero() {
    
    if (millis() - prev_MillisM > velocidad_letrero) {
    
    prev_MillisM = millis();
    
    if (letrero_izq) {
    
    posicion_columna_siguiente = (posicion_columna_siguiente == 0) ? total_columnas_texto - 1 : posicion_columna_siguiente - 1;
    
    for (int j = 0; j < 8; j++) {
    
    for (int i = 0; i < 16; i++) {
    
    if (posicion_columna_siguiente - i > -1) {
    
    frame[j][15 - i] = cadena[j][posicion_columna_siguiente - i];
    
    } else  if (posicion_columna_siguiente - i <= -1) {
    
    frame[j][15 - i] = cadena[j][total_columnas_texto + (posicion_columna_siguiente - i)];
    
    }
    
    }
    
    }
    
    } else {
    
    posicion_columna_siguiente = (posicion_columna_siguiente == (total_columnas_texto)) ? 0 : posicion_columna_siguiente + 1;
    
      
    
    for (int j = 0; j < 8; j++) {
    
    for (int i = 0; i < 16; i++) {
    
    if (posicion_columna_siguiente + i < 92) {
    
    frame[j][i] = cadena[j][posicion_columna_siguiente + i];
    
    } else  if (posicion_columna_siguiente + i >= 92) {
    
    frame[j][i] = cadena[j][(posicion_columna_siguiente + i) - (total_columnas_texto)];
    
    }
    
    }
    
    }
    
    }
    
    }
    
    }

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

