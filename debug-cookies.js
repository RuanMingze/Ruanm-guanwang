// Cookie调试脚本
(function() {
    console.log('=== Cookie调试信息 ===');
    
    // 显示当前域名
    console.log('当前域名:', window.location.hostname);
    
    // 显示当前路径
    console.log('当前路径:', window.location.pathname);
    
    // 显示所有Cookie
    console.log('当前Cookie:', document.cookie);
    
    // 显示localStorage内容
    console.log('localStorage内容:');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(key + ':', localStorage.getItem(key));
    }
    
    // 测试设置Cookie
    console.log('=== 测试设置Cookie ===');
    try {
        const testValue = 'test_' + Date.now();
        document.cookie = 'debug_test=' + testValue + ';path=/;SameSite=Lax';
        console.log('设置测试Cookie: debug_test=' + testValue);
        
        // 立即读取测试
        console.log('立即读取Cookie:', document.cookie);
    } catch (e) {
        console.error('设置Cookie时出错:', e);
    }
    
    console.log('=== 调试完成 ===');
})();