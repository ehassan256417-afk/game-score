import { PLAYER_NEW_SCORE } from './defaults.js';
import { getPlayer, getLeaderboardData, setLeaderboardData } from './game-session.js';

export function recordPlayerHighScore() {
  const player = getPlayer();

  if (!player) {
    return {
      success: false,
      message: 'No player saved yet. Please save Hassan Alnabres first.'
    };
  }

  const leaderboard = getLeaderboardData();

  leaderboard.push({
    name: player,
    score: PLAYER_NEW_SCORE
  });

  leaderboard.sort((a, b) => b.score - a.score);

  setLeaderboardData(leaderboard);

  return {
    success: true,
    message: `${player}'s score of ${PLAYER_NEW_SCORE} has been recorded.`
  };
}
