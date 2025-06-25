import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, { message: 'Title is required' }),
    shortDescription: z
      .string()
      .trim()
      .min(1, { message: 'Short description is required' }),
  }),
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
  }),
});

export const ServiceValidationSchema = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
