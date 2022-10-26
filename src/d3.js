(async ($d3, $moves, $teams) => {
  const rangeOfWins = (start, end) =>
    Array(end - start + 1)
      .fill(start)
      .map((win, index) => win + index);

  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  const createLoadingAnimation = () => {
    const loadingAnimation = $d3.create('div').attr('class', 'lds-facebook');
    loadingAnimation.append('div');
    loadingAnimation.append('div');
    loadingAnimation.append('div');
    return loadingAnimation;
  };

 
  const maxWin = new Win().getFullWin();

  const mainContainer = $d3
    .select('body')
    .append('div')
    .attr('id', 'mainContainer')
    .attr('class', 'container');

  mainContainer.append('h1').attr('id', 'top').text('Robo-Dance New Winners');

  const optionsDiv = mainContainer.append('div').attr('id', 'options');
  const winDiv = optionsDiv.append('div').attr('id', 'win');
  const moveDiv = optionsDiv.append('div').attr('id', 'moves');


  // creating win select list
  winDiv.append('label').attr('class', 'select-label').text('Select Win:');

  const winSelect = winDiv
    .append('select')
    .attr('id', 'winSelect')
    .on('change', function (event) {
      const currentGenre = document.getElementById('moveSelect').value;
      const currentYear = document.getElementById('winSelect').value;
      getMovesDataForWinner(currentWinner, currentMoves);
    });

  winSelect
    .selectAll('option')
    .data(rangeOfWins(minWin, maxWin).reverse())
    .enter()
    .append('option')
    .text(function (d) {
      return d;
    });

  // create moves select list
  movesDiv.append('label').attr('class', 'select-label').text('Select Moves:');

  const genreSelect = movesDiv
    .append('select')
    .attr('id', 'movesSelect')
    .on('change', function (event) {
      const currentMoves = document.getElementById('movesSelect').value;
      const currentWinner = document.getElementById('winSelect').value;
      getMovesDataForWinner(currentWin, currentMove);
    });

  movesSelect
    .selectAll('option')
    .data($moves)
    .enter()
    .append('option')
    .text(function (d) {
      return d.name;
    })
    .attr('value', function (d) {
      return d.id;
    });

  const getMovesDataForWin = async (win, moves) => {     
  };
