GOAL:    un gérant de box/conteneurs comprend qu'ASLOT gère seul souscription, abonnement, attribution et accès, et retient « aslot.fr ».
OUTPUT:  HyperFrames, 1920 x 1080, 30 fps
TIME:    65 s x 30 = 1950 frames (prompt d'origine 52,5 s ; allongé pour laisser respirer chaque action après sa phrase)
VOICE:   ElevenLabs v3, « Stéphane », une prise de 30,2 s découpée en 10 phrases ; chaque phrase à +0,8 s du début de sa scène, jamais accélérée.
LOOK:    fond crème #F1EFE8, grands cercles #E9E4D8 qui dérivent (20-40 px sur 65 s) ; encre #35422D ; accent olive #4A5C3D
         (point vert, boutons, 2e ligne des titres) ; surlignage #E7DAC3 ; téléphone #1F2A1D ; état vert clair #DDE5D3.
         Montserrat 800 titres 76 px / -0,03 em ; label 22 px 700 capitales +0,28 em ; textes UI 600-700.
         Flat : ombre douce 0 18px 40px rgba(53,66,45,.12), rayons 14-22 px, pas de grain.
OBJECTS: parc = 8 box S, 6 M, 4 L, 5 conteneurs (nervures verticales) ; états Libre blanc, Loué #DDE5D3, Bientôt loué #CDD6DE,
         Hors service #E6C994 ; téléphone 300x620 cadre #1F2A1D ; contrat A4 avec ligne de signature ; tampon rond vert ;
         double porte de conteneur (nervures, 4 barres de fermeture) ; anneau 12 segments ; ordinateur portable.
         Léa : cheveux longs châtains, gilet terracotta manches retroussées, tee clair, jean, baskets blanches, boucles.
         Marc : barbe, veste de travail verte zippée, badge au cou, chaussures marron. Sophie : chignon, lunettes rondes, blazer ardoise.
MOTION:  entrées expo.out 0,6-0,8 s ; déplacements power2.inOut ; apparitions back.out(1.6) ; sorties power3.in, 40 % plus courtes.
         Titres : label qui se resserre, 2 lignes qui sortent d'un masque (0,7 s, 0,14 s d'écart), surlignage qui se dessine (0,6 s).
SHOTS:   01 0-5,5 Léa / cartons qui tombent et s'empilent       → le parc arrive
         02 5,5-12 Marc / parc de nuit qui s'allume, jour, états + légende → une tuile devient point vert
         03 12-20,5 point → téléphone ; Box S Complet, Conteneur plein écran, date, Souscrire → Souscrit
         04 20,5-26,5 téléphone → contrat, signature, tampon → badge « Abonnement activé »
         05 26,5-31,5 badge → point qui vole sur C4, C4 passe en Bientôt loué
         06 31,5-40,5 C4 → double porte ; notif codes ; clé ; battants ; Léa entre au chariot ; porte se ferme
         07 40,5-46 porte → tuile + anneau 12 mois ; « Abonnement actif »
         08 46-52 Marc regarde ; les box se rangent en colonnes S / M / L / Conteneurs
         09 52-58 colonnes → téléphone (Marc, Sur site) + ordinateur (Sophie, Au bureau), mises à jour simultanées
         10 58-65 tout se resserre en un point vert → logo → « Le stockage, sans la gestion. » → aslot.fr
BANNED:  vraie capture d'écran, prix, montant, IBAN, carte, code chiffré, tableau, nom de marque ou client, « paiement par carte »,
         fond sombre hors nuit de la scène 2, glow néon, coupe sèche entre scènes, logo dans un coin, titres qui bougent une fois posés.
QA:      2,5 (cartons), 9 (parc + légende), 17 (Souscrit), 24 (tampon), 30 (C4 bientôt loué), 37 (porte ouverte), 44 (anneau),
         50 (colonnes), 56 (deux écrans), 63 (logo + aslot.fr).
