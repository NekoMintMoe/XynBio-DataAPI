FROM node:18.14.0-bullseye
RUN npm install -g yarn && yarn && yarn %build
EXPOSE 8030
ENTRYPOINT ["yarn", "%start"]