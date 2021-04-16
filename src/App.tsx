import { useState } from 'react';
import {styled} from 'goober';
import Icon from './tft.jpg'
import Info from './info.svg';
import DownArrow from './downArrow.svg';


const THEMES = {
  DARK: {
    base: '#292929',
    baseContrast: '#303030',
    baseContrast2: '#4F4F4F',
    grey2: '#696969',
    text: '#BCBCBC',
    text2: '#D3D3D3',
    text3: '#636363',
    green: '#5A865E',
    green2: '#5BF06A',
    success: '#77FF84',
    accent: '#EE3D23',
    accent1: '#EFA499',
    accent2: '#781C0E',
    gold: '#837F24',
    gold2: '#F6EC00',
    silver: '#7D8283',
    silver2: '#E7ECEC',
    bronze: '#7F632D',
    bronze2: '#DB880D',
  }
}

const TROPHIES: {[id: string]: { background: string; borderColor: string; }} = {
  silver: {
    background: THEMES.DARK.silver,
    borderColor: THEMES.DARK.silver2
  },
  gold: {
    background: THEMES.DARK.gold,
    borderColor: THEMES.DARK.gold2
  },
  bronze: {
    background: THEMES.DARK.bronze,
    borderColor: THEMES.DARK.bronze2
  }
}

const MATCH_STATS: {[id: number]: string} = {
  0: THEMES.DARK.baseContrast,
  30: THEMES.DARK.accent1,
  60: THEMES.DARK.accent,
  100: THEMES.DARK.accent2
}

const Button = styled('a')<{theme?: string, size: number}>`
  ${(props: any) => 
    props.theme === "dark"
    ? `
      color: ${THEMES.DARK.text2};
      background: ${THEMES.DARK.baseContrast};
    `
    : ``
  };
  display: flex;
  height: 50px;
  width: ${props => props.size + `px`};
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  padding: 4px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  };
`

const ActionMarker = styled('span')`
  background: ${THEMES.DARK.grey2};
  height: 6px;
  width: 25px;
  border-radius: 8px;
  align-self: end;
  margin-bottom: 16px;
`

const Badge = styled('div')`
  height: 29px;
  width: max-content;
  padding-right: 4px;
  padding-left: 4px;
  background: ${THEMES.DARK.green};
  border: 1px solid ${THEMES.DARK.green2};
  border-radius: 8px;
  margin-left: 8px;
`

const Trophy = styled('div')<{color: string}>`
  width: 81px;
  height: 29px;

  ${(props) =>
    `
      background: ${TROPHIES[props.color].background};
      border: 1px solid ${TROPHIES[props.color].borderColor};
    `
  };

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.48);
  border-radius: 8px;
`

// ${(props) =>
//   props.override
//   ? `> h1, h3, h4, p {
//     color: ${THEMES.DARK.text3};
//     margin: 0;
//     margin-left: 8px;
//   }`
//   : ``
//justify-content: space-evenly;
type Props = {
  direction?: string,
  margin?: number,
  override?: boolean,
  overflow?: boolean,
  spacing?: string,
  align?: string,
  width?: string | number,
  wrap?: boolean,
}

const Container = styled('div')<Props>`
  display: flex;
  ${props => props.wrap ? `flex-wrap: wrap` : ``};
  flex-direction: ${(props) => props.direction === 'column' ? `column` : `row`};
  margin: ${props => props.margin === 0 ? props.margin : '0 auto'};
  ${(props) => props.overflow ? `overflow-x: hidden` : ``};
  width: ${props => props.width === "none" ? props.width : '95%'};
  ${props => props.spacing === "none" ? `` : `justify-content: space-between`};
  align-items: ${props => props.align === "none" ? `` : 'first baseline'};
  > h3 { margin: 0; margin-top: 18px;}
`

const Square = styled('div')<{shade: number}>`
  width: 25px;
  height: 25px;
  ${(props) =>
    `background-color: ${MATCH_STATS[props.shade]}`
  };
  margin: 2px;
`

const ProgressBar = styled('div')<{progress: number}>`
  width: 100%;
  height: 22px;
  border-radius: 4px;
  background-image: ${(props) =>
    `linear-gradient(
      270deg,
      ${THEMES.DARK.baseContrast} ${(100 - props.progress)}%,
      ${THEMES.DARK.accent} ${100 - props.progress}%`});
`

const Underline = styled('span')`
  border-bottom: 2px solid ${THEMES.DARK.accent};
`

const SubScriptTitles = styled('p')<{alignment: string}>`
  height: 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${THEMES.DARK.text};
  margin: 4px 0 4px 0;

  align-self: ${props => props.alignment};
`

const SubTitles = styled('h3')`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: ${THEMES.DARK.text};
`

const Titles = styled('h1')<{size: number, weight: string | number, color: string}>`
  height: 28px;

  font-family: Roboto;
  font-style: normal;
  line-height: 28px;
  margin: 0;
  
  ${props => 
  `
    font-size: ${props.size}px;
    font-weight: ${props.weight};
    color: ${props.color};
  `
  }
`

const Logo = styled('h1')`
  height: 75px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 75px;
  margin: 0;

  color: ${THEMES.DARK.baseContrast2};
`

const ProgressInfo = () => {
  return <Container direction={"column"}>
    <SubScriptTitles alignment={"start"}>Next Reward</SubScriptTitles>
    <ProgressBar progress={20}/>
    <SubScriptTitles alignment={"end"}>884/1000</SubScriptTitles>
  </Container>
}

const Trove: React.FC<{items: Array<string>}> = ({items}) => {
  return <Container direction={"column"}>
    <SubTitles>Trove</SubTitles>
    <Br />
    <Container direction={"row"} width={100}>
      {
        items.map((value: string, index: number) => {
          return <Trophy color={value} key={index} />
        })
      }
    </Container>
    <Br />
    <Button theme={"dark"} size={366}>Open <ActionMarker /></Button>
  </Container>
}

function MatchHistory() {
  const data: Array<{wL: number, gamesPlayed: number, date: number}> = [
    {wL: 30, gamesPlayed: 5, date: 1},
    {wL: 60, gamesPlayed: 4, date: 2},
    {wL: 60, gamesPlayed: 3, date: 3},
    {wL: 0, gamesPlayed: 2, date: 4},
    {wL: 0, gamesPlayed: 1, date: 5},
    {wL: 100, gamesPlayed: 4, date: 8},
    {wL: 30, gamesPlayed: 5, date: 9},
    {wL: 30, gamesPlayed: 6, date: 10},
    {wL: 60, gamesPlayed: 10, date: 12},
    {wL: 60, gamesPlayed: 5, date: 13},
    {wL: 100, gamesPlayed: 7, date: 14},
    {wL: 30, gamesPlayed: 3, date: 16},
    {wL: 60, gamesPlayed: 2, date: 17},
    {wL: 60, gamesPlayed: 1, date: 19},
  ]

  let dayCounter = 1;
  let index = 0;
  let HeatMap = [];

  while (dayCounter <= 20)
  {
    if (index >= (data.length -1) || dayCounter !== data[index].date)
    {
      HeatMap.push(<Square shade={0} />)
    }
    else
    {
      HeatMap.push(<Square shade={data[index].wL} />)
      index++;
    }
    dayCounter++;
  }

  return <Container direction={"column"}>
    <SubTitles>Matches</SubTitles>
    <Br />
    <Container direction={"row"} wrap spacing={"none"}>
      {HeatMap}
    </Container>
  </Container>
}

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
  background-color: ${THEMES.DARK.text};
  width: 32px;
  transform: skewY(-24deg);
  &:hover {
    cursor: pointer;
    background-color: ${THEMES.DARK.accent};
  }
`;

const Ellipse = styled('div')`
  width: 136px;
  height: 136px;

  border: 8px solid ${THEMES.DARK.baseContrast};
  border-radius: 50%;
  background-image: url(${Icon});
  background-position: center;
  background-size: contain;
`

const Layout = styled('div')`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-row-gap: 16px;
`

const Nav = styled('nav')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: max-content;
`;

const Persona = () => {
  const PContainer = styled('div')`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 24px;
    margin: 0 auto;
  `

  const Row = styled('div')`
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
  `

  return <PContainer>
    <Ellipse />
    <Row>
      <Button theme={"dark"} size={190}>Queues <ActionMarker /></Button>
      <Container direction={"column"}>
        <Container direction={"row"}>
          <SubTitles>Reputation</SubTitles>
          <SubTitles>GP 523</SubTitles>
        </Container>
        <Container direction={"row"}>
          <Container direction={"row"} spacing={"none"} align={"none"} width={"none"} margin={0}>
            <Titles size={24} weight={500} color={THEMES.DARK.text}>872</Titles>
            <Badge>
              <Titles size={20} weight={"bold"} color={THEMES.DARK.green2}>+42</Titles>
            </Badge>
          </Container>
          <SubTitles>WR 52%</SubTitles>
        </Container>
      </Container>
    </Row>
  </PContainer>
}

const Br = styled('div')<{mutliplier?: number}>`
  height: ${(props) => props.mutliplier ? props.mutliplier * 16 : 16}px;
`

function App() {
  const troveItems: Array<string> = ["silver", "gold", "silver", "bronze"];

  return <Layout>
    <Nav>
      <Logo><Underline>G</Underline></Logo>
      <Titles size={24} weight={500} color={THEMES.DARK.text}>
        <Underline>InsaneDanishDude</Underline>
      </Titles>
      <Hamburger>
        <Line/>
        <Line/>
        <Line/>
      </Hamburger>
    </Nav>
    <Persona />
    <ProgressInfo />
    <Trove items={troveItems}/>
    <MatchHistory />
  </Layout>

  // const [rank, setRank] = useState<string>("Queues");
  // const [showRanks, setShowRanks] = useState<Boolean>(false);
  // const [showAdvert, setShowAdvert] = useState<Boolean>(false);

  // return <>
  //   <Nav>
  //     <Logo>G</Logo>
  //     <Logo small default><Underline>InsaneDanishDude</Underline></Logo>
  //     <Hamburger>
  //       <Line/>
  //       <Line/>
  //       <Line/>
  //     </Hamburger>
  //   </Nav>
  //   <Br />
  //   <Container>
  //     <ProfileIcon src={Icon} />
  //     <Container direction={"column"} margin={12} override>
        
  //       <Br />
  //     </Container>
  //   </Container>
  //   <Br />
  //   {/* <Container direction={"column"}>
  //     <Logo medium>P<Span>ersona</Span></Logo>
  //     <Persona />
  //     <Br />
  //     <Button>Expand</Button>
  //   </Container> */}
  //   <Br mutliplier={2} />
  //   <Container>
  //     <Logo medium>M<Span>atches</Span></Logo>
  //   </Container>
  //   <Container>
  //     <Heatmap />
  //   </Container>
  //   <Br mutliplier={2} />
  //   <Container direction={"column"}>
  //     <Logo medium>C<Span>hallenges</Span></Logo>
  //     <Br />
  //     <Challenges>
  //       <h3>Don't be a Jerry</h3>
  //       <img src={Info} onClick={() => setShowAdvert(!showAdvert)}/>
  //     </Challenges>
  //     <Challenges>
  //       <h3>Show me what you goooot</h3>
  //       <img src={Info} />
  //     </Challenges>
  //     <Challenges>
  //       <h3>Never gonna die</h3>
  //       <img src={Info} />
  //     </Challenges>
  //     <Challenges>
  //       <h3>John Wick</h3>
  //       <img src={Info} />
  //     </Challenges>
  //   </Container>
  //   <Br mutliplier={2} />
  //   <Container>
  //     <Logo medium>R<Span>ewards</Span></Logo>
  //   </Container>
  //   <Container direction={"column"}>
  //     <Logo small>GG<Span> Wallet: </Span>2509</Logo>
  //     <Br />
  //     <Button>Learn more</Button>
  //   </Container>
  //   <Br mutliplier={4} />
  // </>
}

export default App;


// const Action = styled('span')<{setColor?: string}>`
//   background: ${COLORS.coal60};
//   height: 6px;
//   width: 25px;
//   border-radius: 8px;
// `

// const Nav = styled('nav')`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   color: ${COLORS.white};
//   height: 64px;
// `;

// const Hamburger = styled('div')`
//   display: flex;
//   flex-direction: column;
//   width: 46px;
//   height: 46px;
//   justify-content: space-evenly;
//   align-items: center;
//   border-radius: 8px;
//   margin-right: 8px;
// `;

// const Line = styled('div')`
//   height: 8px;
//   background-color: ${COLORS.coal};
//   width: 32px;
//   transform: skewY(-24deg);
//   &:hover {
//     cursor: pointer;
//     background-color: ${COLORS.yellow};
//   }
// `;

// const Logo = styled('h1')<{small?: boolean, medium?: boolean, default?: boolean}>`
//   ${
//     (props) => props.default ?
//     `
//       color: ${COLORS.white};
//       font-size: ${props.small ? `1.2rem` : props.medium ? `2rem` : `3rem`};
//     ` :
//     `
//       color: ${COLORS.white};
//       font-size: ${props.small ? `1.2rem` : props.medium ? `2rem` : `3rem`};
//       font-weight: bold;
//       word-break: break-all;
//       margin: 0;
//       margin-left: 8px;
//     `
//   }
// `;



// const Br = styled('div')<{mutliplier?: number}>`
//   height: ${(props) => props.mutliplier ? props.mutliplier * 16 : 16}px;
// `

// const Span = styled('span')`
//   color: ${COLORS.white};
// `

// const Underline = styled('span')`
//   border-bottom: 4px solid ${COLORS.yellow};
// `

// const ProfileIcon = styled('img')`
//   height: 96px;
//   width: 96px;
//   border-radius: 50%;
//   border: 8px solid ${COLORS.coal};
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
// `
// /* Rectangle 47 */



// const HeatmapContainer = styled('div')`
//   display: flex;
//   flex-wrap: wrap;
// `
// const Square = styled('div')<{gradient?: number, hasHover?: boolean}>`
//   height: 25px;
//   width: 25px;
//   background-color: ${(props) =>
//     props.gradient
//     ? COLORS.green : COLORS.grey
//   };
//   opacity: ${props => props.gradient ? props.gradient / 100 : 0.25};
//   margin: 2px;
//   ${props =>
//     props.hasHover
//     ? `&:hover {
//       border: 1px solid ${COLORS.coal};
//       cursor: pointer;
//     }`
//     : ``
//   }
// `;

// // const Thing = () => <svg>
// //   <g fill='#464646'>
// //     <path d="M10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490c0-270.6-219.4-490-490-490C229.4,10,10,229.4,10,500z M441.9,500L211,192.4L867.6,500L211,807.6L441.9,500z"/>
// //   </g>
// // </svg>

// const Challenges = styled('div')`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-right: 16px;
//   padding-left: 8px;
//   padding-bottom: 8px;
//   > h3 {
//     color: ${COLORS.white};
//     margin: 0;
//   }
//   > img {
//     height: 24px;
//     &:hover {
//       cursor: pointer;
//     }
//   }
// `

// // function Persona() {
// //   const data: {
// //     reputation: number, recentReputation: number, nextRank: number, mostPlayed: Array<number>, trophiesEarned: number
// //   } = {
// //     reputation: 872,
// //     recentReputation: 40,
// //     nextRank: 92,
// //     mostPlayed: [1,2,4],
// //     trophiesEarned: 12
// //   }

// //   const PersonaContainer = styled('div')`
// //     display: flex;
// //   `;

// //   const InCon = styled('div')`
// //     &:last-child {
// //       margin-left: 48px;
// //     }
// //   `;
// //   const Badge = styled('div')`
// //     display: flex;
// //     justify-content: flex-end;
// //     padding: 3px;
// //     background-color: ${COLORS.green};
// //     border-radius: 8px;
// //     > p {
// //       font-size: 1rem;
// //     font-weight: bold;
// //     color: ${COLORS.white};
// //     margin: 0;
// //     margin-right: 16px;
// //     }
// //   `;

// //   const Bar = styled('div')<{fill: number}>`
// //     height: 40px;
// //     width: 100%;
// //     background-image: ${(props) => `linear-gradient(90deg, ${COLORS.green} ${props.fill}%, ${COLORS.grey} ${(100 - props.fill)}%`});
// //   `

// //   return <PersonaContainer>
// //     <InCon>
// //       <Logo small>Reputation</Logo>
// //       <Logo>{data.reputation}</Logo>
// //       <Badge><p>+{data.recentReputation}</p></Badge>
// //     </InCon>
// //     <InCon>
// //       <Logo small>Next reward</Logo>
// //       <Br />
// //       <Bar fill={data.nextRank} />
// //       <Logo small>reward 1000</Logo>
// //     </InCon>
// //   </PersonaContainer>
// // }



// function Persona()
// {
//   const [queue, setQueue] = useState<string>("Queue");

//   const QueueDetails = () => {
//     return <Container>
//       <Button>
//         {queue}
//         <Action />
//       </Button>
//     </Container>
//   };
//   const RewardBar = () => {};
//   const TrophyDisplay = () => {
//     return <Container>

//     </Container>
//   };

//   return <Container>

//   </Container>
// }

// const Button = styled('a')<{colors?: Array<string>}>`
//   display: flex;
//   padding: 4px;
//   justify-content: space-between;
//   padding-right: 16px;
//   padding-left: 16px;
//   font-size: 24px;
//   font-weight: bold;
//   color: ${COLORS.textD3};
//   align-items: center;
//   background: ${COLORS.coal};
//   border-radius: 8px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
//   &:hover {
//     cursor: pointer;
//   }
// `;