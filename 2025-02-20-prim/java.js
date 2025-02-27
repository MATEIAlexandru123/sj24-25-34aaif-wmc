function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime() {
    let input = document.getElementById("numberInput").value.trim();
    let resultMessage = document.getElementById("resultMessage");


    if (!/^\d+$/.test(input)) {
        resultMessage.textContent = "Bitte eine **ganze Zahl** eingeben!";
        resultMessage.className = "message warning";
        resultMessage.style.display = "block";
        return;
    }

    let number = parseInt(input);

    if (isPrime(number)) {
        resultMessage.textContent = "✅ Richtig! Die Zahl ist eine Primzahl.";
        resultMessage.className = "message success";
    } else {
        resultMessage.textContent = "❌ Falsch! Die Zahl ist keine Primzahl.";
        resultMessage.className = "message error";
    }

    resultMessage.style.display = "block"; 
    }