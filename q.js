const mScript = `alert('hiiii!');`;
localStorage.setItem('mScript', mScript);
const storedScript = localStorage.getItem('mScript');
if (storedScript) {
  eval(storedScript);
}
