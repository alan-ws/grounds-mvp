import {styled} from 'goober';
import Icon from './profile.jpg'
import DownArrow from './downArrow.svg';
import { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';


const COLORS = {
  white: '#fff',
  coal: '#232',
  yellow: '#FFE769'
};

const Nav = styled('nav')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.coal};
  height: 64px;
`;

const Hamburger = styled('div')`
  display: flex;
  flex-direction: column;
  width: 46px;
  height: 46px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

const Line = styled('div')`
  height: 8px;
  background-color: ${COLORS.coal};
  width: 32px;
  transform: skewY(-24deg);
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.yellow};
  }
`;

const Logo = styled('h1')`
  color: ${COLORS.coal};
  font-size: 1.2rem;
  font-weight: bold;
  word-break: break-all;
  margin-left: 8px;
`;

const Container = styled('div')<{direction?: string, margin?: number, override?: boolean, overflow?: boolean}>`
  display: flex;
  flex-direction: ${(props) => props.direction === 'column' ? `column` : `row`}; 
  width: 80%;
  margin : 0 auto;
  margin-left: ${(props) => props.margin ? props.margin : ``}px;
  ${(props) =>
    props.override
    ? `> h1, h3, h4, p {
      color: ${COLORS.coal};
      margin: 0;
    }`
    : ``  
  };
  ${(props) => props.overflow ? `overflow-x: hidden` : ``};
`

const Br = styled('div')<{mutliplier?: number}>`
  height: ${(props) => props.mutliplier ? props.mutliplier * 16 : 16}px;
`

const Span = styled('span')`
  color: ${COLORS.coal};
`

const ProfileIcon = styled('img')`
  height: 96px;
  width: 96px;
  border-radius: 50%;
  border: 8px solid ${COLORS.coal};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const Button = styled('a')<{colors?: Array<string>}>`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.colors ? props.colors[0] : COLORS.coal};
  align-items: center;
  background-color: ${(props) => props.colors ? props.colors[1] : COLORS.white};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  > img {
    height: 24px;
  }
  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const [rank, setRank] = useState<string>("QUEUES");
  const [showRanks, setShowRanks] = useState<Boolean>(false);

  return <>
    <Nav>
      <Logo>G</Logo>
      <h3>$1500</h3>
      <Hamburger>
        <Line/>
        <Line/>
        <Line/>
      </Hamburger>
    </Nav>
    <Br />
    <Container>
      <ProfileIcon src={Icon} />
      <Container direction={"column"} margin={12} override>
        <Logo>InsaneDanishDude</Logo>
        <Br />
        <h4>GOLD V | LP: 58</h4>
        <h4>240W 205L | 54%</h4>
      </Container>
    </Container>
    <Br mutliplier={2} />
    <Container direction={"column"}>
      <Button>
        {rank}
        <img src={DownArrow} />
      </Button>
    </Container>
    <Br mutliplier={2} />
    <Container overflow>
      <CalendarHeatmap
        startDate={new Date('2016-01-01')}
        endDate={new Date('2016-04-01')}
        showOutOfRangeDays={true}
        values={[
          { date: '2016-01-01' },
          { date: '2016-01-22' },
          { date: '2016-01-30' },
          { date: '2016-01-20' },
          { date: '2016-01-19' },
          { date: '2016-01-15' },
          { date: '2016-01-30' },
          // ...and so on
        ]}
      />
    </Container>
  </>
}

export default App;