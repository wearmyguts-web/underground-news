// ==========================================================================
// UNDERGROUND ARCHIVE VERSION 3.0 COMPLETE DATABASE & CONTROL MATRIX
// ==========================================================================

const defaultArticles = [
    {
        id: 1,
        title: "Fakemink Dominates London Scene Following Highly Anticipated 'TERRIFIED' Launch",
        badge: "GLOBAL INTEL",
        image: "",
        body: "Recorded across experimental underground studio networks in North London, Algerian-Indian artist Fakemink is heavily warping UK road rap structures with distorted noise layouts, gathering immediate hype from collectors.",
        featured: true,
        date: "2 HOURS AGO"
    },
    {
        id: 2,
        title: "Bleood Dictates the Atlanta Circuit With Aggressive Maximalist Track Rollout",
        badge: "RAGE CORE",
        image: "",
        body: "Completely dodging traditional major label distributions, Bleood drops a high-contrast soundscape framework optimized exclusively for intense, high-velocity live crowds.",
        featured: false,
        date: "5 HOURS AGO"
    },
    {
        id: 3,
        title: "Xaviersobased and Yhapojj Accelerate Search Spikes on New Collaborative Snippets",
        badge: "PLUGG LEDGER",
        image: "",
        body: "The internet underground network registers immense traffic spikes as fresh sound files leak onto local community servers, signaling a major generational cross-over.",
        featured: false,
        date: "1 DAY AGO"
    }
];

const defaultPolls = [
    { id: "p1", artist: "Fakemink", track: "TERRIFIED", votes: 342 },
    { id: "p2", artist: "Bleood", track: "PROTAGONIST", votes: 289 },
    { id: "p3", artist: "Xaviersobased", track: "PATCHWORK", votes: 412 },
    { id: "p4", artist: "Yhapojj", track: "MY EVERYTHIN", votes: 198 }
];

const defaultComments = [
    { user: "NET_VAMP_00", text: "fakemink production architecture is genuinely decades ahead of the curve." },
    { user: "ATL_PIT_BOSS", text: "bleood live shows are pure pandemonium, check the streaming logs." },
    { user: "PLUGG_SOURCE", text: "xaviersobased has been driving the soundscape since day one." }
];

// Load Runtime Database Architecture from Cache Engine
let articles = JSON.parse(localStorage.getItem('uga_articles')) || defaultArticles;
let polls = JSON.parse(localStorage.getItem('uga_polls')) || defaultPolls;
let comments = JSON.parse(localStorage.getItem('uga_comments')) || defaultComments;

// --- FALLBACK AUTO GENERATOR IMAGE MATRICES ---
function getPlaceholderImage(keyword, index) {
    const list = [
        "https://unsplash.com",
        "https://unsplash.com",
        "https://unsplash.com",
        "https://unsplash.com"
    ];
    if (keyword && keyword.startsWith('http')) return keyword;
    return list[index % list.length];
}

// --- CORE INTERFACE RENDERING ENGINE ---
function renderNewsFeed() {
    const feed = document.getElementById('news-feed-container');
    if(!feed) return;
    feed.innerHTML = '';
    
    articles.forEach((article, idx) => {
        const card = document.createElement('article');
        card.className = `news-card ${article.featured ? 'feature-card' : ''}`;
        const imgUrl = getPlaceholderImage(article.image, idx);
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${imgUrl}');"></div>
            <div class="card-content">
                <span class="badge">${article.badge}</span>
                <h3>${article.title}</h3>
                <p>${article.body}</p>
                <div class="card-footer">
                    <span class="date">${article.date}</span>
                    <button class="delete-action-trigger" onclick="deleteArticle(${article.id})">[ DISMISS DATA ]</button>
                </div>
            </div>
        `;
        feed.appendChild(card);
    });
}

function renderPollMatrix() {
    const container = document.getElementById('poll-options-container');
    if(!container) return;
    container.innerHTML = '';
    
    const maxVotes = Math.max(...polls.map(p => p.votes), 1);
    const totalVotes = polls.reduce((sum, p) => sum + p.votes, 0);

    polls.forEach(p => {
        const pct = ((p.votes / maxVotes) * 100).toFixed(0);
        const displayPct = totalVotes > 0 ? ((p.votes / totalVotes) * 100).toFixed(0) : 0;
        
        const row = document.createElement('div');
        row.className = 'poll-option-row';
        row.onclick = () => castVote(p.id);
        row.innerHTML = `
            <div class="poll-bg-progress" style="width: ${pct}%"></div>
            <div class="poll-track-details">
                <strong>"${p.track}"</strong>
                <span>${p.artist}</span>
            </div>
            <div class="poll-voted-analytics">
                <span class="poll-percentage-label">${displayPct}%</span>
                <span class="poll-total-count">${p.votes} HITS</span>
            </div>
        `;
        container.appendChild(row);
    });
}

function renderComments() {
    const container = document.getElementById('comments-output-wrapper');
    if(!container) return;
    container.innerHTML = '';
    comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comment-node-row';
        div.innerHTML = `<strong>@${c.user}</strong><p>${c.text}</p>`;
        container.appendChild(div);
    });
}

// --- STATE ACTIONS & EVENT HANDLING MATRIX ---
function castVote(id) {
    polls = polls.map(p => p.id === id ? { ...p, votes: p.votes + 1 } : p);
    localStorage.setItem('uga_polls', JSON.stringify(polls));
    renderPollMatrix();
}

window.deleteArticle = function(id) {
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem('uga_articles', JSON.stringify(articles));
    renderNewsFeed();
};

// Tab Controller Engine Layout
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        if (this.id === 'open-cms-btn') return;
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const target = this.getAttribute('data-target');
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// Core Form Injections System
document.getElementById('modal-cms-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newArticle = {
        id: Date.now(),
        title: document.getElementById('cms-input-title').value,
        badge: document.getElementById('cms-input-badge').value,
        image: document.getElementById('cms-input-image').value,
        body: document.getElementById('cms-input-body').value,
        featured: document.getElementById('cms-input-featured').checked,
        date: "JUST NOW"
    };

    articles.unshift(newArticle);
    localStorage.setItem('uga_articles', JSON.stringify(articles));
    renderNewsFeed();
    this.reset();
    document.getElementById('cms-modal-overlay').style.display = 'none';
});

document.getElementById('matrix-comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const alias = document.getElementById('comment-alias').value.toUpperCase();
    const msg = document.getElementById('comment-message').value;

    comments.unshift({ user: alias, text: msg });
    localStorage.setItem('uga_comments', JSON.stringify(comments));
    renderComments();
    document.getElementById('comment-message').value = '';
});

// Audio Control Engine
const audio = document.getElementById('core-audio-element');
const playBtn = document.getElementById('global-audio-toggle');
const playerTrack = document.getElementById('player-track-name');
const playerArtist = document.getElementById('player-artist-name');

if (playBtn && audio) {
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playBtn.innerText = "█ PAUSE OVERRIDE";
        } else {
            audio.pause();
            playBtn.innerText = "▶ STREAM PREVIEW";
        }
    });
}

document.querySelectorAll('.routing-row-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.routing-row-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        audio.src = this.getAttribute('data-url');
        playerTrack.innerText = this.getAttribute('data-title');
        playerArtist.innerText = this.getAttribute('data-artist');
        audio.play();
        playBtn.innerText = "█ PAUSE OVERRIDE";
    });
});

// Modal Toggles
document.getElementById('open-cms-btn').addEventListener('click', () => document.getElementById('cms-modal-overlay').style.display = 'flex');
document.getElementById('close-cms-btn').addEventListener('click', () => document.getElementById('cms-modal-overlay').style.display = 'none');

// Boot Modular System
renderNewsFeed();
renderPollMatrix();
renderComments();
