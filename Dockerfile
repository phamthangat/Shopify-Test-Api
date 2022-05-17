FROM node:16.13.0-alpine3.13
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV USE_CACHE=true
EXPOSE 3000
CMD ["npm", "start"]