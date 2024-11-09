document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const nameMessage = document.getElementById("nameMessage");
    const inputContainer = document.getElementById("inputContainer");
    const nameInput = document.getElementById("nameInput");
    const submitButton = document.getElementById("submitButton");
    const personalizedMessage = document.getElementById("personalizedMessage");
    const serviceMessage = document.getElementById("serviceMessage");
    const carousel = document.getElementById("carousel");
    const selectedServiceMessage = document.getElementById("selectedServiceMessage");

    // Carrossel de dias da semana
    const daysCarousel = document.getElementById("daysCarousel");
    const days = document.querySelectorAll(".carousel-day");
    const prevDayBtn = document.getElementById("prevDayBtn");
    const nextDayBtn = document.getElementById("nextDayBtn");
    let currentDayIndex = 0;

    // Exibir mensagens iniciais e input para nome
    setTimeout(() => {
        welcomeMessage.style.opacity = 1;
        welcomeMessage.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        nameMessage.style.opacity = 1;
        nameMessage.style.transform = 'translateY(0)';
    }, 1500);

    setTimeout(() => {
        inputContainer.style.display = "flex";
        inputContainer.style.opacity = 1;
        inputContainer.style.transform = 'translateY(0)';
    }, 2000);

    submitButton.addEventListener("click", function() {
        const name = nameInput.value.trim();

        if (name) {
            personalizedMessage.style.display = "block";
            personalizedMessage.style.opacity = 1;
            personalizedMessage.style.transform = 'translateY(0)';
            personalizedMessage.innerHTML = `Como vai, <strong>${name}!</strong> Tudo bem?`;

            setTimeout(() => {
                serviceMessage.style.display = "block";
                serviceMessage.style.opacity = 1;
                serviceMessage.style.transform = 'translateY(0)';
            }, 1000);

            setTimeout(() => {
                carousel.style.display = "flex";
                carousel.style.opacity = 1;
                carousel.style.transform = 'translateY(0)';
            }, 2000);
        } else {
            alert("Por favor, digite seu nome.");
        }
    });

    // Lógica do carrossel de serviços
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    showImage(currentIndex);

    // Detectar a escolha do serviço ao clicar na imagem
    images.forEach(img => {
        img.addEventListener("click", () => {
            const selectedService = img.getAttribute("data-service");

            selectedServiceMessage.style.display = "block";
            selectedServiceMessage.style.opacity = 1;
            selectedServiceMessage.style.transform = 'translateY(0)';
            selectedServiceMessage.innerHTML = `Ótima escolha! Você selecionou o serviço: <strong>${selectedService}</strong>.`;

            // Ocultar o carrossel após a escolha
            carousel.style.display = "none";
            setTimeout(() => {
                daysCarousel.style.display = "flex";
                daysCarousel.style.opacity = 1;
                daysCarousel.style.transform = 'translateY(0)';
            }, 500);
        });
    });

    // Lógica do carrossel de dias da semana
    function showDay(index) {
        days.forEach((day, i) => {
            day.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    prevDayBtn.addEventListener("click", () => {
        currentDayIndex = (currentDayIndex > 0) ? currentDayIndex - 1 : days.length - 1;
        showDay(currentDayIndex);
    });

    nextDayBtn.addEventListener("click", () => {
        currentDayIndex = (currentDayIndex < days.length - 1) ? currentDayIndex + 1 : 0;
        showDay(currentDayIndex);
    });

    showDay(currentDayIndex);

    // Detectar a escolha do dia ao clicar no dia
    days.forEach(day => {
        day.addEventListener("click", () => {
            const selectedDay = day.textContent;

            // Exibir mensagem com o dia escolhido
            selectedServiceMessage.style.display = "block";
            selectedServiceMessage.style.opacity = 1;
            selectedServiceMessage.style.transform = 'translateY(0)';
            selectedServiceMessage.innerHTML = `Você escolheu o dia: <strong>${selectedDay}</strong> para o seu corte.`;

            // Ocultar o carrossel de dias após a escolha
            daysCarousel.style.display = "none";
        });
    });
});
