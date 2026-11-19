const view=document.getElementById('view');
const tabs=[...document.querySelectorAll('[data-tab]')];
let chat=[{who:'ai',text:'Yo! 10_KWZ interface is ready. 🔥 Dit is momenteel de lokale demo-chat. Koppel later een beveiligde AI-backend voor echte AI-antwoorden.'}];
function home(){view.innerHTML=`
<section class="hero"><div class="eyebrow">WELCOME TO YOUR WORKSPACE</div><h1>10_KWZ.<br>Built different. 🔥</h1><p>Jouw eigen command center. Zwart, rood en volledig in jouw stijl.</p><span class="pill">V9 • PWA EDITION</span></section>
<div class="section eyebrow">QUICK ACCESS</div>
<div class="grid">
<button class="card tile" data-go="chat"><span class="ico">◉</span><b>AI Chat</b><small>Chat-interface demo</small></button>
<button class="card tile" data-go="tools"><span class="ico">⌘</span><b>Code Lab</b><small>Developer workspace</small></button>
<button class="card tile" data-go="tools"><span class="ico">▧</span><b>Image Studio</b><small>Creative tools</small></button>
<button class="card tile" data-go="tools"><span class="ico">♧</span><b>Bestanden</b><small>Project modules</small></button>
<button class="card tile" data-go="tools"><span class="ico">♜</span><b>Crimson Shield</b><small>VPN setup status</small></button>
<button class="card tile" data-go="settings"><span class="ico">⚙</span><b>Instellingen</b><small>App voorkeuren</small></button>
</div>
<div class="panel"><div class="status"><h2>Systeemstatus</h2><span class="pill">DEMO</span></div><p>De interface draait. Online AI, accounts, cloudopslag en VPN zijn nog niet gekoppeld.</p></div>
<div class="section eyebrow">INSTALLATIE</div><div class="notice">Op iPhone: open deze website in Safari → tik op Deel → kies 'Zet op beginscherm'. Dan staat 10_KWZ als app-icoon op je beginscherm.</div>`}
function chatPage(){view.innerHTML=`<div class="eyebrow">10_KWZ / CONVERSATION</div><h1>AI Chat</h1><p>Jouw eigen chatruimte.</p><div class="chatlog" id="log"></div><form class="composer" id="form"><input id="msg" autocomplete="off" placeholder="Bericht naar 10_KWZ..."><button class="primary">➤</button></form><div class="notice">Demo-modus: berichten blijven in deze sessie. Voor echte AI-antwoorden moet een backend met API-sleutel worden gehost.</div>`;
const log=document.getElementById('log'); const draw=()=>{log.innerHTML=chat.map(m=>`<div class="bubble ${m.who}">${escapeHtml(m.text)}</div>`).join('');log.scrollTop=log.scrollHeight};draw();
document.getElementById('form').onsubmit=e=>{e.preventDefault();let input=document.getElementById('msg');let s=input.value.trim();if(!s)return;chat.push({who:'user',text:s});chat.push({who:'ai',text:'Bericht ontvangen! Dit is nog de demo-interface; een echte AI-reactie komt zodra de AI-backend is aangesloten. ⚡'});input.value='';draw()};
}
function tools(){view.innerHTML=`<div class="eyebrow">MODULES</div><h1>Tools</h1><p>De modules van jouw 10_KWZ-platform.</p><div class="grid">${[['⌘','Code Lab','Code editor volgt in volgende build'],['▧','Image Studio','Afbeeldingsmodule volgt'],['♧','Bestanden','Cloudopslag nog niet gekoppeld'],['◎','Explore','Webmodule volgt'],['♜','Crimson Shield','WireGuard-integratie nog niet actief'],['♟','Autopilot','Agent-workflows nog niet gekoppeld']].map(x=>`<div class="card tile"><span class="ico">${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join('')}</div>`}
function settings(){view.innerHTML=`<div class="eyebrow">PREFERENCES</div><h1>Instellingen</h1><div class="panel"><div class="row"><span>App-naam</span><b>10_KWZ</b></div><div class="row"><span>Versie</span><b>V9 PWA</b></div><div class="row"><span>Thema</span><b>Zwart / Crimson</b></div><div class="row"><span>VPN-regio voorkeur</span><b>Duitsland</b></div><div class="row"><span>VPN-protocol voorkeur</span><b>WireGuard</b></div><div class="row"><span>Kill switch voorkeur</span><b>Aan (nog niet actief)</b></div></div><div class="section eyebrow">BELANGRIJK</div><div class="notice">Een PWA kan geen iPhone-brede WireGuard-VPN activeren zoals een native VPN-app. Daarvoor is een echte iOS-app met Network Extension en een VPN-server nodig.</div><div class="section eyebrow">INSTALLEREN</div><div class="panel"><b>Op beginscherm zetten</b><p>Open de gehoste website in Safari, tik op Deel en kies 'Zet op beginscherm'.</p></div>`}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function go(t){tabs.forEach(b=>b.classList.toggle('active',b.dataset.tab===t));({home,chat:chatPage,tools,settings}[t]||home)()}
tabs.forEach(b=>b.addEventListener('click',()=>go(b.dataset.tab)));
document.addEventListener('click',e=>{let b=e.target.closest('[data-go]');if(b)go(b.dataset.go)});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
go('home');
