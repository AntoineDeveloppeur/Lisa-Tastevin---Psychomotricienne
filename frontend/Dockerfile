# stage 1 - Build our application
# From the latest nodejs lts version
#FROM node:18.14.2-alpine AS builder

# Create our app folder
#RUN mkdir /app
# Set is as cwd
#WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+) doing this will cache this action untill package.json or package-lock.json is modified
#Je n'ai pas de package.json donc j'enlève la ligne
#COPY --chown=node package*.json ./

# Install dependencies
#RUN npm install

# Bundle app source code
#COPY --chown=node . .

# Pas besoin de builder pour ce projet
#RUN npm run build

# stage 2 - Create app image
# From latest nginx version on alpine to have a small image
#FROM nginx:1.23.3-alpine

# Copy our build directory
#COPY --from=builder /app/build /app

# Copy our default nginx config
#COPY ./server.nginx /etc/nginx/conf.d/default.conf



# Utiliser directement Nginx sans une étape de construction
FROM nginx:1.23.3-alpine

# Copier tous les fichiers du répertoire courant dans le dossier /app de Nginx
COPY . /app

# Copier la configuration Nginx personnalisée
COPY ./server.nginx /etc/nginx/conf.d/default.conf
