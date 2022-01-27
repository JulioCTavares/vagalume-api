FROM node


WORKDIR /usr/app

ENV NODE_ENV=production

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

RUN npm install

CMD ["npm", "run", "dev"]