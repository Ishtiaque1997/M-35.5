const loadSingleUser=()=>{
fetch('https://randomuser.me/api/')
.then(res=>res.json())
.then(data=>displaySingleUser(data.results[0]))
}
loadSingleUser()

const displaySingleUser=user=>{
console.log(user);
}

const toggleSpinner=displayStyle=>{
 document.getElementById('spinner').style.display=displayStyle;
}
const searchMeal=()=>{
 const searchText=document.getElementById('search-field').value;
 //display spinner
 toggleSpinner('block')
 loadMeals(searchText);
 document.getElementById('search-field').value='';

}

const loadMeals=(searchText)=>{
 const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayMeals(data.meals))
}

const displayMeals=meals=>{
 const container=document.getElementById('meal');
 container.textContent='';
 meals.forEach(meal=>{
   const div=document.createElement('div');
   div.innerHTML=`
   <h1>${meal.strMeal}</h1>
   <button onClick="loadMealDetail('${meal.strMeal}')">click me</button>
   `;
   container.appendChild(div);
 })
}
loadMeals('fish');
const loadMealDetail=mealName=>{
console.log(mealName)
}