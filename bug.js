```javascript
// ... your Tailwind CSS configuration
module.exports = {
  // ... other configurations
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // <-- this line may cause the issue
  theme: {
    extend: {},
  },
  plugins: [],
};
```