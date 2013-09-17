var Tetris;

Tetris = {
    board : [
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false] ,
        [false, false, false, false, false, false, false, false, false, false]
    ] ,

    tetrominoes : [
        // Since I have the player's cursor as an origin, it only takes three Cartesian
        // points to represent a tetromino. Most shapes will actually store several
        // triplets - pre-computed rotations.

        // The Square
        [
            [[0, 1], [1, 0], [1, 1]] ,
        ] ,

        // The Line
        [
            [[-1, 0], [1, 0], [2, 0]] ,
            [[0, -1], [0, 1], [0, 2]] ,
        ] ,

        // The Z
        [
            [[-1, 1], [0, 1], [1, 0]] ,
            [[0, -1], [1, 0], [1, 1]]
        ] ,

        // The S
        [
            [[-1, -1], [0, -1], [1, 0]] ,
            [[0, 1], [1, -1], [1, 0]]
        ] ,

        // The J
        [
            [[-1, 0], [1, 0], [1, 1]] ,
            [[0, -1], [0, 1], [1, -1]] ,
            [[-1, -1], [-1, 0], [1, 0]] ,
            [[-1, 1], [0, -1], [0, 1]]
        ] ,

        // The L
        [
            [[-1, 0], [1, -1], [1, 0]] ,
            [[-1, -1], [0, -1], [0, 1]] ,
            [[-1, 0], [-1, 1], [1, 0]] ,
            [[0, -1], [0, 1], [1, 1]]
        ] ,

        // The T
        [
            [[0, -1], [0, 1], [1, 0]] ,
            [[-1, 0], [0, -1], [1, 0]] ,
            [[-1, 0], [0, -1], [0, 1]] ,
            [[-1, 0], [0, 1], [1, 0]]
        ]
    ] ,

    cursor : [0, 5] ,

    falling_piece : {
        current_tetromino: null ,
        next_tetromino: null ,
        new_tetromino: function () {
            var i = Math.floor( 7 * Math.random() );
            return Tetris.tetrominoes[i];
        }
    }
}
