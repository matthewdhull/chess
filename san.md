### Parsing SAN (Standard Algebraic [chess] Notation)

### SAN parsing tree
Current version
<img src="img/san_parse_tree_4.svg">

(previous attempts shown below)

### Take 1 at a parsing tree
Using length of a single move in SAN as base case
<img src="img/san_parse_tree_1.svg">

### Take 2 at a parsing tree
Root of tree checks for whether or not the move is a capture, disregards cases of check/checkmate
<img src="img/san_parse_tree_2.svg">

### Take 3 at a parsing tree
level 2 branches check the string length for greater simplification.  
<img src="img/san_parse_tree_3.svg">