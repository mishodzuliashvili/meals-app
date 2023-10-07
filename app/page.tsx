import Image from "next/image";

type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

async function getCategories() {
    const result = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await result.json();
    return data.categories as Category[];
}

export default async function Home() {
    const categories = await getCategories();
    return (
        <main>
            {categories.map((category) => (
                <div key={category.idCategory}>
                    <Image
                        src={category.strCategoryThumb}
                        alt={category.strCategory}
                        width={200}
                        height={200}
                    />
                    <h2>{category.strCategory}</h2>
                    <p>{category.strCategoryDescription}</p>
                </div>
            ))}
        </main>
    );
}
