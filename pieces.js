// color schemes
white_piece_fill = "#fbfbfb"
white_piece_stroke = "black"

black_piece_fill = "#303030"
black_piece_stroke = "#f4f4f4"


// paths for each piece type

rook_path = "M34.93,6v6.88L33,14.5a.13.13,0,0,0,0,.21l.79.65a.13.13,0,0,1,0,.21l-.61.5a1.19,1.19,0,0,1-.74.26H30.76l2,20.34A.42.42,0,0,0,33,37l2.68.72a.42.42,0,0,1,.29.38v1.23a.43.43,0,0,0,.23.36l2.72,1.49a.13.13,0,0,1,0,.22L37.07,43a.28.28,0,0,1-.13,0H12.06a.28.28,0,0,1-.13,0L10.05,41.4a.13.13,0,0,1,0-.22l2.72-1.49a.43.43,0,0,0,.23-.36V38.1a.42.42,0,0,1,.29-.38l2.4-.39A.44.44,0,0,0,16,37l2.24-20.67H16.59a1.19,1.19,0,0,1-.74-.26l-.61-.5a.13.13,0,0,1,0-.21l.79-.65a.13.13,0,0,0,0-.21l-2-1.62V6h4.17V8.58h3.13V6h6.26V8.58h3.13V6Z"

knight_path = "M10.72,41.77a.72.72,0,0,1,0-1.11L13,39l0-.9,3.33-2.6a.72.72,0,0,0,.07-1.07l-.73-.73a.72.72,0,0,1,.19-1.15L17,32l-2-.67a.72.72,0,0,1-.33-1.14l8.15-10a.83.83,0,0,0,.19-.52v-.38a.83.83,0,0,0-1.19-.74L21,19H17.17a.72.72,0,0,0-.32.08l-1.32.66a.84.84,0,0,1-.95-.16h0a.82.82,0,0,1,0-1.16L15,18H13.72a.72.72,0,0,1-.72-.72v-1a.71.71,0,0,1,.17-.47l5.62-6.55A.69.69,0,0,1,19.33,9h3A.72.72,0,0,0,23,8.28v-2a.72.72,0,0,1,1.09-.62C26,6.79,29.84,9.25,31,11c2,3,3,9,3,9H33s1,4,0,7a14.38,14.38,0,0,1-2.32,4.22A.82.82,0,0,0,31,32.47l0,0c1,.51,1,.51.21,1.32l-.4.4A.82.82,0,0,0,31,35.52l5,2.58,0,.9,2.23,1.66a.72.72,0,0,1,.05,1.11l-1.13,1a.73.73,0,0,1-.49.19H12.34a.73.73,0,0,1-.49-.19Z"

bishop_path = "M38.65,41.07,36,40l0-1.37a1,1,0,0,0-.47-.79l-1.37-.76L33,37a18.66,18.66,0,0,1-3-4c-1-2,0-6,0-6a1,1,0,0,0,0-2l-1-2,1-2a1,1,0,0,0,1-1l-1-1a4.33,4.33,0,0,0,2-4c0-3-3-5-4-6l-.15-.12A2.85,2.85,0,0,0,28,8a3,3,0,0,0-6,0,2.85,2.85,0,0,0,.15.88L22,9l-2,2,3,4a1,1,0,0,1-1,1l-3-4a4.38,4.38,0,0,0-1,3c0,3,1,4,1,4l-1,1a1,1,0,0,0,1,1l1,2-1,2a1,1,0,0,0,0,2s1,4,0,6a18.66,18.66,0,0,1-3,4l-1.14.08-1.37.76a1,1,0,0,0-.47.79L13,40l-2.65,1.07a.19.19,0,0,0-.06.31L12.06,43H36.94l1.77-1.62A.19.19,0,0,0,38.65,41.07Z"

king_path = "M17.2,8.07,20,16.6s-2,.43-2,1,1,1,1,1a1.39,1.39,0,0,1,2,0c1,1-3,14.4-3,14.4h1v1l-2.2.73a1.17,1.17,0,0,0-.8,1.11v.35a1.16,1.16,0,0,1-.76,1.09l-1.41.42-.09.07-.46,1.11a7.46,7.46,0,0,1-1.15,1.47h0a1.41,1.41,0,0,0-.43,2.33h0a1.17,1.17,0,0,0,.79.31H36.4a1.38,1.38,0,0,0,.94-.37l.34-.31a1.4,1.4,0,0,0-.11-2.15L36,39l0-.9-2.21-.82A1.16,1.16,0,0,1,33,36.19v-.35a1.17,1.17,0,0,0-.8-1.11L30,34V33h1s-4-13.4-3-14.4a1.39,1.39,0,0,1,2,0s1-.35,1-1-2-1-2-1L32.5,8a.83.83,0,0,0-.7-1.14l-6.05-.53,0-1.57h1.54V3H25.75V1.69H24V3l-1.6,0,.06,1.72,1.52,0,0,1.58L17.9,7A.83.83,0,0,0,17.2,8.07Z"

queen_path = "M12.13,40.35h0a7.46,7.46,0,0,0,1.15-1.47l.46-1.11a.2.2,0,0,1,.12-.08l1.38-.41A1.16,1.16,0,0,0,16,36.19v-.35a1.17,1.17,0,0,1,.8-1.11L19,34V33H18s4-13.4,3-14.4a1.39,1.39,0,0,0-2,0l-1-1,2-1v-1a1,1,0,0,1-1-1,.92.92,0,0,1,.74-1,.24.24,0,0,0,.17-.32l-1.78-4.4a.88.88,0,0,1,0-.64l0-.08a.92.92,0,0,1,1.74,0l.06.2a1.13,1.13,0,0,0,.22.36L21,9.6l.35.36a.94.94,0,0,0,1.3,0l.25-.26a.69.69,0,0,0,.16-.22l1.18-3.94a.92.92,0,0,1,1.62,0l1.08,3.94a.69.69,0,0,0,.16.22l.25.26a.94.94,0,0,0,1.3,0l1.2-1.2a1.13,1.13,0,0,0,.22-.36l.06-.2a.92.92,0,0,1,1.74,0h0a.92.92,0,0,1-.09.76l-2.63,4.33a.27.27,0,0,0,.17.37.9.9,0,0,1,.68.94,1,1,0,0,1-1,1v1l2,1-1,1a1.39,1.39,0,0,0-2,0c-1,1,3,14.4,3,14.4H30v1l2.2.73a1.17,1.17,0,0,1,.8,1.11v.35a1.16,1.16,0,0,0,.76,1.09L36,38.1l0,.9,1.57,1.17a1.4,1.4,0,0,1,.11,2.15l-.34.31a1.38,1.38,0,0,1-.94.37H12.51a1.17,1.17,0,0,1-.79-.31h0A1.41,1.41,0,0,1,12.13,40.35Z"

pawn_path = "M35,41.18l-1.88-1.49a.47.47,0,0,1-.16-.36V38.1a.44.44,0,0,0-.2-.38L29,37a.44.44,0,0,1-.2-.33L26.72,25.36h1.14A20.38,20.38,0,0,0,31,25.19l.43-.51a.18.18,0,0,0,0-.2l-.55-.66a.15.15,0,0,1,0-.2L31,22H28.31a6,6,0,1,0-6.62,0H19l.21,1.62a.15.15,0,0,1,0,.2l-.55.66a.15.15,0,0,0,0,.2l.42.51a18,18,0,0,0,3,.25h1.14L21,36.75a36.9,36.9,0,0,1-3.71,1,.44.44,0,0,0-.2.38v1.23a.47.47,0,0,1-.16.36l-1.88,1.49a.16.16,0,0,0,0,.22L16.33,43a.18.18,0,0,0,.09,0H33.58a.18.18,0,0,0,.09,0L35,41.4A.16.16,0,0,0,35,41.18Z"

// white king rook = wkr, A1
// white queen rook = wqr, H1
// black king rook = bqr, A8
// black queen rook = bkr, H8

start_positions = {
					"wqr":{
						"path": rook_path
						, "name": "white's queen rook"
						, "position": "A1"
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
						}
					,"wkr":{
						"path": rook_path
						, "name": "white's king rook"						
						, "position": "H1"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wqn":{
						"path": knight_path
						, "name": "white's queen knight"						
						, "position": "B1"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wkn":{
						"path": knight_path
						, "position": "G1"						
						, "name": "white's king knight"												
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wqb":{
						"path": bishop_path
						, "name": "white's queen bishop"						
						, "position": "C1"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wkb":{
						"path": bishop_path
						, "name": "white's king bishop"						
						, "position": "F1"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wq":{
						"path": queen_path
						, "name": "white's queen"						
						, "position": "D1"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}	
					,"wk":{
						"path": king_path
						, "name": "white's king"						
						, "position": "E1"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wqrp":{
						"path": pawn_path
						, "name": "white's queen rook pawn"						
						, "position": "A2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}																									
					,"wqnp":{
						"path": pawn_path
						, "name": "white's queen knight pawn"						
						, "position": "B2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wqbp":{
						"path": pawn_path
						, "name": "white's queen bishop pawn"						
						, "position": "C2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}	
					,"wqp":{
						"path": pawn_path
						, "name": "white's queen pawn"						
						, "position": "D2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}	
					,"wkp":{
						"path": pawn_path
						, "name": "white's kings pawn"						
						, "position": "E2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}
					,"wkbp":{
						"path": pawn_path
						, "name": "white's king bishop pawn"						
						, "position": "F2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}		
					,"wknp":{
						"path": pawn_path
						, "name": "white's king knight pawn"						
						, "position": "G2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}				
					,"wkrp":{
						"path": pawn_path
						, "name": "white's king rook pawn"												
						, "position": "H2"						
						, "fill": white_piece_fill
						, "stroke": white_piece_stroke
					}			
					,"bqr":{
						"path": rook_path
						, "position": "A8"
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bkr":{
						"path": rook_path
						, "position": "H8"
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bqn":{
						"path": knight_path
						, "position": "B8"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bkn":{
						"path": knight_path
						, "position": "G8"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bqb":{
						"path": bishop_path
						, "position": "C8"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bkb":{
						"path": bishop_path
						, "position": "F8"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bq":{
						"path": queen_path
						, "position": "D8"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}	
					,"bk":{
						"path": king_path
						, "position": "E8"						
							, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}				
					,"bqrp":{
						"path": pawn_path
						, "position": "A7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}																									
					,"bqnp":{
						"path": pawn_path
						, "position": "B7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bqbp":{
						"path": pawn_path
						, "position": "C7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}	
					,"bqp":{
						"path": pawn_path
						, "position": "D7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}	
					,"bkp":{
						"path": pawn_path
						, "position": "E7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}
					,"bkbp":{
						"path": pawn_path
						, "position": "F7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}		
					,"bknp":{
						"path": pawn_path
						, "position": "G7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}				
					,"bkrp":{
						"path": pawn_path
						, "position": "H7"						
						, "fill": black_piece_fill
						, "stroke": black_piece_stroke
					}																																																																							
				}