# Frontend Deployment Guide

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

For production, use your deployed backend URL:
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The `dist` folder will contain your production build.

## Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable: `VITE_API_URL`
4. Deploy!

## Deploy to Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `VITE_API_URL`
6. Deploy!

