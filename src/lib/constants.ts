/**
 * Application constants
 */

// App metadata
export const APP_NAME = 'Rupee-Setu';
export const APP_DESCRIPTION = 'Your Money, Your Control';

// Date formats
export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATE_INPUT_FORMAT = 'yyyy-MM-dd';

// Expense categories
export const EXPENSE_CATEGORIES = [
  'Food',
  'Transport',
  'Shopping',
  'Entertainment',
  'Education',
  'Health',
  'Bills',
  'Other',
] as const;

// Income sources
export const INCOME_SOURCES = [
  'Parents',
  'Salary',
  'Freelance',
  'Scholarship',
  'Investment',
  'Gift',
  'Other',
] as const;

// Chart colors
export const CHART_COLORS = {
  primary: '#2CA87F',
  secondary: '#60A5FA',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
} as const;

// Category colors for charts
export const CATEGORY_COLORS: Record<string, string> = {
  Food: '#EF4444',
  Transport: '#F59E0B',
  Shopping: '#EC4899',
  Entertainment: '#8B5CF6',
  Education: '#3B82F6',
  Health: '#10B981',
  Bills: '#6B7280',
  Other: '#64748B',
};

// Budget alert thresholds
export const BUDGET_THRESHOLDS = {
  warning: 0.8, // 80%
  danger: 0.95, // 95%
} as const;

// Pagination
export const ITEMS_PER_PAGE = 10;

// Cache keys
export const CACHE_KEYS = {
  PROFILE: 'profile',
  INCOME: 'income',
  EXPENSES: 'expenses',
  THEME: 'theme-preference',
} as const;

// Query stale time (5 minutes)
export const QUERY_STALE_TIME = 5 * 60 * 1000;

// Query cache time (10 minutes)
export const QUERY_CACHE_TIME = 10 * 60 * 1000;

// Maximum file upload size (5MB)
export const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Supported image formats
export const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/webp'];

// Routes
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  AUTH: '/auth',
  PROFILE: '/profile',
} as const;
