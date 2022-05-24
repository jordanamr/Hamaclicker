const users = [
  {
    username: "Yousinski",
    prices: 100,
    imgUrl:
      "https://cdn.discordapp.com/avatars/220225692653191178/d4f2c88f683f1e615ce31f058772c371.webp?size=512",
    description:
      "Yousinski améliore la génération de points de +1 et donne l'effet groslinski coupon pizza",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Coupon Pizza",
    imgBonus:
      "https://image.noelshack.com/fichiers/2021/05/1/1612177811-benchandpizza.png",
    linkBonus: "",
  },
  {
    username: "Ouiki",
    prices: 200,
    imgUrl:
      "https://cdn.discordapp.com/avatars/767413512477343756/441c645fd5eae54291e1b764e4a3aa67.webp?size=512",
    description:
      "Ouiki améliore la génération de points de +4 grâce à des cartes volées",
    bonusPerClick: 4,
    passiveBonus: 0,
    bonus: "Cartes volées",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/27/2/1593525184-luffyent.jpg",
    linkBonus: "",
  },
  {
    username: "Powel",
    prices: 120,
    imgUrl:
      "https://cdn.discordapp.com/avatars/669447902682415115/398c25ef8e3ba5fc597d5730d198849b.webp?size=512",
    description:
      "Powel améliore les points de +1 et intervient en cas de pépins via son réseau d'amis",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "Singe",
  },
  {
    username: "Photo",
    prices: 120,
    imgUrl:
      "https://cdn.discordapp.com/avatars/483392384202178560/a_491ea5f764ad473b6a1601dace78c145.webp?size=512",
    description:
      "Photo améliore la génération point de +3 via un système de réseaux neuronaux de génération 4",
    bonusPerClick: 3,
    passiveBonus: 0,
    bonus: "Réseau neuronale de génération 4",
    imgBonus:
      "https://image.noelshack.com/fichiers/2016/41/1476642572-picsart-10-16-08-25-48.png",
    linkBonus: "",
  },
  {
    username: "Lug",
    prices: 300,
    imgUrl:
      "https://cdn.discordapp.com/avatars/671504771990945844/ae3599f76084e346e66a0010ad4df01b.webp?size=512",
    description:
      "Lug est toujours là +1 de points bonus par clic et passif + solution ultime face aux LGTB + bonus Juif",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Qui ?",
    imgBonus:
      "https://image.noelshack.com/fichiers/2021/24/5/1624012994-delawarde.png",
    linkBonus: "Singe",
  },
  {
    username: "Hanako",
    prices: 120,
    imgUrl:
      "https://cdn.discordapp.com/avatars/772200401838669834/da81d65e7edb377a4cea7d0e89cec70c.webp?size=512",
    description: "Hanako améliore la génération de points de 1 et intervient en cas de pépins via son réseau d'amis",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Azdrak",
    prices: 110,
    imgUrl:
      "https://cdn.discordapp.com/avatars/178483869530456066/cfcc1be1f7b75f77c15ba87fd584f784.webp?size=48",
    description: "Azdrak risque à tout moment de disparaître de votre main pour partir en Bulgarie",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Niraine",
    prices: 110,
    imgUrl:
      "https://cdn.discordapp.com/avatars/277776616447541249/e75b6840aad71126fc4b0e9c74ddf9e8.webp?size=512",
    description: "Niraine risque de disparaître si dans votre main il n'y a pas de carte Photo",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Space",
    prices: 150,
    imgUrl:
      "https://cdn.discordapp.com/avatars/217092416459505664/a9ada38396d827c047b041bf01686e99.webp?size=512",
    description: "Space débloque le bonus 'Joueur de LoL' et risque à tout moment d'être banni du jeu",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Albinoel",
    prices: 110,
    imgUrl:
      "https://cdn.discordapp.com/avatars/273235730577227776/108e8d7d0645b3a2660b2049c5a982c6.webp?size=512",
    description: "Chef de la tribu Noeltopia",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Chocolat",
    prices: 200,
    imgUrl:
      "https://cdn.discordapp.com/avatars/264055574600089602/245187488a97977593304257d48eb534.webp?size=512",
    description: "Chocolat est l'ami de Photo, le fait d'avoir ces deux cartes en main booste les réseaux neuronaux",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Lamurloc",
    prices: 150,
    imgUrl:
      "https://cdn.discordapp.com/avatars/330727934480613376/775cdd3d730f1d3ddf115d43bd18a91b.webp?size=512",
    description: "Lamurloc est la carte qui permet de séduire la carte Liberta et de réduire les risque de vols",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Rename",
    prices: 150,
    imgUrl:
      "https://cdn.discordapp.com/avatars/355955127091462145/fed28c5419fe4690bda1157c29f94e3e.webp?size=512",
    description: "Rename est la seule carte qui débloque des champignons rare qui risque de créer des bugs dans l'jeu",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Liberta",
    prices: 125,
    imgUrl:
      "https://cdn.discordapp.com/avatars/185778498978185216/270f54a4596dd6777ddcf3110ae72287.webp?size=512",
    description: "Carte difficile à acheter, risque à tout moment de voler l'argent comme Ouiki",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Rekey",
    prices: 150,
    imgUrl:
      "https://cdn.discordapp.com/avatars/604148003133063168/9bc486bc1e25ddcdb394241428b04267.webp?size=512",
    description: "Réparation de micro grâce à des compétences d'électricité",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Kata",
    prices: 150,
    imgUrl:
      "https://cdn.discordapp.com/avatars/778080366833434655/ee341cc6986053d72087425b0a16d745.webp?size=512",
    description: "Kata communique difficilement via le Sénégal ",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Stonx",
    prices: 150,
    imgUrl:
      "https://cdn.discordapp.com/avatars/241502823680966656/a1562f6291fa1daeb5721001edfb368a.webp?size=512",
    description: "à remplir",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
  {
    username: "Spooky",
    prices: 125,
    imgUrl:
      "https://cdn.discordapp.com/avatars/196524837802344448/ec2cd36af3e291cb0fa000fb38d1aec1.webp?size=512",
    description: "Spooky peut à tout moment disparaître sans raisons valable",
    bonusPerClick: 1,
    passiveBonus: 0,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
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

export function sortAscending(){
  const users = [...users];
  return users.sort((a, b) => a - b)
}