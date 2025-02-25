import {useEffect, useState} from "react";

function findNextPortion(textToDisplay: string) {
  return textToDisplay.indexOf('.');
}

export const Reader = (
  {text, timeBetweenReads}: { text: string, timeBetweenReads: number }
) => {
  const [textToDisplay, setTextToDisplay] = useState('');
  const [shouldSlice, setShouldSlice] = useState(false);
  const [nextPortion, setNextPortion] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShouldSlice(true), timeBetweenReads); // Flash for 500ms
    return () => clearTimeout(timer);
  }, [text])

  useEffect(() => {
    setTextToDisplay(text.slice(0, nextPortion))
    setShouldSlice(false);
  }, [nextPortion]);

  useEffect(() => {
    if (shouldSlice) {
      setNextPortion(findNextPortion(textToDisplay))
    }
  }, [shouldSlice, textToDisplay]);

  return (
    <div>
      {textToDisplay}
    </div>
  )
}