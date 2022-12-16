function alterarImagem() {
  let id = document.getElementById("logo");
  if ((avatar = id)) {
    document.getElementById("logo").src = "./img/logo.png";
    document.getElementById("logo").id = "logo-estacio";
  } else {
    document.getElementById("logo-estacio").src = "./img/logo-estacio.png";
    document.getElementById("logo-estacio").id = "logo";
  }
}

function mascara(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}

function mascaraM(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 4 || v.length == 9) i.value += " ";
  if (v.length == 15) i.value += "-";
}
