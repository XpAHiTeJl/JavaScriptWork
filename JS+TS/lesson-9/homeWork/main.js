"use strict";
console.log("----------------------------------------");

const teamLoL = {
  name : "Rick",
  damage : "200",
  hp : "500"
}
const teamDota2 = {
  name : "Bill",
  damage : "400",
  hp : "500"
}

function battle(team1, team2) {
  console.log("Первая команда ",team1)
  console.log("Вторая команда ",team2)
  
console.log("----------------------------------------");

  team2['hp'] = team2.hp - team1.damage
  team1['hp'] = team1.hp - team2.damage

  if (team1['hp'] <= 0) {
    team1['hp'] = 0
  }
  
  if (team2['hp'] <= 0) {
    team2['hp'] = 0
  }

  return [team1, team2]
}
const resultBattle = battle(teamLoL, teamDota2);
console.log("Сpажение", resultBattle);