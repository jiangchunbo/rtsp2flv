const express = require("express");
const expressWebSocket = require("express-ws");
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath("D:\\Programs\\ffmpeg-20200628-4cfcfb3-win64-static\\bin\\ffmpeg");
// ffmpeg.setFfmpegPath("/opt/ffmpeg-4.3-amd64-static/ffmpeg");
const webSocketStream = require("websocket-stream/stream");


const port = 39999;

function localServer() {
    let app = express();
    app.use(express.static(__dirname));
    expressWebSocket(app, null, {
        perMessageDeflate: true
    });
    app.ws("/rtsp", rtspRequestHandle);
    app.listen(port);
    console.log("RTSP TO FLV Server Listened: " + port);
}

function rtspRequestHandle(ws, req) {
    console.log("rtsp request handle");
    const stream = webSocketStream(ws, {
        binary: true,
        browserBufferTimeout: 1000000
    }, {
        browserBufferTimeout: 1000000
    });
    let url = req.query.url + '?streamform=rtp&standard=rtsp';
    try {
        const options = {};
        const ss = ffmpeg(url).inputOptions([
            '-rtsp_transport', 'tcp',
            '-buffer_size', '512'
        ]).on("start", function () {
            console.log(url, "Stream started.");
        }).on("codecData", function () {
            console.log(url, "Stream codecData.")
            // 摄像机在线处理
        }).on("error", function (err) {
            console.log(url, "An error occured: ", err.message);
        }).on("end", function () {
            console.log(url, "Stream end!");
            // 摄像机断线的处理
        }).outputFormat("flv").videoCodec("copy").noAudio().pipe(stream);
        console.log(ss);
    } catch (error) {
        console.log(error);
    }
}

localServer();
