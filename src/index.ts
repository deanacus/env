import { parse, config } from 'dotenv';
import { readFileSync } from 'fs';
import { resolve } from 'path';

config();

const loadEnv = (path = resolve(process.cwd(), '.env')) => {
  if (!!process.env.__dotEnvLoaded) {
    return;
  }

  try {
    const contents = readFileSync(path).toString();
    const parsed = parse(contents);
    Object.entries(parsed).forEach(([key, value]) => {
      if (!process.env[key]) {
        process.env[key] = value;
      }
    });
    process.env.__dotEnvLoaded = 'true';
  } catch (error) {
    throw new Error('Unable to load .env file');
  }
};

export const getEnv = (key: string, path?: string) => {
  try {
    loadEnv(path);

    const value = process.env[key];

    if (value && value !== undefined) {
      return value;
    }

    throw new Error(`${key} was not found in environment`);
  } catch (error) {
    throw error;
  }
};

export default getEnv;
