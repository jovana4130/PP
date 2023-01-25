/* Exercise 1. 
Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/

var coffee = {
    name: 'late',
    strength: 'light',
    flavour: 'vanilla',
    milk: 'soy',
    sugar: 'stevia', 
};
console.log(coffee.name);


/* Exercise 2. 
Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/

var favMovie = {
    title: 'Star Wars',
    actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    director: 'George Lucas',
    genre: 'Science Fiction',
    popularity: 'Oscar 1978.',
};
console.log(favMovie.director);

/*Exercise 3. 
Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/

/*var projectDestroyDeathStar = {
    description: 'Steal the plans and destroy the Death Star. Save Alderaan',
    language: 'JavaScript',
    repository: 'https://github.com/vezbanje',
    booleanStatusOfProject: 'in development',
};
console.log(projectDestroyDeathStar);

function JavaScriptUsed (n) {
    for (i = 0; i.length; i++) {
        if (projectDestroyDeathStar = n)
        return true;
        return false;
    };
    /*if true ; 
    return 'This project is written in JavaScript.'
    if false ;
    return 'This project is not written in JavaScript.'
}
    
    console.log('JavaScript'); */

var project = function project (desc, lang, git, dev) {
return {
    description: desc,
    programmingLanguage: lang,
    gitRepo: git,
    status: dev,
    repoInfo: (function() {
                    return git;
                }) (),
    checkLanguage: (function() {
                if (lang === "JavaScript") {
                    return "Written in JS";
                    } else {
                        return "Not written in JS";
                    }
                }) (),
    checkStatus: (function() {
                    if (dev) {
                        return "Project is in development";
                    } else {
                        return "Project is not in development";
                    }
                }) ()
    };
};

console.log(project('Steal the plans and destroy the Death Star. Save Alderaan', 'JavaScript', 'https://github.com/vezbanje', true));





/* Exercise 4. 
Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients. */

                            /*var culinaryRecipe = {
                                name: 'Gimbap',
                                typeOfCuisine: 'korean',
                                complexity: '2',
                                listOfIngredients: ['rice','vegetables','seaweed','sesame seads'],
                                preparingTime: '30 minutes',
                                preparingInstruction: '30 minutes',
                            }


                            console.log(culinaryRecipe);

                            var makeRecipe = function(dish, type, difficulty, ingredientList, time, instructions) {
                                var recipe = {    
                                    dishName: dish,
                                    typeOfCuisine: type,
                                    complexity: difficulty,
                                    ingredients: ingredientList,
                                    prepTime: time,
                                    prepInstructions: instructions,
                                    necessaryIngredients: (function() {
                                        return ingredientList;
                                    }) (),
                                    preparationTime: (function() {
                                        if (time < 0.25) {
                                            return "This meal can be prepared in under 15 minutes."
                                        } else {
                                            return "This meal requires more than 15 minutes preparation time."
                                        }
                                    }) (),
                                    newCuisine: (function(newType) {
                                        type = newType;
                                        return type;
                                    }) ("korean"),
                                    newIngredients: (function(ingredients, ingredient) {
                                        for (var i = 0; i < ingredients.length; i++) {
                                            if (ingredients[i] === ingredient) {
                                                delete ingredients[i];
                                            }
                                        }
                                        return ingredients;
                                    }) (["rice", "vegetables", "seaweed",'eggs'], "seame seeds")
                                }
                                return recipe;
                            };

                            
                            var meal = makeRecipe("Gimbap", "korean", 30, ["rice", "vegetables", "seaweed", "eggs", 'seame seeds'], 4, "Fry the meat with onions. Add rice. Stuff and roll each cabbage leaf. Let simmer for 4 hours.");

                            console.log(meal);


                            function createRecipe(t,l) {
                                if (time < 0.25)
                                return 'happy'
                            }
                            console.log(createRecipe(16)); */

function createRecipe(n, ct, cm, ing, t, ins) {
  var recipe = {
    name: n,
    cuisineType: ct,
    complexity: cm,
    ingridients: ing,
    time: t,
    instructions: ins,
    printIng: function () {
      console.log(recipe.ingridients);
    },
    checkIsUnder15Min: function () {
      return recipe.time < 15;
    },
    changeCuisineType: function (newCuisineType) {
      recipe.cuisineType = newCuisineType;
    },
    deleteIngridient: function (ingredient) {
      var updatedIngredients = [];
      for (var i = 0; i < recipe.ingridients.length; i++) {
        if (recipe.ingridients[i] !== ingredient) {
          updatedIngredients[updatedIngredients.length] = recipe.ingridients[i];
        }
      }
      recipe.ingridients = updatedIngredients;
    },
  };
  return recipe;
}

var p = createRecipe('Gimbap','korean', 2, ['rice','vegetables','seaweed','oil','sesame seads'], 30, 'Steam the rice and cut avaiable vegetables in stripes. When the rice is done, spread the seaweed and put equal level of the rice coat. Add the vegetables, and carefully roll the gimbap. When rolled, cover the rolls with sesame seeds. Cut it, and its ready! 맛있게 드세요!');
console.log(p);
p.printIng();
p.deleteIngridient('oil');
console.log(p);
