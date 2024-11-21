function changeStyle(color) {
    const body = document.body;
    const image = document.getElementById('mainImage');
    const displayText = document.getElementById('displayText');
    const welcomeText = document.getElementById('welcomeText');
  
    welcomeText.style.display = 'none';
    if (color === 'blue') {
      body.style.backgroundColor = '#007bff'; 
      body.style.color = 'white';
      body.style.fontFamily = 'Arial, sans-serif';
      displayText.textContent = "I'm just a boy";
      displayText.style.fontSize = '50px';
      image.src = 'imgg/boyy.png'; 
      image.alt = 'Male Style';
      image.style.width = '300px';
      image.style.height = '300px';
      image.style.display = 'block'; 
    } else if (color === 'pink') {
      body.style.backgroundColor = '#ff1493'; 
      body.style.color = 'white';
      body.style.fontFamily = 'Cursive'; 
      displayText.textContent = "I'm just a girl";
      displayText.style.fontSize = '50px';
      image.src = 'imgg/girll.png'; 
      image.alt = 'Female Style';
      image.style.width = '300px';
      image.style.height = '300px';
      image.style.display = 'block'; 
    } else if (color === 'brown') {
      body.style.backgroundColor = '#8b4513'; 
      body.style.color = '#fff';
      body.style.fontFamily = 'Times New Roman, serif'; 
      displayText.textContent = "I'm already old";
      displayText.style.fontSize = '150px';
      image.src = 'imgg/old.png'; 
      image.alt = 'Old Age Style';
      image.style.width = '500px';
      image.style.height = '500px';
      image.style.display = 'block'; 
    }
  }