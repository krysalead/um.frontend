# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# add app
COPY ./src ./src
COPY ./public ./public

EXPOSE 3000

# start app
CMD ["npm", "start"]