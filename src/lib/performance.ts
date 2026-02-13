/**
 * Performance monitoring utilities
 * Use these to track and optimize application performance
 */

/**
 * Measure component render time
 */
export const measureRenderTime = (componentName: string, callback: () => void) => {
  if (import.meta.env.DEV) {
    const start = performance.now();
    callback();
    const end = performance.now();
    console.log(`[Performance] ${componentName} rendered in ${(end - start).toFixed(2)}ms`);
  } else {
    callback();
  }
};

/**
 * Log performance metrics
 */
export const logPerformanceMetrics = () => {
  if (import.meta.env.DEV && 'performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfData) {
      console.group('📊 Performance Metrics');
      console.log(`DNS Lookup: ${(perfData.domainLookupEnd - perfData.domainLookupStart).toFixed(2)}ms`);
      console.log(`TCP Connection: ${(perfData.connectEnd - perfData.connectStart).toFixed(2)}ms`);
      console.log(`Request Time: ${(perfData.responseStart - perfData.requestStart).toFixed(2)}ms`);
      console.log(`Response Time: ${(perfData.responseEnd - perfData.responseStart).toFixed(2)}ms`);
      console.log(`DOM Processing: ${(perfData.domComplete - perfData.domInteractive).toFixed(2)}ms`);
      console.log(`Load Complete: ${(perfData.loadEventEnd - perfData.loadEventStart).toFixed(2)}ms`);
      console.log(`Total Load Time: ${(perfData.loadEventEnd - perfData.fetchStart).toFixed(2)}ms`);
      console.groupEnd();
    }
  }
};

/**
 * Track API call performance
 */
export const trackAPICall = async <T>(
  apiName: string,
  apiCall: () => Promise<T>
): Promise<T> => {
  const start = performance.now();
  
  try {
    const result = await apiCall();
    const end = performance.now();
    
    if (import.meta.env.DEV) {
      console.log(`[API] ${apiName} completed in ${(end - start).toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const end = performance.now();
    
    if (import.meta.env.DEV) {
      console.error(`[API] ${apiName} failed after ${(end - start).toFixed(2)}ms`, error);
    }
    
    throw error;
  }
};

/**
 * Monitor bundle size in development
 */
export const logBundleSize = () => {
  if (import.meta.env.DEV && 'performance' in window) {
    const resources = performance.getEntriesByType('resource');
    const jsResources = resources.filter((r) => r.name.endsWith('.js'));
    const cssResources = resources.filter((r) => r.name.endsWith('.css'));
    
    const totalJSSize = jsResources.reduce((acc, r) => {
      const size = (r as PerformanceResourceTiming).transferSize || 0;
      return acc + size;
    }, 0);
    
    const totalCSSSize = cssResources.reduce((acc, r) => {
      const size = (r as PerformanceResourceTiming).transferSize || 0;
      return acc + size;
    }, 0);
    
    console.group('📦 Bundle Sizes');
    console.log(`Total JS: ${(totalJSSize / 1024).toFixed(2)} KB`);
    console.log(`Total CSS: ${(totalCSSSize / 1024).toFixed(2)} KB`);
    console.log(`Total: ${((totalJSSize + totalCSSSize) / 1024).toFixed(2)} KB`);
    console.groupEnd();
  }
};

/**
 * Use in development to track performance
 */
export const initPerformanceMonitoring = () => {
  if (import.meta.env.DEV) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        logPerformanceMetrics();
        logBundleSize();
      }, 0);
    });
  }
};
