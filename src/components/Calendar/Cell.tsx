import { GridCell, GridCellEmpty, CellDate, CellStatus } from './styled'

interface CellProps extends React.PropsWithChildren {
    isHidden?: boolean
    onModalOpen?: any
    isCellAvailable?: boolean
    label?: string
    color?: string
}

const Cell: React.FC<CellProps> = ({
        isHidden = false,
        onModalOpen,
        isCellAvailable,
        label,
        color,
        children
    }) => {
    return (
    !isHidden ? (
        <GridCell
            style={{ pointerEvents: isCellAvailable ? 'all' : 'none' }}
            onClick={() => { onModalOpen(children)} }
        >
            <CellDate>{children}</CellDate>
            <CellStatus style={{ background: color }}>{label}</CellStatus>
        </GridCell>
    ) : (
        <GridCellEmpty>{children}</GridCellEmpty>
    )
  )
}

export default Cell
