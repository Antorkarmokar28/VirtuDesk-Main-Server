import { model, Schema } from "mongoose";
import { IHero } from "./hero.interface";

const createHeroModelSchema = new Schema<IHero>(
  {
    title: { type: String, required: true, trim: true, unique: true },
    subtitle: { type: String, required: true, trim: true, unique: true },
    backgroundImage: { type: String },
  },
  { timestamps: true }
);

export const Hero = model<IHero>("Hero", createHeroModelSchema);
