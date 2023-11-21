let divContenedor = document.querySelector("#contenedor");

class Enemigo{

    constructor(nombre,poder,vida,img){
        this.nombre = nombre
        this.poder = poder
        this.vida = vida
        this.img = img
    }
    batallar(){
       console.log(this.nombre + " Fue elegido")     
    }
}

let arrEnemigos=[
    new Enemigo("joker",70,120, "joker.jpg" ),
    new Enemigo("Duende verde",80,140,"duende.jpg"),
    new Enemigo("Thanos",200,350,"thanos.jpg"),
    new Enemigo("Pinguino",60,130,"pinguino.jpg")        
]

for(let i=0; i<arrEnemigos.length; i++){
    divContenedor.innerHTML+= renderCarta(arrEnemigos[i])
}
function renderCarta(enemigo){
    return`
        <div> 
            <h3> nombre:${enemigo.nombre}    </h3>
            <button id="${enemigo.nombre}" class="enemigo">Batallar!! </button>
        </div>
    
    `
}
let cartasEnemigos= document.getElementsByClassName("enemigo")
    console.log(cartasEnemigos)

for(let i=0; i<cartasEnemigos.length;i++){
    cartasEnemigos[i].addEventListener("click",()=>{
            arrEnemigos[i].batallar()
    })


}