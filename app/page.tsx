import CategoryPanel from "@/components/CategoryPanel";
import { getCategories } from "@/utils/data";
import _ from "lodash";

export default async function HomePage() {
    const categories = await getCategories();

    return (
        <>
            <CategoryPanel categories={categories} />
        </>
    );
}
