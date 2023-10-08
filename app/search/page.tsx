import MealsList from "@/components/MealsList";
import SearchComponent from "@/components/SearchComponent";
import { getMealsByCategory, searchMeal } from "@/utils/data";

type SearchPageProps = {
    searchParams: { [key: string]: string | undefined };
};

export default async function SearchPage({
    searchParams: { name, category },
}: SearchPageProps) {
    const mealsByName =
        (!category && ((await searchMeal(name || "")) || [])) || [];
    const mealsByCategory = category
        ? (await getMealsByCategory(category)) || []
        : [];
    return (
        <div className="flex flex-col gap-5">
            <SearchComponent />
            <MealsList meals={[...mealsByName, ...mealsByCategory]} />
        </div>
    );
}
