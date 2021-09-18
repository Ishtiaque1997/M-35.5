//function for loading single user
const loadSingleUser=()=>{
fetch('https://randomuser.me/api/')
.then(res=>res.json())
.then(data=>displaySingleUser(data.results[0]))
}
loadSingleUser()//calling the function

//function to display single user
const displaySingleUser=user=>{
console.log(user);
}


//function to load meals
const loadMeals=(searchText)=>{
 const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayMeals(data.meals))
}

//function to display meals
const displayMeals=meals=>{
 const container=document.getElementById('meal');
 container.textContent='';
 meals?.forEach(meal=>{
   const div=document.createElement('div');
   div.innerHTML=`
   <h1>${meal.strMeal}</h1>
   <p>${meal.strIngredient18?meal.strIngredient8:'not found'}</p>
   <button onClick="loadMealDetail('${meal.strMeal}')">click me</button>
   `;
   container.appendChild(div);
   
 });
 toggleSpinner('none');//conditional spinner
 toggleSearchResult('block')//conditional display of results
}

loadMeals();//calling the function

//function to load details
const loadMealDetail=mealName=>{
console.log(mealName)
}

//function to display the search result
const searchMeal=()=>{
 const searchText=document.getElementById('search-field').value;
 //display spinner
 toggleSpinner('block');
 toggleSearchResult('none')
 loadMeals(searchText);
 document.getElementById('search-field').value='';
}




//function for toggling spinner
const toggleSpinner=displayStyle=>{
 document.getElementById('spinner').style.display=displayStyle;
}

//function to toggle search result
const toggleSearchResult=displayStyle=>{
 document.getElementById('meal').style.display=displayStyle;
}


