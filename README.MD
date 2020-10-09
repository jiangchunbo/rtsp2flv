## 安装 node.js
node.js 包含 node + npm 工具


## 安装模块依赖
进入项目目录，使用如下命令安装 js 依赖。
```bash
npm install 
```
依赖存在于 ./node_modules 中


## 修改 WebSocket
这是一个基于 WebSocket 的转流脚本，（Find）查找下面，根据需要，改掉默认的端口号。
````javascript
const port = 39999;
````

### 启动方式
这是一个小型 JS 脚本服务器，用 node 引擎执行，输入如下命令执行 JS 脚本。
```bash
node rtsp2flv.js 
```
rtsp2flv.js 就是文件夹下的文件