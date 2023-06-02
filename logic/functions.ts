function handleSmoothScroll(event:any, target:any) {
    event.preventDefault();
    
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    });
  }