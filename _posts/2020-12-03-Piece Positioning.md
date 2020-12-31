---
layout: post
author: matthew
---

### - Piece path and positioning
- Using `pieces.js` to hold the `d` value to specify the path to be drawn for a piece.  We start by drawing a rook.  To position the it, we use the `positions` dictionary and get the coordinates for where to  place the rook path within the `svg` element.

Getting the position:

```javascript
x = positions["A8"][0]
y = positions["A8"][1]
```


![Piece Positioning]({{site.url}}/chess/images/piece_positioning.png)

Commit [b61e48f](https://github.com/matthewdhull/chess/commit/b61e48f98534bceeb376048c64415a57f128b5b6)