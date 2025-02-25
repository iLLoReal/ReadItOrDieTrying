import {Header} from "./components/header";
import {Reader} from "./components/Reader";

export const App = () => {
    return (
      <div>
      <Header />
      <Reader text={'Bonjour. Je suis une phrase. Et une autre. Et encore une autre'} timeBetweenReads={900} />
      </div>
    )
}