let bmiCategory = '';

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultBox = document.getElementById("result");
  const dietBtn = document.getElementById("dietBtn");
  const dietPlan = document.getElementById("dietPlan");

  resultBox.className = "result-box";
  dietBtn.classList.add("hidden");
  dietPlan.classList.add("hidden");
  dietPlan.innerHTML = "";

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultBox.innerText = "⚠️ Please enter valid height and weight!";
    resultBox.style.backgroundColor = "#ffe066";
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  let message = "";

  if (bmi < 18.5) {
    bmiCategory = "underweight";
    message = `😟 Your BMI is ${bmi.toFixed(1)} - Underweight. Time to power up! 💪`;
    resultBox.classList.add("result-underweight");
  } else if (bmi < 25) {
    bmiCategory = "healthy";
    message = `😊 Your BMI is ${bmi.toFixed(1)} - Perfectly Healthy! Keep it up! 🌱`;
    resultBox.classList.add("result-healthy");
  } else if (bmi < 30) {
    bmiCategory = "overweight";
    message = `⚠️ Your BMI is ${bmi.toFixed(1)} - Overweight. Let's burn it off! 🔥`;
    resultBox.classList.add("result-overweight");
  } else {
    bmiCategory = "obese";
    message = `🚨 Your BMI is ${bmi.toFixed(1)} - Obese. Take action now! ❤️‍🔥`;
    resultBox.classList.add("result-obese");
  }

  resultBox.innerText = message;
  dietBtn.classList.remove("hidden");
}

function showDiet() {
  const dietPlan = document.getElementById("dietPlan");
  dietPlan.classList.remove("hidden");
  let plan = "";

  switch (bmiCategory) {
    case "underweight":
      plan = `
        🥣 <strong>Diet Plan:</strong> <br>
        - Add high-calorie, nutritious foods<br>
        - Eat 5-6 times a day<br>
        - Peanut butter, whole milk, bananas<br>
        - Strength training & calorie-dense snacks
      `;
      break;
    case "healthy":
      plan = `
        🥗 <strong>Diet Plan:</strong><br>
        - Balanced meals with protein, carbs, and fats<br>
        - Plenty of fruits & vegetables<br>
        - Stay hydrated<br>
        - Maintain regular physical activity
      `;
      break;
    case "overweight":
      plan = `
        🍽️ <strong>Diet Plan:</strong><br>
        - Reduce sugar and processed foods<br>
        - Increase fiber and lean protein<br>
        - Drink water before meals<br>
        - 30 mins daily walk recommended
      `;
      break;
    case "obese":
      plan = `
        🚫 <strong>Diet Plan:</strong><br>
        - Avoid sugary drinks and fried items<br>
        - Focus on vegetables, legumes, and lean meats<br>
        - Controlled portions<br>
        - Consult a dietitian if needed
      `;
      break;
    default:
      plan = "Please calculate your BMI first.";
  }

  dietPlan.innerHTML = plan;
}
