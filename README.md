# Project_NULL

这是一个用于承载 React + TypeScript 前端与 Node.js + NestJS 后端的 monorepo 仓库。

## 目录结构

```text
.
|-- .github/
|   `-- workflows/
|       `-- ci.yml
|-- apps/
|   |-- api/
|   `-- web/
|-- packages/
|   `-- shared/
|-- eslint.config.mjs
|-- package.json
`-- tsconfig.base.json
```

## 工作区说明

- `apps/web`：基于 React + TypeScript + Vite 的前端应用
- `apps/api`：基于 Node.js + NestJS 的后端服务
- `packages/shared`：前后端共享的类型定义与通用工具

## 常用命令

```bash
npm install
npm run lint
npm run typecheck
npm run test
npm run build
```

## 说明

- 当前 CI 流水线已基于 GitHub Actions 完成配置。
- 由于仓库中暂未提交 lockfile，CI 当前使用 `npm install` 安装依赖。
- 首次安装依赖后，可将 `package-lock.json` 提交到仓库，并将 CI 切换为 `npm ci` 以获得更稳定的构建结果。
