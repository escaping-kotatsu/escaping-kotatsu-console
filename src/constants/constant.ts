'use strict';

export const PORT = parseInt(process.env.PORT || '5000');
export const DOMAIN = process.env.DOMAIN || 'localhost';
export const DATABASE_URL_DEV = 'postgresql://postgres:password@postgres:5432/postgres_db';
export const DATABASE_URL = process.env.DATABASE_URL || DATABASE_URL_DEV;
export const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';
export const HASH_SECRET = process.env.HASH_SECRET || 'secret';
export const KOTATSU_IOT_KEY = process.env.KOTATSU_IOT_KEY || 'secret';
export const SESSION_AGE = parseInt(process.env.SESSION_AGE || `${1000 * 60 * 60 * 24 * 7}`); // one week
export const FIRST_USER_NAME = process.env.FIRST_USER_NAME || 'demo-user';
export const FIRST_USER_PASS = process.env.FIRST_USER_PASS || 'demo-pass';
export const FIRST_USER_BLE = process.env.FIRST_USER_BLE || '4ac8d5b2-6fa8-4866-a6b2-72e286749ba9';
export const COOKIE_OPTIONS: {
  domain: string;
  httpOnly: boolean;
  secure: boolean;
  sameSite: boolean | 'strict' | 'lax' | 'none';
  maxAge: number;
} = {
  domain: DOMAIN,
  httpOnly: true,
  secure: true,
  sameSite: DATABASE_URL == DATABASE_URL_DEV ? 'none' : 'strict',
  maxAge: SESSION_AGE,
};
