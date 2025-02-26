/**
 * Tournament Winner
 * https://www.algoexpert.io/questions/tournament-winner
 * 
 * Approach: Hash Table (using an object)
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 * where, n is the number of competitions 
 * and, k is the number of teams
 */

class Solution {
  tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = { [currentBestTeam]: 0 };

    for (let i = 0; i <= competitions.length - 1; i++) {
      const result = results[i];
      const [homeTeam, awayTeam] = competitions[i];
      const winningTeam = result === 1 ? homeTeam : awayTeam;

      this.updateScores(winningTeam, 3, scores);

      if (scores[currentBestTeam] < scores[winningTeam]) {
        currentBestTeam = winningTeam;
      }
    }

    return currentBestTeam;
  }

  updateScores(team, points, scores) {
    if (!(team in scores)) {
      scores[team] = 0;
    }

    scores[team] += points;
  }
}

export default Solution;
