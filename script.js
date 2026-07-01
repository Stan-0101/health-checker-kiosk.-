// 1. Create an empty array to store the history of calculations
let bmiHistoryArray = []; 

function checkBMI(event) {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Input Validation (If-Else Structure)
    if (!name || !age || !gender || isNaN(weight) || isNaN(height)) {
        alert("Please fill in all fields correctly.");   
        return; 
    } else if (age < 0 || weight < 0 || height < 0 || age > 45) {
        alert("Please enter valid positive values for age, weight, and height.");
        return;
    }

    const heightM = height / 100; 
    const bmi = (weight / (heightM * heightM)).toFixed(2); // Calculate and format BMI once
    let category, message, color;

    // Determine Category (Switch-Case Structure)
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

    // Display the current result
    document.getElementById("bmiResult").innerHTML = `<h2>BMI Result</h2>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender.value}</p>
        <p>Weight: ${weight} kg</p>
        <p>Height: ${height} cm</p>
        <p>BMI: ${bmi}</p>
        <p>Category: <span style="color: ${color};">${category}</span></p>
        <p>Message: ${message}</p>`;

    
    
    
    bmiHistoryArray.push({ 
        name: name, 
        age: age, 
        gender: gender.value, 
        weight: weight, 
        height: height, 
        bmi: bmi, 
        category: category, 
        color: color 
    });

    
    let historyHTML = "";

    
    for (let i = 0; i < bmiHistoryArray.length; i++) {
        let entry = bmiHistoryArray[i]; 
        
        historyHTML += `<div class="history-entry">
            <p>Name: ${entry.name}</p>
            <p>Age: ${entry.age}</p>
            <p>Gender: ${entry.gender}</p>
            <p>Weight: ${entry.weight} kg</p>
            <p>Height: ${entry.height} cm</p>
            <p>BMI: ${entry.bmi}</p>
            <p>Category: <span style="color: ${entry.color};">${entry.category}</span></p>
        </div><hr>`; // Added an <hr> tag to visually separate history entries
    }

    
    document.getElementById("bmiHistory").innerHTML = historyHTML;
    
   

    // Prepare data for Google Sheets
    const data = {
        name: name,
        age: age,
        sex: gender.value,
        weight: weight,
        heightCm: height,
        bmi: bmi,
        category: category
    };

    // Send data to Google Apps Script
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