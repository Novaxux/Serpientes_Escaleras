class Dado {
    lanzar (){
        return Math.floor(Math.random()*6+1)
    }
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre
        this.casilla = 0
    }

    lanzarDado(dado){
        return dado.lanzar()
    }

    avanzar(valor){
        let avance = this.casilla + valor
        if (avance > 50)
            this.casilla = 50
        else
            this.casilla = avance
    }

    revisarTablero(tablero){
        this.casilla = tablero[this.casilla-1]
    }

    info(){
        return `El jugador ${this.nombre} se encuentra en la casilla ${this.casilla}`
    }
}

class Tablero {
    constructor(){
        this.tablero = this.crearTablero()
    }
    
    crearTablero() {
        let tablero = []
        for (let i = 0; i < 50; i++)
            tablero[i] = i+1
        
        // escaleras
        tablero[5]=14
        tablero[16]=23
        tablero[26]=33
        tablero[37]=43

        // serpientes
        tablero[15]=4
        tablero[38]=19
        tablero[15]=4
        tablero[15]=4

        return tablero
    }
}


let dado = new Dado()
let jugador1 = new Jugador("Juan")
let jugador2 = new Jugador("Pedro")
let tablero = new Tablero()




    while(jugador1.casilla < 50 && jugador2.casilla < 50){
        jugador1.avanzar(jugador1.lanzarDado(dado))
        jugador1.revisarTablero(tablero.tablero)
        console.log(jugador1.info())

        jugador2.avanzar(jugador2.lanzarDado(dado))
        jugador2.revisarTablero(tablero.tablero)
        console.log(jugador2.info())
    }

    if(jugador1.casilla == 50 && jugador2.casilla == 50)
        console.log("Empate")
    else if(jugador1.casilla == 50)
        console.log(`Gana jugador ${jugador1.nombre}`)
    else
        console.log(`Gana jugador ${jugador2.nombre}`)
    

