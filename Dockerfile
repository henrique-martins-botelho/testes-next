# Usar uma imagem base com Node.js
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto
COPY . .

# Instalar dependências usando pnpm
RUN npm install -g pnpm && pnpm install

# Expôr a porta (ajuste conforme necessário)
EXPOSE 3000

# Comando para rodar o Turbo (ou o script de start)
CMD ["pnpm", "dev"]
