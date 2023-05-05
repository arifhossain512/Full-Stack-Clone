FROM node:lts-alpine

WORKDIR /app



COPY Dockerfile .
COPY README.md .

COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client --only=production 

COPY api/package*.json api/
RUN npm run install-server --only=production 

COPY client/ client/

RUN npm run build --prefix client

COPY api/ api/




USER node 

CMD [ "npm", "start", "--prefix", "api"]

EXPOSE 8000