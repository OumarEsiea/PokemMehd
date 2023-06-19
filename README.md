# Projet Cordova + PokeAPI

Ce projet est une application mobile développée par Mehdi AIT HAMMA, Lucas GONZALEZ et Eric PAN avec Cordova qui permet d'afficher une liste de Pokémon à partir de l'API PokeAPI. L'application offre les fonctionnalités suivantes :

- Affichage d'une liste de Pokémon à partir de l'API PokeAPI.
- Navigation entre les listes précédentes et suivantes pour afficher plus de Pokémon.
- Affichage des détails d'un Pokémon sélectionné dans un template de description.
- Manipulation et persistance des données des Pokémon.
- Lecture d'une note audio en cliquant sur un bouton spécifique à la description du Pokémon.
- Vibration à la fin d'une attaque pour les Pokémon Pikachu et Bulbasaur.

## Prérequis

Avant de lancer l'application, assurez-vous d'avoir les éléments suivants installés :

- Node.js
- Cordova CLI

## Installation

1. Clonez ce dépôt de projet :

   git clone https://github.com/MehdiiAH/DevMobilePokemon


2. Accédez au répertoire du projet :

   cd ProjetDevMobile


3. Installez les dépendances du projet :

   npm install



## Exécution

Pour lancer l'application dans un navigateur web, exécutez la commande suivante :

    cordova run browser


Cela ouvrira l'application dans votre navigateur par défaut.

## Utilisation

- Une fois l'application lancée, vous verrez une liste de Pokémon affichée.
- Utilisez les boutons "Précédent" et "Suivant" pour naviguer entre les listes de Pokémon.
- Cliquez sur un Pokémon pour afficher ses détails dans la section de description.
- Dans la section de description, vous trouverez le nom du Pokémon, sa liste d'attaques et un bouton "Play Pikachu Sound" pour déclencher la lecture d'une note audio spécifique.
- Pour les Pokémon Pikachu et Bulbasaur, une vibration se produira à la fin de l'attaque.

## Licence

Ce projet est sous licence [Apache License 2.0](LICENSE).
