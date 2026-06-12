DNS 无法解析该镜像域名，镜像方案失效，需要换回原地址改用其他可行方案。
步骤 1：先把远程地址恢复成官方原地址
bash
运行
git remote set-url origin https://github.com/guo1596387/guo1596387.github.io.git
验证是否改回：
bash
运行
git remote -v
方案 A：配置 SSH 推送（稳定推荐，一劳永逸）
1. 修改远程地址为 SSH 格式
bash
运行
git remote set-url origin git@github.com:guo1596387/guo1596387.github.io.git
2. 本机生成 SSH 密钥（未配置过才需要执行）
bash
运行
ssh-keygen -t ed25519 -C "你注册GitHub的邮箱"
一路回车默认保存即可，不要设置密码。
3. 复制公钥
Windows 路径：C:\Users\你的用户名\.ssh\id_ed25519.pub
用记事本打开，完整复制全部内容。
4. GitHub 网页添加公钥
GitHub 头像 → Settings → SSH and GPG keys → New SSH key
标题随便填，粘贴公钥内容，保存。
5. 测试连通 + 推送
bash
运行
ssh -T git@github.com
git push
