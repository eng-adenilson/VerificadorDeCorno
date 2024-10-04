document.getElementById("checkButton").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    const resultElement = document.getElementById("resultado");
    const imageElement = document.getElementById("image");


    // Gerando um resultado aleatório
    const isCorno = Math.random() < 0.5;

    if (isCorno) {
        resultElement.textContent = `${nameInput}, você é corno!`;
        resultElement.style.color = "red";
        imageElement.src = "corno.jpg"; 
        imageElement.style.display = "block"; 
    } else {
        resultElement.textContent = `${nameInput}, você não é corno!`;
        resultElement.style.color = "green";
        imageElement.style.display = "none"; 
    }

});