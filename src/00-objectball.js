function gameObject(){
  return {
      home: {
          teamName: "Brooklyn Nets",
          colors: "Black, White",
          players:{
              alanAnderson: {
                  number: 0,
                  shoe: 16,
                  points: 22,
                  rebounds: 12,
                  assists: 12,
                  steals: 3,
                  blocks: 1,
                  slamDunks:1
              },
            reggieEvans: {
                  number: 30,
                  shoe: 14,
                  points: 12,
                  rebounds: 12,
                  assists: 12,
                  steals: 12,
                  blocks: 12,
                  slamDunks:7
            },
            brookLopez: {
                  number: 11,
                  shoe: 17,
                  points: 17,
                  rebounds: 19,
                  assists: 10,
                  steals: 3,
                  blocks: 1,
                  slamDunks:15
            },
            masonPlumlee: {
                  number: 1,
                  shoe: 19,
                  points: 26,
                  rebounds: 12,
                  assists: 6,
                  steals: 3,
                  blocks: 8,
                  slamDunks:5
            },
            jasonTerry: {
                  number: 31,
                  shoe: 15,
                  points: 19,
                  rebounds: 2,
                  assists: 2,
                  steals: 4,
                  blocks: 11,
                  slamDunks:1
            }
      }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: "Turquoise, Purple",
        players:{
            jeffAdrien: {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks:2
            },
            bismakBiyombo: {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks:10
            },
            desagnaDiop: {
              number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks:5
            },
            benGordon: {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks:0
            },
            brendanHaywood: {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks:12
            }
        }
      }
    }
    
}

function awayTeamName(){
  let obj = gameObject()
  return obj.away.teamName
}
console.log(awayTeamName())

function numPointsScored(player){
  const game = gameObject()
  for (const gameKey in game){
    const teamObj = game[gameKey]
    for(const teamKey in teamObj){
      const playerObj = teamObj.players
      for( const playerKey in playerObj){
        if(playerKey === player){
          return playerObj[playerKey].points
        }
      }
    }
  }
}
console.log(numPointsScored('alanAnderson'))

function shoeSize(player){
  const game =  gameObject()
  for (let gameKey in game){
    gameKey = game[gameKey]
    for(let playerObj in gameKey){
      playerObj = gameKey.players
      for(let playerKey in playerObj){
        console.log(playerObj)
        console.log(playerKey)
        if (player === playerKey){
          return playerObj[playerKey].shoe
        }
      }
    }
  }
}
console.log(shoeSize('alanAnderson'))

function teamColors(team){
  const game = gameObject()
  for (let gameKey in game){
    gameKey = game[gameKey]
      if(team === gameKey.teamName){
        return gameKey.colors
    }
  }
}
console.log(teamColors('Charlotte Hornets'))

function playerNumbers(team){
  const game = gameObject()
  let nums = []
  for (let gameKey in game){
    gameKey = game[gameKey]
      if(team === gameKey.teamName){
        let teamObj = gameKey.players
         console.log(teamObj)
      for( let playerKey in teamObj){
        nums.push(teamObj[playerKey].number)
      }
   }   
  }
  return nums
}
console.log(playerNumbers('Charlotte Hornets'))

function playerStats(player){
  const game = gameObject()
  for (let gameKey in game){
    gameKey = game[gameKey]
    for(teamKey in gameKey){
      teamKey = gameKey[teamKey]
      for (let playerKey in teamKey){
        if(playerKey === player){
          return teamKey[playerKey]
        }
      }
    }
  }
}
console.log(playerStats('alanAnderson'))