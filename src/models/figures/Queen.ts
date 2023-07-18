import blackLogo from 'public/images/black-queen.png'
import whiteLogo from 'public/images/white-queen.png'

import { Cell } from '../Cell'
import { Colors } from '../Colors'

import { Figure, FigureNames } from './Figure'

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.QUEEN
	}

	canMove(target: Cell) {
		if (!super.canMove(target)) return false
		if (this.cell.isEmptyVertical(target)) return true
		if (this.cell.isEmptyHorizontal(target)) return true
		if (this.cell.isEmptyDiagonal(target)) return true
		return false
	}
}
