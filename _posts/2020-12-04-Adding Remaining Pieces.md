---
layout: post
author: matthew
---
### - Remaining Pieces, re-factored initial piece layout
- All piece types (king, queen, bishop, knight, rook, pawn) have a defined path in `pieces.js`.  We store a piece's information in the `start_positions` dictionary and use this data in our `d3.selectAll("path")...` call.

e.g., Black's Queen Rook is named "bqr" and has the following data:


```
"bqr":{
	"path": rook_path
	, "position": "A8"
	, "fill": black_piece_fill
	, "stroke": black_piece_stroke }
```

and append as seen [here](https://github.com/matthewdhull/chess/blob/44f5efe90eef3ee326224ad0e1cd50baf7cd25d8/board.html#L171)

![Remaining Pieces]({{site.url}}/chess/images/remaining_pieces.png)

Commit [44f5efe](https://github.com/matthewdhull/chess/commit/44f5efe90eef3ee326224ad0e1cd50baf7cd25d8)