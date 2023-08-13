document.addEventListener('mousemove', parallax);

function parallax(e) {
    document.querySelectorAll('.object').forEach(element => {
        let valor_movimiento = element.getAttribute('data-value');
        let x = e.clientX * valor_movimiento / 150;
        let y = e.clientY * valor_movimiento / 150;

        element.style.transform = `translate(${x}px, ${y}px)`;
    });
}