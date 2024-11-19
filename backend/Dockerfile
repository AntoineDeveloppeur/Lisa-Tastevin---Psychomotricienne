# From the latest nodejs lts version
FROM node:18.14.2-alpine

# Create our app folder
RUN mkdir /app
# Set is as cwd
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+) doing this will cache this action untill package.json or package-lock.json is modified
COPY --chown=node package*.json ./

# Install dependencies
RUN npm install

COPY . .

# Set host to 0.0.0.0 to bind on all container network interfaces
# This is usefull because we will create a docker network and bind the container to it
ENV HOST=0.0.0.0
# Set the port of the our app to 80 (default http port)
ENV PORT=80
# Expose the port so we can see it during inspection
EXPOSE 80

CMD ["node", "server.js"]