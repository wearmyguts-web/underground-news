// Sample Preloaded Data for System Execution
const defaultArticles = [
    {
        id: 1,
        title: "OsamaSon and Nettspend Tease Unreleased Collaborative Snippet via Socials",
        badge: "BREAKING",
        image: "https://unsplash.com",
        body: "The underground scene is melting down after a 15-second snippet leaked online, showcasing a heavily distorted plugg-gnr beat produced by standard underground heavyweights.",
        featured: true,
        date: "2 HOURS AGO"
    },
    {
        id: 2,
        title: "Che Shatters Soundscape Boundaries With Highly Anticipated Experimental Track",
        badge: "NEW DROPS",
        image: "https://unsplash.com",
        body: "Stepping away from traditional trap arrangements, Che delivers an absolute masterclass in avant-garde production.",
        featured: false,
        date: "5 HOURS AGO"
    }
];

const defaultComments = [
    { user: "BR0KEN_VAMP", text: "Nettspend actually carried on that leak ngl" },
    { user: "OSAMA_STAN", text: "Osamason production selection is unmatched right now" }
];

// Load Database from LocalStorage or Default values
let articles = JSON.parse(localStorage.getItem('ug_articles')) || defaultArticles;
let comments = JSON.parse(localStorage.getItem('ug_comments')) || defaultComments;

// --- INITIALIZE & RENDER SYSTEM ENGINE ---
function renderNewsFeed() {
    const feed = document.getElementById('news-feed');
    feed.innerHTML = '';
    
    articles.forEach(article => {
        const card = document.createElement('article');
        card.className = `news-card ${article.featured ? 'feature-card' : ''}`;
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${article.image}');"></div>
            <div class="card-content">
                <span class="badge">${article.badge}</span>
                <h3>${article.title}</h3>
                <p>${article.body}</p>
                <div class="card-footer">
                    <span class="date">${article.date || 'JUST NOW'}</span>
                    <button class="delete-story-btn" onclick="deleteArticle(${article.id})">[ REMOVE ]</button>
                </div>
            </div>
        `;
        feed.appendChild(card);
    });
}

function renderComments() {
    const container = document.getElementById('comments-container');
    container.innerHTML = '';
    comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.innerHTML = `<strong>@${c.user}</strong><p>${c.text}</p>`;
        container.appendChild(div);
    });
}

// --- CONTENT MANAGEMENT SYSTEM FUNCTIONS ---
document.getElementById('cms-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newArticle = {
        id: Date.now(),
        title: document.getElementById('cms-title').value,
        badge: document.getElementById('cms-badge').value,
        image: document.getElementById('cms-image').value,
        body: document.getElementById('cms-body').value,
        featured: document.getElementById('cms-featured').checked,
        date: "JUST NOW"
    };

    articles.unshift(newArticle);
    localStorage.setItem('ug_articles', JSON.stringify(articles));
    renderNewsFeed();
    
    // Reset and Close Modal
    this.reset();
    document.getElementById('cms-overlay').style.display = 'none';
});

window.deleteArticle = function(id) {
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem('ug_articles', JSON.stringify(articles));
    renderNewsFeed();
};

// --- AUDIO PLAYER CONTROLLER ENGINE ---
const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('audio-play-btn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "█ PAUSE";
    } else {
        audio.pause();
        playBtn.innerText = "▶ PLAY";
    }
});

document.querySelectorAll('.track-select').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.track-select').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        audio.src = this.getAttribute('data-src');
        trackTitle.innerText = this.getAttribute('data-title');
        trackArtist.innerText = this.getAttribute('data-artist');
        
        audio.play();
        playBtn.innerText = "█ PAUSE";
    });
});

// --- INTERACTIVE COMMENT LOGIC ---
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const userField = document.getElementById('comment-user');
    const textField = document.getElementById('comment-text');

    comments.unshift({ user: userField.value.toUpperCase(), text: textField.value });
    localStorage.setItem('ug_comments', JSON.stringify(comments));
    renderComments();
    
    textField.value = '';
});

// --- WINDOW MODAL EVENTS ---
document.getElementById('open-cms-btn').addEventListener('click', () => {
    document.getElementById('cms-overlay').style.display = 'flex';
});
document.getElementById('close-cms-btn').addEventListener('click', () => {
    document.getElementById('cms-overlay').style.display = 'none';
});

// Boot Website Modules
renderNewsFeed();
renderComments();
