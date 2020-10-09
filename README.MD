# rtsp2flv.js
一个用 JavaScript 编写的 WebSocket 服务，通过如下请求格式获取 flv 格式的视频流
```
ws://${ip}:${port}/rtsp?url=${url}
```
url：rtsp 地址

如果 rtsp 地址包含额外参数，需要改写代码，代码中将参数是写死的：
```javascript
let url = req.query.url + '?streamform=rtp&standard=rtsp';
```


# 环境
安装 node.js（包含 node + npm）


# 构建项目
进入项目目录，使用如下命令安装 js 依赖。


```bash
npm install 
```
- 依赖存在于 ./node_modules 中
- 速度慢可以使用淘宝镜像


# 修改 WebSocket
这是一个基于 WebSocket 的 JavaScript 转流脚本，根据需要，修改 rtsp2flv.js 文件默认的端口号。
````javascript
const port = 39999;
````

# 启动方式
- 直接启动

这是一个小型 JS 脚本服务器，用 node 引擎执行，输入如下命令执行 JS 脚本。
```bash
node rtsp2flv.js 
```
rtsp2flv.js 就是文件夹下的文件

- 后台运行

```bash
nohup node rtsp2flv.js  > rtsp2flv.log 2>&1 &
``` 