# Debugging White Screen Issue

## Quick Checks

1. **Open Browser Console (F12)**
   - Look for any red error messages
   - Check the Console tab for JavaScript errors
   - Check the Network tab to see if files are loading

2. **Check if Backend is Running**
   ```bash
   cd portfolio-backend
   npm run dev
   ```
   - The frontend should work even if backend is not running
   - But API calls will fail (this is expected)

3. **Verify Files are Loading**
   - Open Network tab in browser DevTools
   - Check if `main.jsx` and `style.css` are loading
   - Look for 404 errors

4. **Clear Cache and Restart**
   ```bash
   # Stop the dev server (Ctrl+C)
   # Delete Vite cache
   rm -rf node_modules/.vite
   # Or on Windows:
   Remove-Item -Recurse -Force node_modules\.vite
   
   # Restart
   npm run dev
   ```

5. **Check Environment Variables**
   - Make sure `.env` file exists in `my-portfolio` directory
   - Should contain: `VITE_API_URL=http://localhost:5000/api`

## Common Issues

### Issue: JavaScript Error in Console
- **Solution**: Check the error message and fix the code
- Common errors: Missing imports, syntax errors, undefined variables

### Issue: CSS Not Loading
- **Solution**: Check if Tailwind is properly configured
- Verify `postcss.config.js` and `tailwind.config.js` exist
- Check if `style.css` is imported in `main.jsx`

### Issue: React Not Rendering
- **Solution**: Check if React is properly installed
- Verify `main.jsx` is correct
- Check if `index.html` has the correct div id

### Issue: Backend Connection Errors
- **Solution**: This is normal if backend is not running
- The app should still render, just API calls will fail
- Start the backend server to fix API calls

## Test if React is Working

Add this to `HomePage.jsx` temporarily:

```jsx
function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Test - React is working!</h1>
    </div>
  )
}
```

If you see "Test - React is working!", then React is working and the issue is with components.
If you still see white screen, the issue is with React setup.

