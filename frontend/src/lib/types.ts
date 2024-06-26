import { z } from "zod";

export const candidateSignUpSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email(),
    institute: z.string(),
    phone: z.string().min(10, "Please enter a valid phone number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: `Passwords do not match`,
      path: ["confirmPassword"],
    }
  );

export type candidateSignUpSchemaType = z.infer<typeof candidateSignUpSchema>;

export const candidateLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type candidateLoginSchemaType = z.infer<typeof candidateLoginSchema>;
