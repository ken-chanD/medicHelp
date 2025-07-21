function include(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}
 // Ahora que el nav está insertado, añadimos el contenido dinámico
        const current = window.location.pathname.split('/').pop();
        const nav = document.getElementById('nav');

        if (current === "index.html" || current === "") {
          nav.innerHTML = `
            <a href="reanimation.html">Reanimation</a>
            <a href="perfusoren.html">Perfusoren</a>
            <a href="escalas.html">Escalas</a>
            <a href="guias.html">Guias</a>
          `;
        }

include('header', './includes/header.html')
include('footer', './includes/footer.html');