import client from "@/app/lib/prisma";
import { User } from "@/app/types";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, email, password, isAdmin, verify, phone } = data;

  if (!username || !email || !password) {
    return NextResponse.json(
      { message: "pls fill all fields" },
      { status: 500 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const isExist = await client.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isExist) {
    return NextResponse.json(
      { message: "email already exists" },
      { status: 409 }
    );
  } else {
    const user: User = await client.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        isAdmin: isAdmin,
        verify: verify,
        phone: phone,
      },
    });

    return NextResponse.json(
      { message: "user created successfully", user },
      { status: 200 }
    );
  }
}
