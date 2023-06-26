import { useEffect, useState } from 'react'
import { startOfMonth, sub, add, format, getMonth, getYear } from 'date-fns'
import { daysOfWeek } from '../../constants'
import Cell from './Cell'
import Modal from './Modal'
import {
    Logo,
    CalendarBody,
    CalendarForm,
    CalendarSelect,
    LeftControl,
    RightControl,
    CalendarDate,
    CalendarHeader,
    CalendarWrapper,
    GridContainer,
    GridRow,
    GridColumn
} from './styled'
import logo from '../../assets/images/logo.png'

type AvailabilityData = {
    boat_name: string
    status: string
    status_color: string
}

type ReceivedDataItem = {
    is_visible: boolean
    date: number
    label: string
    color: string
    availability: AvailabilityData[]
}

interface CalendarProps {
    value?: Date
    onChange: (value: Date) => void
}

const Calendar: React.FC<CalendarProps> = ({ value = new Date(), onChange }) => {
    const [result, setResult] = useState<{cells: ReceivedDataItem[]}>({ cells: [] })
    const [isModalActive, setIsModalActive] = useState<boolean>(false)
    const [selectedDay, setSelectedDay] = useState<number>(0)

    const startDate = startOfMonth(value)
    const prefixDays = startDate.getDay() - 1
    const currentMonthIndex = getMonth(value) + 1
    const currentYear = getYear(value)

    const selectedDateData = JSON.stringify({
        'request': 'get_month_availability_calendar',
        'month': currentMonthIndex,
        'year': currentYear
    })

    async function fetchData() {
        try {
            await fetch('https://api.lvbh.marinapro.app/backend/api/index.php', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: selectedDateData
            })
            .then(response => response.json())
            .then((result) => setResult(result))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        console.log(result)
    }, [result])

    const visibleCells = result.cells.filter(cell => {
        // eslint-disable-next-line no-prototype-builtins
        return cell.hasOwnProperty('is_visible') && cell.is_visible === true
    })

    const checkAvailability = (index: number): boolean => {
        // eslint-disable-next-line no-prototype-builtins
        return visibleCells[index]?.hasOwnProperty('availability') && visibleCells[index]?.availability !== null
    }

    const getAvailabilityData = (index: number): AvailabilityData[] => {
        return visibleCells[index]?.availability 
    }

    const selectPrevMonth = () => onChange && onChange(sub(value, { months: 1 }))
    const selectNextMonth = () => onChange && onChange(add(value, { months: 1 }))

    const openModal = (day: number) => {
        setIsModalActive(true)
        setSelectedDay(day)
    }   

    return (
        <CalendarWrapper>
            <CalendarHeader>
                <Logo src={logo} />
                <CalendarSelect>
                    <div>Rental Availability for</div>
                    <CalendarForm>
                        <LeftControl onClick={selectPrevMonth} />
                        <CalendarDate>{format(value, 'LLLL yyyy')}</CalendarDate>
                        <RightControl onClick={selectNextMonth} />
                    </CalendarForm>
                </CalendarSelect>
            </CalendarHeader>

            <CalendarBody>
                <GridRow>
                    {daysOfWeek.map(day => (
                        <GridColumn key={day}>{day}</GridColumn>
                    ))}
                </GridRow>

                <GridContainer>
                    {Array.from({ length: prefixDays }).map((_, index) => (
                        <Cell key={index} isHidden />
                    ))}

                    {visibleCells && Array.from(visibleCells).map((item, index) => {
                        const date = index + 1

                        return (
                            <Cell
                                key={index}
                                onModalOpen={openModal}
                                isCellAvailable={checkAvailability(date)}
                                label={item.label}
                                color={item.color}
                            >
                                {date}
                            </Cell>
                        )
                    })}
                </GridContainer>
            </CalendarBody>

            <Modal
                isActive={isModalActive}
                setIsActive={setIsModalActive}
                availabilityData={getAvailabilityData(selectedDay)}
            />
        </CalendarWrapper>
    )
}

export default Calendar
