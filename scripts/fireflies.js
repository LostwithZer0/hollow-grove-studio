
const fireflyContainers = document.querySelectorAll(".fireflies");

fireflyContainers.forEach(container => {
    const fireflyCount = 30;

    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement("span");
        firefly.classList.add("firefly");

        const size = 2 + Math.random() * 4;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * -20;
        const driftX = -100 + Math.random() * 200;
        const driftY = -150 + Math.random() * 100;

        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 100}%`;

        firefly.style.setProperty("--size", `${size}px`);
        firefly.style.setProperty("--duration", `${duration}s`);
        firefly.style.setProperty("--delay", `${delay}s`);
        firefly.style.setProperty("--drift-x", `${driftX}px`);
        firefly.style.setProperty("--drift-y", `${driftY}px`);

        container.appendChild(firefly);
    }
});
