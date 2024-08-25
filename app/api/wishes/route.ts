import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const wishes = await prisma.guestWishes.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(wishes);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching wishes" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json();

    console.log("name", name);
    console.log("message", message);

    if (!name || !message) {
      return { error: "Name and message are required" };
    }

    const wish = await prisma.guestWishes.create({
      data: {
        name,
        message,
      },
    });

    return NextResponse.json(wish);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating wish" });
  }
}
