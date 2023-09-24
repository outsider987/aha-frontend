import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";
import dns from 'dns'
dotenv.config();

dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/aha-frontend/' : '/',
  plugins: [react()],
  server: {
  
    https: process.env.NODE_ENV === 'production' ,
    cors: true,
    open: true,
    
    
  },
 
  resolve:{
    alias:{
      '~': '/src'
    }
  },
  define: {
    "process.env": { ...process.env },
  },
  
  


})
