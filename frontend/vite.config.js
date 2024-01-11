import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env)
  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    define: {
      'process.env.GOOGLE_APIKEY': JSON.stringify(env.GOOGLE_APIKEY)
    }
  }
  
})