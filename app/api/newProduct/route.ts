import client from "@/app/lib/prisma";
import { Product } from "@/app/types";
import { writeFile } from "fs/promises"; // Use promises version of fs
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    // Parse incoming FormData
    const formData = await req.formData();

    const productName = formData.get("productName") as string;
    const price = formData.get("price") as string;
    const stock = formData.get("stock") as string;
    const color = formData.get("color") as string;
    const desc = formData.get("desc") as string;
    const rate = formData.get("rate") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File; // Single file

    // Validate required fields
    if (
      !productName ||
      !price ||
      !stock ||
      !color ||
      !desc ||
      !rate ||
      !category ||
      !image // Ensure an image is uploaded
    ) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }

    // Check if the product already exists
    const isExist = await client.product.findUnique({
      where: { productName },
    });

    if (isExist) {
      return NextResponse.json(
        { message: "Product name already exists" },
        { status: 400 }
      );
    }
    const colors = color.split(" ,");
    const categories = category.split(",");
    console.log(categories);

    // Use the original file name
    const originalFileName = image.name; // Get original filename
    const path = join(process.cwd(), "public", originalFileName); // Save to public folder

    // Read image file buffer and save it
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(path, buffer);

    // File URL to store in the database
    const fileUrl: string = `/${originalFileName}`;

    // Create a new product entry in the database
    const product: Product = await client.product.create({
      data: {
        productName,
        price: parseFloat(price),
        stock: parseInt(stock, 10),
        category: categories, // If category is supposed to be an array
        desc,
        quantity: 1,
        color: colors,
        rate: parseFloat(rate),
        image: fileUrl, // Save the single image URL
      },
    });

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
