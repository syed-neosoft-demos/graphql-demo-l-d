# set the base image to create the image form
FROM node:20-alpine

# create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to a group
# This is done to avoid running the dockerUser as root
# If the dockerUser is run as root, any vulnerability in the app can be exploited to gain access to the host system
# It's a good practice to run the app as a non-root user
RUN addgroup dockerUser && adduser -S -G dockerUser dockerUser


# set the user to run the dockerUser
USER dockerUser

# set the working directory to /codespace
WORKDIR /codespace

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package*.json ./

# change ownership of the /app directory to the dockerUser user
USER root

# change ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R dockerUser:dockerUser .

# change the user back to the app user
USER dockerUser

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . . 


# expose port 3002 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3002 

# command to run the app
CMD npm rund dev