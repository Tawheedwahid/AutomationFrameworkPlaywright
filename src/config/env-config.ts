/**
 * Environment Configuration Loader
 * @author Tawheed Wani
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

export interface EnvConfig {
  ENV: string;
  BASE_URL: string;
  HEADLESS: boolean;
  BROWSER: string;
  API_BASE_URL: string;
}

const ENV_MAP: Record<string, Partial<EnvConfig>> = {
  dev: {
    BASE_URL: 'https://demoqa.com',
    API_BASE_URL: 'https://demoqa.com/api',
  },
  qa: {
    BASE_URL: 'https://demoqa.com',
    API_BASE_URL: 'https://demoqa.com/api',
  },
  staging: {
    BASE_URL: 'https://demoqa.com',
    API_BASE_URL: 'https://demoqa.com/api',
  },
};

export function loadEnvConfig(): EnvConfig {
  const env = process.env.ENV ?? 'qa';
  dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });
  dotenv.config({ path: path.resolve(process.cwd(), '.env') });

  const envDefaults = ENV_MAP[env] ?? ENV_MAP['qa'];

  return {
    ENV: env,
    BASE_URL: process.env.BASE_URL ?? envDefaults.BASE_URL!,
    API_BASE_URL: process.env.API_BASE_URL ?? envDefaults.API_BASE_URL!,
    HEADLESS: process.env.HEADLESS !== 'false',
    BROWSER: process.env.BROWSER ?? 'chromium',
  };
}
