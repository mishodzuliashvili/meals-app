"use client";
import _ from "lodash";
import CategoryCard from "./CategoryCard";
import useWindow from "@/hooks/useWindow";
import { calculateChunkSize } from "@/utils/calculateChunkSize";

type CategoryPanelProps = {
    categories: Category[];
};

export default function CategoryPanel({ categories }: CategoryPanelProps) {
    const { windowWidth } = useWindow();

    let chunkSize = calculateChunkSize(
        windowWidth,
        categories.length,
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
            {_.chunk(categories, chunkSize).map((chunk, index) => (
                <div key={index} className="flex flex-col gap-5">
                    {chunk.map((category) => (
                        <CategoryCard
                            key={category.idCategory}
                            category={category}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
