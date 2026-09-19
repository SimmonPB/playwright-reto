import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 120000, // timeout máximo por test (2 minutos)
  use: {
    launchOptions: {
      slowMo: 1000, // milisegundos de pausa entre cada acción del navegador
      headless: false, // para verlo en pantalla, no en segundo plano
    },
  },
});