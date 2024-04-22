const leftPad = (word: string, size: number, padWord: string) => {
  if (word == null) {
    return null;
  }

  if (padWord == null || padWord === '') {
    padWord = ' ';
  }

  const padLength = padWord.length;
  const wordLength = word.length;
  const pad = size - wordLength;

  if (pad <= 0) {
    return word;
  }

  if (pad === padLength) {
    return padWord.concat(word);
  } else if (pad < padLength) {
    return padWord.substring(0, pad).concat(word);
  } else {
    const padding: string[] = new Array(pad);
    const padChars: string[] = padWord.split('');

    for (let i = 0; i < pad; i++) {
      padding[i] = padChars[i % padWord.length];
    }

    return padding.join('') + word;
  }
};
