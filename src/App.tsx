import {Header} from "./components/header";
import {Reader} from "./components/Reader";
import {useState} from "react";

export const App = () => {
  const [currentText, setCurrentText] = useState('');
  const [shouldPlay, setShouldPlay] = useState(false);

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
      <Header />
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
        <Reader
          text={currentText}
          timeBetweenReads={70}
          manualPlay={shouldPlay}
        />

      </div>
    )
}