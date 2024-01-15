document.addEventListener("mousemove", (event) => {
    const links = document.querySelectorAll(".magneticButton");
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    links.forEach((link) => {
        const rect = link.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);

        if (distance < 100) {
            const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
            const newX = centerX + 10 * Math.cos(angle);
            const newY = centerY + 10 * Math.sin(angle);

            link.style.transform = `translate(${newX - centerX}px, ${newY - centerY}px)`;
        } else {
            link.style.transform = "none";
        }
    });
});