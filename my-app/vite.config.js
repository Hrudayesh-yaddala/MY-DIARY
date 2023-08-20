import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{host:true}
})




// vite.config.js
// import reactRefresh from '@vitejs/plugin-react-refresh';

// export default {
//   plugins: [reactRefresh()],
//   server:{host:true}
  
//   // ... other configuration
// };
