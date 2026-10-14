(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var nf=function(s){return s.normalize('NFC')};

/* ===== LA RACCOLTA =====
   I versi NON stanno in questo file: sono in versi.js, caricato prima di questo, che definisce la variabile globale DATA.
   Per aggiungere o correggere un verso si modifica solo versi.js. */
var BOOK={title:'Śloka Drill'};
/* VERSIONE DELL'APP: va aumentata a ogni file caricato sulla repo (il controllo aggiornamenti la confronta con quella online) */
var APP_VERSION='1.0';
var DATA=window.DATA||[];
if(!window.DATA)console.error('versi.js non è stato caricato: nessun verso disponibile.');

DATA.forEach(function(d){d.padas.forEach(function(p){p.iast=nf(p.iast)});d.lite=true});/* tutti i versi usano il design di Mādhurya-kādambinī 1 */

/* ---------- memoria locale: preferenze e stelle ---------- */
var PKEY='impara-versi-preferenze',SKEY='impara-versi-stelle';
function load(k){try{return JSON.parse(localStorage.getItem(k))||{}}catch(e){return {}}}
function put(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
var prefs=load(PKEY),stars=load(SKEY);
if(['auto','light','dark'].indexOf(prefs.theme)<0)prefs.theme='auto';
prefs.mode='trad';prefs.dev=false;
function saveAll(){put(PKEY,{theme:prefs.theme,last:prefs.last});put(SKEY,stars)}
var cur=-1,sel=null;

/* ---------- tema ---------- */
var root=document.documentElement,hostTheme=root.getAttribute('data-theme');
var GEAR='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>';
var ICON={
 auto:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"></circle><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"></path></svg>',
 light:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"></path></svg>',
 dark:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"></path></svg>'
};
function nightNow(){var h=new Date().getHours();return h>=20||h<7}
function applyTheme(){
  var mode=prefs.theme;
  if(mode==='auto'){
    var sys=false;try{sys=window.matchMedia('(prefers-color-scheme: dark)').matches}catch(e){}
    mode=(hostTheme==='dark'||sys||nightNow())?'dark':'light';
  }
  root.setAttribute('data-theme',mode);
  var b=$('#b-theme');b.innerHTML=GEAR;
  b.setAttribute('aria-label','Impostazioni');
  $$('[data-act="theme-set"]').forEach(function(x){x.setAttribute('aria-pressed',String(x.dataset.val===prefs.theme))});
}
setInterval(function(){if(prefs.theme==='auto')applyTheme()},300000);

/* ---------- pezzi di pagina ---------- */
var STAR='<svg class="vstar" viewBox="0 0 24 24" aria-label="Salvato"><path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 17.1 6.6 20l1.1-6.1L3.2 9.6l6.1-.8z"></path></svg>';
var CHEV='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg>';
var SHUF='<svg viewBox="0 0 24 24" aria-hidden="true" style="width:22px;height:22px;stroke-width:2;stroke-linecap:round"><path d="M20 11a8 8 0 0 0-14.3-4.6L3.5 9"></path><path d="M3.5 4v5h5"></path><path d="M4 13a8 8 0 0 0 14.3 4.6L20.5 15"></path><path d="M20.5 20v-5h-5"></path></svg>';
var EYE={
 open:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="2.8"></circle></svg>',
 shut:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="2.8"></circle><path d="M4 4l16 16"></path></svg>'
};
function eyeBtn(act,shown){return '<button type="button" class="star eye" data-act="'+act+'" aria-pressed="'+shown+'" aria-label="'+(shown?'Nascondi il verso':'Mostra il verso')+'">'+(shown?EYE.shut:EYE.open)+'</button>'}
function chip(act,label,on){return '<button type="button" class="chip" data-act="'+act+'" aria-pressed="'+(!!on)+'">'+label+'</button>'}
function seg(name,opts,c){return '<div class="seg" role="group">'+opts.map(function(o){return '<button type="button" data-act="seg" data-name="'+name+'" data-val="'+esc(o[0])+'" aria-pressed="'+(String(o[0])===String(c))+'">'+esc(o[1])+'</button>'}).join('')+'</div>'}
function partsHtml(w){return w.parts?'<ul class="wp">'+w.parts.map(function(p){return '<li><i>'+esc(p[0])+'</i> '+esc(p[1])+'</li>'}).join('')+'</ul>':''}
function wordHtml(w){return '<div class="wcard"><div class="wk">'+esc(w.k)+'</div><div class="wm">'+esc(w.mean)+'</div><div class="wi">'+esc(w.info)+'</div>'+partsHtml(w)+'</div>'}
function sutHtml(d,n){
  var s=d.sutra[n];
  return '<div class="sut"><div class="sut-n">SŪTRA '+n+'</div><div class="sut-t">'+esc(s.txt)+'</div><div>'+esc(s.tr)+'</div>'+(s.note?'<div class="sut-x">'+esc(s.note)+'</div>':'')+'<div class="sut-x">'+esc(s.ex)+'</div></div>';
}
function sandhiVerse(d,pi){
  var groups=[];
  d.seg[pi].forEach(function(x){
    var last=groups[groups.length-1];
    if(x.s&&last&&last.s){last.t+=x.t;x.s.forEach(function(n){if(last.s.indexOf(n)<0)last.s.push(n)})}
    else groups.push({t:x.t,s:x.s?x.s.slice():null});
  });
  return groups.map(function(g){return g.s?'<button type="button" class="sg" data-act="sg" data-s="'+g.s[0]+'">'+esc(g.t)+'<sup>'+g.s.join('·')+'</sup></button>':esc(g.t)}).join('');
}
function sandhiHtml(d){
  return '<div class="card">'+d.sandhi.map(function(x,i){
    var n=i+1;
    return '<div class="sandhi-card" id="sd-card-'+n+'"><button type="button" class="sh" data-act="sd-tog" data-t="sd-b-'+n+'" aria-expanded="false"><span class="nb">'+n+'</span><span class="eq">'+esc(x.r)+'</span><svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg></button>'+
     '<div id="sd-b-'+n+'" hidden><p class="eq" style="margin:10px 0 0">'+esc(x.a)+' + '+esc(x.b)+' → '+esc(x.r)+'</p>'+(x.note?'<div class="sut-x" style="margin-top:4px">'+esc(x.note)+'</div>':'')+x.sut.map(function(s){return sutHtml(d,s)}).join('')+'</div></div>';
  }).join('')+'<p class="hint" style="margin-top:12px">Ho segnato i sandhi principali; non è un elenco completo. I sūtra sono quelli del PDF del progetto; il fatto che si applichino a questo verso è una mia lettura.</p></div>';
}
function metricaHtml(d){
  var m=d.metrica,G='<span class="gen">[mia conoscenza generale, da verificare]</span>';
  var sc=m.scan.map(function(s,i){
    var out='',k;
    for(k=0;k<s.length;k++){
      if(k%3===0)out+=(k?'</span>':'')+'<span class="g">';
      out+=s[k]==='G'?'—':'∪';
      if(m.yatiAt?k===m.yatiAt-1:(s.length>12&&k===11))out+='</span><span class="yt">|</span><span class="g">';
    }
    out+='</span>';
    return '<div class="scan"><div class="it">'+(i+1)+'. '+esc(d.padas[i].iast)+'</div><div class="ln" aria-label="Scansione laghu e guru">'+out+'</div></div>';
  }).join('');
  return '<div class="card met"><dl><dt>Nome</dt><dd>'+esc(m.name)+' '+G+'</dd>'+
   '<dt>Sillabe per pāda</dt><dd>'+m.syl+' ('+esc(m.sylNote||'contate da me sul testo: 4 × 19 = 76')+')</dd>'+
   '<dt>Gaṇa</dt><dd>'+esc(m.gana)+' '+G+'</dd>'+
   '<dt>Pausa (yati)</dt><dd>'+esc(m.yati)+(m.yatiNote?'. '+esc(m.yatiNote)+' ':': in tutti e quattro i pāda cade a fine parola (vitateḥ, damanī, sarasī, mahā) ')+G+'</dd>'+
   '<dt>Verso che definisce il metro (lakṣaṇa)</dt><dd><i>'+esc(m.lakshana)+'</i><br><span class="gen">Citato a memoria, non ho trovato una fonte che lo confermi: non ho dati affidabili su questo.</span></dd></dl></div>'+
   '<div class="card"><p class="eyebrow">Scansione · — guru · ∪ laghu · | pausa</p>'+sc+'<p class="scan nt" style="border-top:1px solid var(--hair);padding-top:10px;margin-top:12px">'+esc(m.note)+' La scansione è calcolata da me sul testo.</p></div>';
}
function contextHtml(d){
  return '<details class="ctx"><summary>Contesto</summary>'+d.context.map(function(c){
    return '<p><span class="tag '+(c.v?'ok':'no')+'">'+(c.v?'dal libro':'creato da me, non verificato')+'</span>'+esc(c.t)+'</p>';
  }).join('')+'</details>';
}
function fitVerse(){
  $$('.fitbox').forEach(function(box){
    var lines=$$('.fitline',box),max=Number(box.dataset.max),avail=box.clientWidth;
    if(!lines.length||!avail)return;
    var f=max,mn=(box.dataset.min?Number(box.dataset.min):10);
    lines.forEach(function(l){l.style.whiteSpace=''});
    for(var k=0;k<6;k++){
      lines.forEach(function(l){l.style.fontSize=f+'px'});
      var w=Math.max.apply(null,lines.map(function(l){return l.scrollWidth}));
      if(w<=avail||f<=mn)break;
      f=Math.max(mn,Math.floor(f*avail/w*100)/100-0.2);
    }
    if(mn>10&&f<=mn)lines.forEach(function(l){l.style.whiteSpace='normal'});
  });
}
window.addEventListener('resize',fitVerse);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitVerse);

/* ---------- pagina del verso ---------- */
function hasSandhi(d){return !!(d.sandhi&&d.sandhi.length&&d.seg)}
function modesOf(d){return ['trad','wbw'].concat(hasSandhi(d)?['gram']:[]).concat(d.metrica?['metr']:[])}
function renderVerso(){
  var d=DATA[cur],m=prefs.mode;
  var dev=d.padas.map(function(p){return '<div class="dev fitline">'+p.dev+'</div>'}).join('');
  var ia=d.padas.map(function(p,i){
    var t;
    if(m==='wbw')t=d.surf[i].map(function(s,j){var on=sel&&sel[0]===i&&sel[1]===j;return '<button type="button" class="w" data-act="word" data-p="'+i+'" data-j="'+j+'" aria-pressed="'+(!!on)+'">'+esc(s.t)+'</button>'}).join(' ');
    else if(m==='gram')t=sandhiVerse(d,i);
    else t=esc(p.iast);
    return '<div class="iast fitline">'+t+'</div>';
  }).join('');
  var det='<p class="hint">Tocca una parola del verso per vederne il significato e l’analisi.</p>';
  if(sel)det=d.surf[sel[0]][sel[1]].e.map(function(e){return wordHtml(d.words[e])}).join('');
  var extra='';
  if(m==='wbw')extra='<div class="card" aria-live="polite">'+det+'</div><p class="hint">Il libro non ha il parola per parola: questa analisi è mia, da verificare.</p>';
  else if(m==='gram')extra=sandhiHtml(d);
  else if(m==='metr')extra=metricaHtml(d);
  $('#p-verso').innerHTML=
   '<div class="prefs four" role="group" aria-label="Cosa mostrare" style="grid-template-columns:repeat('+modesOf(d).length+',minmax(0,1fr))">'+chip('pref-trad','Traduzione',m==='trad')+chip('pref-wbw','Parola per parola',m==='wbw')+(hasSandhi(d)?chip('pref-gram','Sandhi',m==='gram'):'')+(d.metrica?chip('pref-metr','Metrica',m==='metr'):'')+'</div>'+
   '<div class="card vcard roman">'+(prefs.dev?'<div class="fitbox" data-max="'+((d.lite&&prefs.vs)?prefs.vs+1:22)+'"'+((d.lite&&prefs.vs)?' data-min="'+(prefs.vs+1)+'"':'')+'>'+dev+'</div><div class="rule"></div>':'')+'<div class="fitbox" data-max="'+((d.lite&&prefs.vs)?prefs.vs:21)+'" data-min="'+((d.lite&&prefs.vs)?prefs.vs:16.5)+'">'+ia+'</div>'+
   (m==='trad'?'<div class="rule"></div><p class="trad">'+esc(d.translation)+'</p>':'')+'</div>'+
   extra+
   '<div class="card">'+contextHtml(d)+(d.note?'<details><summary>Nota sul testo</summary><p>'+esc(d.note)+'</p></details>':'')+
   '<details><summary>Fonti</summary><ul class="src">'+(d.translationSrc?['Traduzione: '+d.translationSrc]:[]).concat(d.sources).map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul></details></div>';
  fitVerse();
}
function applyPrefs(){
  var d=DATA[cur];
  $('#b-learned').setAttribute('aria-pressed',String(!!(d&&stars[d.id])));
  $('#b-dev').setAttribute('aria-pressed',String(!!prefs.dev));var ad=$('#aa-dev');ad.setAttribute('aria-pressed',String(!!prefs.dev));ad.textContent=prefs.dev?'Nascondi la devanāgarī':'Mostra la devanāgarī';$('#aa-val').textContent=prefs.vs?prefs.vs+' px':'Auto';
}
function openVerse(i){
  cur=i;sel=null;prefs.mode='trad';prefs.dev=false;$('#aa-pop').hidden=true;$('#b-aa').setAttribute('aria-expanded','false');
  var d=DATA[i];
  if(d.lite){$('#h-title').textContent=srcOf(d)||d.label;$('#h-sub').textContent=d.sub}else{$('#h-title').textContent=titleOf(d);$('#h-sub').textContent=(srcOf(d)?srcOf(d)+' · ':'')+d.sub}
  document.title=titleOf(d).replace(/,/g,'');
  prefs.last=d.id;saveAll();
  bindVerse(i);view('verse');document.body.classList.toggle('lite',!!d.lite);dockBar(!!d.lite);applyPrefs();buildTabs();
  memReset();wrReset();
  sd.q=null;sd.pick=null;sd.order=[];sd.oi=0;pw.i=0;pw.flip=false;pw.order=WORDS.map(function(_,k){return k});rp.shown=false;qz=null;
  main='verso';curSub=null;renderAll();show();
}

/* ---------- home ---------- */
/* ordine alfabetico dell'inizio del verso, senza contare diacritici, trattini e apostrofi (ā = a, ś = s...) */
function sortKey(d){return d.padas[0].iast.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'')}
/* il campo src di ogni verso (in versi.js) dice da dove viene; se manca, si usa label */
function srcOf(d){return typeof d.src==='string'?d.src:d.label}
function titleOf(d){return d.padas[0].iast}
function order(){
  return DATA.map(function(_,i){return i}).sort(function(a,b){
    var x=sortKey(DATA[a]),y=sortKey(DATA[b]);
    return x<y?-1:x>y?1:a-b;
  });
}
function letterOf(d){var c=sortKey(d).charAt(0).toUpperCase();return c||'#'}
var RAILMIN=6;
function renderHome(){
  var list=order(),cont='';
  var li=-1;DATA.forEach(function(d,k){if(d.id===prefs.last)li=k});
  if(li>=0){
    var ld=DATA[li],w3=titleOf(ld).split(/\s+/).slice(0,3).join(' ');
    cont='<button type="button" class="cont" data-act="open" data-i="'+li+'" aria-label="Continua dal verso '+esc(w3)+'"><span class="cont-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"></path></svg></span><span class="cont-k">Continua</span><span class="cont-v">'+esc(w3)+' …</span></button>';
  }
  var rail=list.length>=RAILMIN,seen={},letters=[],last='';
  var tiles=list.length?list.map(function(k){
    var d=DATA[k],L=letterOf(d),idv='';
    if(rail&&L!==last){last=L;seen[L]=1;letters.push(L);idv=' id="L-'+L+'"'}
    return '<button type="button" class="card vtile"'+idv+' data-act="open" data-i="'+k+'"><span class="vt"><span class="vi">'+esc(titleOf(d))+'</span>'+(srcOf(d)?'<span class="vd">'+esc(srcOf(d))+'</span>':'')+'</span>'+(stars[d.id]?STAR:'')+'</button>';
  }).join(''):'<p class="empty">Nessun verso ancora. Scrivimi in chat il verso da studiare.</p>';
  var all='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');if(seen['#'])all.push('#');
  var railHtml=rail?'<div id="rail" role="group" aria-label="Indice alfabetico">'+all.map(function(L){return '<button type="button" class="'+(seen[L]?'on':'off')+'" data-l="'+L+'" tabindex="-1" aria-label="Vai alla lettera '+L+'">'+L+'</button>'}).join('')+'</div><div id="rbub" hidden></div>':'';
  $('#home').classList.toggle('hasrail',rail);
  $('#home').innerHTML='<header class="hh"><h1>Versi</h1>'+(DATA.length?'<p class="sub">'+DATA.length+(DATA.length===1?' verso':' versi')+' nella tua raccolta</p>':'')+'</header>'+cont+
   '<div class="vlist">'+tiles+'</div>'+railHtml;
  if(rail)bindRail(letters);
}
/* indice alfabetico a destra: tocca o scorri col pollice per saltare alla lettera */
function bindRail(letters){
  var rl=$('#rail'),bub=$('#rbub'),act=false,lastL='';
  function pick(y){
    var r=rl.getBoundingClientRect(),bs=$$('#rail button'),n=bs.length;
    var i=Math.max(0,Math.min(n-1,Math.floor((y-r.top)/r.height*n)));
    var j=i;while(j<n&&!bs[j].classList.contains('on'))j++;
    if(j>=n){j=i;while(j>=0&&!bs[j].classList.contains('on'))j--}
    if(j<0)return;
    var L=bs[j].dataset.l;
    bub.textContent=L;bub.hidden=false;
    $$('#rail button').forEach(function(x){x.classList.toggle('cur',x===bs[j])});
    if(L===lastL)return;lastL=L;
    var el=document.getElementById('L-'+L);
    if(el)window.scrollTo(0,el.getBoundingClientRect().top+window.pageYOffset-(parseFloat(getComputedStyle(el).scrollMarginTop)||0));
  }
  function end(){act=false;lastL='';bub.hidden=true;$$('#rail button').forEach(function(x){x.classList.remove('cur')})}
  rl.addEventListener('pointerdown',function(e){act=true;try{rl.setPointerCapture(e.pointerId)}catch(x){}pick(e.clientY);e.preventDefault()});
  rl.addEventListener('pointermove',function(e){if(act){pick(e.clientY);e.preventDefault()}});
  rl.addEventListener('pointerup',end);rl.addEventListener('pointercancel',end);
}
function dockBar(on){
  var l=$('#vb-l'),r=$('#vb-r'),tp=$('.topbar'),h=$('#b-home'),st=$('#b-learned');
  if(on){l.appendChild(h);r.insertBefore(st,$('#b-aa'))}
  else{if(h.parentNode!==tp)tp.insertBefore(h,tp.firstChild);r.appendChild(st)}
}
/* tre sezioni fisse (Cerca, Versi, Ripasso) con la barra in basso; dentro un verso la barra sparisce e resta quella del verso */
var lastTab='home',ys={};
var TABS=[
 ['search','Cerca','<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="M16 16l4.5 4.5"></path></svg>'],
 ['home','Versi','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.5h11M9 12h11M9 17.5h11"></path><circle cx="4.6" cy="6.5" r=".6"></circle><circle cx="4.6" cy="12" r=".6"></circle><circle cx="4.6" cy="17.5" r=".6"></circle></svg>'],
 ['review','Ripasso','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.6L3.5 9"></path><path d="M3.5 4v5h5"></path><path d="M4 13a8 8 0 0 0 14.3 4.6L20.5 15"></path><path d="M20.5 20v-5h-5"></path></svg>']
];
var BACKLBL={search:'Cerca',home:'Versi',review:'Ripasso'};
function buildGnav(){
  $('#gtabs').innerHTML=TABS.map(function(t){return '<button type="button" class="gt" role="tab" data-act="tab" data-tab="'+t[0]+'" aria-label="'+t[1]+'" aria-selected="false">'+t[2]+'</button>'}).join('');
}
function view(name){
  $('#home').hidden=name!=='home';$('#search').hidden=name!=='search';$('#verseview').hidden=name!=='verse';$('#review').hidden=name!=='review';
  $('#b-home').hidden=name!=='verse';$('#gnav').hidden=name==='verse';
  document.body.classList.toggle('hasnav',name==='verse');document.body.classList.toggle('hl',name!=='verse');
  if(name==='verse'){$('#b-home-t').textContent=BACKLBL[lastTab]||'Versi'}
  else{
    lastTab=name;
    $$('#gtabs .gt').forEach(function(x){x.setAttribute('aria-selected',String(x.dataset.tab===name))});
    dockBar(false);var dk=$('#dock');if(dk)dk.hidden=true;document.body.classList.remove('hasdock','instudio','flat','lite');
  }
  try{window.scrollTo(0,0)}catch(e){}
  barsReset();
}
function goHome(){cur=-1;renderHome();view('home');document.title=BOOK.title}
function goTab(t){
  cur=-1;document.title=BOOK.title;
  if(t==='search')showSearch();else if(t==='review')goReview();else goHome();
}
/* dal verso si torna alla sezione da cui si è partiti, con la ricerca, i filtri e la posizione di scorrimento com'erano */
function goBack(){
  var t=lastTab,y=ys[t]||0;
  cur=-1;document.title=BOOK.title;
  if(t==='search')showSearch();else if(t==='review'){renderRv();view('review')}else goHome();
  if(y)setTimeout(function(){try{window.scrollTo(0,y)}catch(e){}},0);
}

/* ---------- Cerca: ignora maiuscole e segni diacritici (krsna trova kṛṣṇa), cerca in più campi ---------- */
var sr={q:'',src:'',met:'',star:''};
function fold(s){
  var t=nf(String(s)),p='',map=[],i,j,f;
  for(i=0;i<t.length;i++){
    f=t.charAt(i).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9ऀ-ॿ]/g,' ');
    for(j=0;j<f.length;j++){p+=f.charAt(j);map.push(i)}
  }
  return {t:t,p:p,map:map};
}
function qTokens(q){return fold(q).p.split(' ').filter(function(x){return x})}
function srcGroup(d){var s=srcOf(d);return s?s.replace(/\s+\d+(\.\d+)*$/,''):'Altri'}
function metGroup(d){
  if(!d.metrica||!d.metrica.name)return '';
  if(/non identificato/i.test(d.metrica.name))return 'Non identificato';
  return d.metrica.name.replace(/\s*\(.*$/,'');
}
/* campi in cui si cerca, in ordine di priorità: il primo che contiene la parola fornisce la riga sotto il titolo */
function fieldsOf(d){
  if(d._f)return d._f;
  var wr=(d.words||[]).map(function(w){return w.k+' · '+w.mean}).join(' | ');
  d._f=[
   {n:'Sanscrito',t:d.padas.map(function(p){return p.iast}).join(' / ')},
   {n:'Devanāgarī',t:d.padas.map(function(p){return p.dev}).join(' ')},
   {n:'Traduzione',t:d.translation||''},
   {n:'Fonte',t:[srcOf(d),d.label].filter(function(x,i,a){return x&&a.indexOf(x)===i}).join(' · ')},
   {n:'Metro',t:[metGroup(d),d.sub].filter(function(x){return x}).join(' · ')},
   {n:'Parola per parola',t:wr}
  ].map(function(f){f.f=fold(f.t);return f});
  d._f.all=d._f.map(function(f){return f.f.p}).join(' | ');
  return d._f;
}
/* evidenzia le parole cercate nel testo originale (con i suoi segni); da/finestra opzionale per l'estratto */
function hiText(text,toks,excerpt){
  var f=fold(text),t=f.t,r=[],k,pos,len,a,b,out='',cur0=0,i,lo=0,hi=t.length,pre='',post='';
  toks.forEach(function(tk){
    pos=f.p.indexOf(tk);
    while(pos>=0){a=f.map[pos];b=f.map[pos+tk.length-1]+1;r.push([a,b]);pos=f.p.indexOf(tk,pos+tk.length)}
  });
  r.sort(function(x,y){return x[0]-y[0]});
  var m=[];r.forEach(function(x){if(m.length&&x[0]<=m[m.length-1][1])m[m.length-1][1]=Math.max(m[m.length-1][1],x[1]);else m.push([x[0],x[1]])});
  if(excerpt&&m.length){
    lo=Math.max(0,m[0][0]-28);hi=Math.min(t.length,m[0][1]+70);
    if(lo>0){var sp=t.indexOf(' ',lo);if(sp>=0&&sp<m[0][0])lo=sp+1}
    pre=lo>0?'… ':'';post=hi<t.length?' …':'';
  }
  cur0=lo;
  for(i=0;i<m.length;i++){
    if(m[i][1]<=lo||m[i][0]>=hi)continue;
    a=Math.max(m[i][0],lo);b=Math.min(m[i][1],hi);
    out+=esc(t.slice(cur0,a))+'<mark>'+esc(t.slice(a,b))+'</mark>';cur0=b;
  }
  return pre+out+esc(t.slice(cur0,hi))+post;
}
function searchHits(){
  var toks=qTokens(sr.q),res=[];
  order().forEach(function(k){
    var d=DATA[k];
    if(sr.src&&srcGroup(d)!==sr.src)return;
    if(sr.met&&metGroup(d)!==sr.met)return;
    if(sr.star==='star'&&!stars[d.id])return;if(sr.star==='none'&&stars[d.id])return;
    var fl=fieldsOf(d),score=0,snip=null,titleHit=false;
    if(toks.length){
      if(!toks.every(function(tk){return fl.all.indexOf(tk)>=0}))return;
      var title=fold(d.padas[0].iast).p;
      titleHit=toks.some(function(tk){return title.indexOf(tk)>=0});
      score=toks.every(function(tk){return fl[0].f.p.indexOf(tk)>=0})?0:toks.some(function(tk){return fl[0].f.p.indexOf(tk)>=0})?1:2;
      if(!titleHit){
        for(var i=0;i<fl.length;i++){
          if(toks.some(function(tk){return fl[i].f.p.indexOf(tk)>=0})){snip={n:fl[i].n,h:hiText(fl[i].t,toks,true)};break}
        }
      }
    }
    res.push({k:k,score:score,snip:snip,toks:toks});
  });
  return res.map(function(x,i){x.o=i;return x}).sort(function(a,b){return a.score-b.score||a.o-b.o});
}
function countBy(fn){
  var c={};DATA.forEach(function(d){var v=fn(d);if(v)c[v]=(c[v]||0)+1});
  return Object.keys(c).map(function(k){return [k,c[k]]}).sort(function(a,b){return b[1]-a[1]||(a[0]<b[0]?-1:1)});
}
var DOWN='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>';
function fsel(g,label,all,items,cur,txt){
  return '<label class="fsel'+(cur?' on':'')+'"><span class="fv">'+esc(cur?(txt||cur):label)+'</span>'+DOWN+'<select data-sf="'+g+'" aria-label="'+label+'"><option value="">'+all+'</option>'+items.map(function(it){return '<option value="'+esc(it[0])+'"'+(it[0]===cur?' selected':'')+'>'+esc(it[2]||it[0])+' ('+it[1]+')</option>'}).join('')+'</select></label>';
}
function renderFilters(){
  var nStar=DATA.filter(function(d){return stars[d.id]}).length;
  var st=[['star',nStar,'Con la stella'],['none',DATA.length-nStar,'Senza stella']];
  $('#sfil').innerHTML=
   fsel('src','Fonte','Tutte le fonti',countBy(srcGroup),sr.src)+
   fsel('met','Metro','Tutti i metri',countBy(metGroup),sr.met)+
   fsel('star','Stato','Tutti',st,sr.star,sr.star==='star'?'Con la stella':'Senza stella');
}
function renderResults(){
  var toks=qTokens(sr.q),active=toks.length||sr.src||sr.met||sr.star,box=$('#sres');
  if(!box)return;
  if(!active){
    box.innerHTML='<p class="empty">Scrivi una parola, in sanscrito (anche senza segni: «krsna» trova «kṛṣṇa») o in italiano, oppure tocca un filtro per vedere i versi.</p>';
    return;
  }
  var hits=searchHits();
  var head='<div class="scount"><span>'+hits.length+(hits.length===1?' verso':' versi')+' su '+DATA.length+'</span>'+(toks.length||sr.src||sr.met||sr.star?'<button type="button" data-act="sreset">Azzera</button>':'')+'</div>';
  if(!hits.length){box.innerHTML=head+'<p class="empty">Nessun verso trovato. Prova con meno lettere o togli un filtro.</p>';return}
  box.innerHTML=head+'<div class="vlist">'+hits.map(function(h){
    var d=DATA[h.k];
    return '<button type="button" class="card vtile" data-act="open" data-i="'+h.k+'"><span class="vt"><span class="vi">'+(h.toks.length?hiText(titleOf(d),h.toks,false):esc(titleOf(d)))+'</span>'+(srcOf(d)?'<span class="vd">'+esc(srcOf(d))+'</span>':'')+(h.snip?'<span class="vs"><b>'+esc(h.snip.n)+'</b>'+h.snip.h+'</span>':'')+'</span>'+(stars[d.id]?STAR:'')+'</button>';
  }).join('')+'</div>';
}
var SICON='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="M16 16l4.5 4.5"></path></svg>';
var XICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>';
function renderSearch(){
  $('#search').innerHTML='<header class="hh"><h1>Cerca</h1></header>'+
   '<div class="sbar" role="search">'+SICON+'<input id="sq" type="search" inputmode="search" enterkeyhint="search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Cerca un verso o una parola" aria-label="Cerca nei versi" value="'+esc(sr.q)+'"><button type="button" class="sclear" id="sclear" data-act="sclear" aria-label="Cancella la ricerca"'+(sr.q?'':' hidden')+'>'+XICON+'</button></div>'+
   '<div id="sfil"></div><div id="sres"></div>';
  renderFilters();renderResults();
}
function showSearch(){renderSearch();view('search')}

/* ---------- ripasso generale: una scheda per verso, con solo la prima parola ---------- */
var rv={mode:'all',order:[],i:0,flip:false};
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function rvReset(){rv.order=order().filter(function(k){return rv.mode==='all'||stars[DATA[k].id]});rv.i=0;rv.flip=false}
function veiledVerse(d,shown){
  var first=nf(d.surf[0][0].t);
  return '<div class="fitbox roman" data-max="21">'+d.padas.map(function(p,pi){
    if(shown)return '<div class="iast fitline">'+esc(p.iast)+'</div>';
    if(pi===0)return '<div class="iast fitline">'+esc(first)+'<span class="veiled" aria-hidden="true">'+esc(p.iast.slice(first.length))+'</span></div>';
    return '<div class="iast fitline"><span class="veiled" aria-hidden="true">'+esc(p.iast)+'</span></div>';
  }).join('')+'</div>';
}
function goReview(){
  rv.mode=DATA.some(function(d){return stars[d.id]})?'star':'all';rvReset();renderRv();view('review');
}
function renderRv(){
  var nStar=DATA.filter(function(d){return stars[d.id]}).length,body;
  if(!rv.order.length){
    body='<div class="card"><p class="hint" style="color:var(--ink)">'+(DATA.length?'Non hai ancora salvato nessun verso con la stella.':'Non ci sono ancora versi da ripassare.')+'</p></div>';
  }else{
    var d=DATA[rv.order[rv.i]];
    body='<p class="count">'+(rv.i+1)+' / '+rv.order.length+'</p>'+
     '<div class="card rp" data-act="rv-flip">'+eyeBtn('rv-flip',rv.flip)+(srcOf(d)?'<div class="eyebrow" style="margin:0">'+esc(srcOf(d))+'</div>':'')+veiledVerse(d,rv.flip)+'</div>'+
     '<div class="pwnav"><button type="button" class="btn" data-act="rv-prev">Precedente</button><button type="button" class="star" data-act="rv-shuffle" aria-label="Mescola le schede">'+SHUF+'</button><button type="button" class="btn primary" data-act="rv-next">Prossima</button></div>'+
     '<div><button type="button" class="btn sm" data-act="open" data-i="'+rv.order[rv.i]+'">Apri il verso</button></div>';
  }
  $('#review').innerHTML='<header class="hh"><h1>Ripasso</h1><p class="sub">Scegli quali versi ripassare</p></header>'+
   '<div class="segwrap">'+seg('rv-mode',[['star','Con la stella ('+nStar+')'],['all','Tutti i versi ('+DATA.length+')']],rv.mode)+'</div>'+body;
  fitVerse();
}

/* ---------- studio: Memorizza, Scrivi, Parole, Sandhi, Quiz e Ripasso (stessa struttura dell'app del Dāmodarāṣṭakam) ---------- */
var PADAS=[],WORDS=[],SURF=[],SUTRA={},SANDHI=[],SEG=[];
function tokenize(s){return s.split(/([ \-])/).filter(function(x){return x!==''}).map(function(x){return {w:!/^[ \-]$/.test(x),t:nf(x)}})}
DATA.forEach(function(d){d.padas.forEach(function(p){p.tok=tokenize(p.iast)})});

/* progressi: quante volte il verso intero è stato scritto a memoria */
var PFKEY='impara-versi-progressi',perf=load(PFKEY);
function perfOf(){var id=DATA[cur].id,p=perf[id]=perf[id]||{verse:0};if(!p.lv)p.lv={1:0,2:0,3:p.verse||0};return p}
var KEYS=['ā','ī','ū','ṁ','ḥ','ś','ṣ','ṇ','ṭ','ḍ','ṛ','ṅ','ñ','ṝ'].map(nf);

/* ---------- confronto con correzione dei diacritici ---------- */
function strip(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'')}
function canon(s){return nf(s).toLowerCase().replace(/ṃ/g,'ṁ').replace(/[\s\-‐–—.,;:।॥0-9'’‘]/g,'')}
function align(u,c){
  var n=u.length,m=c.length,i,j,d=[];
  for(i=0;i<=n;i++){d.push(new Array(m+1).fill(0));d[i][0]=i}
  for(j=0;j<=m;j++)d[0][j]=j;
  for(i=1;i<=n;i++)for(j=1;j<=m;j++){
    d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(u[i-1]===c[j-1]?0:1));
  }
  var ops=[];i=n;j=m;
  while(i>0||j>0){
    if(i>0&&j>0&&d[i][j]===d[i-1][j-1]+(u[i-1]===c[j-1]?0:1)){
      ops.push(u[i-1]===c[j-1]?{t:'ok',u:u[i-1]}:{t:'sub',u:u[i-1],c:c[j-1]});i--;j--;
    }else if(i>0&&d[i][j]===d[i-1][j]+1){ops.push({t:'extra',u:u[i-1]});i--}
    else{ops.push({t:'miss',c:c[j-1]});j--}
  }
  return ops.reverse();
}
function compare(user,expected){
  var u=Array.from(canon(user)),c=Array.from(canon(expected));
  var ops=align(u,c),cnt={dia:0,let:0,extra:0,miss:0};
  ops.forEach(function(o){
    if(o.t==='sub'){o.k=(strip(o.u)===strip(o.c))?'dia':'let';cnt[o.k]++}
    else if(o.t==='extra')cnt.extra++;
    else if(o.t==='miss')cnt.miss++;
  });
  return {ok:u.join('')===c.join(''),ops:ops,cnt:cnt};
}
function renderDiff(ops){
  return ops.map(function(o){
    if(o.t==='ok')return esc(o.u);
    if(o.t==='sub')return '<span class="ch '+o.k+'">'+esc(o.u)+'<sup>'+esc(o.c)+'</sup></span>';
    if(o.t==='extra')return '<span class="ch extra">'+esc(o.u)+'</span>';
    return '<span class="ch miss">'+esc(o.c)+'</span>';
  }).join('');
}
function stCls(r,val){
  if(r.ok)return 'ok';
  if(!String(val).trim())return '';
  return (r.cnt.let||r.cnt.miss||r.cnt.extra)?'bad':'near';
}
function setSt(inp,r){inp.classList.remove('ok','bad','near');var c=stCls(r,inp.value);if(c)inp.classList.add(c)}
var STKEY='impara-versi-studio',stud=load(STKEY);
function saveStudio(){
  if(cur<0)return;var id=DATA[cur].id;
  stud[id]={sub:stud[id]&&stud[id].sub||null,m:[mem.scope,mem.level],w:[wr.scope,wr.level]};
  if(curSub)stud[id].sub=curSub;
  put(STKEY,stud);
}
function restoreStudio(i){
  var d=DATA[i],sv=stud[d.id]||{},n=d.padas.length;
  function ok(sc){return sc==='all'||(Number(sc)>=0&&Number(sc)<n)}
  mem.scope='all';mem.level=1;wr.scope='all';wr.level=1;
  if(sv.m){if(ok(sv.m[0]))mem.scope=String(sv.m[0]);if(sv.m[1]>=1&&sv.m[1]<=3)mem.level=Number(sv.m[1])}
  if(sv.w){if(ok(sv.w[0]))wr.scope=String(sv.w[0]);if(sv.w[1]>=1&&sv.w[1]<=3)wr.level=Number(sv.w[1])}
  lastSub=sv.sub||null;
}
var lastSub=null;
function pl(n,a,b){return n+' '+(n===1?a:b)}
function summary(c){
  var p=[];
  if(c.dia)p.push(pl(c.dia,'diacritico da sistemare','diacritici da sistemare'));
  if(c.let)p.push(pl(c.let,'lettera sbagliata','lettere sbagliate'));
  if(c.miss)p.push(pl(c.miss,'lettera mancante','lettere mancanti'));
  if(c.extra)p.push(pl(c.extra,'lettera in più','lettere in più'));
  return p.join(' · ');
}
var LEGEND='<p class="legend">Evidenziato: diacritico da sistemare (in alto, quello giusto) · rosso: lettera sbagliata · tratteggio: lettera mancante · barrato: lettera in più. Spazi e trattini non contano.</p>';
function kbHtml(){
  return '<div class="kb" role="group" aria-label="Tastiera dei diacritici">'+KEYS.map(function(k){
    return '<button type="button" class="key" data-act="key" data-ch="'+k+'" aria-label="inserisci '+k+'">'+k+'</button>';
  }).join('')+'</div>';
}
function glossOf(pi){
  var seen=[],out=[];
  (SURF[pi]||[]).forEach(function(s){s.e.forEach(function(e){if(seen.indexOf(e)<0){seen.push(e);out.push(WORDS[e].mean)}})});
  return out.join(' · ');
}
function devLine(pi){return prefs.dev&&PADAS[pi].dev?'<div class="dev">'+PADAS[pi].dev+'</div>':''}
function sutH(n){return sutHtml(DATA[cur],n)}

/* ---------- sezioni: Verso, Studio (gli esercizi), Ripasso ---------- */
var MAINS=[['verso','Verso'],['studio','Studio'],['ripasso','Ripasso']];
var ALLSUBS=[['memorizza','Memorizza','Il verso con parole nascoste, da recitare ad alta voce.'],['scrivi','Scrivi','Completa le parole mancanti o scrivi il verso a memoria.'],['parole','Parole','Schede con il significato e l\'analisi di ogni parola.'],['grammatica','Sandhi','Esercizio sui sandhi e sui loro sūtra.'],['quiz','Quiz','Domande a scelta multipla sulle parole e sui pāda del verso.']];
var SUBS=ALLSUBS;
var main='verso',lastField=null,curSub=null;
var TILEIC={
 memorizza:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5z"></path></svg>',
 scrivi:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z"></path><path d="M14.5 6.5l3 3"></path></svg>',
 parole:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="2.5"></rect><path d="M7.5 4h9"></path></svg>',
 grammatica:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h4a4 4 0 0 1 4 4 4 4 0 0 0 4 4h3M4 18h4a4 4 0 0 0 4-4"></path><path d="M16 11l3 3-3 3"></path></svg>',
 quiz:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"></path></svg>'
};
function tileMeta(id){
  if(id==='memorizza')return PADAS.length+' pāda';
  if(id==='scrivi'){var n=perfOf().verse;return n+(n===1?' volta':' volte')}
  if(id==='parole')return WORDS.length+' parole';
  if(id==='grammatica')return SANDHI.length+' sandhi';
  if(id==='quiz'){var qs=qst[DATA[cur].id];return qs&&qs.n?qPct(qs.r,qs.t)+'%':''}
  return '';
}
function buildTabs(){
  SUBS=ALLSUBS.filter(function(t){return (t[0]!=='grammatica'||SANDHI.length)&&(t[0]!=='parole'||WORDS.length)});
  $('#tabs').innerHTML=MAINS.map(function(t){
    return '<button type="button" class="tab" role="tab" id="m-'+t[0]+'" data-act="main" data-id="'+t[0]+'" aria-selected="false">'+t[1]+'</button>';
  }).join('');
  $('#subtabs').classList.toggle('five',SUBS.length>=5);
  $('#subtabs').innerHTML=SUBS.map(function(t){
    return '<button type="button" class="tab" role="tab" id="t-'+t[0]+'" data-act="sub" data-id="'+t[0]+'" aria-selected="false" aria-controls="p-'+t[0]+'">'+t[1]+'</button>';
  }).join('');
  $('#p-studio').innerHTML=SUBS.map(function(t){
    if(DATA[cur]&&DATA[cur].lite)return '<button type="button" class="card tile'+(t[0]===lastSub?' last':'')+'" data-act="sub" data-id="'+t[0]+'"><span class="tile-ic">'+TILEIC[t[0]]+'</span><span><span class="tile-t">'+t[1]+'</span><span class="tile-d">'+esc(t[2])+'</span></span><span class="tile-m">'+tileMeta(t[0])+'</span>'+
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg></button>';
    return '<button type="button" class="card tile'+(t[0]===lastSub?' last':'')+'" data-act="sub" data-id="'+t[0]+'"><span><span class="tile-t">'+t[1]+'</span><span class="tile-d">'+esc(t[2])+'</span></span>'+
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg></button>';
  }).join('');
}
function show(){
  if(!MAINS.some(function(t){return t[0]===main}))main='verso';
  var m=main,st=m==='studio';
  MAINS.forEach(function(t){$('#m-'+t[0]).setAttribute('aria-selected',String(t[0]===m))});
  $('#p-verso').hidden=m!=='verso';$('#p-ripasso').hidden=m!=='ripasso';
  $('#p-studio').hidden=!(st&&!curSub);$('#subnav').hidden=!(st&&curSub);
  SUBS.forEach(function(t){
    $('#p-'+t[0]).hidden=!(st&&t[0]===curSub);
    $('#t-'+t[0]).setAttribute('aria-selected',String(t[0]===curSub));
  });
  $$('section.panel').forEach(function(el){el.classList.remove('enter');if(!el.hidden){void el.offsetWidth;el.classList.add('enter')}});
  document.body.classList.toggle('instudio',st&&!!curSub);
  saveAll();lastField=null;updateDock();fitVerse();
  var tb=curSub&&$('#t-'+curSub);
  if(st&&tb&&tb.scrollIntoView){try{tb.scrollIntoView({inline:'center',block:'nearest'})}catch(e){}}
}
/* livelli: uno, due o tre puntini */
function diffSeg(name,cur){
  return '<div class="seg diff" role="group" aria-label="Difficoltà">'+[[1,'Facile'],[2,'Medio'],[3,'Difficile']].map(function(o){
    return '<button type="button" data-act="seg" data-name="'+name+'" data-val="'+o[0]+'" aria-pressed="'+(o[0]===cur)+'"><span class="dots" aria-hidden="true">'+new Array(o[0]+1).join('<i></i>')+'</span>'+o[1]+'</button>';
  }).join('')+'</div>';
}
function scopeSeg(name,cur){
  return '<div class="seg scope" role="group" aria-label="Quale parte del verso" style="grid-template-columns:1.6fr repeat('+PADAS.length+',minmax(0,1fr))">'+[['all','Tutto']].concat(PADAS.map(function(_,i){return [String(i),String(i+1)]})).map(function(o){
    return '<button type="button" data-act="seg" data-name="'+name+'" data-val="'+o[0]+'" aria-pressed="'+(o[0]===String(cur))+'"'+(o[0]==='all'?'':' aria-label="Pāda '+o[1]+'"')+'>'+o[1]+'</button>';
  }).join('')+'</div>';
}
function pickRow(sn,sc,ln,lc,extra){
  var so=[['all','Tutto']].concat(PADAS.map(function(_,i){return [String(i),'Pāda '+(i+1)]})),lo=[[1,'Facile'],[2,'Medio'],[3,'Difficile']];
  function sel(n,opts,c,al){return '<select data-name="'+n+'" aria-label="'+al+'">'+opts.map(function(o){return '<option value="'+o[0]+'"'+(String(o[0])===String(c)?' selected':'')+'>'+o[1]+'</option>'}).join('')+'</select>'}
  return '<div class="pickrow"><div class="pick"><span class="pk-l">Parte</span>'+sel(sn,so,sc,'Parte del verso')+'</div><div class="pick"><span class="pk-l">Livello</span>'+sel(ln,lo,lc,'Difficoltà')+'</div>'+(extra||'')+'</div>';
}
function allPads(){return PADAS.map(function(_,i){return i})}
function padsOf(st){return st.scope==='all'?allPads():[Number(st.scope)]}
function unitsOf(pi){var u=[];PADAS[pi].tok.forEach(function(t,i){if(t.w)u.push(i)});return u}
function fullText(pads,noDev){
  return pads.map(function(pi){return '<div class="pada"><span class="pn">'+(pi+1)+'</span><div><div class="iast">'+esc(PADAS[pi].iast)+'</div>'+(noDev?'':devLine(pi))+'</div></div>'}).join('');
}
function eyeSm(act,on){return '<button type="button" class="eyesm" data-act="'+act+'" aria-pressed="'+!!on+'" aria-label="'+(on?'Nascondi il testo':'Mostra il testo')+'">'+(on?EYE.shut:EYE.open)+'</button>'}
function showLabel(on){return on?'Nascondi il testo':'Mostra il testo'}
/* traduzione sotto ogni pāda (significati del parola per parola) e traduzione intera in fondo; si accende e si spegne senza ridisegnare, così non si perde ciò che hai scritto */
var trShow=false;
var TRI='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10H10l-4.5 4v-4H4z"></path><path d="M8 9.5h8M8 12.5h5"></path></svg>';
function trBtn(){return '<button type="button" class="eyesm trbtn" data-act="tr-show" aria-pressed="'+trShow+'" aria-label="'+(trShow?'Nascondi la traduzione':'Mostra la traduzione')+'">'+TRI+'</button>'}
function trGloss(pi){var g=glossOf(pi);return g?'<div class="gloss trl"'+(trShow?'':' hidden')+'>'+esc(g)+'</div>':''}
function trFull(){var d=DATA[cur];return d&&d.translation?'<div class="card trl"'+(trShow?'':' hidden')+'><p class="eyebrow">Traduzione</p><p class="trad">'+esc(d.translation)+'</p></div>':''}
function trToggle(){
  trShow=!trShow;
  $$('.trl').forEach(function(el){el.hidden=!trShow});
  $$('.trbtn').forEach(function(b){b.setAttribute('aria-pressed',String(trShow));b.setAttribute('aria-label',trShow?'Nascondi la traduzione':'Mostra la traduzione')});
  fitVerse();
}

/* ---------- MEMORIZZA ---------- */
var mem={scope:'all',level:1,hidden:new Set(),hid0:new Set(),show:false,gloss:true};
function memReset(){
  mem.hidden=new Set();mem.show=false;
  padsOf(mem).forEach(function(pi){
    var units=unitsOf(pi),hide;
    if(mem.level===3)hide=units;
    else if(mem.level===2)hide=units.slice(1);
    else hide=shuffle(units.slice()).slice(0,Math.max(1,Math.round(units.length/2)));
    hide.forEach(function(ui){mem.hidden.add(pi+':'+ui)});
  });
  mem.hid0=new Set(mem.hidden);saveStudio();
}
function renderMem(){
  var rows=padsOf(mem).map(function(pi){
    var html=PADAS[pi].tok.map(function(t,i){
      if(!t.w)return '<span class="sep">'+esc(t.t)+'</span>';
      var k=pi+':'+i;
      if(!mem.show&&mem.hid0.has(k)){
        if(mem.hidden.has(k))return '<button type="button" class="blank" data-act="mem-reveal" data-k="'+k+'" style="width:'+Math.max(2.4,t.t.length)+'ch" aria-label="Parola nascosta, tocca per rivelare"></button>';
        return '<button type="button" class="blank rev" data-act="mem-hide" data-k="'+k+'" aria-label="Tocca per nascondere di nuovo">'+esc(t.t)+'</button>';
      }
      return esc(t.t);
    }).join('');
    return '<div class="mrow"><div class="iast fitline">'+html+'</div>'+trGloss(pi)+'</div>';
  }).join('');
  $('#p-memorizza').innerHTML=
   (DATA[cur].lite?pickRow('mem-scope',mem.scope,'mem-level',mem.level,trBtn()+eyeSm('mem-show',mem.show)):'<div class="card ctl">'+scopeSeg('mem-scope',mem.scope)+'<div class="diffrow">'+diffSeg('mem-level',mem.level)+trBtn()+eyeSm('mem-show',mem.show)+'</div></div>')+
   '<div class="card"><div class="fitbox" data-max="21">'+rows+'</div></div>'+trFull();
  fitVerse();
}

/* ---------- SCRIVI: parole mancanti (facile, medio) o righe intere (difficile) ---------- */
var wr={scope:'all',level:1,blanks:{},show:false,counted:false,hinted:false};
function wrReset(){
  wr.blanks={};wr.show=false;wr.counted=false;wr.hinted=false;saveStudio();
  padsOf(wr).forEach(function(pi){
    var u=unitsOf(pi);
    wr.blanks[pi]=shuffle(u.slice()).slice(0,wr.level===1?1:Math.ceil(u.length/2));
  });
}
function perfLine(){var p=perfOf(),n=p.verse;return 'Verso intero scritto giusto: '+n+(n===1?' volta':' volte')+' · Facile '+p.lv[1]+' · Medio '+p.lv[2]+' · Difficile '+p.lv[3]}
var FLD='data-kb="1" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"';
function renderWr(){
  var num=(wr.scope==='all'&&wr.level===3);   /* i numeri delle righe solo con «Tutto» e «Difficile» */
  var lines=padsOf(wr).map(function(pi){
    if(wr.level===3){
      var inp='<input class="fld wide" id="wr-'+pi+'" '+FLD+' aria-label="Pāda '+(pi+1)+'">';
      return num?'<div class="pada" style="align-items:center"><span class="pn">'+(pi+1)+'</span><div>'+inp+trGloss(pi)+'</div></div>':'<div class="mrow">'+inp+trGloss(pi)+'</div>';
    }
    return '<div class="mrow"><div class="cloze fitline">'+PADAS[pi].tok.map(function(t,i){
      if(!t.w)return '<span class="sep">'+esc(t.t)+'</span>';
      if(wr.blanks[pi].indexOf(i)>=0)return '<input class="fld" id="wr-'+pi+'-'+i+'" '+FLD+' aria-label="Parola mancante" style="width:'+(t.t.length+1)+'ch">';
      return esc(t.t);
    }).join('')+'</div>'+trGloss(pi)+'</div>';
  }).join('');
  if(wr.level<3)lines='<div class="fitbox" data-max="21">'+lines+'</div>';
  $('#p-scrivi').innerHTML=
   (DATA[cur].lite?pickRow('wr-scope',wr.scope,'wr-level',wr.level,trBtn()):'<div class="card ctl">'+scopeSeg('wr-scope',wr.scope)+'<div class="diffrow">'+diffSeg('wr-level',wr.level)+trBtn()+'</div></div>')+
   '<div class="card">'+lines+(DATA[cur].lite?wrTools()+kbHtml()+wrGo():kbHtml()+wrBtns())+'<div id="wr-fb" aria-live="polite"></div></div>'+trFull()+
   '<p class="hint" id="wr-perf">'+perfLine()+'</p>';
  updateDock();fitVerse();
}
function wrCheck(){
  var items=[];
  padsOf(wr).forEach(function(pi){
    if(wr.level===3)items.push({id:'wr-'+pi,exp:PADAS[pi].iast,name:'Pāda '+(pi+1),tell:false});
    else wr.blanks[pi].slice().sort(function(a,b){return a-b}).forEach(function(i){items.push({id:'wr-'+pi+'-'+i,exp:PADAS[pi].tok[i].t,name:'Pāda '+(pi+1),tell:true})});
  });
  if(wr.show){$('#wr-fb').innerHTML='<p class="hint">Nascondi il testo per controllare ciò che hai scritto.</p>';return}
  var html='',good=0,empties=[];
  items.forEach(function(it){
    var inp=$('#'+it.id),val=inp.value,r=compare(val,it.exp);
    setSt(inp,r);
    var fix=it.tell?'<div class="fbs">Corretto: <b>'+esc(it.exp)+'</b></div>':'';
    if(r.ok)good++;
    else if(!val.trim()){
      if(it.tell)html+='<div class="fbrow bad">'+it.name+': vuoto.'+fix+'</div>';else empties.push(it.name.replace('Pāda ',''));
    }
    else html+='<div class="fbrow bad"><div class="fbs">'+it.name+'</div><div class="diff">'+renderDiff(r.ops)+'</div><div class="fbs">'+summary(r.cnt)+'</div>'+fix+'</div>';
  });
  if(empties.length)html='<div class="fbrow bad">'+(empties.length===1?'Pāda ':'Pāda ')+empties.join(', ')+': vuot'+(empties.length===1?'o':'i')+'.</div>'+html;
  var all=good===items.length;wrGoState(all);
  if(all&&wr.scope==='all'&&!wr.counted&&!wr.show&&!wr.hinted){
    wr.counted=true;var pf=perfOf();pf.verse++;pf.lv[wr.level]++;put(PFKEY,perf);var tmm=$('#p-studio [data-id="scrivi"] .tile-m');if(tmm)tmm.textContent=tileMeta('scrivi');var pe=$('#wr-perf');if(pe)pe.textContent=perfLine();
  }
  var why='';
  if(all&&!wr.counted){
    if(wr.scope!=='all')why='Non va nel contatore: hai scritto solo il pāda '+(Number(wr.scope)+1)+'. Il contatore conta il verso intero: scegli «Tutto» in Parte.';
    else if(wr.hinted)why='Non va nel contatore: hai usato l’Aiuto. Riprova senza Aiuto per farlo contare.';
  }
  $('#wr-fb').innerHTML=(all?'<p class="good" style="margin:12px 0 0">Tutto giusto.</p>'+(why?'<p class="hint" style="margin-top:6px">'+esc(why)+'</p>':''):'<p style="margin:12px 0 0"><b>'+good+' su '+items.length+'</b> giuste.</p>')+html+(all?'':LEGEND);
  try{$('#wr-fb').scrollIntoView({block:'nearest',behavior:'smooth'})}catch(e){}
}
/* Scrivi: «Mostra il testo» scrive il testo corretto dentro le caselle (e lo toglie); «Riprova» le svuota e si riscrive lo stesso testo */
var BULB='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"></path></svg>';
function wrTools(){return '<div class="wr-tools"><button type="button" class="btn ic" data-act="wr-hint" aria-label="Aiuto: aggiunge una lettera">'+BULB+'</button>'+eyeSm('wr-show',wr.show).replace('class="eyesm"','class="eyesm" id="wr-show"')+'</div>'}
function wrGo(){return '<div class="wr-go"><button type="button" class="btn" data-act="wr-clear">Riprova</button><button type="button" class="btn primary" id="wr-go" data-act="wr-check">Controlla</button></div>'}
function wrGoState(done){var g=$('#wr-go');if(!g)return;g.dataset.act=done?'wr-next':'wr-check';g.textContent=done?'Avanti':'Controlla'}
function wrNext(){
  if(wr.scope!=='all'){var n=Number(wr.scope)+1;wr.scope=n<PADAS.length?String(n):'all'}
  else if(wr.level<3)wr.level++;
  else{wrRetry();return}
  wrReset();renderWr();
}
function wrBtns(){return '<div class="abtns four"><button type="button" class="btn primary" data-act="wr-check">Controlla</button><button type="button" class="btn" data-act="wr-hint">Aiuto</button>'+eyeSm('wr-show',wr.show).replace('class="eyesm"','class="eyesm" id="wr-show"')+'<button type="button" class="btn" data-act="wr-clear">Riprova</button></div>'}
function wrInputs(){return $$('#p-scrivi input.fld')}
/* «Aiuto»: aggiunge una lettera giusta alla casella in uso (o alla prima non ancora giusta) */
function wrHint(){
  if(wr.show)return;
  var el=(lastField&&lastField.id&&lastField.id.indexOf('wr-')===0&&document.body.contains(lastField))?lastField:null;
  if(!el)el=wrInputs().filter(function(x){return !compare(x.value,wrAnswer(x)).ok})[0];
  if(!el)return;
  var ans=nf(wrAnswer(el)),v=nf(el.value),l=0;
  while(l<v.length&&l<ans.length&&v[l]===ans[l])l++;
  el.value=ans.slice(0,Math.min(ans.length,l+1));
  el.classList.remove('ok','bad','near');wr.hinted=true;
  el.focus({preventScroll:true});
}
function wrAnswer(inp){
  var m=inp.id.match(/^wr-(\d+)(?:-(\d+))?$/),pi=Number(m[1]);
  return m[2]===undefined?PADAS[pi].iast:PADAS[pi].tok[Number(m[2])].t;
}
function wrToggle(){
  wr.show=!wr.show;
  wrInputs().forEach(function(inp){
    if(wr.show){inp.dataset.mine=inp.value;inp.value=wrAnswer(inp);inp.readOnly=true;inp.classList.remove('ok','bad','near');inp.classList.add('shown')}
    else{inp.value=inp.dataset.mine||'';inp.readOnly=false;inp.classList.remove('shown')}
  });
  var b=$('#wr-show');b.innerHTML=wr.show?EYE.shut:EYE.open;b.setAttribute('aria-pressed',String(wr.show));b.setAttribute('aria-label',wr.show?'Nascondi il testo':'Mostra il testo');
  if(wr.show)$('#wr-fb').innerHTML='';
}
function wrRetry(){
  wr.show=false;wr.counted=false;wr.hinted=false;wrGoState(false);
  wrInputs().forEach(function(inp){inp.value='';inp.dataset.mine='';inp.readOnly=false;inp.classList.remove('ok','bad','near','shown')});
  $('#wr-fb').innerHTML='';
  var b=$('#wr-show');b.innerHTML=EYE.open;b.setAttribute('aria-pressed','false');b.setAttribute('aria-label','Mostra il testo');
}

/* ---------- SANDHI: esercizio sui sandhi ---------- */
var sd={q:null,pick:null,order:[],oi:0,opts:[]};
function sdNext(){
  if(sd.oi>=sd.order.length){sd.order=shuffle(SANDHI.map(function(_,i){return i}));sd.oi=0}
  sd.q=sd.order[sd.oi++];sd.pick=null;
  var right=SANDHI[sd.q].sut[0],pool=[];
  SANDHI.forEach(function(s2){s2.sut.forEach(function(n){if(n!==right&&pool.indexOf(n)<0)pool.push(n)})});
  sd.opts=[right].concat(shuffle(pool).slice(0,3)).sort(function(a,b){return a-b});
}
function renderSdEx(){
  if(!SANDHI.length){$('#p-grammatica').innerHTML='';return}
  if(sd.q===null)sdNext();
  var x=SANDHI[sd.q],opts=sd.opts;
  $('#p-grammatica').innerHTML='<div class="card">'+
   '<p class="eq" style="margin:0 0 6px">'+esc(x.a)+' + '+esc(x.b)+' → ?</p>'+
   '<label class="lbl" for="sd-in">Risultato</label>'+
   '<input class="fld wide" id="sd-in" data-kb="1" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">'+
   kbHtml()+
   '<p class="lbl" style="margin-top:12px">Quale sūtra?</p>'+
   '<div class="choices" id="sd-ch">'+opts.map(function(n){return '<button type="button" data-act="sd-pick" data-n="'+n+'" aria-pressed="false"><span class="cn">'+n+'</span><span class="ct">'+esc(SUTRA[n].txt)+'</span></button>'}).join('')+'</div>'+
   (DATA[cur].lite?'<div class="wr-go"><button type="button" class="btn" data-act="sd-retry">Riprova</button><button type="button" class="btn primary" id="sd-go" data-act="sd-check">Controlla</button></div>':'<div class="abtns three"><button type="button" class="btn primary" data-act="sd-check">Controlla</button><button type="button" class="btn" data-act="sd-retry">Riprova</button><button type="button" class="btn" data-act="sd-next">Prossima</button></div>')+
   '<div id="sd-fb" aria-live="polite"></div></div>';
}
function sdCheck(){
  var x=SANDHI[sd.q],inp=$('#sd-in'),val=inp.value,r=compare(val,x.r),html='';
  setSt(inp,r);
  if(r.ok)html+='<div class="fbrow ok">✓ Risultato giusto: <i>'+esc(x.r)+'</i></div>';
  else if(!val.trim())html+='<div class="fbrow bad">Risultato vuoto. Corretto: <i>'+esc(x.r)+'</i></div>';
  else html+='<div class="fbrow bad"><div class="diff">'+renderDiff(r.ops)+'</div><div class="fbs">'+summary(r.cnt)+'</div><div class="fbs">Corretto: <i>'+esc(x.r)+'</i></div></div>';
  var right=x.sut[0];
  $$('#sd-ch button').forEach(function(b){
    var n=Number(b.dataset.n);
    b.classList.remove('ok','bad');
    if(n===right)b.classList.add('ok');
    else if(sd.pick===n)b.classList.add('bad');
  });
  if(sd.pick===null)html+='<div class="fbrow bad">Non hai scelto il sūtra. Quello giusto è il <b>'+right+'</b>.</div>';
  else if(sd.pick===right)html+='<div class="fbrow ok">✓ Sūtra '+right+' giusto.</div>';
  else html+='<div class="fbrow bad">Sūtra '+sd.pick+': non è questo. Quello giusto è il <b>'+right+'</b>.</div>';
  html+=sutH(right);
  if(x.note)html+='<p class="hint" style="margin-top:8px">'+esc(x.note)+'</p>';
  $('#sd-fb').innerHTML=html+(r.ok?'':LEGEND);
  var sg=$('#sd-go');if(sg){sg.dataset.act='sd-next';sg.textContent='Prossima'}
  try{$('#sd-fb').scrollIntoView({block:'nearest',behavior:'smooth'})}catch(e){}
}

/* ---------- PAROLE ---------- */
var pw={mode:'cards',i:0,flip:false,order:[]};
function pwToggle(){
  var IC={cards:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="6" width="14" height="12" rx="2.5"></rect><path d="M8 3.5h8"></path></svg>',list:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7h11M8 12h11M8 17h11"></path><circle cx="4.5" cy="7" r=".6"></circle><circle cx="4.5" cy="12" r=".6"></circle><circle cx="4.5" cy="17" r=".6"></circle></svg>'};
  return '<div class="pwtop"><div class="seg mini" role="group" aria-label="Vista delle parole">'+[['cards','Schede'],['list','Elenco']].map(function(o){return '<button type="button" data-act="seg" data-name="pw-mode" data-val="'+o[0]+'" aria-pressed="'+(pw.mode===o[0])+'" aria-label="'+o[1]+'">'+IC[o[0]]+'</button>'}).join('')+'</div></div>';
}
function renderPw(){
  if(!WORDS.length){$('#p-parole').innerHTML='';return}
  var body;
  if(pw.mode==='list'){
    body='<div class="card">'+WORDS.map(wordHtml).join('')+'</div>';
  }else{
    var w=WORDS[pw.order[pw.i]];
    body='<p class="count">'+(pw.i+1)+' / '+WORDS.length+'</p>'+
     '<button type="button" class="card flash-card" data-act="pw-flip" aria-live="polite">'+
     (pw.flip?'<div class="wk">'+esc(w.k)+'</div><div class="wm" style="font-size:19px">'+esc(w.mean)+'</div><div class="wi">'+esc(w.info)+'</div>'+partsHtml(w):
       '<div class="big">'+esc(w.k)+'</div><div class="hint">Tocca per girare la scheda</div>')+'</button>'+
     '<div class="pwnav"><button type="button" class="btn" data-act="pw-prev">Precedente</button>'+
     '<button type="button" class="star" data-act="pw-shuffle" aria-label="Mescola le schede">'+SHUF+'</button>'+
     '<button type="button" class="btn primary" data-act="pw-next">Prossima</button></div>';
  }
  $('#p-parole').innerHTML=
   (DATA[cur].lite?pwToggle():'<div class="card">'+seg('pw-mode',[['cards','Schede'],['list','Elenco']],pw.mode)+'</div>')+body;
}

/* ---------- QUIZ (in più rispetto al Dāmodarāṣṭakam) ---------- */
var qz=null;
function qOpts(correct,pool,keep){
  var seen={},o=[correct];
  seen[canon(correct)]=1;
  (keep?pool:shuffle(pool.slice())).forEach(function(t){var c=canon(t);if(o.length<4&&!seen[c]){seen[c]=1;o.push(t)}});
  return shuffle(o);
}
function buildQuiz(d){
  var W=d.words||[],P=d.padas,qs=[],all=[],allP=[],own={};
  DATA.forEach(function(x){(x.words||[]).forEach(function(w){all.push(w)});x.padas.forEach(function(p){allP.push(p.iast)})});
  P.forEach(function(p){own[canon(p.iast)]=1});
  W.forEach(function(w){
    var o,toIt=Math.random()<0.5;
    if(toIt){
      o=qOpts(w.mean,all.map(function(x){return x.mean}));
      qs.push({q:'Che cosa significa <i>'+esc(w.k)+'</i>?',o:o,c:o.indexOf(w.mean)});
    }else{
      o=qOpts(w.k,all.filter(function(x){return canon(x.mean)!==canon(w.mean)}).map(function(x){return x.k}));
      qs.push({q:'Quale parola significa «'+esc(w.mean)+'»?',o:o,c:o.indexOf(w.k)});
    }
  });
  for(var i=0;i<P.length-1;i++){
    var near=P.filter(function(_,j){return j!==i&&j!==i+1}).map(function(p){return p.iast});
    var far=shuffle(allP.filter(function(t){return !own[canon(t)]}));
    var okp=P[i+1].iast,o2=qOpts(okp,shuffle(near).concat(far),true);
    qs.push({q:'Quale pāda viene dopo <i>'+esc(P[i].iast)+'</i>?',o:o2,c:o2.indexOf(okp)});
  }
  return shuffle(qs.filter(function(q){return q.o.length>=2})).slice(0,8);
}
var QKEY='impara-versi-quiz',qst=load(QKEY);
function qStat(){var id=DATA[cur].id;if(!qst[id])qst[id]={r:0,t:0,n:0,h:[]};return qst[id]}
function qPct(r,t){return t?Math.round(r/t*100):0}
function qSave(){
  if(qz.retry||qz.saved)return;qz.saved=true;
  var st=qStat();st.r+=qz.score;st.t+=qz.qs.length;st.n++;st.h=(st.h||[]).concat(qPct(qz.score,qz.qs.length)).slice(-5);put(QKEY,qst);
  var tm=$('#p-studio [data-id="quiz"] .tile-m');if(tm)tm.textContent=tileMeta('quiz');
}
function qRedo(){
  var wrong=qz.qs.filter(function(q,k){return qz.res[k]===false});
  qz={qs:wrong.map(function(q){var c=q.o[q.c],o=shuffle(q.o.slice());return {q:q.q,o:o,c:o.indexOf(c)}}),i:0,score:0,pick:null,done:false,res:[],retry:true,saved:true};
}
function renderQz(){
  var d=DATA[cur],html;
  if(!qz)qz={qs:buildQuiz(d),i:0,score:0,pick:null,done:false,res:[]};
  if(!qz.qs.length){
    html='<div class="card"><p class="hint" style="color:var(--ink)">Per questo verso non ci sono ancora abbastanza dati per un quiz.</p></div>';
  }else if(qz.done){
    var nq=qz.qs.length,pc=qPct(qz.score,nq),wrong=[];
    qz.qs.forEach(function(q,k){if(qz.res[k]===false)wrong.push(q)});
    var stt=qStat(),hist=(stt.h||[]).map(function(x){return x+'%'}).join(' · ');
    html='<div class="card"><p class="eyebrow" style="text-align:center">'+(qz.retry?'Ripasso degli sbagliati':'Quiz finito')+'</p>'+
     '<p class="qbig">'+qz.score+' su '+nq+' giuste</p><p class="qpc">'+pc+'%</p>'+
     (qz.retry?'<p class="hint" style="text-align:center">Questo ripasso non conta nella media.</p>':
       (stt.n?'<p class="hint" style="text-align:center">Media su questo verso: <b>'+qPct(stt.r,stt.t)+'%</b> · '+pl(stt.n,'quiz','quiz')+(stt.h.length>1?'<br>Ultimi: '+esc(hist):'')+'</p>':''))+
     (wrong.length?'<p class="lbl" style="margin-top:14px">Da rivedere ('+wrong.length+')</p>'+wrong.map(function(q){return '<div class="fbrow bad"><div>'+q.q+'</div><div class="fbs">Giusta: <b>'+esc(q.o[q.c])+'</b></div></div>'}).join(''):'<p class="good" style="text-align:center;margin:12px 0 0">Nessun errore.</p>')+
     '<div class="row" style="justify-content:center;gap:8px;margin-top:14px;flex-wrap:wrap">'+(wrong.length?'<button type="button" class="btn primary" data-act="qz-redo">Rifai solo gli sbagliati</button>':'')+'<button type="button" class="btn'+(wrong.length?'':' primary')+'" data-act="qz-restart">Nuovo quiz</button></div></div>';
  }else{
    var q=qz.qs[qz.i],L='ABCD';
    html='<div class="qdots" aria-label="Domanda '+(qz.i+1)+' di '+qz.qs.length+'">'+qz.qs.map(function(_,k){return '<i class="'+(qz.res[k]===true?'ok':qz.res[k]===false?'bad':(k===qz.i?'cur':''))+'"></i>'}).join('')+'</div>'+
     '<div class="card"><p class="eyebrow">Domanda</p><p class="trad" style="font-size:17.5px;padding-inline:0">'+q.q+'</p>'+
     '<div class="choices" role="group">'+q.o.map(function(t,n){
       var cls='';
       if(qz.pick!==null){if(n===q.c)cls='ok';else if(n===qz.pick)cls='bad'}
       return '<button type="button" class="'+cls+'" data-act="qz-pick" data-n="'+n+'"><span class="cn">'+L.charAt(n)+'</span><span class="ct">'+esc(t)+'</span></button>';
     }).join('')+'</div>'+
     (qz.pick!==null?'<p class="fbs" style="margin-top:10px">'+(qz.pick===q.c?'<span class="good">Giusto.</span>':'Non è questa: la risposta giusta è evidenziata in verde.')+'</p><div class="row" style="margin-top:10px"><button type="button" class="btn primary" data-act="qz-next">'+(qz.i+1>=qz.qs.length?'Vedi il risultato':'Avanti')+'</button></div>':'')+
     '</div><p class="hint">I significati vengono dal parola per parola del verso, che in parte è analisi mia da verificare.</p>';
  }
  $('#p-quiz').innerHTML=html;
}

/* ---------- RIPASSO: scheda con solo la prima parola ---------- */
var rp={shown:false};
function renderRp(){
  $('#p-ripasso').innerHTML='<div class="card rp" data-act="rp-show">'+(DATA[cur].lite?'':eyeBtn('rp-show',rp.shown))+veiledVerse(DATA[cur],rp.shown)+'</div>'+
    '<button type="button" class="btn big primary" data-act="rp-show">'+(rp.shown?'Nascondi il verso':'Mostra il verso')+'</button>';
  fitVerse();
}
function renderAll(){renderVerso();renderMem();renderWr();renderSdEx();renderPw();renderQz();renderRp()}

/* ---------- barra fissa con diacritici e tasti d'azione (sale sopra la tastiera del telefono) ---------- */
function dockHtml(kind){
  var keys='<div class="kbrow" role="group" aria-label="Diacritici">'+KEYS.map(function(k){return '<button type="button" class="key" data-act="key" data-ch="'+k+'" aria-label="inserisci '+k+'">'+k+'</button>'}).join('')+'</div>';
  if(kind==='scrivi')return keys+'<div class="dbtns four"><button type="button" class="btn primary" data-act="wr-check">Controlla</button><button type="button" class="btn" data-act="wr-hint">Aiuto</button><button type="button" class="btn" id="wr-show" data-act="wr-show" aria-pressed="'+wr.show+'">'+(wr.show?'Nascondi':'Mostra')+'</button><button type="button" class="btn" data-act="wr-clear">Riprova</button></div>';
  return keys+'<div class="dbtns three"><button type="button" class="btn primary" data-act="sd-check">Controlla</button><button type="button" class="btn" data-act="sd-retry">Riprova</button><button type="button" class="btn" data-act="sd-next">Prossima</button></div>';
}
function placeDock(){
  var d=$('#dock');if(!d||d.hidden)return;
  var vv=window.visualViewport,kbo=vv?Math.max(0,window.innerHeight-vv.height-vv.offsetTop):0;
  d.style.bottom=kbo>120?(kbo+6)+'px':'';
}
function updateDock(){var d=$('#dock');if(d)d.hidden=true;document.body.classList.remove('hasdock')}
if(window.visualViewport){window.visualViewport.addEventListener('resize',placeDock);window.visualViewport.addEventListener('scroll',placeDock)}
document.addEventListener('keydown',function(e){
  if(e.key!=='Enter'||!e.target.matches||!e.target.matches('input.fld'))return;
  e.preventDefault();
  var el=e.target;
  if(el.id==='sd-in'){sdCheck();el.blur();return}
  if(el.id.indexOf('wr-')===0&&!wr.show){
    setSt(el,compare(el.value,wrAnswer(el)));
    var all=wrInputs(),k=all.indexOf(el);
    if(k<all.length-1)all[k+1].focus();else{wrCheck();el.blur()}
  }
});
document.addEventListener('focusin',function(e){
  if(e.target.matches&&e.target.matches('input.fld'))setTimeout(function(){try{e.target.scrollIntoView({block:'center',behavior:'smooth'})}catch(x){}},320);
});

/* ---------- tastiera dei diacritici e gesti ---------- */
function insertChar(ch){
  var el=lastField;
  if(!el||!document.body.contains(el)||el.offsetParent===null)return;
  el.focus({preventScroll:true});
  var s=(el.selectionStart==null)?el.value.length:el.selectionStart,e=(el.selectionEnd==null)?s:el.selectionEnd;
  el.value=el.value.slice(0,s)+ch+el.value.slice(e);
  var p=s+ch.length;try{el.setSelectionRange(p,p)}catch(x){}
  el.dispatchEvent(new Event('input',{bubbles:true}));
}
document.addEventListener('animationend',function(e){if(e.target.parentNode&&e.target.parentNode.classList&&e.animationName==='rise')e.target.parentNode.classList.remove('enter')});
/* scorrendo il dito a destra o a sinistra si cambia scheda.
   Sul riquadro del verso: Traduzione, Parola per parola, Sandhi, Metrica. Sulla barra in basso: Verso, Studio, Ripasso.
   Sulla fila degli esercizi: Memorizza, Scrivi, Parole, Sandhi, Quiz. */
var swipe=null,MODES=['trad','wbw','gram','metr'];
document.addEventListener('touchstart',function(e){
  swipe=null;
  if(cur<0||!e.target.closest)return;
  var zone=e.target.closest('nav')?'nav':(e.target.closest('#subnav')?'sub':(main==='verso'&&e.target.closest('.vcard')?'card':null));
  if(zone){var t=e.touches[0];swipe={x:t.clientX,y:t.clientY,zone:zone}}
},{passive:true});
document.addEventListener('touchend',function(e){
  if(!swipe)return;
  var t=e.changedTouches[0],dx=t.clientX-swipe.x,dy=t.clientY-swipe.y,zone=swipe.zone;swipe=null;
  if(Math.abs(dx)<45||Math.abs(dx)<1.5*Math.abs(dy))return;
  function step(c,len){return dx<0?Math.min(len-1,c+1):Math.max(0,c<0?0:c-1)}
  var c=-1,next;
  if(zone==='nav'){
    MAINS.forEach(function(m,i){if(m[0]===main)c=i});next=step(c,MAINS.length);
    if(next!==c){main=MAINS[next][0];curSub=null;show()}
  }else if(zone==='sub'){
    SUBS.forEach(function(m,i){if(m[0]===curSub)c=i});next=step(c,SUBS.length);
    if(next!==c){curSub=SUBS[next][0];show()}
  }else{
    var MD=modesOf(DATA[cur]);MD.forEach(function(m,i){if(m===prefs.mode)c=i});next=step(c,MD.length);
    if(next===c)return;
    prefs.mode=MD[next];sel=null;renderVerso();
    var cd=$('#p-verso .vcard');if(cd)cd.classList.add(dx<0?'in-l':'in-r');
  }
},{passive:true});
/* scorrendo il dito sulla barra in basso si cambia sezione: Cerca, Versi, Ripasso */
var gsw=null;
document.addEventListener('touchstart',function(e){
  gsw=null;if(!e.target.closest||!e.target.closest('#gnav'))return;
  var t=e.touches[0];gsw={x:t.clientX,y:t.clientY}
},{passive:true});
document.addEventListener('touchend',function(e){
  if(!gsw)return;
  var t=e.changedTouches[0],dx=t.clientX-gsw.x,dy=t.clientY-gsw.y;gsw=null;
  if(Math.abs(dx)<40||Math.abs(dx)<1.5*Math.abs(dy))return;
  var c=0;TABS.forEach(function(x,i){if(x[0]===lastTab)c=i});
  var n=dx<0?Math.min(TABS.length-1,c+1):Math.max(0,c-1);
  if(n!==c)goTab(TABS[n][0]);
},{passive:true});
/* scorrendo il dito verso destra (da sinistra a destra) su un punto libero della pagina del verso (fuori da riquadro, barre e campi di scrittura) si torna alla home */
var back=null;
function scrollableX(el){for(;el&&el!==document.body;el=el.parentNode){if(el.nodeType===1&&el.scrollWidth>el.clientWidth+2){var o=getComputedStyle(el).overflowX;if(o==='auto'||o==='scroll')return true}}return false}
document.addEventListener('touchstart',function(e){
  back=null;
  var vv=$('#verseview');if(cur<0||!vv||vv.hidden||!e.target.closest||e.touches.length!==1)return;
  if(e.target.closest('nav,#subnav,.vcard,input,textarea,select,button,a,.key,#dock')||scrollableX(e.target))return;
  var t=e.touches[0];back={x:t.clientX,y:t.clientY}
},{passive:true});
document.addEventListener('touchend',function(e){
  if(!back)return;
  var t=e.changedTouches[0],dx=t.clientX-back.x,dy=t.clientY-back.y;back=null;
  if(dx>60&&Math.abs(dx)>=2*Math.abs(dy))goBack();
},{passive:true});
document.addEventListener('focusin',function(e){if(e.target.matches&&e.target.matches('[data-kb]'))lastField=e.target});
document.addEventListener('mousedown',function(e){if(e.target.closest&&e.target.closest('.key'))e.preventDefault()});
document.addEventListener('input',function(e){
  if(e.target.id&&e.target.id.indexOf('wr-')===0){wr.counted=false;wrGoState(false)}
  if(e.target.id==='sq'){sr.q=e.target.value;var c=$('#sclear');if(c)c.hidden=!sr.q;renderResults()}
});
document.addEventListener('keydown',function(e){
  if(e.target.id==='sq'&&e.key==='Enter'){e.preventDefault();e.target.blur();return}
  /* «/» porta subito alla ricerca (da tastiera, fuori dai campi di scrittura) */
  if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&cur<0&&!/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName||''))){
    e.preventDefault();showSearch();var s=$('#sq');if(s)s.focus();
  }
});

function bindVerse(i){var d=DATA[i];restoreStudio(i);PADAS=d.padas;WORDS=d.words||[];SURF=d.surf||[];SUTRA=d.sutra||{};SANDHI=d.sandhi||[];SEG=d.seg||[]}
function segSet(n,v){
  if(n==='mem-scope'){mem.scope=v;memReset();renderMem()}
  else if(n==='mem-level'){mem.level=Number(v);memReset();renderMem()}
  else if(n==='wr-scope'){wr.scope=v;wrReset();renderWr()}
  else if(n==='wr-level'){wr.level=Number(v);wrReset();renderWr()}
  else if(n==='pw-mode'){pw.mode=v;pw.flip=false;renderPw()}
  else if(n==='rv-mode'){rv.mode=v;rvReset();renderRv()}
}
document.addEventListener('change',function(e){var t=e.target;if(t.matches&&t.matches('select[data-sf]')){sr[t.dataset.sf]=t.value;renderFilters();renderResults();return}if(t.matches&&t.matches('select[data-name]'))segSet(t.dataset.name,t.value)});
/* ---------- eventi ---------- */
document.addEventListener('click',function(e){
  var pop=$('#aa-pop');if(pop&&!pop.hidden&&!e.target.closest('#aa-pop')&&!e.target.closest('#b-aa')){pop.hidden=true;$('#b-aa').setAttribute('aria-expanded','false')}
  var spp=$('#set-pop');if(spp&&!spp.hidden&&!e.target.closest('#set-pop')&&!e.target.closest('#b-theme')){spp.hidden=true;$('#b-theme').setAttribute('aria-expanded','false')}
  var b=e.target.closest('[data-act]');
  if(!b)return;
  var act=b.dataset.act;
  switch(act){
   case 'open':ys[lastTab]=window.pageYOffset||0;openVerse(Number(b.dataset.i));break;
   case 'home':goBack();break;
   case 'review':goReview();break;
   case 'tab':goTab(b.dataset.tab);break;
   case 'sreset':sr.q='';sr.src='';sr.met='';sr.star='';renderSearch();break;
   case 'sclear':{sr.q='';var si=$('#sq');if(si){si.value='';si.focus()}b.hidden=true;renderResults();break;}
   case 'upd-check':updCheck();break;
   case 'upd-go':updGo();break;
   case 'theme':{var sp=$('#set-pop');sp.hidden=!sp.hidden;b.setAttribute('aria-expanded',String(!sp.hidden));break;}
   case 'aa':{var pp=$('#aa-pop');pp.hidden=!pp.hidden;b.setAttribute('aria-expanded',String(!pp.hidden));break;}
   case 'vs-minus':case 'vs-plus':{
     var cs=prefs.vs;if(!cs){var fl=$('#p-verso .iast');cs=fl?Math.round(parseFloat(getComputedStyle(fl).fontSize)):19}
     prefs.vs=Math.max(13,Math.min(30,cs+(act==='vs-plus'?1:-1)));saveAll();applyPrefs();renderVerso();break;}
   case 'theme-set':prefs.theme=b.dataset.val;saveAll();applyTheme();break;
   case 'vs-auto':prefs.vs=null;saveAll();applyPrefs();renderVerso();break;
   case 'pref-dev':prefs.dev=!prefs.dev;applyPrefs();renderVerso();renderMem();break;
   case 'pref-trad':case 'pref-wbw':case 'pref-gram':case 'pref-metr':{
     var k=act.slice(5);prefs.mode=prefs.mode===k?'trad':k;sel=null;renderVerso();break;}
   case 'learned':{var d=DATA[cur];stars[d.id]=!stars[d.id];if(!stars[d.id])delete stars[d.id];saveAll();applyPrefs();break;}
   case 'word':sel=[Number(b.dataset.p),Number(b.dataset.j)];renderVerso();break;
   case 'sg':{
     var card=$('#sd-card-'+b.dataset.s);
     if(card){
       $('#sd-b-'+b.dataset.s).hidden=false;card.querySelector('.sh').setAttribute('aria-expanded','true');
       card.classList.remove('flash');void card.offsetWidth;card.classList.add('flash');
       try{card.scrollIntoView({behavior:'smooth',block:'center'})}catch(x){card.scrollIntoView()}
     }
     break;}
   case 'sd-tog':{var el=$('#'+b.dataset.t);el.hidden=!el.hidden;b.setAttribute('aria-expanded',String(!el.hidden));break;}
   case 'seg':segSet(b.dataset.name,b.dataset.val);break;
   case 'wr-next':wrNext();break;
   case 'seg-old':{
     var n=b.dataset.name,v=b.dataset.val;
     if(n==='mem-scope'){mem.scope=v;memReset();renderMem()}
     else if(n==='mem-level'){mem.level=Number(v);memReset();renderMem()}
     else if(n==='wr-scope'){wr.scope=v;wrReset();renderWr()}
     else if(n==='wr-level'){wr.level=Number(v);wrReset();renderWr()}
     else if(n==='pw-mode'){pw.mode=v;pw.flip=false;renderPw()}
     else if(n==='rv-mode'){rv.mode=v;rvReset();renderRv()}
     break;}
   case 'main':main=b.dataset.id;curSub=null;show();break;
   case 'sub':curSub=b.dataset.id;lastSub=curSub;saveStudio();show();break;
   case 'key':insertChar(b.dataset.ch);break;
   case 'mem-reveal':mem.hidden.delete(b.dataset.k);renderMem();break;
   case 'mem-hide':mem.hidden.add(b.dataset.k);renderMem();break;
   case 'wr-hint':wrHint();break;
   case 'mem-show':mem.show=!mem.show;renderMem();break;
   case 'tr-show':trToggle();break;
   case 'wr-check':wrCheck();break;
   case 'wr-show':wrToggle();break;
   case 'wr-clear':wrRetry();break;
   case 'sd-pick':
     sd.pick=Number(b.dataset.n);
     $$('#sd-ch button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b));x.classList.remove('ok','bad')});
     break;
   case 'sd-check':sdCheck();break;
   case 'sd-retry':sd.pick=null;renderSdEx();break;
   case 'sd-next':sdNext();renderSdEx();break;
   case 'pw-flip':pw.flip=!pw.flip;renderPw();break;
   case 'pw-next':pw.i=(pw.i+1)%WORDS.length;pw.flip=false;renderPw();break;
   case 'pw-shuffle':shuffle(pw.order);pw.i=0;pw.flip=false;renderPw();break;
   case 'pw-prev':pw.i=(pw.i-1+WORDS.length)%WORDS.length;pw.flip=false;renderPw();break;
   case 'rp-show':rp.shown=!rp.shown;renderRp();break;
   case 'qz-pick':{if(!qz||qz.pick!==null)break;qz.pick=Number(b.dataset.n);qz.res[qz.i]=(qz.pick===qz.qs[qz.i].c);if(qz.res[qz.i])qz.score++;renderQz();break;}
   case 'qz-next':qz.i++;qz.pick=null;if(qz.i>=qz.qs.length){qz.done=true;qSave()}renderQz();break;
   case 'qz-redo':qRedo();renderQz();break;
   case 'qz-restart':qz=null;renderQz();break;
   case 'rv-flip':rv.flip=!rv.flip;renderRv();break;
   case 'rv-next':rv.i=(rv.i+1)%rv.order.length;rv.flip=false;renderRv();break;
   case 'rv-prev':rv.i=(rv.i-1+rv.order.length)%rv.order.length;rv.flip=false;renderRv();break;
   case 'rv-shuffle':shuffle(rv.order);rv.i=0;rv.flip=false;renderRv();break;
  }
});

/* ---------- barre che spariscono scorrendo: giù = via il titolo in alto e la barra in basso, su = tornano ---------- */
var barsY=0,barsAcc=0,barsOff=false,barsTick=false;
function barsSet(v){if(v!==barsOff){barsOff=v;document.body.classList.toggle('bars-off',v)}}
function barsReset(){barsY=Math.max(0,window.pageYOffset||0);barsAcc=0;barsSet(false)}
function barsUpdate(){
  barsTick=false;
  var y=Math.max(0,window.pageYOffset||0),d=y-barsY;barsY=y;
  var a=$('#aa-pop'),s=$('#set-pop');
  if((a&&!a.hidden)||(s&&!s.hidden)){barsAcc=0;return}/* con un pannello aperto le barre restano */
  if(y<=16){barsAcc=0;barsSet(false);return}/* in cima alla pagina si vedono sempre */
  if(Math.abs(d)>300){barsAcc=0;barsSet(false);return}/* salto di posizione (indice, ritorno): barre visibili */
  var maxY=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
  if(y>=maxY-1)return;/* rimbalzo in fondo: non cambia nulla */
  if((d>0)!==(barsAcc>0))barsAcc=0;
  barsAcc+=d;
  if(barsAcc>14)barsSet(true);else if(barsAcc<-10)barsSet(false);
}
window.addEventListener('scroll',function(){if(!barsTick){barsTick=true;window.requestAnimationFrame(barsUpdate)}},{passive:true});

/* ---------- versione, controllo aggiornamenti, uso offline ---------- */
var updNew=null,updBusy=false;
function updShow(msg,cls,go){
  $$('.upd').forEach(function(u){
    var s=u.querySelector('.upd-s'),b=u.querySelector('[data-upd]');
    if(s){s.textContent=msg||'';s.className='upd-s'+(cls?' '+cls:'')}
    if(b){b.dataset.act=go?'upd-go':'upd-check';b.textContent=go?('Aggiorna alla versione '+updNew):'Controlla aggiornamenti';b.disabled=updBusy}
  });
}
function updInit(){$$('.upd .upd-v').forEach(function(v){v.textContent='Śloka Drill · versione '+APP_VERSION})}
function updCheck(){
  if(updBusy)return;
  if(navigator.onLine===false){updShow('Sei offline: serve la connessione per controllare.','bad');return}
  updBusy=true;updShow('Controllo in corso…');
  fetch('app.js?c='+Date.now(),{cache:'no-store'}).then(function(r){if(!r.ok)throw new Error(r.status);return r.text()}).then(function(t){
    var m=/var APP_VERSION='([^']+)'/.exec(t);
    updBusy=false;
    if(!m){updShow('Non riesco a leggere la versione online.','bad');return}
    if(m[1]===APP_VERSION){updNew=null;updShow('Hai già l’ultima versione.','ok')}
    else{updNew=m[1];updShow('È disponibile la versione '+m[1]+'.','',true)}
  }).catch(function(){updBusy=false;updShow('Controllo non riuscito: riprova con la connessione attiva.','bad')});
}
function updGo(){
  if(updBusy)return;
  updBusy=true;updShow('Aggiorno…');
  var p=[],done=function(){location.reload()};
  try{if(window.caches)p.push(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k)}))}))}catch(e){}
  try{if(navigator.serviceWorker)p.push(navigator.serviceWorker.getRegistrations().then(function(rs){return Promise.all(rs.map(function(r){return r.update()}))}))}catch(e){}
  Promise.all(p).then(done,done);
}
/* il service worker (sw.js) fa funzionare l'app anche senza rete: solo sulla pagina pubblicata (GitHub Pages), non nell'anteprima dell'artefatto */
if('serviceWorker' in navigator&&(/(^|\.)github\.io$/.test(location.hostname)||location.hostname==='localhost')){
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
}

/* ---------- avvio ---------- */
updInit();
applyTheme();buildGnav();goHome();
})();
