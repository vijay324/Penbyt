import mongoose, { Document, Schema } from "mongoose";

interface ICareer extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  position: string;
  githubKnowledge: boolean;
  yearOfStudy: string;
  resume: string;
  portfolio?: string;
  additionalInfo?: string;
  createdAt?: Date;
}

const careerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  position: { type: String, required: true },
  githubKnowledge: { type: Boolean, required: true },
  yearOfStudy: {
    type: String,
    enum: ["p1", "p2", "cse", "eee", "ece", "mech", "civil", "mme", "chemical"],
    required: true,
  },
  resume: { type: String, required: true },
  portfolio: { type: String },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Career =
  mongoose.models.Career || mongoose.model<ICareer>("Career", careerSchema);

export default Career;
