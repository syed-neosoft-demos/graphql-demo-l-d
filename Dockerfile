# set the base image to create the image form
FROM node:20-alpine

# set the working directory to /codespace
WORKDIR /codespace

COPY package*.json .

RUN npm install

COPY . . 

EXPOSE 3002 

# command to run the app
CMD npm rund dev