 import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react'

 // https://vite.dev/config/
 export default defineConfig({
   plugins: [react()],
   server:{
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      }
    }
   }
 })


// filepath: c:\Jeremy\POS-1\frontend\vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })