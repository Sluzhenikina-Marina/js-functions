const run = (text) => {
  // BEGIN
  function takeLast(stroka, n) {
    if (n > stroka.length || stroka.length === 0) {
      return null;
    }
    let kysokStroki = stroka.slice(stroka.length - n).split('');
    let reversKysokStroki = kysokStroki.reverse().join('');
    return reversKysokStroki;
  }
  // END

  return takeLast(text, 4);
};

export default run;