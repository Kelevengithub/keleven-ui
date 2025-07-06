

import KelevenUI from './keleven-ui.js';

// Create an instance of the framework with options
const keleven = new KelevenUI({
  debug: true,   // Enable debug logs (remove in production)
  minify: false, // Enable if you want minified CSS output
});

// Example: Define some design tokens
keleven.defineTokens({
  primary: '#4caf50',
  secondary: '#ff9800',
  radius: '8px',
});

// Example: Register the default component (extend further as needed)
keleven.register('k-element', KelevenUI.Component);

// Initialize the framework (scans document for `[configure]` attributes)
document.addEventListener('DOMContentLoaded', () => {
  keleven.init();
});


window.Keleven = keleven;
