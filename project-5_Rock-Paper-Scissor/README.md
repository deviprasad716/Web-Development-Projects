## PROJECT - 5 : Rock Paper Scissor

| Project No. |Project Name| Technologies |
|---|---|---|
| 5th | Rock Paper Scissor | HTML5, CSS3, JavaScript(ES6), Browser Local Storage API |

### Features

- Play Rock, Paper, Scissors against the computer.
- Computer generates moves randomly.
- Scoreboard tracks:
   Wins
   Losses
   Ties
- Scores are saved using Local Storage even after refreshing the page.
- Reset button to clear all saved scores.
- Modern dark-themed user interface.
- Custom emoji-style hand icons for Rock, Paper, and Scissors

### Algorithm

**Step 1: Player selects a move**
The player clicks one of the three buttons:
Rock
Paper
Scissors

**Step 2: Computer selects a move**
The computer generates a random number using:
Math.random()
The random value determines the computer's move:
Range	Computer Move
0 - 1/3	     Rock
1/3 - 2/3	  Paper
2/3 - 1	     Scissors

**Step 3: Compare moves**
The program compares the player's move with the computer's move and determines:
Win
Lose
Tie

**Step 4: Update score**
Depending on the result:
Wins increase by 1
Losses increase by 1
Ties increase by 1
Step 5: Save score
The updated score is stored in browser local storage:
localStorage.setItem()

**Step 6: Display result**
The game updates:
Match result
Selected moves
Updated score

## Project Preview

![Project Preview](images/preview5.png)
