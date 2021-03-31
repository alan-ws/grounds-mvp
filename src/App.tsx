import {styled} from 'goober';
import Icon from './profile.jpg'
import DownArrow from './downArrow.svg';
import Info from './info.svg';
import { useState } from 'react';



const COLORS = {
  white: '#fff',
  coal: '#232',
  yellow: '#FFE769',
  grey: '#909090',
  green: 'rgb(84, 228, 62)'
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

const Logo = styled('h1')<{small?: boolean, medium?: boolean}>`
  color: ${COLORS.coal};
  font-size: ${props => props.small ? `1.2rem` : props.medium ? `2rem` : `3rem`};
  font-weight: bold;
  word-break: break-all;
  margin: 0;
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
      margin-left: 8px;
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

const HeatmapContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`
const Square = styled('div')<{gradient?: number, hasHover?: boolean}>`
  height: 25px;
  width: 25px;
  background-color: ${(props) =>
    props.gradient
    ? COLORS.green : COLORS.grey
  };
  opacity: ${props => props.gradient ? props.gradient / 100 : 0.25};
  margin: 2px;
  ${props =>
    props.hasHover
    ? `&:hover {
      border: 1px solid ${COLORS.coal};
      cursor: pointer;
    }`
    : ``
  }
`;

// const Thing = () => <svg>
//   <g fill='#464646'>
//     <path d="M10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490c0-270.6-219.4-490-490-490C229.4,10,10,229.4,10,500z M441.9,500L211,192.4L867.6,500L211,807.6L441.9,500z"/>
//   </g>
// </svg>

const Challenges = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  padding-left: 8px;
  padding-bottom: 8px;
  > h3 {
    color: ${COLORS.coal};
    margin: 0;
  }
  > img {
    height: 24px;
    &:hover {
      cursor: pointer;
    }
  }
`

function Persona() {
  const data: {
    reputation: number, recentReputation: number, nextRank: number, mostPlayed: Array<number>, trophiesEarned: number
  } = {
    reputation: 872,
    recentReputation: 40,
    nextRank: 92,
    mostPlayed: [1,2,4],
    trophiesEarned: 12
  }

  const PersonaContainer = styled('div')`
    display: flex;
  `;

  const InCon = styled('div')`
    &:last-child {
      margin-left: 48px;
    }
  `;
  const Badge = styled('div')`
    display: flex;
    justify-content: flex-end;
    padding: 3px;
    background-color: ${COLORS.green};
    border-radius: 8px;
    > p {
      font-size: 1rem;
    font-weight: bold;
    color: ${COLORS.white};
    margin: 0;
    margin-right: 16px;
    }
  `;

  const Bar = styled('div')<{fill: number}>`
    height: 40px;
    width: 100%;
    background-image: ${(props) => `linear-gradient(90deg, ${COLORS.green} ${props.fill}%, ${COLORS.grey} ${(100 - props.fill)}%`});
  `

  return <PersonaContainer>
    <InCon>
      <Logo small>Reputation</Logo>
      <Logo>{data.reputation}</Logo>
      <Badge><p>+{data.recentReputation}</p></Badge>
    </InCon>
    <InCon>
      <Logo small>Next reward</Logo>
      <Br />
      <Bar fill={data.nextRank} />
      <Logo small>reward 1000</Logo>
    </InCon>
  </PersonaContainer>
}

function Heatmap() {
  const data: Array<{wL: number, gamesPlayed: number, date: number}> = [
    {wL: 25, gamesPlayed: 5, date: 1},
    {wL: 75, gamesPlayed: 4, date: 2},
    {wL: 50, gamesPlayed: 3, date: 3},
    {wL: 10, gamesPlayed: 2, date: 4},
    {wL: 0, gamesPlayed: 1, date: 5},
    {wL: 100, gamesPlayed: 4, date: 8},
    {wL: 25, gamesPlayed: 5, date: 9},
    {wL: 25, gamesPlayed: 6, date: 10},
    {wL: 50, gamesPlayed: 10, date: 12},
    {wL: 75, gamesPlayed: 5, date: 13},
    {wL: 87, gamesPlayed: 7, date: 14},
    {wL: 22, gamesPlayed: 3, date: 16},
    {wL: 50, gamesPlayed: 2, date: 17},
    {wL: 57, gamesPlayed: 1, date: 19},
  ]

  let dayCounter = 1;
  let index = 0;
  let HeatMap = [];

  while (dayCounter <= 20)
  {
    if (index >= (data.length -1) || dayCounter !== data[index].date)
    {
      HeatMap.push(<Square />)
    }
    else
    {
      HeatMap.push(<Square gradient={data[index].wL} hasHover />)
      index++;
    }
    dayCounter++;
  }

  return <HeatmapContainer>
    {HeatMap}
  </HeatmapContainer>
}

function App() {
  const [rank, setRank] = useState<string>("QUEUES");
  const [showRanks, setShowRanks] = useState<Boolean>(false);
  const [showAdvert, setShowAdvert] = useState<Boolean>(false);

  return <>
    <Nav>
      <Logo>G</Logo>
      <Logo small>InsaneDanishDude</Logo>
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
        <Button>
          {rank}
          <img src={DownArrow} />
        </Button>
        <Br />
        <h4>GOLD V | LP: 58</h4>
        <h4>240W 205L | 54%</h4>
      </Container>
    </Container>
    <Br />
    <Container direction={"column"}>
      <Logo medium>P<Span>ersona</Span></Logo>
      <Persona />
      <Br />
      <Button>Expand</Button>
    </Container>
    <Br mutliplier={2} />
    <Container>
      <Logo medium>M<Span>atches</Span></Logo>
    </Container>
    <Container>
      <Heatmap />
    </Container>
    <Br mutliplier={2} />
    <Container direction={"column"}>
      <Logo medium>C<Span>hallenges</Span></Logo>
      <Br />
      <Challenges>
        <h3>Don't be a Jerry</h3>
        <img src={Info} onClick={() => setShowAdvert(!showAdvert)}/>
      </Challenges>
      <Challenges>
        <h3>Show me what you goooot</h3>
        <img src={Info} />
      </Challenges>
      <Challenges>
        <h3>Never gonna die</h3>
        <img src={Info} />
      </Challenges>
      <Challenges>
        <h3>John Wick</h3>
        <img src={Info} />
      </Challenges>
    </Container>
    <Br mutliplier={2} />
    <Container>
      <Logo medium>R<Span>ewards</Span></Logo>
    </Container>
    <Container direction={"column"}>
      <Logo small>GG<Span> Wallet: </Span>2509</Logo>
      <Br />
      <Button>Learn more</Button>
    </Container>
    <Br mutliplier={4} />
  </>
}

export default App;