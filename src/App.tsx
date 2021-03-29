import { styled } from 'goober';
import { useState } from 'react';
import DownArrow from './downArrow.svg';
import League from './league.jpg';
import Valorant from './valorant.webp'
import Dota from './dota.jpg'
import Runtera from './runtera.webp'
import Tactics from './tft.jpg'
import Go from './go.svg';

export const COLORS = {
  navy: '#070120',
  purple: '#7952EB',
  orange: '#FF9D3C',
  dGreen: '#0C5E16',
  green: '#7AFF7A',
  red: '#F4270A',
  white: '#FFFFFF',
  offWhite: '#fffffb',
  coal: '#232323',
  lightCoal: '#3B3B3B',
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
  color: ${COLORS.yellow};
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
  height: 4px;
  background-color: ${COLORS.yellow};
  width: 32px;
`;

const Search = styled('div')`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin : 0 auto;
`;

const Button = styled('a')`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${COLORS.offWhite};
  align-items: center;
  background-color: ${COLORS.lightCoal};
  border-radius: 4px;
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
  color: ${COLORS.offWhite};
  font-size: 1.2rem;
  font-weight: bold;

  border:none;
  background-image:none;
  background-color: ${COLORS.lightCoal};
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  transition: box-shadow 0.15s linear;
  border-radius: 4px;

  &:focus {
    box-shadow: 0 3px 0 ${COLORS.yellow};
  }

  &::placeholder {
    color: ${COLORS.offWhite};
  }
`;

const DropDown = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${COLORS.coal};
  color: ${COLORS.offWhite};
  border: 2px solid ${COLORS.yellow};
  border-radius: 4px;
  right: 10%;
  padding: 16px;
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
    background-color: ${COLORS.bYellow};
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
`;

// color: ${COLORS.offWhite};
// &:hover {
//   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
// }
// > img {
//   border-radius: 4px 4px 0 0;
// }

const Games = styled(Search)`
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: scroll;
`

const Card = styled('div')`
  height: 320px;
  width: 180px;
  margin: 8px;
  color: ${COLORS.offWhite};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 4px;
  > img {
    object-fit: cover;
    height: 250px;
    width: 180px; 
    border-radius: 4px 4px 0 0;
  }
  > div {
    padding: 2px 16px;
    border-radius: 4px;
    > h3 {
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

function App() {
  const [showRegions, setShowRegions] = useState<Boolean>(false);
  const [region, setRegion] = useState<string>("REGION");

  return (
    <div>
      <Nav>
        <Logo>G</Logo>
        <Hamburger>
          <Line/>
          <Line/>
          <Line/>
        </Hamburger>
      </Nav>
      <Slogan>
        <Logo>G<Span>rounds</Span></Logo>
        <h2></h2>
      </Slogan>
      <Br mutliplier={4} />
      <Search>
        <Button onClick={() => setShowRegions(!showRegions)}>
          {region}
          <img src={DownArrow} />
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
        <Submit>PLAY <img src={Go} /></Submit>
      </Search>
      <Br mutliplier={2} />
      <Games>
        <Card>
          <img src={League} />
          <div>
            <h3>League of Legends</h3>
          </div>
        </Card>
        <Card>
          <img src={Tactics} />
          <div>
            <h3>Team fight Tactics</h3>
          </div>
        </Card>
        <Card>
          <img src={Runtera} />
          <div>
            <h3>Legends of Runtera</h3>
          </div>
        </Card>
        <Card>
          <img src={Valorant} />
          <div>
            <h3>Valorant</h3>
          </div>
        </Card>
        <Card>
          <img src={Dota} />
          <div>
            <h3>Dota 2</h3>
          </div>
        </Card>
      </Games>
    </div>
  );
}

export default App;
