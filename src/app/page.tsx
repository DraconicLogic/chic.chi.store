import { prisma } from '@/lib/prisma';
import ProductCard from '@/components/product/ProductCard';

export default async function HomePage() {
    const products = await prisma.product.findMany({
        where: {
            isSold: false, 
        },
    });
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Welcome to the Chic Chi Store
            </h1>
            <p>Find the perfect Chic fashion for your lifestyle.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
