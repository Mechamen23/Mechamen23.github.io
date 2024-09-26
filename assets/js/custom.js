// Datos de los perfumes
// const perfumes = [
//     {
//         id: 1,
//         nombre: "Afnan 9PM",
//         imagen: "afnan-9pm",
//         casa: "Afnan",
//         precio: "299.000"
//     },

//     {
//         id: 2,
//         nombre: "AHLI Alpha",
//         imagen: "ahli-alpha",
//         casa: "AHLI",
//         precio: "450.000"
//     },

//     {
//         id: 3,
//         nombre: "Afnan 9PM",
//         imagen: "afnan-9pm",
//         casa: "Afnan",
//         precio: "299.000"
//     },


//     // Añade más perfumes aquí
// ];


fetch('./assets/json/perfumes.json')
    .then(response => response.json())
    .then(perfumes => {
        const catalogo = document.getElementById("catalogo");

        if (catalogo) {
            perfumes.forEach(perfume => {
                const tarjeta = document.createElement("div");
                tarjeta.classList.add("col-md-4");
                tarjeta.innerHTML = `
                        <a href="shop-single.html?id=${perfume.id}">
                            <div class="card mb-4 product-wap rounded-0">
                                <div class="card rounded-0">
                                    <img class="card-img rounded-0 img-fluid" src="./assets/img/perfumes/${perfume.imagen}.png" alt="${perfume.nombre}">
                                </div>
                                <div class="card-body">
                                    <a href="shop-single.html?id=${perfume.id}" class="h3 text-decoration-none">${perfume.nombre}</a>
                                    <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                        <li>${perfume.casa}</li>
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
                        </a>
                `;
                catalogo.appendChild(tarjeta);
            });
        } else if (window.location.pathname.includes('shop-single.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const perfumeId = urlParams.get('id');
        
            if (perfumeId) {
                const perfume = perfumes.find(p => p.id == perfumeId);
        
                if (perfume) {
                    document.getElementById("titulo-perfume").innerText = perfume.nombre;
                    document.getElementById("imagen-perfume").src = "./assets/img/perfumes/"+perfume.imagen+".png";
                    document.getElementById("casa-perfume").innerText = "By "+perfume.casa;
                    document.getElementById("precio-perfume").innerText = perfume.precio;
                    document.getElementById("disponibilidad-perfume").innerText = perfume.disponibilidad;
                    document.getElementById("descripcion-perfume").innerText = perfume.descripcion;
                    document.getElementById("aromas-perfume").innerText = perfume.aromas;
                    document.getElementById("id-perfume").innerText = "Ref. "+perfume.id;
                } else {
                    console.log("Perfume no encontrado");
                }
            } else {
                console.log("ID no proporcionado");
            }
        } else if (window.location.pathname.includes('index.html')) {
            const carrusel = document.getElementById('carrusel');
        
            // Seleccionamos los 4 perfumes más populares (esto puede cambiar según criterios)
            const idsPopulares = [2, 25, 129, 182];
            const perfumesPopulares = perfumes.filter(perfume => idsPopulares.includes(perfume.id));  // Esto asume que los 4 primeros son los más populares

            perfumesPopulares.forEach((perfume, index) => {
                // Creamos el contenido del carrusel dinámicamente
                const item = document.createElement('div');
                item.classList.add('carousel-item');  // Asegúrate de usar las clases necesarias para el estilo del carrusel
                if (index === 0) {
                    item.classList.add('active');  // El primer elemento debe ser "active"
                }

                item.innerHTML = `
                    <div class="container">
                        <div class="row p-5">
                            <div class="mx-auto col-md-8 order-lg-first carousel-img bg-light">
                                <img class="img-fluid" src="./assets/img/perfumes/${perfume.imagen}.png" alt="">
                            </div>
                            <div class="col-lg-6 mb-0 d-flex align-items-center">
                                <div class="text-align-left align-self-center">
                                    <h1 class="h1" style="color: #320B3C;">${perfume.nombre}</h1>
                                    <h3 class="h2" style="color: #320B3C;">By ${perfume.casa}</h3>
                                    <p style="color: #320B3C;">
                                        ${perfume.descripcion}
                                    </p>
                                    <h3 class="h2" style="color: #320B3C;">$${perfume.precio}</h3>
                                    <a href="shop-single.html?id=${perfume.id}">
                                        <button type="submit" class="btn btn-success btn-lg" name="submit" value="buy" style="width: 100%;">Comprar</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                // Añadimos el perfume al carrusel
                carrusel.appendChild(item);
            });
        }
    })
    .catch(error => console.error('Error al cargar los datos:', error));
