'use strict';

const fs = require('fs');

//lire des fichiers sur le pc
/*fs.readFile('./fichier.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); // la data sort en binaire
});*/

/*const readStream = fs.createReadStream("./fichier.txt");
readStream.on('data', (chunk) => {
    console.log('----- new chunk -----');
    console.log(chunk);
});*/

// �crire ou cr�er un fichier
/*fs.writeFile('./fichiercr��.txt',"truc a ecrire", () => {
    console.log("le fichier a bien �t� cr��");
});*/

//cr�er un dossier
/*fs.mkdir("./nouveau_dossier", () => {
    console.log("le dossier a bien ete cree");
});*/

//supprimer un dossier
/*fs.rmdir("./nouveau_dossier", () => {
    console.log("le dossier est supp");
});*/

//supprimer un fichier
/*fs.rm("./fichiercr��.txt", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("le fichier a ete supp");
});*/


const famille = ['papa', 'maman', 'nicolas', 'emma', 'adrien'];
const ages = [53, 54, 19, 22, 23];

module.exports = {
    family: famille,
    ages: ages
};
