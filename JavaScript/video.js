function changeVideo(src, title) {
    const videoElement = document.querySelector('video');
    const titleElement = document.querySelector('.player-container h2');
    const loadingMessage = document.createElement('p'); 
    loadingMessage.textContent = 'Loading...';
    
  
    titleElement.after(loadingMessage);
  
    videoElement.src = src;
    
    videoElement.oncanplay = () => {
      loadingMessage.remove(); 
      videoElement.play(); 
    };
    

    titleElement.textContent = `Now Playing: ${title}`;
    
   
    videoElement.onerror = () => {
      loadingMessage.textContent = 'Error loading video. Please try again later.';
      loadingMessage.remove(); 
    };
  }
  