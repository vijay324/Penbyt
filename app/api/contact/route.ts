import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { name, email, subject, message } = body;

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error saving contact message",
      error,
    });
  }
}
