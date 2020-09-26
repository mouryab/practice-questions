function shortestCellPath(grid, sr, sc, tr, tc) {
	/**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/
  
}

// grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
// sr = 0, sc = 0, tr = 2, tc = 0
// output: 8
// (The lines below represent this grid:)
// 1101
// 0010
// 1101
// (0, 0) -> (2, 0)

// (0, 0)
// (0, 1) -> (0,3) (1, 1)
//(x-tr)^2 + (y-tc)^2

// O(m*n)
// O(m*n)

// (2-0)^2 + (0-3)^2 > (2-1)^2 + (0-1)^2
// x, y