FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4700

RUN npx prisma generate

CMD ["npm","run","start"]