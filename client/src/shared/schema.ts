import { z } from "zod";

// Contact form schema for frontend validation
export const insertContactInquirySchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  email: z.string().email("Please enter a valid email address"),
  discordServer: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  projectDetails: z.string().min(10, "Please provide more details (minimum 10 characters)"),
  budgetRange: z.string().min(1, "Budget range is required"),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;