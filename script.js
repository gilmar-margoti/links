function toggleMode() {
  /* dark/light mode*/
  const html = document.documentElement
  html.classList.toggle("light")

  /* image */
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
