function createFallingElement() {
    const element = document.createElement('div');
    element.className = 'falling-element';
    
    element.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 30 + 20;
    element.style.width = size + 'px';
    element.style.height = size + 'px';
    
    element.style.animationDuration = (Math.random() * 6 + 6) + 's';
    
    if (Math.random() > 0.5) {
        element.style.transform = 'rotate(180deg)';
    }
    
    const shapes = ['20%', '50%', '30% 70% 70% 30% / 30% 30% 70% 70%'];
    element.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
    
    element.style.opacity = (Math.random() * 0.3 + 0.7).toString();
    
    document.body.appendChild(element);
    
    element.addEventListener('animationend', () => {
        element.remove();
    });
}

function startFallingAnimation() {
    for(let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFallingElement();
        }, i * 500);
    }
    
    setInterval(() => {
        if(document.querySelectorAll('.falling-element').length < 25) {
            createFallingElement();
        }
    }, 1000);
}

window.addEventListener('load', startFallingAnimation);
