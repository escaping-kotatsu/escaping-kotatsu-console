'use strict';

export const PORT = parseInt(process.env.PORT || '5000');
export const DOMAIN = process.env.DOMAIN || 'localhost:5000';
export const DATABASE_URL_DEV = 'postgresql://postgres:postgres@localhost:5433/postgres'; // from src/db/docker-compose.yaml
export const DATABASE_URL = process.env.DATABASE_URL || DATABASE_URL_DEV;
export const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';
export const SESSION_AGE = parseInt(process.env.PORT || `${1000 * 60 * 60 * 24 * 7}`); // one week
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
  sameSite: 'strict',
  maxAge: SESSION_AGE,
};
