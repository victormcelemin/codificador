var mensaje1 = document.getElementsByName("mensaje1");
var mensaje2 = document.getElementsByName("mensaje2");

var btnEncriptar = document.getElementsByName("encriptar");
var btnDesencriptar = document.getElementsByName("desencriptar");

var dic = {
  e: "bunga",
  i: "unga",
  a: "wryy",
  o: "xd",
  u: "uunga",
  b: "sunga",
  c: "yu",
  d: "jk",
  f: "cv",
  g: "qo",
  h: "zp",
  j: "eb",
  k: "sa",
  l: "fg",
  m: "hi",
  n: "tl",
  p: "ux",
  q: "vd",
  r: "an",
  s: "mo",
  t: "qz",
  v: "ce",
  w: "ib",
  x: "pl",
  y: "ds",
  z: "fh",
};

let criterio = "^[a-z0-9\\s]+$";

let exp_reg = new RegExp(criterio);

function encriptar() {
  let texto = document.querySelectorAll("textarea")[0].value;

  //Eliminamos caracteres no deseados
  texto = texto.split('');
  texto = texto.filter((el) => {
    return exp_reg.test(el);
  });
  texto = texto.join('');

  let result = "";

  if (
    texto.indexOf(dic["a"]) >= 0 ||
    texto.indexOf(dic["b"]) >= 0 ||
    texto.indexOf(dic["c"]) >= 0 ||
    texto.indexOf(dic["d"]) >= 0 ||
    texto.indexOf(dic["e"]) >= 0 ||
    texto.indexOf(dic["f"]) >= 0 ||
    texto.indexOf(dic["g"]) >= 0 ||
    texto.indexOf(dic["h"]) >= 0 ||
    texto.indexOf(dic["i"]) >= 0 ||
    texto.indexOf(dic["j"]) >= 0 ||
    texto.indexOf(dic["k"]) >= 0 ||
    texto.indexOf(dic["l"]) >= 0 ||
    texto.indexOf(dic["m"]) >= 0 ||
    texto.indexOf(dic["n"]) >= 0 ||
    texto.indexOf(dic["o"]) >= 0 ||
    texto.indexOf(dic["p"]) >= 0 ||
    texto.indexOf(dic["q"]) >= 0 ||
    texto.indexOf(dic["r"]) >= 0 ||
    texto.indexOf(dic["s"]) >= 0 ||
    texto.indexOf(dic["t"]) >= 0 ||
    texto.indexOf(dic["u"]) >= 0 ||
    texto.indexOf(dic["v"]) >= 0 ||
    texto.indexOf(dic["w"]) >= 0 ||
    texto.indexOf(dic["x"]) >= 0 ||
    texto.indexOf(dic["y"]) >= 0 ||
    texto.indexOf(dic["z"]) >= 0
  ) {
    var notification = new Notification(
      "El mensaje ya se encuentra encriptado"
    );
    setTimeout(function () {
      notification.close();
    }, 2000);
    alert("El mensaje ya se encuentra encriptado");
  } else {
    for (let i = 0; i < texto.length; i++) {
      if (dic[texto[i]]) {
        result += dic[texto[i]];
      } else {
        result += texto[i];
      }
    }
    if (result.length > 0) {
      document
        .querySelectorAll("textarea")[1]
        .setAttribute("class", "textarea-dec");

      document.getElementById("textarea-background-id").style.display =
        "none";
      document.getElementById("copiar").style.display = "block";

      var notification = new Notification(
        "El mensaje ha sido encriptado"
      );
      setTimeout(function () {
        notification.close();
      }, 2000);
    } else {
      document
        .querySelectorAll("textarea")[1]
        .setAttribute("class", "no-visible");

      document.getElementById("textarea-background-id").style.display =
        "block";
      document.getElementById("copiar").style.display = "none";
    }
    document.querySelectorAll("textarea")[1].value = result;
  }
}

function replaceTextDic(texto) {
  let result = texto;

  for (var i in dic) {
    result = result.replaceAll(dic[i], i);
  }

  if (result.length > 0) {
    document
      .querySelectorAll("textarea")[1]
      .setAttribute("class", "textarea-dec");
  } else {
    document
      .querySelectorAll("textarea")[1]
      .setAttribute("class", "no-visible");
  }
  return result;
}

function desencriptar() {
  let texto = document.querySelectorAll("textarea")[0].value;
  //Eliminamos caracteres no deseados
  texto = texto.split('');
  texto = texto.filter((el) => {
    return exp_reg.test(el);
  });
  texto = texto.join('');

  let result = "";

  result = replaceTextDic(texto);
  document.querySelectorAll("textarea")[1].value = result;
  if (result.length > 0) {
    document.getElementById("textarea-background-id").style.display =
      "none";
    document.getElementById("copiar").style.display = "block";
    var notification = new Notification(
      "El mensaje ha sido desencriptado"
    );
    setTimeout(function () {
      notification.close();
    }, 2000);
  } else {
    document.getElementById("textarea-background-id").style.display =
      "block";
    document.getElementById("copiar").style.display = "none";
  }
}

function copiarTextClipBoard_v1() {
  let texto = document.querySelectorAll("textarea")[1];
  let copy = texto.select();
  document.execCommand("copy");
  var notification = new Notification("El mensaje ha sido copiado");
  setTimeout(function () {
    notification.close();
  }, 2000);

  alert("Copied!");
}

function copiarAlPortapapelesOK() {
  let textarea = document.querySelectorAll("textarea")[1].select();
  document.execCommand("copy");
}

function copiarAlPortapapeles() {
  // Creamos un campo de texto "oculto"
  var aux = document.createElement("textarea");
  // Añadimos el campo a la página
  document.body.appendChild(aux);

  let texto = document.querySelectorAll("textarea")[1].value;
  // Asignamos el contenido del elemento
  aux.setAttribute("value", texto);
  aux.value = texto;
  aux.setAttribute("readonly", "");

  // Seleccionamos todo el contenido del campo
  aux.select();

  // Copiamos el texto seleccionado
  document.execCommand("copy");

  // Eliminamos el campo de la página
  document.body.removeChild(aux);
  var notification = new Notification("El mensaje ha sido copiado");
  setTimeout(function () {
    notification.close();
  }, 2000);
}

const nombre = document.querySelector('.nombre');
let direccion = 1;
let posicion = 0;

function animarNombre() {
  posicion += direccion;
  nombre.style.marginLeft = posicion + 'px';
  if (posicion >= 50 || posicion <= -50) {
    direccion *= -1;
  }
   
}

