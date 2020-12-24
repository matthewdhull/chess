#### Re-thinking Rook Movement

This bug appeared while playing `Rb1`

![Wrong Rook Move]({{site.url}}/images/wrong_rook.gif)

We should have white's queen rook to `b1` but the method for calculating the positions for a rook resulted in both rooks being able to move along the 1st rank.  The method for translating implict moves described previously did not consider squares that would be illegal moves caused by intermediate pieces.  Given the board state shown below, `Rb1` does not require any rank or file disambiguation in SAN.  Instead, we must internally deal with the disambiguation by only choosing the rook that could legally move to `b1`

Below, we see the possible squares were originally calculated. The arrows span covers all possible squares considered.  In this case, it seems that both rooks can move to `b1`

![Wrong Rook Logic]({{site.url}}/images/wrong_rook_logic.png)

To correct this, we try to find a path from the desired position, e.g., `b1` to each rook and stop if an intermediate piece exists.  If we start at position `b1` and move horizontally on rank 1, we find an intermediate piece on `d1` and that only white's queen rook on `a1` can move to `b1`.  See `rookMovesFrom(fromPosition, toPosition, aBoard) ` [code](https://github.com/matthewdhull/chess/blob/a302b280b01ab2427bad67767b396f3b019aa2d2/scripts/pieces.js#L198)

![Correct Rook Logic]({{site.url}}/images/correct_rook_logic.png)