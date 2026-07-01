function checkBMI(event) {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // FIX: Added 'return' to stop the function if validation fails
    if (!name || !age || !gender || isNaN(weight) || isNaN(height)) {
        alert("Please fill in all fields correctly.");   
        return; 
    } else if (age < 0 || weight < 0 || height < 0 || age > 45) {
        alert("Please enter valid positive values for age, weight, and height.");
        return;
    }

    const heightM = height / 100; 
    const bmi = weight / (heightM * heightM);
    let category, message, color;

    // Fixed a small logic gap: BMI over 30 wasn't covered in the switch
    switch (true) {
        case (bmi < 18.5):
            category = "Underweight";
            message = "Consider a balanced diet and consult a healthcare professional.";
            color = "blue";
            break;
        case (bmi < 25):
            category = "Normal weight";
            message = "Great job! Maintain your current lifestyle.";
            color = "green";
            break;
        case (bmi < 30):
            category = "Overweight";
            message = "Consider a healthy diet and regular exercise.";
            color = "orange";
            break;
        default:
            category = "Obese";
            message = "Please consult a healthcare provider for personalized advice.";
            color = "red";
            break;
    }

    document.getElementById("bmiResult").innerHTML = `<h2>BMI Result</h2>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender.value}</p>
        <p>Weight: ${weight} kg</p>
        <p>Height: ${height} cm</p>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>Category: <span style="color: ${color};">${category}</span></p>
        <p>Message: ${message}</p>`;

    document.getElementById("bmiHistory").innerHTML += `<div class="history-entry">
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender.value}</p>
        <p>Weight: ${weight} kg</p>
        <p>Height: ${height} cm</p>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>Category: <span style="color: ${color};">${category}</span></p>
    </div>`;
    
    const data = {
        name: name,
        age: age,
        sex: gender.value,
        weight: weight,
        heightCm: height,
        bmi: bmi.toFixed(2),
        category: category
    };

   
    
    
    const webAppUrl = "https://script.google.com/macros/s/AKfycbyihqahF5aIkwnL7oRMQIBHECX3Dh2ckLsQtP_0t0cwDAppJbvI87P4msUX5iZ0RHIpig/exec";

   
    fetch(webAppUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log("Success:", result);
        alert("Data saved successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error saving data.");
    });
}