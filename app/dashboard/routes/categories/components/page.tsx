import prismadb from "@/lib/prismadb";

import {CategoryForm} from "./category-form";

const CategoryPage = async ({
                                params
                            }: {
    params: { categoryId: string, storeId: string }
}) => {
    const category = await prismadb.category.find({
        where: {
            id: params.categoryId
        }
    });

    const billboards = await prismadb.billboard.find({
        where: {
            storeId: params.storeId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm billboards={billboards} initialData={category}/>
            </div>
        </div>
    );
}

export default CategoryPage;
