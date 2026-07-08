(function () {
  const config = window.SITE_CONFIG;
  const root = getBasePath();
  const state = {
    docs: [],
    cheats: []
  };

  document.addEventListener("DOMContentLoaded", async () => {
    applyTheme();
    renderShell();
    state.docs = config.playbookDocs.map(([slug, title, summary], index) => ({
      slug, title, summary, type: "playbook", order: index
    }));
    state.cheats = config.cheatSheets.map(([slug, title, summary], index) => ({
      slug, title, summary, type: "cheatsheet", order: index
    }));

    maybeRenderCards();
    await enrichSearchIndex();
    initSearch();
    await maybeRenderDocument();
    updateFooterDate();
  });

  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes("/playbook/") || path.includes("/cheatsheets/")) {
      return "..";
    }
    return ".";
  }

  function absoluteLink(relativePath) {
    return `${root}/${relativePath.replace(/^\//, "")}`;
  }

  function getDocMeta(slug) {
    return config.docMeta?.[slug] || {};
  }

  function renderShell() {
    const shell = document.getElementById("site-shell");
    if (!shell) return;
    const page = document.body.dataset.page;
    const navLinks = config.nav.map((item) => {
      const active = item.page === page || (page === "playbook-doc" && item.page === "playbook") || (page === "cheatsheet-doc" && item.page === "cheatsheets");
      return `<a class="${active ? "active" : ""}" href="${absoluteLink(item.href)}">${item.label}</a>`;
    }).join("");

    shell.innerHTML = `
      <header class="site-header">
        <nav class="nav">
          <a class="brand" href="${absoluteLink("/index.html")}">
            <span class="brand-title">${config.name}</span>
            <span class="brand-subtitle">${config.role} • ${config.title}</span>
          </a>
          <div class="nav-links">${navLinks}</div>
          <div class="nav-tools">
            <div class="header-actions">
              <a class="button tertiary" href="${absoluteLink("/roadmap.html")}">Roadmap</a>
              <a class="button primary" href="${absoluteLink("/playbook/index.html")}">Playbook</a>
            </div>
            <div class="search-box">
              <input id="search-input" type="search" placeholder="Search docs, commands, troubleshooting">
              <div id="search-results" class="search-results"></div>
            </div>
          </div>
        </nav>
      </header>
    `;

    document.body.insertAdjacentHTML("beforeend", `
      <footer class="site-footer">
        <span>
          <a href="${config.footer.github}" target="_blank" rel="noreferrer">GitHub</a> •
          <a href="${config.footer.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a> •
          <a href="${config.footer.email}">Email</a>
        </span>
        <span id="footer-meta">Last Updated</span>
      </footer>
    `);
  }

  function applyTheme() {
    const preferred = localStorage.getItem("site-theme");
    if (preferred === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }

  function maybeRenderCards() {
    renderCardGrid("technology-grid", state.docs, "playbook");
    renderCardGrid("playbook-grid", state.docs, "playbook");
    renderCardGrid("cheatsheet-grid", state.cheats, "cheatsheets");
  }

  function renderCardGrid(id, items, type) {
    const node = document.getElementById(id);
    if (!node) return;
    node.innerHTML = items.map((item) => {
      const meta = getDocMeta(item.slug);
      const icon = meta.icon || (type === "playbook" ? "⚙️" : "🧰");
      const tags = (meta.tags || []).slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("");
      return `
        <a class="technology-card" href="${absoluteLink(`/${type === "playbook" ? "playbook" : "cheatsheets"}/doc.html?slug=${item.slug}`)}">
          <div class="card-meta">
            <span class="card-pill">${meta.level || (type === "playbook" ? "Platform Doc" : "Ops Quickref")}</span>
            <span class="card-slug">${icon} ${item.slug}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="card-tags">${tags}</div>
        </a>
      `;
    }).join("");
  }

  function initSearch() {
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");
    if (!input || !results) return;
    const index = [...state.docs, ...state.cheats];

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      if (!query) {
        results.classList.remove("open");
        results.innerHTML = "";
        return;
      }

      const matches = index.filter((item) => {
        const haystack = `${item.title} ${item.summary} ${item.slug} ${item.content || ""}`.toLowerCase();
        return haystack.includes(query);
      }).slice(0, 8);

      results.innerHTML = matches.length ? matches.map((item) => `
        <a class="search-result" href="${absoluteLink(`/${item.type === "playbook" ? "playbook" : "cheatsheets"}/doc.html?slug=${item.slug}`)}">
          <strong>${item.title}</strong>
          <div>${item.summary}</div>
        </a>
      `).join("") : `<div class="search-result"><strong>No matches</strong><div>Try a different keyword.</div></div>`;
      results.classList.add("open");
    });

    document.addEventListener("click", (event) => {
      if (!results.contains(event.target) && event.target !== input) {
        results.classList.remove("open");
      }
    });
  }

  async function enrichSearchIndex() {
    const items = [...state.docs, ...state.cheats];
    await Promise.all(items.map(async (item) => {
      const folder = item.type === "playbook" ? "playbook" : "cheatsheets";
      try {
        const raw = await fetch(absoluteLink(`/${folder}/${item.slug}.md`)).then((res) => res.text());
        item.content = raw.replace(/^---[\s\S]*?---/, " ").replace(/[`#>*|[\]\-]/g, " ");
      } catch (error) {
        item.content = "";
      }
    }));
  }

  async function maybeRenderDocument() {
    const page = document.body.dataset.page;
    if (page !== "playbook-doc" && page !== "cheatsheet-doc") return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug") || (page === "playbook-doc" ? state.docs[0].slug : state.cheats[0].slug);
    const collection = page === "playbook-doc" ? state.docs : state.cheats;
    const item = collection.find((entry) => entry.slug === slug) || collection[0];
    const folder = page === "playbook-doc" ? "playbook" : "cheatsheets";
    const path = absoluteLink(`/${folder}/${item.slug}.md`);
    const content = await fetch(path).then((res) => res.text());
    renderDocChrome(item, collection, folder);
    renderDocMeta(item);
    renderMarkdown(content, item.title, item.slug);
  }

  function renderDocChrome(current, collection, folder) {
    const sidebar = document.getElementById("docs-sidebar");
    const breadcrumbs = document.getElementById("breadcrumbs");
    const pagination = document.getElementById("doc-pagination");
    const currentIndex = collection.findIndex((item) => item.slug === current.slug);
    const prev = collection[currentIndex - 1];
    const next = collection[currentIndex + 1];

    if (sidebar) {
      sidebar.innerHTML = `
        <div class="sidebar-group">
          <h3>${folder === "playbook" ? "Playbook Topics" : "Cheat Sheets"}</h3>
          ${collection.map((item) => `
            <a class="sidebar-link ${item.slug === current.slug ? "active" : ""}" href="${absoluteLink(`/${folder}/doc.html?slug=${item.slug}`)}">${item.title}</a>
          `).join("")}
        </div>
      `;
    }

    if (breadcrumbs) {
      breadcrumbs.innerHTML = `
        <a href="${absoluteLink("/index.html")}">Home</a> / 
        <a href="${absoluteLink(`/${folder}/index.html`)}">${folder === "playbook" ? "DevOps Playbook" : "Cheat Sheets"}</a> /
        <span>${current.title}</span>
      `;
    }

    if (pagination) {
      pagination.innerHTML = `
        ${prev ? `<a class="button ghost" href="${absoluteLink(`/${folder}/doc.html?slug=${prev.slug}`)}">← ${prev.title}</a>` : `<span></span>`}
        ${next ? `<a class="button ghost" href="${absoluteLink(`/${folder}/doc.html?slug=${next.slug}`)}">${next.title} →</a>` : `<span></span>`}
      `;
    }
  }

  function getTopicConcepts(slug) {
    return config.topicConcepts?.[slug] || [];
  }

  function renderDocMeta(item) {
    const node = document.getElementById("doc-meta");
    if (!node) return;
    const meta = getDocMeta(item.slug);
    const concepts = getTopicConcepts(item.slug);
    const conceptsHtml = concepts.length ? `
      <div class="doc-concepts">
        <h3>Key concepts</h3>
        <ul>${concepts.map((concept) => `<li>${concept}</li>`).join("")}</ul>
      </div>
    ` : "";

    node.innerHTML = `
      <div class="doc-meta-grid">
        <div class="doc-meta-card">
          <span>Difficulty</span>
          <strong>${meta.level || "Intermediate"}</strong>
        </div>
        <div class="doc-meta-card">
          <span>Reading Time</span>
          <strong>${meta.readingTime || "10 min"}</strong>
        </div>
        <div class="doc-meta-card">
          <span>Prerequisites</span>
          <strong>${meta.prerequisites || "Core engineering fundamentals"}</strong>
        </div>
      </div>
      ${conceptsHtml}
    `;
  }

  function renderMarkdown(markdown, title, slug) {
    const contentNode = document.getElementById("doc-content");
    if (!contentNode) return;
    const cleaned = markdown.replace(/^---[\s\S]*?---/, "").trim();
    const prepared = injectInterviewSection(cleaned, slug);
    marked.setOptions({ headerIds: true, mangle: false });
    contentNode.innerHTML = `
      <div class="concept-nav-section">
        <h3>Concept Navigator</h3>
        <div id="concept-nav" class="concept-nav"></div>
      </div>
      ${marked.parse(prepared)}
    `;
    document.title = `${title} | DevOps Playbook`;
    assignHeadingIds();
    buildConceptNav();
    buildToc();
    renderMermaid();
    addCodeCopyButtons();
  }

  function injectInterviewSection(markdown, slug) {
    const qa = config.interviewQuestions?.[slug];
    if (!qa) return markdown;
    const pattern = /(^|\n)#{1,3}\s*Interview Questions\b[\s\S]*?(?=\n#{1,3}\s|\Z)/i;
    const body = qa.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n");
    if (pattern.test(markdown)) {
      return markdown.replace(pattern, `\n## Interview Questions and Answers\n\n${body}\n\n`);
    }
    return `${markdown}\n\n## Interview Questions and Answers\n\n${body}`;
  }

  function assignHeadingIds() {
    const contentNode = document.getElementById("doc-content");
    if (!contentNode) return;
    contentNode.querySelectorAll("h1, h2, h3").forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/[^\w]+/g, "-");
      }
    });
  }

  function buildConceptNav() {
    const navNode = document.getElementById("concept-nav");
    const contentNode = document.getElementById("doc-content");
    if (!navNode || !contentNode) return;
    const headings = [...contentNode.querySelectorAll("h1, h2, h3")].filter((heading) => heading.id && heading.textContent.trim());
    navNode.innerHTML = headings.map((heading) => `<a class="concept-nav-link" href="#${heading.id}">${heading.textContent}</a>`).join("");
  }

  function buildToc() {
    const tocNode = document.getElementById("doc-toc");
    const contentNode = document.getElementById("doc-content");
    if (!tocNode || !contentNode) return;
    const headings = [...contentNode.querySelectorAll("h2, h3")];
    tocNode.innerHTML = `
      <h3>On This Page</h3>
      ${headings.map((heading) => {
        const id = heading.id || heading.textContent.toLowerCase().replace(/[^\w]+/g, "-");
        heading.id = id;
        return `<a class="toc-link" href="#${id}">${heading.textContent}</a>`;
      }).join("")}
    `;
  }

  function addCodeCopyButtons() {
    const contentNode = document.getElementById("doc-content");
    if (!contentNode) return;
    contentNode.querySelectorAll("pre").forEach((block) => {
      if (block.querySelector(".copy-btn")) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-btn";
      button.textContent = "Copy";
      button.addEventListener("click", async () => {
        const code = block.textContent || "";
        await navigator.clipboard.writeText(code);
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 1400);
      });
      block.prepend(button);
    });
  }

  function renderMermaid() {
    if (!window.mermaid) return;
    mermaid.initialize({ startOnLoad: false, theme: document.body.classList.contains("dark") ? "dark" : "default" });
    document.querySelectorAll("pre code.language-mermaid").forEach((node) => {
      const parent = node.parentElement;
      const graph = document.createElement("div");
      graph.className = "mermaid";
      graph.textContent = node.textContent;
      parent.replaceWith(graph);
    });
    mermaid.run({ querySelector: ".mermaid" });
  }

  function updateFooterDate() {
    const meta = document.getElementById("footer-meta");
    if (!meta) return;
    meta.textContent = `Last Updated: ${new Date().toLocaleDateString()} • Copyright © ${new Date().getFullYear()} ${config.name}`;
  }
})();
