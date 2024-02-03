// Función que caga las animaciones de las habilidades

function cargarAnimaciones() {
  $(function () {
    $(".chart1").easyPieChart({
      size: 160,
      barColor: "#ff5b00",
      scaleLength: 0,
      lineWidth: 15,
      tackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
    $(".chart2").easyPieChart({
      size: 160,
      barColor: "#ff5b00",
      scaleLength: 0,
      lineWidth: 15,
      tackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
    $(".chart3").easyPieChart({
      size: 160,
      barColor: "#ff5b00",
      scaleLength: 0,
      lineWidth: 15,
      tackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
    $(".chart4").easyPieChart({
      size: 160,
      barColor: "#ff5b00",
      scaleLength: 0,
      lineWidth: 15,
      tackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
    $(".chart5").easyPieChart({
      size: 160,
      barColor: "#ff5b00",
      scaleLength: 0,
      lineWidth: 15,
      tackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
    $(".chart6").easyPieChart({
      size: 160,
      barColor: "#ff5b00",
      scaleLength: 0,
      lineWidth: 15,
      tackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
  });
}

//Función para filtrar las categorias de los trabajos

function verCategoria(cat) {
  const items = document.getElementsByClassName("item");

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  const itemCat = document.getElementsByClassName(cat);

  for (let i = 0; i < itemCat.length; i++) {
    itemCat[i].style.display = "block";
  }

  const links = document.querySelectorAll(".trabajos nav a");
  links[0].className = "";
  links[1].className = "";
  links[2].className = "";
  links[3].className = "";

  const itemSeleccionado = document.getElementById(cat);
  itemSeleccionado.className = "borde";
}

//Función que detecta cuando lanzar la animación de las habilidades

function efectoHabilidades() {
  let skills = document.getElementById("habilidades");
  let distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;

  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("chart");
    habilidades[0].classList.add("chart1");
    habilidades[1].classList.add("chart2");
    habilidades[2].classList.add("chart3");
    habilidades[3].classList.add("chart4");
    habilidades[4].classList.add("chart5");
    habilidades[5].classList.add("chart6");

    cargarAnimaciones();
  }
}

//Detecto el scrolling para aplicar la animación de las habilidades

window.onscroll = function () {
  efectoHabilidades();
};

// Función que muestra el menú responsive

function responsiveMenu() {
  let x = document.getElementById("nav");

  if (x.className === "") {
    x.className = "responsive";

    //creamos el elemento que cierra el menú

    let span = document.createElement("span");
    span.innerHTML = "X";
    document.getElementById("nav").appendChild(span);

    //Quitamos el botón eliminar cuando se hace click sobre este

    span.onclick = function () {
      x.className = "";
      span.remove();
    };
  } else {
    x.className = "";
  }
}

// Este código es para agregar una función a cada links del menú responsive
// cuando se presiona en cualquier de los links del menú, debe desaparececer el menú

const links = document.querySelectorAll("#nav a");

for (i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    let x = document.getElementById("nav");
    x.className = "";

    // Removemos el botón eliminar

    btnEliminar = document.querySelector("#nav span");

    btnEliminar.remove();
  };
}
