### Exploring Piece Movement

By using D3's `.transition()` function, let's  explore how animate  the movement of a piece to a new position.   For this example, we move white's king pawn `wkp` to E4.

Bind the movement event to a button so we can control when the  move is triggered.

`d3.select("#start").on("click", function() {...}`

We can access the coordinates of E4 as:

`var newPosition = positions["E4"]`

Then, select `wkp` and assign the E4 position to the pieces transform translation attribute.  To animate this position change, use the  `.transition())` function before assigning the new translation.

```javascript
d3.select("#wkp")
    .transition()
    .attr("transform", "translate("+(newPosition[0]-25)+","+
(newPosition[1]-24)+")")
```

[full code](https://github.com/matthewdhull/chess/blob/9c2f5950a3ebfce514cbc1a015da841276a030af/board.html#L213)

![Single Piece Movement]({{site.url}}/images/single_piece_movement.png)

Commit [9c2f595](https://github.com/matthewdhull/chess/commit/9c2f5950a3ebfce514cbc1a015da841276a030af)