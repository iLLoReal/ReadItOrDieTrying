import * as fs from 'fs';


export class ExtraireLesPartiesALire {
  constructor(
    private readonly fichier: fs.PathOrFileDescriptor,
  ) {
  }
  execute() {
    const fileContent = fs.readFileSync(this.fichier, 'utf-8');
    console.log(fileContent);
  }

}

/*
Logique du reader :

GENERAL:
    On veut pouvoir lire un fichier et renvoyer une liste de parties à lire
     fichier -> partiesALire

DELIMITER:
    Les parties à lire sont délimitées par un ensemble de délimiteurs
    Ces délimiteurs

 */