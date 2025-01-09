# Use uma imagem oficial do Node.js como base
FROM node:22

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie os arquivos de configuração do Node.js
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do frontend para o container
COPY . .

# Exponha a porta do Vite (geralmente 5173)
EXPOSE 5173

# Comando para rodar o frontend no modo de desenvolvimento
CMD ["npm", "run", "dev"]
