# Site internet Le Rush


Git de développement du site du rush, toutes les phases du dév à la prod devront passer par ce git.

## Choix des technologies : 


- [React.js](https://reactjs.org/) comme framework JS
- [Materialize](https://materializecss.com/)comme framework CSS


## Lancement du site en local : 
Si vous voulez tester le site ou continuer à le développer, vous devez le lancer en local. 

### Dépendances : 
Avant de lancer le site, assurez-vous d'avoir installé : 
- [Node.js](https://nodejs.org/en/) ainsi que npm
- [MongoDB](https://www.mongodb.com/download-center/community) qui supporte la base de données

### Lancement
Afin de lancer le site en local, il faut : 
 1. Cloner le contenu du Git
 2. Ouvrir une instance du terminal et se placer dans le bon dossier avec : `$cd le-rush-website/front`
 3. Installer les packages appropriés avec la commande : `$npm install`
 4. Lancer le serveur front-end avec la commande : `$npm start`
 5. Lancer une instance de MongoDB avec la commande `$mongod`
 6. Ouvrir une deuxième instance du terminal et se placer dans le bon dossier avec : `$cd le-rush-website/back`
 7. Installer les packages appropriés avec la commande : `$npm install`
 8. Lancer le serveur back-end avec la commande : `$npm start`

# Suite du développement :
Il faut principalement ajouter 5 pages :
- [x] La page d'accueil
- [ ] La page "édition en cours"
- [ ] La page Inscriptions
- [ ] La page "éditions précédentes"
- [x] La page Contacts

