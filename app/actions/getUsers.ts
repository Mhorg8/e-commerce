"use server";
// imports
import client from "../lib/prisma";
import { Product, User } from "../types";

// types

export async function getUsers(filter?: string | null) {
  try {
    // Fetching products and users from the database once
    const products: Product[] = await client.product.findMany();
    const users: User[] = await client.user.findMany();

    let filteredProducts: Product[] = [];

    // Filter products if filter exists
    if (filter) {
      filteredProducts = products.filter((product) =>
        product.category.some((cate) => cate.includes(filter))
      );
    }

    return {
      products: filter ? filteredProducts : products,
      users,
      message:
        users.length > 0
          ? "Here you are. These are all the users."
          : "No users found in the database.",
    };
  } catch (error) {
    console.error("Error fetching data from the database:", error);

    return {
      message: "Could not fetch data from database.",
    };
  }
}
