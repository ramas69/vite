# Utiliser l'image de base node
FROM node:alpine

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer toutes les dépendances (y compris devDependencies)
RUN npm install

# Copier tout le projet dans le conteneur
COPY . .

# Exposer le port que l'application utilise (ici 3001)
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["npm", "start"]
