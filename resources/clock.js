function clockUpdate() {
    const now = new Date();
    
    // Obter horas, minutos e segundos
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Atualizar o HTML (se os elementos existirem)
    if(document.getElementById('hours')) {
      document.getElementById('hours').textContent = hours;
    }
    if(document.getElementById('minutes')) {
      document.getElementById('minutes').textContent = minutes;
    }
    if(document.getElementById('seconds')) {
      document.getElementById('seconds').textContent = seconds;
    }
    
    // Atualizar a versão simplificada
    if(document.getElementById('clock')) {
      document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
}
  
// Iniciar o relógio quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar imediatamente
    clockUpdate();
    
    // Atualizar a cada segundo
    setInterval(clockUpdate, 1000);
});