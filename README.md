# Carosello Mono Array

- creare un array 
    - inserire tutte le immagini
- creare un dom element verranno inserite le immagine
- creare un ciclo for
    - inserire i dati del array (nome.lenght)
    - creare una variabile per contiene il risultato di array
    - creare la stringa per inserire i'immagini nel dom
    - concatenare tutte le immagini
    - inserire la concatenazione con innerHtml nel DOM element
- prelevare la stringa dal Dom
    - creare una stringa prendendo l'elemento tramite nome della classe
    - applicare la classe (active) per visualizzare l'immagine

- prelevare i pulsanti (down) dal Dom
    - al pulsante up applicare EventListner
        - prendere la slide attiva ed applicare la classe (hide)
        - togliere alla slide la classe active
            - SE valore del index è minore di elemento.length del DOM - 1
                - Aumnetare il valore di Index
        - aggiungere alla slide succesiva la classe active

- prelevare i pulsanti (up) dal Dom
    - al pulsante up applicare EventListner
        - prendere la slide attiva ed applicare la classe (hide)
        - togliere alla slide la classe active
            - SE valore del index è maggiore di 0
                - Diminuire il valore di Index
        - aggiungere alla slide succesiva la classe active