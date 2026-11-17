/* ==========================================================================
   UNDERGROUND ARCHIVE HIGH-END STRUCTURAL ENGINE DESIGN MATRIX
   ========================================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-main: #060606;
    --card-surface: #0e0e0e;
    --border-matrix: #1b1b1b;
    --border-bright: #333333;
    --text-primary: #ffffff;
    --text-secondary: #7e7e7e;
    --neon-alert-green: #00ff66;
    --neon-alert-red: #ff3b3b;
    --matrix-font: 'Space Grotesk', sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    font-family: var(--matrix-font);
    letter-spacing: -0.03em;
    line-height: 1.45;
    overflow-x: hidden;
}

/* Custom System Webkit Engine Scrollbars */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--bg-main); }
::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-primary); }

/* Sticky Immersive Matrix Navigation */
header {
    border-bottom: 1px solid var(--border-matrix);
    position: sticky;
    top: 0;
    background-color: rgba(6, 6, 6, 0.9);
    backdrop-filter: blur(25px);
    z-index: 9999;
}

.brand-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 1.8rem 2rem 0.5rem 2rem;
}

.logo-main {
    font-family: 'Syncopate', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.06em;
    text-transform: uppercase;
}

.system-status {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--neon-alert-green);
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.pulse-indicator {
    width: 6px;
    height: 6px;
    background-color: var(--neon-alert-green);
    border-radius: 50%;
    animation: statusPulse 1.5s infinite alternate;
}

@keyframes statusPulse {
    0% { opacity: 0.3; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 8px var(--neon-alert-green); }
}

.nav-control {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0.8rem 2rem 1.5rem 2rem;
    gap: 1.5rem;
}

.nav-tab {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-family: var(--matrix-font);
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    cursor: pointer;
    text-transform: uppercase;
    transition: color 0.3s ease;
    padding: 0.2rem 0;
}

.nav-tab.active, .nav-tab:hover {
    color: var(--text-primary);
}

.special-action-btn {
    margin-left: auto;
    color: var(--neon-alert-red);
}
.special-action-btn:hover {
    color: #ff6666;
    text-shadow: 0 0 10px rgba(255,59,59,0.3);
}

/* Streaming Text Banner Marquee */
.marquee-ticker-container {
    width: 100%;
    overflow: hidden;
    background-color: var(--text-primary);
    color: var(--bg-main);
    padding: 0.4rem 0;
    border-top: 1px solid var(--border-matrix);
}

.marquee-ticker-stream {
    display: inline-block;
    white-space: nowrap;
    padding-left: 100%;
    animation: marqueeShift 35s linear infinite;
    font-weight: 700;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
}

@keyframes marqueeShift {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
}

/* Primary Structure Grids */
.main-matrix-grid {
    max-width: 1400px;
    margin: 3rem auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 2.3fr 1fr;
    gap: 4rem;
}

@media (max-width: 1024px) {
    .main-matrix-grid { grid-template-columns: 1fr; gap: 3.5rem; }
}

.module-header-title {
    font-family: 'Syncopate', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: var(--text-primary);
    border-bottom: 1px solid var(--border-matrix);
    padding-bottom: 0.8rem;
}

/* Tab Panels Visibility Controls */
.tab-panel { display: none; }
.tab-panel.active { display: block; animation: fadeInView 0.4s ease forwards; }

@keyframes fadeInView {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Premium News Matrix Elements */
.news-matrix-feed {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}
.feature-card { grid-column: span 2; }

@media (max-width: 680px) {
    .news-matrix-feed { grid-template-columns: 1fr; }
    .feature-card { grid-column: span 1; }
}

.news-card {
    background-color: var(--card-surface);
    border: 1px solid var(--border-matrix);
    display: flex;
    flex-direction: column;
    position: relative;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
    border-color: var(--border-bright);
    box-shadow: 0 15px 35px rgba(0,0,0,0.6);
}

.card-img {
    height: 230px;
    background-size: cover;
    background-position: center;
    background-color: #111;
    filter: grayscale(100%);
    transition: filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.news-card:hover .card-img { filter: grayscale(10%); }
.feature-card .card-img { height: 360px; }

.card-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.badge {
    align-self: flex-start;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 0.25rem 0.6rem;
    margin-bottom: 1.2rem;
    border: 1px solid var(--text-secondary);
    color: var(--text-secondary);
    text-transform: uppercase;
}
.news-card:hover .badge {
    border-color: var(--text-primary);
    color: var(--text-primary);
}

.news-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}
.feature-card h3 { font-size: 2.1rem; }

.news-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 2rem;
    flex-grow: 1;
    line-height: 1.5;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border-matrix);
    padding-top: 1.2rem;
    font-size: 0.75rem;
    font-weight: 700;
}
.date { color: var(--text-secondary); letter-spacing: 0.05em; }

.delete-action-trigger {
    background: none;
    border: none;
    color: var(--neon-alert-red);
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    opacity: 0.3;
    transition: opacity 0.2s ease;
}
.delete-action-trigger:hover { opacity: 1; }

/* Voting Poll Subsystem UI Layout */
.poll-matrix-box {
    background-color: var(--card-surface);
    border: 1px solid var(--border-matrix);
    padding: 2.5rem;
}
.poll-desc-text { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; }
.poll-options-stack { display: flex; flex-direction: column; gap: 1.2rem; }

.poll-option-row {
    position: relative;
    border: 1px solid var(--border-matrix);
    background-color: #050505;
    padding: 1.2rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: border-color 0.2s ease;
}
.poll-option-row:hover { border-color: var(--border-bright); }

.poll-bg-progress {
    position: absolute;
    top: 0; left: 0; bottom: 0;
    background-color: rgba(255,255,255,0.02);
    width: 0%;
    transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1;
}

.poll-track-details { position: relative; z-index: 2; display: flex; flex-direction: column; }
.poll-track-details strong { font-size: 1rem; color: var(--text-primary); }
.poll-track-details span { font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.1rem; }

.poll-voted-analytics { position: relative; z-index: 2; display: flex; flex-direction: column; text-align: right; }
.poll-percentage-label { font-weight: 700; font-size: 1.1rem; }
.poll-total-count { font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.1rem; }

/* Board Forum Stream */
.discussion-matrix-panel { margin-top: 5rem; }
.comment-submission-block { background-color: var(--card-surface); border: 1px solid var(--border-matrix); padding: 2.5rem; }

#matrix-comment-form input, #matrix-comment-form textarea {
    width: 100%; background-color: #000; border: 1px solid var(--border-matrix);
    color: white; font-family: var(--matrix-font); padding: 1rem; margin-bottom: 1.2rem; outline: none;
}
#matrix-comment-form input:focus, #matrix-comment-form textarea:focus { border-color: var(--border-bright); }
#matrix-comment-form textarea { height: 90px; resize: none; }

.submit-action-btn {
    background-color: var(--text-primary); color: #000; border: none; font-weight: 700;
    font-size: 0.8rem; letter-spacing: 0.05em; padding: 0.8rem 2rem; cursor: pointer; text-transform: uppercase;
}
.submit-action-btn:hover { background-color: #ddd; }

.comments-output-stream { margin-top: 2.5rem; }
.comment-node-row { border-bottom: 1px solid var(--border-matrix); padding: 1.2rem 0; }
.comment-node-row:last-child { border: none; }
.comment-node-row strong { color: var(--text-primary); font-size: 0.85rem; display: block; }
.comment-node-row p { font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.4rem; }

/* Sidebar Component Ledger Designs */
.sidebar-data-module { background-color: var(--card-surface); border: 1px solid var(--border-matrix); padding: 2rem; margin-bottom: 2.5rem; }
.radar-ranking-ledger { list-style: none; }
.radar-ranking-ledger li { display: flex; align-items: center; padding: 1.2rem 0; border-bottom: 1px solid var(--border-matrix); }
.radar-ranking-ledger li:first-child { padding-top: 0; }
.radar-ranking-ledger li:last-child { border-bottom: none; padding-bottom: 0; }
.ledger-index { font-family: 'Syncopate', sans-serif; font-size: 1rem; color: #252525; margin-right: 1.5rem; }
