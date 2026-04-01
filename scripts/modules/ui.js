export function renderStatus(message) {
  const status = document.querySelector('#status-message');
  status.textContent = message;
  console.log('[DOM] #status-message updated:', status.textContent);
}

export function renderLeaderboard(scores) {
  const list = document.querySelector('#leaderboard-list');

  if (!scores.length) {
    list.innerHTML = '<li>No scores available.</li>';
    console.log('[DOM] #leaderboard-list cleared — no scores to display');
    return;
  }

  list.innerHTML = scores
    .map(entry => `<li>${entry.name} — ${entry.score}</li>`)
    .join('');

  console.log('[DOM] #leaderboard-list updated with', scores.length, 'entries');
}
