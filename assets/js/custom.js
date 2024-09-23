// Datos de los perfumes
const perfumes = [
    {
        id: 1,
        nombre: "Afnan 9PM",
        imagen: "afnan-9pm",
        casa: "Afnan",
        precio: "299.000"
    }


    // Añade más perfumes aquí
];

// Cargar el catálogo
const catalogo = document.getElementById("catalogo");

perfumes.forEach(perfume => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-4");
    tarjeta.innerHTML = `
            <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                    <img class="card-img rounded-0 img-fluid" src="./assets/img/perfumes/${perfume.imagen}.png" alt="${perfume.nombre}">
                </div>
                <div class="card-body">
                    <a href="shop-single.html?id=${perfume.id}" class="h3 text-decoration-none">${perfume.nombre}</a>
                    <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>Ahli</li>
                        <li class="pt-2">
                            <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                <p class="text-center mb-0">$${perfume.precio}</p>
                </div>
            </div>
    `;
    catalogo.appendChild(tarjeta);
});

function cargarDetalle() {
    const urlParams = new URLSearchParams(window.location.search);
    const perfumeId = urlParams.get('id');

    const perfume = perfumes.find(p => p.id == perfumeId); 

    document.getElementById("titulo-perfume").innerText = perfume.nombre;
    document.getElementById("imagen-perfume").src = "./assets/img/perfumes/"+ perfume.imagen + ".png";
    document.getElementById("casa-perfume").innerText = perfume.casa;
    document.getElementById("precio-perfume").innerText = perfume.precio;

}

// Llamadas para cargar el contenido según la página
if (window.location.pathname.includes('shop.html')) {
    cargarCatalogo();
} else if (window.location.pathname.includes('shop-single.html')) {
    cargarDetalle();
}