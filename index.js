const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  const svg = document.getElementById('triangles');
  
        svg.onclick = (e) => {
          const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
          const rando = () => colors[Math.floor(Math.random() * colors.length)];
          document.documentElement.style.cssText = `
          --dark-color: ${rando()};
          --light-color: ${rando()}; 
          `
        }
        const tween = KUTE.fromTo(
          "#blob1",
          { path: "#blob1" },
          { path: "#blob2" },
          { repeat: 999, duration: 3000, yoyo: true }
        ).start();
