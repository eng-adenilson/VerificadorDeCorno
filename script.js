document.getElementById("checkButton").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
<<<<<<< HEAD
    const resultElement = document.getElementById("resultado");
    const imageElement = document.getElementById("image");


=======
    const resultElement = document.getElementById("result");
    const imageElement = document.getElementById("image");

>>>>>>> 2a560830bbed848445f629875478c977c43d7f6b
    // Gerando um resultado aleatório
    const isCorno = Math.random() < 0.5;

    if (isCorno) {
        resultElement.textContent = `${nameInput}, você é corno!`;
        resultElement.style.color = "red";
<<<<<<< HEAD
        imageElement.src = "corno.jpg"; 
=======
        imageElement.src = "image.png"; 
>>>>>>> 2a560830bbed848445f629875478c977c43d7f6b
        imageElement.style.display = "block"; 
    } else {
        resultElement.textContent = `${nameInput}, você não é corno!`;
        resultElement.style.color = "green";
<<<<<<< HEAD
        imageElement.style.display = "none"; 
    }

});
=======
        imageElement.style.display = "none"; 
    }
});
>>>>>>> 2a560830bbed848445f629875478c977c43d7f6b
