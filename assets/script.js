document.addEventListener('DOMContentLoaded', () => {
    
    const botao = document.getElementById('botao');
    const nav = document.getElementById('tecnologias');

    botao.addEventListener('click', () => {
        
        const novaDiv = document.createElement('div');
        novaDiv.classList.add('nova-div'); 

        nav.appendChild(novaDiv);

        const divs = nav.querySelectorAll('.nova-div');
        const largura = 100 / divs.length + '%';

        divs.forEach(div => {
            div.style.width = largura;
        });
        
    });
});
