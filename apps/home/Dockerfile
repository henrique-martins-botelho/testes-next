# Usar uma imagem base com Node.js
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto
COPY . .

# Instalar dependências usando pnpm
RUN npm install -g pnpm && pnpm install

# Expôr a porta 3003 (a mesma configurada no script)
EXPOSE 3003

# Comando para rodar o aplicativo em desenvolvimento
CMD ["pnpm", "dev"]
