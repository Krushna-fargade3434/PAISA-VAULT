import { describe, it, expect } from 'vitest';
import { formatCurrency, formatDate, calculatePercentage, truncateText } from '@/lib/helpers';

describe('Helper Functions', () => {
  describe('formatCurrency', () => {
    it('formats positive numbers correctly', () => {
      expect(formatCurrency(1000)).toBe('₹1,000');
      expect(formatCurrency(1234.56)).toBe('₹1,234.56');
    });

    it('formats zero', () => {
      expect(formatCurrency(0)).toBe('₹0');
    });

    it('formats negative numbers', () => {
      expect(formatCurrency(-500)).toBe('-₹500');
    });
  });

  describe('calculatePercentage', () => {
    it('calculates percentage correctly', () => {
      expect(calculatePercentage(50, 100)).toBe(50);
      expect(calculatePercentage(25, 100)).toBe(25);
    });

    it('returns 0 when total is 0', () => {
      expect(calculatePercentage(50, 0)).toBe(0);
    });

    it('rounds to nearest integer', () => {
      expect(calculatePercentage(33, 100)).toBe(33);
    });
  });

  describe('truncateText', () => {
    it('truncates long text', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
    });

    it('does not truncate short text', () => {
      expect(truncateText('Hi', 5)).toBe('Hi');
    });

    it('handles exact length', () => {
      expect(truncateText('Hello', 5)).toBe('Hello');
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15');
      const formatted = formatDate(date);
      expect(formatted).toContain('Jan');
      expect(formatted).toContain('15');
    });
  });
});
