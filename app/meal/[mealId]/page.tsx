import MealComponent from "@/components/MealComponent";
import { getMealById } from "@/utils/data";
import { notFound } from "next/navigation";

type MealPageProps = {
    params: {
        mealId: string;
    };
};

export default async function MealPage({ params: { mealId } }: MealPageProps) {
    const meal = await getMealById(mealId);
    if (!meal) {
        notFound();
    }
    return (
        <div>
            <MealComponent meal={meal} />
        </div>
    );
}
