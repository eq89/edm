const mScript = `alert('hiiii!');`;
localStorage.setItem('maliciousScript', mScript);
const storedScript = localStorage.getItem('mScript');
if (storedScript) {
  eval(storedScript);
}
