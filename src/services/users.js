const users = [
  {
    username: "Yousinski",
    prices: 10,
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
    prices: 20,
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
    prices: 40,
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
    prices: 50,
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
    prices: "200",
    imgUrl:
      "https://cdn.discordapp.com/avatars/671504771990945844/ae3599f76084e346e66a0010ad4df01b.webp?size=512",
    description:
      "Lug est toujours là +1 de points bonus par clic et passif + solution ultime face aux LGTB + bonus Juif",
    bonusPerClick: 1,
    passiveBonus: 1,
    bonus: "Qui ?",
    imgBonus:
      "https://image.noelshack.com/fichiers/2021/24/5/1624012994-delawarde.png",
    linkBonus: "Singe",
  },
  {
    username: "Hanako",
    prices: "40",
    imgUrl:
      "https://cdn.discordapp.com/avatars/772200401838669834/da81d65e7edb377a4cea7d0e89cec70c.webp?size=512",
    description: "Hanako améliore la génération de points de 1",
    bonusPerClick: 1,
    passiveBonus: 1,
    bonus: "Réseau d'amis douteux",
    imgBonus:
      "https://image.noelshack.com/fichiers/2020/13/5/1585314921-paz.gif",
    linkBonus: "",
  },
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
