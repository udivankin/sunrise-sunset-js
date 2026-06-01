import { defineConfig } from 'rolldown';

export default defineConfig([
  // Main ESM build
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      entryFileNames: 'index.js',
      format: 'esm',
      sourcemap: true,
    },
  },
  // Temporal ESM build
  {
    input: 'src/temporal.ts',
    output: {
      dir: 'dist',
      entryFileNames: 'temporal.js',
      format: 'esm',
      sourcemap: true,
    },
  },
  // Main CommonJS build
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      entryFileNames: 'index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  },
  // Temporal CommonJS build
  {
    input: 'src/temporal.ts',
    output: {
      dir: 'dist',
      entryFileNames: 'temporal.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  },
]);
