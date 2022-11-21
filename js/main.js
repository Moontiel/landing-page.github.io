let $headerScroll = document.querySelector("#header-scroll");
let $links = document.querySelectorAll("nav ul li a");
let $iconMenu = document.querySelector("#icon-menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        $headerScroll.classList.add("js_header_scroll");
    } else {
        $headerScroll.classList.remove("js_header_scroll");
    }
});

function activeLink() {
    $links.forEach((link) => {
        link.classList.remove("js_active_link");
    });

    this.classList.add("js_active_link");
}

$links.forEach((link) => link.addEventListener("click", activeLink));

function showMenu() {
    let $navMenu = document.querySelector("#nav-menu");

    $navMenu.classList.toggle("js_show_menu");
}

$iconMenu.addEventListener("click", showMenu);

/* 
  $tagSpan: almacena todos los elementos html con definidos
  con tag-span
*/
let $tagSpan = document.querySelectorAll(".skin_flex .skin_box span");

/* 
	definimos un recorrido forEach en $tagSpan y declaramos
	una funcion que recibe 2 parametros
*/
$tagSpan.forEach((span, i) => {
    /* 
		parametro span: generamos un evento click y declaramos 
		una funcion
	*/
    span.addEventListener("click", () => {
        /* 
			switch: recibe el parametro i el cual almacena la posicion
			del elemento dentro del array
		*/
        switch (i) {
            /* 
				case 0: si el elemento al que se le hizo click tiene la
				posicion 0, seleccionamos a body y le añadimos la clase 
				js_skin_dark y removemos del mismo las clases js_skin_light 
				y js_skin_skyblue todas estas definidas en la hoja de estilos 
			*/
            case 0:
                document.body.classList.add("js_skin_dark");
                document.body.classList.remove("js_skin_light");
                break;

            /*
				aplica de la misma manera antes documentada
			*/
            case 1:
                document.body.classList.add("js_skin_light");
                document.body.classList.remove("js_skin_dark");
                break;

            /*
				defaul: esta seria la clase añadida por defecto
			*/
            default:
                document.body.classList.add("js_skin_dark");
                break;
        }

        /* 
			si body contiene la clase js_skin_dark hacemos uso
			de la propiedad localStorage.setItem que nos permite
			guardar un valor por medio de una clave en este caso
			skin-dark con el valor true
		*/
        if (document.body.classList.contains("js_skin_light")) {
            localStorage.setItem("skin-light", "true");
        } else {
            /*  
				de lo contrario hacemos uso de la propiedad 
				localStorage.setItem que nos permite guardar un 
				valor por medio de una clave en este caso
				skin-dark con el valor false
			*/
            localStorage.setItem("skin-light", "false");
        }
    });
});

/* 
    haciendo uso de la propiedad localStorage.getItem 
    que nos permite obtener un valor por medio de una clave
    validamos si la clave skin-light con su valor true esta
    guardada en el localStorage, si cumple la condicion 
    seleccionamos a body y añadimos la clase js_skin_light 
*/
if (localStorage.getItem("skin-light") === "true") {
    document.body.classList.add("js_skin_light");
} else {
    /* 
        de lo contrario si el localStorage no tiene la clave
        skin-light seleccionamos a body y removemos de este
        la clase js_skin_light definida en la hoja de estilos
    */
    document.body.classList.remove("js_skin_light");
}
