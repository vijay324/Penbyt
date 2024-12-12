import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Career from "../../../models/Career";

export async function POST(req: NextRequest) {
  try {
    console.log("Connecting to database...");
    await connectToDatabase();

    console.log("Parsing request body...");
    const body = await req.json();
    const {
      name,
      email,
      phoneNumber,
      position,
      githubKnowledge,
      yearOfStudy,
      resume,
      portfolio,
      additionalInfo,
    } = body;

    console.log("Validating required fields...");
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !position ||
      githubKnowledge === undefined ||
      !yearOfStudy ||
      !resume
    ) {
      console.log("Validation failed - Missing required fields");
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    console.log("Creating new career document...");
    const career = new Career({
      name,
      email,
      phoneNumber,
      position,
      githubKnowledge,
      yearOfStudy,
      resume,
      portfolio,
      additionalInfo,
    });

    console.log("Saving career document to database...");
    await career.save();

    console.log("Career document saved successfully");
    return NextResponse.json({ success: true, career });
  } catch (error) {
    console.error("Error processing request:", error);
    if (error instanceof Error) {
      console.error("Error saving application:", error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Error saving application",
          error: error.message,
        },
        { status: 500 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Unexpected error occurred",
        },
        { status: 500 }
      );
    }
  }
}
