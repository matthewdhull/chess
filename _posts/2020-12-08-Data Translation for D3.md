---
layout: post
author: matthew
---
### Data Translation for D3

All 32 pieces and occupied positions are represented in a dictionary can be retrieved in a manner like:

`board["bq"].position  //position of black's queen`

When we parse a new move from the PGN file, we update only the piece(s) that are changing, instead of rebuilding the entire board state with each move. Then we pass the changes to D3 and allow it to handle the movement of our pieces on the board or take other actions, such as removing captured pieces.

As discussed in an earlier post on reading PGN files, the SAN notation does not always cleanly indicate what piece movement or action is needed. In fact, that there are many ways to indicate a move:

- `c5`, `Nf3`, and `Qa6a8` are all ways to indicate simple movement of a piece from one square to the next
- `Rxh5`, `cxd4`, and `Rbxa1` indicate both the movement of a piece and removal of another piece
- `O-O` or `O-O-O` indicate movement of two pieces (castling)
- `a8=Q`, `exd1=R` indicates a movement, the removal of a piece, and the addition of another piece. (pawn promotion)

The following actions have been establish to categorize any move:

1. Move
2. Capture
3. Castle
4. Promote

By pairing pieces with one of these four actions, we translate a move from SAN into a change to the data model representing the board state.
While this is likely a misuse of javascript data structures, we use a pair of values of the form:

`[<piece>, <position> | <flag>]`

and pass them like a tuple.  The first value in the tuple will always be the piece identifier and the second value can be either a position, e.g., `a8`, or a flag containing one of two special values indicating capture `'x'` or promotion `'p'`.

Examples:
- The move `c5` could be translated to `['wqbp', 'c5']`
- The move and capture `Rxh5` could be translated to `['bkp', 'h5'],['wkrp', 'x']` where the `'x'` flag indicates a piece should be removed.
- The move `O-O-O` is translated to `['wk','c1'],['wqr','d1']`
- The move `a8=Q` could be translated to `['wqrp','a8'],['wqrp','p'],['wQ','a8']` where the `'p'` flag indicates to promote the piece and remove it from the board and replace it with the piece in the subsequent tuple, a white queen at position `a8`

After making this translation, we update our board state once per each move
    e.g.,

`board[piece].position = nextPosition`

and/or

`delete board[piece]`







