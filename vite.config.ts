import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], //referencia o react como dependencia da build do Vite
  build: {
    // definimos que nossa build sera no Library Mode
    lib: {
      // referenciamos nosso arquivo de export da lib
      entry: path.resolve(__dirname, "src/lib/main.js"),
      // damos um nome para nossa biblioteca
      // seguindo o name no package.json
      name: "ReactExcelExporter",
      // definimos os tipos de outputs que queremos
      formats: ['es', 'umd'],
      // definimos como será o outpu dos nossos arquivos
      fileName: (format) => `react-excel-exporter-lib.${format}.js`,
    },
    // definimos as configuraçoes do rollup
    rollupOptions: {
      // referenciamos o react/react-dom como fontes externas
      external: ["react", "react-dom"],
      // referenciamos variaveis de import globais
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      // configuramos o plugin de typescript do rollup
      plugins: [
        typescript({
          'target': 'es2022',
          'rootDir': './src',
          'declaration': true,
          'declarationDir': './dist',
          exclude: './node_modules/**',
          allowSyntheticDefaultImports: true
        })
      ]
    },
  },
});
