import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // 네트워크 접근 허용
  },
  // Vite의 base 설정을 배포 경로와 맞춤
  base: process.env.NODE_ENV === 'production' ? '/react_shoppingmall/' : '/',
});
