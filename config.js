// 应用配置文件
// 在生产环境中，请根据实际部署情况修改以下配置

const AppConfig = {
  // 后端API地址
  // 请根据您的实际部署情况修改这个地址
  BACKEND_URL: 'http://your-windows-server-ip:3001',
  
  // GitHub OAuth配置
  GITHUB_OAUTH: {
    CLIENT_ID: 'Ov23liIzDeFcRlNZEMA4',
    // 注意：客户端密钥应该存储在后端，不应该暴露在前端代码中
    // 前端代码中不应该包含CLIENT_SECRET
  },
  
  // 应用基本信息
  APP: {
    NAME: 'Ruanm',
    VERSION: '1.0.0'
  },
  
  // 默认设置
  DEFAULTS: {
    THEME: 'light',
    LANGUAGE: 'zh',
    CITY: 'beijing'
  }
};

// 获取完整的API地址
function getApiUrl(endpoint) {
  return AppConfig.BACKEND_URL + '/api' + endpoint;
}