import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </div>

        <section>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-2xl font-semibold mt-4">
            £{(product.price / 100).toFixed(2)}
          </p>

          <dl className="mt-6 space-y-2">
            <div>
              <dt className="font-semibold">Brand</dt>
              <dd>{product.brand}</dd>
            </div>

            <div>
              <dt className="font-semibold">Size</dt>
              <dd>{product.size}</dd>
            </div>

            <div>
              <dt className="font-semibold">Condition</dt>
              <dd>{product.condition}</dd>
            </div>
          </dl>

          <p className="mt-6">
            {product.description}
          </p>
        </section>
      </div>
    </main>
  );
}