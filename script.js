const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questions = document.querySelectorAll(".question"); // Selects both h2 and h3
const gif = document.querySelector(".gif");

// Change text and hide h3 when Yes button is clicked
yesBtn.addEventListener("click", () => {
    questions[0].innerHTML = "YAAYYYYYY би ч бас чамд хайртайя❤️ Охин хүүхдэд амьдралдаа анх удаа хэлсэн таван жилийн өмнөх энэ үгийг зөвхөн чамд л хязгаар үгүйгээр үргэлжүүлэн хэлье 僕のダーリン 💞💏";
    
    // Hide the h3 element
    questions[1].style.display = "none";

    // Change the GIF
    gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWtwejdvc2NubHFjam83cDluaGw3bjA4dmhoY2R6cmx3Z2tidzc2MCZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/WP1Z0FfnuMuXqPvDlj/giphy.gif";

    // Hide the No button
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});


// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
