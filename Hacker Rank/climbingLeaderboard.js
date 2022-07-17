function climbingLeaderboard(ranked, player) {
    let result = [];
    let uniqueranked = [...new Set(ranked)];
  for (const score of player) {
      if (score >= uniqueranked[0]) {
        result.push(1);
      } else if (score < uniqueranked[uniqueranked.length - 1]) {
        result.push(uniqueranked.length + 1);
      } else {
        result.push(rankBinarySearch(score, uniqueranked));
      }
    }
    return result;
  }