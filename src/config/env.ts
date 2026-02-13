/**
 * Environment variable validation
 * Ensures all required environment variables are present at build time
 */

interface EnvConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

function validateEnv(): EnvConfig {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  const missingVars: string[] = [];

  if (!supabaseUrl) missingVars.push('VITE_SUPABASE_URL');
  if (!supabaseAnonKey) missingVars.push('VITE_SUPABASE_PUBLISHABLE_KEY');

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missingVars.join('\n')}\n\nPlease check your .env file.`
    );
  }

  return {
    supabaseUrl,
    supabaseAnonKey,
  };
}

export const env = validateEnv();
