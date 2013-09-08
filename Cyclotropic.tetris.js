$(document).ready(function() {

    var   Tile
        , Square, Stick, TetrisS, TetrisZ, TetrisL, TetrisJ, TetrisT
        , Cyclotropic;

    Tile =
    function() {
        this.states = [];
        this.currentState = 0;
        this.nextState = function() {
            this.currentState = (this.currentState + 1) % this.states.length;
        };
        this.toString = function() {
            return this.states[this.currentState].toString();
        };
    };

    Square =
    function() {
        var   temp = new Tile();
        temp.states =   [   [   [0, 1], [1, 0], [1, 1]
                            ]
                        ];
        return temp;
    };

    Stick =
    function() {
        var   temp = new Tile();
        temp.states =   [   [   [-1, 0], [1, 0], [2, 0]
                            ],
                            [   [0, -1], [0, 1], [0, 2]
                            ]
                        ];
        return temp;
    };

    TetrisS =
    function() {
        var   temp = new Tile();
        temp.states =   [   [   [-1, 1], [0, 1], [1, 0]
                            ],
                            [   [0, -1], [1, 0], [1, 1]
                            ]
                        ];
        return temp;
    };

    TetrisZ =
    function() {
        var   temp = new Tile();
        temp.states =   [   [   [-1, -1], [0, -1], [1, 0]
                            ],
                            [   [0, 1], [1, -1], [1, 0]
                            ]
                        ];
        return temp;
    };

    TetrisL =
    function() {
        var   temp = new Tile();
        temp.states =   [   [   [-1, 0], [1, 0], [1, 1]
                            ],
                            [   [0, -1], [0, 1], [1, -1]
                            ],
                            [   [-1, -1], [-1, 0], [1, 0]
                            ],
                            [   [-1, 1], [0, -1], [0, 1]
                            ]
                        ];
        return temp;
    };

    TetrisJ =
    function() {
        var   temp = new Tile();
        temp.states =   [   [   [-1, 0], [1, -1], [1, 0]
                            ],
                            [   [-1, -1], [0, -1], [0, 1]
                            ],
                            [   [-1, 0], [-1, 1], [1, 0]
                            ],
                            [   [0, -1], [0, 1], [1, 1]
                            ]
                        ];
        return temp;
    };

    TetrisT =
    function() {
        var   temp = new Tile();
        temp.states =   [   [   [0, -1], [0, 1], [1, 0]
                            ],
                            [   [-1, 0], [0, -1], [1, 0]
                            ],
                            [   [-1, 0], [0, -1], [0, 1]
                            ],
                            [   [-1, 0], [0, 1], [1, 0]
                            ]
                        ];
        return temp;
    };

    Cyclotropic.tetris =
    {
        board: [ [false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
		,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
	        ,[false, false, false, false, false, false, false, false, false, false] 
               ]
	,

        falling_piece: { row: 20
	               , column: 5
		       , tile: null
		       }
	,

	next_piece: null,

    }

});
