import { z } from "zod";
// Zod validation schema for create hero schema
const createHeroSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Title is required"),
    subtitle: z.string().trim().min(1, "Subtitle is required"),
    backgroundImage: z.string(),
  }),
});
// Zod validation schema for update hero schema
const updateHeroSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Title is required").optional(),
    subtitle: z.string().trim().min(1, "Subtitle is required").optional(),
    backgroundImage: z.string().optional(),
  }),
});

export const HeroValidationSchema = {
  createHeroSchema,
  updateHeroSchema,
};
