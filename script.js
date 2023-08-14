const calculateBMIButton = document.getElementById('calculateBMI');
const resetButton = document.getElementById('reset');
const ageInput = document.getElementById('age');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const insights = document.getElementById('insights');
const questionsSection = document.getElementById('questionsSection');

calculateBMIButton.addEventListener('click', calculateBMI);
resetButton.addEventListener('click', resetForm);

function calculateBMI() {
    const age = parseFloat(ageInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const weight = parseFloat(weightInput.value);

    if (!isNaN(age) && !isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        displayQuestionsBasedOnBMI(bmi);
    }
}

function displayQuestionsBasedOnBMI(bmi) {
    questionsSection.innerHTML = ''; 

    let questionHTML = `<h2>Questions to Improve Your Health</h2>`;

    if (bmi < 18.5) {
        questionHTML += `
            <p>Based on your BMI, you're underweight. Answer these questions to provide you with recommendations that can help you improve:</p>
            <p>Do you eat fresh foods regularly?</p>
            <select id="freshFoods">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Do you eat a lot of processed foods?</p>
            <select id="processedFoods">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Do you sleep 8 hours a night?</p>
            <select id="sleepDuration">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>How many times do you exercise per week?</p>
            <input type="number" id="exercise" min="0">
            <p>Do you have any health or chronic health conditions? (Ex. Cancer, diabetes, Crohn's disease etc.)</p>
            <select id="healthconditions">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Do you experience stress or emotional factors that might impact your eating habits? </p>
            <select id="emotion">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Have you always been underweight or have you recently lost a significant amount of weight? </p>
            <select id="time">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button id="submitAnswers">Submit Answers</button>
        `;
    } else if (bmi >= 18.5 && bmi < 25) {
        questionHTML += `
            <p>Based on your BMI, you're in the normal weight range. Keep up the good work! Remember to regularly exercise, and eat a balanced and healthy diet!</p>
            <p>Based on your BMI, here are some recommendations to help you continue to maintain your healthy weight:</p>
            <p>Continue to eat a balanced diet rich in whole foods.</h6>
            <p>Engage in regular physical activity to maintain your current weight and fitness level.</p>
            <p>Monitor your emotional well-being and address stressors as needed.</p>
        `;
    } else if (bmi >= 25) {
        questionHTML += `
            <p>Based on your BMI, you're overweight. Answer these questions to provide you with recommendations that can help you improve:</p>
            <p>Do you eat fresh foods regularly?</p>
            <select id="freshFoods">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Do you eat a lot of processed foods?</p>
            <select id="processedFoods">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Do you sleep 8 hours a night?</p>
            <select id="sleepDuration">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>How many times do you exercise per week?</p>
            <input type="number" id="exercise" min="0">
            <p>Do you have any health or chronic health conditions? (Ex. Thyroid Disorders, diabetes, Hormonal Imbalances etc.)</p>
            <select id="healthconditions">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Do you experience stress or emotional factors or conditions that might impact your eating habits? (Ex. Depression, Anxiety, High Stress) </p>
            <select id="emotion">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <p>Have you always been overweight or have you recently gained a significant amount of weight? </p>
            <select id="time">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button id="submitAnswers">Submit Answers</button>
        `;
    }

    questionsSection.innerHTML = questionHTML;

    const submitAnswersButton = document.getElementById('submitAnswers');
    submitAnswersButton.addEventListener('click', () => processAnswers(bmi));
}

function processAnswers(bmi) {
    const freshFoods = document.getElementById('freshFoods').value;
    const processedFoods = document.getElementById('processedFoods').value;
    const sleepDuration = document.getElementById('sleepDuration').value;
    const exercise = document.getElementById('exercise').value;
    const healthconditions = document.getElementById('healthconditions').value;
    const emotion = document.getElementById('emotion').value;
    const time = document.getElementById('time').value;

    insights.innerHTML = getRecommendations(
        bmi,
        freshFoods,
        processedFoods,
        sleepDuration,
        exercise,
        healthconditions,
        emotion,
        time
    );
}

function getRecommendations(
    bmi,
    freshFoods,
    processedFoods,
    sleepDuration,
    exercise,
    healthconditions,
    emotion,
    time
) {
    let recommendations = `<h2>Recommendations</h2>`;
    
    if (bmi < 18.5) {
        recommendations += `
            <p>Based on your answers and BMI, here are some recommendations to help you improve:</p>
            <ul>
                <li>Eat more nutrient-rich foods to support healthy weight gain.</li>
                <li>Incorporate protein-rich foods and healthy fats into your diet.</li>
                <li>Create a balanced meal plan with the help of a nutritionist.</li>
                <li>Focus on regular exercise to build muscle mass.</li>
                <li>Manage stress and emotional factors to support healthy eating habits.</li>
            </ul>
        `;

    } else if (bmi >= 25) {
        recommendations += `
            <p>Based on your answers and BMI, here are some recommendations to help you improve:</p>
            <ul>
                <li>Incorporate more fresh fruits and vegetables into your diet.</li>
                <li>Reduce consumption of processed foods and sugary drinks.</li>
                <li>Engage in regular exercise for weight management and overall health.</li>
                <li>Strive for 7-9 hours of quality sleep each night.</li>
                <li>Consult a healthcare professional to address any chronic health conditions.</li>
                <li>Manage stress and emotional factors to avoid emotional eating.</li>
                <li>Seek support from a healthcare provider to create a personalized weight management plan.</li>
            </ul>
        `;
    }

    return recommendations;
}

function resetForm() {
    ageInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
    questionsSection.innerHTML = '';
    insights.innerHTML = '';
}

