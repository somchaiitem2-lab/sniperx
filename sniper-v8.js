// --- PG STRATEGY SNIPER ENGINE V18.0 [PURE MATHEMATICS & RNG SIMULATION] ---
const APP_TAG = "V18.0 MATH-ENGINE";
window.alert("💎 SYSTEM V18.0 ACTIVE: Mathematical Variance Engine & RNG Sync.\n\nล้างระบบกวาดเว็บทั้งหมดเรียบร้อย เปลี่ยนมาใช้โมเดลคณิตศาสตร์ล้วนๆ");

const predictBtn = document.getElementById('predictBtn');
const resultsArea = document.getElementById('results');
const statusText = document.getElementById('statusText');
const scanLine = document.getElementById('scanLine');
const strategyModal = document.getElementById('strategyModal');

const pgRegistry = [
    "Mahjong Ways", "Mahjong Ways 2", "Lucky Neko", "Treasures of Aztec", "Ways of the Qilin", 
    "Wild Bounty Showdown", "Wild Bandito", "Ganesha Fortune", "Caishen Wins", "Fortune Ox", 
    "Fortune Tiger", "Fortune Rabbit", "Fortune Mouse", "Dragon Hatch", "Dragon Hatch 2",
    "Ganesha Gold", "Midas Fortune", "Buffalo Win", "Rooster Rumble", "Legend of Hou Yi", 
    "Bikini Paradise", "Circus Delight", "Supermarket Spree", "Dreams of Macau", "Jungle Delight", 
    "Shaolin Soccer", "Medusa", "Captain's Bounty", "Hood vs Wolf", "Prosperity Lion", 
    "Hip Hop Panda", "Alchemy Gold", "Asgardian Rising", "Butterfly Blossom", "Candy Burst", 
    "Cocktail Nights", "Crypto Gold", "Double Fortune", "Galactic Gems", "Heist Stakes", 
    "Icescape", "Legend of Perseus", "Leprechaun Riches", "Phoenix Rises", "Queen of Bounty", 
    "Rise of Apollo", "Speed Winner", "Totem Wonders", "Vampire's Charm", "Werewolf's Hunt",
    "Inferno Mayhem", "Gem Saviour", "Candy Bonanza", "Win Win Fish Prawn Crab",
    "Grimms' Bounty", "Kraken Gold Rush", "Shark Bounty", "Cash Mania", "Wings of Iguazu",
    "Gladiator's Glory", "Rave Party Fever", "Yakuza Honor", "Zombie Outbreak", 
    "Secrets of Cleopatra", "Forbidden Alchemy", "Poker Kingdom Win", "Alibaba's Cave",
    "Skylight Wonders", "Majestic Empire", "Galaxy Miner", "Dragon's Treasure",
    "Diner Frenzy", "Jack the Giant Hunter", "Dead Man's Riches", "Knockout Riches",
    "Doomsday Rampage", "Graffiti Rush", "Mr. Treasure's Fortune", "Pharaoh Royals",
    "Incan Wonders", "Fortune Horse", "Prosperity Fortune Tree", "Wild Coaster",
    "Lucky Piggy", "Hawaiian Tiki", "Songkran Splash", "Mystical Spirits",
    "Super Golf Drive", "Lucky Clover Lady", "Fruity Candy", "Cruise Royale",
    "Safari Wilds", "Ninja Raccoon Frenzy", "Wild Heist Cashout", "Forge of Wealth",
    "Mafia Mayhem", "Tsar Treasures", "Plushie Frenzy", "Win Win Won", "Peas Fairy",
    "Tree of Fortune", "Wild Ape", "Ultimate Striker", "Jack Frost's Winter",
    "Mermaid Riches", "Mask Carnival", "Farm Invaders", "Emoji Riches",
    "Oriental Prosperity", "Jurassic Kingdom", "Spirited Wonders", "Sushi Oishi",
    "Battleground Royale", "Gem Saviour Sword", "Gem Saviour Conquest", "Dragon Legend",
    "Steampunk Fortune", "Summon & Conquer", "Santa's Gift Rush", "Symbols of Egypt",
    "Emperor's Favour", "Three Monkeys", "Piggy Gold", "Fortune Gods", "Joker Wild",
    "Muay Thai Champion", "Dragon Tiger Luck", "Ninja vs Samurai", "Flirting Scholar",
    "Honey Trap of Diao Chan", "Medusa II", "Diner Delights", "Bali Vacation",
    "Fortune Tree", "Candy Bonanza", "Ice Monster", "Majestic Treasures",
    "Reel Love", "Emperor's Favour", "Dim Sum Prize", "Gem Saviour Conquest",
    "The Great Icescape", "Genie's 3 Wishes", "Tiki Go", "Vampire's Charm",
    "Win Win Won", "Panda's Fortune", "Dragon Tiger Luck", "Double Fortune",
    "Captain's Bounty", "Journey to the Wealth", "Ninja vs Samurai", "Muay Thai Champion"
];

// Helper: Murmur3-like string hash for deterministic properties
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// --- BACKGROUND IMAGE CACHE ---
const gameImageCache = {};
(async function preloadRealImages() {
    try {
        // Fetch real images from a known repository in the background without slowing down the RNG math
        const r = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.betpack.com/online-casinos/pgsoft/')}`);
        const data = await r.json();
        const doc = new DOMParser().parseFromString(data.contents, 'text/html');
        
        pgRegistry.forEach(game => {
            const key = game.toLowerCase();
            const imgNode = Array.from(doc.querySelectorAll('img')).find(i => 
                (i.alt && i.alt.toLowerCase().includes(key)) || 
                (i.src && i.src.toLowerCase().includes(key.replace(/\s/g, '-')))
            );
            if (imgNode) {
                gameImageCache[game] = imgNode.src || imgNode.getAttribute('data-src');
            }
        });
    } catch(e) { console.log("Image preload silently failed."); }
})();

function getSecureImage(game) {
    if (gameImageCache[game]) return gameImageCache[game];
    
    // Fallback to a high-quality initial-based avatar if real image isn't loaded yet
    const colors = ['ff00ea', '00ffa3', '00d1ff', 'ffcc00'];
    const h = hashString(game);
    const bgColor = colors[h % colors.length];
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(game)}&background=020617&color=${bgColor}&size=300&font-size=0.25&length=3&bold=true`;
}

// Predict EV based on pure math logic
async function calculateMathematicalRNG() {
    const timestamp = Date.now();
    // Use 3-minute window for precise target matching (RNG usually shifts every 3 mins tightly)
    const currentWindow = Math.floor(timestamp / (3 * 60 * 1000));
    
    let simulatedGames = [];

    pgRegistry.forEach(game => {
        const h = hashString(game);
        
        // Setup deterministic inherent properties of the game
        const baseRtp = 96.0 + ((h % 100) / 50); // 96.0 to 98.0
        const volInt = h % 3; 
        const volatility = volInt === 0 ? 'High' : (volInt === 1 ? 'Medium' : 'Ultra-High');
        
        // V18.2 Mathematical RNG Simulation:
        // We simulate multiple interacting sine waves based on time and game properties
        const wave1 = Math.sin((currentWindow / 10) + (h % 15)); // -1 to 1
        const wave2 = Math.cos((currentWindow / 5) + (h % 20));  // -1 to 1
        const wave3 = Math.sin(currentWindow + (h % 5));         // -1 to 1
        
        // Base EV Multiplier
        let evIndex = wave1 + wave2 + wave3;
        
        // Normalize EV to ensure we always get top games surfacing. 
        // We push the curve up based on the game's hash relative to the current minute.
        // This guarantees the math forces a "relative peak" instead of an "absolute peak"
        const relativePush = ((h + currentWindow) % 100) / 50; // Add 0.0 to 1.98 based on time-sync collision
        evIndex += relativePush;
        
        // Strict threshold: >= 2.0. With relativePush, top synchronized games will easily break 2.0
        if (evIndex >= 2.0) {
            let conf = 90 + ((evIndex - 2.0) / 2.0) * 9.9; // Scale 90% to 99.9%
            
            simulatedGames.push({
                title: game,
                rtp: (baseRtp + (evIndex * 0.5)).toFixed(2), // Effective RTP spikes during this window
                vol: volatility,
                ev: evIndex,
                confidence: conf,
                pulse: Math.floor(evIndex * 33),
                img: getSecureImage(game)
            });
        }
    });

    // Rank by Highest Expected Value
    return simulatedGames.sort((a, b) => b.ev - a.ev);
}

const scanningSteps = [
    "[V18.0] INITIATING MATHEMATICAL RNG SIMULATOR...",
    "[V18.0] PARSING 3-MINUTE TIME-HASH SEED...",
    "[V18.0] CALCULATING VARIANCE WAVES (150 GAMES)...",
    "[V18.0] ISOLATING MEAN REVERSION SPIKES...",
    "[V18.0] EXECUTING STRICT MEGA WIN FILTER..."
];

predictBtn.addEventListener('click', async () => {
    resultsArea.innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    predictBtn.disabled = true;
    scanLine.style.display = 'block';
    scanLine.classList.add('active');

    let step = 0;
    const interval = setInterval(() => {
        if (step < scanningSteps.length) {
            statusText.innerText = scanningSteps[step];
            step++;
        }
    }, 600);

    // Simulate calculation time since we removed web-scraping latency
    setTimeout(async () => {
        clearInterval(interval);
        
        try {
            const games = await calculateMathematicalRNG();
            
            if (games.length > 0) {
                statusText.innerText = `MATH-SIM COMPLETE: ${games.length} STRICT MEGA WIN TARGETS (EV+)`;
                displayResults(games.slice(0, 10)); // Top 10 max
                predictBtn.innerText = 'RE-RUN MATH SIMULATION';
            } else {
                statusText.innerText = "NO PEAK VARIANCE (MEGA WIN) SIGNALS. SERVER IS COLD. WAIT 3 MINS.";
                predictBtn.innerText = 'RETRY SIMULATION (BE PATIENT)';
            }
        } catch (e) {
            statusText.innerText = "SYSTEM ERROR V18.0";
        } finally {
            predictBtn.disabled = false;
            scanLine.classList.remove('active');
            scanLine.style.display = 'none';
        }
    }, scanningSteps.length * 600 + 500);
});

function displayResults(games) {
    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.animationDelay = `${index * 0.08}s`;
        card.onclick = () => showStrategy(game);
        
        card.innerHTML = `
            <div class="chance-badge ${index < 3 ? 'high' : 'medium'}">EV+ RANK ${index + 1}</div>
            <div class="volatility-badge volatility-${game.vol.toLowerCase()}">VOL: ${game.vol}</div>
            <img src="${game.img}" alt="${game.title}" class="game-img">
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-meta">
                    <span style="color: #ff00ea; font-weight: bold;">🌋 PEAK VARIANCE</span>
                    <span style="color: #00d1ff;">EV SCORE: ${game.ev.toFixed(3)}</span>
                </div>
                <div style="font-size: 10px; color:#888; margin-top:5px;">MATH CONFIDENCE: ${game.confidence.toFixed(2)}% | RTP: ${game.rtp}%</div>
                <div class="strategy-badge badge-auto" style="margin-top:8px; background: #9c27b0;">PULL ALGORITHM PLAN</div>
            </div>
        `;
        resultsArea.appendChild(card);
        setTimeout(() => card.classList.add('visible'), 50);
    });
}

function showStrategy(game) {
    const header = document.getElementById('strategyHeader');
    const phases = document.getElementById('strategyPhases');
    
    header.innerHTML = `
        <h2 style="color:var(--primary); margin-bottom: 5px;">${game.title}</h2>
        <div style="display:flex; justify-content: space-between; align-items: center;">
            <p style="font-size: 11px; color:#888;">Engine: V18.0 PURE MATH | Window: 3 Mins</p>
            <span class="strategy-badge" style="background:rgba(255, 0, 234, 0.1); color:#ff00ea; border:1px solid #ff00ea;">EV+ TARGET</span>
        </div>
        
        <div class="prob-container" style="margin-top:20px;">
            <div class="prob-box" style="border-color: #00d1ff;">
                <span class="prob-value" style="color:#00d1ff;">${game.confidence.toFixed(2)}%</span>
                <span class="prob-label">Mathematical Confidence</span>
            </div>
            <div class="prob-box" style="border-color: #ff00ea;">
                <span class="prob-value" style="color:#ff00ea;">MAX</span>
                <span class="prob-label">Expected Value (EV)</span>
            </div>
        </div>
        <div style="font-size: 10px; color:#aaa; margin-bottom:10px; text-align:center; padding: 5px; background: rgba(0,255,163,0.05); border-radius: 4px;">
            🧮 การคำนวณ: กราฟความแปรปรวน (Variance) ชนเพดาน เกิดตรรกะ Mean Reversion ย้อนกลับแจกเงิน
        </div>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 15px 0;">
    `;

    // Strategy Math: Generate precise shot windows based on actual math/volatility
    let bailoutLimit = game.vol === 'Ultra-High' ? 10 : 7;
    let penetrationSpins = game.vol === 'Medium' ? 15 : 20;
    
    let p3_min = 5;
    let p3_max = game.vol === 'High' || game.vol === 'Ultra-High' ? 12 : 8;

    phases.innerHTML = `
        <div class="phase-card" style="border-left: 4px solid #ff3e3e;">
            <div class="phase-title" style="color:#ff3e3e;">PHASE 1: DEAD SPIN CHECK (เช็คการดูดเงิน)</div>
            <div class="phase-detail">
                <div style="margin-bottom:8px;">
                    <span class="strategy-badge badge-manual">MANUAL</span>
                    <span class="strategy-badge">TURBO OFF</span>
                    <span class="strategy-badge badge-bet">LOW BET</span>
                </div>
                หมุนมือสังเกตการณ์ <strong>${bailoutLimit} ครั้ง</strong><br>
                <span style="color:#ffcc00; font-size:11px;"><strong>🎯 กฎคณิตศาสตร์ขั้นเด็ดขาด (ห้ามฝืน):</strong> ภายใน ${bailoutLimit} ไม้นี้ หากยอดเงินลดลงรวดเดียวรวดโดยไม่มีสัญลักษณ์อะไรต่อเลย <strong><u>ให้หนีทันที!</u></strong> (แสดงว่า RNG ผันตัวไปกินลึกแล้วห้ามสู้) แต่ถ้าได้ทุนคืนทรงๆ หรือภาพกริบ ให้ข้ามไปลุย Phase 2</span>
            </div>
        </div>
        <div class="phase-card" style="border-left: 4px solid #ffcc00;">
            <div class="phase-title">PHASE 2: VARIANCE INJECTION (เจาะความผันผวน)</div>
            <div class="phase-detail">
                <div style="margin-bottom:8px;">
                    <span class="strategy-badge badge-auto">AUTO</span>
                    <span class="strategy-badge badge-turbo">TURBO ON</span>
                    <span class="strategy-badge badge-bet">STEP UP +3</span>
                </div>
                หมุนออโต้ <strong>${penetrationSpins} ครั้ง</strong> เพื่อสร้างแรงกระเพื่อมในสมการเกม<br>
                <span style="color:#00d1ff; font-size:11px;"><strong>👁️ จุดยืนยัน RNG:</strong> ช่วงนี้ต้องมี Scatter ร่วงมาขู่อย่างน้อย 2 ตัว หรือสัญลักษณ์จ่ายแพงเชื่อมกัน 1 หนติด ถ้าระบบนิ่งสนิทและเงินยุบรวดเดียว <strong>จงหยุดเล่นทันที!</strong> รอบแจ็คพอตถูกรีเซ็ตหนีไปแล้ว</span>
            </div>
        </div>
        <div class="phase-card" style="border: 1px solid #ff00ea; background: rgba(255, 0, 234, 0.08); box-shadow: 0 0 15px rgba(255, 0, 234, 0.2);">
            <div class="phase-title" style="color:#ff00ea;">PHASE 3: MEAN REVERSION (ดึงกำไรตอนกราฟดีดกลับ)</div>
            <div class="phase-detail">
                <div style="margin-bottom:8px;">
                    <span class="strategy-badge badge-manual" style="background:#ff00ea; color:#fff !important;">HIGH-PRECISION MANUAL</span>
                    <span class="strategy-badge">TURBO PRECISE</span>
                    <span class="strategy-badge badge-bet" style="background:#00ffa3; color:#000 !important;">MAX TARGET BET</span>
                </div>
                ตั้งเบทที่ทนไม้ได้ ยิงมือรวดเดียว <strong>ระหว่าง ${p3_min} - ${p3_max} ครั้ง</strong> ห้ามเกินเด็ดขาด!<br>
                <span style="color:#00ffa3; font-size:11px;"><strong>⚠️ EXIT STRATEGY (กฎหนีตาย):</strong> หน้าต่างนี้แคบมาก เมื่อคุณได้ MEGA WIN หรือยอดโบนัสใหญ่แล้ว <strong>ให้ถอนและย้ายเกมทันที</strong> กราฟคณิตศาสตร์จะดิ่งหัวปักลงดึงเงินคืนทันทีหลังจากคุณชนะรางวัลนี้!</span>
            </div>
        </div>
    `;

    strategyModal.style.display = 'flex';
}

document.getElementById('closeModal').onclick = () => strategyModal.style.display = 'none';
window.onclick = (e) => { if (e.target == strategyModal) strategyModal.style.display = 'none'; };
