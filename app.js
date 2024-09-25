const express = require('express');
const path = require('path');
const app = express();

// 定義伺服器的端口號
const PORT = process.env.PORT || 3000;

// 服務靜態文件 (如 CSS、JS)
app.use(express.static(path.join(__dirname)));

// 處理主頁的 GET 請求
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器正在 http://localhost:${PORT} 上運行`);
});
