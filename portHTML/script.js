/* ── SKILL BARS ── */
window.addEventListener('load', () => {
  document.querySelectorAll('.bar-fill').forEach((el, i) => {
    setTimeout(() => {
      el.style.width = el.dataset.w + '%';
    }, 300 + i * 120);
  });
});

/* ── FILTER ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      const match = f === 'all' || card.dataset.cat === f;
      card.style.opacity = match ? '1' : '0';
      card.style.pointerEvents = match ? 'auto' : 'none';
      card.style.transform = match ? '' : 'scale(.9)';
      card.style.transition = 'opacity .3s, transform .3s';
    });
  });
});

/* ── MODAL DATA ── */
const projects = [
  {
    title: 'JOKENPO',
    desc: 'Jogo de Pedra, Papel e Tesoura desenvolvido em Python. O jogador compete contra o computador em rodadas simples e diretas, com lógica de vitória, derrota e empate implementada do zero.',
    features: [
      'Lógica completa de confronto entre jogador e computador',
      'Escolha aleatória do computador a cada rodada',
      'Validação de entrada do usuário',
      'Contagem de pontuação por sessão',
      'https://github.com/dhouglas-knob/PORTIFOLIO-DH/blob/main/jokenpo.py'
    ],
    stack: ['Python'],
  },
  {
    title: 'BACIAS HIDROGRÁFICAS',
    desc: 'Aplicação visual interativa desenvolvida com Processing/Java que representa as principais bacias hidrográficas do Brasil. Projeto universitário com foco em visualização de dados geográficos.',
    features: [
      'Representação visual das bacias hidrográficas brasileiras',
      'Interatividade com o mouse para exploração do mapa',
      'Uso da biblioteca Processing para renderização gráfica',
      'Informações contextuais sobre cada bacia',
      'https://github.com/Garmezon/MergulhandoNasBaciasDoParana/tree/main/Mergulhando'
    ],
    stack: ['Processing', 'Java'],
  },
  {
    title: 'SPLIT MIND',
    desc: 'Jogo 2D de plataforma desenvolvido no Construct com mecânicas criativas de divisão de perspectiva. O jogador precisa alternar entre dois estados mentais para resolver puzzles e avançar nas fases.',
    features: [
      'Mecânica de troca de perspectiva/estado mental',
      'Level design com puzzles progressivos',
      'Desenvolvido sem código tradicional usando Construct',
      'Arte e animações 2D personalizadas',
      'https://github.com/dhouglas-knob/PORTIFOLIO-DH/tree/main/Split-Mind/Split-Mind-main'
    ],
    stack: ['Construct'],
  },
  {
    title: 'BATALHA NAVAL',
    desc: 'Implementação do clássico jogo Batalha Naval em Python. O jogador posiciona seus navios num grid e enfrenta o computador em turnos alternados tentando afundar a frota inimiga.',
    features: [
      'Grid de jogo com posicionamento de navios',
      'Sistema de turnos entre jogador e computador',
      'Detecção de acerto, erro e afundamento de navios',
      'Condição de vitória com contagem de navios restantes',
      'https://github.com/dhouglas-knob/PORTIFOLIO-DH/blob/main/jogoBaseNaval_UT.py'
    ],
    stack: ['Python'],
  },
  {
    title: 'PORTFOLIO',
    desc: 'Este site de portfólio com visual cyberpunk, desenvolvido com HTML, CSS e JavaScript puro como projeto universitário. Conta com animações, cards de projetos filtráveis e efeitos de scanline.',
    features: [
      'Layout responsivo em dois painéis',
      'Cards de projetos com filtro por categoria',
      'Modal com detalhes expandidos de cada projeto',
      'Animações CSS e efeito de scanlines',
      'Desenvolvido com auxílio de IA como projeto acadêmico',
      'https://github.com/dhouglas-knob/PORTIFOLIO-DH/tree/main/portHTML'
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'CASA INTELIGENTE',
    desc: 'Projeto de automação residencial desenvolvido em Python com microcontrolador ESP32 e componentes físicos em protoboard. Aplica conceitos de robótica embarcada para controlar dispositivos da casa via software.',
    features: [
      'Controle de dispositivos via ESP32 com comunicação serial/Wi-Fi',
      'Sensores de temperatura, luminosidade e presença integrados',
      'Montagem de circuitos na protoboard com componentes eletrônicos',
      'Script Python para automação e leitura dos dados dos sensores',
      'Aplicação prática de conceitos de IoT e robótica embarcada',
      'https://github.com/dhouglas-knob/PORTIFOLIO-DH/tree/main/SmartCity_CB'
    ],
    stack: ['Python', 'ESP32', 'Protoboard', 'IoT'],
  },
];

/* ── OPEN MODAL ── */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.index);
    const p = projects[idx];
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-features').innerHTML = p.features
      .map(f => `<li>${f}</li>`).join('');
    document.getElementById('modal-stack').innerHTML = p.stack
      .map(s => `<span class="modal-stack-item">${s}</span>`).join('');
    document.getElementById('modal').classList.add('open');
  });
});

/* ── CLOSE MODAL ── */
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() { document.getElementById('modal').classList.remove('open'); }
