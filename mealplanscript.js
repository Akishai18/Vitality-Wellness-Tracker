const generatePlanButton = document.getElementById('generatePlan');
const mealPlanResult = document.getElementById('mealPlanResult');

generatePlanButton.addEventListener('click', generateMealPlan);

function generateMealPlan() {
    const weightCategorySelect = document.getElementById('weightCategory');
    const caloriesInput = document.getElementById('calories');
    const proteinInput = document.getElementById('protein');
    const fatInput = document.getElementById('fat');
    const saturatedFatInput = document.getElementById('saturatedFat');
    const cholesterolInput = document.getElementById('cholesterol');
    const sodiumInput = document.getElementById('sodium');
    const sugarInput = document.getElementById('sugar');
    const fiberInput = document.getElementById('fiber');
    const calciumInput = document.getElementById('calcium');
    const carbsInput = document.getElementById('carbs');
    const vegetarianInput = document.getElementById('vegetarian');

    const weightCategory = weightCategorySelect.value;
    const calories = parseFloat(caloriesInput.value);
    const protein = parseFloat(proteinInput.value);
    const fat = parseFloat(fatInput.value);
    const saturatedFat = parseFloat(saturatedFatInput.value);
    const cholesterol = parseFloat(cholesterolInput.value);
    const sodium = parseFloat(sodiumInput.value);
    const sugar = parseFloat(sugarInput.value);
    const fiber = parseFloat(fiberInput.value);
    const calcium = parseFloat(calciumInput.value);
    const carbs = parseFloat(carbsInput.value);
    const isVegetarian = vegetarianInput.checked;

    if (!isNaN(calories)) {
        const mealPlan = generateMealPlanText(weightCategory, calories, protein, fat, saturatedFat, cholesterol, sodium, sugar, fiber, calcium, carbs, isVegetarian);
        mealPlanResult.innerHTML = `<h3>Your Meal Plan:</h3><pre>${mealPlan}</pre>`;
    }
}

function generateMealPlanText(weightCategory, calories, protein, fat, saturatedFat, cholesterol, sodium, sugar, fiber, calcium, carbs, isVegetarian) {
    const mealPlan = [];

    if (weightCategory === 'underweight') {
        if (calories < 1500) {
	    if (isVegetarian) {
            	if (protein >= 50 && fat <= 40 && fiber >= 25) {
                   mealPlan.push('Snack: Mixed nuts and dried fruits');
                   mealPlan.push('Lunch: Lentil and vegetable curry with brown rice');
                   mealPlan.push('Dinner: Chickpea and spinach stir-fry with quinoa');
            } else {
                   mealPlan.push('Snack: Greek yogurt with berries');
                   mealPlan.push('Lunch: Grilled vegetable wrap with hummus');
                   mealPlan.push('Dinner: Tofu and broccoli stir-fry with brown rice');
            }
            }else if (protein >= 60 && fat <= 30 && sugar <= 20 && sodium <= 2300) {
                mealPlan.push('Breakfast: Greek yogurt with mixed berries and almonds');
                mealPlan.push('Lunch: Grilled chicken salad with olive oil dressing');
                mealPlan.push('Dinner: Baked fish with quinoa and steamed vegetables');
            } 
		else {
                mealPlan.push('Breakfast: Omelette with spinach and whole-grain toast');
                mealPlan.push('Lunch: Lentil soup with a side of hummus and vegetables');
                mealPlan.push('Dinner: Tofu stir-fry with brown rice');
            }

        } else if (calories <= 2000) {
		if (isVegetarian) {
			mealPlan.push('Breakfast: Smoothie with spinach, banana, and protein powder');
                	mealPlan.push('Lunch: Quinoa and black bean salad with avocado');
                	mealPlan.push('Dinner: Lentil and vegetable stir-fry with quinoa');
	} 	else {	
            	mealPlan.push('Breakfast: Smoothie with spinach, banana, and protein powder');
            	mealPlan.push('Lunch: Quinoa and black bean salad with avocado');
            	mealPlan.push('Dinner: Roasted chicken with sweet potatoes and broccoli');
        } 
	}else if (calories > 2000) {
		if (isVegetarian) {
			mealPlan.push('Breakfast: Smoothie with spinach, banana, and protein powder & Whole-grain toast with avocado');
                	mealPlan.push('Lunch: Chickpea and vegetable quinoa bowl with tahini dressing &Whole-grain roll with hummus and mixed greens');
                	mealPlan.push('Dinner: Lentil and vegetable curry with brown rice & Grilled portobello mushrooms with roasted sweet potatoes and steamed broccoli');

            }   else {
			mealPlan.push('Breakfast: Scrambled eggs with whole-grain toast and avocado');
            		mealPlan.push('Lunch: Grilled salmon with quinoa and roasted vegetables');
            		mealPlan.push('Dinner: Stir-fried tofu with brown rice and mixed vegetables');
        }
    } 
}else if (weightCategory === 'overweight') {
 	if (calories < 1500) {
		if (isVegetarian) {
            		if (protein >= 40 && fiber >= 20 && saturatedFat <= 10 && cholesterol <= 250) {
                		mealPlan.push('Breakfast: Cottage cheese with mixed berries and whole-grain toast');
                		mealPlan.push('Lunch: Spinach and chickpea salad with light vinaigrette');
                		mealPlan.push('Dinner: Grilled tofu and vegetable skewers with quinoa');
           	 } 	else {
                		mealPlan.push('Breakfast: Oatmeal mixed with berries & A Banana');
                		mealPlan.push('Lunch: Lemon Roasted Whole Graine Vegetable Wrap');
                		mealPlan.push('Dinner: Tomatoe Basil Pasta Topped with Paramsean cheese & Grilled Tofu');
			     }



		}else if (protein >= 40 && fiber >= 20 && saturatedFat <= 10 && cholesterol <= 250) {
                	mealPlan.push('Breakfast: Smoothie with almond milk, banana, and spinach');
                	mealPlan.push('Lunch: Turkey and hummus wrap with carrot sticks');
                	mealPlan.push('Dinner: Baked chicken breast with steamed broccoli and brown rice');
            }
		else {
                	mealPlan.push('Breakfast: Scrambled eggs with spinach and whole-grain toast & A serving of Greek yogurt');
                	mealPlan.push('Lunch: Grilled chicken salad with mixed greens, tomatoes, cucumbers, and balsamic vinaigrette');
                	mealPlan.push('Dinner: Baked salmon fillet with lemon and herbs');

        } 
	}else if (calories < 1800) {
		if (isVegetarian){
                	mealPlan.push('Breakfast: Oatmeal cooked with almond milk, topped with sliced bananas and chopped nuts');
                	mealPlan.push('Lunch: Quinoa and black bean salad with mixed vegetables (bell peppers, corn, red onion, and tomatoes');
                	mealPlan.push('Dinner: Chickpea and vegetable stir-fry with tofu & Brown rice');
		}else{
            		mealPlan.push('Breakfast: Poached eggs on whole-grain English muffin with avocado');
            		mealPlan.push('Lunch: Grilled vegetable and feta quinoa bowl');
            		mealPlan.push('Dinner: Lentil and vegetable stew');
        } 
}	else if (calories <= 2200) {
		if (isVegetarian){
                	mealPlan.push('Breakfast: Scrambled tofu with sautéed spinach and diced tomatoes & Whole-grain toast');
                	mealPlan.push('Lunch: Grilled vegetable and quinoa salad with mixed greens and balsamic vinaigrette &A serving of hummus with whole-grain pita bread ');
                	mealPlan.push('Dinner: Lentil and vegetable stew & A Whole-grain veggie wrap');
            }else{
			mealPlan.push('Breakfast: Greek yogurt with honey and mixed nuts');
         		mealPlan.push('Lunch: Grilled chicken and mixed greens salad with balsamic vinaigrette');
            		mealPlan.push('Dinner: Stir-fried shrimp with broccoli and brown rice');
        } 
}	else if (calories > 2200) {
		if (isVegetarian){	
           		mealPlan.push('Breakfast: Smoothie with spinach, banana, mixed berries, plant-based protein powder, and almond milk & Whole-grain toast with avocado slices');
            		mealPlan.push('Lunch: Chickpea and vegetable stir-fry with quinoa & Mixed greens salad with balsamic vinaigrette');
            		mealPlan.push('Dinner: Grilled portobello mushrooms stuffed with a mixture of quinoa, vegetables, and feta cheese & Roasted sweet potatoes');
		}else{
            		mealPlan.push('Breakfast: Scrambled eggs with smoked salmon and whole-grain toast');
            		mealPlan.push('Lunch: Tofu and vegetable stir-fry with quinoa');
            		mealPlan.push('Dinner: Grilled steak with sweet potato and asparagus');
        }
    }

   
}
    return mealPlan.join('\n');
}

