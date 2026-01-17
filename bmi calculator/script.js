// ================== SELECT ELEMENTS ==================
const weightInput = document.querySelector('input[placeholder="Enter your weight (kg)"]');
const heightInput = document.querySelector('input[placeholder="Enter your height (cm)"]');
const calculateBtn = document.querySelector('button');
const bmiRange = document.querySelector('.lower');
const subresult = document.querySelector('.subresult');

// ================== RANGE INITIAL SETUP ==================
bmiRange.min = 0;
bmiRange.max = 40;
bmiRange.step = 0.1;
bmiRange.value = 0;

// ================== BUTTON CLICK ==================
calculateBtn.addEventListener('click', () => {

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;

    // validation
    if (!weight || !height || weight <= 0 || height <= 0) {
        subresult.textContent = "❌ Please enter valid values";
        subresult.style.color = "red";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    showResult(bmi);
});

// ================== SHOW RESULT ==================
function showResult(bmi) {

    let status = "";
    let color = "";
    let gradient = "";

    if (bmi < 18.5) {
        status = "UNDERWEIGHT 😕 (thin)";
        color = "orange";
        gradient = "linear-gradient(to right, orange, yellow)";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "NORMAL ✅ (Fit)";
        color = "limegreen";
        gradient = "linear-gradient(to right, lightgreen, green)";
    } 
    else {
        status = "OVERWEIGHT ⚠️ (obesity)";
        color = "red";
        gradient = "linear-gradient(to right, red, darkred)";
    }

    // text show
    subresult.innerHTML = `
        <h2 style="margin-top:10px;">BMI : ${bmi}</h2>
        <p>${status}</p>
    `;

    subresult.style.color = color;

    // slider move
    bmiRange.value = bmi;
    bmiRange.style.background = gradient;
}
