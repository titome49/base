# ASLOT « Box & Conteneurs » — note de livraison v1

## Choix
- Durée portée de 52,5 s à 65 s : la voix (30,2 s) est inchangée, chaque phrase démarre à +0,8 s de sa scène, et chaque action (cartons, signature, porte, anneau, colonnes) a le temps de se poser après sa phrase.
- Découpage : 5,5 / 6,5 / 8,5 / 6 / 5 / 9 / 5,5 / 6 / 6 / 7 s (scènes 1 à 10).
- Un seul décor qui se transforme : point → téléphone → contrat → badge → point → C4 → porte → tuile + anneau → parc → colonnes → deux écrans → parc → point → aplat vert → logo.
- Titres de scène courts (« Des cartons / plein les bras. », etc.) ; libellés modifiables dans chaque `compositions/sXX-*.html` (appel `AS.title`).

## Mesuré / vérifié
- `npx hyperframes check` : ok (0 erreur). Avertissements conservés : `#bg` imbriqué (fond décoratif), étiquettes des tuiles sous 28 px (décor, pas du texte à lire), point de fin de trait sur la signature (masqué par opacité).
- Images clés regardées à 2,5 / 9,2 / 17,2 / 22,2 / 29,6 / 37 / 44,6 / 50,5 / 55,5 / 63 s.
- Le son est mesuré, pas écouté.

## Ce qui manque
1. **Logo réel** : provisoire (marque dessinée + « aslot » en Montserrat). aslot.fr est bloqué depuis cet environnement et aucun fichier logo ASLOT trouvé sur le Drive.
2. **Musique** : aucune source accessible (connecteur ElevenLabs restreint sans musique, catalogue HeyGen non connecté).
3. **Bruitages spécifiques** (cartons, tampon, serrure, grincement, clac, tic-tac) : génération ElevenLabs refusée (« free generations busy »). Les bruitages génériques (whoosh, pop, tap, carillon, notification, scintillement) sont en place.
4. Version sans texte et déclinaison 9:16 : non faites (options).

## Plan le plus faible
Scène 9 (équipe) : la mise à jour simultanée se lit, mais les écrans restent abstraits ; avec plus de temps, un trait de synchronisation entre les deux appareils.
