<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand"><div class="brand-icon">✦</div><div><b>UX Scenario Agent</b><small>Codex-powered UX analysis</small></div></div>
      <nav>
        <RouterLink to="/"><span>＋</span> New Analysis</RouterLink>
        <RouterLink to="/history"><span>◷</span> History</RouterLink>
      </nav>
      <div class="side-foot">Approach 2 · Scenario + Wireframes</div>
    </aside>
    <main class="main"><RouterView /></main>
  </div>
</template>
