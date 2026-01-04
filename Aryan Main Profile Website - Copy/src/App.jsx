import React, { useState } from 'react';
import Profile from './components/Profile/Profile';
import AnimatedBackground from './components/AnimatedBackground';
import BatmanTrigger from './components/BatmanTrigger';
import BigBatSignal from './components/BigBatSignal';


function App() {
  const [mode, setMode] = useState('profile');
  const [signalState, setSignalState] = useState({ visible: false, type: 'corner' }); // type: 'corner' | 'center'

  // Easter Egg: Just flashes the signal (Center, Blurred)
  const handleEasterEgg = () => {
    setSignalState({ visible: true, type: 'center' });
    setTimeout(() => setSignalState(prev => ({ ...prev, visible: false })), 2000);
  };

  // Primary Trigger: Starts the game mode sequence (Corner, Behind Batman)
  const handleGameTrigger = () => {
    setSignalState({ visible: true, type: 'corner' });
    setTimeout(() => {
      alert("3D gamification coming soon...");
      setSignalState(prev => ({ ...prev, visible: false }));
    }, 500);
  };

  return (
    <div className="app-container">
      {mode === 'profile' && <AnimatedBackground />}

      {/* Big Bat Signal Overlay - z-index: 1 */}
      {signalState.visible && <BigBatSignal type={signalState.type} />}

      {/* Content Layer - z-index: 20 (Higher than signal z-index 0) */}
      <div style={{ position: 'relative', zIndex: 20 }}>
        <>
          <Profile onTriggerSignal={handleEasterEgg} />
          {/* Batman stays visible during signal but is disabled */}
          <BatmanTrigger
            onTrigger={handleGameTrigger}
            disabled={signalState.visible}
          />
        </>
      </div>
    </div>
  );
}

export default App;
