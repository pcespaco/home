document.addEventListener('DOMContentLoaded', () => {
    // Criando cursor customizado
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    customCursor.innerText = '🚀';
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.pageX}px`;
        customCursor.style.top = `${e.pageY}px`;
    });

    // Criando estrelas no fundo
    function createStars() {
        for (let i = 0; i < 30; i++) {
            let star = document.createElement('div');
            star.innerHTML = '⭐';
            star.classList.add('star');
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(star);
        }
    }

    createStars();
});

// Estilos do cursor customizado
const style = document.createElement('style');
style.innerHTML = `
    .custom-cursor {
        position: absolute;
        font-size: 2rem;
        pointer-events: none;
        transition: transform 0.05s linear;
    }

    .star {
        position: absolute;
        color: #fff;
        font-size: 1rem;
        animation: twinkle 3s infinite ease-in-out;
    }

    @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);
