import styled from 'styled-components'
import leftControl from '../../assets/images/left.png'
import rightControl from '../../assets/images/right.png'

export const CalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    max-width: 800px;
    padding: 20px;
    margin: 0 auto;

    @media (max-width: 992px) {
        padding: 10px;
        row-gap: 5px;
    }
    @media (max-width: 560px) {
        row-gap: 15px;
    }
`

export const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 560px) {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
    }
`

export const CalendarForm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
`

export const Logo = styled.img`
    max-width: 25%;
    height: auto;

    @media (max-width: 560px) {
        max-width: 60%;
    }
`

export const CalendarControl = styled.button`
    text-align: center;
    cursor: pointer;
    width: 26px;
    height: 22px;
    border: none;
    background-size: 100% !important;
`

export const LeftControl = styled(CalendarControl)`
    background: url(${leftControl});
`

export const RightControl = styled(CalendarControl)`
    background: url(${rightControl});
`

export const CalendarSelect = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #fff;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    padding: 3px;

    @media (max-width: 992px) {
        width: 70%;
    }
    @media (max-width: 560px) {
        width: 100%;
        flex-direction: column;
        row-gap: 10px;
    }
`

export const CalendarDate = styled.div`
    font-size: 16px;
    min-width: 104px;
    text-align: center;
`

export const CalendarBody = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    @media (max-width: 992px) {
        row-gap: 5px;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 10px 15px;

    @media (max-width: 992px) {
        gap: 5px 10px;
    }
`

export const GridRow = styled(GridContainer)`
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    font-size: 14px;
    padding: 2px 0;
    border-radius: 5px;

    @media (max-width: 560px) {
        display: none;
    }
`

export const GridCell = styled.div`
    border: 1px solid black;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    background: #fff;
`

export const GridCellEmpty = styled(GridCell)`
    visibility: hidden;
    user-select: none;
`

export const GridColumn = styled(GridCell)`
    border: none;
    cursor: default;
    border-radius: none;
    overflow: hidden;
    display: block;
    box-shadow: none;
`

export const CellDate = styled.span`
   padding: 5px 10px;
   font-weight: bold;

   @media (max-width: 992px) {
        padding: 3px 5px;
        font-size: 14px;
    }
`

export const CellStatus = styled.span`
    font-size: 10px;
    padding: 2px 10px;
    font-family: sans-serif;

    @media (max-width: 560px) {
        padding: 2px 0;
    }
`

export const ModalWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: none;
`

export const ModalContent = styled.div`
    max-height: 80vh;
    height: 100%;
    width: 100%;
    max-width: 420px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #1f456e;
    font-weight: bold;
    font-size: 14px;
`

export const ModalTitle = styled.div`
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
`

export const ModalTable = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 10px;
`

export const TableCol = styled.div`
    
`

export const Button = styled.button`
    align-self: center;
    background: #1f456e;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    padding: 5px 20px;
`