FROM node:20

WORKDIR /app

# 复制整个应用到容器中
COPY ./ /app

# 安装依赖
RUN npm i -g pnpm

# 暴露 3000 端口
EXPOSE 3000

# 启动应用
CMD ["sh", "-c", "pnpm i && pnpm dev"]
