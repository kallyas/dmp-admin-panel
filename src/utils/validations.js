import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const vendorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  trade_name: z.string().min(1, 'Trade name is required'),
  phone_number: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  physical_address: z.string().min(1, 'Physical address is required'),
  postal_address: z.string().optional(),
});

export const staffSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone_number: z.string().min(1, 'Phone number is required'),
  role: z.string().min(1, 'Role is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').optional(),
});

export const routeSchema = z.object({
  name: z.string().min(1, 'Route name is required'),
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  distance: z.number().min(0, 'Distance must be positive').optional(),
  duration: z.number().min(0, 'Duration must be positive').optional(),
});
