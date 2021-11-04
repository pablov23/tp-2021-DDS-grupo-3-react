FROM node:14.15.4
WORKDIR /front
COPY package.json .
RUN yarn install
COPY . .
RUN npm rebuild node-sass
EXPOSE 3000
CMD ["yarn", "start"]