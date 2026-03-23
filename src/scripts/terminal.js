// Terminal animation
const termLines = [
  { type: 'cmd', prompt: '$ ', text: 'whoami' },
  { type: 'out', text: 'Belén — Junior Developer' },
  { type: 'cmd', prompt: '$ ', text: 'cat skills.txt' },
  { type: 'out', text: 'HTML · CSS · JavaScript' },
  { type: 'out', text: 'React · Node.js · Python' },
  { type: 'out', text: 'Java · MySQL · Git' },
  { type: 'cmd', prompt: '$ ', text: 'echo $STATUS' },
  { type: 'val', text: 'AVAILABLE FOR HIRE ✓' },
  { type: 'cmd', prompt: '$ ', text: 'echo $ENGLISH' },
  { type: 'val', text: 'Intermediate B1 ✓' },
  { type: 'cmd', prompt: '$ ', text: '_' },
];

const termBody = document.getElementById('terminalBody');
let lineIdx = 0, charIdx = 0, isTyping = false;

function addCursor() {
  const c = document.createElement('span');
  c.className = 't-cursor';
  c.id = 'tcursor';
  termBody.appendChild(c);
}

function removeCursor() {
  const c = document.getElementById('tcursor');
  if (c) c.remove();
}

function typeLine() {
  if (lineIdx >= termLines.length) {
    addCursor();
    return;
  }
  
  const line = termLines[lineIdx];

  if (line.type === 'cmd' && line.text === '_') {
    const span = document.createElement('span');
    span.className = 't-line';
    span.innerHTML = `<span class="t-prompt">$ </span>`;
    termBody.appendChild(span);
    addCursor();
    return;
  }

  if (line.type === 'out' || line.type === 'val') {
    const span = document.createElement('span');
    span.className = 't-line';
    span.innerHTML = `<span class="${line.type === 'val' ? 't-val' : 't-out'}">${line.text}</span>`;
    termBody.appendChild(span);
    lineIdx++;
    setTimeout(typeLine, 120);
    return;
  }

  if (!isTyping) {
    isTyping = true;
    charIdx = 0;
    const span = document.createElement('span');
    span.className = 't-line';
    span.id = 'currentLine';
    span.innerHTML = `<span class="t-prompt">${line.prompt}</span><span class="t-cmd"></span>`;
    termBody.appendChild(span);
  }

  const cmdSpan = document.getElementById('currentLine').querySelector('.t-cmd');
  removeCursor();
  cmdSpan.textContent = line.text.slice(0, charIdx + 1);
  addCursor();
  charIdx++;

  if (charIdx < line.text.length) {
    setTimeout(typeLine, 60);
  } else {
    isTyping = false;
    lineIdx++;
    const cur = document.getElementById('currentLine');
    if (cur) cur.removeAttribute('id');
    removeCursor();
    setTimeout(typeLine, 300);
  }
}

// Iniciar animación del terminal cuando sea visible
const termObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(typeLine, 600);
      termObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

if (termBody) termObserver.observe(termBody);
