/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import chalk from 'chalk';
import fs from 'fs';
import { ProjectConfig } from '../config/types';
import { getRootDir } from './get-root-dir';

const rootDir = getRootDir();

export function getPkgJSON(): any {
  if (!fs.existsSync(`${rootDir}/package.json`)) {
    console.log(chalk.red.bold(`package.json file not found at path ${rootDir}`));
    process.exit(1);
  }

  return JSON.parse(fs.readFileSync(`${rootDir}/package.json`, 'utf8'));
}

export function writePkgJSON(data: any): void {
  fs.writeFileSync(`${rootDir}/package.json`, JSON.stringify(data, null, 2));
}

export function getProjectConfig(): ProjectConfig {
  return JSON.parse(process.env.MOOKME_PROJECT_CONFIG || '{}');
}