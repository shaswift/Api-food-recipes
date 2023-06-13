const mealName=document.getElementById("name")
const mealImage=document.getElementById("image")
const mealCook=document.getElementById('cook')
const mealIngredients=document.getElementById("ingredients")
const firstIngredients=document.getElementById("no1")
const secondIngredients=document.getElementById("no2")
const thirdIngredients=document.getElementById("no3")
const fourthIngredients=document.getElementById("no4")
const fifthIngredients=document.getElementById("no5")
const sixthIngredients=document.getElementById("no6")
const seventhIngredients=document.getElementById("no7")
const eightIngredients=document.getElementById("no8")
const nineIngredients=document.getElementById("no9")
const tenIngredients=document.getElementById("no10")
const elevenIngredients=document.getElementById("no11")
const twelveIngredients=document.getElementById("no12")
const thirteenIngredients=document.getElementById("no13")
const fourteenIngredients=document.getElementById("no14")
const fiftenIngredients=document.getElementById("no15")
const sixteenIngredients=document.getElementById("no16")
const seventenIngredients=document.getElementById("no17")
const eighteenIngredients=document.getElementById("no18")
const nineteenIngredients=document.getElementById("no19")
const twentyIngredients=document.getElementById("no20")


console.log(mealName)
console.log(mealImage)
console.log(mealCook)
async function logJSONData() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const jsonData = await response.json();
  console.log(jsonData.meals[0].strInstructions);
 mealName.innerHTML=jsonData.meals[0].strMeal
 mealImage.src=jsonData.meals[0].strMealThumb
 mealCook.innerHTML=jsonData.meals[0].strInstructions
 firstIngredients.innerHTML=jsonData.meals[0].strIngredient1
 secondIngredients.innerHTML=jsonData.meals[0].strIngredient2
 thirdIngredients.innerHTML=jsonData.meals[0].strIngredient3
 fourthIngredients.innerHTML=jsonData.meals[0].strIngredient4
 fifthIngredients.innerHTML=jsonData.meals[0].strIngredient5
 sixthIngredients.innerHTML=jsonData.meals[0].strIngredient6
 seventhIngredients.innerHTML=jsonData.meals[0].strIngredient7
 eightIngredients.innerHTML=jsonData.meals[0].strIngredient8
 nineIngredients.innerHTML=jsonData.meals[0].strIngredient9
 tenIngredients.innerHTML=jsonData.meals[0].strIngredient10
 elevenIngredients.innerHTML=jsonData.meals[0].strIngredient11
 twelveIngredients.innerHTML=jsonData.meals[0].strIngredient12
 thirteenIngredients.innerHTML=jsonData.meals[0].strIngredient13
 fourteenIngredients.innerHTML=jsonData.meals[0].strIngredient14
 fiftenIngredients.innerHTML=jsonData.meals[0].strIngredient15
 sixteenIngredients.innerHTML=jsonData.meals[0].strIngredient16
 seventenIngredients.innerHTML=jsonData.meals[0].strIngredient17
 eighteenIngredients.innerHTML=jsonData.meals[0].strIngredient18
 nineteenIngredients.innerHTML=jsonData.meals[0].strIngredient19
 twentyIngredients.innerHTML=jsonData.meals[0].strIngredient20

}
logJSONData()