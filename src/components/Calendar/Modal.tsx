import {
    ModalWrapper,
    ModalContent,
    ModalTitle,
    ModalTable,
    TableRow,
    TableCol,
    Button
} from './styled'

type AvailabilityData = {
    boat_name: string
    status: string
    status_color: string
}

interface ModalProps extends React.PropsWithChildren {
    isActive?: boolean
    setIsActive?: any
    availabilityData: AvailabilityData[]
}

const Modal: React.FC<ModalProps> = ({ isActive, setIsActive, availabilityData }) => {
    return (
        <ModalWrapper
            style={{ display: isActive ? 'flex' : 'none' }} 
            onClick={() => setIsActive(false)}
        >
            <ModalContent onClick={(event: any) => event.stopPropagation()}>
                <div>
                    <ModalTitle>Availability</ModalTitle>

                    <ModalTable>
                        {availabilityData?.map(item => (
                            <TableRow key={item.boat_name}>
                                <TableCol>{item.boat_name}</TableCol>
                                <TableCol style={{ color: item.status_color }}>{item.status}</TableCol>
                            </TableRow>
                        ))}
                    </ModalTable>
                </div>

                <Button onClick={() => setIsActive(false)}>Close</Button>
            </ModalContent>
        </ModalWrapper>
    )
}

export default Modal
