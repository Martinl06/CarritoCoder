const clickbuttons = document.querySelectorAll('.button');
const productosSeleccionados = document.querySelector('.productosSeleccionados')
const carrito =[]




document.addEventListener('DOMContentLoaded', () => {


for (const clickbutton of clickbuttons){
        clickbutton.addEventListener("click", agregarAlCarrito)
}


function agregarAlCarrito(evt){
    const button = evt.target
    const producto = button.closest('.card')
    const tituloProducto = producto.querySelector('.card-title').textContent
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

    const btnCarrito = productosSeleccionados.getElementsByClassName('btnCarrito')
    for(let i =0; i < carrito.length ; i+=1){
        if(carrito[i].titulo === nuevoObjetoProducto.titulo){
            carrito[i].cantidad +=1
            const botonDeAgregar = btnCarrito[i]
            botonDeAgregar.value ++
            console.log(carrito) 
            return null;
            
        }
    }
    carrito.push(nuevoObjetoProducto)
    renderizarCarrito()
}

function renderizarCarrito(){
    productosSeleccionados.innerHTML = ""
    carrito.map(producto =>{
        const tr = document.createElement('tr')
        const contenidoCarrito = `<th scope="row"1</th>
        <td class = "productos-table">
          <img src= ${producto.imagen} alt="" >
          <h5 class="titulo">${producto.titulo}</h5>
        </td>
        <td class = "precio-table">${producto.precio}</td>
        <td class = "cantidad-table">
          <input type= "number" min = "1" value =${producto.cantidad} class="btnCarrito">
          <button class = "borrar btn btn-warning">X</button>
      </td>` 
    tr.innerHTML = contenidoCarrito
    productosSeleccionados.appendChild(tr)

    })
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

})
