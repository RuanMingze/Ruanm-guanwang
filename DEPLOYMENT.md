# 部署说明

## 前端部署到Netlify

### 1. 准备工作
1. 确保所有HTML文件都已正确引用`config.js`
2. 修改`config.js`中的`BACKEND_URL`为您的实际后端服务器地址

### 2. 部署步骤
1. 将以下文件和文件夹上传到Netlify：
   - 所有HTML文件（home.html, login.html, register.html, toolbox.html, avatar-settings.html, oauth-callback.html）
   - config.js
   - 所有CSS和图片资源
   - 阮铭泽工具箱文件夹

2. 在Netlify控制台设置重定向规则：
   ```
   /oauth-callback  /oauth-callback.html  200
   ```

## 后端部署到Windows Server

### 1. 环境准备
确保Windows Server上已安装：
- Node.js (版本16或更高)
- npm

### 2. 部署步骤
1. 将`backend`文件夹复制到服务器
2. 在服务器上进入`backend`目录并安装依赖：
   ```bash
   npm install
   ```
3. 启动服务：
   ```bash
   npm start
   ```
   默认端口为3001

### 3. 防火墙设置
确保Windows防火墙允许3001端口的入站连接

### 4. 设置为Windows服务（可选）
为了确保服务在服务器重启后自动启动，可以将其设置为Windows服务：

1. 安装`pm2`：
   ```bash
   npm install -g pm2
   ```

2. 使用pm2启动应用：
   ```bash
   pm2 start server.js --name "ruanm-backend"
   ```

3. 设置pm2开机自启：
   ```bash
   pm2 startup
   pm2 save
   ```

## 配置说明

### 1. 修改后端地址
编辑`config.js`文件，将`BACKEND_URL`修改为您的服务器公网IP地址和端口：
```javascript
BACKEND_URL: 'http://your-server-ip:3001'
```

### 2. GitHub OAuth配置
确保GitHub OAuth应用的回调URL设置为：
```
https://your-netlify-site.netlify.app/oauth-callback
```

## 常见问题

### 1. CORS错误
如果遇到CORS错误，请在后端server.js中确保已正确配置cors中间件：
```javascript
app.use(cors());
```

### 2. 网络连接问题
确保：
1. 服务器防火墙允许3001端口
2. 服务器有公网IP或域名
3. DNS解析正常

### 3. SSL证书问题
如果使用HTTPS，可能需要为后端服务器配置SSL证书，或者在前端代码中处理混合内容问题。