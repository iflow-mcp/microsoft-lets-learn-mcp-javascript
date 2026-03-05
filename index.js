#!/usr/bin/env node
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 使用tsx运行main.ts
const mainTsPath = join(__dirname, 'main.ts');
const child = spawn('npx', ['tsx', mainTsPath], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (err) => {
  console.error('Failed to start subprocess:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});