# personal-site

Asher Selwyn（叶志青）的个人主页：一页简历式作品集。用 Astro 生成纯静态文件，可部署到 Cloudflare Pages。没有统计脚本，也不依赖付费服务。

## 本地运行

需要 Node.js 20.3 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端提示的地址，默认是 <http://localhost:4321>。

构建生产文件，并在本地预览：

```bash
npm run build
npm run preview
```

`npm run build` 的输出目录是 `dist/`。

## 部署到 Cloudflare Pages

1. 打开 Cloudflare Dashboard，进入 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
2. 连接 GitHub 仓库 `Asher-Selwyn/personal-site`。
3. 构建设置：
   - **Framework preset**：Astro。列表里没有就选 **None**。
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - Node.js：20 或更高。仓库里的 `.node-version` 写的是 `20`。也可以在环境变量里设置 `NODE_VERSION=20`。
4. 保存并部署。之后推送到所连接的分支会自动重新构建。

## 改内容

关于、项目和联系方式都在 `src/data/site.ts`。

- 邮箱目前是占位 `your@email.com`，换成真实地址后再部署。
- 两张「待补充」项目卡片也在这个文件里，有公开项目后替换即可。
- 样式在 `src/styles/global.css`。
