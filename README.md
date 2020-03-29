# 头像编辑插件react-avatar-editor

1. 实现头像的伸缩编辑

2. 截图并展示

图片处理：

canvas像素点 ---- node.getImage().toDataURL() -------> base64位编码 -------经fetch（...）转化 ----> blob二进制

----------------------------------------------> ajax上传至服务器

或者

----- window.URL.createObjectURL(blob) -------> 临时文件URL呈现在页面上
