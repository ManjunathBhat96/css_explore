import './App.css';
import BlurCard from './components/BlurCard/BlurCard';
import SquareToCircle from './components/SquareToCircle/SquareToCircle';
import SpiralMotion from './components/SpiralMotion/SpiralMotion';
import Progress from './components/Progress/Progress';

function App() {
  console.log('hi');
  return (
    <div className='app'>
      <Progress />
      {/* <SpiralMotion /> */}
      <BlurCard />
      <SquareToCircle />
    </div>
  );
}

export default App;
