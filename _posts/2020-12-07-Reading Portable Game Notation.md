### Reading Portable Game Notation (pgn)
![Reading PGN]({{site.url}}/chess/images/reading_pgn.gif)


The [pgn](https://opensource.apple.com/source/Chess/Chess-110.0.6/Documentation/PGN-Standard.txt) format is widely used to notate the plays in a game of chess.  It seems natural to use pgn files to drive the movement of pieces in the visualization since adopting this standard would permit us to visualize any game.  While pgn is designed to be human-readable and easily read by computers, there are tradeoffs in the data representation that require some extra work to translate the notation of a given move into an action to drive the visualization.

#### Interpreting the pgn format

A move described in a `pgn` file is written in standard algebraic notation (SAN) and contains implicit meaning:
*e.g*.
- `e4` implies to move a white or black pawn to the `e4` square.  In the opening moves of the game, only white's king pawn can make this move.
- `Nf3` implies to move a white or black knight to the `f3` square.

Within the `.pgn` file, the moves are given as pairs. Since white always begins the game we can read a move as follows:

`1. e4 c5` means that white opens by moving their king pawn to e4 and black responds by moving their queen's bishop pawn to c5.

#### Obtaining and parsing

For our datasource, we [Chess Microbase](https://chessmicrobase.com/microbases/10?token=1koly5lq) for its 1000 publicly available games for download in the .pgn format.  This project starts with [Brown vs. Quinteros](https://chessmicrobase.com/microbases/10/games/709?token=1koly5lq)

Parsing the entire `.pgn` is beyond the scope of this project and there are already many excellent solutions available.   We choose [Aditya DS's](https://github.com/Aditya-ds-1806) excellent [Chess PGN Parser](https://aditya-ds-1806.github.io/Chess-PGN-Parser/#/) for its ability to parse a `.pgn` into `.json`. (the format used for this project)

#### Translating Implicit Moves

All moves are stored in the `moves` array.
```javascript
const moves = ["e4", "c5", "Nf3","Kf3"]  
```
We deduce white's turn or black's turn by the index of the move:

```javascript
if (index % 2 == 0) {
    // white's move
}
```

While the goal is to let `d3` use a `.pgn` game file and drive the placement and movement of pieces within the DOM, we don't have enough information for parsing a move like `Nf3`.
- Which of the four knights is moving to "f3"?
- What is the starting square?  
  While trying to avoid tracking the entire board state, we use make use of a utility function that returns the possible moves for each knight on the board.

```javascript
// get the moves for the knight on square g1 
const potentialMoves = knightMoves("g1")  
// returns ["e2","f3","h3"]
```   
Iterate through the potential moves for each knight and determine whether or not it contains "f3".  In this case, white's king knight moves from "g1" to "f3".

The same logic was used for determining which bishop or rook should move.

Commit [2b859d](https://github.com/matthewdhull/chess/commit/2b859d5093124fd2b29b2b85d95454309bcf9ebe)

 