"use client";
import useWindow from "@/hooks/useWindow";
import MealCard from "./MealCard";
import { calculateChunkSize } from "@/utils/calculateChunkSize";
import _ from "lodash";

type MealsListProps = {
    meals: Meal[];
};

export default function MealsList({ meals }: MealsListProps) {
    const { windowWidth } = useWindow();

    let chunkSize = calculateChunkSize(
        windowWidth,
        meals.length,
        {
            minWidth: 0,
            columns: 1,
        },
        {
            minWidth: 768,
            columns: 2,
        },
        {
            minWidth: 1024,
            columns: 3,
        }
    );

    return (
        <div className="flex gap-5 justify-center">
            {meals.length === 0 && (
                <p className="text-center text-xl">No meals found</p>
            )}
            {_.chunk(meals, chunkSize).map((chunk, index) => (
                <div key={index} className="flex flex-col gap-5">
                    {chunk.map((meal) => (
                        <MealCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
            ))}
        </div>
    );
}
