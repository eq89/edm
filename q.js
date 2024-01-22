const mScript = `alert('hiiii!');`;
localStorage.setItem('maliciousScript', maliciousScript);
const storedScript = localStorage.getItem('maliciousScript');
if (storedScript) {
  eval(storedScript);
}
