FROM node

WORKDIR C:\Users\User\Desktop\dockerConfig

COPY package.json ./

RUN npm install -g ts-node-dev

COPY . .

EXPOSE 3335

CMD ["npm", "run", "dev"]