<script>
  
  const ROWS = 6;
  const COLUMNS = 7;
  const PLAYER_1 = '⚫️';
  const PLAYER_2 = '🔴';

  let board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));
  let currentPlayer = PLAYER_1;

  $: isGameOver = checkWin(currentPlayer) || board.flat().every(cell => cell);
  $: gameOverMessage = isGameOver ? (checkWin(currentPlayer) ? `Player ${currentPlayer === PLAYER_1 ? 1 : 2} wins!` : "It's a draw!") : '';

  function checkWin(player) {
    const directions = [
      [0, 1], // Horizontal
      [1, 0], // Vertical
      [1, 1], // Diagonal right
      [1, -1] // Diagonal left
    ];
    return directions.some(([rowDelta, colDelta]) => 
      board.some((_, rowIndex) => 
        board[0].some((_, colIndex) => 
          checkDirection(rowIndex, colIndex, rowDelta, colDelta, player)
        )
      )
    );
  }

  function checkDirection(row, col, rowDelta, colDelta, player) {
    return Array(4).fill(0).every((_, i) => {
      const r = row + i * rowDelta;
      const c = col + i * colDelta;
      return r >= 0 && r < ROWS && c >= 0 && c < COLUMNS && board[r][c] === player;
    });
  }

  function handlePlayerMove(column) {
    const row = findEmptyRow(column);
    if (row !== -1) {
      board[row][column] = currentPlayer;
      if (!isGameOver) switchPlayer();
    }
  }

  function findEmptyRow(column) {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][column] === null) return row;
    }
    return -1;
  }

  function resetGame() {
    board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));
    currentPlayer = PLAYER_1;
  }

  function switchPlayer() {
    currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    if (currentPlayer === PLAYER_2) setTimeout(simulateAIMove, 500);
  }

  function simulateAIMove() {
    const emptyColumns = getEmptyColumns();
    if (!emptyColumns.length) return;
    const randomColumn = emptyColumns[Math.floor(Math.random() * emptyColumns.length)];
    handlePlayerMove(randomColumn);
  }

  function getEmptyColumns() {
    return board[0].map((cell, col) => (cell === null ? col : null)).filter(col => col !== null);
  }
</script>

<div class="header">
  <h1>Connect Four</h1>
  <p>Connect 4 pieces in a row to win!</p>
</div>

<div class="board-container">
  <div class="connect4-board">
    {#each Array(COLUMNS) as _, columnIndex}
      <div class="connect4-row">
        {#each board as row, rowIndex}
          <button
            class="connect4-cell"
            on:click={() => handlePlayerMove(columnIndex)}
            disabled={row[columnIndex] !== null || isGameOver}
          >
            {#if row[columnIndex] === PLAYER_1}
              <span>{PLAYER_1}</span>
            {:else if row[columnIndex] === PLAYER_2}
              <span>{PLAYER_2}</span>
            {/if}
          </button>
        {/each}
      </div>
    {/each}
  </div>
</div>

<div class="player-label">
  {#if !isGameOver}
    {#if currentPlayer === PLAYER_1}
      Player 1's turn (⚫️)
    {:else}
      Player 2's turn (🔴)
    {/if}
  {/if}
</div>

<div class="modal" style={isGameOver ? 'display: flex;' : 'display: none;'}>
  <div class="modal-content">
    <p class="game-over-message">{gameOverMessage}</p>
    <button class="new-game-button" on:click={resetGame}>New Game</button>
  </div>
</div>

<style>
  /* Add your styling here */
</style>