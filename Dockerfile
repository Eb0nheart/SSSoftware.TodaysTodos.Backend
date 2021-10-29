FROM node:16
WORKDIR /usr/src/todaystodos

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 4000
CMD ["node", "src/app.js"]