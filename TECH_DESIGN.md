\# 技术设计文档 (Tech Design)



\## 技术栈选择

\- 前端：React + TypeScript + Vite

\- 样式：Tailwind CSS

\- 星空背景：HTML5 Canvas API

\- 路由：React Router

\- 数据存储（初期）：本地 JSON 或 localStorage（后续可接 Supabase）



\## 项目结构

```text

src/

&#x20; ├── components/   # 通用组件（导航、页脚、星空背景）

&#x20; ├── pages/        # 页面（首页、项目、博客、后台）

&#x20; ├── assets/       # 静态资源

&#x20; ├── data/         # 个人数据（JSON）

&#x20; └── App.tsx       # 路由配置

