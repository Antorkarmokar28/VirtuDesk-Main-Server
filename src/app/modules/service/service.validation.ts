import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, { message: 'Title is required' }),
    shortDescription: z
      .string()
      .trim()
      .min(1, { message: 'Short description is required' }),
  }),
  isDeleted: z.boolean().optional().default(false),
});

const updateServiceValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .trim()
      .min(1, { message: 'Title is required' })
      .optional(),
    shortDescription: z
      .string()
      .trim()
      .min(1, { message: 'Short description is required' })
      .optional(),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const ServiceValidationSchema = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
