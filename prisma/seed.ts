import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: "Black Leather Knee High Boots",
        description: "Premium second-hand leather boots in excellent condition.",
        price: 7999,
        brand: "Dune",
        size: "UK 6",
        condition: "Excellent",
        images: [
          "https://placehold.co/600x800",
        ],
      },

      {
        title: "Brown Suede Ankle Boots",
        description: "Stylish suede ankle boots with minimal wear.",
        price: 4999,
        brand: "Zara",
        size: "UK 5",
        condition: "Good",
        images: [
          "https://placehold.co/600x800",
        ],
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });