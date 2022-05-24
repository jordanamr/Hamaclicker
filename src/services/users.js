const users = [
  {
    username: "Yousinski",
    prices: 200,
    imgUrl:
      "https://cdn.discordapp.com/avatars/220225692653191178/d4f2c88f683f1e615ce31f058772c371.webp?size=512",
    description:
      "Yousinski améliore la génération de points de +1 et donne l'effet groslinski coupon pizza",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Coupon Pizza",
    imgBonus:
      "https://image.noelshack.com/fichiers/2021/05/1/1612177811-benchandpizza.png",
    linkBonus: "https://www.dominos.be/fr",
  },
  {
    username: "Ouiki",
    prices: 400,
    imgUrl:
      "https://cdn.discordapp.com/avatars/767413512477343756/441c645fd5eae54291e1b764e4a3aa67.webp?size=512",
    description:
      "Ouiki améliore la génération de points de +4 grâce à des cartes volées",
    bonusPerClick: 4,
    passiveBonus: 0,
    bonus: "Cartes volées",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/27/2/1593525184-luffyent.jpg",
    linkBonus: "https://en.wikipedia.org/wiki/Carding_(fraud)",
  },
  {
    username: "Powel",
    prices: 240,
    imgUrl:
      "https://cdn.discordapp.com/avatars/669447902682415115/398c25ef8e3ba5fc597d5730d198849b.webp?size=512",
    description:
      "Powel améliore les points de +1 et intervient en cas de pépins via son réseau d'amis",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "https://www.google.be/maps/place/canton+of+Orl%C3%A9ans-La+Source,+45100+Orl%C3%A9ans,+France/@47.836468,1.9237963,15z/data=!3m1!4b1!4m5!3m4!1s0x47e4e406e168620b:0x22a04380718c21c!8m2!3d47.8364544!4d1.9325511?hl=en&authuser=0",
  },
  {
    username: "Photo",
    prices: 240,
    imgUrl:
      "https://cdn.discordapp.com/avatars/483392384202178560/a_491ea5f764ad473b6a1601dace78c145.webp?size=512",
    description:
      "Photo améliore la génération point de +3 via un système de réseaux neuronaux de génération 4",
    bonusPerClick: 3,
    passiveBonus: 0,
    bonus: "Réseau neuronale de génération 4",
    imgBonus:
      "https://image.noelshack.com/fichiers/2016/41/1476642572-picsart-10-16-08-25-48.png",
    linkBonus: "https://fr.wikipedia.org/wiki/Mikoyan-Gourevitch_MiG-21",
  },
  {
    username: "Lug",
    prices: 100,
    imgUrl:
      "https://cdn.discordapp.com/avatars/671504771990945844/ae3599f76084e346e66a0010ad4df01b.webp?size=512",
    description:
      "Lug est toujours là +1 de points bonus par clic et passif + solution ultime face aux LGTB",
    bonusPerClick: 1,
    passiveBonus: 1,
    bonus: "Connaissez vous la Tchétchénie?",
    imgBonus:
      "https://leidenlawblog.nl/images/uploads/_articleThumb/NO-LGBT.png",
    linkBonus: "https://www.sos-homophobie.org/informer/definitions/homophobie",
  },
  {
    username: "Hanako",
    prices: 240,
    imgUrl:
      "https://cdn.discordapp.com/avatars/772200401838669834/da81d65e7edb377a4cea7d0e89cec70c.webp?size=512",
    description: "Hanako améliore la génération de points de 1 et intervient en cas de pépins via son réseau d'amis",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Genghis Khan",
    imgBonus:
      "https://risibank.fr/cache/medias/0/22/2204/220402/full.png",
    linkBonus: "https://www.google.be/maps/place/Mongolia/@47.9198589,106.8935032,15z/data=!4m5!3m4!1s0x3627050669aa6d4b:0xe0dd213937e6e096!8m2!3d46.862496!4d103.846656?hl=en&authuser=0",
  },
  {
    username: "Azdrak",
    prices: 220,
    imgUrl:
      "https://cdn.discordapp.com/avatars/178483869530456066/0073df08de7dd545b5b193e2bde5ed1e.webp?size=512",
    description: "Azdrak risque à tout moment de disparaître de votre main pour partir en Bulgarie",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Bulgarie",
    imgBonus:
      "https://risibank.fr/cache/medias/0/10/1070/107051/full.png",
    linkBonus: "https://www.glassdoor.fr/Salaires/sofia-call-center-operator-salaire-SRCH_IL.0,5_IM1016_KO6,26.htm#:~:text=Le%20salaire%20moyen%20pour%20un,%2C%20Sofia%2C%20r%C3%A9gion%20de%20Bulgarie.",
  },
  {
    username: "Niraine",
    prices: 220,
    imgUrl:
      "https://cdn.discordapp.com/avatars/277776616447541249/45223e21c3d862ae1d0e7a33d1a11ca4.webp?size=512",
    description: "Niraine risque de disparaître si dans votre main il n'y a pas de carte Photo",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Ami de photo",
    imgBonus:
      "https://image.noelshack.com/fichiers/2019/29/7/1563744631-67402086-2407609559295397-6013658752245301248-n.jpg",
    linkBonus: "https://www.helpguide.org/articles/stress/burnout-prevention-and-recovery.htm",
  },
  {
    username: "Space",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/217092416459505664/a9ada38396d827c047b041bf01686e99.webp?size=512",
    description: "Space débloque le bonus 'Joueur de LoL' et risque à tout moment d'être banni du jeu",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "League of legends",
    imgBonus:
      "https://image.noelshack.com/fichiers/2016/48/1480374786-garissou.png",
    linkBonus: "https://www.passeportsante.net/fr/psychologie/Fiche.aspx?doc=addiction-jeux-videos#:~:text=On%20consid%C3%A8re%20qu'il%20y,et%2020%20heures%20par%20semaine.",
  },
  {
    username: "Albinoel",
    prices: 220,
    imgUrl:
      "https://cdn.discordapp.com/avatars/273235730577227776/108e8d7d0645b3a2660b2049c5a982c6.webp?size=512",
    description: "Chef de la tribu Noeltopia",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Noeltopia",
    imgBonus:
      "https://www.noeltopia.com/styles/default/xenforo/noel-logo.png",
    linkBonus: "https://www.noeltopia.com/",
  },
  {
    username: "Chocolat",
    prices: 200,
    imgUrl:
      "https://cdn.discordapp.com/avatars/264055574600089602/245187488a97977593304257d48eb534.webp?size=512",
    description: "Chocolat est l'ami de Photo, le fait d'avoir ces deux cartes en main booste les réseaux neuronaux",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Ami de photo",
    imgBonus:
      "https://www.amsterdamair.fr/81684-large_default/batterie-bosch-powerpack-500-wh-pour-velo-cargo-urban-arrow.jpg",
    linkBonus: "https://www.youtube.com/watch?v=kWX9qsrfjpU",
  },
  {
    username: "Lamurloc",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/330727934480613376/775cdd3d730f1d3ddf115d43bd18a91b.webp?size=512",
    description: "Lamurloc est la carte qui permet de séduire la carte Liberta et de réduire les risque de vols",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Place spectacle Norman",
    imgBonus:
      "https://risibank.fr/cache/medias/0/1/147/14789/full.jpeg",
    linkBonus: "https://www.senscritique.com/film/Norman_le_spectacle_de_la_maturite/43623211",
  },
  {
    username: "Rename",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/355955127091462145/fed28c5419fe4690bda1157c29f94e3e.webp?size=512",
    description: "Rename est la seule carte qui débloque des joints qui risque de créer des bugs dans l'jeu",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Joint Man",
    imgBonus:
      "https://risibank.fr/cache/medias/0/26/2682/268210/full.png",
    linkBonus: "https://encadrementcannabis.gouv.qc.ca/le-cannabis/consequences-negatives-possibles-sur-la-sante-de-la-consommation-reguliere-de-cannabis/#:~:text=La%20consommation%20de%20cannabis%20augmente,m%C3%AAme%20en%20favoriser%20l'apparition.",
  },
  {
    username: "Liberta",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/185778498978185216/270f54a4596dd6777ddcf3110ae72287.webp?size=512",
    description: "Carte difficile à acheter, risque à tout moment de voler l'argent comme Ouiki",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Personne douteuse",
    imgBonus:
      "https://risibank.fr/cache/medias/0/18/1848/184834/full.jpeg",
    linkBonus: "https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V",
  },
  {
    username: "Rekey",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/604148003133063168/9bc486bc1e25ddcdb394241428b04267.webp?size=512",
    description: "Réparation de micro grâce à des compétences d'électricité",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Problème de micro",
    imgBonus:
      "https://image.noelshack.com/fichiers/2018/19/2/1525782445-microderisitas.png",
    linkBonus: "https://www.youtube.com/watch?v=RCic8bT0nGw",
  },
  {
    username: "Kata",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/778080366833434655/ee341cc6986053d72087425b0a16d745.webp?size=512",
    description: "Kata communique difficilement via le Sénégal ",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Sénégal",
    imgBonus:
      "https://risibank.fr/cache/medias/0/9/978/97869/full.png",
    linkBonus: "https://fr.wikipedia.org/wiki/S%C3%A9n%C3%A9gal",
  },
  {
    username: "Stonx",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/241502823680966656/a1562f6291fa1daeb5721001edfb368a.webp?size=512",
    description: "Développeur Solidity",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Solidity",
    imgBonus:
      "https://docs.soliditylang.org/en/v0.8.14/_static/logo.svg",
    linkBonus: "https://docs.soliditylang.org/en/v0.8.14/",
  },
  {
    username: "Spooky",
    prices: 250,
    imgUrl:
      "https://cdn.discordapp.com/avatars/196524837802344448/ec2cd36af3e291cb0fa000fb38d1aec1.webp?size=512",
    description: "Spooky peut à tout moment disparaître sans raisons valable",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "J'ai un ami Gitan",
    imgBonus:
      "https://image.noelshack.com/fichiers/2017/10/1488809412-1465699548-lopez.png",
    linkBonus: "https://fr.wikipedia.org/wiki/Gitans",
  },
  {
    username: "Kali Yuga",
    prices: 10000,
    imgUrl:
      "https://i1.sndcdn.com/artworks-000569287205-25jzjm-t500x500.jpg",
    description: "La fin du Kali Yuga!",
    bonusPerClick: 1000,
    passiveBonus: 100,
    bonus: "La fin du Kali Yuga",
    imgBonus:
      "https://i1.sndcdn.com/artworks-000569287205-25jzjm-t500x500.jpg",
    linkBonus: "C'est fini",
  }

];

export function getUsers() {
  return users;
}

export function getCardsCount() {
  const username = [...users];
  const test = username.map(function (e) {
    return { username: e.username, count: 0 };
  });
  return test;
}


// TODO sort cards by descending prices (el con)
export function sortAscending(){
  const users = [...users];
  return users.sort((a, b) => a - b)
}