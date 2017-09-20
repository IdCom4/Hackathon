$(document).ready(function() {
	var grid = nex Array();

	function initGrid () {
		var y = 0;
		var x = 0;
		while(y < 10)
		{
			grid[y] = new Array();
			while(x < 10)
			{
				grid[y][x] = 0;
				x++;
			}
			x = 0;
			y++;
		}
		y = 0;
		x = 0;
	}
});