// ==========================================================================
// Vinay Kumar Portfolio - Interactive Application Script
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNeuralCanvas();
  initNavbar();
  initCompilerBenchmark();
  initInteractiveTerminal();
});

/* --------------------------------------------------------------------------
   1. Neural Particle Web Animation
   -------------------------------------------------------------------------- */
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 14000), 80);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
      color: i % 2 === 0 ? 'rgba(0, 242, 255, ' : 'rgba(168, 85, 247, '
    });
  }

  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.fill();

      // Connect with nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = (1 - dist / 130) * 0.25;
          ctx.strokeStyle = `rgba(0, 242, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Connect with mouse
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          const mAlpha = (1 - mDist / 160) * 0.45;
          ctx.strokeStyle = `rgba(168, 85, 247, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   2. Sticky Glass Navbar & Mobile Toggle
   -------------------------------------------------------------------------- */
function initNavbar() {
  const toggle = document.getElementById('mobile-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
    });

    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('active');
      });
    });
  }

  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(7, 8, 12, 0.92)';
      nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      nav.style.background = 'rgba(7, 8, 12, 0.7)';
      nav.style.boxShadow = 'none';
    }
  });
}

/* --------------------------------------------------------------------------
   3. Interactive LLM Compiler Benchmark Simulator
   -------------------------------------------------------------------------- */
function initCompilerBenchmark() {
  const scenarioSelect = document.getElementById('prompt-select');
  const runBtn = document.getElementById('run-benchmark-btn');
  const stdLatency = document.getElementById('std-latency');
  const optLatency = document.getElementById('opt-latency');

  if (!scenarioSelect || !runBtn) return;

  const scenarios = {
    contract: { std: 1460, opt: 805, reduction: '44.8%' },
    telecom: { std: 2180, opt: 1190, reduction: '45.4%' },
    rag: { std: 1120, opt: 670, reduction: '40.2%' }
  };

  runBtn.addEventListener('click', () => {
    const selected = scenarioSelect.value;
    const data = scenarios[selected] || scenarios.contract;

    runBtn.disabled = true;
    runBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Compiling...';
    stdLatency.innerText = 'Calculating...';
    optLatency.innerText = 'Optimizing...';

    setTimeout(() => {
      stdLatency.innerText = `${data.std.toLocaleString()} ms`;
      optLatency.innerText = `${data.opt.toLocaleString()} ms (-${data.reduction})`;
      runBtn.disabled = false;
      runBtn.innerHTML = '<i class="fas fa-play"></i> Run Benchmark Simulation';
    }, 600);
  });
}

/* --------------------------------------------------------------------------
   4. Live Interactive Terminal Simulation
   -------------------------------------------------------------------------- */
function initInteractiveTerminal() {
  const term = document.getElementById('terminal-output');
  if (!term) return;

  const extraLogs = [
    '→ Syncing with Overleaf MCP server: [Vinay_Kumar_CV.tex]',
    '→ Evaluating 16-agent telemetry: throughput 95%, straight-through OK',
    '→ gVisor sandbox health: 0 memory leaks, microVM state secure',
    '→ Ready for incoming multi-agent dispatch instructions.'
  ];

  let logIndex = 0;
  setInterval(() => {
    if (logIndex < extraLogs.length) {
      const newLine = document.createElement('div');
      newLine.className = 'terminal-line text-cyan';
      newLine.textContent = extraLogs[logIndex];
      const cursorLine = term.querySelector('.terminal-line:last-child');
      term.insertBefore(newLine, cursorLine);
      logIndex++;
    }
  }, 4000);
}
