import { useEffect, useState } from "react";
import { recipe_api } from "../lib/recipe";

function Center() {
  const [recipes, getRecipes] = useState([]);
  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await fetch(`${recipe_api}`);
    const data = await response.json();
    getRecipes(data.hits);
  };
  console.log(recipes);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        {recipes.map((recipe) => (
          <div
            className="border m-5 border-gray-200 rounded-lg max-w-lg"
            key={recipe.recipe.label}
          >
            <img
              src={recipe.recipe.image}
              className="border-t rounded-t w-full"
            />
            <div className="bg-gray-50 p-3">
              <h2 className="text-sm md:text-lg font-semibold text-gray-700">
                {recipe.recipe.label}
              </h2>
              <p className="capitalize text-sm text-gray-500">
                {recipe.recipe.cuisineType} | {recipe.recipe.dishType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Center;
