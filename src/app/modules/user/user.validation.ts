import { z } from 'zod';

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, 'Name is required'),
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    role: z.enum(['admin', 'user']).default('user'),
    isDeleted: z.boolean().optional().default(false),
  }),
});
