function startTimer() {
  // Задаем даты окончания акций
  const sales = new Date('2026-06-07T23:59:00+03:00').getTime();
  const gifts = new Date('2026-06-05T23:59:00+03:00').getTime();

  // Находим элементы в HTML
  const cdD = document.getElementById('cd-d');
  const cdH = document.getElementById('cd-h');
  const cdM = document.getElementById('cd-m');

  const gtD = document.getElementById('gt-d');
  const gtH = document.getElementById('gt-h');
  const gtM = document.getElementById('gt-m');
  const gtS = document.getElementById('gt-s');

  // Внутренняя функция для обновления цифр
  function tick() {
    const now = Date.now();
    
    // Считаем время до конца продаж
    let s = sales - now;
    if (s < 0) s = 0;
    
    if (cdD) cdD.textContent = Math.floor(s / 86400000);
    if (cdH) cdH.textContent = Math.floor((s % 86400000) / 3600000);
    if (cdM) cdM.textContent = Math.floor((s % 3600000) / 60000);
    
    // Считаем время до конца раздачи подарков
    let g = gifts - now;
    if (g < 0) g = 0;
    
    if (gtD) gtD.textContent = Math.floor(g / 86400000);
    if (gtH) gtH.textContent = Math.floor((g % 86400000) / 3600000);
    if (gtM) gtM.textContent = Math.floor((g % 3600000) / 60000);
    if (gtS) gtS.textContent = Math.floor((g % 60000) / 1000);
  }

  // Запускаем таймер
  tick();
  setInterval(tick, 1000);
}

// Вызываем функцию, чтобы она заработала
startTimer();