import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    define: {
      'process.env.GOOGLE_APIKEY': JSON.stringify(env.GOOGLE_APIKEY),
      'process.env.REACT_APP_BACKEND_URL': JSON.stringify(env.REACT_APP_BACKEND_URL),
      'process.env.WEB_SOCKET_BASE_URL': JSON.stringify(env.WEB_SOCKET_BASE_URL)
    }
  }

})