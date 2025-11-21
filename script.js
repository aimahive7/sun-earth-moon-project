document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars');
    const toggleBtn = document.getElementById('toggle-anim');
    const speedSlider = document.getElementById('speed-slider');
    const earthOrbit = document.querySelector('.earth-orbit');
    const moonOrbit = document.querySelector('.moon-orbit');
    
    let isPaused = false;

    // Generate Stars
    function createStars() {
        const count = 200;
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 2 + 1;
            
            // Random animation duration
            const duration = Math.random() * 3 + 2;
            
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--twinkle-duration', `${duration}s`);
            
            starsContainer.appendChild(star);
        }
    }

    createStars();

    // Controls
    toggleBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        const state = isPaused ? 'paused' : 'running';
        earthOrbit.style.animationPlayState = state;
        moonOrbit.style.animationPlayState = state;
        toggleBtn.textContent = isPaused ? 'Resume Animation' : 'Pause Animation';
    });

    speedSlider.addEventListener('input', (e) => {
        const speed = e.target.value;
        // Base durations: Earth 20s, Moon 5s
        // Higher speed value = lower duration
        const earthDuration = 20 / speed;
        const moonDuration = 5 / speed;
        
        earthOrbit.style.animationDuration = `${earthDuration}s`;
        moonOrbit.style.animationDuration = `${moonDuration}s`;
    });
});
