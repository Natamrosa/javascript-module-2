// Write your code here
const linkImg = document.getElementById("hpMovies");

let index = 0;

let bucleAdelante;

let bucleAtras;

const hpMovies = [
      "https://w0.peakpx.com/wallpaper/69/675/HD-wallpaper-harry-potter-harry-potter-and-the-chamber-of-secrets.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fe3de0ab2c5dcd6af5e1f87c6477ecf95c777c6c3089bc185a97a612c77a7bc4._V_SX1080_.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/36d52aec891350d8b9668825ac4fa0b04c35283653f4c73b63284a0dac33c78f._RI_V_TTW_.jpg",
  "https://hbomax-images.warnermediacdn.com/images/GXssPaAiBJ1VGwwEAAABW/tileburnedin?size=320x180&partner=hbomaxcom&language=es-es&v=191d87d2864ee490edab429247adf289&host=art-gallery-latam.api.hbo.com&w=160",
  "https://hbomax-images.warnermediacdn.com/images/GXssQ0A7HLFVGwwEAAABc/tileburnedin?size=320x180&partner=hbomaxcom&language=es-es&v=94d4e8bcc216945b378b2cebcce9da70&host=art-gallery-latam.api.hbo.com&w=160",
  "https://hbomax-images.warnermediacdn.com/images/GXssRwQHfmVVGwwEAAABi/tileburnedin?size=320x180&partner=hbomaxcom&v=2595b80bf4916a2dba7d073ac096ad41&language=es-es&host=art-gallery.api.hbo.com&w=160",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpyPh9Bw636kV_JzouKXe4gqxpIJqRQBiaA&usqp=CAU",
];

const botonAtras = document.getElementById("botonAtras");
botonAtras.addEventListener("click", () => atras());

function atras() {
    if (index < 1) {
        index = hpMovies.length;
    }
    index--;
    linkImg.src = hpMovies[index];
}

const botonAdelante = document.getElementById("botonAdelante");
botonAdelante.addEventListener("click", () => botonAdelante());

function adelante() {
    if (index == hpMovies.length - 1) {
        index = 1;
    }
    index++;
    linkImg.src = hpMovies[index];
    console.log(index, hpMovies[index]);
}

const botonAutoLeft = document.getElementById("botonAutoLeft");
botonAutoLeft.addEventListener("click", () => seguirIzquierda());

function seguirIzquierda() {
    clearInterval(bubleAdelante);
    bucleAtras = setInterval("atras()", 1000);
}

const botonParar = document.getElementById("botonParar");
botonParar.addEventListener("click", () => pararCarrusel());

function pararCarrusel() {
    if (bucleAdelante != undefined) {
        clearInterval(bucleAdelante);
    }
    if (bucleAtras != undefined) {
        clearInterval(bucleAtras);
    }
}
const botonAutoRight = document.getElementById("botonAutoRight");
botonAutoRight.addEventListener("click", () => seguirDerecha());

function seguirDerecha() {
    clearInterval(bucleAtras);
    bucleAdelante = setInterval("adelante()", 1000);
}

linksImg.src = hpMovies[index];