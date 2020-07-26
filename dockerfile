# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY start.sh .
RUN npm install
# add app
COPY ./src ./src
COPY ./public ./public

RUN wget https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.14/swagger-codegen-cli-2.4.14.jar -O swagger-codegen-cli.jar

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

EXPOSE 3000

# start app
CMD ./start.sh