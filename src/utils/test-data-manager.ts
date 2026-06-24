/**
 * Test Data Manager — loads and resolves JSON test fixtures
 * @author Tawheed Wani
 */

import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR = path.resolve(process.cwd(), 'src/data');

export function loadTestData<T>(fileName: string): T {
  const filePath = path.join(DATA_DIR, fileName.endsWith('.json') ? fileName : `${fileName}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T;
}

export function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateTimestamp(): string {
  return Date.now().toString();
}
