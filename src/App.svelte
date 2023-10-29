<!-- src/App.svelte -->
<script>
  // Define the game board (6 rows, 7 columns)
  const ROWS = 6;
  const COLUMNS = 7;

  // Initialize the game board as a 2D array with null values
  let board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));

  // Define constants for players
  const PLAYER_1 = '⚫️'; // Black circle emoji for user
  const PLAYER_2 = '🔴'; // Red circle emoji for AI

  // Initialize the current player (start with Player 1)
  let currentPlayer = PLAYER_1;

  // Function to handle a player's move when they click a column
  function handlePlayerMove(column) {
    // Find the lowest empty row in the selected column
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][column] === null) {
        board[row][column] = currentPlayer;

        // Check if the current player has won
        if (checkWin(currentPlayer)) {
          setTimeout(() => {
            alert(`Player ${currentPlayer === PLAYER_1 ? 1 : 2} wins!`);
            resetGame();
          }, 500);
        } else if (board.flat().every(cell => cell !== null)) {
          // Check for a draw
          setTimeout(() => {
            alert("It's a draw!");
            resetGame();
          }, 500);
        } else {
          // Switch to the next player
          currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
          if (currentPlayer === PLAYER_2) {
            // It's the AI's turn, so simulate its move with a delay
            setTimeout(simulateAIMove, 500);
          }
        }

        break;
      }
    }
  }

  // Function to reset the game
  function resetGame() {
    board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));
    currentPlayer = PLAYER_1;
  }

  // Function to simulate the AI's move (random move)
  function simulateAIMove() {
    let emptyColumns = [];
    for (let col = 0; col < COLUMNS; col++) {
      if (board[0][col] === null) {
        emptyColumns.push(col);
      }
    }

    if (emptyColumns.length === 0) return; // No valid moves

    // Choose a random column for the AI's move
    const randomColumn = emptyColumns[Math.floor(Math.random() * emptyColumns.length)];
    handlePlayerMove(randomColumn);
  }

  // Function to check for a win
  function checkWin(player) {
    // Implement your winning condition logic here
    // Return true if the player has won, otherwise return false
    // You can check horizontally, vertically, and diagonally
    // Example implementation: checkHorizontal, checkVertical, checkDiagonal functions
    // Return true if any of these functions returns true
    return (
      checkHorizontal(player) ||
      checkVertical(player) ||
      checkDiagonal(player)
    );
  }

  function checkHorizontal(player) {
    // Implement horizontal win condition logic here
    // Return true if the player has 4 in a row horizontally, otherwise return false
    // Example implementation:
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col <= COLUMNS - 4; col++) {
        if (
          board[row][col] === player &&
          board[row][col + 1] === player &&
          board[row][col + 2] === player &&
          board[row][col + 3] === player
        ) {
          return true;
        }
      }
    }
    return false;
  }

  function checkVertical(player) {
    // Implement vertical win condition logic here
    // Return true if the player has 4 in a row vertically, otherwise return false
    // Example implementation:
    for (let col = 0; col < COLUMNS; col++) {
      for (let row = 0; row <= ROWS - 4; row++) {
        if (
          board[row][col] === player &&
          board[row + 1][col] === player &&
          board[row + 2][col] === player &&
          board[row + 3][col] === player
        ) {
          return true;
        }
      }
    }
    return false;
  }

  function checkDiagonal(player) {
    // Implement diagonal win condition logic here
    // Return true if the player has 4 in a row diagonally, otherwise return false
    // Example implementation (from top-left to bottom-right):
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 0; col <= COLUMNS - 4; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col + 1] === player &&
          board[row + 2][col + 2] === player &&
          board[row + 3][col + 3] === player
        ) {
          return true;
        }
      }
    }
    // Example implementation (from top-right to bottom-left):
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 3; col < COLUMNS; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col - 1] === player &&
          board[row + 2][col - 2] === player &&
          board[row + 3][col - 3] === player
        ) {
          return true;
        }
      }
    }
    return false;
  }
</script>

<style>

  .connect4-board {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    max-width: 400px;
    margin: 0 auto;
  }

  .connect4-cell {
    width: 60px;
    height: 60px;
    background-color: #dddddd;
    border: 2px solid #999999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
  }

  .connect4-cell:hover {
    background-color: #aaaaaa;
  }
</style>


<!-- src/App.svelte -->
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
            disabled={row[columnIndex] !== null}
          >
            {#if row[columnIndex] === PLAYER_1}
              ⚫️
            {:else if row[columnIndex] === PLAYER_2}
              🔴
            {/if}
          </button>
        {/each}
      </div>
    {/each}
  </div>
</div>
