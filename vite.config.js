import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// const cherryPickedKeys = [
//   'Service_ID',
//   'Template_ID',
//   'Public_Key'
// ];

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   const processEnv = {};
//   cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]));

//   return {
//     define: {
//       'process.env': processEnv,
//     },
//     plugins: [react()],
//   };
// });