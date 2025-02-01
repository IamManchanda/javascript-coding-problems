/**
 * Tournament Winner
 * https://www.algoexpert.io/questions/tournament-winner
 * 
 * Approach: Hash Table (using a Map)
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 * where, n is the number of competitions
 * and, k is the number of teams
 */

class Solution {
  tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = new Map();
    scores.set(currentBestTeam, 0);

    for (let i = 0; i <= competitions.length - 1; i++) {
      const result = results[i];
      const [homeTeam, awayTeam] = competitions[i];
      const winningTeam = result === 1 ? homeTeam : awayTeam;

      this.updateScores(winningTeam, 3, scores);

      const winningTeamScore = scores.get(winningTeam);
      const currentBestScore = scores.get(currentBestTeam);

      if (winningTeamScore > currentBestScore) {
        currentBestTeam = winningTeam;
      }
    }

    return currentBestTeam;
  }

  updateScores(team, points, scores) {
    if (!scores.has(team)) {
      scores.set(team, 0);
    }

    const currentScore = scores.get(team);
    scores.set(team, currentScore + points);
  }
}

export default Solution;
