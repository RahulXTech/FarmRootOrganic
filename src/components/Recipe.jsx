import React, { useState } from "react";
import { Button } from "./UI/Button";

const recipes = [
  {
    id: 1, 
    name: "Veggie Sandwich",
    type: "veg",
    category: "breakfast",
    image: "https://th.bing.com/th/id/OSK.HEROHNfkb0wRHqxI19xARbraDum2NbyDNmK51A4q--U_TNc?rs=1&pid=ImgDetMain",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 2, 
    name: "Veggie Sandwich",
    type: "veg",
    category: "breakfast",
    image: "https://bing.com/th?id=OSK.21af7e7e173332161e8948b24d3680db",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 3, 
    name: "Easy Stir Fry Vegetables",
    type: "veg",
    category: "dinner",
    image: "https://www.acouplecooks.com/wp-content/uploads/2020/01/Broccoli-Stir-Fry-011-520x520.jpg",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 4, 
    name: "Chicken Tikka Recipes",
    type: "non-veg",
    category: "dinner",
    image: "https://c.ndtvimg.com/2021-03/n2lkaago_tikka_625x300_04_March_21.jpg",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 5, 
    name: "pecient food",
    type: "pecient food",
    category: "dinner",
    image: "https://th.bing.com/th/id/OIP.AEPYs2UjCKHQ0vx0uP9n5QHaEg?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 6, 
    name: "Veggie Sandwich",
    type: "veg",
    category: "breakfast",
    image: "https://th.bing.com/th/id/OSK.HEROHNfkb0wRHqxI19xARbraDum2NbyDNmK51A4q--U_TNc?rs=1&pid=ImgDetMain",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 7, 
    name: "Veggie Sandwich",
    type: "veg",
    category: "breakfast",
    image: "https://bing.com/th?id=OSK.21af7e7e173332161e8948b24d3680db",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 8, 
    name: "Easy Stir Fry Vegetables",
    type: "veg",
    category: "dinner",
    image: "https://www.acouplecooks.com/wp-content/uploads/2020/01/Broccoli-Stir-Fry-011-520x520.jpg",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 9, 
    name: "Chicken Tikka Recipes",
    type: "non-veg",
    category: "dinner",
    image: "https://c.ndtvimg.com/2021-03/n2lkaago_tikka_625x300_04_March_21.jpg",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },
  {
    id: 10, 
    name: "pecient food",
    type: "pecient food",
    category: "dinner",
    image: "https://th.bing.com/th/id/OIP.AEPYs2UjCKHQ0vx0uP9n5QHaEg?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "A healthy veggie sandwich loaded with fresh vegetables and cheese.",
    method: "Chop fresh vegetables like tomatoes, cucumbers, and lettuce. Place them between slices of bread with cheese. Grill until golden brown.",
    comments: []
  },

  // other recipes...
];

const categories = [
  { label: "All", value: "all" },
  { label: "Veg", value: "veg" },
  { label: "Non-Veg", value: "non-veg" },
  { label: "Breakfast", value: "breakfast" },
  { label: "Fast Food", value: "fast food" },
  { label: "Pecient Food", value: "pecient food" },
];

function RecipeDetail({ recipe, onBack, onCommentSubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = () => {
    const newComment = { name, comment, rating };
    onCommentSubmit(recipe.id, newComment);
    setName("");
    setComment("");
    setRating(1);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Button variant="outline" onClick={onBack} className="mb-4">Back</Button>
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-2xl mb-4" />
      <h2 className="text-3xl font-bold mb-2">{recipe.name}</h2>
      <p className="text-gray-500 mb-4">Type: {recipe.type} | Category: {recipe.category}</p>
      <p className="text-lg mb-4">{recipe.description}</p>
      <h3 className="text-xl font-semibold mb-2">How to make:</h3>
      <p>{recipe.method}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Comments</h3>
        <div className="mb-4">
          {recipe.comments.length > 0 ? (
            recipe.comments.map((comment, index) => (
              <div key={index} className="p-4 mb-2 border rounded-lg shadow-sm">
                <p><strong>{comment.name}</strong> (Rating: {comment.rating})</p>
                <p>{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md mb-2"
          />
          <textarea
            placeholder="Your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md mb-2"
          />
          <div className="mb-4">
            <label className="mr-2">Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>{star} Stars</option>
              ))}
            </select>
          </div>
          <Button onClick={handleSubmit} className="mt-2">Submit Comment</Button>
        </div>
      </div>
    </div>
  );
}

export default function FoodRecipeApp() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCommentSubmit = (recipeId, newComment) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        return { ...recipe, comments: [...recipe.comments, newComment] };
      }
      return recipe;
    });
    // Update the recipes state or re-render with the updated data
    // If using local state, you could use `setRecipes(updatedRecipes)`
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      (filter === "all" || recipe.type === filter || recipe.category === filter) &&
      recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedRecipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-green-600 text-white p-4 shadow-md">
          <h1 className="text-3xl font-bold text-center">Recipe Details</h1>
        </header>
        <main className="flex-1">
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
            onCommentSubmit={handleCommentSubmit}
          />
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2025 Healthy Food App. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white p-4 shadow-md ">
        <h1 className="text-3xl font-bold text-center">Healthy Food Recipes</h1>
      </header>

      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "outline"}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md shadow-sm"
          />
        </div>

    {/* This is the card management system code */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => ( 
            <div
              key={recipe.id}
              className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover rounded-xl mb-3" />
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <p className="text-sm text-gray-500 capitalize">
                Type: {recipe.type} | Category: {recipe.category}
              </p>
              <Button
                variant="link"
                className="mt-2 px-0 text-sm"
                onClick={() => setSelectedRecipe(recipe)}
              >
                More
              </Button>
            </div>
          ))}
        </div> 
      </main>
    </div>
  );
}
