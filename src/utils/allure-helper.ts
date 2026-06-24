/**
 * Allure Helper — wraps allure-playwright APIs for clean step/label usage
 * @author Tawheed Wani
 */

import { test } from '@playwright/test';

export async function step<T>(name: string, fn: () => Promise<T>): Promise<T> {
  return test.step(name, fn);
}

export function attachText(name: string, body: string): void {
  test.info().attachments.push({
    name,
    contentType: 'text/plain',
    body: Buffer.from(body),
  });
}

export function attachJson(name: string, data: unknown): void {
  test.info().attachments.push({
    name,
    contentType: 'application/json',
    body: Buffer.from(JSON.stringify(data, null, 2)),
  });
}
