document.addEventListener("DOMContentLoaded", function () {
    var board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];

    var selectedTile = null;

    function createBoard() {
        var boardContainer = document.getElementById('board');
        boardContainer.innerHTML = "";

        for (var row = 0; row < 6; row++) {
            for (var col = 0; col < 6; col++) {
                var tile = document.createElement('div');
                tile.className = 'tile';

                tile.setAttribute('data-row', row);
                tile.setAttribute('data-col', col);

                if (board[row][col] !== 0) {
                    tile.textContent = board[row][col];
                    tile.classList.add('preset');

                }

                tile.onclick = function () {
                    if (selectedTile) !== null) {
                        selectedTile.classList.remove('selected');

                    }
                    selectedTile = this;
                    selectedTile.classList.add('selected');
                };

                 boardContainer.appendChild(tile);

            }
        }
    }


