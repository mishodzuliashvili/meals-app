export async function getCategories() {
    const result = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await result.json();
    return data.categories as Category[];
}

export async function searchMeal(query: string) {
    const result = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await result.json();
    return data.meals as Meal[];
}

export async function getMealsByCategory(category: string) {
    const result = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await result.json();
    return data.meals as Meal[];
}

export async function getMealById(id: string) {
    const result = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await result.json();
    return data.meals[0] as Meal;
}
