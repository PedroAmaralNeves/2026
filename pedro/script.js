// script.js
document.getElementById('show-details').addEventListener('click', function() {
    const extraDetails = document.getElementById('extra-details');
    
    if (extraDetails.style.display === 'none') {
        extraDetails.style.display = 'block';
        this.textContent = 'Exibir Menos Detalhes';
    } else {
        extraDetails.style.display = 'none';
        this.textContent = 'Exibir Mais Detalhes';
    }
});
