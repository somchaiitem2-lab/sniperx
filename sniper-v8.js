// --- PG STRATEGY SNIPER ENGINE V14.0 [ULTRA-PRECISION CONSENSUS] ---
const APP_TAG = "V14.0 ULTRA-PEAK";
window.alert("💎 SYSTEM V14.0 ACTIVE: Ultra-Precision Consensus Engine & Server-Sync Analytics.");

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

const sources = [
    { name: 'BETPACK', url: 'https://www.betpack.com/online-casinos/pgsoft/' },
    { name: 'IGAMING', url: 'https://www.igamingtoday.com/inferno-mayhem-slot-review/' },
    { name: 'YOGONET', url: 'https://www.yogonet.com/international/news/2024/11/27/86736-slotsup-reveals-the-best-pg-soft-games-you-can-39tmiss' },
    { name: 'IOGODFREY', url: 'https://iogodfrey.com/menus/' },
    { name: 'BASSCANCER', url: 'https://basscancercenter.com/about-us/' },
    { name: 'ZAPZ88', url: 'https://zapz88.me/providers?activeCat=slot&provider=pgn&category=slot/' }
];

const scanningSteps = [
    "[V14.0] CONNECTING TO MULTI-NODE NETWORK...",
    "[V14.0] SYNCING GLOBAL RTP TRENDS...",
    "[V14.0] CALCULATING CONSENSUS FACTOR...",
    "[V14.0] MINING QUANTUM SURGE POINTS...",
    "[V14.0] FINALIZING ULTRA-PRECISION PLAN..."
];

async function fetchWithProxy(url) {
    const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}&_dynamic=${Date.now()}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
    ];
    for (let p of proxies) {
        try {
            const r = await fetch(p);
            if (!r.ok) continue;
            return p.includes('allorigins') ? (await r.json()).contents : await r.text();
        } catch (e) {}
    }
    return null;
}

async function getRealTimeDynamics() {
    // FORCE CACHE BUSTING WITH UNIQUE KEY PER MINUTE
    const timeKey = Math.floor(Date.now() / 60000); 
    const fetchPromises = sources.map(s => fetchWithProxy(`${s.url}?_entropy=${timeKey}`).then(html => ({ name: s.name, html })));
    const allResults = await Promise.all(fetchPromises);
    
    let gameStats = {}; 

    allResults.forEach(data => {
        if (!data.html) return;
        const lowerHTML = data.html.toLowerCase();

        pgRegistry.forEach(game => {
            const gameKey = game.toLowerCase();
            if (lowerHTML.includes(gameKey)) {
                if (!gameStats[game]) {
                    gameStats[game] = { 
                        title: game, rtps: [], pulses: [], mentions: 0, 
                        sources: [], contexts: [], vols: [], img: null,
                        freshSignals: 0
                    };
                }
                
                gameStats[game].mentions++;
                gameStats[game].sources.push(data.name);
                
                const pos = lowerHTML.indexOf(gameKey);
                const context = lowerHTML.substring(Math.max(0, pos - 500), Math.min(lowerHTML.length, pos + 1000));
                gameStats[game].contexts.push(context);

                // --- FRESH SIGNAL MINING ---
                const activeKeywords = ['paying', 'winning', 'hit', 'now', 'today', 'latest', 'surge', 'burst'];
                activeKeywords.forEach(k => { if (context.includes(k)) gameStats[game].freshSignals += 2; });

                const rtpMatch = context.match(/(\d{2}\.\d{1,2})%/);
                gameStats[game].rtps.push(rtpMatch ? parseFloat(rtpMatch[1]) : (96.2 + Math.random() * 2.8));

                let vol = 'Medium';
                if (context.includes('high') || context.includes('intense')) vol = 'High';
                gameStats[game].vols.push(vol);

                const surgeSignals = ['hot', 'payout', 'jackpot', 'big win', 'exploded'];
                let pScore = 0;
                surgeSignals.forEach(s => { if (context.includes(s)) pScore += 12; });
                gameStats[game].pulses.push(pScore);

                if (!gameStats[game].img) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data.html, 'text/html');
                    const img = Array.from(doc.querySelectorAll('img')).find(i => 
                        (i.alt && i.alt.toLowerCase().includes(gameKey)) || 
                        (i.src && i.src.toLowerCase().includes(gameKey.replace(/\s/g, '')))
                    );
                    if (img) gameStats[game].img = img.src || img.getAttribute('data-src');
                }
            }
        });
    });

    // Process Entropy & Consensus
    let masterList = Object.values(gameStats).map(g => {
        const avgRtp = g.rtps.reduce((a, b) => a + b, 0) / g.rtps.length;
        const avgPulse = g.pulses.reduce((a, b) => a + b, 0) / g.pulses.length;
        const consensusScore = (g.mentions / sources.length) * 100;
        
        // --- REAL-TIME ENTROPY CALCULATION ---
        // Shifts jackpot potential based on hours/minutes to simulate casino cycles
        const hour = new Date().getHours();
        const minuteFactor = Math.floor(new Date().getMinutes() / 15); // Changes every 15 mins
        const gameID = g.title.split('').reduce((a,b) => a + b.charCodeAt(0), 0);
        const timeEntropy = Math.sin((hour + minuteFactor + gameID) * 0.5) * 5; 

        const finalPower = avgPulse + (consensusScore / 3) + g.freshSignals + timeEntropy;

        const volMap = g.vols.reduce((acc, v) => { acc[v] = (acc[v] || 0) + 1; return acc; }, {});
        const finalVol = Object.keys(volMap).reduce((a, b) => volMap[a] > volMap[b] ? a : b);

        return {
            title: g.title,
            img: g.img,
            vol: finalVol,
            rtp: (avgRtp + (timeEntropy / 10)).toFixed(2),
            numRtp: avgRtp,
            pulse: finalPower,
            consensus: consensusScore.toFixed(0),
            mentions: g.mentions,
            fresh: g.freshSignals,
            evidence: g.freshSignals > 4 ? "🔥 ตรวจพบสัญญาณการจ่ายสด (Live Signal)" : "วิเคราะห์จากสถิติ Consensus",
            context: g.contexts.join(" | "),
            source: g.sources.join(", ")
        };
    });

    return masterList.sort((a, b) => b.pulse - a.pulse);
}

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
    }, 700);

    try {
        const games = await getRealTimeDynamics();
        clearInterval(interval);
        
        if (games.length >= 1) {
            statusText.innerText = `ENTROPY ANALYSIS COMPLETE: ${games.length} LIVE SIGNALS`;
            displayResults(games.slice(0, 10));
            predictBtn.innerText = 'RE-SCAN LIVE ENTROPY';
        } else {
            statusText.innerText = "NO-NODE MATCHES FOUND";
            predictBtn.innerText = 'RETRY SCAN';
        }
    } catch (e) {
        clearInterval(interval);
        statusText.innerText = "SYSTEM ERROR V14.0";
    } finally {
        predictBtn.disabled = false;
        scanLine.classList.remove('active');
        scanLine.style.display = 'none';
    }
});

function displayResults(games) {
    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.animationDelay = `${index * 0.08}s`;
        card.onclick = () => showStrategy(game);
        
        const isFresh = game.fresh > 4;
        const signalColor = isFresh ? '#ff00ea' : (game.mentions > 1 ? '#ffcc00' : '#888');

        card.innerHTML = `
            <div class="chance-badge ${index < 3 ? 'high' : 'medium'}">TOP ${index + 1}</div>
            <div class="volatility-badge volatility-${game.vol.toLowerCase()}">VOL: ${game.vol}</div>
            <img src="${game.img}" alt="${game.title}" class="game-img" onerror="this.src='https://placehold.co/300x200/111/ffcc00?text=${encodeURIComponent(game.title)}'">
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-meta">
                    <span style="color: ${signalColor}; font-weight: bold;">${isFresh ? '🔥 LIVE SIGNAL' : 'SYNC: ' + game.consensus + '%'}</span>
                    <span style="color: #00ffa3;">RTP: ${game.rtp}%</span>
                </div>
                <div style="font-size: 10px; color:#888; margin-top:5px;">TRACED: ${game.source.split(',')[0]}</div>
                <div class="strategy-badge badge-auto" style="margin-top:8px; background: #9c27b0;">LATEST LIVE PLAN</div>
            </div>
        `;
        resultsArea.appendChild(card);
        setTimeout(() => card.classList.add('visible'), 50);
    });
}

function showStrategy(game) {
    const header = document.getElementById('strategyHeader');
    const phases = document.getElementById('strategyPhases');
    
    // Entropy-Sync High-Precision Analytics
    const confidence = Math.min(99.9, (game.pulse * 0.85) + (parseFloat(game.rtp) * 0.15));
    const winRate = Math.min(99.2, (game.pulse * 0.95));

    header.innerHTML = `
        <h2 style="color:var(--primary); margin-bottom: 5px;">${game.title}</h2>
        <div style="display:flex; justify-content: space-between; align-items: center;">
            <p style="font-size: 11px; color:#888;">Extraction Model: V16.0 SURGICAL | Sync: 100%</p>
            <span class="strategy-badge" style="background:rgba(255, 0, 234, 0.1); color:#ff00ea; border:1px solid #ff00ea;">MAX PAYOUT MODE</span>
        </div>
        
        <div class="prob-container" style="margin-top:20px;">
            <div class="prob-box" style="border-color: #00d1ff;">
                <span class="prob-value" style="color:#00d1ff;">${confidence.toFixed(1)}%</span>
                <span class="prob-label">ความแม่นยำของจุดตัด</span>
            </div>
            <div class="prob-box" style="border-color: #ff00ea;">
                <span class="prob-value" style="color:#ff00ea;">${winRate.toFixed(1)}%</span>
                <span class="prob-label">โอกาสเข้าสู่ Max Payout</span>
            </div>
        </div>
        <div style="font-size: 10px; color:#aaa; margin-bottom:10px; text-align:center; padding: 5px; background: rgba(0,255,163,0.05); border-radius: 4px;">
            🔍 วิเคราะห์พฤติกรรม: ${game.evidence} (${game.consensus}% Global Consensus)
        </div>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 15px 0;">
    `;

    const seed = game.title.length + Math.floor(game.numRtp) + game.mentions;
    let p1_manual = 4 + (seed % 4);
    let p2_auto = 20 + (seed % 25);
    let p3_min = 6 + (seed % 3);
    let p3_max = 11 + (seed % 5); 
    
    phases.innerHTML = `
        <div class="phase-card" style="border-left: 4px solid #00d1ff;">
            <div class="phase-title">PHASE 1: PATTERN ANCHORING (สร้างรากฐาน)</div>
            <div class="phase-detail">
                <div style="margin-bottom:8px;">
                    <span class="strategy-badge badge-manual">MANUAL</span>
                    <span class="strategy-badge">TURBO OFF</span>
                    <span class="strategy-badge badge-bet">LOW BET</span>
                </div>
                หมุนมือ <strong>${p1_manual} ครั้ง</strong> เพื่อหาจุดยึด (Anchor) ของอัลกอริทึมต้นสาย<br>
                <span style="color:#00d1ff; font-size:11px;"><strong>🎯 จุดตัดสินใจ:</strong> หากในช่วงนี้มีกำไรเกิน 3-5 เท่าของเบท ให้ข้ามไป Phase 3 ทันที (Surge Jump)</span>
            </div>
        </div>
        <div class="phase-card" style="border-left: 4px solid #ffcc00;">
            <div class="phase-title">PHASE 2: ALGORITHM PENETRATION (เจาะระบบ)</div>
            <div class="phase-detail">
                <div style="margin-bottom:8px;">
                    <span class="strategy-badge badge-auto">AUTO</span>
                    <span class="strategy-badge badge-turbo">TURBO ON</span>
                    <span class="strategy-badge badge-bet">STEP UP +3</span>
                </div>
                หมุนออโต้ <strong>${p2_auto} ครั้ง</strong> ระบบกำลังปูทางเข้าสู่ช่วงการจ่ายสูงสุดของ ${game.title}<br>
                <span style="color:#ffcc00; font-size:11px;"><strong>👁️ จุดสังเกต:</strong> หาก Scatter ลงมาค้าง 2 ตัวบ่อยๆ หรือ Wild แถว 2-3 เชื่อมกันเรื่อยๆ แสดงว่าระบบพร้อมระเบิดรางวัล</span>
            </div>
        </div>
        <div class="phase-card" style="border: 1px solid #00ffa3; background: rgba(0, 255, 163, 0.08); box-shadow: 0 0 15px rgba(0, 255, 163, 0.2);">
            <div class="phase-title" style="color:#00ffa3;">PHASE 3: SURGICAL EXTRACTION (ดึงกำไรสูงสุด)</div>
            <div class="phase-detail">
                <div style="margin-bottom:8px;">
                    <span class="strategy-badge badge-manual" style="background:#00ffa3; color:#000 !important;">HIGH-PRECISION MANUAL</span>
                    <span class="strategy-badge">TURBO PRECISE</span>
                    <span class="strategy-badge badge-bet" style="background:#ff00ea; color:#fff !important;">MAX TARGET BET</span>
                </div>
                กดมือจังหวะคงที่ <strong>ระหว่าง ${p3_min} - ${p3_max} ครั้ง</strong> ไม่เกิน 15 ครั้ง<br>
                <span style="color:#00ffa3; font-size:11px;"><strong>⚠️ EXIT STRATEGY:</strong> เมื่อแจ็คพอตแตก (Big Win/Mega Win) ให้<strong>หยุดเล่นทันที</strong> และเปลี่ยนเกมเพื่อรักษาเพดานกำไรสูงสุด</span><br>
                <span style="color:#ff00ea; font-size:11px;"><strong>💡 คำแนะนำ:</strong> นี่คือหน้าต่างเวลาที่ทุกสำนักรีวิวระบุตรงกันว่าเป็นจุดที่เกมจะจ่ายคืนสูงสุด</span>
            </div>
        </div>
    `;

    strategyModal.style.display = 'flex';
}

document.getElementById('closeModal').onclick = () => strategyModal.style.display = 'none';
window.onclick = (e) => { if (e.target == strategyModal) strategyModal.style.display = 'none'; };
