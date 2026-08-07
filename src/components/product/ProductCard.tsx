import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <Link href={`/products/${product.id}`}>
            <Image
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
                width={300}
                height={300}
            />
            <h2 className="text-xl font-semibold mb-2">
                {product.title}
            </h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold">${(product.price / 100).toFixed(2)}</p>
            </Link>
        </article>
    );
}
