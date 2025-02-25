import {useEffect, useState} from "react";

export const Reader = (
  {text, timeBetweenReads, delimiters=['.', ';', '!'], manualPlay=false}: { text: string, timeBetweenReads: number, delimiters?: string[], manualPlay: boolean}
) => {
  const [splittedText, setSplittedText] = useState(parseFromDelimiters(delimiters))
  const [indexTextToDisplay, setIndexTextToDisplay] = useState(0);

  useEffect(() => {
    setIndexTextToDisplay(0);
    setSplittedText(parseFromDelimiters(delimiters))
  }, [manualPlay]);

  useEffect(() => {
    if (indexTextToDisplay < splittedText.length) {
      console.log('ici', text, indexTextToDisplay, splittedText);
      const timer = setTimeout(() => {
        setIndexTextToDisplay(indexTextToDisplay + 1);
      }, timeBetweenReads);

      return () => clearTimeout(timer);    }
  }, [indexTextToDisplay]);

  return (
    <div style={{display: 'flex', flexDirection: 'row' }}>
      {splittedText[indexTextToDisplay]}
    </div>
  )

  function parseFromDelimiters(delimiters: string[]) {
    return () => {
      let parts: string[] = [text];

      delimiters.forEach(delimiter => {
        const tempParts: string[] = [];
        parts.forEach(part => {
          tempParts.push(...part.split(delimiter));
        });
        parts = tempParts;
      });

      return parts.filter(part => part.trim() !== '');
    };
  }
}