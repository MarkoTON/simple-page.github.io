function manuDrop() {
  let element = document.getElementById("nav-links")

  if (element.classList.contains("dontShow")) { 
    element.setAttribute("class", "show");
  } else {
    element.setAttribute("class", "dontShow");
  }
}