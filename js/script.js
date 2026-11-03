/* =========================================================
   Mylenna — Portfólio para recrutadores | interações
   ========================================================= */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Tema ---------- */
  const root = document.documentElement;
  const themeBtn = $("#themeToggle");
  const themeIcon = themeBtn.querySelector("i");

  const applyTheme = (theme) => {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    themeIcon.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  };

  let saved = null;
  try { saved = localStorage.getItem("mylenna-theme"); } catch (_) {}
  applyTheme(saved || "dark");

  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem("mylenna-theme", next); } catch (_) {}
  });

  /* ---------- Navbar ---------- */
  const navbar = $("#navbar");
  const nav = $("#nav");
  const menuToggle = $("#menuToggle");
  const links = $$(".nav__link");
  const progress = $(".scroll-progress");

  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menuToggle.setAttribute("aria-expanded", String(open));
  };
  menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  links.forEach((l) => l.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  const sections = $$("main section[id]");
  const onScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 30);

    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;

    let current = sections[0]?.id;
    for (const s of sections) {
      if (y >= s.offsetTop - 140) current = s.id;
    }
    links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- O momento autoral: KPIs contam, barras crescem ---------- */
  function animateCount(el) {
    const target = +el.dataset.count;
    if (reduce) { el.textContent = target; return; }
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const fillBars = (scope = document) => {
    $$(".chart__fill", scope).forEach((b) => { b.style.transform = `scaleX(${(+b.dataset.width || 0) / 100})`; });
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      $$("[data-count]", e.target).forEach(animateCount);
      fillBars(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  $$("[data-animate]").forEach((el) => io.observe(el));

  /* ---------- Entradas por componente (cada lista aparece como lista) ---------- */
  const indexChildren = (container, selector, prop = "--i") => {
    $$(selector, container).forEach((el, i) => el.style.setProperty(prop, i));
  };
  $$("[data-reveal]").forEach((box) => {
    indexChildren(box, ".matrix__row");
    indexChildren(box, ".skill-group");
    $$(".skill-group", box).forEach((g, i) => $$(".chip", g).forEach((c, j) => { c.style.setProperty("--i", i); c.style.setProperty("--j", j); }));
    indexChildren(box, ".tl-card");
    indexChildren(box, ".rec");
    indexChildren(box, ".table tbody tr");
    indexChildren(box, ".contact__item");
  });
  const revealIo = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      revealIo.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  $$("[data-reveal]").forEach((el) => revealIo.observe(el));

  /* ---------- Matriz de projetos: segmentadores e linhas expansíveis ---------- */
  const state = { cat: "all", tool: "all" };
  const rows = $$(".matrix__row");
  const emptyRow = $("#projectsEmpty");
  const countEl = $("#projectsCount");

  const descOf = (row) => document.getElementById(row.querySelector(".matrix__toggle")?.getAttribute("aria-controls") || "");

  const applyFilters = () => {
    let shown = 0;
    rows.forEach((row) => {
      const tools = (row.dataset.tools || "").split(/\s+/);
      const ok = (state.cat === "all" || row.dataset.cat === state.cat) && (state.tool === "all" || tools.includes(state.tool));
      row.hidden = !ok;
      const desc = descOf(row);
      if (desc) {
        const open = row.querySelector(".matrix__toggle").getAttribute("aria-expanded") === "true";
        desc.hidden = !ok || !open;
      }
      if (ok) { row.style.setProperty("--i", shown); shown++; }
    });
    if (emptyRow) emptyRow.hidden = shown > 0;
    if (countEl) countEl.textContent = shown;
    // Reexecuta a entrada das linhas como um visual que atualizou o filtro
    const matrix = $(".matrix");
    if (matrix && matrix.classList.contains("in") && !reduce) {
      matrix.classList.remove("in"); void matrix.offsetWidth; matrix.classList.add("in");
    }
  };

  $$(".slicer").forEach((btn) => btn.addEventListener("click", () => {
    const key = btn.dataset.key;
    state[key] = btn.dataset.value;
    $$(`.slicer[data-key="${key}"]`).forEach((b) => {
      const on = b === btn;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    applyFilters();
  }));

  $$(".matrix__toggle").forEach((btn) => btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", String(open));
    const desc = document.getElementById(btn.getAttribute("aria-controls"));
    if (desc) desc.hidden = !open;
    btn.closest("tr").classList.toggle("is-open", open);
  }));

  /* ---------- Painéis em Power BI: abas de projeto e de página ---------- */
  const viewer = $(".viewer");
  let selectPanel = () => {};
  if (viewer) {
    const tabs = $$(".viewer__tab", viewer);
    const panels = $$(".viewer__panel", viewer);
    selectPanel = (id, focus = false) => {
      tabs.forEach((t) => {
        const on = t.getAttribute("aria-controls") === id;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      panels.forEach((p) => { p.hidden = p.id !== id; });
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => selectPanel(t.getAttribute("aria-controls")));
      t.addEventListener("keydown", (e) => {
        const k = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!k) return;
        e.preventDefault();
        const next = tabs[(i + k + tabs.length) % tabs.length];
        selectPanel(next.getAttribute("aria-controls"), true);
      });
    });
    panels.forEach((panel) => {
      const pages = $$(".viewer__page", panel);
      const shots = $$(".viewer__shot", panel);
      // Selo de lupa que aparece ao passar o mouse
      shots.forEach((s) => s.insertAdjacentHTML("beforeend", '<span class="viewer__zoom" aria-hidden="true"><i class="fa-solid fa-magnifying-glass-plus"></i></span>'));
      const show = (n) => {
        pages.forEach((p, k) => p.setAttribute("aria-pressed", String(k === n)));
        shots.forEach((s, k) => { s.hidden = k !== n; });
      };
      pages.forEach((p, n) => p.addEventListener("click", () => show(n)));
      show(0);
    });
    selectPanel(panels[0].id);
    // Atalhos da tabela de projetos: abrem o painel do projeto e deixam a âncora rolar até ele
    $$("[data-panel]").forEach((a) => a.addEventListener("click", () => selectPanel(a.dataset.panel)));
  }

  /* ---------- Janela de ampliação (painéis e certificados) ---------- */
  const lb = $("#lightbox");
  if (lb && typeof lb.showModal === "function") {
    // A imagem só existe quando há algo para mostrar
    const lbImg = document.createElement("img");
    $(".lightbox__fig", lb).prepend(lbImg);
    const lbCap = $("#lbCap"), lbCount = $("#lbCount");
    let group = [], idx = 0;
    const render = () => {
      const t = group[idx];
      lbImg.src = t.getAttribute("href");
      lbImg.alt = t.dataset.alt || t.querySelector("img")?.alt || t.dataset.caption || "";
      lbCap.textContent = t.dataset.caption || "";
      lbCount.textContent = `${idx + 1} / ${group.length}`;
      lb.classList.toggle("is-single", group.length < 2);
    };
    const step = (d) => { idx = (idx + d + group.length) % group.length; render(); };
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-lightbox]");
      if (!t || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
      e.preventDefault();
      group = $$(`[data-lightbox="${t.dataset.lightbox}"]`);
      idx = Math.max(0, group.indexOf(t));
      render();
      lb.showModal();
    });
    $(".lightbox__close", lb).addEventListener("click", () => lb.close());
    $(".lightbox__nav--prev", lb).addEventListener("click", () => step(-1));
    $(".lightbox__nav--next", lb).addEventListener("click", () => step(1));
    lb.addEventListener("keydown", (e) => {
      if (group.length < 2) return;
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
    // Clique fora da imagem fecha
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
    lb.addEventListener("close", () => lbImg.removeAttribute("src"));
  }

  /* ---------- Gantt ↔ cartões de detalhe ---------- */
  const setHot = (id, on) => {
    $$(`[data-id="${id}"]`).forEach((el) => el.classList.toggle("is-hot", on));
  };
  $$(".gantt__bar").forEach((bar) => {
    const id = bar.dataset.id;
    bar.addEventListener("mouseenter", () => setHot(id, true));
    bar.addEventListener("mouseleave", () => setHot(id, false));
    bar.addEventListener("focus", () => setHot(id, true));
    bar.addEventListener("blur", () => setHot(id, false));
    bar.addEventListener("click", () => {
      const card = $(`.tl-card[data-id="${id}"]`);
      if (!card) return;
      card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      setHot(id, true);
      setTimeout(() => setHot(id, false), 1600);
    });
  });
  $$(".tl-card").forEach((card) => {
    const id = card.dataset.id;
    card.addEventListener("mouseenter", () => setHot(id, true));
    card.addEventListener("mouseleave", () => setHot(id, false));
  });

  /* ---------- Formulário → WhatsApp ou e-mail ---------- */
  const WHATSAPP = "5521971164026";
  const EMAIL = "mysilvaduarte@gmail.com";
  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const nome = $("#nome").value.trim();
      const empresa = $("#empresa").value.trim();
      const msg = $("#mensagem").value.trim();
      const quem = empresa ? `${nome} (${empresa})` : nome;
      const texto = `Olá Mylenna! Me chamo ${quem}.\n\n${msg}`;
      // Enter num campo usa o primeiro botão (WhatsApp)
      if (ev.submitter?.dataset.channel === "email") {
        const assunto = empresa ? `Oportunidade em Dados & BI · ${empresa}` : "Oportunidade em Dados & BI";
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;
        return;
      }
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    });
  }

  /* ---------- Rede ao fundo: o mouse conecta os pontos por onde passa ---------- */
  const canvas = $("#network");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, dpr = 1;
    let nodes = [];
    const pointer = { x: -1e4, y: -1e4, on: false };
    let running = false;
    const NEAR = 130;   // distância que liga dois pontos entre si
    const REACH = 190;  // alcance do mouse

    const spawn = () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 1.1, glow: 0,
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(70, Math.floor((W * H) / 20000));
      if (nodes.length === 0) nodes = Array.from({ length: target }, spawn);
      else while (nodes.length < target) nodes.push(spawn());
      nodes.forEach((n) => { n.x = Math.min(n.x, W); n.y = Math.min(n.y, H); });
    };

    const colors = () => {
      const light = root.getAttribute("data-theme") === "light";
      return {
        dot: light ? "rgba(199,21,111,0.5)" : "rgba(255,111,183,0.7)",
        dotHot: light ? "#c7156f" : "#ff6fb7",
        line: light ? "199,21,111" : "255,45,149",
      };
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      const c = colors();
      const near = [];

      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
        }
        const d = pointer.on ? Math.hypot(pointer.x - n.x, pointer.y - n.y) : Infinity;
        const t = d < REACH ? 1 - d / REACH : 0;
        n.glow += (t - n.glow) * 0.18;
        if (t > 0) near.push(n);
      }

      // teia de fundo: pontos próximos entre si
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d >= NEAR) continue;
          const base = (1 - d / NEAR) * 0.28;
          const lift = Math.min(nodes[i].glow, nodes[j].glow) * 0.55;
          ctx.strokeStyle = `rgba(${c.line},${base + lift})`;
          ctx.lineWidth = lift > 0.12 ? 1.4 : 1;
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
        }
      }

      // o mouse puxa uma linha até cada ponto ao seu alcance
      if (pointer.on) {
        for (const n of near) {
          ctx.strokeStyle = `rgba(${c.line},${n.glow * 0.8})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(pointer.x, pointer.y); ctx.lineTo(n.x, n.y); ctx.stroke();
        }
      }

      // pontos
      for (const n of nodes) {
        ctx.fillStyle = n.glow > 0.35 ? c.dotHot : c.dot;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + n.glow * 1.8, 0, Math.PI * 2); ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    const start = () => { if (!running) { running = true; requestAnimationFrame(draw); } };
    const stop = () => { running = false; };
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

    window.addEventListener("resize", resize);
    resize();
    start();

    window.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      pointer.x = e.clientX; pointer.y = e.clientY; pointer.on = true;
    }, { passive: true });
    document.addEventListener("pointerleave", () => { pointer.on = false; });
    window.addEventListener("blur", () => { pointer.on = false; });
  }

  /* ---------- Datas automáticas: selo "Atualizado em" e ano no rodapé ---------- */
  // O selo mostra a última publicação da página, que o navegador recebe do servidor.
  // Quando o servidor não informa, document.lastModified devolve a data de hoje.
  const updated = $("#updated");
  if (updated) {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})/.exec(document.lastModified); // MM/DD/AAAA
    const d = m ? new Date(+m[3], +m[1] - 1, +m[2]) : new Date();
    const mes = new Intl.DateTimeFormat("pt-BR", { month: "short" }).format(d); // "set."
    const when = $("#updatedDate");
    when.textContent = `${mes} ${d.getFullYear()}`;
    when.dateTime = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    updated.hidden = false;
  }
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
});
