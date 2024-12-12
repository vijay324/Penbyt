import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Feedback from "../../../models/Feedback";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { name, email, answers, comments } = body;

    const feedback = new Feedback({ name, email, answers, comments });
    await feedback.save();

    return NextResponse.json({ success: true, feedback });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error saving feedback",
      error,
    });
  }
}
