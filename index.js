const targetDate = new Date('2026-09-26T14:30:00').getTime();

const elements = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function animateNumber(element, newValue) {
  if (element.textContent !== String(newValue).padStart(2, '0')) {
    element.style.transform = 'scale(0.5)';
    element.style.opacity = '0.3';
        
    setTimeout(() => {
      element.textContent = String(newValue).padStart(2, '0');
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    }, 1000);
  }
}

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelector('.countdown').textContent = 'Время вышло!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  animateNumber(elements.days, days);
  animateNumber(elements.hours, hours);
  animateNumber(elements.minutes, minutes);
   animateNumber(elements.seconds, seconds);
}

setInterval(updateCountdown, 1000);
updateCountdown();