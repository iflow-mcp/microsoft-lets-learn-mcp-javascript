#!/usr/bin/env node
import { spawn } from 'child_process';

// 使用tsx运行main.ts
const child = spawn('npx', ['tsx', 'main.ts'], {
  stdio: 'inherit'
});

child.on('error', (err) => {
  console.error('Failed to start subprocess:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});