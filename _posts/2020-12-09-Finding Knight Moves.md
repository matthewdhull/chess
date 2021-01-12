---
layout: post
author: matthew
---
### Finding Knight Moves  

In a manner similar to finding bishop moves, this <a name='piecewise'>piecewise function <a/> can be used to find all knight moves.

$$ f(x) = \begin{cases}
x+1 \text{ if } x = -2  \\
x-1, \text{ if } x = -1 \\
x+1, \text{ if }  x = 1 \\
x-1  \text{ if } x=2 
\end{cases} $$

The domain is: $$ \{x \in \mathbb{I} \mid -2 \leq x \leq 2 \text{ and } x \neq 0 \}$$

Half of the possible moves can be found by finding $$f(x)$$ for all values in the domain. 

To find the remaining directions, use a vertical reflection of the function, $$-f(x)$$

After gathering the possible values, truncate any moves that yield coordinates that do not exist on the board.  

Example: 

Calculate possible moves for a knight `d5`.  

Current Position: `d5 = [5,4]`.  We refer to this later as <a name='pxpy'> $$ (p_x, p_y) $$ </a>

***

**Get all move changes in each direction:** 

_For all values_ $$x$$ _in the domain of_ $$ f(x) $$ _:_

_moves1_ $$ = [(-2, f(2)), (-1, f(1)), (1, f(1)), (2, f(2))] $$

_moves2_ $$ = [(-2, -f(2)), (-1, -f(1)), (1, -f(1)), (2, -f(2))] $$

_return moves1, moves2_

***

This operation returns the values [^2].:

_moves1_ = $$[(-2, -1), (-1,-2), (1,2), (2,1)]$$

_moves2_ = $$[(-2,1), (-1,2), (1,-2), (2,-1)]$$

***

**Find new positions:**

_For each value-pair $$(x_i, y_i) $$ in moves1, moves2 and current position [$$(p_x, p_y)$$:](#pxpy)_

_new_position_ = $$ (p_x + x_i, p_y + y_i) $$

_If new_position is valid: [^3]_ 

_return new_position_

![knight moves]({{site.url}}/chess/images/knight_moves.png)

Considering our original position of $$[5,4]$$, the new positions calculated from _moves1_ would be: $$[1,4], [2,3], [5,7], [6,6]$$

And we map these back to positions `'a4', 'b3', 'e7', 'f6'`

(Continue in the manner for _moves2_)

Graph of knight moves graphed using the [piecewise](#piecewise) function on [desmos](https://www.desmos.com/calculator/osdzle1man)

***

Footnotes:

[^1]: Under promotion to bishop is noteworthy for these [championship games](https://www.chess.com/blog/SamCopeland/the-rarest-chess-move-underpromoting-to-a-bishop) where it avoided stalemate.
[^2]: Practically, all of these values could be held in a single list but we keep them separated for cleaner display.
[^3]: A valid position has an $$ x $$ value between 1-7 and a $$ y $$ value betwen 1-7