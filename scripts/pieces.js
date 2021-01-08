// color schemes
const squareStrokeWidth = 2
const rectWidth = 50, rectHeight = rectWidth
const lightSquareColor = '#FFFEE3'
const darkSquareColor = '#419162'	
const squareStrokeColor = "#2B6139"



const pieceTypeMap = {"R":"rook", "N":"knight", "B":"bishop","Q":"queen", "K":"king"}


function makePieceForPlayer(player, pieceType, position, moveIndex) {
					
		const id = ""+player+pieceType.toLowerCase()+moveIndex
		const name = (player == "w") ? "white" : "black"
		const type = pieceTypeMap[pieceType]
		
		var piece = {}
		piece[id]= {
			"path": type+"_path"
			, "type": type												
			, "name": name+"'s "+type.toLowerCase()						
			, "position": position						
			, "fill": name+"_piece_fill"
			, "stroke": name+"_piece_stroke"
		}
	
	return piece
}


function getOccupiedSquares(aBoard){
	// returns key-value pairs of occupied squares and their pieces e.g., {"a1":"wkr"}
	var oc = {}
	var pieces = Array.from(Object.keys(aBoard))
	var i = 0
	while(i < pieces.length) {
		oc[aBoard[pieces[i]].position] = pieces[i]
		i+=1
	}
	return (oc)
}


function getPlayerPiecesForType(player, type, aBoard){
	/*
		Gets the player's pieces for a piece type
		e,g., for "w", and "pawn", get all white pawns
		returns array of strings: e.g., ["wqrp", "wqnp", ...,"wkrp"]
	
	args:
	 player = "w" or "b"
	 type = "pawn", "rook", "knight", "bishop", "king", "queen"
	 board = a dict containing all pieces info
	*/
	
	var pieceTypeSubset = []			
	for (const [key, value] of Object.entries(aBoard)) {
	  	if (value.type  == type && key[0]==player){pieceTypeSubset.push(key)}		  	
	}
	return pieceTypeSubset			
}


function getPlayerPawnForFile(player, file, aBoard, aPosition){
	// get the pawn for a given file
	// returns a piece e.g., "wkp", or "bqrp", etc.
	// assumes only one pawn on the file for the given player
	// disambiguation could be required for other scenarios

	// get all file pawns for the player
	var pieces = getPlayerPiecesForType(player, "pawn", aBoard)		
	var playerPawnsForFile = {}
	var ranks = []  //array of ints: 1, 3, 
	var desiredRank = parseInt(aPosition[1])

	pieces.forEach(function(piece){
		if (aBoard[piece].position[0] == file){
			playerPawnsForFile[aBoard[piece].position] = piece
			ranks.push(parseInt(aBoard[piece].position[1]))			
		}
	})		
	
	
	if (Object.entries(playerPawnsForFile).length > 1){ // handle file ambiguity 
		var chosenPawn = null	
		if (player == "w"){
			ranks.forEach(function(rank){
				if ((rank == (desiredRank-1)) || (rank == (desiredRank-2))){
					var calculatedPosition = file+rank.toString()
					chosenPawn = playerPawnsForFile[calculatedPosition]
				}
			})
		}
		else {
			ranks.forEach(function(rank){
				if ((rank == (desiredRank+1)) || (rank == (desiredRank+2))){
					chosenPawn = playerPawnsForFile[file+rank.toString()]					
				}
			})
			
		}
		return (chosenPawn)
	}
		
	else { // only one pawnForFile
		var k = Array.from(Object.keys(playerPawnsForFile))[0]
		return (playerPawnsForFile[k])
	}		
}


function getPlayerPieceForFile(player, file, pieceType, aBoard){
	// get the non-pwn piece for a given file (file disambiguation)
	// 
	var pieces = getPlayerPiecesForType(player, pieceTypeMap[pieceType], aBoard)
	piecesAndPositionsForPlayer = {}
	pieces.forEach(function(piece){
		piecesAndPositionsForPlayer[aBoard[piece].position] = piece
	})
	var piecePositions  = Array.from(Object.keys(piecesAndPositionsForPlayer))
	const found = piecePositions.find(element => element[0] == file)

	return (piecesAndPositionsForPlayer[found])			
}


function getPlayerPieceForRank(player, rank, pieceType, aBoard){
	// get the non-pwn piece for a given rank (rank disambiguation)
	// 
	var pieces = getPlayerPiecesForType(player, pieceTypeMap[pieceType], aBoard)
	piecesAndPositionsForPlayer = {}
	pieces.forEach(function(piece){
		piecesAndPositionsForPlayer[aBoard[piece].position] = piece
	})
	var piecePositions  = Array.from(Object.keys(piecesAndPositionsForPlayer))
	const found = piecePositions.find(element => element[1] == rank)
	return (piecesAndPositionsForPlayer[found])
}


function knightMoves(position){
	// get the possible moves for a knight on a given position
	// returns an array of strings ["a6", "b3",...]
	var fileIndex = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8}
	var reverseIndex = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h"}
	var rankIndex = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8}
	var movePossibilities = [[2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]]
	var moves = []
	// get index of file
	var fidx = fileIndex[position[0]] //e.g., if a, then 1
	var ridx = rankIndex[position[1]] //e.g., if 1, then 1
	var i = 0
	while(i < movePossibilities.length) {
		newFidx = fidx + movePossibilities[i][0] //e.g., if 1, then 3
		newRidx = ridx + movePossibilities[i][1] //e.g., if 1, then 2
		if ((fidx > 0 && fidx < 9) && (ridx > 0 && ridx < 9)){
			var f = reverseIndex[newFidx.toString()]
			var r = rankIndex[newRidx]
			if ((typeof f !== 'undefined') && (typeof r !== 'undefined')){
				moves.push(f+r)
			}
		}
		i += 1	
	}
	return moves
}


function bishopMoves(position){
	// get the possible moves for a bishop on a given position
	var fileIndex = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8}
		var reverseIndex = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h"}
		var rankIndex = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8}
		var movePossibilities = [
			[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]
			,[-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7]		
			,[1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7]
			,[-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7]			
		]
		var moves = []
		var fidx = fileIndex[position[0]] 
		var ridx = rankIndex[position[1]]
		var i = 0
		while(i < movePossibilities.length) {
			newFidx = fidx + movePossibilities[i][0] //e.g., if 1, then 3
			newRidx = ridx + movePossibilities[i][1] //e.g., if 1, then 2
			if ((fidx > 0 && fidx < 9) && (ridx > 0 && ridx < 9)){
				var f = reverseIndex[newFidx.toString()]
				var r = rankIndex[newRidx]
				if ((typeof f !== 'undefined') && (typeof r !== 'undefined')){
					moves.push(f+r)
				}
			}
			i += 1	
		}
		//console.log("bishop moves ",moves)
		return moves			
}
				

function rookMovesFrom(fromPosition, toPosition, aBoard){
	// from position is the current position of the rook
	// to position is the position to try to move to
	// try to make a path between the from-->to position
	// if a piece occupies an intermediate square, then return the partial path

	// convert from position from "a1" to [1,1] etc.
	// convert to position from "b1" to [2,1]
	var fileIndex = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8}	
	var rankIndex = {"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8}	
	var reverseFileIndex = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h"}	
	var f = fileIndex[fromPosition[0]]
	var r = rankIndex[fromPosition[1]]
	// console.log("fromPosition "+fromPosition+" ["+[f,r]+"]")
	var f1 = fileIndex[toPosition[0]]
	var r1 = rankIndex[toPosition[1]]	
	//  console.log("toPosition "+toPosition+" ["+[f1,r1]+"]")
	// subtract: to position - from position, [2,1] - [1,1] = [1,0] (difference)
	var diff = [Math.abs((f1-f)),Math.abs((r1-r))]
	// console.log("diff: ["+diff+"]")

	// enumerate intermediate squares between from position up to the to position inclusive
	// e.g., from position a1=[1,1] - difference=[1,0] = [0,0], no intermediate squares, so  path contains 		// b1 = [2,1]
	//
	// e.g. from position "h8"=[8,1] to "b1"=[2,1] is [2,1] - [8,1] = [-6,0]
	// [2,1] - [-6,0] = [2,1] + [6,0], range from 2..6

	var intermediateSteps = null
	var intermediateValuesLength = null
	var intermediateStepIndexes = []
	var fromFile = true
	var lowerBound = null

	if ((diff[1]==0) && (diff[0]!=0)){
		//make range from file
		lowerBound = Math.min(f,f1)
		if (f == lowerBound) {
			lowerBound +=1
		}
		intermediateValuesLength = diff[0]			
	}
	else if ((diff[1]!=0) && (diff[0]==0)){
		//make range from rank
		fromFile = false
		lowerBound = Math.min(r,r1)
		if (r == lowerBound){
			lowerBound += 1
		}
		intermediateValuesLength = diff[1]
	}
	
	var intermediateSteps = Array.from(new Array(intermediateValuesLength), (x, i) => i + lowerBound)	
	// console.log("intermediate steps: ", intermediateSteps)
	
	// construct file,rank indexes for all intermediate steps between from --> to position (inclusive)
	var i = 0
	while (i < intermediateSteps.length){
		if (fromFile){
			intermediateStepIndexes.push([intermediateSteps[i],r])
		}
		else {
			intermediateStepIndexes.push([f,intermediateSteps[i]])			
		}
		i += 1
	}
	
	
	// console.log("intermediate step indexes: ", intermediateStepIndexes)
	
	// now, we find where the "to" position is in the array...depending on whether or not the rank/file
	// of the to position is higher/lower than the from position, set the order of the array is set so that	// the first element is the closest square to the from position
	// f1,r1 
	var last = intermediateStepIndexes[intermediateStepIndexes.length - 1]
	var first = intermediateStepIndexes[0] 
	//console.log("first: "+first+" last: "+last+" from: "+[f1,r1])
	if (first[0]==f1 && first[1] == r1){
		intermediateStepIndexes.reverse()
	}
	
	// console.log("unfiltered rook path: ",intermediateStepIndexes)
	var intermediatePositions = []
	i = 0
	// traverse the positions and see if any of them are occupied
	while(i < intermediateStepIndexes.length) {
		var fp = reverseFileIndex[intermediateStepIndexes[i][0]] 
		var thePosition = fp+intermediateStepIndexes[i][1]
		if (Object.keys(getOccupiedSquares(aBoard)).includes(thePosition) && thePosition != toPosition){
			// found an intermediate square that's occupied...
			break	
		}
		intermediatePositions.push(thePosition)

		i += 1
	}
		
	return(intermediatePositions)
	
}
							

function getPieceTypeMoves(player, pieceType, newPosition, aBoard){
   /**
	*	@summary 		get all possible moves for all pieces of the given type (N, B, R, etc.).
	*	
	* 	@param {str}   	player           the player, "w" or "b"
	*	@param {str} 	pieceType 		 a pieceType, "R", "N", "B", "K", "Q"
	*	@param {str}	newPosition		 e.g., "f6", "a8", etc.
    *	@param {dict} 	aBoard			 the current board, see other descriptions
    *
    *	@fires			getPlayerPiecesForType()
    *
	*   @return {dict}   A dict w/ a key for each piece w/ array of positions {"wqr":["a8","b1"]}
	*/	
	
	
	if (pieceType == "N"){
		
		var availablePlayerKnights = getPlayerPiecesForType(player, "knight", aBoard)
		var  allKnightMoves = []
		var i = 0
		while (i < availablePlayerKnights.length){
			var aKnight = availablePlayerKnights[i]
			var m = {}
			m[aKnight] = knightMoves(aBoard[aKnight].position)
			allKnightMoves.push(m)
			i+=1
		}			
		
		return allKnightMoves		
	}
	
	else if (pieceType == "B"){
		
		var availablePlayerBishops = getPlayerPiecesForType(player, "bishop", aBoard)
		var  allBishopMoves = []
		var i = 0
		while (i < availablePlayerBishops.length){
			var aBishop = availablePlayerBishops[i]
			var m = {}
			m[aBishop] = bishopMoves(aBoard[aBishop].position)
			allBishopMoves.push(m)
			i+=1
		}		
		
		return allBishopMoves
	}
	
	else if (pieceType == "R"){
	
		var availablePlayerRooks = getPlayerPiecesForType(player, "rook", aBoard)
		var  allRookMoves = []
		var i = 0
		while (i < availablePlayerRooks.length){
			var aRook = availablePlayerRooks[i]
			var m = {}
			m[aRook] = rookMovesFrom(aBoard[aRook].position, newPosition, aBoard)
			allRookMoves.push(m)
			i+=1
		}
			
		return allRookMoves
	}
	
	else if (pieceType == "Q"){
		
		var availablePlayerQueens = getPlayerPiecesForType(player, "queen", aBoard)
		var aQueen = availablePlayerQueens[0]
		var m = {}
		var queenMoves = []
		m[aQueen] = [newPosition]
		queenMoves.push(m)
		// console.log("queen moves ", queenMoves)		
		return queenMoves
	}
	
	else if (pieceType == "K"){
		
		var playerKing = getPlayerPiecesForType(player, "king", aBoard)
		var aKing = playerKing[0]
		var m = {}
		var kingMoves = []
		m[aKing] = [newPosition]
		kingMoves.push(m)
		// console.log("king moves ", queenMoves)		
		return kingMoves		
	}
	
	else {
		return "did not recognize piece type: "+pieceType
	}			
}


function getPieceForPosition(player, pieceType, newPosition, aBoard) {
   /**
	*	@summary 		Which piece {R,N,B,Q,K} can move to this position ??.
	*	
	*	@description 	Get all moves possible on the board for that piece type (pieceTypeMoves)
	*	find the piece that could potentially move to that new position
	*	e.g., only white's queen knight can move to F6, etc. 	
	*	
	* 	@param {str}   	player           the player, "w" or "b"
	*	@param {str} 	pieceType 		 a pieceType, "R", "N", "B", etc.
	*	@param {str}	newPosition		 e.g., "f6", "a8", etc.
    *	@param {dict} 	aBoard			 the current board, see other descriptions
    *
    *	@fires			getPieceTypeMoves()
    *
	*   @return {str}   The piece , e.g., "wkr"
	*/
	
	var i = 0
	var piece = null
	var pieceTypeMoves = getPieceTypeMoves(player, pieceType, newPosition, aBoard)
	// console.log('pieceType: ',pieceType)			
	//console.log('pieceTypeMoves: ',pieceTypeMoves)
	
	while(i < pieceTypeMoves.length){
		var pieceKey = Object.keys(pieceTypeMoves[i])[0]
		var theseMoves = pieceTypeMoves[i][pieceKey]

		if (theseMoves.includes(newPosition)){
			piece = pieceKey.substring(1,3)
		}
		i+=1
	}	
	
	return piece //"wkr" is white king rook. 
}


function parseMove(index, move, aBoard){
	
	// trim special chars, i.e., +, #
	move = move.split("+")[0]
	move = move.split("#")[0]
	
	var piece = ""
	var file = ""
	var newPosition = ""
	var kingsideCastle = false
	var queensideCastle = false
	var capture = false
	var player = "w"
	

	if (index % 2 == 0) { 		
		player = "w"
	}
	else {
		player = "b"
	}

	if (move.includes('x')){ //capture
		capture = true
		splits = move.split("x")
		var piece = splits[0]
		var newPosition = splits[1]
		var capturedPiece = getOccupiedSquares(aBoard)[newPosition]		
		

		if (splits[1].includes('=')){
			// e.g., exd1=Q
			file = move[0]
			newPosition = move.substring(2, 4)
			var capturedPiece = getOccupiedSquares(aBoard)[newPosition]
			// console.log("np: "+newPosition+" cp: "+capturedPiece)
			const pawn = getPlayerPawnForFile(player, file, aBoard, newPosition)
			const promotionPieceType = move.substring(move.length-1, move.length)
			return([[pawn, newPosition],[capturedPiece,"x"],[pawn,"p"],[player+promotionPieceType, newPosition]])				
		}
		
		else {
			if (piece.length == 1){
				var pawnPiece = /[abcdefgh]/.test(piece);
				var nonPawnPiece = /[RBNKQ]/.test(piece)
				
				if (pawnPiece && !nonPawnPiece){
					// pawn capture
					file = splits[0]
					var newPosition = move.substring(2, 4)	
					const capturedPiece = getOccupiedSquares(aBoard)[newPosition]
					const pawn = getPlayerPawnForFile(player, file, aBoard, newPosition)
					return ([[pawn,newPosition],[capturedPiece,"x"]])
				}						
				else if (nonPawnPiece && !pawnPiece){
					// non-pwn capture
					var pieceType = piece
					piece = getPieceForPosition(player, pieceType, newPosition, aBoard)		
					
				}
			}
			
			else if (piece.length == 2){
				// console.log(move+": non-pwn file or rank disambiguation capture")
				var pieceType = move[0]
				var isFile = /[abcdefgh]/.test(move[1])
				var isRank = /[12345678]/.test(move[1])
				
				if (isFile && !isRank){
					// console.log("non-pwn file disambiguation")
					const file = move[1]
					piece = getPlayerPieceForFile(player, file, pieceType, aBoard)
					
					return ([[piece, newPosition],[capturedPiece,"x"]])					
				}
				else if (!isFile && isRank){
					// console.log(pieceType+" rank disambiguation")					
					const rank = move[1]
					piece = getPlayerPieceForRank(player, rank, pieceType, aBoard)
					
					return ([[piece, newPosition],[capturedPiece,"x"]])
				}				 
			}
			
			else if (piece.length == 3){
				var thePosition = move.substr(1,2)
				piece = getOccupiedSquares(aBoard)[thePosition]
				const capturedPiece = getOccupiedSquares(aBoard)[newPosition]
				return ([[piece, newPosition],[capturedPiece,"x"]])
			}
			
			else {
				return "could not parse capture move"
			}
			
		}
		
	}

	else if (!move.includes('x')){ // not a capture
		
		if (move.includes('=')){ // pawn promotion
			file = move[0]
			newPosition = move.substring(0, 2)
			const pawn = getPlayerPawnForFile(player, file, aBoard, newPosition)
			const promotionPieceType = move.substring(move.length-1, move.length)
			return([[pawn, newPosition],[pawn,"p"],[player+promotionPieceType, newPosition]])			
		}
		
		else { // non capture move
			if (move.length == 2){ // pawn move
				
				file = move[0]	
				// piece = pawns[file]
				newPosition = move
				
				const pawn = getPlayerPawnForFile(player, file, aBoard, newPosition)
				return ([[pawn,newPosition]])
			}
			
			else if (move.length == 3){
				if (move[0] == "O"){
					kingsideCastle = true
				}
				else {
					file = move[1] // one of a-h
					var newPosition = move.substring(1, 3)	// e.g., f3
					pieceType = move[0] // e.g., N,B,K,
					piece = getPieceForPosition(player, pieceType, newPosition, aBoard)
				}
			}
			
			else if (move.length == 4){
				var pieceType = move[0]
				var isFile = /[abcdefgh]/.test(move[1])
				var isRank = /[12345678]/.test(move[1])
				var newPosition = move.substring(2, 4)	// e.g., f3
				if (isFile && !isRank){
					// console.log("non-pwn file disambiguation")
					const file = move[1]
					piece = getPlayerPieceForFile(player, file, pieceType, aBoard)
					
					return ([[piece, newPosition]])					
				}
				else if (!isFile && isRank){
					// console.log(pieceType+" rank disambiguation")					
					const rank = move[1]
					piece = getPlayerPieceForRank(player, rank, pieceType, aBoard)
					
					return ([[piece,  newPosition]])
				}
				
				return "non-pwn rank or file disambiguation move"
			}
			
			else if (move.length == 5){
				if (move[0] == "O") {
					queensideCastle = true
				}
				else {
					return "non-pwn rank & file disambiguation move"
				}
			}
		
			else {
				return "could not parse non-capture move "
			}
		}
	}
	
	else {
		return "could not parse move/capture"
	}
	
	if (index % 2 == 0) { // determine black's move or white's move
		// white to move
		if (kingsideCastle) {
			return ([["wk","g1"],["wkr","f1"]])		
		}
		else if (queensideCastle){

			return ([["wk","c1"],["wqr","d1"]])	
		}
		
		piece = "w"+piece
	}
	
	else {
		// black to move
		if (kingsideCastle) {
			return ([["bk","g8"],["bkr","f8"]])		
		}
		else if (queensideCastle){
			return ([["bk","c8"],["bqr","d8"]])
		}
				
		piece = "b"+piece		
	}
	
	if (capture){
		var capturedPiece = getOccupiedSquares(aBoard)[newPosition]
		return ([[piece,newPosition],[capturedPiece,"x"]])	//'x' indicates capture
	}

	return ([[piece,newPosition]])	
	
}