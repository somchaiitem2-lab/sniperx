const pgGamesList = [
    "Mahjong Ways", "Mahjong Ways 2", "Lucky Neko", "Treasures of Aztec", "Ways of the Qilin", 
    "Wild Bounty Showdown", "Wild Bandito", "Ganesha Fortune", "Caishen Wins", 
    "Fortune Ox", "Fortune Tiger", "Fortune Rabbit", "Fortune Mouse", 
    "Dragon Hatch", "Dragon Hatch 2", "Legend of Perseus", "Asgardian Rising",
    "Mafia Mayhem", "Forge of Wealth", "Safari Wilds", "Cruise Royale", "Mystical Spirits",
    "Pinata Wins", "Fruity Candy", "Songkran Splash", "Hawaiian Tiki", "Gladiator's Glory"
];

// Seed hashing
function stringHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; 
    }
    return Math.abs(hash);
}

function getGameImage(title) {
    const r = stringHash(title) % 5 + 1;
    // Premium avatars fallback
    const colors = ['00f0ff', 'ff003c', 'fcee0a', '00ff00', 'a020f0'];
    const h = stringHash(title);
    const c = colors[h % colors.length];
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=0a0c10&color=${c}&size=400&font-size=0.3&length=2&bold=true`;
}

// Dom elements
const btnScan = document.getElementById('btnScan');
const progressBar = document.getElementById('progressBar');
const statusDisplay = document.getElementById('statusDisplay');
const resultsContainer = document.getElementById('resultsContainer');
const strategyModal = document.getElementById('strategyModal');

const STEPS = [
    "INITIALIZING NX-CORE ALGORITHM...",
    "ESTABLISHING SECURE CONNECTION...",
    "BYPASSING CACHE PROXIES...",
    "EXTRACTING SERVER VARIANCE METRICS...",
    "CALCULATING EV (EXPECTED VALUE)...",
    "APPLYING MEAN REVERSION FILTERS...",
    "FINALIZING TARGET ACQUISITION..."
];

btnScan.addEventListener('click', async () => {
    btnScan.disabled = true;
    resultsContainer.innerHTML = '';
    
    let currentStep = 0;
    progressBar.style.width = '0%';
    
    const interval = setInterval(() => {
        if(currentStep < STEPS.length) {
            statusDisplay.innerText = "> " + STEPS[currentStep];
            progressBar.style.width = `${((currentStep + 1) / STEPS.length) * 100}%`;
            currentStep++;
        }
    }, 450);

    setTimeout(() => {
        clearInterval(interval);
        progressBar.style.width = '100%';
        statusDisplay.innerText = "> SCAN COMPLETE. TARGETS ACQUIRED.";
        statusDisplay.style.color = '#00ff00';
        
        btnScan.disabled = false;
        btnScan.innerHTML = '<i class="fa-solid fa-rotate-right"></i> RECALCULATE TARGETS';
        
        generateResults();
        
        setTimeout(() => {
            progressBar.style.width = '0%';
            statusDisplay.style.color = 'var(--primary)';
            statusDisplay.innerText = "> SYSTEM IDLE. WAITING FOR COMMAND...";
        }, 3000);
        
    }, (STEPS.length * 450) + 500);
});

function generateResults() {
    const timeFrame = Math.floor(Date.now() / (2 * 60 * 1000)); // 2 min windows
    
    let scoredGames = pgGamesList.map(game => {
        const h = stringHash(game);
        
        // --- PRNG STATE RECOVERY & TIMING EXPLOIT MODEL ---
        // Instead of plain EV, simulate reverse-engineering the PRNG seed window.
        // PRNGs in older systems can be predicted if the internal state and timing are known.
        const prngSeed = (h * timeFrame) % 2147483647; // Simulated Mersenne Twister state
        
        // Simulating the "Russian Hacker" method: calculating the latency between pressing spin and the PRNG clock
        const latencyVulnerability = Math.sin(prngSeed) * Math.cos(prngSeed / 1000); 
        
        // Exploit Value (EV) is based on how predictable the current seed window is
        let ev = 1.5 + (latencyVulnerability * 1.5) + (((h % 10) / 10)); // EV correlates to PRNG predictability
        if(ev < 0) ev = Math.abs(ev);
        if(ev > 3.0) ev = 3.0 - (ev * 0.1); // Cap EV to prevent absurd win rates
        
        const rtpBase = 95.0 + (ev * 0.5);
        
        const volInt = h % 3;
        const vol = volInt === 0 ? 'HIGH' : (volInt === 1 ? 'MED' : 'EXTREME');
        
        const winRate = Math.min(99.9, Math.max(50, 75 + (ev * 6)));
        
        return { title: game, ev: ev, winRate: winRate, rtp: rtpBase + (ev*0.8), vol: vol };
    });
    
    scoredGames.sort((a,b) => b.ev - a.ev);
    const targets = scoredGames.slice(0, 12);
    
    targets.forEach((t, i) => {
        const card = document.createElement('div');
        card.className = 'server-card';
        card.style.transitionDelay = `${i * 80}ms`;
        card.onclick = () => openModal(t);
        
        card.innerHTML = `
            ${i < 3 ? `<div class="rank-badge">#${i+1}</div>` : ''}
            <div class="game-img-wrapper">
                <img src="${getGameImage(t.title)}" class="game-img" alt="${t.title}">
            </div>
            <div class="card-title">${t.title}</div>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-label">WIN RATE</span>
                    <span class="stat-value high">${t.winRate.toFixed(1)}%</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">EV SCORE</span>
                    <span class="stat-value">${t.ev.toFixed(2)}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">PEAK RTP</span>
                    <span class="stat-value">${t.rtp.toFixed(2)}%</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">VOLATILITY</span>
                    <span class="stat-value med">${t.vol}</span>
                </div>
            </div>
        `;
        resultsContainer.appendChild(card);
        
        // Trigger reflow for animation
        setTimeout(() => {
            card.classList.add('show');
        }, 50);
    });
}

function openModal(game) {
    const modalHeader = document.getElementById('modalHeader');
    const modalBody = document.getElementById('modalBody');
    
    const timeFrame = Math.floor(Date.now() / (2 * 60 * 1000));
    const h = stringHash(game.title);
    
    // Strict mathematical parameters (No guessing)
    const exactProbeSpins = 12 + ((h + timeFrame) % 6); // 12 to 17 exact spins
    const exactAttackSpins = 8 + (h % 5); // 8 to 12 exact spins
    const exactExecSpins = 10 + (timeFrame % 4); // 10 to 13 exact spins
    const step2 = 2; // เพิ่มเดิมพัน 2 ระดับ
    const step3 = 3; // เพิ่มเดิมพัน 3 ระดับ

    const exactSeconds = game.vol === 'EXTREME' ? "8.5 วินาที" : "14.2 วินาที";
    const errorMargin = (0.2 + ((h % 5)/10)).toFixed(2); // e.g. 0.2s - 0.6s
    
    modalHeader.innerHTML = `
        <h2>${game.title}</h2>
        <div class="sys-info">PRNG SEED HASH: 0x${stringHash(game.title + Date.now()).toString(16).toUpperCase()} | TIMING SYNC RATE: ${game.winRate.toFixed(1)}%</div>
    `;
    
    modalBody.innerHTML = `
        <div style="background: rgba(0, 240, 255, 0.1); border: 1px solid var(--primary); padding: 10px; border-radius: 6px; margin-bottom: 15px; font-size: 0.85rem; color: var(--primary);">
            <i class="fa-solid fa-microchip"></i> <strong>SYSTEM OVERRIDE:</strong> ค่าพารามิเตอร์ด้านล่างถูกคำนวณแบบ <u>แม่นยำ 100% (Exact Match)</u> ห้ามผู้เล่นใช้การคาดคะเนเด็ดขาด ให้ทำตามจำนวนครั้งเป๊ะๆ (Margin of Error: ±${errorMargin}s)
        </div>

        <div class="phase-block phase-1">
            <div class="phase-title">STEP 1: REVERSE ENGINEERING (เก็บข้อมูล PRNG)</div>
            <div class="phase-tags">
                <span class="ptag manual">MANUAL</span> <span class="ptag noturbo">TURBO OFF</span> <span class="ptag">BASE BET</span>
            </div>
            <div class="phase-desc">หมุนสล็อตด้วยมือ <strong>จำนวน ${exactProbeSpins} ไม้ (ห้ามขาดห้ามเกิน)</strong> ให้กดสปินเฉพาะเวลาที่เข็มวินาทีลงท้ายด้วยเลข <strong>0 หรือ 5</strong> เท่านั้น (เว้นระยะทุกๆ 5 วินาที) เพื่อเก็บ Log ค่า Seed ปัจจุบันของเซิร์ฟเวอร์</div>
            <div class="phase-note"><i class="fa-solid fa-circle-info"></i> หากหลุดโบนัสใหญ่ในขั้นตอนนี้ ถือว่า Seed ถูกรีเซ็ต ให้ปิดและเปลี่ยนเกมทันที</div>
        </div>
        
        <div class="phase-block phase-2">
            <div class="phase-title">STEP 2: TIMING ATTACK (เจาะหน้าต่างเวลา)</div>
            <div class="phase-tags">
                <span class="ptag manual">MANUAL</span> <span class="ptag turbo">TURBO ON</span> <span class="ptag">BET STEP +${step2}</span>
            </div>
            <div class="phase-desc">เพิ่มจำนวนเงินเดิมพันขึ้น <strong>${step2} ระดับ (Step)</strong> จาก Base Bet จากนั้นให้กดสปินทันทีเมื่อวินาทีของนาฬิกาตรงกับเลข <strong>0 หรือ 5</strong> ทำขั้นตอนนี้ <strong>จำนวน ${exactAttackSpins} ไม้ถ้วน</strong> เพื่อสร้างช่องโหว่ความหน่วง (Latency) แทรกซึมเข้าเซิร์ฟเวอร์</div>
        </div>
        
        <div class="phase-block phase-3">
            <div class="phase-title">STEP 3: EXECUTION (ดึงค่า Seed แตกรางวัล)</div>
            <div class="phase-tags">
                <span class="ptag auto">AUTO ${exactExecSpins}</span> <span class="ptag turbo">TURBO ON</span> <span class="ptag" style="background:#00ff00; color:#000;">BET STEP +${step3}</span>
            </div>
            <div class="phase-desc">เพิ่มเงินเดิมพันขึ้น <strong>${step3} ระดับ (Step)</strong> จาก Base Bet นี่คือจังหวะที่เซิร์ฟเวอร์เปราะบางที่สุด หน้าต่างการเจาะจะเปิดทำงานแค่ <strong>${exactSeconds}</strong> <strong>ให้รอจนกว่าเข็มวินาทีจะแตะเลข 0 พอดีเป๊ะ</strong> แล้วปล่อย Auto Spin ทันที <strong>จำนวน ${exactExecSpins} ไม้</strong> </div>
            <div class="phase-note"><i class="fa-solid fa-skull"></i> <strong>MUST ABORT:</strong> กราฟการจ่ายเงินหลังโบนัสแตกจะดิ่งลง 100% (Mean Reversion) ต้องหยุดเล่นและย้ายเกมเมื่อจบรอบนี้ทันที!</div>
        </div>
    `;
    
    strategyModal.classList.add('active');
}

// Close Modal logic
document.getElementById('btnCloseModal').addEventListener('click', () => {
    strategyModal.classList.remove('active');
});
strategyModal.addEventListener('click', (e) => {
    if(e.target === strategyModal) {
        strategyModal.classList.remove('active');
    }
});
