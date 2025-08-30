document.getElementById("btnReordenar").addEventListener("click", () => {
  const box = document.getElementById("columnsBox");
  box.classList.toggle("stacked");
});

document.getElementById("btnTitulo").addEventListener("click", () => {
  document.getElementById("pageTitle").textContent = "Universidad Centroamericana Jose Simeon Cañas";
});


document.getElementById("btnColores").addEventListener("click", () => {
  document.body.classList.toggle("alt-colors");
});


document.getElementById("btnFooterImg").addEventListener("click", () => {
  const viaUrl = confirm("¿Agregar imagen por URL? (Aceptar = URL | Cancelar = archivo local)");
  if (viaUrl) {
    const url = prompt("Pega la URL de la imagen:");
    if (url) addImageToFooter(url);
  } else {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => addImageToFooter(ev.target.result);
      reader.readAsDataURL(file);
    });
    input.click();
  }
});

function addImageToFooter(src){
  const g = document.getElementById("footerGallery");
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Footer image";
  g.appendChild(img);
}
