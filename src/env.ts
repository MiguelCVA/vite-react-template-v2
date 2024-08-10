/* eslint-disable @stylistic/max-len */
import { z } from 'zod'

export const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string(), // example
  VITE_ENABLE_API_DELAY:
    z.string().transform((value) => value === 'true'), // example
})

export const env = (() => {
  try {
    return envSchema.parse(import.meta.env)
  } catch (error) {
    console.error('Error configuring environment variables:', (error as Error).message)
    throw new Error('Verify that all environment variables are set correctly.')
  }
})()
