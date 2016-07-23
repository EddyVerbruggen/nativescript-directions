/**
 * iOS and Android apis should match.
 * It doesn't matter if you export `.ios` or `.android`, either one but only one.
 */
export * from './yourplugin.ios';

// Export any shared classes, constants, etc.
export * from './yourplugin.common';