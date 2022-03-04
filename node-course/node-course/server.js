//importation du module http de node
const http = require('http');
const fs = require('fs');

const _ = require('lodash'); // on peut l'appeler comme on veut mais il est commun de l'appeler comme ça

//creation du server
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');

    // la fonction once permet d'effectuer une seule fois la fonction à l'intérieur
    const fonction = _.once(() => {
        console.log('salut');
    });

    //methode pour envoyer un fichier html en reponse
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.write(data);
            res.end();
        }
    });

    //methode pour ecrire quelque chose en reponse (texte)
    /*res.write('salut comment ca va', (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.end();*/
});


server.listen(3000, "localhost", () => {
    console.log("j'ecoute ce qu'il se passe sur le serveur 3000");
});