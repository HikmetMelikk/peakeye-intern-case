// app/api/newsletter/route.ts
import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { email } = await request.json();

		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			return NextResponse.json(
				{ error: "Invalid e-mail address." },
				{ status: 400 }
			);
		}

		const newsletter = await prisma.newsletter.create({
			data: { email },
		});

		return NextResponse.json({
			message: "You have successfully subscribed to our newsletter.",
			data: newsletter,
		});
	} catch (error: any) {
		if (error.code === "P2002") {
			return NextResponse.json(
				{ error: "This e-mail already subscribed" },
				{ status: 409 }
			);
		}
		return NextResponse.json({ error: "An error occurred" }, { status: 500 });
	}
}
