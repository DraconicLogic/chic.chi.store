import { prisma } from '@/lib/prisma';

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
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {product.title}
                        </h2>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <p className="text-lg font-bold">${(product.price / 100).toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
