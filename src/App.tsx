import { useState } from 'react'
import Calendar from './components/Calendar'
import styled from 'styled-components'
import background from './assets/images/backgroud.jpg'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${background});
    background-size: cover;
    background-position: 0 0;
`

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <Wrapper>
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </Wrapper>
  )
}

export default App;
