import Box from './components/Box.js';
import BoxContainer from './components/BoxContainer.js';
import HeroImage from './img/pickle.png';


function App() {
  return (
    <div className="App">
      <h1>hi! i'm martino</h1>
      <img src={HeroImage} id="hero-image" alt="Matt Martino wearing a Pickle Rick Button-Up Shirt"/>
      <BoxContainer numBoxes={4}>
        <Box />
      </BoxContainer>
    </div>
  );
}

export default App;
