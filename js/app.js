const clickbuttons = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody')
let carrito = []


document.addEventListener('DOMContentLoaded', ()=>{
    const LCstorage = JSON.parse(localStorage.getItem('carrito'))
        if(LCstorage){
            carrito = LCstorage;
            renderizarCarrito()
}
})

function agregarLocalStorage(){
    const agregarLC = JSON.stringify(carrito)
    localStorage.setItem('carrito', agregarLC)
  }
  

for(let clickbutton of clickbuttons) {
    clickbutton.addEventListener('click', agregarAlCarrito)
}


function agregarAlCarrito(evt){
    const button = evt.target
    const producto = button.closest('.card')
    const tituloProducto = producto.querySelector('.card-title').innerText
    const precioProducto = producto.querySelector('.precio').textContent
    const imagenProducto = producto.querySelector('.card-img-top').src
    

    const nuevoObjetoProducto = {
        titulo: tituloProducto,
        precio: precioProducto,
        imagen: imagenProducto,
        cantidad: 1

    }

        agregarNuevoProducto(nuevoObjetoProducto)

}


function agregarNuevoProducto(nuevoObjetoProducto){

    const btnCarrito = tbody.getElementsByClassName('btnCarrito')
    for(let i =0; i < carrito.length ; i+=1){
        if(carrito[i].titulo === nuevoObjetoProducto.titulo){
            carrito[i].cantidad +=1
            const botonDeAgregar = btnCarrito[i]
            botonDeAgregar.value ++ 
            carritoTotal()
            return null;
            
        }
    }
    carrito.push(nuevoObjetoProducto)
    renderizarCarrito()
    
}

function renderizarCarrito(){
    tbody.innerHTML = ''
    for(let producto of carrito){
        const tr = document.createElement('tr')
        tr.classList.add('ProductoEnCarrito')
        const contenidoCarrito = `
        
        <th scope="row"1</th>
        <td class = "productos-table">
          <img src= ${producto.imagen} alt="" >
          <h5 class="titulo">${producto.titulo}</h5>
        </td>
        <td class = "precio-table">${producto.precio}</td>
        <td class = "cantidad-table">
          <input type= "number" min = "1" value =${producto.cantidad} class="btnCarrito">
          <button class = "borrar btn btn-warning">x</button>
      </td>
      
      ` 
    tr.innerHTML = contenidoCarrito
    tbody.appendChild(tr)

    tr.querySelector(".borrar").addEventListener('click', removerProducto)
    }

    carritoTotal()
}

function carritoTotal(){
    let total = 0
    const totalCarrito = document.querySelector('.totalCarrito')
    for(let producto of carrito){
        const precio = Number(producto.precio.replace("U$S", ''))
        total = total + precio*producto.cantidad
    }
    totalCarrito.innerHTML =`Total U$$ ${total}`
    agregarLocalStorage()
    
}


function removerProducto(evt){
    const borrar = evt.target
    const tr = borrar.closest(".ProductoEnCarrito")
    const titulo = tr.querySelector('.titulo').textContent
    for (let i=0; i<carrito.length; i +=1){
        if (carrito[i].titulo.trim() === titulo.trim()){
        carrito.splice(i, 1)
    }
}
tr.remove()
carritoTotal()

}

const h1 = document.querySelector('h1');

h1.onmouseenter = () => {
    h1.style.color = "Red";
}
h1.onmouseout = () => {
    h1.style.color = "white";
}

const titulosH6 = document.getElementsByClassName('precio');
for (const titulo of titulosH6 ){
    titulo.addEventListener("onmouseenter", () => {
        
    })
}

const img = document.getElementById('img1')
img.addEventListener('click', (evt) =>{
    img.src = "https://www.lenovo.com/medias/lenovo-laptops-thinkbook-series-14s-hero.png?context=bWFzdGVyfHJvb3R8MzM1OTEzfGltYWdlL3BuZ3xoMWEvaGNmLzE0MTkwNTQwODQ5MTgyLnBuZ3w2MDMwYTI5ZDVlZjk5YjM4NzAzN2IyMjZhZDA1NWI2YzRmOGZkNGQ2OGQ0Yzc4ZjdiZDEyM2JiYzY4MGY5ZmMw"
})


