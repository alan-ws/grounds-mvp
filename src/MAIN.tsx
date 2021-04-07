import { styled } from 'goober';
import { useState } from 'react';
import DownArrow from './downArrow.svg';
import League from './league.jpg';
import Valorant from './valorant.webp'
import Dota from './dota.jpg'
import Runtera from './runtera.webp'
import Tactics from './tft.jpg'
import Go from './go.svg';
import Info from './info.svg';
import './App.css'


export const COLORS = {
  navy: '#070120',
  terq: '#177b80',
  lTerg: '#bef5dd',
  purple: '#7952EB',
  orange: '#FF9D3C',
  dGreen: '#0C5E16',
  green: '#7AFF7A',
  red: '#F4270A',
  white: '#FFFFFF',
  offWhite: '#fffffb',
  coal: '#232323',
  lightCoal: '#3B3B3B',
  bgCoal: '#323232',
  lCoal: '#464646',
  yellow: '#FFE769',
  bYellow: '#FFF822'
}

const Nav = styled('nav')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.white};
  height: 64px;
`;

const Logo = styled('div')`
  display: flex;
  height: 46px;
  width: 46px;
  color: ${COLORS.white};
  font-size: 3rem;
  font-weight: bold;
  margin-left: 8px;
  align-items: center;
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
  background-color: ${COLORS.white};
  width: 32px;
  transform: skewY(-24deg);
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.yellow};
  }
`;

const Search = styled('div')`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin : 0 auto;
`;

const Button = styled('a')<{colors?: Array<string>}>`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.colors ? props.colors[0] : '#D3D3D3'};
  align-items: center;
  background-color: ${(props) => props.colors ? props.colors[1] : '#303030'};
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  > img {
    height: 24px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Submit = styled(Button)`
  justify-content: space-between;
`

const Field = styled('input')`
  padding: 16px;
  color: #D3D3D3;
  font-size: 1.2rem;
  font-weight: bold;
  
  border:none;
  background-image:none;
  background-color: #303030;
  outline: none;
  transition: box-shadow 0.15s linear;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  &:focus {
    box-shadow: 0 3px 0 #5451EA;
  }

  &::placeholder {
    color: #D3D3D3;
  }
`;

const DropDown = styled('div')<{padding?: number}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${COLORS.terq};
  color: ${COLORS.white};
  border: 2px solid ${COLORS.lTerg};
  border-radius: 4px;
  right: 10%;
  padding: ${(props) => props.padding ? props.padding : 16}px;
  > h2, p {
    margin: 0;  
  }
  &:hover {
    cursor: pointer;
  }
`;

const Item = styled('p')`
  padding: 2px; 
  &:hover {
    background-color: ${COLORS.yellow};
    border-radius: 2px;
    color: ${COLORS.coal};
    font-weight: bold;
    padding: 2px;
  }
`

const Slogan = styled('div')`
  display: flex;
  flex-direction: column;
  width: 55%;
  margin : 0 auto;
  > h3 {
    color: ${COLORS.white};
  }
`;

const Games = styled(Search)`
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: scroll;
`

const Card = styled('div')<{disabled?: boolean}>`
  height: 310px;
  width: 180px;
  margin: 8px;
  color: ${COLORS.white};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 8px;
  filter: ${(props) => props.disabled ? `blur(0.8px) grayscale(0.7) opacity(0.6)` : `none`};
  background: rgba( 212, 212, 212, 0.20 );
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );
  border: 2.5px solid rgba( 255, 255, 255, 0.18 );
  > img {
    object-fit: cover;
    height: 250px;
    width: 180px; 
    border-radius: 4px 4px 0 0;
  }
  > div {
    padding: 2px 16px;
    border-radius: 8px;
    > h4 {
      margin: 0;
    }
  }
`

const Span = styled('span')`
  color: ${COLORS.offWhite};
`

const Br = styled('div')<{mutliplier?: number}>`
  height: ${(props) => props.mutliplier ? props.mutliplier * 16 : 16}px;
`

const Hr = styled('div')<{mutliplier?: number}>`
  height: 250px;
  width: 50px;
  background-color: transparent;
`

const Container = styled('div')<{direction?: string, override?: boolean}>`
  display: flex;
  flex-direction: ${(props) => props.direction === 'row' ? `row` : `column`}; 
  width: 80%;
  margin : 0 auto;
  ${(props) =>
    props.override
    ? `> h1, h3, p {
      color: ${COLORS.offWhite};
      margin: 0;
    }`
    : ``  
  };
`

const Challenges = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 8px;
  > h3 {
    color: ${COLORS.offWhite};
  }
  > img {
    height: 24px;
    &:hover {
      cursor: pointer;
    }
  }
`

const Advert = styled('div')`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 999;
  width: 80%;
  background-color: ${COLORS.bgCoal};
  border-radius: 4px;
  color: ${COLORS.offWhite};
  > h3 > a {
    color: ${COLORS.green} !important;
  }
`;

const Bg = () => {
  return <>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
  </>
}

const Underline = styled('span')`
  border-bottom: 4px solid #ee3d23;
`

const Action = styled('span')<{setColor?: string}>`
  border: 4px solid ${props => props.setColor ? props.setColor : `#FFF`};
  width: 23px;
  border-radius: 8px;
`

function App() {
  const [showRegions, setShowRegions] = useState<Boolean>(false);
  const [region, setRegion] = useState<string>("REGION");
  const [game, setGame] = useState<string>("GAMES");
  const [showGames, setShowGames] = useState<Boolean>(false);
  const [role, setRole] = useState<string>("ROLES");
  const [showRoles, setShowRoles] = useState<Boolean>(false);
  const [showAdvert, setShowAdvert] = useState<Boolean>(false);

  return (
    <div>
      <Bg />
      <Nav>
        <Logo><Underline>G</Underline></Logo>
        <Hamburger>
          <Line/>
          <Line/>
          <Line/>
        </Hamburger>
      </Nav>
      <Slogan>
        <Logo>G<Span>rounds</Span></Logo>
        <h3>Daily challenges</h3>
      </Slogan>
      <Br mutliplier={2} />
      <Search>
        <Button onClick={() => setShowRegions(!showRegions)}>
          {region}
          <Action setColor={'#ee3d23'} />
          {/* <img src={DownArrow} /> */}
        </Button>
        <Br />
        {
          showRegions
          ? <DropDown>
              <h2 onClick={() => setShowRegions(!showRegions)}>Select</h2>
              <Item onClick={() => {setRegion("NA"); setShowRegions(!showRegions)}}>NA</Item>
              <Item onClick={() => {setRegion("EUW"); setShowRegions(!showRegions)}}>EUW</Item>
              <Item onClick={() => {setRegion("EUNE"); setShowRegions(!showRegions)}}>EUNE</Item>
            </DropDown>
          : <></>
        }
        <Field placeholder="Summoner name"></Field>
        <Br />
        <Submit>PLAY 
          <Action setColor={'#ee3d23'} />
          {/* <img src={Go} /> */}
        </Submit>
      </Search>
      <Br mutliplier={2} />
      <Container>
        <Logo>G<Span>ames</Span></Logo>
      </Container>
      <Br />
      <Games>
        <Card>
          <img src={League} />
          <div>
            <h4>League of Legends</h4>
          </div>
        </Card>
        <Card disabled>
          <img src={Tactics} />
          <div>
            <h4>Team Fight Tactics</h4>
            <i>coming soon</i>
          </div>
        </Card>
        <Card disabled>
          <img src={Runtera} />
          <div>
            <h4>Legends of Rune...</h4>
            <i>coming soon</i>
          </div>
        </Card>
        <Card disabled>
          <img src={Valorant} />
          <div>
            <h4>Valorant</h4>
            <i>coming soon</i>
          </div>
        </Card>
        <Card disabled>
          <img src={Dota} />
          <div>
            <h4>Dota 2</h4>
            <i>coming soon</i>
          </div>
        </Card>
      </Games>
      <Br />
      <Container override>
        <h3>Your game <i>coming soon?</i></h3>
        <Br />
        <Button colors={['#fff', '#ee3d23']}>Get Invited<Action /></Button>
      </Container>
      <Br mutliplier={2} />
      <Container>
        <Logo>C<Span>hallenges</Span></Logo>
        {
          showAdvert
          ? <Advert>
            <h2>TOP</h2>
            <h2>Don't be a Jerry</h2>
            <p>Jerry's are complicated players. They don't have much of a brain but will die for you.</p>
            <h2>Your challenge</h2>
            <p>Play Support or stop dying</p>
            <h3>Players who use <a href="www.amazon.com">this mouse</a> have better reaction times</h3>
            <Container direction={"row"}>
              <Button>Accept</Button>
              <Button>Decline</Button>
            </Container>
          </Advert>
          : <></>
        }
      </Container>
      <Br mutliplier={2} />
      <Container direction={"column"} override>
        <Button onClick={() => setShowGames(!showGames)}>
          {game}
          <Action setColor={'#ee3d23'} />
          {/* <img src={DownArrow} /> */}
        </Button>
        <Br />
        {
          showGames
          ? <DropDown>
            {
              !showRoles
              ? <><h2 onClick={() => setShowGames(!showGames)}>Select</h2>
                <Item onClick={() => {setGame("LEAGUE OF LEGENDS"); setShowRoles(!showRoles)}}>League of Legends</Item>
                <Item><i>coming soon...</i></Item></>
              : <>
                <h2 onClick={() => setShowGames(!showGames)}>Role</h2>
                <Item onClick={() => {setRole("TOP"); setShowGames(!showGames); setShowRoles(!showRoles)}}>TOP</Item>
                <Item onClick={() => {setRole("JUNGLE"); setShowGames(!showGames); setShowRoles(!showRoles)}}>JUNGLE</Item>
                <Item onClick={() => {setRole("MID"); setShowGames(!showGames); setShowRoles(!showRoles)}}>MID</Item>
                <Item onClick={() => {setRole("ADC"); setShowGames(!showGames); setShowRoles(!showRoles)}}>ADC</Item>
                <Item onClick={() => {setRole("SUPPORT"); setShowGames(!showGames); setShowRoles(!showRoles)}}>SUPPORT</Item>
              </>
            }
            </DropDown>
          : <></>
        }
        {
          role !== "ROLES"
          ? <>
            <h1>{role}</h1>
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
          </>
          : <></>
        }
      </Container>
      <Br mutliplier={10} />
    </div>
  );
}

export default App;
