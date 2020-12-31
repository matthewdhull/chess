---
layout: post
author: matthew
---
### Pawn Promotion, Capture, and Under-promotion

Among the last types of moves to handle were pawn promotions. In SAN, these are expressed in the form `rank file = promoted piece`, e.g., `e8=Q` is the  movement of the `e`-file pawn to  `e8` and subsequent promotion to queen. 

The promotion can be also be a capture, e.g., `hxg1=Q`, the `h`-file  pawn captures at `g1` and promotes to queen.

Although rare, we support *under-promotion*,  i.e., when the piece is promoted to something other than a queen. e.g., `c8=R`. 

![Pawn Promotion]({{site.url}}/chess/images/pawn_promotion.gif)

Commit [22e79b0](https://github.com/matthewdhull/chess/commit/22e79b0c6bdf618278a3b9e7dc10c03546d2eda8)