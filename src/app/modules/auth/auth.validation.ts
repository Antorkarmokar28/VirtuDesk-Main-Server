import { z } from 'zod';
// user login validation defination schema
export const authValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password is required!' }),
  }),
});
// user refresh token validation defination schema
export const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: "Refresh token is required!",
    }),
  }),
});