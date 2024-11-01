import { NextResponse } from "next/server";
import client from "@/app/lib/prisma";
import { Product } from "@/app/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("search");

  if (!searchQuery) {
    return NextResponse.json(
      { message: "No search query provided" },
      { status: 400 }
    );
  }

  const products: Product[] = await client.product.findMany();
  const currentProduct = products.find(
    (pro) =>
      pro.productName.toLocaleLowerCase() === searchQuery.toLocaleLowerCase()
  );

  if (!currentProduct) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(
    { product: currentProduct, message: "Product found" },
    { status: 200 }
  );
}
