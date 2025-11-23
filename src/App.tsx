import { Header } from "./components/header";
import { Reader } from "./components/Reader";
import { useState } from "react";

export const App = () => {
  const [currentText, setCurrentText] = useState('');
  const [shouldPlay, setShouldPlay] = useState(false);
  const map = { slowest: 10, reallySlow: 20, slow: 30, medium: 40, fast: 60, reallyFast: 70, fastest: 80 };
  const [timeBetweenReads, setTimebetweenReads] = useState(map.slowest);
  const entry = Object.entries(map).find(
    ([, val]) => val === timeBetweenReads
  );
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      <div>
        <Header headerTitle="toto" />
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const value = map[e.target.value as keyof typeof map];
          if (value) setTimebetweenReads(value)
        }}>
          <option value={'slowest'}>the slowest</option>
          <option value={'reallySlow'}>really slow</option>
          <option value={'slow'}>slow</option>
          <option value={'medium'}>normal</option>
          <option value={'fast'}>fast</option>
          <option value={'reallyFast'}>really fast</option>
          <option value={'fastest'}>the fastest</option>
        </select>
      </div>
      <div>
        <textarea onBlur={(e) => setCurrentText(() => e.target.value)}>

        </textarea>

        <button
          type={'button'}
          onClick={() => setShouldPlay(!shouldPlay)}
        >
          Play !
        </button>

      </div>
      <div style={{ fontSize: 60 }}>
        current speed: {entry ? (
          <>
            {entry[0]} ({entry[1]} characters per second)
          </>
        ) : <>Please choose a speed</>
        }
        <Reader
          text={currentText}
          timeBetweenReads={timeBetweenReads}
          manualPlay={shouldPlay}
        />
      </div>

    </div>
  )
}