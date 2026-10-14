/* =====================================================================
   VERSI · l'archivio dei versi di Śloka Drill
   Qui ci sono solo dati, nessuna logica. Il codice è in app.js, la struttura
   della pagina in index.html, la grafica in stile.css.

   COME SI AGGIUNGE UN VERSO
   Si aggiunge un blocco DATA.push({...}) in fondo, prima di "FINE RACCOLTA".
   Nella home i versi sono in ordine alfabetico dell'inizio del verso, quindi
   l'ordine in questo file non conta. Non serve toccare nessun altro file.

   CAMPI DI UN VERSO
     id             identificatore unico, minuscolo, senza diacritici (es. 'sb-3-9-25')
     label          nome del verso (es. 'Śrīmad-Bhāgavatam 3.9.25')
     src            da dove viene, mostrato sotto il titolo nella home;
                    '' = non mostrare nulla; se il campo manca si usa label
     sub            riga sotto il titolo (metro e sillabe)
     padas          [{iast, dev}], un elemento per pāda (o per riga)
     translation, translationSrc    traduzione e relativa fonte
     words          parola per parola [{k, mean, info}]
     surf           come è spezzato il testo per toccare le parole
                    [[{t, e:[indici di words]}]]
     metrica        {name, syl, gana, yati, lakshana, scan, note}: SEMPRE presente
                    (per gli altri campi opzionali guardare un verso esistente)
     context        paragrafi [{v, t}]: v:true = preso da una fonte,
                    v:false = creato da me, non verificato
     note, sources  nota sul testo e fonti
     lite           non serve più: l'app lo imposta per tutti i versi

   SOLO PER I VERSI IN SANSCRITO (sezione Grammatica e sandhi)
     sutra          i sūtra citati, {numero: {txt, tr, ex}}
     sandhi         le giunzioni [{a, b, r, sut:[numeri dei sūtra], note}]
     seg            il testo spezzato per evidenziare i sandhi

   VERSO NON IN SANSCRITO (es. bengalese)
     Si omettono sutra, sandhi e seg. L'app allora non mostra la sezione
     Grammatica e restano solo i campi della metrica.
   ===================================================================== */

var DATA=[];

/* ----- Mādhurya-kādambinī 1 ----- */
DATA.push({
 id:'madhurya-kadambini-1',
 label:'Mādhurya-kādambinī 1',
 src:'Mādhurya-kādambinī 1',
 lite:true,
 sub:'śārdūla-vikrīḍita · 19 sillabe per pāda',
 padas:[
  {iast:'hṛd-vapre nava-bhakti-śasya-vitateḥ sañjīvanī svāgamā', dev:'हृद्वप्रे नवभक्तिशस्यवितते: सञ्जीवनी स्वागमा'},
  {iast:'rambhe kāma-tapartu-dāha-damanī viśvāpagollāsinī', dev:'रम्भे कामतपर्तुदाहदमनी विश्वापगोल्लासिनी ।'},
  {iast:'dūrān me maru-śākhino ’pi sarasī-bhāvāya bhūyāt prabhu', dev:'दूरान्मे मरुशाखिनोऽपि सरसीभावाय भूयात्प्रभु'},
  {iast:'śrī-caitanya-kṛpā-niraṅkuśa-mahā-mādhurya-kādambinī', dev:'श्रीचैतन्यकृपानिरङ्कुशमहामाधुर्यकादम्बिनी ॥१॥'}
 ],
 translation:'La misericordia di Svayam Bhagavān Śrī Kṛṣṇa Caitanya Mahāprabhu è come un banco di nuvole illimitato e incontrollabile di nettare straordinario, che cade come pioggia sul cuore del sādhaka. La pioggia della Sua misericordia dà piena vitalità ai raccolti dei nove membri della bhakti, come śravaṇa e kīrtana, appena seminati nel campo del cuore dei sādhaka. Già il primo apparire del banco di nuvole della misericordia di Mahāprabhu dissolve la bruciante arsura della stagione estiva – i vari desideri materiali di godimento personale – e fa gonfiare di gioia il cuore di tutti i devoti dell’universo, come i fiumi si gonfiano con la pioggia. Possa quel banco di nuvole senza freni e di potenza illimitata, la dolce misericordia di Śrīman Mahāprabhu, la cui influenza si sente anche da grande distanza, riempire me, albero secco e senza vita nel deserto, di rasa che dà vita.',
 translationSrc:'Resa italiana della traduzione inglese del libro Mādhurya-kādambinī (Pure Bhakti, Gaudiya Vedanta Publications, commento Pīyūṣa-varṣiṇī-vṛtti di Bhaktivedānta Nārāyaṇa Gosvāmī Mahārāja). Il testo inglese l’ho letto tramite un’estrazione automatica del PDF: da ricontrollare sul libro.',
 words:[
  {k:'hṛd-vapre',mean:'nel campo del cuore',info:'composto · saptamī ekavacana = locativo singolare',parts:[['hṛd','(n.) cuore (hṛt, davanti a v)'],['vapra','(m./n.) campo, argine: nel senso del libro, «campo»']]},
  {k:'nava-bhakti-śasya-vitateḥ',mean:'della distesa di raccolti della bhakti nuova / dai nove membri',info:'composto · ṣaṣṭhī ekavacana = genitivo singolare. Il libro parla di «nove membri della bhakti appena seminati»: nava può dunque valere «nuovo» e «nove»',parts:[['nava','nuovo; nove'],['bhakti','(f.) devozione amorevole'],['śasya','(n.) raccolto, messe'],['vitati','(f.) distesa, moltitudine']]},
  {k:'sañjīvanī',mean:'che dà piena vita',info:'tema sañjīvanī (f.) · prathamā ekavacana = nominativo singolare, concorda con kādambinī · prefisso sam + radice jīv: vivere'},
  {k:'sva-āgama-ārambhe',mean:'già al primo apparire di essa',info:'composto · saptamī ekavacana = locativo singolare',parts:[['sva','proprio, suo'],['āgama','(m.) venuta, arrivo'],['ārambha','(m.) inizio']]},
  {k:'kāma-tapa-ṛtu-dāha-damanī',mean:'che doma la bruciatura della stagione calda dei desideri',info:'composto · prathamā ekavacana = nominativo singolare (f.). Per il libro: i desideri materiali di godimento personale sono la «stagione estiva»',parts:[['kāma','(m.) desiderio'],['tapa','(m.) calore'],['ṛtu','(m.) stagione'],['dāha','(m.) bruciatura'],['damanī','(f.) che doma, che placa']]},
  {k:'viśva-apagā-ullāsinī',mean:'che fa gioire i fiumi di tutto l’universo (i devoti)',info:'composto · prathamā ekavacana = nominativo singolare (f.). Nel libro: «fa gonfiare di gioia il cuore di tutti i devoti, come i fiumi con la pioggia»',parts:[['viśva','tutto, universo'],['apagā','(f.) fiume'],['ullāsinī','(f.) che fa gioire, che fa gonfiare']]},
  {k:'dūrāt',mean:'da lontano',info:'indeclinabile (ablativo di dūra)'},
  {k:'me',mean:'a me, per me',info:'pronome asmad · genitivo o dativo singolare (qui letto come «a me»)'},
  {k:'maru-śākhinaḥ',mean:'dell’albero del deserto',info:'composto · ṣaṣṭhī ekavacana = genitivo singolare',parts:[['maru','(m.) deserto'],['śākhin','(m.) albero, «che ha rami»']]},
  {k:'api',mean:'anche (pur essendo così secco)',info:'indeclinabile'},
  {k:'sarasī-bhāvāya',mean:'perché (io) diventi pieno di rasa',info:'composto · caturthī ekavacana = dativo singolare. Dubbio mio: sarasī (f.) è «stagno, lago»; il senso «ricco di rasa» viene dalla traduzione del libro',parts:[['sarasī','(f.) stagno, lago'],['bhāva','(m.) stato, condizione']]},
  {k:'bhūyāt',mean:'possa essere, possa diventare',info:'verbo, benedittivo (āśīrliṅ) 3ª singolare · radice bhū: essere, diventare'},
  {k:'prabhu-śrī-caitanya-kṛpā',mean:'la misericordia di Śrī Caitanya Mahāprabhu',info:'composto · prathamā ekavacana = nominativo singolare (f.). Nel libro è stampato «prabhuśrī-caitanya»; qui prabhu e śrī sono separati (mia lettura)',parts:[['prabhu','(m.) signore'],['śrī-caitanya','Śrī Caitanya'],['kṛpā','(f.) misericordia']]},
  {k:'niraṅkuśa',mean:'senza freni, incontrollabile',info:'aggettivo, concorda con kādambinī',parts:[['nis-','senza'],['aṅkuśa','(m.) pungolo (per l’elefante)']]},
  {k:'mahā-mādhurya-kādambinī',mean:'banco di nuvole di grande dolcezza',info:'composto · prathamā ekavacana = nominativo singolare (f.)',parts:[['mahā','grande'],['mādhurya','(n.) dolcezza'],['kādambinī','(f.) banco di nuvole']]}
 ],
 surf:[
  [{t:'hṛd-vapre',e:[0]},{t:'nava-bhakti-śasya-vitateḥ',e:[1]},{t:'sañjīvanī',e:[2]},{t:'svāgamā-',e:[3]}],
  [{t:'-rambhe',e:[3]},{t:'kāma-tapartu-dāha-damanī',e:[4]},{t:'viśvāpagollāsinī',e:[5]}],
  [{t:'dūrān',e:[6]},{t:'me',e:[7]},{t:'maru-śākhino',e:[8]},{t:'’pi',e:[9]},{t:'sarasī-bhāvāya',e:[10]},{t:'bhūyāt',e:[11]},{t:'prabhu-',e:[12]}],
  [{t:'śrī-caitanya-kṛpā-',e:[12]},{t:'niraṅkuśa-',e:[13]},{t:'mahā-mādhurya-kādambinī',e:[14]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  45:{txt:'ṛ-dvaye ar',tr:'Quando a-dvaya è seguito da ṛ-dvaya, si uniscono e diventano ar.',ex:'Esempio: kṛṣṇa + ṛddhiḥ → kṛṣṇarddhiḥ'},
  56:{txt:'e-obhyām asya haro viṣṇupadānte',tr:'A-rāma (a) cade quando viene dopo una e o una o che sta a fine di viṣṇupada.',ex:'Esempio: hare + atra → hare ’tra'},
  61:{txt:'viṣṇudāso viṣṇupadānte harighoṣe ca harigadā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa harigadā; se non è a fine di viṣṇupada, lo diventa solo se segue un harighoṣa.',ex:'Esempio: bhagavat + icchā → bhagavad-icchā',note:'La sostituzione è quella più simile per luogo di pronuncia (sthāne sadṛśatamaḥ).'},
  62:{txt:'hariveṇau hariveṇur vā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa, a scelta, hariveṇu quando segue un hariveṇu.',ex:'Esempio: jagat + nāthaḥ → jagan-nāthaḥ oppure (61) jagad-nāthaḥ'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'}
 },
 sandhi:[
  {a:'hṛt',b:'vapre',r:'hṛd-vapre',sut:[61],note:'t finale diventa d davanti a v (harimitra).'},
  {a:'sam',b:'jīvanī',r:'sañjīvanī',sut:[72,73],note:'Prima m → ṁ (72), poi ṁ → ñ, l’hariveṇu del ca-varga a cui appartiene j (73). I sūtra parlano di fine di viṣṇupada: qui sam è un prefisso, quindi l’applicazione è una mia lettura, da verificare.'},
  {a:'sva-āgama',b:'ārambhe',r:'svāgamārambhe',sut:[42],note:'Due volte: sva + āgama → svāgama e āgama + ārambhe → āgamārambhe. La parola attraversa il confine fra il pāda 1 e il pāda 2 (svāgamā- | -rambhe).'},
  {a:'tapa',b:'ṛtu',r:'tapartu',sut:[45]},
  {a:'viśva',b:'apagā',r:'viśvāpagā',sut:[42]},
  {a:'viśvāpagā',b:'ullāsinī',r:'viśvāpagollāsinī',sut:[44]},
  {a:'dūrāt',b:'me',r:'dūrān me',sut:[62],note:'La scelta è facoltativa: l’altra forma è dūrād me (61).'},
  {a:'śākhinaḥ',b:'api',r:'śākhino ’pi',sut:[80,44,56],note:'ḥ → u (80), a + u → o (44), poi la a di api cade (56). Stessa catena di namo ’nanta.'},
  {a:'mahā',b:'mādhurya',r:'mahā-mādhurya',sut:[42]}
 ],
 seg:[
  [{t:'hṛd',s:[1]},{t:'-vapre nava-bhakti-śasya-vitateḥ '},{t:'sañ',s:[2]},{t:'jīvanī '},{t:'svāgamā',s:[3]}],
  [{t:'rambhe',s:[3]},{t:' kāma-'},{t:'tapartu',s:[4]},{t:'-dāha-damanī '},{t:'viśvāpagollāsinī',s:[5,6]}],
  [{t:'dūrān me',s:[7]},{t:' maru-'},{t:'śākhino ’pi',s:[8]},{t:' sarasī-bhāvāya bhūyāt prabhu'}],
  [{t:'śrī-caitanya-kṛpā-niraṅkuśa-'},{t:'mahā-mādhurya',s:[9]},{t:'-kādambinī'}]
 ],
 metrica:{
  name:'Śārdūla-vikrīḍita',
  syl:19,
  gana:'ma · sa · ja · sa · ta · ta · ga',
  yati:'dopo la 12ª sillaba',
  lakshana:'sūryāśvair yadi masajasatatagāḥ śārdūlavikrīḍitam',
  scan:['GGGLLGLGLLLGGGLGGLG','GGGLLGLGLLLGGGLGGLG','GGGLLGLGLLLGGGLGGLL','GGGLLGLGLLLGGGLGGLG'],
  note:'Nel pāda 3 l’ultima sillaba (bhu) è breve: a fine pāda si conta lunga [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Il verso apre il libro, nel Maṅgalācaraṇa (invocazione iniziale), prima della Prima Pioggia «Preminenza della bhakti». Il libro ha otto piogge (vṛṣṭi) e, nell’edizione inglese consultata, è accompagnato dal commento Pīyūṣa-varṣiṇī-vṛtti di Bhaktivedānta Nārāyaṇa Gosvāmī Mahārāja.'},
  {v:false,t:'A parlare è l’autore stesso, che prega Śrī Caitanya Mahāprabhu: chiede che la Sua misericordia, paragonata a un banco di nuvole monsoniche, riempia di vita il proprio cuore, paragonato a un albero secco nel deserto. Nel verso la nuvola è la misericordia, il campo è il cuore del sādhaka, i raccolti sono i nove membri della bhakti.'},
  {v:false,t:'L’autore del libro è tradizionalmente indicato in Viśvanātha Cakravartī Ṭhākura [mia conoscenza generale, da verificare].'}
 ],
 note:'Nel libro il testo è stampato «prabhuśrī-caitanya…»: qui prabhu e śrī sono separati, perché il pāda 3 finisce con prabhu e il pāda 4 comincia con śrī (19 sillabe ciascuno). Anche la divisione in quattro pāda è mia: nel libro il verso è stampato di seguito.',
 sources:[
  'Testo del verso e traduzione inglese: Mādhurya-kādambinī, edizione inglese Pure Bhakti, https://www.purebhakti.com/resources/ebooks-magazines/bhakti-books/english/636-madhurya-kadambini-1/file (nel libro non ci sono synonyms)',
  'Sūtra 42, 44, 45, 56, 61, 62, 72, 73 e 80: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto)',
  'Devanāgarī: ricavata da me dal testo in caratteri latini del libro, che non la riporta.',
  'Parola per parola, genere, caso, composti, nome del metro e lakṣaṇa: conoscenza generale, da verificare.'
 ]
});
/* ----- fine Mādhurya-kādambinī 1 ----- */
/* ----- Arcana-dīpikā · mantra-hīnaṁ ----- */
DATA.push({
 id:'arcana-dipika-mantra-hinam',
 label:'Hari-bhakti-vilāsa 8.427 · mantra-hīnaṁ',
 src:'Hari-bhakti-vilāsa 8.427',
 sub:'anuṣṭubh (śloka) · 8 sillabe per pāda',
 padas:[
  {iast:'mantra-hīnaṁ kriyā-hīnaṁ', dev:'मन्त्रहीनं क्रियाहीनं'},
  {iast:'bhakti-hīnaṁ janārdana', dev:'भक्तिहीनं जनार्दन ।'},
  {iast:'yat pūjitaṁ mayā deva', dev:'यत्पूजितं मया देव'},
  {iast:'paripūrṇaṁ tad astu me', dev:'परिपूर्णं तदस्तु मे ॥४२७॥'}
 ],
 translation:'Privo di mantra, privo di azione rituale, privo di devozione, o Janārdana: qualunque adorazione io abbia offerto, o Signore, sia resa completa per me.',
 translationSrc:'Traduzione italiana fornita da te in chat. Non l’ho verificata su una traduzione inglese.',
 words:[
  {k:'mantra-hīnam',mean:'privo di mantra',info:'composto · prathamā/dvitīyā ekavacana = nominativo/accusativo singolare (n.); concorda con pūjitam',parts:[['mantra','(m.) mantra, formula sacra'],['hīna','(agg.) privo, mancante (dalla radice hā: lasciare, abbandonare)']]},
  {k:'kriyā-hīnam',mean:'privo di azione rituale',info:'composto · prathamā/dvitīyā ekavacana = nominativo/accusativo singolare (n.); concorda con pūjitam',parts:[['kriyā','(f.) azione, atto rituale (dalla radice kṛ: fare)'],['hīna','(agg.) privo, mancante']]},
  {k:'bhakti-hīnam',mean:'privo di devozione',info:'composto · prathamā/dvitīyā ekavacana = nominativo/accusativo singolare (n.); concorda con pūjitam',parts:[['bhakti','(f.) devozione amorevole'],['hīna','(agg.) privo, mancante']]},
  {k:'janārdana',mean:'o Janārdana',info:'tema janārdana (m.) · sambodhana ekavacana = vocativo singolare · nome di Bhagavān'},
  {k:'yat',mean:'ciò che, qualunque cosa',info:'pronome relativo yad (n.) · prathamā ekavacana = nominativo singolare; correlativo di tat'},
  {k:'pūjitam',mean:'adorato, offerto in adorazione',info:'participio passato · radice pūj: adorare, venerare · tema pūjita (n.) · prathamā ekavacana = nominativo singolare'},
  {k:'mayā',mean:'da me',info:'pronome asmad · tṛtīyā ekavacana = strumentale singolare'},
  {k:'deva',mean:'o Signore',info:'tema deva (m.): dio, signore · sambodhana ekavacana = vocativo singolare'},
  {k:'paripūrṇam',mean:'completo, pieno',info:'composto · tema paripūrṇa (n.) · prathamā ekavacana = nominativo singolare; è il predicato di pūjitam',parts:[['pari','prefisso: tutto intorno, interamente'],['pūrṇa','(agg.) pieno (dalla radice pṝ: riempire)']]},
  {k:'tat',mean:'quello',info:'pronome tad (n.) · prathamā ekavacana = nominativo singolare; riprende yat'},
  {k:'astu',mean:'sia',info:'verbo, imperativo (loṭ) 3ª singolare · radice as: essere'},
  {k:'me',mean:'a me, per me',info:'pronome asmad · caturthī o ṣaṣṭhī ekavacana = dativo o genitivo singolare (qui letto «per me»)'}
 ],
 surf:[
  [{t:'mantra-hīnaṁ',e:[0]},{t:'kriyā-hīnaṁ',e:[1]}],
  [{t:'bhakti-hīnaṁ',e:[2]},{t:'janārdana',e:[3]}],
  [{t:'yat',e:[4]},{t:'pūjitaṁ',e:[5]},{t:'mayā',e:[6]},{t:'deva',e:[7]}],
  [{t:'paripūrṇaṁ',e:[8]},{t:'tad',e:[9]},{t:'astu',e:[10]},{t:'me',e:[11]}]
 ],
 sutra:{
  61:{txt:'viṣṇudāso viṣṇupadānte harighoṣe ca harigadā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa harigadā; se non è a fine di viṣṇupada, lo diventa solo se segue un harighoṣa.',ex:'Esempio: bhagavat + icchā → bhagavad-icchā',note:'La sostituzione è quella più simile per luogo di pronuncia (sthāne sadṛśatamaḥ).'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'}
 },
 sandhi:[
  {a:'hīnam',b:'kriyā-',r:'hīnaṁ kriyā-',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche assimilarsi alla consonante seguente (hīnaṅ kriyā-, hīnam bhakti-, hīnañ janārdana, paripūrṇan tat): è facoltativo, e nel verso c’è sempre ṁ. Lo stesso vale per i sandhi 2, 3, 4 e 5.'},
  {a:'hīnam',b:'bhakti-',r:'hīnaṁ bhakti-',sut:[72],note:'La parola attraversa il confine fra il pāda 1 e il pāda 2.'},
  {a:'hīnam',b:'janārdana',r:'hīnaṁ janārdana',sut:[72]},
  {a:'pūjitam',b:'mayā',r:'pūjitaṁ mayā',sut:[72]},
  {a:'paripūrṇam',b:'tat',r:'paripūrṇaṁ tat',sut:[72]},
  {a:'tat',b:'astu',r:'tad astu',sut:[61],note:'t finale diventa d prima di una vocale (harigadā, 61), come in bhagavad-icchā.'}
 ],
 seg:[
  [{t:'mantra-hīna'},{t:'ṁ',s:[1]},{t:' kriyā-hīna'},{t:'ṁ',s:[2]}],
  [{t:'bhakti-hīna'},{t:'ṁ',s:[3]},{t:' janārdana'}],
  [{t:'yat pūjita'},{t:'ṁ',s:[4]},{t:' mayā deva'}],
  [{t:'paripūrṇa'},{t:'ṁ',s:[5]},{t:' ta'},{t:'d',s:[6]},{t:' astu me'}]
 ],
 metrica:{
  name:'Anuṣṭubh (śloka)',
  syl:8,
  gana:'nessuno schema fisso di gaṇa: nel pāda di 8 sillabe contano soprattutto la 5ª, la 6ª e la 7ª',
  yati:'nessuna pausa fissa',
  lakshana:'śloke ṣaṣṭhaṁ guru jñeyaṁ sarvatra laghu pañcamam / dvi-catuḥ-pādayor hrasvaṁ saptamaṁ dīrghamanyayoḥ',
  sylNote:'contate da me sul testo: 4 × 8 = 32',
  yatiNote:'Non ho dati affidabili su una cesura fissa nell’anuṣṭubh',
  scan:['GLGGLGGG','GLGGLGLL','GGLGLGGL','LLGGLGLG'],
  note:'Secondo il lakṣaṇa citato: 5ª sillaba breve, 6ª lunga, 7ª lunga nei pāda 1 e 3 e breve nei pāda 2 e 4. In tutti e quattro i pāda la regola è rispettata. Ricorda che e e o sono sempre lunghe (de, me). L’ultima sillaba di ogni pāda si conta lunga anche se è breve [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Dove si trova: Hari-bhakti-vilāsa 8.427, nel capitolo 8, intitolato nel testo di wisdomlib «Prātararcāsamāpana-vilāsa» (in italiano, la conclusione dell’adorazione del mattino: resa mia del titolo, da verificare). Il verso è preceduto dalla parola «āgame» (nell’Āgama): l’Hari-bhakti-vilāsa lo cita quindi da un Āgama, senza indicare quale. La stessa attribuzione, «Āgama-śāstra; cited in Hari-bhakti-vilāsa 8.427», è sulla pagina di anusilana.in dedicata al verso.'},
  {v:true,t:'Che cosa precede: il verso 8.426 dice, in resa mia dal sanscrito (da verificare): «Avendo meditato che tutto è stato offerto e accettato dal Signore, lodandolo ancora per quanto si è capaci e inchinandosi, si preghi così». Il verso 427 è la prima di queste preghiere.'},
  {v:true,t:'Che cosa segue: il verso 8.428 comincia con «kiṁ ca» (inoltre): «yad dattaṁ bhakti-mātreṇa patraṁ puṣpaṁ phalaṁ jalam / āveditaṁ nivedyaṁ tu tad gṛhāṇānukampayā», in resa mia: «ciò che è stato dato con la sola devozione, foglia, fiore, frutto o acqua, e offerto come cibo: accettalo con compassione». Più avanti, a 8.438, il testo introduce le preghiere per farsi perdonare le offese (vedi il verso successivo della raccolta, aparādha-sahasrāṇi, 8.439).'},
  {v:false,t:'Chi parla: chi ha appena compiuto l’adorazione, in prima persona; si rivolge a Janārdana. Il testo non dà un nome. È una lettura mia, da verificare.'}
 ],
 note:'Il testo del verso è quello di Hari-bhakti-vilāsa 8.427 (wisdomlib) e coincide con quello che mi avevi dato: «mantra-hīnaṁ kriyā-hīnaṁ bhakti-hīnaṁ janārdana / yat pūjitaṁ mayā deva paripūrṇaṁ tad astu me». La divisione in quattro pāda da otto sillabe è mia (due righe da sedici sillabe). La devanāgarī l’ho ricavata io dall’IAST, ma coincide con quella di wisdomlib a parte la separazione delle parole. Il composto non è analizzato nella fonte: il parola per parola è mio, da verificare.',
 sources:[
  'Origine e testo del verso: Hari-bhakti-vilāsa 8.427, https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc500255.html (con «āgame» davanti). Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Contesto, versi 8.426 e 8.428: https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc500254.html e /doc500256.html. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Attribuzione all’Āgama-śāstra: https://anusilana.in/mantra-hinam-kriya-hinam-bhakti-hinam-janardana/ (pagina web: da ricontrollare).',
  'Traduzione italiana: fornita da te in chat. Non l’ho verificata su una traduzione inglese.',
  'Sūtra 61, 72 e 73: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Parola per parola, genere, caso, composti, scansione, nome del metro e lakṣaṇa: conoscenza generale, da verificare. Śrī Ślokāmṛta-bindu: il verso non compare.'
 ]
});
/* ----- fine Arcana-dīpikā · mantra-hīnaṁ ----- */

/* ----- Arcana-dīpikā · aparādha-sahasrāṇi ----- */
DATA.push({
 id:'arcana-dipika-aparadha-sahasrani',
 label:'Hari-bhakti-vilāsa 8.439 · aparādha-sahasrāṇi',
 src:'Hari-bhakti-vilāsa 8.439',
 sub:'anuṣṭubh (śloka) · 8 sillabe per pāda',
 padas:[
  {iast:'aparādha-sahasrāṇi', dev:'अपराधसहस्राणि'},
  {iast:'kriyante ’har-niśaṁ mayā', dev:'क्रियन्तेऽहर्निशं मया ।'},
  {iast:'dāso ’ham iti māṁ matvā', dev:'दासोऽहमिति मां मत्वा'},
  {iast:'kṣamasva madhusūdana', dev:'क्षमस्व मधुसूदन ॥४३९॥'}
 ],
 translation:'Mille offese vengono commesse da me giorno e notte; considerandomi tuo servitore, perdonami, o Madhusūdana.',
 translationSrc:'Traduzione italiana fornita da te in chat. Non l’ho verificata su una traduzione inglese.',
 words:[
  {k:'aparādha-sahasrāṇi',mean:'mille offese',info:'composto · prathamā bahuvacana = nominativo plurale (n.); soggetto di kriyante',parts:[['aparādha','(m.) offesa, colpa'],['sahasra','(n.) mille']]},
  {k:'kriyante',mean:'vengono commesse (fatte)',info:'verbo, presente (laṭ), passivo, 3ª plurale · radice kṛ: fare'},
  {k:'ahar-niśam',mean:'giorno e notte',info:'composto con valore avverbiale (indeclinabile). Non ho dati affidabili per scomporlo e analizzarne la forma finale: lo lascio intero.'},
  {k:'mayā',mean:'da me',info:'pronome asmad · tṛtīyā ekavacana = strumentale singolare'},
  {k:'dāsaḥ',mean:'servitore',info:'tema dāsa (m.) · prathamā ekavacana = nominativo singolare. «Tuo» è sottinteso nel verso.'},
  {k:'aham',mean:'io',info:'pronome asmad · prathamā ekavacana = nominativo singolare'},
  {k:'iti',mean:'così (chiude il pensiero «sono servitore»)',info:'indeclinabile'},
  {k:'mām',mean:'me',info:'pronome asmad · dvitīyā ekavacana = accusativo singolare'},
  {k:'matvā',mean:'considerando, ritenendo',info:'gerundio (ktvā), indeclinabile · radice man: pensare, considerare'},
  {k:'kṣamasva',mean:'perdona',info:'verbo, imperativo (loṭ) 2ª singolare · radice kṣam: perdonare, sopportare'},
  {k:'madhusūdana',mean:'o Madhusūdana',info:'tema madhusūdana (m.) · sambodhana ekavacana = vocativo singolare · nome di Bhagavān'}
 ],
 surf:[
  [{t:'aparādha-sahasrāṇi',e:[0]}],
  [{t:'kriyante',e:[1]},{t:'’har-niśaṁ',e:[2]},{t:'mayā',e:[3]}],
  [{t:'dāso',e:[4]},{t:'’ham',e:[5]},{t:'iti',e:[6]},{t:'māṁ',e:[7]},{t:'matvā',e:[8]}],
  [{t:'kṣamasva',e:[9]},{t:'madhusūdana',e:[10]}]
 ],
 sutra:{
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  56:{txt:'e-obhyām asya haro viṣṇupadānte',tr:'A-rāma (a) cade quando viene dopo una e o una o che sta a fine di viṣṇupada.',ex:'Esempio: hare + atra → hare ’tra'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'}
 },
 sandhi:[
  {a:'kriyante',b:'ahar-',r:'kriyante ’har-',sut:[56],note:'La a iniziale di ahar cade dopo la e finale di kriyante; l’apostrofo (avagraha) segna la a caduta.'},
  {a:'niśam',b:'mayā',r:'niśaṁ mayā',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare la nasale del varga seguente (qui m): è facoltativo, e nel verso c’è ṁ.'},
  {a:'dāsaḥ',b:'aham',r:'dāso ’ham',sut:[80,44,56],note:'ḥ → u (80), a + u → o (44), poi la a di aham cade (56).'},
  {a:'mām',b:'matvā',r:'māṁ matvā',sut:[72]}
 ],
 seg:[
  [{t:'aparādha-sahasrāṇi'}],
  [{t:'kriyante ’har',s:[1]},{t:'-niśa'},{t:'ṁ',s:[2]},{t:' mayā'}],
  [{t:'dāso ’ham',s:[3]},{t:' iti mā'},{t:'ṁ',s:[4]},{t:' matvā'}],
  [{t:'kṣamasva madhusūdana'}]
 ],
 metrica:{
  name:'Anuṣṭubh (śloka)',
  syl:8,
  gana:'nessuno schema fisso di gaṇa: nel pāda di 8 sillabe contano soprattutto la 5ª, la 6ª e la 7ª',
  yati:'nessuna pausa fissa',
  lakshana:'śloke ṣaṣṭhaṁ guru jñeyaṁ sarvatra laghu pañcamam / dvi-catuḥ-pādayor hrasvaṁ saptamaṁ dīrghamanyayoḥ',
  sylNote:'contate da me sul testo: 4 × 8 = 32',
  yatiNote:'Non ho dati affidabili su una cesura fissa nell’anuṣṭubh',
  scan:['LLGLLGGL','LGGGLGLG','GGLLLGGG','LGLLLGLL'],
  note:'Secondo il lakṣaṇa citato: 5ª sillaba breve, 6ª lunga, 7ª lunga nei pāda 1 e 3 e breve nei pāda 2 e 4. In tutti e quattro i pāda la regola è rispettata. Ricorda che e e o sono sempre lunghe (te, so). L’ultima sillaba di ogni pāda si conta lunga anche se è breve [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Dove si trova: Hari-bhakti-vilāsa 8.439, nello stesso capitolo 8 («Prātararcāsamāpana-vilāsa», nel testo di wisdomlib). Il verso è introdotto da «tathā hi» (così infatti). Non è indicata una fonte più antica.'},
  {v:true,t:'Che cosa precede: il verso 8.438 dice, in resa mia dal sanscrito (da verificare): «Poi si faccia perdonare le offese a Śrī Kṛṣṇa, che è per natura clemente, recitando con tono supplichevole (sakāku) eccellenti versi tradizionali». Il verso 439 è uno di questi versi.'},
  {v:true,t:'Che cosa segue: il verso 8.440 comincia con «kiṁ ca» (inoltre): «pratijñā tava govinda na me bhaktaḥ praṇaśyati / iti saṁsmṛtya saṁsmṛtya prāṇān saṁdhārayāmy aham», in resa mia: «O Govinda, la Tua promessa è che il Mio devoto non perisce: ricordandola sempre, io sostengo la mia vita».'},
  {v:false,t:'Chi parla: l’adoratore, in prima persona, si rivolge a Madhusūdana, riconosce di commettere mille offese giorno e notte e chiede perdono presentandosi come suo servitore. Il testo non dà un nome. È una lettura mia, da verificare.'}
 ],
 note:'Il testo del verso è quello di Hari-bhakti-vilāsa 8.439 (wisdomlib) e coincide con quello che mi avevi dato. La divisione in quattro pāda da otto sillabe è mia (due righe da sedici sillabe). La devanāgarī l’ho ricavata io dall’IAST: la fonte scrive «दासो ऽहम्» con uno spazio. Il composto ahar-niśam non è stato analizzato.',
 sources:[
  'Origine e testo del verso: Hari-bhakti-vilāsa 8.439, https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc500267.html (con «tathā hi» davanti). Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Contesto, versi 8.438 e 8.440: https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc500266.html e /doc500268.html. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Traduzione italiana: fornita da te in chat. Non l’ho verificata su una traduzione inglese.',
  'Sūtra 44, 56, 72, 73 e 80: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Parola per parola, genere, caso, composti, scansione, nome del metro e lakṣaṇa: conoscenza generale, da verificare. Śrī Ślokāmṛta-bindu: il verso non compare.'
 ]
});
/* ----- fine Arcana-dīpikā · aparādha-sahasrāṇi ----- */
/* ----- Śrīmad-Bhāgavatam 11.9.29 ----- */
DATA.push({
 id:'sb-11-9-29',
 label:'Śrīmad-Bhāgavatam 11.9.29',
 src:'Śrīmad-Bhāgavatam 11.9.29',
 sub:'vasantatilakā · 14 sillabe per pāda',
 padas:[
  {iast:'labdhvā su-durlabham idaṁ bahu-sambhavānte', dev:'लब्ध्वा सुदुर्लभमिदं बहुसम्भवान्ते'},
  {iast:'mānuṣyam artha-dam anityam apīha dhīraḥ', dev:'मानुष्यमर्थदमनित्यमपीह धीरः ।'},
  {iast:'tūrṇaṁ yateta na pated anu-mṛtyu yāvan', dev:'तूर्णं यतेत न पतेदनुमृत्यु यावन्'},
  {iast:'niḥśreyasāya viṣayaḥ khalu sarvataḥ syāt', dev:'निःश्रेयसाय विषयः खलु सर्वतः स्यात् ॥२९॥'}
 ],
 translation:'Dopo molte nascite e morti si ottiene la rara forma di vita umana che, benché temporanea, dà l’opportunità di raggiungere la più alta perfezione. Perciò un essere umano equilibrato dovrebbe sforzarsi subito per la perfezione ultima della vita, finché il suo corpo, sempre soggetto alla morte, non è caduto e morto. Dopotutto, il godimento dei sensi è disponibile anche nelle specie più abominevoli, mentre la coscienza di Kṛṣṇa è possibile solo per un essere umano.',
 translationSrc:'Resa italiana mia della traduzione inglese di Śrīmad-Bhāgavatam 11.9.29 su Vedabase (https://vedabase.io/en/library/sb/11/9/29/). Letta tramite estrazione automatica della pagina: da ricontrollare sul sito.',
 words:[
  {k:'labdhvā',mean:'avendo ottenuto',info:'gerundio (ktvā), indeclinabile · radice labh: ottenere'},
  {k:'su-durlabham',mean:'molto difficile da ottenere',info:'composto · dvitīyā ekavacana = accusativo singolare (n.); concorda con mānuṣyam',parts:[['su','molto, assai'],['durlabha','(agg.) difficile da ottenere (dur- difficile + labha, dalla radice labh: ottenere)']]},
  {k:'idam',mean:'questa',info:'pronome idam (n.) · dvitīyā ekavacana = accusativo singolare; concorda con mānuṣyam'},
  {k:'bahu-sambhava-ante',mean:'dopo molte nascite',info:'composto · saptamī ekavacana = locativo singolare («alla fine di»)',parts:[['bahu','molto, molti'],['sambhava','(m.) nascita'],['anta','(m.) fine']]},
  {k:'mānuṣyam',mean:'forma di vita umana',info:'tema mānuṣya (n.) · dvitīyā ekavacana = accusativo singolare; è l’oggetto di labdhvā'},
  {k:'artha-dam',mean:'che concede grande valore',info:'composto · dvitīyā ekavacana = accusativo singolare (n.); concorda con mānuṣyam',parts:[['artha','(m.) scopo, valore'],['da','(agg.) che dà (dalla radice dā: dare)']]},
  {k:'anityam',mean:'non eterna',info:'composto · dvitīyā ekavacana = accusativo singolare (n.); concorda con mānuṣyam',parts:[['a-','non'],['nitya','(agg.) eterno']]},
  {k:'api',mean:'benché',info:'indeclinabile'},
  {k:'iha',mean:'in questo mondo materiale',info:'indeclinabile · «qui»; la precisazione «mondo materiale» è di Vedabase'},
  {k:'dhīraḥ',mean:'chi ha intelligenza equilibrata',info:'tema dhīra (m.) · prathamā ekavacana = nominativo singolare; soggetto di yateta'},
  {k:'tūrṇam',mean:'subito',info:'avverbio, indeclinabile'},
  {k:'yateta',mean:'dovrebbe sforzarsi',info:'verbo, potenziale (vidhiliṅ), ātmanepada 3ª singolare · radice yat: sforzarsi'},
  {k:'na',mean:'non',info:'indeclinabile'},
  {k:'patet',mean:'sia caduto (cada)',info:'verbo, potenziale (vidhiliṅ), parasmaipada 3ª singolare · radice pat: cadere. Vedabase lo glossa «has fallen»; na pated yāvat = «finché non sia caduto»'},
  {k:'anu-mṛtyu',mean:'sempre soggetto alla morte',info:'composto: il significato «sempre soggetto alla morte» è quello di Vedabase. Non ho dati affidabili per analizzarne caso e numero.',parts:[['anu','dietro, lungo'],['mṛtyu','(m.) morte']]},
  {k:'yāvat',mean:'finché',info:'indeclinabile · nel verso compare come yāvan (sandhi)'},
  {k:'niḥśreyasāya',mean:'per la perfezione ultima (liberazione)',info:'tema niḥśreyasa (n.) · caturthī ekavacana = dativo singolare (fine, scopo)'},
  {k:'viṣayaḥ',mean:'godimento dei sensi',info:'tema viṣaya (m.) · prathamā ekavacana = nominativo singolare; Vedabase: «sense gratification»'},
  {k:'khalu',mean:'sempre; dopotutto',info:'indeclinabile · nei synonyms di Vedabase «always», nella traduzione «After all»'},
  {k:'sarvataḥ',mean:'in ogni condizione',info:'indeclinabile · Vedabase: «in all conditions»'},
  {k:'syāt',mean:'è possibile',info:'verbo, potenziale (vidhiliṅ), 3ª singolare · radice as: essere'}
 ],
 surf:[
  [{t:'labdhvā',e:[0]},{t:'su-durlabham',e:[1]},{t:'idaṁ',e:[2]},{t:'bahu-sambhavānte',e:[3]}],
  [{t:'mānuṣyam',e:[4]},{t:'artha-dam',e:[5]},{t:'anityam',e:[6]},{t:'apīha',e:[7,8]},{t:'dhīraḥ',e:[9]}],
  [{t:'tūrṇaṁ',e:[10]},{t:'yateta',e:[11]},{t:'na',e:[12]},{t:'pated',e:[13]},{t:'anu-mṛtyu',e:[14]},{t:'yāvan',e:[15]}],
  [{t:'niḥśreyasāya',e:[16]},{t:'viṣayaḥ',e:[17]},{t:'khalu',e:[18]},{t:'sarvataḥ',e:[19]},{t:'syāt',e:[20]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā',note:'Dal vṛtti anche: hari hari + iti → hari harīti.'},
  61:{txt:'viṣṇudāso viṣṇupadānte harighoṣe ca harigadā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa harigadā; se non è a fine di viṣṇupada, lo diventa solo se segue un harighoṣa.',ex:'Esempio: bhagavat + icchā → bhagavad-icchā',note:'La sostituzione è quella più simile per luogo di pronuncia (sthāne sadṛśatamaḥ).'},
  62:{txt:'hariveṇau hariveṇur vā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa, a scelta, hariveṇu quando segue un hariveṇu.',ex:'Esempio: jagat + nāthaḥ → jagan-nāthaḥ oppure (61) jagad-nāthaḥ'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'}
 },
 sandhi:[
  {a:'idam',b:'bahu',r:'idaṁ bahu',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare la nasale del varga seguente (qui m: idam bahu, come kṛṣṇam bhajati): è facoltativo, e nel verso c’è ṁ.'},
  {a:'sambhava',b:'ante',r:'sambhavānte',sut:[42],note:'a + a → ā, alla fine del composto bahu-sambhava-ante.'},
  {a:'api',b:'iha',r:'apīha',sut:[42],note:'i + i → ī.'},
  {a:'tūrṇam',b:'yateta',r:'tūrṇaṁ yateta',sut:[72],note:'m → ṁ davanti a consonante (72). Il sūtra 73 non si applica: y è un harimitra (sūtra 24 del PDF), non un viṣṇuvarga (sūtra 17).'},
  {a:'patet',b:'anu',r:'pated anu',sut:[61],note:'t finale diventa d prima di una vocale (harigadā, 61), come in bhagavad-icchā.'},
  {a:'yāvat',b:'niḥśreyasāya',r:'yāvan niḥśreyasāya',sut:[62],note:'t → n davanti a n (hariveṇu, 62). L’altra forma, facoltativa, sarebbe yāvad (61). La parola yāvan chiude il pāda 3 e niḥśreyasāya apre il pāda 4: il sandhi passa sopra il confine fra i due pāda.'}
 ],
 seg:[
  [{t:'labdhvā su-durlabham '},{t:'idaṁ',s:[1]},{t:' bahu-sambhav'},{t:'ā',s:[2]},{t:'nte'}],
  [{t:'mānuṣyam artha-dam anityam ap'},{t:'ī',s:[3]},{t:'ha dhīraḥ'}],
  [{t:'tūrṇaṁ',s:[4]},{t:' yateta na '},{t:'pated',s:[5]},{t:' anu-mṛtyu yāva'},{t:'n',s:[6]}],
  [{t:'n',s:[6]},{t:'iḥśreyasāya viṣayaḥ khalu sarvataḥ syāt'}]
 ],
 metrica:{
  name:'Vasantatilakā',
  syl:14,
  sylNote:'contate da me sul testo: 4 × 14 = 56',
  gana:'ta · bha · ja · ja · ga · ga',
  yati:'nessuna pausa fissa',
  yatiNote:'Non ho dati affidabili su una cesura fissa nel Vasantatilakā',
  lakshana:'uktā vasantatilakā tabhajā jagau gaḥ',
  scan:['GGLGLLLGLLGLGG','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG'],
  note:'La m finale di una parola si conta unita alla vocale seguente (bha-mi-daṁ, mar-tha, ma-ni-tya-ma-pī-ha). Una vocale breve prima di un nesso di consonanti si conta lunga: per esempio lab di labdhvā, ni di anityam e mṛ di mṛtyu. L’ultima sillaba di ogni pāda (te, raḥ, van, syāt) è lunga. I quattro pāda hanno la stessa scansione [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Il verso è ŚB 11.9.29, nell’Undicesimo Canto. Nel capitolo 7 («Lord Kṛṣṇa Instructs Uddhava») Kṛṣṇa consiglia a Uddhava la rinuncia, perché il Signore sta per lasciare la terra prima che la corruzione del Kali-yuga si diffonda. Uddhava chiede una guida pratica e Kṛṣṇa gli racconta una storia antica: il dialogo fra il potente re Yadu e un avadhūta (11.7.24).'},
  {v:true,t:'Yadu vede un brāhmaṇa avadhūta, giovane e colto, che gira senza alcun timore (11.7.25), e lo interroga. Il brāhmaṇa risponde dicendo di aver preso rifugio in ventiquattro guru: terra, aria, cielo, acqua, fuoco, luna, sole, piccione, pitone, mare, falena, ape, elefante, ladro di miele, cervo, pesce, la prostituta Piṅgalā, l’uccello kurara, il bambino, la fanciulla, il fabbricante di frecce, il serpente, il ragno e la vespa (11.7.33-35). Il capitolo 8 si intitola «The Story of Piṅgalā» (Vedabase); non ne ho letto i singoli versi. Chi parla è sempre il brāhmaṇa: il capitolo 9 si apre con «śrī-brāhmaṇa uvāca» (11.9.1).'},
  {v:true,t:'Il capitolo 9 («Detachment from All that Is Material») riprende dai maestri rimasti. Il suo filo, secondo il riassunto di Vedabase, è che l’attaccamento porta sofferenza e il distacco felicità illimitata, con la solitudine, la mente fissa sul Signore e il giusto uso della rara forma umana. Il kurara: dei rapaci assalgono un rapace più debole che tiene un pezzo di carne, e quando lui lo lascia per salvarsi la vita prova vera felicità (9.2). Il bambino vive libero dalle ansie (9.3-4). La fanciulla con i braccialetti di conchiglia ne toglie finché ne resta uno per polso, per eliminare rumore e litigi (9.5-10). Il fabbricante di frecce è così assorbito da non accorgersi del re che passa (9.13). Il serpente non costruisce case e vive in quelle degli altri (9.15). Il ragno è l’immagine del Signore che crea e ritira l’universo come il ragno il proprio filo (9.16-21). La vespa e l’insetto che, pensando a lei per paura, ne raggiunge la condizione mostrano che si diventa ciò su cui si fissa la mente (9.22-23).'},
  {v:true,t:'Poi il brāhmaṇa annuncia che imparerà anche dal proprio corpo (9.24). Il corpo è un maestro perché insegna il distacco: è soggetto a nascita e distruzione, finisce sempre in dolore, e lui lo usa per conoscere ricordando che sarà consumato da altri (9.25). L’uomo attaccato al corpo accumula denaro con grande fatica per moglie, figli, case, animali, servitori e amici, tutto per il piacere del proprio corpo; e come un albero prima di morire produce il seme del successivo, il corpo che muore lascia il seme del prossimo nel karma accumulato, assicurando la continuità dell’esistenza materiale (9.26). I sensi tormentano l’anima condizionata come più mogli che tirano un uomo ciascuna verso il proprio interesse: la lingua vuole cibo, la sete bevande, e poi gli organi sessuali, il tatto, il ventre, le orecchie, l’olfatto e gli occhi chiedono ciascuno la sua soddisfazione (9.27).'},
  {v:true,t:'Qui arriva la svolta (9.28): il Signore aveva creato innumerevoli specie, alberi, rettili, animali, uccelli e serpenti, ma non era soddisfatto nel cuore; allora creò la vita umana, che dà un’intelligenza sufficiente a percepire la Verità Assoluta, e se ne compiacque. Il nostro verso (9.29) viene subito dopo. Subito dopo di esso (9.30) il brāhmaṇa conclude: così, nato in lui il distacco e illuminato dalla conoscenza realizzata, vaga per la terra libero da attaccamento e falso ego.'},
  {v:false,t:'Il filo del discorso, nella mia lettura: il corpo e i sensi trascinano l’anima in mille direzioni (9.27), eppure il Signore ha dato la forma umana proprio perché si possa vedere la Verità (9.28). Il verso 29 ne trae la conclusione: questa forma è rara e temporanea, quindi chi è lucido deve sforzarsi subito per la liberazione, finché il corpo non muore, perché il godimento dei sensi c’è in ogni specie mentre solo l’uomo può coltivare la coscienza di Kṛṣṇa. A dirlo è il brāhmaṇa a re Yadu, e Kṛṣṇa lo ripete a Uddhava.'}
 ],
 note:'Il testo del verso è quello che mi hai scritto in chat e coincide con Vedabase. La divisione in quattro pāda segue le quattro righe stampate. Nella devanāgarī di Vedabase la riga 3 finisce con «याव-» e la 4 comincia con «न्नि:»; qui ho separato yāvan e niḥśreyasāya. Ho scritto il visarga ः al posto dei due punti usati da Vedabase.',
 sources:[
  'Testo del verso, devanāgarī, parola per parola (synonyms) e traduzione inglese: Vedabase, https://vedabase.io/en/library/sb/11/9/29/. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Contesto: Vedabase, capitolo 7 (https://vedabase.io/en/library/sb/11/7/, versi 24, 25, 33-35), capitolo 8 (https://vedabase.io/en/library/sb/11/8/) e capitolo 9 (https://vedabase.io/en/library/sb/11/9/ e versi 1, 2, 24, 25, 26, 27, 28, 30). Letto tramite estrazione automatica: i versi 3-23 del capitolo 9 sono dal riassunto del capitolo, da ricontrollare.',
  'Sūtra 17, 24, 42, 61, 62, 72 e 73: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Parola per parola in italiano, genere, caso, composti, scansione, nome del metro e lakṣaṇa: conoscenza generale, da verificare. Śrī Ślokāmṛta-bindu non consultato: non è nei documenti del progetto.'
 ]
});
/* ----- fine Śrīmad-Bhāgavatam 11.9.29 ----- */
/* ----- Śrīmad-Bhāgavatam 10.90.48 ----- */
DATA.push({
 id:'sb-10-90-48',
 label:'Śrīmad-Bhāgavatam 10.90.48',
 src:'Śrīmad-Bhāgavatam 10.90.48',
 sub:'mālinī · 15 sillabe per pāda',
 padas:[
  {iast:'jayati jana-nivāso devakī-janma-vādo', dev:'जयति जननिवासो देवकीजन्मवादो'},
  {iast:'yadu-vara-pariṣat svair dorbhir asyann adharmam', dev:'यदुवरपरिषत्स्वैर्दोर्भिरस्यन्नधर्मम् ।'},
  {iast:'sthira-cara-vṛjina-ghnaḥ su-smita-śrī-mukhena', dev:'स्थिरचरवृजिनघ्नः सुस्मितश्रीमुखेन'},
  {iast:'vraja-pura-vanitānāṁ vardhayan kāma-devam', dev:'व्रजपुरवनितानां वर्धयन् कामदेवम् ॥४८॥'}
 ],
 translation:'Dimorando nel cuore di tutti gli esseri viventi, Egli è noto come il figlio di Devakī. Con le Sue [potenti] braccia, nella forma dei membri della dinastia Yadu come Arjuna e Bhīma, uccide tutti i demoni ed elimina l’irreligione; con il Suo bel volto sorridente distrugge tutte le calamità dell’esistenza materiale per tutti gli esseri, mobili e inerti, e accresce i desideri amorosi delle mungitrici di Vraja. Che ci sia piena vittoria per Lui!',
 translationSrc:'Resa italiana mia della traduzione inglese dello Śrī Ślokāmṛta-bindu, p. 24 (PDF del progetto «Slokamrta bindhu 1.pdf»). Letta tramite estrazione automatica del PDF: da ricontrollare sul libro.',
 words:[
  {k:'jayati',mean:'sia gloria e vittoria (a Lui)',info:'verbo, 3ª singolare · radice ji: vincere, essere glorioso. Ślokāmṛta-bindu: «let there be glorification and victory»; Vedabase: «eternally lives gloriously». Il Saṁśodhinī al sūtra 402 del Hari-nāmāmṛta-vyākaraṇam cita proprio questo verso come esempio di jayati con senso di augurio (āśīḥ): forma di vidhātā, ji + tu[p] → ti.'},
  {k:'jana-nivāsaḥ',mean:'chi dimora fra i pastori di Vraja, oppure fra i membri della dinastia Yadu, oppure Paramātmā di tutti gli esseri viventi',info:'composto · prathamā ekavacana = nominativo singolare (m.). Significati dello Ślokāmṛta-bindu; Vedabase: «ultimate resort of living entities». Analisi grammaticale: mia conoscenza generale, da verificare.',parts:[['jana','(m.) persona, essere vivente, gente'],['nivāsa','(m.) dimora; chi vi abita']]},
  {k:'devakī-janma-vādaḥ',mean:'che è noto come il figlio di Devakī',info:'composto · prathamā ekavacana = nominativo singolare (m.). Ślokāmṛta-bindu: «who is known as the son of Devakī»; Vedabase: «known as son of Devakī». Analisi grammaticale: mia conoscenza generale, da verificare.',parts:[['devakī','(f.) Devakī'],['janman','(n.) nascita'],['vāda','(m.) discorso, dichiarazione']]},
  {k:'yadu-vara-pariṣat',mean:'i migliori della dinastia Yadu, oppure i pastori di Vṛndāvana',info:'composto. Significato dello Ślokāmṛta-bindu; Vedabase: «served by Yadu dynasty». Non ho dati affidabili per analizzarne caso e numero. Nel verso è legato a svaiḥ dorbhiḥ (le «braccia»).',parts:[['yadu','(m.) Yadu, la dinastia'],['vara','(agg.) migliore, eccellente'],['pariṣad','(f.) assemblea, seguito']]},
  {k:'svaiḥ dorbhiḥ',mean:'con le Sue braccia [o con i Suoi devoti come Arjuna]',info:'tṛtīyā bahuvacana = strumentale plurale (f.). Significato dello Ślokāmṛta-bindu; analisi grammaticale: mia conoscenza generale, da verificare.',parts:[['sva','(agg.) proprio, Suo'],['dos','(n.) braccio']]},
  {k:'asyan',mean:'scacciando, eliminando',info:'participio presente · prathamā ekavacana = nominativo singolare (m.). Ślokāmṛta-bindu: «casting out»; Vedabase: «killing». Radice: non ho dati affidabili (forse as, «gettare, lanciare»).'},
  {k:'adharmam',mean:'i demoni, o l’irreligione',info:'tema adharma (m.) · dvitīyā ekavacana = accusativo singolare. Ślokāmṛta-bindu: «the demons or irreligion»; Vedabase: «demons».',parts:[['a-','non'],['dharma','(m.) religione, giustizia']]},
  {k:'sthira-cara-vṛjina-ghnaḥ',mean:'distruttore di tutte le calamità [specialmente il dolore della separazione] di tutti gli esseri viventi, mobili e immobili',info:'composto · prathamā ekavacana = nominativo singolare (m.). Significato dello Ślokāmṛta-bindu; Vedabase: «destroyer of ill fortune of all beings».',parts:[['sthira','(agg.) fermo, immobile'],['cara','(agg.) che si muove'],['vṛjina','(n.) sventura, calamità'],['ghna','(agg.) che distrugge (dalla radice han: colpire, uccidere)']]},
  {k:'su-smita',mean:'sempre sorridente',info:'composto. Ślokāmṛta-bindu: «always smiling»; legato a śrī-mukhena.',parts:[['su','bene, bello'],['smita','(agg./n.) sorridente; sorriso']]},
  {k:'śrī-mukhena',mean:'con il Suo bel volto',info:'composto · tṛtīyā ekavacana = strumentale singolare (n.). Ślokāmṛta-bindu: «by His beautiful face».',parts:[['śrī','(f.) bellezza, splendore'],['mukha','(n.) volto']]},
  {k:'vraja-pura-vanitānām',mean:'delle gopī di Vṛndāvana',info:'composto · ṣaṣṭhī bahuvacana = genitivo plurale (f.). Ślokāmṛta-bindu: «of the gopīs of Vṛndāvana»; Vedabase: «of Vṛndāvana damsels».',parts:[['vraja','(m.) Vraja, la regione dei pastori'],['pura','(n.) città, villaggio'],['vanitā','(f.) donna']]},
  {k:'vardhayan',mean:'accrescendo',info:'participio presente (causativo) · prathamā ekavacana = nominativo singolare (m.). Ślokāmṛta-bindu: «increasing». Radice: vṛdh, crescere [mia conoscenza generale, da verificare].'},
  {k:'kāma-devam',mean:'i desideri amorosi',info:'composto · dvitīyā ekavacana = accusativo singolare (m.). Ślokāmṛta-bindu: «the amorous desires»; Vedabase: «lusty desires». Le parti sono «desiderio» e «dio»: la resa «desideri» è quella delle due fonti.',parts:[['kāma','(m.) desiderio'],['deva','(m.) dio']]}
 ],
 surf:[
  [{t:'jayati',e:[0]},{t:'jana-nivāso',e:[1]},{t:'devakī-janma-vādo',e:[2]}],
  [{t:'yadu-vara-pariṣat',e:[3]},{t:'svair',e:[4]},{t:'dorbhir',e:[4]},{t:'asyann',e:[5]},{t:'adharmam',e:[6]}],
  [{t:'sthira-cara-vṛjina-ghnaḥ',e:[7]},{t:'su-smita',e:[8]},{t:'śrī-mukhena',e:[9]}],
  [{t:'vraja-pura-vanitānāṁ',e:[10]},{t:'vardhayan',e:[11]},{t:'kāma-devam',e:[12]}]
 ],
 sutra:{
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  76:{txt:'vāmanād ṅa-ṇa-nā dviḥ sarveśvare',tr:'Ṅa-rāma, ṇa-rāma e na-rāma a fine di viṣṇupada si raddoppiano quando vengono dopo un vāmana (vocale breve) e segue un sarveśvara (vocale).',ex:'Esempio: kurvan + asti → kurvann asti. Dopo una vocale lunga no: bhagavān + iha → bhagavān iha.'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'},
  83:{txt:'ra īśvarāt sarveśvara-gopālayoḥ',tr:'Dopo un īśvara (i, ī, u, ū, ṛ, ṝ, ḷ, ḹ, e, ai, o, au) il viṣṇusarga (ḥ) diventa r quando segue un sarveśvara (vocale) o un gopāla (consonante sonora).',ex:'Esempio: hariḥ + gacchati → harir gacchati; hareḥ + idam → harer idam'}
 },
 sandhi:[
  {a:'jana-nivāsaḥ',b:'devakī-',r:'jana-nivāso devakī-',sut:[80,44],note:'ḥ → u dopo a davanti a un gopāla (80): d di devakī è un harigadā, quindi un gopāla (sūtra 28 del PDF). Poi a + u → o (44).'},
  {a:'devakī-janma-vādaḥ',b:'yadu-',r:'devakī-janma-vādo yadu-',sut:[80,44],note:'Come sopra: y è un harimitra, quindi un gopāla (sūtra 28 del PDF). La parola vādo chiude il pāda 1 e yadu apre il pāda 2: il sandhi passa sopra il confine fra i due pāda.'},
  {a:'svaiḥ',b:'dorbhiḥ',r:'svair dorbhiḥ',sut:[83],note:'ḥ → r dopo ai (un īśvara) davanti a un gopāla (d di dorbhiḥ).'},
  {a:'dorbhiḥ',b:'asyan',r:'dorbhir asyan',sut:[83],note:'ḥ → r dopo i (un īśvara) davanti a una vocale (a di asyan).'},
  {a:'asyan',b:'adharmam',r:'asyann adharmam',sut:[76],note:'La n finale dopo una vocale breve (a) si raddoppia davanti a una vocale.'},
  {a:'vanitānām',b:'vardhayan',r:'vanitānāṁ vardhayan',sut:[72],note:'m → ṁ davanti a consonante (72). Il sūtra 73 non si applica: v è un harimitra, non un viṣṇuvarga.'}
 ],
 seg:[
  [{t:'jayati jana-'},{t:'nivāso',s:[1]},{t:' devakī-janma-'},{t:'vādo',s:[2]}],
  [{t:'yadu-vara-pariṣat '},{t:'svair',s:[3]},{t:' '},{t:'dorbhir',s:[4]},{t:' '},{t:'asyann',s:[5]},{t:' adharmam'}],
  [{t:'sthira-cara-vṛjina-ghnaḥ su-smita-śrī-mukhena'}],
  [{t:'vraja-pura-'},{t:'vanitānāṁ',s:[6]},{t:' vardhayan kāma-devam'}]
 ],
 metrica:{
  name:'Mālinī',
  syl:15,
  sylNote:'contate da me sul testo: 4 × 15 = 60',
  gana:'na · na · ma · ya · ya',
  yati:'dopo l’8ª sillaba (8 + 7)',
  yatiAt:8,
  yatiNote:'In tutti e quattro i pāda la pausa cade a fine parola (nivāso, svair, ghnaḥ, nāṁ)',
  lakshana:'Non ho il testo esatto del lakṣaṇa. Lo schema è na · na · ma · ya · ya.',
  scan:['LLLLLLGGGLGGLGG','LLLLLLGGGLGGLGL','LLLLLLGGGLGGLGL','LLLLLLGGGLGGLGL'],
  note:'Una vocale breve prima di un nesso di consonanti si conta lunga (per esempio ṣat di pariṣat, dhar di adharmam). Le vocali e, ai, o, au sono sempre lunghe (de, svair, so, do). La r finale di dorbhir si conta unita alla a seguente. L’ultima sillaba di ogni pāda si conta lunga anche se è breve (mam, na, vam) [mia conoscenza generale, da verificare]. I quattro pāda hanno la stessa scansione.'
 },
 context:[
  {v:true,t:'Dove si trova: Śrīmad-Bhāgavatam, Decimo Canto, capitolo 90, intitolato su Vedabase «Summary of Lord Kṛṣṇa’s Glories» (Sintesi delle glorie di Kṛṣṇa). Il verso 50 chiude il capitolo con il frutto dell’ascolto: chi ascolta, canta e medita con crescente sincerità sui temi di Mukunda raggiunge il regno del Signore, dove il potere della morte non ha presa (traduzione di Vedabase).'},
  {v:true,t:'Che cosa precede: nel verso 46 i Vṛṣṇi sono così assorbiti nella coscienza di Kṛṣṇa da dimenticare il proprio corpo mentre dormono, siedono, camminano, parlano, giocano e fanno il bagno. Nel verso 47 la gloria del Signore, disceso fra gli Yadu, supera quella del Gange; sia chi Lo odiava sia chi Lo amava ottiene una forma eterna simile alla Sua nel mondo spirituale; il Suo nome distrugge ogni inauspiciosità (traduzione di Vedabase).'},
  {v:true,t:'Che cosa segue: nel verso 49, per proteggere i princìpi del servizio devozionale a Sé, Kṛṣṇa, il migliore degli Yadu, accetta le forme di pastime glorificate nel Bhāgavatam; chi desidera servire i Suoi piedi di loto deve ascoltare le Sue attività in ciascuna di queste incarnazioni, e l’ascolto distrugge le reazioni del lavoro interessato (traduzione di Vedabase).'},
  {v:true,t:'Il verso è citato anche nell’Hari-bhakti-vilāsa 3.23 (capitolo 3, «Śaucīya-vilāsa», nel testo di wisdomlib), il primo di una serie di versi da recitare introdotta dal verso 3.22 e chiusa dal 3.27 («questa catuḥślokī»). Il testo coincide.'},
  {v:true,t:'Nello Śrī Ślokāmṛta-bindu (p. 24, sezione «Essential Ślokas») il verso ha il titolo «The nectar ocean of the Bhāgavatam in one śloka» (l’oceano di nettare del Bhāgavatam in un solo śloka).'},
  {v:false,t:'Il momento: siamo alla fine del Decimo Canto, nella sintesi finale delle glorie di Kṛṣṇa, dopo la Sua vita a Dvārakā. Il verso è una sorta di riassunto in un solo śloka: Kṛṣṇa è l’ultimo rifugio degli esseri, è noto come figlio di Devakī, elimina l’irreligione, distrugge le sventure degli esseri mobili e immobili e accresce i desideri amorosi delle fanciulle di Vraja. Questa lettura è mia, da verificare.'},
  {v:false,t:'Chi parla: Vedabase non riporta una riga «uvāca» su questo verso, e non sono riuscito ad aprire la pagina del primo verso del capitolo. Non ho dati affidabili su chi parla. Che la narrazione sia di Śukadeva Gosvāmī a Parīkṣit è mia conoscenza generale, da verificare.'}
 ],
 note:'Per il testo in caratteri latini ho seguito Vedabase (yadu-vara-pariṣat svair, kāma-devam). Lo Ślokāmṛta-bindu stampa «pariṣat-svair» con il trattino. La devanāgarī è quella di Vedabase, con il visarga ः al posto dei due punti. La divisione in quattro pāda segue le quattro righe stampate. Il parola per parola è la traduzione italiana dei synonyms dello Ślokāmṛta-bindu; dove Vedabase differisce l’ho scritto.',
 sources:[
  'Traduzione inglese e parola per parola (synonyms): Śrī Ślokāmṛta-bindu, p. 24 (PDF del progetto «Slokamrta bindhu 1.pdf»). Letto tramite estrazione automatica: da ricontrollare sul libro.',
  'Testo del verso, devanāgarī, titolo del capitolo e confronto dei synonyms: Vedabase, https://vedabase.io/en/library/sb/10/90/48/. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Contesto (versi 46, 47, 49 e 50 e titolo del capitolo): Vedabase, https://vedabase.io/en/library/sb/10/90/ e /46/, /47/, /49/, /50/ (traduzioni inglesi). Letto tramite estrazione automatica: da ricontrollare sul sito.',
  'Sūtra 44, 72, 76, 80 e 83, definizione di gopāla (sūtra 28) e di īśvara (sūtra 7), e Saṁśodhinī al sūtra 402 che cita il verso: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Citazione nell’Hari-bhakti-vilāsa 3.23: https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc498292.html. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Parola per parola in italiano (resa dei synonyms), genere, caso, composti, scansione, nome del metro: conoscenza generale, da verificare.'
 ]
});
/* ----- fine Śrīmad-Bhāgavatam 10.90.48 ----- */
/* ----- Arcana-dīpikā · vidagdha-gopāla ----- */
DATA.push({
 id:'arcana-dipika-vidagdha-gopala',
 label:'Hari-bhakti-vilāsa 3.25 · vidagdha-gopāla',
 src:'Hari-bhakti-vilāsa 3.25',
 sub:'upajāti (indravajrā e upendravajrā) · 11 sillabe per pāda',
 padas:[
  {iast:'vidagdha-gopāla-vilāsinīnāṁ', dev:'विदग्धगोपालविलासिनीनां'},
  {iast:'sambhoga-cihnāṅkita-sarva-gātram', dev:'सम्भोगचिह्नाङ्कितसर्वगात्रम्'},
  {iast:'pavitram āmnāya girām agamyaṁ', dev:'पवित्रमाम्नायगिरामगम्यं'},
  {iast:'brahma prapadye navanīta-cauram', dev:'ब्रह्म प्रपद्ये नवनीतचौरम् ॥२५॥'}
 ],
 translation:'Prendo rifugio in Colui il cui godimento del rasa è sommo, la Verità Assoluta Suprema, Gopāla Śrī Kṛṣṇa, che porta su diverse parti del Suo corpo i segni dell’unione amorosa con le abili gopī, che ruba il burro e che è incomprensibile attraverso le dichiarazioni vediche.',
 translationSrc:'Resa italiana mia della traduzione inglese stampata sotto il verso nello screenshot che mi hai mandato. Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto) e non ho trovato una fonte su Vedabase.',
 words:[
  {k:'vidagdha-gopāla-vilāsinīnām',mean:'delle gopī esperte (nel libro: «expert gopīs»)',info:'composto · ṣaṣṭhī bahuvacana = genitivo plurale (f.) [mia lettura]. Non ho dati affidabili per analizzare il composto: la resa «gopī esperte» è quella del libro.',parts:[['vidagdha','(agg.) abile, esperto, raffinato'],['gopāla','(m.) mandriano'],['vilāsinī','(f.) donna che gioca, amante']]},
  {k:'sambhoga-cihna-aṅkita-sarva-gātram',mean:'che porta sulle diverse parti del corpo i segni dell’unione amorosa',info:'composto · dvitīyā ekavacana = accusativo singolare (n.) [mia lettura]; qualifica brahma. Il libro: «bears on different parts of His body signs of amorous union».',parts:[['sambhoga','(m.) godimento, unione amorosa'],['cihna','(n.) segno, marchio'],['aṅkita','(agg.) segnato (dalla radice aṅk: marcare)'],['sarva','(agg.) tutto'],['gātra','(n.) membro, corpo']]},
  {k:'pavitram',mean:'puro, purificante',info:'tema pavitra (n.) · dvitīyā ekavacana = accusativo singolare [mia lettura]; concorda con brahma. La traduzione del libro non rende questo termine con una parola propria: non ho dati affidabili su come lo intenda.'},
  {k:'āmnāya',mean:'dei Veda, vedico',info:'tema āmnāya (m.): tradizione vedica, i Veda · primo elemento della coppia āmnāya girām. Il libro: «Vedic statements».'},
  {k:'girām',mean:'delle parole, delle dichiarazioni',info:'tema gir (f.): parola · ṣaṣṭhī bahuvacana = genitivo plurale [mia lettura]. Il libro: «Vedic statements».'},
  {k:'agamyam',mean:'incomprensibile, irraggiungibile',info:'tema agamya (n.) · dvitīyā ekavacana = accusativo singolare; concorda con brahma. Il libro: «incomprehensible through Vedic statements».',parts:[['a-','non'],['gamya','(agg.) raggiungibile, accessibile (dalla radice gam: andare)']]},
  {k:'brahma',mean:'la Verità Assoluta (Brahman)',info:'tema brahman (n.) · dvitīyā ekavacana = accusativo singolare (forma brahma); è l’oggetto di prapadye [mia lettura]. Il libro: «the Supreme Absolute Truth».'},
  {k:'prapadye',mean:'prendo rifugio',info:'verbo, presente, ātmanepada 1ª singolare · radice pad con il prefisso pra: rifugiarsi, arrendersi [mia conoscenza generale, da verificare]. Il libro: «I take shelter of».'},
  {k:'navanīta-cauram',mean:'che ruba il burro',info:'composto · dvitīyā ekavacana = accusativo singolare (m.); qualifica brahma. Il libro: «who steals butter».',parts:[['navanīta','(n.) burro fresco'],['caura','(m.) ladro']]}
 ],
 surf:[
  [{t:'vidagdha-gopāla-vilāsinīnāṁ',e:[0]}],
  [{t:'sambhoga-cihnāṅkita-sarva-gātram',e:[1]}],
  [{t:'pavitram',e:[2]},{t:'āmnāya',e:[3]},{t:'girām',e:[4]},{t:'agamyaṁ',e:[5]}],
  [{t:'brahma',e:[6]},{t:'prapadye',e:[7]},{t:'navanīta-cauram',e:[8]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā',note:'Dal vṛtti anche: hari hari + iti → hari harīti.'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'}
 },
 sandhi:[
  {a:'cihna',b:'aṅkita',r:'cihnāṅkita',sut:[42],note:'a + a → ā, dentro il composto.'},
  {a:'vilāsinīnām',b:'sambhoga-',r:'vilāsinīnāṁ sambhoga-',sut:[72],note:'m → ṁ davanti a consonante (72). La parola vilāsinīnāṁ chiude il pāda 1 e sambhoga apre il pāda 2: il sandhi passa sopra il confine fra i due pāda.'},
  {a:'agamyam',b:'brahma',r:'agamyaṁ brahma',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare la nasale del varga seguente (qui m: agamyam brahma): è facoltativo, e nel testo c’è ṁ. Il sandhi passa sopra il confine fra il pāda 3 e il pāda 4.'}
 ],
 seg:[
  [{t:'vidagdha-gopāla-'},{t:'vilāsinīnāṁ',s:[2]}],
  [{t:'sambhoga-'},{t:'cihnāṅkita',s:[1]},{t:'-sarva-gātram'}],
  [{t:'pavitram āmnāya girām '},{t:'agamyaṁ',s:[3]}],
  [{t:'brahma prapadye navanīta-cauram'}]
 ],
 metrica:{
  name:'Upajāti (indravajrā e upendravajrā)',
  syl:11,
  sylNote:'contate da me sul testo: 4 × 11 = 44',
  gana:'pāda 1 e 3: ja · ta · ja · ga · ga (upendravajrā); pāda 2 e 4: ta · ta · ja · ga · ga (indravajrā)',
  yati:'nessuna pausa fissa',
  yatiNote:'Non ho dati affidabili su una cesura fissa nell’upajāti',
  lakshana:'Non ho il testo esatto dei lakṣaṇa. Schemi: indravajrā ta · ta · ja · ga · ga; upendravajrā ja · ta · ja · ga · ga.',
  scan:['LGLGGLLGLGG','GGLGGLLGLGL','LGLGGLLGLGG','GGLGGLLGLGL'],
  note:'I pāda 1 e 3 iniziano con una sillaba breve (upendravajrā), i pāda 2 e 4 con una lunga (indravajrā): la mescolanza dei due dà il nome upajāti [mia conoscenza generale, da verificare]. Una vocale breve prima di un nesso di consonanti si conta lunga (per esempio dag di vidagdha, cih di cihna, bhog di sambhoga). La m finale di pavitram e girām si conta unita alla vocale seguente (ra-mā, rā-ma). L’ultima sillaba dei pāda 2 e 4 (tram, ram) è breve ma si conta lunga a fine pāda.'
 },
 context:[
  {v:true,t:'Dove si trova: Hari-bhakti-vilāsa 3.25, nel capitolo 3, intitolato nel testo di wisdomlib «Śaucīya-vilāsa». Il testo coincide con quello che mi avevi dato (wisdomlib scrive «āmnāya-girām agamyaṁ»).'},
  {v:true,t:'Che cosa precede: il verso 3.22 introduce una serie di versi da recitare. In resa mia dal sanscrito (da verificare): «Desiderando la suprema purezza, meditando sui piedi del guru sul proprio capo, lodando e cantando Kṛṣṇa e ricordandoLo, si reciti questo». Seguono 3.23 («jayati jana-nivāso…», che è anche Śrīmad-Bhāgavatam 10.90.48), 3.24 («smṛte sakala-kalyāṇa-bhājanaṁ yatra jāyate / puruṣas tam ajaṁ nityaṁ vrajāmi śaraṇaṁ harim») e poi questo, 3.25.'},
  {v:true,t:'Che cosa segue: il verso 3.26 è introdotto da «daśama-skandhe» (nel Decimo Canto) ed è «udgāyatīnām aravinda-locanaṁ…», cioè Śrīmad-Bhāgavatam 10.46.46. Il verso 3.27 dice, in resa mia (da verificare): «Così. E si reciti ancora, secondo la tradizione dei sādhu, questa catuḥślokī (le “quattro strofe”) per la pace da ogni difetto e per ottenere il bene». Il verso 3.28 comincia «prātaḥ smarāmi bhava-bhīti-mahārti-śāntyai nārāyaṇaṁ garuḍa-vāhanam…».'},
  {v:false,t:'Che le quattro strofe della catuḥślokī siano i versi 3.23-3.26 è una mia deduzione, da verificare.'},
  {v:false,t:'Chi parla: chi recita, in prima persona (prapadye, «prendo rifugio»), davanti a Gopāla Kṛṣṇa. La fonte non dà un nome. È una lettura mia, da verificare.'}
 ],
 note:'Il testo del verso è quello di Hari-bhakti-vilāsa 3.25 (wisdomlib), che coincide con quello dello screenshot che mi hai mandato. La divisione in quattro pāda da undici sillabe segue le quattro righe stampate. La devanāgarī della fonte è «विदग्धगोपालविलासिनीनां सम्भोगचिह्नाङ्कितसर्वगात्रम् । पवित्रम् आम्नायगिराम् अगम्यं ब्रह्म प्रपद्ये नवनीतचौरम् ॥ २५ ॥»: la mia coincide a parte la separazione delle parole. Il parola per parola è mio, da verificare: alcune parti della traduzione inglese (per esempio «whose relish of rasa is topmost») non so a quale parola del verso corrispondano con certezza.',
 sources:[
  'Origine e testo del verso, devanāgarī: Hari-bhakti-vilāsa 3.25, https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc498294.html. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Contesto, versi 3.21-3.28: https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc498290.html … doc498297.html (in particolare 3.22, 3.23, 3.24, 3.26, 3.27). Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Traduzione inglese: stampata sotto il verso nello screenshot che mi hai mandato.',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare. Non ho dati affidabili sull’origine più antica del verso (l’Hari-bhakti-vilāsa non ne indica una).',
  'Sūtra 42, 72 e 73: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Parola per parola, genere, caso, composti, scansione, nome del metro: conoscenza generale, da verificare.'
 ]
});
/* ----- fine Arcana-dīpikā · vidagdha-gopāla ----- */
/* ----- Śrīmad-Bhāgavatam 10.46.46 ----- */
DATA.push({
 id:'sb-10-46-46',
 label:'Śrīmad-Bhāgavatam 10.46.46',
 src:'Śrīmad-Bhāgavatam 10.46.46',
 sub:'upajāti (indravaṁśā e vaṁśastha) · 12 sillabe per pāda',
 padas:[
  {iast:'udgāyatīnām aravinda-locanaṁ', dev:'उद्गायतीनामरविन्दलोचनं'},
  {iast:'vrajāṅganānāṁ divam aspṛśad dhvaniḥ', dev:'व्रजाङ्गनानां दिवमस्पृशद् ध्वनिः ।'},
  {iast:'dadhnaś ca nirmanthana-śabda-miśrito', dev:'दध्नश्च निर्मन्थनशब्दमिश्रितो'},
  {iast:'nirasyate yena diśām amaṅgalam', dev:'निरस्यते येन दिशाममङ्गलम् ॥४६॥'}
 ],
 translation:'Mentre le donne di Vraja cantavano ad alta voce le glorie di Kṛṣṇa dagli occhi di loto, i loro canti, mescolati al suono della zangolatura, salirono fino al cielo e dissiparono ogni inauspiciosità in ogni direzione.',
 translationSrc:'Resa italiana mia della traduzione inglese di Śrīmad-Bhāgavatam 10.46.46 su Vedabase (https://vedabase.io/en/library/sb/10/46/46/). Letta tramite estrazione automatica della pagina: da ricontrollare sul sito. Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto).',
 words:[
  {k:'udgāyatīnām',mean:'di quelle che cantavano ad alta voce',info:'participio presente femminile (ud + gai: cantare) · ṣaṣṭhī bahuvacana = genitivo plurale; concorda con vraja-aṅganānām. Vedabase: «who were loudly singing». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'aravinda-locanam',mean:'su Colui i cui occhi sono (come) loto',info:'composto · dvitīyā ekavacana = accusativo singolare (m.) [mia lettura]: è ciò che le gopī cantano (Kṛṣṇa). Vedabase: «about the Lord whose eyes (are) like lotuses».',parts:[['aravinda','(n.) loto'],['locana','(n.) occhio']]},
  {k:'vraja-aṅganānām',mean:'delle donne di Vraja',info:'composto · ṣaṣṭhī bahuvacana = genitivo plurale (f.). Vedabase: «of the women of Vraja».',parts:[['vraja','(m.) Vraja, la regione dei pastori'],['aṅganā','(f.) donna']]},
  {k:'divam',mean:'il cielo',info:'tema div (m./f.) · dvitīyā ekavacana = accusativo singolare. Vedabase: «the sky».'},
  {k:'aspṛśat',mean:'toccò',info:'verbo, imperfetto (laṅ) 3ª singolare · radice spṛś: toccare [mia conoscenza generale, da verificare]. Vedabase: «touched».'},
  {k:'dhvaniḥ',mean:'la risonanza, il suono',info:'tema dhvani (m.) · prathamā ekavacana = nominativo singolare; soggetto di aspṛśat. Vedabase: «the reverberation».'},
  {k:'dadhnaḥ',mean:'della cagliata (yogurt)',info:'tema dadhi (n.) · ṣaṣṭhī ekavacana = genitivo singolare [mia conoscenza generale, da verificare]. Vedabase: «of the curds».'},
  {k:'ca',mean:'e',info:'indeclinabile.'},
  {k:'nirmanthana-śabda-miśritaḥ',mean:'mescolato al suono della zangolatura',info:'composto · prathamā ekavacana = nominativo singolare (m.); concorda con dhvaniḥ. Vedabase: nirmanthana «of the churning», śabda «with the sound», miśritaḥ «mixed».',parts:[['nirmanthana','(n.) zangolatura'],['śabda','(m.) suono'],['miśrita','(agg.) mescolato']]},
  {k:'nirasyate',mean:'viene dissipata',info:'verbo, presente, passivo 3ª singolare · prefisso nis + radice as: scacciare [mia conoscenza generale, da verificare]. Vedabase: «is dispelled».'},
  {k:'yena',mean:'dal quale (suono)',info:'pronome relativo yad (m.) · tṛtīyā ekavacana = strumentale singolare. Vedabase: «by which».'},
  {k:'diśām',mean:'di tutte le direzioni',info:'tema diś (f.) · ṣaṣṭhī bahuvacana = genitivo plurale. Vedabase: «of all directions».'},
  {k:'amaṅgalam',mean:'l’inauspiciosità',info:'tema amaṅgala (n.) · prathamā ekavacana = nominativo singolare; soggetto di nirasyate. Vedabase: «the inauspiciousness».',parts:[['a-','non'],['maṅgala','(n.) auspiciosità, bene']]}
 ],
 surf:[
  [{t:'udgāyatīnām',e:[0]},{t:'aravinda-locanaṁ',e:[1]}],
  [{t:'vrajāṅganānāṁ',e:[2]},{t:'divam',e:[3]},{t:'aspṛśad',e:[4]},{t:'dhvaniḥ',e:[5]}],
  [{t:'dadhnaś',e:[6]},{t:'ca',e:[7]},{t:'nirmanthana-śabda-miśrito',e:[8]}],
  [{t:'nirasyate',e:[9]},{t:'yena',e:[10]},{t:'diśām',e:[11]},{t:'amaṅgalam',e:[12]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā',note:'Dal vṛtti anche: hari hari + iti → hari harīti.'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  61:{txt:'viṣṇudāso viṣṇupadānte harighoṣe ca harigadā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa harigadā; se non è a fine di viṣṇupada, lo diventa solo se segue un harighoṣa.',ex:'Esempio: bhagavat + icchā → bhagavad-icchā',note:'La sostituzione è quella più simile per luogo di pronuncia (sthāne sadṛśatamaḥ).'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  79:{txt:'ca-chayoḥ śa-rāmaḥ, ṭa-ṭhayoḥ ṣa-rāmaḥ, ta-thayoḥ sa-rāmaḥ',tr:'Il viṣṇusarga (ḥ) diventa ś quando segue ca o cha, ṣ quando segue ṭa o ṭha, s quando segue ta o tha.',ex:'Esempio: kṛṣṇaḥ + carati → kṛṣṇaś carati',note:'Il PDF riprende la parola viṣṇusargaḥ da un sūtra precedente della versione Bṛhat.'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'}
 },
 sandhi:[
  {a:'ut',b:'gāyatīnām',r:'udgāyatīnām',sut:[61],note:'t finale diventa d davanti a una consonante sonora (g di gāyatīnām, harigadā, 61). Il sūtra parla di fine di viṣṇupada: qui ud è un prefisso, quindi l’applicazione è una mia lettura, da verificare.'},
  {a:'locanam',b:'vrajāṅganānām',r:'locanaṁ vrajāṅganānām',sut:[72],note:'m → ṁ davanti a consonante (72). Il sūtra 73 non si applica: v è un harimitra, non un viṣṇuvarga. Il sandhi passa sopra il confine fra il pāda 1 e il pāda 2.'},
  {a:'vraja',b:'aṅganānām',r:'vrajāṅganānām',sut:[42],note:'a + a → ā, dentro il composto.'},
  {a:'vrajāṅganānām',b:'divam',r:'vrajāṅganānāṁ divam',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare la nasale del varga seguente (qui n, perché d appartiene al ta-varga: vrajāṅganānān divam): è facoltativo, e nel verso c’è ṁ.'},
  {a:'aspṛśat',b:'dhvaniḥ',r:'aspṛśad dhvaniḥ',sut:[61],note:'t finale diventa d davanti a dh (un harighoṣa, 61).'},
  {a:'dadhnaḥ',b:'ca',r:'dadhnaś ca',sut:[79],note:'ḥ → ś davanti a ca.'},
  {a:'miśritaḥ',b:'nirasyate',r:'miśrito nirasyate',sut:[80,44],note:'ḥ → u dopo a davanti a un gopāla (80): n di nirasyate è un hariveṇu, quindi un gopāla (sūtra 28 del PDF). Poi a + u → o (44). La parola miśrito chiude il pāda 3 e nirasyate apre il pāda 4: il sandhi passa sopra il confine fra i due pāda.'}
 ],
 seg:[
  [{t:'ud',s:[1]},{t:'gāyatīnām aravinda-locana'},{t:'ṁ',s:[2]}],
  [{t:'vraj'},{t:'ā',s:[3]},{t:'ṅganānā'},{t:'ṁ',s:[4]},{t:' divam '},{t:'aspṛśad',s:[5]},{t:' dhvaniḥ'}],
  [{t:'dadhnaś',s:[6]},{t:' ca nirmanthana-śabda-'},{t:'miśrito',s:[7]}],
  [{t:'nirasyate yena diśām amaṅgalam'}]
 ],
 metrica:{
  name:'Upajāti (indravaṁśā e vaṁśastha)',
  syl:12,
  sylNote:'contate da me sul testo: 4 × 12 = 48',
  gana:'pāda 1 e 3: ta · ta · ja · ra (indravaṁśā); pāda 2 e 4: ja · ta · ja · ra (vaṁśastha)',
  yati:'nessuna pausa fissa',
  yatiNote:'Non ho dati affidabili su una cesura fissa in questi metri',
  lakshana:'Non ho il testo esatto dei lakṣaṇa. Schemi: indravaṁśā ta · ta · ja · ra; vaṁśastha ja · ta · ja · ra.',
  scan:['GGLGGLLGLGLG','LGLGGLLGLGLG','GGLGGLLGLGLG','LGLGGLLGLGLL'],
  note:'I pāda 1 e 3 iniziano con due sillabe lunghe (indravaṁśā), i pāda 2 e 4 con una breve e una lunga (vaṁśastha): la mescolanza dei due è un upajāti [mia conoscenza generale, da verificare]. Una vocale breve prima di un nesso di consonanti si conta lunga (per esempio ud di udgāyatīnām, vin di aravinda, dad di dadhnaḥ). La m finale di udgāyatīnām, divam, diśām si conta unita alla vocale seguente. L’ultima sillaba del pāda 4 (lam) è breve ma si conta lunga a fine verso.'
 },
 context:[
  {v:true,t:'Dove si trova: Śrīmad-Bhāgavatam, Decimo Canto, capitolo 46, intitolato su Vedabase «Uddhava Visits Vṛndāvana» (Uddhava visita Vṛndāvana). Secondo il riassunto di Vedabase, Kṛṣṇa manda Uddhava a Vraja per consolare Nanda, Yaśodā e le gopī che soffrono per la separazione; Uddhava arriva al tramonto e passa la notte a parlare con Nanda.'},
  {v:true,t:'Chi parla all’inizio: il capitolo si apre con «śrī-śuka uvāca» (10.46.1): Śukadeva Gosvāmī presenta Uddhava, il più saggio consigliere dei Vṛṣṇi, caro amico di Kṛṣṇa e discepolo diretto di Bṛhaspati. Nei versi 2 e 3 Kṛṣṇa prende Uddhava per mano e gli dice: «Caro Uddhava, va’ a Vraja e dai gioia ai Nostri genitori; e solleva anche le gopī, che soffrono nella separazione da Me, dando loro il Mio messaggio». Nel verso 7 Uddhava accetta il messaggio, sale sul carro e parte per Nanda-gokula (traduzioni di Vedabase).'},
  {v:true,t:'Che cosa precede: nel verso 44, mentre il messaggero di Kṛṣṇa continuava a parlare con Nanda, la notte finì: le donne del villaggio dei pastori si alzarono dal letto, accesero le lampade, adorarono le divinità di casa e cominciarono a zangolare lo yogurt per ottenere il burro. Nel verso 45 le donne di Vraja, mentre tiravano le corde della zangola con le braccia ornate di braccialetti, brillavano dello splendore dei gioielli che riflettevano la luce delle lampade (traduzioni di Vedabase).'},
  {v:true,t:'Che cosa segue: nel verso 47, quando il sole fu sorto, gli abitanti di Vraja notarono davanti alla porta di Nanda Mahārāja il carro d’oro e si chiesero a chi appartenesse (traduzione di Vedabase).'},
  {v:true,t:'Il verso è citato anche nell’Hari-bhakti-vilāsa 3.26 (capitolo 3, «Śaucīya-vilāsa», nel testo di wisdomlib), con davanti «daśama-skandhe» (nel Decimo Canto). Fa parte della serie di versi da recitare che comincia al verso 3.22 e termina al 3.27 («questa catuḥślokī»). Il testo coincide.'},
  {v:false,t:'Il momento: è l’alba del giorno dopo l’arrivo di Uddhava. Nella casa di Nanda Uddhava e Nanda hanno parlato tutta la notte, mentre fuori le donne di Vraja iniziano la giornata zangolando e cantando le glorie di Kṛṣṇa: il verso 46 sta fra i versi 45 e 47, prima che qualcuno veda il carro. Questa collocazione è la mia lettura dei versi 44-47.'},
  {v:false,t:'Chi parla in questo verso: Vedabase non riporta una riga «uvāca» sul verso 46, che è narrazione (il verso 44 si rivolge a «O King»). Da ciò leggo che è Śukadeva Gosvāmī a raccontare a Parīkṣit; è una mia lettura, da verificare. Chi canta nel verso sono le donne di Vraja.'}
 ],
 note:'Nello screenshot che mi hai mandato la riga 1 è stampata «aravinda-locananaṁ», con una sillaba in più; Vedabase ha «aravinda-locanaṁ» e la traduzione dei synonyms dice «locanam». Ho scritto la forma di Vedabase, che dà 12 sillabe come le altre righe: da ricontrollare sul libro che hai. Il testo dello screenshot e quello di Vedabase coincidono nel resto. La devanāgarī è quella di Vedabase, con il visarga ः al posto dei due punti. La divisione in quattro pāda segue le quattro righe stampate.',
 sources:[
  'Testo del verso, devanāgarī, parola per parola (synonyms), traduzione inglese e titolo del capitolo: Vedabase, https://vedabase.io/en/library/sb/10/46/46/. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Contesto, versi 44, 45 e 47: Vedabase, https://vedabase.io/en/library/sb/10/46/44/, /45/ e /47/ (traduzioni inglesi). Letto tramite estrazione automatica: da ricontrollare sul sito.',
  'Citazione nell’Hari-bhakti-vilāsa 3.26: https://www.wisdomlib.org/hinduism/book/hari-bhakti-vilasa-sanskrit-text/doc498295.html. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare.',
  'Contesto, versi 1, 2, 3 e 7 e riassunto del capitolo: Vedabase, https://vedabase.io/en/library/sb/10/46/ e /1/, /2/, /3/, /7/ (traduzioni inglesi). Letto tramite estrazione automatica: da ricontrollare sul sito.',
  'Sūtra 17, 28, 42, 44, 61, 72, 79 e 80: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Parola per parola in italiano (resa dei synonyms), genere, caso, composti, scansione, nome del metro: conoscenza generale, da verificare.'
 ]
});
/* ----- fine Śrīmad-Bhāgavatam 10.46.46 ----- */
/* ----- Śrīmad-Bhāgavatam 3.9.25 ----- */
DATA.push({
 id:'sb-3-9-25',
 label:'Śrīmad-Bhāgavatam 3.9.25',
 src:'Śrīmad-Bhāgavatam 3.9.25',
 sub:'vasantatilakā · 14 sillabe per pāda',
 padas:[
  {iast:'so ’sāv adabhra-karuṇo bhagavān vivṛddha-', dev:'सोऽसावदभ्रकरुणो भगवान् विवृद्ध'},
  {iast:'prema-smitena nayanāmburuhaṁ vijṛmbhan', dev:'प्रेमस्मितेन नयनाम्बुरुहं विजृम्भन् ।'},
  {iast:'utthāya viśva-vijayāya ca no viṣādaṁ', dev:'उत्थाय विश्वविजयाय च नो विषादं'},
  {iast:'mādhvyā girāpanayatāt puruṣaḥ purāṇaḥ', dev:'माध्व्या गिरापनयतात्पुरुषः पुराणः ॥२५॥'}
 ],
 translation:'Il Signore, che è supremo e il più antico di tutti, è illimitatamente misericordioso. Sorridendo e aprendo gli occhi di loto con eccessivo amore, possa Egli elevare l’intera creazione cosmica e rimuovere il nostro abbattimento con le Sue dolci direttive.',
 translationSrc:'Resa italiana mia della traduzione inglese di Śrīmad-Bhāgavatam 3.9.25 su Vedabase (https://vedabase.io/en/library/sb/3/9/25/). Letta tramite estrazione automatica della pagina: da ricontrollare sul sito. Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto).',
 words:[
  {k:'saḥ',mean:'Lui, il Signore',info:'pronome tad (m.) · prathamā ekavacana = nominativo singolare. Vedabase: «He / the Lord». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'asau',mean:'quello',info:'pronome adas (m.) · prathamā ekavacana = nominativo singolare. Vedabase: «that». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'adabhra',mean:'illimitata',info:'aggettivo; primo elemento del composto adabhra-karuṇaḥ. Vedabase: «unlimited».'},
  {k:'karuṇaḥ',mean:'misericordioso',info:'tema karuṇa (m.) · prathamā ekavacana = nominativo singolare; concorda con saḥ. Vedabase: «merciful». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'bhagavān',mean:'la Personalità di Dio',info:'tema bhagavat (m.) · prathamā ekavacana = nominativo singolare. Vedabase: «Personality of Godhead».'},
  {k:'vivṛddha',mean:'eccessivo, grande',info:'aggettivo (participio); primo elemento del composto vivṛddha-prema-smitena. Vedabase: «excessive».'},
  {k:'prema',mean:'amore',info:'(n.) amore. Vedabase: «love».'},
  {k:'smitena',mean:'con il sorriso',info:'tema smita (n.) · tṛtīyā ekavacana = strumentale singolare. Vedabase: «by smiling». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'nayana-amburuham',mean:'gli occhi di loto',info:'composto · dvitīyā ekavacana = accusativo singolare (n.) [mia lettura]; oggetto di vijṛmbhan. Vedabase: «lotus eyes».',parts:[['nayana','(n.) occhio'],['amburuha','(n.) loto, «nato nell’acqua» [mia conoscenza generale, da verificare]']]},
  {k:'vijṛmbhan',mean:'aprendo',info:'participio presente · prathamā ekavacana = nominativo singolare (m.). Vedabase: «by opening». Radice: non ho dati affidabili.'},
  {k:'utthāya',mean:'per far fiorire',info:'indeclinabile. Vedabase: «for flourishing». Il senso letterale «essendosi alzato» (gerundio con ud + sthā) è mia conoscenza generale, da verificare: la resa di Vedabase e la traduzione inglese «uplift» sono diverse.'},
  {k:'viśva-vijayāya',mean:'per la gloria della creazione cosmica',info:'composto · caturthī ekavacana = dativo singolare (m.) [mia lettura]. Vedabase: «glorifying cosmic creation».',parts:[['viśva','(n.) universo, tutto'],['vijaya','(m.) vittoria, gloria']]},
  {k:'ca',mean:'e anche',info:'indeclinabile. Vedabase: «as also».'},
  {k:'naḥ',mean:'nostro',info:'pronome asmad · forma breve, genitivo plurale. Vedabase: «our». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'viṣādam',mean:'abbattimento, afflizione',info:'tema viṣāda (m.) · dvitīyā ekavacana = accusativo singolare; oggetto di apanayatāt. Vedabase: «dejection».'},
  {k:'mādhvyā',mean:'con dolci',info:'tema mādhvī (f.) · tṛtīyā ekavacana = strumentale singolare; concorda con girā. Vedabase: «by sweet». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'girā',mean:'parole',info:'tema gir (f.) · tṛtīyā ekavacana = strumentale singolare. Vedabase: «words»; nella traduzione «directions». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'apanayatāt',mean:'rimuova',info:'verbo, imperativo 3ª singolare (forma in -tāt) · prefisso apa + radice nī. Vedabase: «let remove». Analisi grammaticale: mia conoscenza generale, da verificare.'},
  {k:'puruṣaḥ',mean:'il Supremo (Puruṣa)',info:'tema puruṣa (m.) · prathamā ekavacana = nominativo singolare. Vedabase: «Supreme».'},
  {k:'purāṇaḥ',mean:'il più antico',info:'tema purāṇa (m.) · prathamā ekavacana = nominativo singolare; concorda con puruṣaḥ. Vedabase: «oldest».'}
 ],
 surf:[
  [{t:'so ’sāv',e:[0,1]},{t:'adabhra-karuṇo',e:[2,3]},{t:'bhagavān',e:[4]},{t:'vivṛddha-',e:[5]}],
  [{t:'prema-',e:[6]},{t:'smitena',e:[7]},{t:'nayanāmburuhaṁ',e:[8]},{t:'vijṛmbhan',e:[9]}],
  [{t:'utthāya',e:[10]},{t:'viśva-vijayāya',e:[11]},{t:'ca',e:[12]},{t:'no',e:[13]},{t:'viṣādaṁ',e:[14]}],
  [{t:'mādhvyā',e:[15]},{t:'girāpanayatāt',e:[16,17]},{t:'puruṣaḥ',e:[18]},{t:'purāṇaḥ',e:[19]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā',note:'Dal vṛtti anche: hari hari + iti → hari harīti.'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  55:{txt:'o av au āv',tr:'Quando o è seguito da un sarveśvara (vocale) diventa av; quando au è seguito da un sarveśvara diventa āv.',ex:'Esempio: viṣṇo + iha → viṣṇav iha; kṛṣṇau + atra → kṛṣṇāv atra',note:'Il sūtra 57 permette a scelta di far cadere la v a fine di viṣṇupada (kṛṣṇā atra): nel verso la v è conservata.'},
  56:{txt:'e-obhyām asya haro viṣṇupadānte',tr:'A-rāma (a) cade quando viene dopo una e o una o che sta a fine di viṣṇupada.',ex:'Esempio: hare + atra → hare ’tra'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'}
 },
 sandhi:[
  {a:'saḥ',b:'asau',r:'so ’sau',sut:[80,44,56],note:'ḥ → u (80), a + u → o (44), poi la a di asau cade (56). Stessa catena di dāso ’ham.'},
  {a:'asau',b:'adabhra-',r:'asāv adabhra-',sut:[55],note:'au davanti a una vocale diventa āv (55). La v può cadere a scelta (57); nel verso è conservata.'},
  {a:'karuṇaḥ',b:'bhagavān',r:'karuṇo bhagavān',sut:[80,44],note:'ḥ → u dopo a davanti a un gopāla (80): bh di bhagavān è un harigadā, quindi un gopāla (sūtra 28 del PDF). Poi a + u → o (44).'},
  {a:'nayana',b:'amburuham',r:'nayanāmburuham',sut:[42],note:'a + a → ā, dentro il composto.'},
  {a:'amburuham',b:'vijṛmbhan',r:'amburuhaṁ vijṛmbhan',sut:[72],note:'m → ṁ davanti a consonante (72). Il sūtra 73 non si applica: v è un harimitra, non un viṣṇuvarga.'},
  {a:'naḥ',b:'viṣādam',r:'no viṣādam',sut:[80,44],note:'ḥ → u dopo a davanti a un gopāla (80): v è un harimitra, quindi un gopāla (sūtra 28 del PDF). Poi a + u → o (44).'},
  {a:'viṣādam',b:'mādhvyā',r:'viṣādaṁ mādhvyā',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare la nasale del varga seguente (qui m: viṣādam mādhvyā): è facoltativo, e nel verso c’è ṁ.'},
  {a:'girā',b:'apanayatāt',r:'girāpanayatāt',sut:[42],note:'ā + a → ā.'}
 ],
 seg:[
  [{t:'so ’s',s:[1]},{t:'āv',s:[2]},{t:' adabhra-karuṇ'},{t:'o',s:[3]},{t:' bhagavān vivṛddha-'}],
  [{t:'prema-smitena nayan'},{t:'ā',s:[4]},{t:'mburuha'},{t:'ṁ',s:[5]},{t:' vijṛmbhan'}],
  [{t:'utthāya viśva-vijayāya ca n'},{t:'o',s:[6]},{t:' viṣāda'},{t:'ṁ',s:[7]}],
  [{t:'mādhvyā gir'},{t:'ā',s:[8]},{t:'panayatāt puruṣaḥ purāṇaḥ'}]
 ],
 metrica:{
  name:'Vasantatilakā',
  syl:14,
  sylNote:'contate da me sul testo: 4 × 14 = 56',
  gana:'ta · bha · ja · ja · ga · ga',
  yati:'nessuna pausa fissa',
  yatiNote:'Non ho dati affidabili su una cesura fissa nel Vasantatilakā',
  lakshana:'uktā vasantatilakā tabhajā jagau gaḥ',
  scan:['GGLGLLLGLLGLGG','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG'],
  note:'Una vocale breve prima di un nesso di consonanti si conta lunga: per esempio da di adabhra e vṛd di vivṛddha. Le vocali e e o sono sempre lunghe (so, ṇo, no). L’ultima sillaba di ogni pāda (dha, han, daṁ, ḥ) si conta lunga anche se è breve. I quattro pāda hanno la stessa scansione [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Dove si trova: Śrīmad-Bhāgavatam, Terzo Canto, capitolo 9, intitolato su Vedabase «Brahmā’s Prayers for Creative Energy» (Le preghiere di Brahmā per ottenere l’energia creativa). Il capitolo si apre con «brahmovāca» (3.9.1): «O mio Signore, oggi, dopo molti, molti anni di penitenza, ho conosciuto Te. Oh, quanto sono sfortunati gli esseri incarnati, che non riescono a conoscere la Tua Persona!» (traduzione di Vedabase).'},
  {v:true,t:'Che cosa precede il capitolo: il capitolo 8 si intitola su Vedabase «Manifestation of Brahmā from Garbhodakaśāyī Viṣṇu». Brahmā, nato dal loto, cerca per cento anni la propria origine; poi, dopo aver meditato, vede il Supremo dentro il proprio cuore e infine il Signore sdraiato su Śeṣa. Colmo di inclinazione a creare, comincia le sue preghiere (riassunto di Vedabase).'},
  {v:true,t:'Che cosa precede il verso: nel verso 24 Brahmā dice che sta ora manifestando le diverse energie del Signore nella creazione cosmica e prega di non essere distolto, nelle sue attività materiali, dalla vibrazione degli inni vedici (traduzione di Vedabase).'},
  {v:true,t:'Che cosa segue: il verso 26 si apre con «maitreya uvāca»: dopo aver osservato la fonte della propria nascita, cioè la Personalità di Dio, Brahmā pregò per la Sua misericordia fin dove la mente e le parole glielo permettevano; poi rimase in silenzio, come stanco per la penitenza, la conoscenza e la concentrazione mentale (traduzione di Vedabase).'},
  {v:false,t:'Il momento: il verso 25 è l’ultimo della preghiera di Brahmā, subito prima che si fermi. Dopo aver chiesto di non perdere gli inni vedici durante la creazione (verso 24), Brahmā chiede al Signore, l’antico Puruṣa, di rialzare l’intera creazione e di togliere con le Sue parole dolci il «nostro» abbattimento. Questa lettura è mia, da verificare.'},
  {v:false,t:'Chi parla: a pronunciare il verso è Brahmā (il capitolo si apre con «brahmovāca»), mentre la narrazione è di Maitreya (3.9.26). Che Maitreya racconti a Vidura è mia conoscenza generale, da verificare.'}
 ],
 note:'Il testo del verso, in caratteri latini, è quello di Vedabase e coincide con lo screenshot che mi hai mandato. La divisione in quattro pāda segue le quattro righe stampate; il pāda 1 termina con «vivṛddha-» e continua nel pāda 2 con «prema-smitena». La devanāgarī è quella di Vedabase, con il visarga ः al posto dei due punti. La traduzione dello screenshot è diversa da quella di Vedabase che ho usato: tu mi avevi chiesto prima lo Ślokāmṛta-bindu, ma il verso non c’è.',
 sources:[
  'Testo del verso, devanāgarī, parola per parola (synonyms) e traduzione inglese: Vedabase, https://vedabase.io/en/library/sb/3/9/25/. Letto tramite estrazione automatica della pagina: da ricontrollare sul sito.',
  'Contesto: Vedabase, capitolo 9 (https://vedabase.io/en/library/sb/3/9/ e versi 1, 24, 26) e capitolo 8 (https://vedabase.io/en/library/sb/3/8/). Letto tramite estrazione automatica: da ricontrollare sul sito.',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare.',
  'Sūtra 28, 42, 44, 55, 56, 72, 73 e 80: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Parola per parola in italiano (resa dei synonyms), genere, caso, composti, scansione, nome del metro e lakṣaṇa: conoscenza generale, da verificare.'
 ]
});
/* ----- fine Śrīmad-Bhāgavatam 3.9.25 ----- */
/* ----- deva prapannārtti-hara ----- */
DATA.push({
 id:'deva-prapannartti-hara',
 label:'deva prapannārtti-hara',
 src:'',
 sub:'anuṣṭubh (śloka) · 8 sillabe per pāda',
 padas:[
  {iast:'deva prapannārtti-hara', dev:'देव प्रपन्नार्त्तिहर'},
  {iast:'prasādaṁ kuru keśava', dev:'प्रसादं कुरु केशव ।'},
  {iast:'avalokana-dānena', dev:'अवलोकनदानेन'},
  {iast:'bhūyo māṁ pārayācyuta', dev:'भूयो मां पारयाच्युत ॥'}
 ],
 translation:'O Keśava, o infallibile, o colui che rimuove l’angoscia delle anime arrese, concedimi con benevolenza la Tua misericordia, ricompensandomi di nuovo con il Tuo sguardo trascendentale.',
 translationSrc:'Resa italiana mia della traduzione inglese stampata sotto il verso nello screenshot che mi hai mandato. Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto) e non ho trovato una fonte su Vedabase né sul web.',
 words:[
  {k:'deva',mean:'o Signore',info:'tema deva (m.): dio, signore · sambodhana ekavacana = vocativo singolare [mia conoscenza generale, da verificare]. La traduzione dello screenshot non rende questa parola con un termine proprio: la resa «o Signore» è mia.'},
  {k:'prapanna-ārtti-hara',mean:'o tu che rimuovi l’angoscia di chi si è arreso',info:'composto · sambodhana ekavacana = vocativo singolare (m.) [mia lettura]. Traduzione dello screenshot: «O remover of the distress of the surrendered souls».',parts:[['prapanna','(agg.) arreso, rifugiato (da pra + pad: prendere rifugio)'],['ārtti','(f.) sofferenza, angoscia'],['hara','(agg.) che toglie (dalla radice hṛ: portare via)']]},
  {k:'prasādam',mean:'misericordia, grazia',info:'tema prasāda (m.) · dvitīyā ekavacana = accusativo singolare; oggetto di kuru [mia lettura]. Traduzione dello screenshot: «Your mercy».'},
  {k:'kuru',mean:'concedi, fa’',info:'verbo, imperativo 2ª singolare · radice kṛ: fare [mia conoscenza generale, da verificare]. Traduzione dello screenshot: «kindly bestow».'},
  {k:'keśava',mean:'o Keśava',info:'tema keśava (m.) · sambodhana ekavacana = vocativo singolare · nome di Bhagavān. Traduzione dello screenshot: «O Keśava».'},
  {k:'avalokana-dānena',mean:'con il dono dello sguardo',info:'composto · tṛtīyā ekavacana = strumentale singolare (n.) [mia lettura]. Traduzione dello screenshot: «by ... awarding me with Your transcendental glance».',parts:[['avalokana','(n.) sguardo, il guardare'],['dāna','(n.) dono, il dare']]},
  {k:'bhūyaḥ',mean:'di nuovo',info:'indeclinabile; nel verso compare come bhūyo (sandhi). Traduzione dello screenshot: «again».'},
  {k:'mām',mean:'me',info:'pronome asmad · dvitīyā ekavacana = accusativo singolare. Traduzione dello screenshot: «me».'},
  {k:'pāraya',mean:'(non ho dati affidabili sul senso preciso)',info:'verbo, imperativo 2ª singolare, probabilmente forma causativa della radice pṝ («far attraversare», «compiere») [mia conoscenza generale, da verificare]. La traduzione dello screenshot non lo rende con una parola propria: non ho dati affidabili su come lo intenda. Nel verso compare unito a acyuta (pārayācyuta).'},
  {k:'acyuta',mean:'o infallibile',info:'tema acyuta (m.) · sambodhana ekavacana = vocativo singolare · nome di Bhagavān; letteralmente a-cyuta, «non caduto». Traduzione dello screenshot: «O infallible one».',parts:[['a-','non'],['cyuta','(agg.) caduto (dalla radice cyu)']]}
 ],
 surf:[
  [{t:'deva',e:[0]},{t:'prapannārtti-hara',e:[1]}],
  [{t:'prasādaṁ',e:[2]},{t:'kuru',e:[3]},{t:'keśava',e:[4]}],
  [{t:'avalokana-dānena',e:[5]}],
  [{t:'bhūyo',e:[6]},{t:'māṁ',e:[7]},{t:'pāraya-',e:[8]},{t:'ācyuta',e:[9]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā',note:'Dal vṛtti anche: hari hari + iti → hari harīti.'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'}
 },
 sandhi:[
  {a:'prapanna',b:'ārtti-',r:'prapannārtti-',sut:[42],note:'a + ā → ā, dentro il composto.'},
  {a:'prasādam',b:'kuru',r:'prasādaṁ kuru',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare la nasale del varga seguente (qui ṅ, perché k appartiene al ka-varga: prasādaṅ kuru): è facoltativo, e nel verso c’è ṁ.'},
  {a:'bhūyaḥ',b:'mām',r:'bhūyo mām',sut:[80,44],note:'ḥ → u dopo a davanti a un gopāla (80): m è un hariveṇu, quindi un gopāla (sūtra 28 del PDF). Poi a + u → o (44). La parola bhūyo si trova all’inizio del pāda 4 e il sandhi è dentro il pāda.'},
  {a:'mām',b:'pāraya',r:'māṁ pāraya',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare m, la nasale del pa-varga a cui appartiene p: è facoltativo, e nel verso c’è ṁ.'},
  {a:'pāraya',b:'acyuta',r:'pārayācyuta',sut:[42],note:'a + a → ā.'}
 ],
 seg:[
  [{t:'deva prapann'},{t:'ā',s:[1]},{t:'rtti-hara'}],
  [{t:'prasāda'},{t:'ṁ',s:[2]},{t:' kuru keśava'}],
  [{t:'avalokana-dānena'}],
  [{t:'bhūy'},{t:'o',s:[3]},{t:' mā'},{t:'ṁ',s:[4]},{t:' pāray'},{t:'ā',s:[5]},{t:'cyuta'}]
 ],
 metrica:{
  name:'Anuṣṭubh (śloka)',
  syl:8,
  gana:'nessuno schema fisso di gaṇa: nel pāda di 8 sillabe contano soprattutto la 5ª, la 6ª e la 7ª',
  yati:'nessuna pausa fissa',
  lakshana:'śloke ṣaṣṭhaṁ guru jñeyaṁ sarvatra laghu pañcamam / dvi-catuḥ-pādayor hrasvaṁ saptamaṁ dīrghamanyayoḥ',
  sylNote:'contate da me sul testo: 4 × 8 = 32',
  yatiNote:'Non ho dati affidabili su una cesura fissa nell’anuṣṭubh',
  scan:['GGLGGLLL','LGGLLGLL','LLGLLGGL','GGGGLGLL'],
  note:'Secondo il lakṣaṇa citato: 5ª sillaba breve, 6ª lunga, 7ª lunga nei pāda 1 e 3 e breve nei pāda 2 e 4. I pāda 2, 3 e 4 rispettano la regola. Il pāda 1 no: la 5ª sillaba (nār di prapannārtti) è lunga e la 6ª (tti) è breve, il contrario di quanto dice il lakṣaṇa. Non ho dati affidabili sul perché (licenza metrica, o testo diverso dall’originale). Ricorda che e e o sono sempre lunghe (de, ke, bhū-yo). Nel pāda 1 conto lunga la sillaba va davanti al nesso pra (se non la contassi lunga, la 2ª sillaba sarebbe breve: la regola guarda però solo le sillabe 5-7). L’ultima sillaba di ogni pāda si conta lunga anche se è breve [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Dove l’ho trovato: su una pagina di purebhakti.com dedicata alla venerazione di Śrī Jagannātha, Baladeva e Subhadrā, nella sezione «Waking Śrī Jagannātha, Baladeva and Subhadrā-devī» (il risveglio delle Divinità), con la traduzione inglese che ho usato. La pagina non indica un testo d’origine: questo verso e il successivo («jaya jaya kṛpāmaya…») sono i due versi di quella sezione.'},
  {v:false,t:'Da quale testo sia tratto, chi parla e in quale momento originale: non ho dati affidabili. Non è nello Śrī Ślokāmṛta-bindu e non l’ho trovato su Vedabase né in una ricerca sul web (nemmeno nell’Hari-bhakti-vilāsa, dove ho cercato le altre preghiere della serie).'},
  {v:false,t:'Dal testo stesso: è una preghiera in prima persona rivolta a Keśava (Acyuta): chi parla lo chiama colui che toglie l’angoscia di chi si è arreso e gli chiede di concedere la Sua misericordia con il Suo sguardo.'}
 ],
 note:'Il testo del verso è quello stampato nello screenshot che mi hai mandato: non l’ho confrontato con un’altra fonte. Lo screenshot ha «prapannārtti-hara» (con tt) e «bhūyo māṁ pārayācyuta»: ho tenuto la scrittura dello screenshot. La divisione in quattro pāda da otto sillabe segue le quattro righe stampate. La devanāgarī l’ho ricavata io dal testo in caratteri latini; non ho un numero del verso, quindi la chiusura è un semplice ॥. Il parola per parola è mio, da verificare.',
sources:[
  'Testo del verso e traduzione inglese: screenshot che mi hai mandato; stesso testo e stessa traduzione sulla pagina web https://www.purebhakti.com/resources/arcana/1594-worship-of-%C5%9Br%C4%AB-jagann%C4%81tha,-baladeva-and-subhadr%C4%81-dev%C4%AB (sezione del risveglio delle Divinità).',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare. Ricerche su Vedabase e sul web: nessuna fonte d’origine trovata. Non ho dati affidabili su autore e testo di origine.',
  'Sūtra 28, 42, 44, 72, 73 e 80: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Devanāgarī: ricavata da me dal testo in caratteri latini.',
  'Parola per parola, genere, caso, composti, scansione, nome del metro e lakṣaṇa: conoscenza generale, da verificare.'
 ]
});
/* ----- fine deva prapannārtti-hara ----- */
/* ----- jaya jaya kṛpāmaya ----- */
DATA.push({
 id:'jaya-jaya-krpamaya',
 label:'jaya jaya kṛpāmaya',
 src:'',
 sub:'verso in bengalese, non in sanscrito · 2 righe (14 + 13 sillabe contate da me)',
 padas:[
  {iast:'jaya jaya kṛpāmaya jagatera nātha', dev:'जय जय कृपामय जगतेर नाथ ।'},
  {iast:'sarva jagatere kara śubha dṛṣṭi-pāt', dev:'सर्व जगतेरे कर शुभ दृष्टिपात ॥'}
 ],
 translation:'O Bhagavān! Gloria, gloria a Te, o misericordioso Signore dell’universo: per favore getta il Tuo sguardo propizio su tutti i mondi.',
 translationSrc:'Resa italiana mia della traduzione inglese stampata sotto il verso nello screenshot che mi hai mandato. Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto) e non ho trovato una fonte su Vedabase né sul web.',
 words:[
  {k:'jaya jaya',mean:'gloria, gloria',info:'Traduzione dello screenshot: «All glories, all glories unto You».'},
  {k:'kṛpāmaya',mean:'misericordioso, pieno di misericordia',info:'Traduzione dello screenshot: «merciful».'},
  {k:'jagatera',mean:'dell’universo',info:'Traduzione dello screenshot: «of the universe».'},
  {k:'nātha',mean:'Signore',info:'Traduzione dello screenshot: «Lord».'},
  {k:'sarva',mean:'tutti',info:'Traduzione dello screenshot: «all».'},
  {k:'jagatere',mean:'sui mondi',info:'Traduzione dello screenshot: «upon all the worlds».'},
  {k:'kara',mean:'fa’, compi',info:'Traduzione dello screenshot: «please cast».'},
  {k:'śubha',mean:'propizio',info:'Traduzione dello screenshot: «auspicious».'},
  {k:'dṛṣṭi-pāt',mean:'lo sguardo gettato',info:'Il senso «gettare lo sguardo» è quello della traduzione dello screenshot («please cast ... glance»).'}
 ],
 surf:[
  [{t:'jaya jaya',e:[0]},{t:'kṛpāmaya',e:[1]},{t:'jagatera',e:[2]},{t:'nātha',e:[3]}],
  [{t:'sarva',e:[4]},{t:'jagatere',e:[5]},{t:'kara',e:[6]},{t:'śubha',e:[7]},{t:'dṛṣṭi-pāt',e:[8]}]
 ],
 metrica:{
  name:'metro non identificato: non ho dati affidabili',
  syl:'14 nella riga 1, 13 nella riga 2',
  sylNote:'contate da me sul testo in caratteri latini, una sillaba per vocale; la pronuncia bengalese può dare un conteggio diverso',
  gana:'non ho dati affidabili su uno schema di gaṇa per questo verso',
  yati:'non ho dati affidabili su una pausa fissa',
  yatiAt:99,
  lakshana:'non ho dati affidabili su un lakṣaṇa per questo verso',
  scan:['LLLLLGLLLLGLGL','GLLLGGLLLLGLG'],
  note:'Scansione fatta con le regole sanscritte (sillaba lunga se ha vocale lunga, e, o, ai, au, oppure è seguita da due consonanti; ṛ è breve). Non è una scansione bengalese. Le due righe hanno 14 e 13 sillabe: non ho dati affidabili per dire se la differenza sia una licenza, un effetto della pronuncia (ad esempio sarva) o un altro metro.'
 },
 context:[
  {v:true,t:'Dove l’ho trovato: sulla stessa pagina di purebhakti.com del verso precedente (venerazione di Śrī Jagannātha, Baladeva e Subhadrā), nella sezione «Waking Śrī Jagannātha, Baladeva and Subhadrā-devī», come secondo dei due versi, con la traduzione inglese che ho usato. La pagina non indica un testo d’origine.'},
  {v:false,t:'Da quale testo sia tratto, chi parla e in quale momento originale: non ho dati affidabili. Non è nello Śrī Ślokāmṛta-bindu e non l’ho trovato su Vedabase né in una ricerca sul web.'},
  {v:false,t:'Dal testo stesso: è un’invocazione in bengalese, in forma di lode («jaya jaya»), rivolta a Bhagavān come Signore dell’universo, perché getti il Suo sguardo propizio su tutti i mondi.'}
 ],
 note:'Il verso è in bengalese (non in sanscrito): per questo non ho messo né la grammatica né la sezione dei sandhi, solo la metrica. Della metrica ho dato solo il conteggio delle sillabe e una scansione calcolata con le regole sanscrite: non ho dati affidabili sul nome del metro né sulla prosodia bengalese. Il testo è quello stampato nello screenshot che mi hai mandato: non l’ho confrontato con un’altra fonte. La divisione in due righe segue le due righe stampate. La devanāgarī l’ho ricavata io dal testo in caratteri latini: poiché il testo è bengalese, è solo una trascrizione mia; non ho un numero del verso, quindi la chiusura è un semplice ॥. Il parola per parola è mio, da verificare.',
sources:[
  'Testo del verso e traduzione inglese: screenshot che mi hai mandato; stesso testo e stessa traduzione sulla pagina web https://www.purebhakti.com/resources/arcana/1594-worship-of-%C5%9Br%C4%AB-jagann%C4%81tha,-baladeva-and-subhadr%C4%81-dev%C4%AB (sezione del risveglio delle Divinità).',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare. Ricerca sul web: nessuna fonte d’origine trovata. Non ho dati affidabili su autore e testo di origine.',
  'Devanāgarī: ricavata da me dal testo in caratteri latini.',
  'Parola per parola: da verificare. Conteggio delle sillabe e scansione: calcolati da me sul testo con le regole del sanscrito, non da una fonte.'
 ]
});
/* ----- fine jaya jaya kṛpāmaya ----- */

/* ===== FINE RACCOLTA ===== */
