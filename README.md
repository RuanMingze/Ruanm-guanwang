# Ruanm 官网

Ruanm官方网站项目，包含完整的前端页面和后端服务。

## 项目结构

```
.
├── 首页 (home.html)
├── 登录页面 (login.html)
├── 注册页面 (register.html)
├── OAuth回调页面 (oauth-callback.html)
├── 头像设置页面 (avatar-settings.html)
├── 工具箱介绍页面 (toolbox.html)
├── 关于页面 (about.html)
├── 隐私政策页面 (privacy.html)
├── 使用条款页面 (terms.html)
├── 后端服务 (backend/)
├── 配置文件 (config.js)
├── 部署说明 (DEPLOYMENT.md)
└── 静态资源 (图片等)
```

## 功能特性

- 用户注册和登录系统
- GitHub OAuth第三方登录
- 用户头像上传和管理
- 响应式设计，支持深色/浅色主题
- 完整的用户认证和会话管理

## 技术栈

### 前端
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome 图标库

### 后端
- Node.js
- Express.js
- bcryptjs (密码加密)
- jsonwebtoken (JWT令牌)
- cors (跨域支持)

## 部署

详细部署说明请查看 [DEPLOYMENT.md](DEPLOYMENT.md) 文件。

## 开发

1. 克隆仓库
2. 安装依赖: `cd backend && npm install`
3. 启动后端服务: `npm start`
4. 在浏览器中打开前端页面

## 配置

修改 [config.js](config.js) 文件中的 `BACKEND_URL` 以适应您的部署环境。