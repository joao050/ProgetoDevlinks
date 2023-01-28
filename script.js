function toggleMode() {
  const html = document.documentElement
  //essa função muda o background light ou dark mode
  html.classList.toggle("light")

  //pega a tag img
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/icom-mob-elipse.png")
    // se não estiver em light mode, manter a imagem dark
  } else {
    img.setAttribute("src", "./assets/icon-mob-dark.png")
  }
  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "icon do mob do anime mob psycho 100(versão light)")
  } else {
    alt.setAttribute("alt", "icon do mob do anime mob psycho 100(versão dark)")
  }
}
