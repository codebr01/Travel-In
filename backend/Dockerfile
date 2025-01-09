# Use a imagem oficial do Node.js
FROM node:22

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia arquivos de dependências
COPY package.json package-lock.json tsconfig.json ./

# Instala dependências
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

# Copia os demais arquivos do backend
COPY . .

# Compila o código TypeScript para JavaScript
# RUN npx tsc

# Expõe a porta usada pelo backend
EXPOSE 3333

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
