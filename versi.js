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

/* ----- Caitanya-caritāmṛta Ādi 3.89 ----- */
DATA.push({
 id:'cc-adi-3-89',
 label:'Caitanya-caritāmṛta Ādi 3.89',
 src:'Caitanya-caritāmṛta Ādi 3.89',
 sub:'vasantatilakā · 14 sillabe per pāda',
 padas:[
  {iast:'ullaṅghita-trividha-sīma-samātiśāyi-', dev:'उल्लङ्घितत्रिविधसीमसमातिशायि'},
  {iast:'sambhāvanaṁ tava parivraḍhima-svabhāvam', dev:'सम्भावनं तव परिव्रढिमस्वभावम् ।'},
  {iast:'māyā-balena bhavatāpi niguhyamānaṁ', dev:'मायाबलेन भवतापि निगुह्यमानं'},
  {iast:'paśyanti kecid aniśaṁ tvad-ananya-bhāvāḥ', dev:'पश्यन्ति केचिदनिशं त्वदनन्यभावाः ॥८९॥'}
 ],
 translation:'O mio Signore, tutto ciò che si trova nella natura materiale è limitato dal tempo, dallo spazio e dal pensiero. Le Tue caratteristiche, invece, sono senza pari e insuperabili, e sono trascendentali a tutti questi limiti. Anche se a volte le nascondi con il potere della Tua energia, i Tuoi devoti puri, la cui devozione è esclusivamente per Te, possono sempre vederle.',
 translationSrc:'Resa italiana mia della traduzione inglese di Śrīla A.C. Bhaktivedanta Swami Prabhupāda, Vedabase, CC Ādi 3.89 (https://vedabase.io/en/library/cc/adi/3/89/). Ho letto la pagina tramite uno strumento che la riassume: solo l’inizio («O my Lord, everything within material nature is limited by time, space and thought») è sicuro parola per parola; il resto rende fedelmente il senso ma va ricontrollato su Vedabase prima di considerarlo definitivo. Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto).',
 words:[
  {k:'ullaṅghita-trividha-sīma-sama-atiśāyi-sambhāvanam',mean:'(la Tua natura) che ha oltrepassato i tre tipi di limiti ed è senza pari e insuperabile',info:'composto (un solo composto, a cavallo dei pāda 1 e 2) · dvitīyā ekavacana = accusativo singolare (n.) [mia lettura: concorda con parivraḍhima-svabhāvam e con niguhyamānam]. Significati dei membri letti su Vedabase tramite un riassunto, da ricontrollare; per sambhāvanam non ho un significato sicuro dai synonyms: la resa «ciò con cui si concepisce / la caratteristica concepibile» è un’approssimazione mia, da verificare. «Tre tipi di limiti» = tempo, spazio e pensiero (dalla traduzione di Vedabase).',parts:[['ullaṅghita','(part.) oltrepassato, superato (ut + radice laṅgh) [conoscenza generale, da verificare]'],['tri-vidha','di tre tipi, triplice'],['sīma','limite, confine (tema sīman/sīmā: non ho dati affidabili sul genere)'],['sama','uguale, pari'],['atiśāyin','che eccelle, che supera'],['sambhāvana','(n.) la possibilità / il modo di concepire [significato incerto, da verificare]']]},
  {k:'tava',mean:'Tuo, di Te',info:'pronome yuṣmad · ṣaṣṭhī ekavacana = genitivo singolare (forma piena; la forma sostitutiva è te, tabella del Vyākaraṇa sul sūtra 253)'},
  {k:'parivraḍhima-svabhāvam',mean:'la cui natura è la supremazia / la grandezza',info:'composto · dvitīyā ekavacana = accusativo singolare (n.) [mia lettura]. «Supremazia» o «grandezza» per parivraḍhiman: i due riassunti di Vedabase che ho letto non coincidono, quindi il significato esatto è da verificare.',parts:[['parivraḍhiman','(m.) supremazia, grandezza [genere: conoscenza generale, da verificare]'],['svabhāva','(m.) natura propria, natura intrinseca']]},
  {k:'māyā-balena',mean:'con il potere della māyā (l’energia illusoria)',info:'composto · tṛtīyā ekavacana = strumentale singolare (n.)',parts:[['māyā','(f.) māyā, energia illusoria'],['bala','(n.) forza, potere']]},
  {k:'bhavatā',mean:'da Te',info:'tema bhavat (m.), forma di rispetto per «Tu» · tṛtīyā ekavacana = strumentale singolare [mia conoscenza generale, da verificare]'},
  {k:'api',mean:'anche, sebbene',info:'indeclinabile'},
  {k:'niguhyamānam',mean:'che viene nascosto, celato',info:'participio presente passivo (śānac), radice guh con il prefisso ni: nascondere · dvitīyā ekavacana = accusativo singolare (n.) [mia lettura]'},
  {k:'paśyanti',mean:'vedono',info:'verbo, presente 3ª plurale · radice dṛś (al presente paśya-): vedere [mia conoscenza generale, da verificare]'},
  {k:'kecit',mean:'alcuni, certuni',info:'pronome indefinito (ka + cit) · prathamā bahuvacana = nominativo plurale (m.) [mia lettura]. Nel verso compare come kecid (sandhi).'},
  {k:'aniśam',mean:'sempre, di continuo',info:'indeclinabile (avverbio), letteralmente «senza notte» [mia conoscenza generale, da verificare]'},
  {k:'tvad-ananya-bhāvāḥ',mean:'coloro la cui devozione è esclusivamente per Te',info:'composto · prathamā bahuvacana = nominativo plurale (m.), soggetto di paśyanti. Nei composti la forma del pronome yuṣmad è tvad-. Vedabase rende «ananya-bhāvāḥ» con «coloro che hanno devozione indivisa» (da un riassunto).',parts:[['tvad','a Te, per Te (forma di yuṣmad nel composto)'],['ananya','(agg.) non altro, esclusivo (na + anya)'],['bhāva','(m.) sentimento, devozione']]}
 ],
 surf:[
  [{t:'ullaṅghita-trividha-sīma-samātiśāyi-',e:[0]}],
  [{t:'sambhāvanaṁ',e:[0]},{t:'tava',e:[1]},{t:'parivraḍhima-svabhāvam',e:[2]}],
  [{t:'māyā-balena',e:[3]},{t:'bhavat-',e:[4]},{t:'āpi',e:[5]},{t:'niguhyamānaṁ',e:[6]}],
  [{t:'paśyanti',e:[7]},{t:'kecid',e:[8]},{t:'aniśaṁ',e:[9]},{t:'tvad-ananya-bhāvāḥ',e:[10]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā'},
  61:{txt:'viṣṇudāso viṣṇupadānte harighoṣe ca harigadā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa harigadā; se non è a fine di viṣṇupada, lo diventa solo se segue un harighoṣa.',ex:'Esempio: bhagavat + icchā → bhagavad-icchā',note:'La sostituzione è quella più simile per luogo di pronuncia (sthāne sadṛśatamaḥ).'},
  66:{txt:'da-tau para-varṇau la-ca-ṭa-vargeṣu nityam',tr:'Da-rāma e ta-rāma cambiano sempre nella varṇa che segue, quando segue la-rāma, ca-varga o ṭa-varga.',ex:'Esempio: tad + lakṣmī-pateḥ → tal lakṣmī-pateḥ'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: saṁsāram + tarati → saṁsāraṁ tarati oppure saṁsāran tarati'}
 },
 sandhi:[
  {a:'ut',b:'laṅghita',r:'ullaṅghita',sut:[66],note:'t davanti a la diventa l (66). Qui ut è un prefisso e laṅghita viene dalla radice laṅgh: i sūtra parlano di fine di viṣṇupada, quindi l’applicazione è una mia lettura, da verificare.'},
  {a:'sama',b:'atiśāyi',r:'samātiśāyi',sut:[42],note:'a + a → ā, dentro il composto.'},
  {a:'sam',b:'bhāvanam',r:'sambhāvanam',sut:[72,73],note:'Prima m → ṁ (72), poi ṁ → m, l’hariveṇu del pa-varga a cui appartiene bh (73). Come per «kṛṣṇam bhajati» nel vṛtti del 73. Qui sam è un prefisso, quindi l’applicazione è una mia lettura, da verificare.'},
  {a:'sambhāvanam',b:'tava',r:'sambhāvanaṁ tava',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare n, la nasale del ta-varga a cui appartiene t (come saṁsāran tarati): è facoltativo, e nel verso c’è ṁ. Il pāda 1 e il pāda 2 sono uniti nel composto, il sandhi è dentro il pāda 2.'},
  {a:'bhavatā',b:'api',r:'bhavatāpi',sut:[42],note:'ā + a → ā.'},
  {a:'kecit',b:'aniśam',r:'kecid aniśam',sut:[61],note:'t finale diventa d (harigadā, la lettera sonora dello stesso luogo di pronuncia). Il sūtra non nomina la vocale che segue: l’esempio del vṛtti con vocale è bhagavat + icchā → bhagavad-icchā.'},
  {a:'aniśam',b:'tvad-',r:'aniśaṁ tvad-',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il sūtra 73 la nasale può anche diventare n (aniśan tvad): è facoltativo, e nel verso c’è ṁ.'},
  {a:'tvat',b:'ananya',r:'tvad-ananya',sut:[61],note:'t → d (61), dentro il composto. Il PDF (nota alla declinazione di ṣaṣ) dice che ogni parola dentro un composto è un viṣṇupada a sé: per questo vale la regola della fine di viṣṇupada.'}
 ],
 seg:[
  [{t:'ullaṅghita',s:[1]},{t:'-trividha-sīma-'},{t:'samātiśāyi',s:[2]},{t:'-'}],
  [{t:'sam',s:[3]},{t:'bhāvanaṁ tava',s:[4]},{t:' parivraḍhima-svabhāvam'}],
  [{t:'māyā-balena '},{t:'bhavatāpi',s:[5]},{t:' niguhyamānaṁ'}],
  [{t:'paśyanti '},{t:'kecid',s:[6]},{t:' '},{t:'aniśaṁ',s:[7]},{t:' '},{t:'tvad',s:[8]},{t:'-ananya-bhāvāḥ'}]
 ],
 metrica:{
  name:'Vasantatilakā',
  syl:14,
  gana:'ta · bha · ja · ja · ga · ga',
  yati:'non ho dati affidabili su una pausa fissa (alcuni manuali indicano dopo l’8ª sillaba) [mia conoscenza generale, da verificare]',
  lakshana:'uktā vasantatilakā ta-bha-jā jagau gaḥ [mia conoscenza generale, da verificare]',
  scan:['GGLGLLLGLLGLGL','GGLGLLLGLLGLGL','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG'],
  note:'I quattro pāda seguono lo schema ta-bha-ja-ja-ga-ga (GGL GLL LGL LGL GG). Nei pāda 1 e 2 l’ultima sillaba (yi, vam) è breve: a fine pāda si conta lunga [mia conoscenza generale, da verificare]. Scansione fatta da me sul testo; il nome del metro lo ricavo dallo schema, non da una fonte. Non ho trovato su Vedabase il nome del metro: da verificare.'
 },
 context:[
  {v:true,t:'Il verso è Śrī Caitanya-caritāmṛta, Ādi-līlā 3.89, nel capitolo 3, «Le ragioni esterne dell’apparizione di Śrī Caitanya Mahāprabhu». Il verso precedente (Ādi 3.88) dice che Kṛṣṇa cerca in molti modi di nascondersi, ma i Suoi devoti puri Lo conoscono per quello che è. Il verso seguente (Ādi 3.90) dice che chi ha natura demoniaca non Lo conosce mai, mentre Lui non può nascondersi ai Suoi devoti puri.'},
  {v:true,t:'Il commento di Vedabase indica che questo verso è citato dallo Stotra-ratna (13) di Yāmunācārya.'},
  {v:false,t:'Dal testo stesso: chi parla è chi prega e si rivolge direttamente al Signore («Tuo», «da Te»). Nel Caitanya-caritāmṛta il verso è riportato come prova a sostegno di Ādi 3.88 [mia lettura, da verificare]; a citarlo è l’autore dell’opera, Kṛṣṇadāsa Kavirāja [mia conoscenza generale, da verificare]. In che momento Yāmunācārya abbia composto o pronunciato la preghiera: non ho dati affidabili.'}
 ],
 note:'Il testo del verso è quello di Vedabase (CC Ādi 3.89), che dà anche la scrittura parivraḍhima. La devanāgarī l’ho ricavata io dal testo in caratteri latini: Vedabase mostra il testo in bengalese. La chiusura ॥८९॥ è il numero del verso nel Caitanya-caritāmṛta. La divisione in quattro pāda da 14 sillabe è mia, dedotta dalla scansione. Il parola per parola l’ho riscritto da un riassunto della pagina di Vedabase, non dai synonyms letti per intero: da verificare.',
 sources:[
  'Testo del verso, traduzione inglese, contesto e indicazione dello Stotra-ratna (13) di Yāmunācārya: Vedabase, CC Ādi 3.89 (https://vedabase.io/en/library/cc/adi/3/89/ e https://vedabase.net/cc/adi/3/89.htm); versi vicini Ādi 3.88 e 3.90 su vedabase.io. Pagine lette tramite uno strumento che le riassume.',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non l’ho trovato con due ricerche. Il ca-link-finder non l’ho potuto consultare da qui.',
  'Sūtra 42, 61, 66, 72 e 73: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Devanāgarī: ricavata da me dal testo in caratteri latini.',
  'Genere, caso, composti, scansione, nome del metro e lakṣaṇa: conoscenza generale, da verificare.'
 ]
});
/* ----- fine Caitanya-caritāmṛta Ādi 3.89 ----- */

/* ----- Caitanya-caritāmṛta Ādi 3.16 ----- */
DATA.push({
 id:'cc-adi-3-16',
 label:'Caitanya-caritāmṛta Ādi 3.16',
 src:'Caitanya-caritāmṛta Ādi 3.16',
 sub:'verso in bengalese, non in sanscrito · 2 righe (13 + 14 sillabe contate da me)',
 padas:[
  {iast:'aiśvarya-jñānete saba jagat miśrita', dev:'ऐश्वर्य-ज्ञानेते सब जगत् मिश्रित ।'},
  {iast:'aiśvarya-śithila-preme nāhi mora prīta', dev:'ऐश्वर्य-शिथिल-प्रेमे नाहि मोर प्रीत ॥१६॥'}
 ],
 translation:'Il mondo intero è pervaso dalla conoscenza della Mia opulenza; ma l’amore reso debole da questa conoscenza dell’opulenza non Mi soddisfa.',
 translationSrc:'Resa italiana mia, dal senso della traduzione inglese di Śrīla A.C. Bhaktivedanta Swami Prabhupāda, Vedabase, CC Ādi 3.16 (https://vedabase.io/en/library/cc/adi/3/16/). Ho letto la pagina solo tramite uno strumento che la riassume e non ho il testo inglese parola per parola: il senso è confermato da due letture della stessa pagina, ma la formulazione va ricontrollata su Vedabase. Il verso non l’ho trovato nello Śrī Ślokāmṛta-bindu (PDF del progetto).',
 words:[
  {k:'aiśvarya-jñānete',mean:'con la conoscenza dell’opulenza (della maestà)',info:'composto bengalese. Significato dai synonyms di Vedabase («with knowledge of the opulences»), letti tramite un riassunto: da ricontrollare.',parts:[['aiśvarya','opulenza, maestà'],['jñānete','con la conoscenza, nella conoscenza']]},
  {k:'saba',mean:'tutto, tutti',info:'Vedabase: «all» (riassunto).'},
  {k:'jagat',mean:'il mondo, l’universo',info:'Vedabase: «the world» / «the universe» (riassunto; le due pagine lette danno le due rese).'},
  {k:'miśrita',mean:'mescolato, misto (pervaso)',info:'Vedabase: «mixed» (riassunto). Nella traduzione il senso è «pervaso» dalla conoscenza dell’opulenza: la resa «pervaso» è mia, da verificare.'},
  {k:'aiśvarya-śithila-preme',mean:'nell’amore indebolito dall’opulenza',info:'composto bengalese. Vedabase: «weakened by majesty» / «in love» (riassunto): da ricontrollare.',parts:[['aiśvarya','opulenza, maestà'],['śithila','allentato, indebolito'],['preme','nell’amore']]},
  {k:'nāhi',mean:'non c’è, non',info:'Vedabase: «there is not» (riassunto).'},
  {k:'mora',mean:'Mio, di Me',info:'Vedabase: «My» (riassunto).'},
  {k:'prīta',mean:'piacere, soddisfazione',info:'Vedabase: «pleasure» (riassunto). Una seconda lettura della pagina lo rende «delight, attraction»: il significato esatto va ricontrollato.'}
 ],
 surf:[
  [{t:'aiśvarya-jñānete',e:[0]},{t:'saba',e:[1]},{t:'jagat',e:[2]},{t:'miśrita',e:[3]}],
  [{t:'aiśvarya-śithila-preme',e:[4]},{t:'nāhi',e:[5]},{t:'mora',e:[6]},{t:'prīta',e:[7]}]
 ],
 metrica:{
  name:'metro non identificato: non ho dati affidabili',
  syl:'13 nella riga 1, 14 nella riga 2',
  sylNote:'contate da me sul testo in caratteri latini, una sillaba per vocale; la pronuncia bengalese può dare un conteggio diverso',
  gana:'non ho dati affidabili su uno schema di gaṇa per questo verso',
  yati:'non ho dati affidabili su una pausa fissa',
  yatiAt:99,
  lakshana:'non ho dati affidabili su un lakṣaṇa per questo verso',
  scan:['GGGGGGLLLGGLL','GGLLLGGGGLGGGL'],
  note:'Scansione fatta con le regole sanscritte (sillaba lunga se ha vocale lunga, e, o, ai, au, oppure è seguita da due consonanti; ṛ è breve; l’ultima sillaba di ogni riga la conto come è, senza forzarla lunga). Non è una scansione bengalese. Le due righe hanno 13 e 14 sillabe con questo conteggio: non ho dati affidabili per dire se la differenza dipenda dalla pronuncia bengalese o da altro, né quale sia il metro.'
 },
 context:[
  {v:true,t:'Il verso è Śrī Caitanya-caritāmṛta, Ādi-līlā 3.16, nel capitolo 3, «Le ragioni esterne dell’apparizione di Śrī Caitanya Mahāprabhu». Il verso precedente (Ādi 3.15) dice che nel mondo molti Lo adorano seguendo le regole (vidhi-bhakti), ma con la sola devozione regolata non si ottiene il sentimento di Vraja (vraja-bhāva). Il verso seguente (Ādi 3.17) dice che chi Lo adora con le regole, nella conoscenza dell’opulenza, raggiunge Vaikuṇṭha e i quattro tipi di liberazione.'},
  {v:true,t:'Chi parla è Śrī Kṛṣṇa, in prima persona («Mi», «Mio»): è il Suo ragionamento sul perché apparire come Śrī Caitanya. Secondo la sintesi del commento di Vedabase, vuole dare il rapporto d’amore intimo (di servo, amico, genitore, amante), che non nasce dalla sola conoscenza della Sua opulenza.'},
  {v:true,t:'Lo stesso testo compare anche su Vedabase come CC Ādi 4.17.'},
  {v:false,t:'In che momento preciso Kṛṣṇa pronunci o pensi queste parole, oltre al ragionamento sul motivo dell’apparizione di Śrī Caitanya: non ho dati affidabili.'}
 ],
 note:'Il testo del verso è quello di Vedabase (CC Ādi 3.16) ed è lo stesso che mi hai mandato (con «nāhi»); la pagina Ādi 4.17 di Vedabase, letta tramite un riassunto, potrebbe avere «nahi»: non l’ho potuto confrontare. Il verso è in bengalese (non in sanscrito): per questo non ho messo né la grammatica né la sezione dei sandhi, solo la metrica. Della metrica ho dato solo il conteggio delle sillabe e una scansione con le regole sanscritte: non ho dati affidabili sul nome del metro. La devanāgarī l’ho ricavata io dal testo in caratteri latini: poiché il testo è bengalese, è solo una trascrizione mia. La chiusura ॥१६॥ è il numero del verso nel Caitanya-caritāmṛta. Il parola per parola l’ho riscritto da riassunti della pagina di Vedabase, non dai synonyms letti per intero: da verificare.',
 sources:[
  'Testo del verso, parola per parola, traduzione e contesto: Vedabase, CC Ādi 3.16 (https://vedabase.io/en/library/cc/adi/3/16/); versi vicini Ādi 3.15 e 3.17 su vedabase.io; stesso testo anche in Ādi 4.17 (https://vedabase.io/en/library/cc/adi/4/17/). Pagine lette tramite uno strumento che le riassume.',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare (due ricerche). Compare invece, nello stesso argomento, Madhya 8.230 (gopī-ānugatya vinā aiśvarya-jñāne), che è un altro verso. Il ca-link-finder non l’ho potuto consultare da qui.',
  'Devanāgarī: ricavata da me dal testo in caratteri latini.',
  'Conteggio delle sillabe e scansione: calcolati da me sul testo con le regole del sanscrito, non da una fonte.'
 ]
});
/* ----- fine Caitanya-caritāmṛta Ādi 3.16 ----- */

/* ----- Stava-mālā · aṅga-śyāmalima ----- */
DATA.push({
 id:'stava-mala-anga-syamalima',
 label:'Stava-mālā · aṅga-śyāmalima',
 src:'Stava-mālā · Rūpa Gosvāmī · preghiera conclusiva',
 sub:'śārdūla-vikrīḍita · 19 sillabe per pāda',
 padas:[
  {iast:'aṅga-śyāmalima-cchaṭābhir abhito mandīkṛtendīvaraṁ', dev:'अङ्गश्यामलिमच्छटाभिरभितो मन्दीकृतेन्दीवरं'},
  {iast:'jāḍyaṁ jāguḍa-rociṣāṁ vidadhataṁ paṭṭāmbarasya śriyā', dev:'जाड्यं जागुडरोचिषां विदधतं पट्टाम्बरस्य श्रिया ।'},
  {iast:'vṛndāraṇya-vilāsinaṁ hṛdi lasad-dāmābhir āmodaraṁ', dev:'वृन्दारण्यविलासिनं हृदि लसद्दामाभिरामोदरं'},
  {iast:'rādhā-skandha-niveśitojjvala-bhujaṁ dhyāyema dāmodaram', dev:'राधास्कन्धनिवेशितोज्ज्वलभुजं ध्यायेम दामोदरम् ॥'}
 ],
 translation:'Su Dāmodara, il cui scuro splendore corporeo mette in imbarazzo i fiori di loto blu, lo splendore delle cui vesti di seta stordisce la gloria del kuṅkuma giallo, che gode di passatempi trascendentali nella foresta di Vṛndāvana, il cui petto è fragrante di una brillante ghirlanda di fiori e il cui magnifico braccio poggia sulla spalla di Rādhā, meditiamo.',
 translationSrc:'Resa italiana mia della traduzione inglese riportata da kksongs.org (pagina «Untitled Prayer»), identica a quella dello screenshot; la pagina non indica chi ha tradotto. Altre traduzioni inglesi trovate: anusilana.in e Harmonist Monthly («A Mine of Valuable Instructions»); quest’ultima aggiunge «vaijayantī» e «left hand», parole che nel testo sanscrito non vedo. Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto: tre ricerche, nessun risultato).',
 words:[
  {k:'aṅga-śyāmalima-cchaṭābhiḥ',mean:'dai bagliori dello scuro (splendore) delle membra',info:'composto · tṛtīyā bahuvacana = strumentale plurale (f.) [mia conoscenza generale, da verificare]. Nel verso compare come aṅga-śyāmalima-cchaṭābhir (sandhi). Significati dei membri dal parola per parola dello screenshot: «limbs», «dark», «splendor».',parts:[['aṅga','(n.) membro, membra del corpo [screenshot: «limbs»]'],['śyāmalima','scuro, scurezza [screenshot: «dark»]; non ho dati affidabili sulla forma esatta del tema'],['cchaṭā','splendore, bagliore [screenshot: «splendor»]; tema e genere (f.) sono una mia lettura, da verificare']]},
  {k:'abhitaḥ',mean:'ovunque, da ogni parte',info:'indeclinabile [screenshot: «everywhere»]. Nel verso compare come abhito (sandhi).'},
  {k:'mandī-kṛta-indīvaram',mean:'(Dāmodara) che ha eclissato, reso opaco il loto blu',info:'composto · dvitīyā ekavacana = accusativo singolare (m.) [mia lettura: concorda con dāmodaram, come gli altri attributi]. Screenshot: «eclipsed», «blue lotuses». Nella traduzione: «embarrasses the blue lotus flowers».',parts:[['mandī-kṛta','reso opaco, eclissato [screenshot: «eclipsed»]. Una lezione del ca-link-finder (trascrizione automatica, non verificata) spiega manda come «lento, ottuso»'],['indīvara','loto blu [screenshot: «blue lotuses»]; non ho dati affidabili sul genere']]},
  {k:'jāḍyam',mean:'freddezza / stordimento (da verificare)',info:'tema jāḍya · dvitīyā ekavacana = accusativo singolare (n.) [mia lettura: oggetto di vidadhatam]. Lo screenshot rende «coldness», la traduzione «stuns»: i due significati non coincidono, quindi il significato esatto è da verificare.'},
  {k:'jāguḍa-rociṣām',mean:'degli splendori del kuṅkuma (zafferano)',info:'composto · ṣaṣṭhī bahuvacana = genitivo plurale [mia conoscenza generale, da verificare]. Screenshot: «of kuṅkuma», «splendor».',parts:[['jāguḍa','kuṅkuma [screenshot: «of kuṅkuma»]; anusilana.in traduce «saffron»'],['rociṣ','splendore [screenshot: «splendor»]; tema e genere (n.): conoscenza generale, da verificare']]},
  {k:'vidadhatam',mean:'che produce, che causa',info:'participio presente (śatṛ) · dvitīyā ekavacana = accusativo singolare (m.), da vi + dhā [mia conoscenza generale, da verificare]. Screenshot: «doing». Che regga jāḍyam («che produce jāḍya») è una mia lettura.'},
  {k:'paṭṭa-ambarasya',mean:'della veste di seta',info:'composto · ṣaṣṭhī ekavacana = genitivo singolare (n.) [mia lettura]. Nel verso compare come paṭṭāmbarasya (sandhi). Lo screenshot dà solo «garments» per tutto il composto; la traduzione dice «silken garments». La divisione nei due membri è mia.',parts:[['paṭṭa','seta [dalla traduzione: «silken»]'],['ambara','veste, abito [screenshot: «garments»]']]},
  {k:'śriyā',mean:'dallo splendore, con la bellezza',info:'tema śrī (f.) · tṛtīyā ekavacana = strumentale singolare [mia conoscenza generale, da verificare]. Screenshot: «splendor».'},
  {k:'vṛndāraṇya-vilāsinam',mean:'che gode dei passatempi nella foresta di Vṛndā (Vṛndāvana)',info:'composto · dvitīyā ekavacana = accusativo singolare (m.) [mia lettura]. Screenshot: «Vṛndāvana forest», «enjoying pastimes».',parts:[['vṛndāraṇya','foresta di Vṛndā, cioè di Vṛndāvana [screenshot]'],['vilāsin','che gode di passatempi [screenshot: «enjoying pastimes»]']]},
  {k:'hṛdi',mean:'nel cuore, sul petto',info:'tema hṛd (n.) · saptamī ekavacana = locativo singolare [mia conoscenza generale, da verificare]. Screenshot: «in the heart»; la traduzione dice «chest».'},
  {k:'lasat-dāmābhiḥ',mean:'con ghirlande splendenti',info:'composto · tṛtīyā bahuvacana = strumentale plurale [mia lettura]. Nel verso compare come lasad-dāmābhir (sandhi). Screenshot: «splendid», «with garlands».',parts:[['lasat','splendente, che brilla [screenshot: «splendid»]; che sia un participio della radice las è conoscenza generale, da verificare'],['dāmā','ghirlanda [screenshot: «garlands»]; sul tema e sul genere di dāmābhiḥ non ho dati affidabili']]},
  {k:'āmodaram',mean:'fragrante',info:'accusativo singolare (m.) [mia lettura: concorda con dāmodaram]. Screenshot: «fragrant». Lettura ambigua: kksongs.org e Harmonist Monthly lo scrivono diviso (dāmābhir āmodaraṁ), la devanāgarī di anusilana.in è unita (lasaddāmābhirāmodaram) e non indica la divisione. Non ho trovato un’analisi indipendente di āmodaram: da verificare.'},
  {k:'rādhā-skandha-niveśita-ujjvala-bhujam',mean:'il cui splendido braccio è posto sulla spalla di Rādhā',info:'composto · dvitīyā ekavacana = accusativo singolare (m.) [mia lettura: concorda con dāmodaram]. Nel verso compare come rādhā-skandha-niveśitojjvala-bhujam (sandhi). Lo screenshot rende bhujam con «splendid», ripetendo ujjvala; la traduzione dice «arm». Che bhuja sia «braccio» è una mia osservazione, coerente con la traduzione, da verificare.',parts:[['rādhā','di Rādhā [screenshot]'],['skandha','spalla [screenshot: «the shoulders»; traduzione: «shoulder»]'],['niveśita','posto, appoggiato [screenshot: «placed»]'],['ujjvala','splendente, magnifico [screenshot: «splendid»]'],['bhuja','braccio [mia osservazione dalla traduzione; lo screenshot dice «splendid»]']]},
  {k:'dhyāyema',mean:'meditiamo, possiamo meditare',info:'verbo, ottativo (vidhiliṅ) 1ª plurale · radice dhyai: meditare [mia conoscenza generale, da verificare]. Screenshot: «we meditate»; traduzione: «let us meditate».'},
  {k:'dāmodaram',mean:'su Dāmodara',info:'tema dāmodara (m.) · dvitīyā ekavacana = accusativo singolare, oggetto di dhyāyema [mia lettura]. Screenshot: «on Lord Damodara».'}
 ],
 surf:[
  [{t:'aṅga-śyāmalima-cchaṭābhir',e:[0]},{t:'abhito',e:[1]},{t:'mandīkṛtendīvaraṁ',e:[2]}],
  [{t:'jāḍyaṁ',e:[3]},{t:'jāguḍa-rociṣāṁ',e:[4]},{t:'vidadhataṁ',e:[5]},{t:'paṭṭāmbarasya',e:[6]},{t:'śriyā',e:[7]}],
  [{t:'vṛndāraṇya-vilāsinaṁ',e:[8]},{t:'hṛdi',e:[9]},{t:'lasad-dāmābhir',e:[10]},{t:'āmodaraṁ',e:[11]}],
  [{t:'rādhā-skandha-niveśitojjvala-bhujaṁ',e:[12]},{t:'dhyāyema',e:[13]},{t:'dāmodaram',e:[14]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā'},
  43:{txt:'a-dvayam i-dvaye e',tr:'Quando a-dvaya (a, ā) è seguito da i-dvaya (i, ī), si uniscono e diventano e.',ex:'Esempio: yādava + indraḥ → yādavendraḥ',note:'Il militvā del sūtra 42 vale anche per i sūtra da 43 a 49 (Saṁśodhinī del PDF).'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  61:{txt:'viṣṇudāso viṣṇupadānte harighoṣe ca harigadā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa harigadā; se non è a fine di viṣṇupada, lo diventa solo se segue un harighoṣa.',ex:'Esempio: bhagavat + icchā → bhagavad-icchā',note:'La sostituzione è quella più simile per luogo di pronuncia (sthāne sadṛśatamaḥ).'},
  63:{txt:'yādava-mātre harikamalam',tr:'Un viṣṇudāsa diventa un harikamala quando segue un qualsiasi yādava.',ex:'Esempio: kṛṣṇa + chatram → (74) kṛṣṇa-chchatram → (63) kṛṣṇa-cchatram'},
  66:{txt:'da-tau para-varṇau la-ca-ṭa-vargeṣu nityam',tr:'Da-rāma e ta-rāma cambiano sempre nella varṇa che segue, quando segue la-rāma, ca-varga o ṭa-varga.',ex:'Esempio: tad + lakṣmī-pateḥ → tal lakṣmī-pateḥ'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  74:{txt:'dviḥ sarveśvara-mātrāc chaḥ',tr:'Cha-rāma si raddoppia quando viene dopo una qualsiasi sarveśvara (vocale: sūtra 2).',ex:'Esempio: kṛṣṇa + chatram → (74) kṛṣṇa-chchatram → (63) kṛṣṇa-cchatram'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'},
  83:{txt:'ra īśvarāt sarveśvara-gopālayoḥ',tr:'Dopo un īśvara (una vocale diversa da a, ā: sūtra 7), il viṣṇusarga (ḥ) diventa ra-rāma (r) quando segue una sarveśvara (vocale) o un gopāla (consonante sonora, sūtra 28).',ex:'Esempio: hareḥ + idam → harer idam; hariḥ + gacchati → harir gacchati'}
 },
 sandhi:[
  {a:'aṅga-śyāmalima',b:'chaṭābhiḥ',r:'aṅga-śyāmalima-cchaṭābhiḥ',sut:[74,63],note:'Dopo una vocale (qui la a finale di śyāmalima) ch si raddoppia (74): chch; poi il primo ch diventa c (63): cch. È lo stesso passaggio di kṛṣṇa + chatram → kṛṣṇa-cchatram nel vṛtti del 74. Alcuni testi (kksongs.org) scrivono chaṭābhir con un solo c.'},
  {a:'cchaṭābhiḥ',b:'abhitaḥ',r:'cchaṭābhir abhitaḥ',sut:[83],note:'Dopo bhi (finale in i, un īśvara) il visarga diventa r davanti a vocale (a), come hariḥ + gacchati → harir gacchati e hareḥ + idam → harer idam nel vṛtti.'},
  {a:'abhitaḥ',b:'mandī-',r:'abhito mandī-',sut:[80,44],note:'ḥ → u (80), poi a + u → o (44). La m è un gopāla (elenco nel sūtra 28), quindi il 80 si applica; non c’è una a dopo, quindi niente caduta della a (56). Stessa catena di kṛṣṇaḥ + gacchati → kṛṣṇo gacchati.'},
  {a:'mandī-kṛta',b:'indīvaram',r:'mandīkṛtendīvaram',sut:[43],note:'a + i → e, dentro il composto.'},
  {a:'-m',b:'consonante',r:'-ṁ',sut:[72,73],note:'m finale diventa ṁ davanti a consonante (72). Succede in sette punti: mandīkṛtendīvaraṁ jāḍyam, jāḍyaṁ jāguḍa-, rociṣāṁ vidadhataṁ, vidadhataṁ paṭṭā-, vilāsinaṁ hṛdi, āmodaraṁ rādhā-, bhujaṁ dhyāyema. Con il 73 la nasale può anche diventare quella del varga della consonante che segue (ñ davanti a j, m davanti a p, n davanti a dh): è facoltativo, e nel verso c’è sempre ṁ. Davanti a v, h, r il 73 non vale perché non sono consonanti di un varga (sūtra 17).'},
  {a:'paṭṭa',b:'ambara',r:'paṭṭāmbara',sut:[42],note:'a + a → ā, dentro il composto.'},
  {a:'lasat',b:'dāmābhiḥ',r:'lasad-dāmābhiḥ',sut:[61],note:'t finale diventa d (harigadā, la lettera sonora dello stesso luogo di pronuncia) davanti a consonante sonora, dentro il composto. Il PDF dice che ogni parola dentro un composto è un viṣṇupada a sé, per questo vale la regola della fine di viṣṇupada.'},
  {a:'dāmābhiḥ',b:'āmodaram',r:'dāmābhir āmodaram',sut:[83],note:'ḥ → r dopo bhi (īśvara) davanti a vocale (ā), come in cchaṭābhir abhitaḥ. La lettura però è ambigua: kksongs.org e Harmonist Monthly lo scrivono diviso, la devanāgarī di anusilana.in è unita (lasaddāmābhirāmodaram) senza indicare la divisione. Non ho trovato un’analisi indipendente.'},
  {a:'niveśita',b:'ujjvala',r:'niveśitojjvala',sut:[44],note:'a + u → o, dentro il composto.'},
  {a:'ud',b:'jvala',r:'ujjvala',sut:[66],note:'d davanti a j (ca-varga) diventa j (66), come in kaṁsa-jit + jhaṅkāraḥ nel vṛtti. Qui ud è un prefisso e ujjvala è una parola già formata: i sūtra parlano di fine di viṣṇupada, quindi l’applicazione è una mia lettura, da verificare (come ut + laṅghita → ullaṅghita in CC Ādi 3.89).'}
 ],
 seg:[
  [{t:'aṅga-śyāmalima-'},{t:'cch',s:[1]},{t:'aṭābhi'},{t:'r',s:[2]},{t:' abhit'},{t:'o',s:[3]},{t:' mandīkṛt'},{t:'e',s:[4]},{t:'ndīvara'},{t:'ṁ',s:[5]}],
  [{t:'jāḍya'},{t:'ṁ',s:[5]},{t:' jāguḍa-rociṣā'},{t:'ṁ',s:[5]},{t:' vidadhata'},{t:'ṁ',s:[5]},{t:' paṭṭ'},{t:'ā',s:[6]},{t:'mbarasya śriyā'}],
  [{t:'vṛndāraṇya-vilāsina'},{t:'ṁ',s:[5]},{t:' hṛdi lasa'},{t:'d',s:[7]},{t:'-dāmābhi'},{t:'r',s:[8]},{t:' āmodara'},{t:'ṁ',s:[5]}],
  [{t:'rādhā-skandha-niveśit'},{t:'o',s:[9]},{t:'j',s:[10]},{t:'jvala-bhuja'},{t:'ṁ',s:[5]},{t:' dhyāyema dāmodaram'}]
 ],
 metrica:{
  name:'Śārdūla-vikrīḍita',
  syl:19,
  gana:'ma · sa · ja · sa · ta · ta · ga',
  yati:'dopo la 12ª sillaba',
  yatiNote:'Nei pāda 1, 2 e 4 cade a fine parola (abhito, vidadhataṁ, bhujaṁ); nel pāda 3 cade dopo lasad-, a fine di un membro del composto lasad-dāmābhiḥ',
  lakshana:'sūryāśvair yadi masajasatatagāḥ śārdūlavikrīḍitam',
  scan:['GGGLLGLGLLLGGGLGGLG','GGGLLGLGLLLGGGLGGLG','GGGLLGLGLLLGGGLGGLG','GGGLLGLGLLLGGGLGGLG'],
  note:'Tutti e quattro i pāda seguono lo stesso schema ma-sa-ja-sa-ta-ta-ga (GGG LLG LGL LLG GGL GGL G). Le ultime sillabe (raṁ, yā, raṁ, ram) sono lunghe per natura o per posizione, quindi non serve forzarle. Il nome del metro lo ricavo dallo schema, non da una fonte.'
 },
 context:[
  {v:true,t:'È la preghiera conclusiva («Concluding Prayer») della prima parte della Stava-mālā di Śrīla Rūpa Gosvāmī: kksongs.org la indica come «final song of Volume 1 of the Stavamala». La Stava-mālā è l’antologia delle preghiere di Rūpa Gosvāmī raccolta da Jīva Gosvāmī; secondo una lezione del ca-link-finder (trascrizione automatica, non verificata) Jīva Gosvāmī ha messo questo verso come conclusione della prima parte.'},
  {v:true,t:'Harmonist Monthly lo cita come il verso con cui Śrīla Rūpa Gosvāmī ha mostrato l’umore superiore di Śrī Rādhā-Dāmodara a Vṛndāvana.'},
  {v:false,t:'A parlare è l’autore stesso, che si rivolge a chi legge o canta con un «meditiamo» in prima persona plurale: non c’è un dialogo né una scena narrata. Il verso descrive Dāmodara in Vṛndāvana con il braccio sulla spalla di Rādhā. In che momento e in che luogo Rūpa Gosvāmī l’abbia composto: non ho dati affidabili.'}
 ],
 note:'Il testo è quello di anusilana.in e di Harmonist Monthly. Lo screenshot (kksongs.org) aveva diacritici mancanti («śyamalima», «radha», «dhyayema»), «chaṭābhir» con un solo c e, nella pagina web, «ādhā-skandha» al posto di rādhā-skandha: qui ho usato la forma corretta delle altre fonti. Punti da verificare: la lettura dāmābhir āmodaraṁ (la devanāgarī di anusilana.in è unita: lasaddāmābhirāmodaram) e le varianti «vṛndāraṇya-nivāsinam» e «dhyāyed» che compaiono nella trascrizione automatica di una lezione (ca-link-finder, n. 10699), non verificata. La devanāgarī è quella di anusilana.in, scritta lì senza spazi: gli spazi fra le parole sono miei. Il verso non ha un numero nella raccolta che ho consultato: la chiusura è solo ॥ ॥. La divisione in quattro pāda da 19 sillabe è quella delle fonti.',
 sources:[
  'Testo corretto (IAST e devanāgarī) e traduzione inglese alternativa: anusilana.in (https://anusilana.in/anga-syamalima-cchatabhir-abhito-mandikrtendivaram/); IAST e traduzione inglese anche in Harmonist Monthly, «A Mine of Valuable Instructions» (https://www.purebhakti.com/resources/harmonist-monthly/109-centennial-editions-iii/1776-a-mine-of-valuable-instructions).',
  'Traduzione inglese, titolo «Concluding Prayer» e indicazione «final song of Volume 1 of the Stavamala»: kksongs.org, pagina «Untitled Prayer» (http://kksongs.org/songs/a/angasyamalimachatabhir.html). Il parola per parola è quello dello screenshot che mi hai mandato: nella pagina che ho letto non ho visto i synonyms, quindi non ho potuto confermare che vengano da lì.',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare (tre ricerche).',
  'ca-link-finder (repo gurudas-sda/ca-link-finder, cercata per intero): il verso compare solo nella trascrizione automatica n. 10699, lezione di Śrī Prem Prayojan del 29.10.2026 («a Special prayer»), segnato «VERSE NOT FOUND IN THE DATABASE»: nessuna traduzione o fonte verificata lì.',
  'Sūtra 42, 43, 44, 61, 63, 66, 72, 73, 74, 80 e 83 (e le definizioni nei sūtra 2, 7, 17 e 28): Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto).',
  'Genere, caso, composti, radici, nome del metro, gaṇa e lakṣaṇa: conoscenza generale, da verificare.'
 ]
});
/* ----- fine Stava-mālā · aṅga-śyāmalima ----- */

/* ----- Padyāvalī 74 · nāhaṁ vipro ----- */
DATA.push({
 id:'padyavali-74',
 label:'Padyāvalī 74 · nāhaṁ vipro',
 src:'Padyāvalī 74 · Caitanya-caritāmṛta Madhya 13.80',
 sub:'mandākrāntā · 17 sillabe per pāda',
 padas:[
  {iast:'nāhaṁ vipro na ca nara-patir nāpi vaiśyo na śūdro', dev:'नाहं विप्रो न च नरपतिर्नापि वैश्यो न शूद्रो'},
  {iast:'nāhaṁ varṇī na ca gṛha-patir no vanastho yatir vā', dev:'नाहं वर्णी न च गृहपतिर्नो वनस्थो यतिर्वा ।'},
  {iast:'kintu prodyan-nikhila-paramānanda-pūrṇāmṛtābdher', dev:'किन्तु प्रोद्यन्निखिलपरमानन्दपूर्णामृताब्धेर्'},
  {iast:'gopī-bhartuḥ pada-kamalayor dāsa-dāsānudāsaḥ', dev:'गोपीभर्तुः पदकमलयोर्दासदासानुदासः ॥'}
 ],
 translation:'[Śrī Caitanya Mahāprabhu disse:] «Non sono un brāhmaṇa, un kṣatriya, un vaiśya o uno śūdra, né un brahmacārī, un gṛhastha, un vānaprastha o un sannyāsī. La mia unica identità è quella di un insignificante servo dei servi dei servi dei piedi di loto di Śrī Kṛṣṇa, l’oceano di beatitudine trascendentale piena di nettare, in continua espansione, noto come il sostentatore delle pastorelle di Vraja.»',
 translationSrc:'Resa italiana mia della traduzione inglese dello Śrī Ślokāmṛta-bindu, p. 6 (PDF del progetto «Slokamrta bindhu 1.pdf»), identica a quella del foglio che mi hai mandato («Prayers to recite before remembering Dīkṣā Mantras», n. 1, titolo «Bhūta-śuddhi - purification of one’s identity»). Nel PDF il testo estratto ha alcuni diacritici rovinati: per quelli mi sono fidato del foglio. Nello Ślokāmṛta-bindu il verso ha il titolo «One’s eternal identity».',
 words:[
  {k:'na',mean:'non',info:'Ślokāmṛta-bindu: «not». Indeclinabile. Nel verso compare unito ad aham: na + aham → nāhaṁ (sandhi).'},
  {k:'aham',mean:'io',info:'Ślokāmṛta-bindu: «I». Pronome asmad · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare].'},
  {k:'vipraḥ',mean:'un brāhmaṇa',info:'tema vipra (m.) · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «a brāhmaṇa».'},
  {k:'na',mean:'non',info:'Ślokāmṛta-bindu: «not».'},
  {k:'ca',mean:'anche',info:'Ślokāmṛta-bindu: «also». Indeclinabile.'},
  {k:'nara-patiḥ',mean:'un re, un kṣatriya',info:'composto · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «a king or kṣatriya».',parts:[['nara','(m.) uomo [mia conoscenza generale, da verificare]'],['pati','(m.) signore [mia conoscenza generale, da verificare]']]},
  {k:'na',mean:'non',info:'Ślokāmṛta-bindu: «not».'},
  {k:'api',mean:'anche',info:'Ślokāmṛta-bindu: «also». Indeclinabile. Nel verso na + api → nāpi (sandhi).'},
  {k:'vaiśyaḥ',mean:'un mercante (un vaiśya)',info:'tema vaiśya (m.) · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «a merchant».'},
  {k:'na',mean:'non',info:'Ślokāmṛta-bindu: «not».'},
  {k:'śūdraḥ',mean:'un lavoratore (uno śūdra)',info:'tema śūdra (m.) · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «a worker».'},
  {k:'na',mean:'non',info:'Ślokāmṛta-bindu: «not».'},
  {k:'aham',mean:'io',info:'Ślokāmṛta-bindu: «I». Come sopra: na + aham → nāhaṁ.'},
  {k:'varṇī',mean:'un brahmacārī',info:'Ślokāmṛta-bindu: «a brahmacārī».'},
  {k:'na',mean:'non',info:'Ślokāmṛta-bindu: «not».'},
  {k:'ca',mean:'anche',info:'Ślokāmṛta-bindu: «also».'},
  {k:'gṛha-patiḥ',mean:'un capofamiglia (un gṛhastha)',info:'composto · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «a householder».',parts:[['gṛha','(n.) casa [mia conoscenza generale, da verificare]'],['pati','(m.) signore [mia conoscenza generale, da verificare]']]},
  {k:'no',mean:'non',info:'Ślokāmṛta-bindu: «not». È la particella no, scritta come parola a sé.'},
  {k:'vana-sthaḥ',mean:'un vānaprastha (chi vive nella foresta)',info:'composto · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «vānaprastha». Che vana-stha significhi «che dimora nella foresta» è il senso letterale delle parti [mia conoscenza generale, da verificare].',parts:[['vana','(n.) foresta [mia conoscenza generale, da verificare]'],['stha','che sta, che dimora [mia conoscenza generale, da verificare]']]},
  {k:'yatiḥ',mean:'un mendicante, un rinunciante (un sannyāsī)',info:'tema yati (m.) · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «a mendicant or renunciant».'},
  {k:'vā',mean:'oppure',info:'Ślokāmṛta-bindu: «either». Indeclinabile.'},
  {k:'kintu',mean:'ma',info:'Ślokāmṛta-bindu: «but». Indeclinabile; kiṁ + tu → kintu (sandhi).'},
  {k:'prodyan',mean:'in continua espansione',info:'Ślokāmṛta-bindu: «forever expanding». Nel verso compare come prodyan- (sandhi: prodyat + nikhila). Sulla radice e sulla forma grammaticale non ho dati affidabili.'},
  {k:'nikhila',mean:'tutto',info:'Ślokāmṛta-bindu: «all».'},
  {k:'parama-ānanda',mean:'di beatitudine trascendentale',info:'composto. Ślokāmṛta-bindu: «of transcendental bliss». Nel verso compare come paramānanda (sandhi).',parts:[['parama','supremo [mia conoscenza generale, da verificare]'],['ānanda','(m.) beatitudine [mia conoscenza generale, da verificare]']]},
  {k:'pūrṇa',mean:'completo',info:'Ślokāmṛta-bindu: «complete».'},
  {k:'amṛta-abdheḥ',mean:'dell’oceano di nettare',info:'composto · ṣaṣṭhī ekavacana = genitivo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «of the ocean of nectar». Nel verso compare come amṛtābdheḥ (sandhi), poi abdher (sandhi).',parts:[['amṛta','(n.) nettare, immortalità [mia conoscenza generale, da verificare]'],['abdhi','(m.) oceano [mia conoscenza generale, da verificare]']]},
  {k:'gopī-bhartuḥ',mean:'del sostentatore delle gopī [oppure: di Colui che è sostenuto dall’amore delle gopī]',info:'composto · ṣaṣṭhī ekavacana = genitivo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «of the maintainer of the gopīs [or He who is maintained by the gopīs’ love]».',parts:[['gopī','(f.) pastorella di Vraja [mia conoscenza generale, da verificare]'],['bhartṛ','(m.) sostentatore, signore [mia conoscenza generale, da verificare]']]},
  {k:'pada-kamalayoḥ',mean:'dei due piedi di loto',info:'composto · ṣaṣṭhī dvivacana = genitivo duale [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «of the two lotus feet».',parts:[['pada','(n.) piede [mia conoscenza generale, da verificare]'],['kamala','(n.) loto [mia conoscenza generale, da verificare]']]},
  {k:'dāsa',mean:'del servo',info:'Ślokāmṛta-bindu: «of the servant». Nel verso è il primo membro di dāsa-dāsānudāsaḥ.'},
  {k:'dāsa-anudāsaḥ',mean:'questo insignificante servo del servo',info:'Ślokāmṛta-bindu: «this insignificant servant of the servant». Nel verso compare come dāsānudāsaḥ (sandhi). Insieme al dāsa precedente dà «servo del servo del servo», come nella traduzione.',parts:[['dāsa','servo [mia conoscenza generale, da verificare]'],['anudāsa','servo del servo [mia conoscenza generale, da verificare]']]}
 ],
 surf:[
  [{t:'nāhaṁ',e:[0,1]},{t:'vipro',e:[2]},{t:'na',e:[3]},{t:'ca',e:[4]},{t:'nara-patir',e:[5]},{t:'nāpi',e:[6,7]},{t:'vaiśyo',e:[8]},{t:'na',e:[9]},{t:'śūdro',e:[10]}],
  [{t:'nāhaṁ',e:[11,12]},{t:'varṇī',e:[13]},{t:'na',e:[14]},{t:'ca',e:[15]},{t:'gṛha-patir',e:[16]},{t:'no',e:[17]},{t:'vanastho',e:[18]},{t:'yatir',e:[19]},{t:'vā',e:[20]}],
  [{t:'kintu',e:[21]},{t:'prodyan-nikhila-paramānanda-pūrṇāmṛtābdher',e:[22,23,24,25,26]}],
  [{t:'gopī-bhartuḥ',e:[27]},{t:'pada-kamalayor',e:[28]},{t:'dāsa-dāsānudāsaḥ',e:[29,30]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  61:{txt:'viṣṇudāso viṣṇupadānte harighoṣe ca harigadā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa harigadā; se non è a fine di viṣṇupada, lo diventa solo se segue un harighoṣa.',ex:'Esempio: bhagavat + icchā → bhagavad-icchā',note:'La sostituzione è quella più simile per luogo di pronuncia (sthāne sadṛśatamaḥ).'},
  62:{txt:'hariveṇau hariveṇur vā',tr:'Un viṣṇudāsa a fine di viṣṇupada diventa, a scelta, hariveṇu quando segue un hariveṇu.',ex:'Esempio: jagat + nāthaḥ → jagan-nāthaḥ oppure (61) jagad-nāthaḥ'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'},
  83:{txt:'ra īśvarāt sarveśvara-gopālayoḥ',tr:'Dopo un īśvara (i, ī, u, ū, ṛ, ṝ, ḷ, ḹ, e, ai, o, au) il viṣṇusarga (ḥ) diventa r quando segue un sarveśvara (vocale) o un gopāla (consonante sonora).',ex:'Esempio: hariḥ + gacchati → harir gacchati; hareḥ + idam → harer idam'}
 },
 sandhi:[
  {a:'na',b:'aham',r:'nāhaṁ',sut:[42],note:'a + a → ā (42), come paṭṭa + ambara → paṭṭāmbara. Succede due volte: nāhaṁ vipro e nāhaṁ varṇī.'},
  {a:'-m',b:'consonante',r:'-ṁ',sut:[72],note:'m finale diventa ṁ davanti a consonante (72): ahaṁ davanti a v, in tutti e due i casi. Il 73 non si applica: v non è una consonante di un varga.'},
  {a:'vipraḥ',b:'na',r:'vipro na',sut:[80,44],note:'ḥ → u dopo a davanti a un gopāla (80): n è una consonante sonora. Poi a + u → o (44). Stessa catena di kṛṣṇaḥ + gacchati → kṛṣṇo gacchati.'},
  {a:'nara-patiḥ',b:'na',r:'nara-patir na',sut:[83],note:'Dopo pa-ti (finale in i, un īśvara) il visarga diventa r davanti a una consonante sonora (n): come hariḥ + gacchati → harir gacchati. Il nā seguente è na + api (sandhi 5).'},
  {a:'na',b:'api',r:'nāpi',sut:[42],note:'a + a → ā (42).'},
  {a:'vaiśyaḥ',b:'na',r:'vaiśyo na',sut:[80,44],note:'ḥ → u (80), poi a + u → o (44).'},
  {a:'śūdraḥ',b:'na',r:'śūdro na',sut:[80,44],note:'ḥ → u (80), poi a + u → o (44). Il sandhi passa sopra il confine fra il pāda 1 e il pāda 2: śūdro è l’ultima parola del pāda 1; il na seguente apre il pāda 2 e si unisce ad aham (sandhi 1: nāhaṁ).'},
  {a:'gṛha-patiḥ',b:'no',r:'gṛha-patir no',sut:[83],note:'ḥ → r dopo i davanti a una consonante sonora (83).'},
  {a:'vana-sthaḥ',b:'yatiḥ',r:'vanastho yatir',sut:[80,44],note:'ḥ → u (80) davanti a y, una consonante sonora; poi a + u → o (44).'},
  {a:'yatiḥ',b:'vā',r:'yatir vā',sut:[83],note:'ḥ → r dopo i davanti a una consonante sonora (83): yatiḥ + vā → yatir vā. Il vā è l’ultima parola del pāda 2.'},
  {a:'kiṁ',b:'tu',r:'kintu',sut:[72,73],note:'m → ṁ davanti a consonante (72); con il 73 la nasale diventa quella del varga della consonante che segue (t, ta-varga: n). A fine di viṣṇupada è facoltativo. Che kintu venga da kim + tu è una mia lettura [mia conoscenza generale, da verificare].'},
  {a:'pra',b:'udyan',r:'prodyan',sut:[44],note:'a + u → o (44). Che prodyan sia pra + udyan è una mia lettura [mia conoscenza generale, da verificare].'},
  {a:'prodyat',b:'nikhila',r:'prodyan-nikhila',sut:[62,61],note:'t finale davanti a una nasale (n) diventa n (62, come jagat + nāthaḥ → jagan-nāthaḥ); in alternativa d (61: prodyad-nikhila). Il verso ha la forma con n. Il sūtra parla di fine di viṣṇupada: qui prodyan è il primo membro di un composto, e il PDF dice che ogni parola dentro un composto è un viṣṇupada a sé. Che la forma di partenza sia prodyat è una mia lettura [mia conoscenza generale, da verificare].'},
  {a:'parama',b:'ānanda',r:'paramānanda',sut:[42],note:'a + ā → ā (42), dentro il composto.'},
  {a:'pūrṇa',b:'amṛta',r:'pūrṇāmṛta',sut:[42],note:'a + a → ā (42), dentro il composto.'},
  {a:'amṛta',b:'abdheḥ',r:'amṛtābdheḥ',sut:[42],note:'a + a → ā (42), dentro il composto.'},
  {a:'abdheḥ',b:'gopī',r:'abdher gopī',sut:[83],note:'Dopo dhe (finale in e, un īśvara) il visarga diventa r davanti a una consonante sonora (g): come hareḥ + idam → harer idam. Il sandhi passa sopra il confine fra il pāda 3 e il pāda 4.'},
  {a:'kamalayoḥ',b:'dāsa',r:'kamalayor dāsa',sut:[83],note:'ḥ → r dopo o (un īśvara) davanti a una consonante sonora (83).'},
  {a:'dāsa',b:'anudāsaḥ',r:'dāsānudāsaḥ',sut:[42],note:'a + a → ā (42), dentro il composto.'}
 ],
 seg:[
  [{t:'n'},{t:'ā',s:[1]},{t:'ha'},{t:'ṁ',s:[2]},{t:' vipr'},{t:'o',s:[3]},{t:' na ca nara-pati'},{t:'r',s:[4]},{t:' n'},{t:'ā',s:[5]},{t:'pi vaiśy'},{t:'o',s:[6]},{t:' na śūdr'},{t:'o',s:[7]}],
  [{t:'n'},{t:'ā',s:[1]},{t:'ha'},{t:'ṁ',s:[2]},{t:' varṇī na ca gṛha-pati'},{t:'r',s:[8]},{t:' no vanasth'},{t:'o',s:[9]},{t:' yati'},{t:'r',s:[10]},{t:' vā'}],
  [{t:'ki'},{t:'n',s:[11]},{t:'tu pr'},{t:'o',s:[12]},{t:'dya'},{t:'n',s:[13]},{t:'-nikhila-param'},{t:'ā',s:[14]},{t:'nanda-pūrṇ'},{t:'ā',s:[15]},{t:'mṛt'},{t:'ā',s:[16]},{t:'bdhe'},{t:'r',s:[17]}],
  [{t:'gopī-bhartuḥ pada-kamalayo'},{t:'r',s:[18]},{t:' dāsa-dās'},{t:'ā',s:[19]},{t:'nudāsaḥ'}]
 ],
 metrica:{
  name:'Mandākrāntā',
  syl:17,
  sylNote:'contate da me sul testo: 4 × 17 = 68',
  gana:'ma · bha · na · ta · ta · ga · ga',
  yati:'dopo la 4ª e dopo la 10ª sillaba',
  yatiNote:'Nei pāda 1, 2 e 4 le due pause cadono a fine parola (vipro / nara-patir; varṇī / gṛha-patir; bhartuḥ / pada-kamalayor); nel pāda 3 la prima cade dopo prodyan, ma la 10ª sillaba (mā) cade dentro paramānanda, a metà di un membro del composto. Nello schema qui sotto è segnata solo la prima pausa (dopo la 4ª sillaba)',
  yatiAt:4,
  lakshana:'mandākrāntāmbudhirasanagair mbhau nato gau gurū cet',
  scan:['GGGGLLLLLGGLGGLGG','GGGGLLLLLGGLGGLGG','GGGGLLLLLGGLGGLGG','GGGGLLLLLGGLGGLGG'],
  note:'I quattro pāda hanno la stessa scansione GGGG LLLLLG GLGGLGG (ma-bha-na-ta-ta-ga-ga). Una vocale breve prima di un nesso di consonanti si conta lunga: per esempio vi di vipro, kin di kintu, bhar di bhartuḥ; tir di patir si conta lunga perché la sillaba è chiusa dalla r. L’ultima sillaba di ogni pāda (dro, vā, dher, saḥ) è lunga per natura o per posizione. Il nome del metro lo ricavo dallo schema, non da una fonte [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Il verso è Padyāvalī 74: lo dice la nota di CC Madhya 13.80 su Vedabase (riportata da Vanipedia nei risultati di ricerca), che osserva soltanto che è il verso 74 della Padyāvalī, l’antologia compilata da Śrīla Rūpa Gosvāmī. Lo Ślokāmṛta-bindu (p. 6) lo presenta con il titolo «One’s eternal identity» (L’identità eterna) e introduce la traduzione con «[Śrī Caitanya Mahāprabhu said:]»: attribuisce quindi le parole a Śrī Caitanya Mahāprabhu.'},
  {v:true,t:'Lo stesso verso è Caitanya-caritāmṛta, Madhya-līlā 13.80, nel capitolo 13, intitolato «The Ecstatic Dancing of the Lord at Ratha-yātrā» (La danza estatica del Signore alla Ratha-yātrā), sulla festa del carro di Jagannātha a Purī (Vedabase). Il verso che lo precede, 13.79, è una citazione dallo Śrīmad-Bhāgavatam 10.90.48 (da una ricerca web su Vedabase, la pagina non l’ho aperta): è il verso «jayati jana-nivāso…» che è già in questa raccolta.'},
  {v:true,t:'Sul foglio che mi hai mandato è il primo dei quattro versi «Prayers to recite before remembering Dīkṣā Mantras» (preghiere da recitare prima di ricordare i mantra della dīkṣā), con il titolo «Bhūta-śuddhi – purification of one’s identity» (purificazione della propria identità).'},
  {v:false,t:'In che momento preciso del racconto di Madhya 13 vengano pronunciate queste parole, e se nella pagina di Vedabase siano attribuite a una persona precisa: la pagina che ho letto non lo dice e non ho potuto leggere i versi 13.77 e 13.78. Non ho dati affidabili su questo. Quello che so con certezza è l’attribuzione a Śrī Caitanya Mahāprabhu dello Ślokāmṛta-bindu.'}
 ],
 note:'Il testo del verso è quello dello Ślokāmṛta-bindu e del foglio, ed è lo stesso di Vedabase (CC Madhya 13.80) tranne che Vedabase (vedabase.io, CC Madhya 13.80) ha «pūrnāmṛtābdher» senza il punto sotto la n: probabile refuso della pagina. La devanāgarī l’ho ricavata io dal testo in caratteri latini. Il parola per parola è quello dello Ślokāmṛta-bindu, reso in italiano da me; le righe di grammatica (caso, numero, parti dei composti) sono mie. Per il pāda 3, la divisione fra prodyan, nikhila, parama-ānanda, pūrṇa e amṛta-abdheḥ è quella dei synonyms dello Ślokāmṛta-bindu; come si leghino fra loro questi membri (sono tutti attributi di Kṛṣṇa, «l’oceano…», e dipendono da gopī-bhartuḥ) è una mia lettura, da verificare.',
 sources:[
  'Testo del verso (IAST), parola per parola e traduzione inglese: Śrī Ślokāmṛta-bindu, p. 6, sezione «One’s eternal identity» (PDF del progetto, «Slokamrta bindhu 1.pdf»; indice dei versi: «nāhaṁ vipro na ca nara-patir … 6»). Il foglio che mi hai mandato (n. 1) riporta lo stesso testo.',
  'ca-link-finder (repo gurudas-sda/ca-link-finder, cercata nelle trascrizioni inglesi): il verso compare in molte trascrizioni, segnato come verso verificato con la fonte «Padyāvalī (74)».',
  'Caitanya-caritāmṛta Madhya 13.80 (traduzione inglese, synonyms su varṇī, nota «verso 74 della Padyāvalī compilata da Rūpa Gosvāmī», titolo del capitolo 13) e 13.79 (citazione da ŚB 10.90.48): Vedabase, https://vedabase.io/en/library/cc/madhya/13/80/ (letto dai risultati di ricerca; 13.79 solo da ricerca web): da ricontrollare sul sito.',
  'Sūtra 42, 44, 61, 62, 72, 73, 80 e 83: Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto), controllati nell’elenco dei sūtra.',
  'Parola per parola in italiano, devanāgarī, genere, caso, composti, scansione, gaṇa, yati, lakṣaṇa e nome del metro: resa e conoscenza mie, da verificare.'
 ]
});
/* ----- fine Padyāvalī 74 · nāhaṁ vipro ----- */

/* ----- Ātma-dhyāna-mantra · divyaṁ śrī-hari-mandirāḍhya ----- */
DATA.push({
 id:'atma-dhyana-mantra',
 label:'Ātma-dhyāna-mantra · divyaṁ śrī-hari-mandirāḍhya',
 src:'Ātma-dhyāna-mantra · meditazione su se stessi',
 sub:'śārdūla-vikrīḍita · 19 sillabe per pāda',
 padas:[
  {iast:'divyaṁ śrī-hari-mandirāḍhya-tilakaṁ kaṇṭhaṁ sumālānvitaṁ', dev:'दिव्यं श्रीहरिमन्दिराढ्यतिलकं कण्ठं सुमालान्वितं'},
  {iast:'vakṣaḥ śrī-harināma-varṇa-subhagaṁ śrī-khaṇḍa-liptaṁ punaḥ', dev:'वक्षः श्रीहरिनामवर्णसुभगं श्रीखण्डलिप्तं पुनः ।'},
  {iast:'pūtaṁ sūkṣmaṁ navāmbaraṁ vimalatāṁ nityaṁ vahantīṁ tanuṁ', dev:'पूतं सूक्ष्मं नवाम्बरं विमलतां नित्यं वहन्तीं तनुं'},
  {iast:'dhyāyet śrī-guru-pāda-padma-nikaṭe sevotsukaṁ cātmanaḥ', dev:'ध्यायेत् श्रीगुरुपादपद्मनिकटे सेवोत्सुकं चात्मनः ॥'}
 ],
 translation:'Medito su me stesso come arreso ai piedi di loto di śrī-guru e dotato di grande determinazione nel servirlo. Medito su me stesso adornato, sulla fronte, da un bel tilaka che rappresenta il tempio di Śrī Hari. Porto al collo una bella collana di perle di tulasī. Il mio petto è segnato dal santo nome e cosparso di pasta di sandalo. Indosso una veste fine e pura e, dentro, sono costantemente assorto in sentimenti spirituali sempre freschi.',
 translationSrc:'Resa italiana mia della traduzione inglese che c’è sul foglio («Prayers to recite before remembering Dīkṣā Mantras», n. 2, titolo «Meditation on oneself (ātma-dhyāna-mantra)»). Il foglio non indica chi ha tradotto né da quale opera venga il verso. La traduzione è libera: alcune parti non corrispondono alla lettera alle parole del verso (vedi la nota). Il verso non è nello Śrī Ślokāmṛta-bindu (PDF del progetto: due ricerche, nessun risultato) e il foglio non ha il parola per parola, che quindi è tutto mio.',
 words:[
  {k:'divyam',mean:'divino, splendido',info:'creato da me, non verificato. Aggettivo, accusativo singolare neutro [mia lettura]. Il foglio traduce «beautiful».'},
  {k:'śrī-hari-mandira-āḍhya-tilakam',mean:'il tilaka ricco del tempio di Śrī Hari',info:'creato da me, non verificato. Composto · accusativo singolare (n.) [mia lettura]. Nel verso compare come śrī-hari-mandirāḍhya-tilakaṁ (sandhi). Il foglio traduce «tilaka, representing the temple of Śrī Hari, on my forehead»: «sulla fronte» non è nelle parole del verso. Il senso di āḍhya («ricco, dotato di») è conoscenza generale, da verificare.',parts:[['śrī','sacro, bello [mia conoscenza generale, da verificare]'],['hari','Hari (Kṛṣṇa) [mia conoscenza generale, da verificare]'],['mandira','(n.) tempio [mia conoscenza generale, da verificare]'],['āḍhya','ricco, dotato [mia conoscenza generale, da verificare]'],['tilaka','(n.) tilaka, il segno [mia conoscenza generale, da verificare]']]},
  {k:'kaṇṭham',mean:'il collo',info:'creato da me, non verificato. Tema kaṇṭha (m.) · accusativo singolare [mia conoscenza generale, da verificare].'},
  {k:'su-māla-anvitam',mean:'dotato di una bella ghirlanda',info:'creato da me, non verificato. Composto · accusativo singolare [mia lettura]. Nel verso compare come sumālānvitaṁ (sandhi). Il foglio traduce «beautiful necklace of tulasī beads»: «tulasī» non è nelle parole del verso.',parts:[['su','bello [mia conoscenza generale, da verificare]'],['māla','ghirlanda, collana [mia conoscenza generale, da verificare]'],['anvita','dotato, provvisto [mia conoscenza generale, da verificare]']]},
  {k:'vakṣaḥ',mean:'il petto',info:'creato da me, non verificato. Tema vakṣas (n.) · accusativo singolare, ripreso dal visarga [mia conoscenza generale, da verificare]. Il foglio: «my chest».'},
  {k:'śrī-harināma-varṇa-subhagam',mean:'bello per le lettere del santo nome di Śrī Hari',info:'creato da me, non verificato. Composto · accusativo singolare [mia lettura]. varṇa vuol dire «lettera» ma anche «colore»: la resa «lettere» segue il foglio («marked with the holy name»), da verificare.',parts:[['śrī','sacro [mia conoscenza generale, da verificare]'],['harināma','il nome di Hari [mia conoscenza generale, da verificare]'],['varṇa','(m.) lettera; colore [mia conoscenza generale, da verificare]'],['subhaga','bello, splendido [mia conoscenza generale, da verificare]']]},
  {k:'śrī-khaṇḍa-liptam',mean:'cosparso di pasta di sandalo',info:'creato da me, non verificato. Composto · accusativo singolare [mia lettura]. Il foglio: «anointed with sandalwood pulp».',parts:[['śrī-khaṇḍa','sandalo [mia conoscenza generale, da verificare]'],['lipta','cosparso, unto [mia conoscenza generale, da verificare]']]},
  {k:'punaḥ',mean:'di nuovo, inoltre',info:'creato da me, non verificato. Indeclinabile [mia conoscenza generale, da verificare]. Il foglio stampa «pūnaḥ», ma il ca-link-finder e altri testi hanno punaḥ e la metrica vuole la u breve: ho scritto punaḥ. La traduzione del foglio non lo rende.'},
  {k:'pūtam',mean:'puro, purificato',info:'creato da me, non verificato. Participio da pū, accusativo singolare neutro [mia lettura]. Il foglio: «pure».'},
  {k:'sūkṣmam',mean:'sottile, fine',info:'creato da me, non verificato. Accusativo singolare neutro [mia lettura]. Il foglio: «fine». Altri testi online scrivono sūkṣma-navāmbaraṁ (composto): vedi la nota sulla metrica.'},
  {k:'nava-ambaram',mean:'veste nuova',info:'creato da me, non verificato. Composto · accusativo singolare (n.) [mia lettura]. Nel verso compare come navāmbaraṁ (sandhi). La traduzione del foglio («fine and pure cloth») non rende nava «nuovo».',parts:[['nava','nuovo [mia conoscenza generale, da verificare]'],['ambara','(n.) veste, abito [mia conoscenza generale, da verificare]']]},
  {k:'vimalatām',mean:'la purezza (l’essere senza macchia)',info:'creato da me, non verificato. Tema vimalatā (f.) · accusativo singolare [mia conoscenza generale, da verificare]. La traduzione del foglio («within I am constantly absorbed in ever-fresh spiritual sentiments») non corrisponde alla lettera a vimalatāṁ nityaṁ vahantīṁ tanuṁ («il corpo che porta sempre purezza»): non ho dati affidabili su come la resa del foglio derivi dal testo.'},
  {k:'nityam',mean:'sempre, costantemente',info:'creato da me, non verificato. Avverbio (accusativo singolare neutro) [mia conoscenza generale, da verificare]. Il foglio: «constantly».'},
  {k:'vahantīm',mean:'che porta, che reca',info:'creato da me, non verificato. Participio presente (śatṛ), femminile, accusativo singolare, da vah «portare» [mia conoscenza generale, da verificare].'},
  {k:'tanum',mean:'il corpo',info:'creato da me, non verificato. Tema tanu (f.) · accusativo singolare [mia conoscenza generale, da verificare]. Che vahantīm tanum («il corpo che porta…») sia ciò su cui si medita è una mia lettura della frase.'},
  {k:'dhyāyet',mean:'si mediti, si dovrebbe meditare',info:'creato da me, non verificato. Verbo, ottativo (vidhiliṅ) 3ª singolare · radice dhyai: meditare [mia conoscenza generale, da verificare]. Il foglio traduce in prima persona («I meditate on myself»); la forma del verso è alla 3ª persona.'},
  {k:'śrī-guru-pāda-padma-nikaṭe',mean:'vicino ai piedi di loto di Śrī Guru',info:'creato da me, non verificato. Composto · saptamī ekavacana = locativo singolare [mia lettura]. Il foglio: «surrendered at the lotus feet of śrī-guru».',parts:[['śrī','sacro [mia conoscenza generale, da verificare]'],['guru','maestro spirituale [mia conoscenza generale, da verificare]'],['pāda','(m.) piede [mia conoscenza generale, da verificare]'],['padma','(n.) loto [mia conoscenza generale, da verificare]'],['nikaṭa','(n.) vicinanza [mia conoscenza generale, da verificare]']]},
  {k:'seva-utsukam',mean:'desideroso di servire',info:'creato da me, non verificato. Composto · accusativo singolare (m.) [mia lettura]. Nel verso compare come sevotsukaṁ (sandhi). Il foglio: «possessing great determination to serve him».',parts:[['sevā','(f.) servizio [mia conoscenza generale, da verificare]'],['utsuka','ansioso, desideroso [mia conoscenza generale, da verificare]']]},
  {k:'ca',mean:'e',info:'creato da me, non verificato. Indeclinabile.'},
  {k:'ātmanaḥ',mean:'di sé, di se stesso',info:'creato da me, non verificato. Tema ātman (m.) · ṣaṣṭhī ekavacana = genitivo singolare [mia conoscenza generale, da verificare].'}
 ],
 surf:[
  [{t:'divyaṁ',e:[0]},{t:'śrī-hari-mandirāḍhya-tilakaṁ',e:[1]},{t:'kaṇṭhaṁ',e:[2]},{t:'sumālānvitaṁ',e:[3]}],
  [{t:'vakṣaḥ',e:[4]},{t:'śrī-harināma-varṇa-subhagaṁ',e:[5]},{t:'śrī-khaṇḍa-liptaṁ',e:[6]},{t:'punaḥ',e:[7]}],
  [{t:'pūtaṁ',e:[8]},{t:'sūkṣmaṁ',e:[9]},{t:'navāmbaraṁ',e:[10]},{t:'vimalatāṁ',e:[11]},{t:'nityaṁ',e:[12]},{t:'vahantīṁ',e:[13]},{t:'tanuṁ',e:[14]}],
  [{t:'dhyāyet',e:[15]},{t:'śrī-guru-pāda-padma-nikaṭe',e:[16]},{t:'sevotsukaṁ',e:[17]},{t:'cātmanaḥ',e:[18,19]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'}
 },
 sandhi:[
  {a:'-m',b:'consonante',r:'-ṁ',sut:[72,73],note:'m finale diventa ṁ davanti a consonante (72). Succede in tredici punti: divyaṁ śrī, tilakaṁ kaṇṭhaṁ, kaṇṭhaṁ su-, sumālānvitaṁ vakṣaḥ, subhagaṁ śrī-, liptaṁ punaḥ, pūtaṁ sūkṣmaṁ, sūkṣmaṁ nava-, navāmbaraṁ vimalatāṁ, vimalatāṁ nityaṁ, nityaṁ vahantīṁ, vahantīṁ tanuṁ, tanuṁ dhyāyet. Con il 73 la nasale può anche diventare quella del varga della consonante che segue: è facoltativo, e nel verso c’è sempre ṁ. Davanti a v, ś, s, h il 73 non vale perché non sono consonanti di un varga (sūtra 17).'},
  {a:'hari-mandira',b:'āḍhya',r:'hari-mandirāḍhya',sut:[42],note:'a + ā → ā (42), dentro il composto.'},
  {a:'māla',b:'anvitam',r:'mālānvitam',sut:[42],note:'a + a → ā (42), dentro il composto sumālānvitam.'},
  {a:'nava',b:'ambaram',r:'navāmbaram',sut:[42],note:'a + a → ā (42), dentro il composto.'},
  {a:'sevā',b:'utsukam',r:'sevotsukam',sut:[44],note:'ā + u → o (44): a-dvaya (a, ā) seguito da u-dvaya, come dvārakā + utsavaḥ → dvārakotsavaḥ.'},
  {a:'ca',b:'ātmanaḥ',r:'cātmanaḥ',sut:[42],note:'a + ā → ā (42).'}
 ],
 seg:[
  [{t:'divya'},{t:'ṁ',s:[1]},{t:' śrī-hari-mandir'},{t:'ā',s:[2]},{t:'ḍhya-tilaka'},{t:'ṁ',s:[1]},{t:' kaṇṭha'},{t:'ṁ',s:[1]},{t:' sumāl'},{t:'ā',s:[3]},{t:'nvita'},{t:'ṁ',s:[1]}],
  [{t:'vakṣaḥ śrī-harināma-varṇa-subhaga'},{t:'ṁ',s:[1]},{t:' śrī-khaṇḍa-lipta'},{t:'ṁ',s:[1]},{t:' punaḥ'}],
  [{t:'pūta'},{t:'ṁ',s:[1]},{t:' sūkṣma'},{t:'ṁ',s:[1]},{t:' nav'},{t:'ā',s:[4]},{t:'mbara'},{t:'ṁ',s:[1]},{t:' vimalatā'},{t:'ṁ',s:[1]},{t:' nitya'},{t:'ṁ',s:[1]},{t:' vahantī'},{t:'ṁ',s:[1]},{t:' tanu'},{t:'ṁ',s:[1]}],
  [{t:'dhyāyet śrī-guru-pāda-padma-nikaṭe sev'},{t:'o',s:[5]},{t:'tsuka'},{t:'ṁ',s:[1]},{t:' c'},{t:'ā',s:[6]},{t:'tmanaḥ'}]
 ],
 metrica:{
  name:'Śārdūla-vikrīḍita',
  syl:19,
  gana:'ma · sa · ja · sa · ta · ta · ga',
  yati:'dopo la 12ª sillaba',
  yatiNote:'Nei quattro pāda cade a fine parola (tilakaṁ, subhagaṁ, vimalatāṁ, nikaṭe)',
  lakshana:'sūryāśvair yadi masajasatatagāḥ śārdūlavikrīḍitam',
  scan:['GGGLLGLGLLLGGGLGGLG','GGGLLGLGLLLGGGLGGLG','GGGGLGLGLLLGGGLGGLG','GGGLLGLGLLLGGGLGGLG'],
  note:'I pāda 1, 2 e 4 seguono lo schema ma-sa-ja-sa-ta-ta-ga (GGG LLG LGL LLG GGL GGL G), con punaḥ nel pāda 2. Il pāda 3, così come è scritto sul foglio (sūkṣmaṁ navāmbaraṁ), ha la 4ª sillaba lunga (ṣmaṁ, per il segno ṁ) invece che breve: la scansione qui sotto è quella reale del testo e in quel punto non rispetta lo schema. Con sūkṣma-navāmbaraṁ (un composto, senza ṁ), come in altri testi online, la 4ª sillaba è breve e il pāda rientra nello schema: non ho dati affidabili su quale sia la lezione originale. Il nome del metro lo ricavo dallo schema, non da una fonte [mia conoscenza generale, da verificare].'
 },
 context:[
  {v:true,t:'Sul foglio che mi hai mandato è il secondo dei quattro versi «Prayers to recite before remembering Dīkṣā Mantras» (preghiere da recitare prima di ricordare i mantra della dīkṣā), con il titolo «Meditation on oneself (ātma-dhyāna-mantra)» (meditazione su se stessi).'},
  {v:true,t:'Secondo gaudiyadarshan.com (testo «Meditating on Our Ideal», autore non indicato nei risultati che ho letto), è un mantra di meditazione su se stessi che conosce chi ha ricevuto la seconda iniziazione, e prima di adorare il Signore si medita così sul proprio corpo.'},
  {v:false,t:'In quale opera si trovi originariamente il verso, chi lo abbia composto e chi parli in questo verso: il foglio non lo dice e non ho trovato una fonte affidabile. Non ho dati affidabili su questo. È una meditazione da fare in prima persona su se stessi (il foglio la traduce così); la forma del verso, dhyāyet, è però alla 3ª persona («si mediti»).'}
 ],
 note:'Punti da controllare. (1) Il foglio stampa «pūnaḥ» nel pāda 2: ho scritto punaḥ, come nel ca-link-finder e negli altri testi, perché la metrica vuole la u breve. (2) Il pāda 3 è come sul foglio e come nel ca-link-finder (sūkṣmaṁ navāmbaraṁ), ma non torna con lo schema del metro in quel punto: altri testi online scrivono sūkṣma-navāmbaraṁ (vedi la nota sulla metrica). (3) Nel pāda 4 il foglio ha dhyāyet śrī e sevotsukaṁ cātmanaḥ, senza sandhi; gaudiyadarshan.com scrive dhyāyech chhrī-… e sevotsukañ chātmanaḥ (con il sandhi t + ś → c-ch e ṁ + c → ñ-c). Ho lasciato la forma del foglio. (4) La traduzione del foglio è libera e in prima persona: «sulla fronte», «tulasī» e «sentimenti spirituali sempre freschi» non corrispondono alle parole del verso, e nava «nuovo» non è reso. Il parola per parola è tutto mio, non verificato. La devanāgarī l’ho ricavata io dal testo in caratteri latini.',
 sources:[
  'Testo del verso (IAST) e traduzione inglese: il foglio che mi hai mandato (n. 2, «Meditation on oneself (ātma-dhyāna-mantra)»). Il foglio non indica l’opera di provenienza né il traduttore.',
  'ca-link-finder (repo gurudas-sda/ca-link-finder, cercata nelle trascrizioni inglesi): il verso compare in alcune lezioni con il titolo «ātma-dhyāna-mantra», segnato come verso verificato, con lo stesso testo del foglio ma con punaḥ.',
  'Altro testo con il verso: gaudiyadarshan.com, «Meditating on Our Ideal» (https://gaudiyadarshan.com/?p=8159), con sūkṣma-navāmbaraṁ e punaḥ e una traduzione inglese diversa da quella del foglio. Letto dai risultati di ricerca: da ricontrollare.',
  'Ricerca nello Śrī Ślokāmṛta-bindu (PDF del progetto): il verso non compare (due ricerche).',
  'Sūtra 42, 44, 72 e 73 (e la definizione nel sūtra 17): Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto), controllati nell’elenco dei sūtra.',
  'Parola per parola (interamente mio), devanāgarī, genere, caso, composti, scansione, gaṇa, yati, lakṣaṇa e nome del metro: conoscenza mia, da verificare.'
 ]
});
/* ----- fine Ātma-dhyāna-mantra · divyaṁ śrī-hari-mandirāḍhya ----- */

/* ----- Stava-kalpadruma · tvaṁ gopikā ----- */
DATA.push({
 id:'stava-kalpadruma-tvam-gopika',
 label:'Stava-kalpadruma · tvaṁ gopikā',
 src:'Stava-kalpadruma · Raghunātha dāsa Gosvāmī',
 sub:'vasantatilakā · 14 sillabe per pāda',
 padas:[
  {iast:'tvaṁ gopikā vṛṣa-raves tanayāntike ’si', dev:'त्वं गोपिका वृषरवेस्तनयान्तिकेऽसि'},
  {iast:'sevādhikāriṇi guro nija-pāda-padme', dev:'सेवाधिकारिणि गुरो निजपादपद्मे ।'},
  {iast:'dāsyaṁ pradāya kuru māṁ vraja-kānane śrī-', dev:'दास्यं प्रदाय कुरु मां व्रजकानने श्री-'},
  {iast:'rādhāṅghri-sevana-rase sukhinīṁ sukhābdhau', dev:'राधाङ्घ्रिसेवनरसे सुखिनीं सुखाब्धौ ॥'}
 ],
 translation:'O Gurudeva! Tu sei una gopī nella compagnia della figlia di Vṛṣabhānu Mahārāja e puoi concedere il Suo servizio. Concedendomi il rifugio dei Tuoi piedi di loto, ti prego di farmi impegnare con gioia nell’oceano dei beati sapori del servizio ai piedi di loto di Śrīmatī Rādhikā, nei kuñja di Vraja.',
 translationSrc:'Resa italiana mia della traduzione inglese dello Śrī Ślokāmṛta-bindu, p. 50 (PDF del progetto «Slokamrta bindhu 1.pdf»), identica a quella del foglio che mi hai mandato (n. 3, «A prayer to Gurudeva to bestow rādhā-dāsyam»). Nel PDF il testo estratto ha alcuni diacritici rovinati: per quelli mi sono fidato del foglio.',
 words:[
  {k:'tvam',mean:'tu',info:'Ślokāmṛta-bindu: «you». Pronome yuṣmad · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare].'},
  {k:'gopikā',mean:'una giovane gopī',info:'Ślokāmṛta-bindu: «a young gopī». Tema gopikā (f.) · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare].'},
  {k:'vṛṣa-raveḥ',mean:'del re Vṛṣabhānu',info:'composto · ṣaṣṭhī ekavacana = genitivo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «of King Vṛṣabhānu». Nel verso compare come vṛṣa-raves (sandhi).',parts:[['vṛṣa','(m.) toro [mia conoscenza generale, da verificare]'],['ravi','(m.) sole [mia conoscenza generale, da verificare]']]},
  {k:'tanayā',mean:'la figlia',info:'Ślokāmṛta-bindu: «the daughter». Tema tanayā (f.) [mia conoscenza generale, da verificare].'},
  {k:'antike',mean:'vicino',info:'Ślokāmṛta-bindu: «nearby». Locativo di antika, «vicinanza» [mia conoscenza generale, da verificare]. Nel verso tanayā + antike → tanayāntike (sandhi).'},
  {k:'asi',mean:'tu sei',info:'Ślokāmṛta-bindu: «you are». Verbo as, presente 2ª singolare [mia conoscenza generale, da verificare]. Nel verso antike + asi → antike ’si (sandhi).'},
  {k:'sevā-adhikāriṇi',mean:'tu che sei incaricata del Suo servizio',info:'Ślokāmṛta-bindu: «you are encharged with Her service». Composto; adhikāriṇī è femminile «che ha il diritto, incaricata» [mia conoscenza generale, da verificare]. Nel verso compare come sevādhikāriṇi (sandhi).',parts:[['sevā','(f.) servizio [mia conoscenza generale, da verificare]'],['adhikāriṇī','(f.) che ha il diritto, incaricata [mia conoscenza generale, da verificare]']]},
  {k:'guro',mean:'o Śrī Guru',info:'Ślokāmṛta-bindu: «O Śrī Guru». Vocativo singolare di guru [mia conoscenza generale, da verificare].'},
  {k:'nija-pāda-padme',mean:'ai Tuoi piedi di loto',info:'composto · saptamī ekavacana = locativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «at your own lotus feet».',parts:[['nija','proprio [mia conoscenza generale, da verificare]'],['pāda','(m.) piede [mia conoscenza generale, da verificare]'],['padma','(n.) loto [mia conoscenza generale, da verificare]']]},
  {k:'dāsyam',mean:'il servizio',info:'Ślokāmṛta-bindu: «service». Tema dāsya (n.) · accusativo singolare [mia conoscenza generale, da verificare].'},
  {k:'pradāya',mean:'concedendo',info:'Ślokāmṛta-bindu: «bestowing». Gerundio (ktvā/lyap) da pra + dā, «dare» [mia conoscenza generale, da verificare].'},
  {k:'kuru',mean:'fai, rendi',info:'Ślokāmṛta-bindu: «make». Imperativo 2ª singolare di kṛ [mia conoscenza generale, da verificare].'},
  {k:'mām',mean:'me',info:'Ślokāmṛta-bindu: «me». Pronome asmad · accusativo singolare [mia conoscenza generale, da verificare].'},
  {k:'vraja-kānane',mean:'nella foresta di Vraja',info:'composto · saptamī ekavacana = locativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «in the forest of Vraja».',parts:[['vraja','(m.) Vraja [mia conoscenza generale, da verificare]'],['kānana','(n.) foresta [mia conoscenza generale, da verificare]']]},
  {k:'śrī-rādhā-aṅghri',mean:'i piedi di loto di Śrī Rādhā',info:'Ślokāmṛta-bindu: «Śrī-Rādhā’s lotus feet». Primo membro del composto che prosegue nel pāda 4: il verso passa da śrī- (fine del pāda 3) a rādhāṅghri- (inizio del pāda 4). Nel verso rādhā + aṅghri → rādhāṅghri (sandhi).',parts:[['śrī','sacro [mia conoscenza generale, da verificare]'],['rādhā','Rādhā [mia conoscenza generale, da verificare]'],['aṅghri','(m.) piede [mia conoscenza generale, da verificare]']]},
  {k:'sevana-rase',mean:'nel sapore (rasa) del servizio a Lei',info:'Ślokāmṛta-bindu: «of the rasa of service to Her». Composto · saptamī ekavacana = locativo singolare [mia conoscenza generale, da verificare].',parts:[['sevana','(n.) servizio [mia conoscenza generale, da verificare]'],['rasa','(m.) sapore, rasa [mia conoscenza generale, da verificare]']]},
  {k:'sukhinīm',mean:'felice, beata',info:'Ślokāmṛta-bindu: «blissful». È un femminile accusativo singolare: concorda con mām. Che sia riferito alla forma spirituale femminile del discepolo è una mia lettura, da verificare; il foglio non lo dice.'},
  {k:'sukha-abdhau',mean:'nell’oceano di beatitudine estatica',info:'composto · saptamī ekavacana = locativo singolare [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «in the ocean of ecstatic bliss». Nel verso compare come sukhābdhau (sandhi).',parts:[['sukha','(n.) felicità [mia conoscenza generale, da verificare]'],['abdhi','(m.) oceano [mia conoscenza generale, da verificare]']]}
 ],
 surf:[
  [{t:'tvaṁ',e:[0]},{t:'gopikā',e:[1]},{t:'vṛṣa-raves',e:[2]},{t:'tanayāntike',e:[3,4]},{t:'’si',e:[5]}],
  [{t:'sevādhikāriṇi',e:[6]},{t:'guro',e:[7]},{t:'nija-pāda-padme',e:[8]}],
  [{t:'dāsyaṁ',e:[9]},{t:'pradāya',e:[10]},{t:'kuru',e:[11]},{t:'māṁ',e:[12]},{t:'vraja-kānane',e:[13]},{t:'śrī-',e:[14]}],
  [{t:'rādhāṅghri-sevana-rase',e:[14,15]},{t:'sukhinīṁ',e:[16]},{t:'sukhābdhau',e:[17]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā'},
  56:{txt:'e-obhyām asya haro viṣṇupadānte',tr:'A-rāma (a) cade quando viene dopo una e o una o che sta a fine di viṣṇupada.',ex:'Esempio: hare + atra → hare ’tra'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  79:{txt:'ca-chayoḥ śa-rāmaḥ, ṭa-ṭhayoḥ ṣa-rāmaḥ, ta-thayoḥ sa-rāmaḥ',tr:'Il viṣṇusarga (ḥ) diventa ś quando segue ca o cha, ṣ quando segue ṭa o ṭha, s quando segue ta o tha.',ex:'Esempio: kṛṣṇaḥ + carati → kṛṣṇaś carati',note:'Il PDF riprende la parola viṣṇusargaḥ da un sūtra precedente della versione Bṛhat.'}
 },
 sandhi:[
  {a:'-m',b:'consonante',r:'-ṁ',sut:[72,73],note:'m finale diventa ṁ davanti a consonante (72). Succede in quattro punti: tvaṁ gopikā, dāsyaṁ pradāya, māṁ vraja-, sukhinīṁ su-. Con il 73 la nasale può anche diventare quella del varga della consonante che segue (ṅ davanti a g, m davanti a p): è facoltativo, e nel verso c’è sempre ṁ. Davanti a v e s il 73 non vale perché non sono consonanti di un varga (sūtra 17).'},
  {a:'vṛṣa-raveḥ',b:'tanayā',r:'vṛṣa-raves tanayā',sut:[79],note:'ḥ → s davanti a ta (79): come kṛṣṇaḥ + carati → kṛṣṇaś carati, ma con ta il visarga diventa s.'},
  {a:'tanayā',b:'antike',r:'tanayāntike',sut:[42],note:'ā + a → ā (42).'},
  {a:'antike',b:'asi',r:'antike ’si',sut:[56],note:'La a iniziale di asi cade dopo e a fine di viṣṇupada (56), come hare + atra → hare ’tra. Si scrive con il segno ’ (avagraha).'},
  {a:'sevā',b:'adhikāriṇi',r:'sevādhikāriṇi',sut:[42],note:'ā + a → ā (42), dentro il composto.'},
  {a:'rādhā',b:'aṅghri',r:'rādhāṅghri',sut:[42],note:'ā + a → ā (42), dentro il composto. Il composto comincia con śrī- alla fine del pāda 3 e continua nel pāda 4.'},
  {a:'sukha',b:'abdhau',r:'sukhābdhau',sut:[42],note:'a + a → ā (42), dentro il composto.'}
 ],
 seg:[
  [{t:'tva'},{t:'ṁ',s:[1]},{t:' gopikā vṛṣa-rave'},{t:'s',s:[2]},{t:' tanay'},{t:'ā',s:[3]},{t:'ntike '},{t:'’',s:[4]},{t:'si'}],
  [{t:'sev'},{t:'ā',s:[5]},{t:'dhikāriṇi guro nija-pāda-padme'}],
  [{t:'dāsya'},{t:'ṁ',s:[1]},{t:' pradāya kuru mā'},{t:'ṁ',s:[1]},{t:' vraja-kānane śrī-'}],
  [{t:'rādh'},{t:'ā',s:[6]},{t:'ṅghri-sevana-rase sukhinī'},{t:'ṁ',s:[1]},{t:' sukh'},{t:'ā',s:[7]},{t:'bdhau'}]
 ],
 metrica:{
  name:'Vasantatilakā',
  syl:14,
  sylNote:'contate da me sul testo: 4 × 14 = 56',
  gana:'ta · bha · ja · ja · ga · ga',
  yati:'nessuna pausa fissa',
  yatiNote:'Non ho dati affidabili su una cesura fissa nel Vasantatilakā',
  yatiAt:99,
  lakshana:'uktā vasantatilakā tabhajā jagau gaḥ',
  scan:['GGLGLLLGLLGLGL','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG'],
  note:'I quattro pāda hanno lo stesso schema ta-bha-ja-ja-ga-ga (GGL GLL LGL LGL GG). Una vocale breve prima di un nesso di consonanti si conta lunga: per esempio tvaṁ, dās di dāsyaṁ, vṛ di vṛṣa. Nel pāda 1 l’ultima sillaba (si) è breve per natura: la segno com’è, senza forzarla lunga. Il composto śrī-rādhāṅghri-sevana-rase si spezza fra il pāda 3 e il pāda 4. Il nome del metro lo ricavo dallo schema, non da una fonte.'
 },
 context:[
  {v:true,t:'Lo Ślokāmṛta-bindu (p. 50) lo mette nella parte sul Guru-tattva (la natura del guru), subito dopo la vandanā a Śrīla Sanātana Gosvāmī, con il titolo «A prayer to Gurudeva to bestow rādhā-dāsyam» (preghiera al Gurudeva perché conceda il servizio a Rādhā), e lo attribuisce a Śrīla Raghunātha dāsa Gosvāmī, opera «Śrī Stava Kalpadruma». Il ca-link-finder, che lo segna come verso verificato, riporta la stessa attribuzione.'},
  {v:true,t:'A parlare è il discepolo che si rivolge al proprio guru (guro, «o Śrī Guru»): lo dice la traduzione dello Ślokāmṛta-bindu, «O Gurudeva! You are a gopī…». Il guru è visto come una gopī al servizio di Śrī Rādhā, la figlia di Vṛṣabhānu, e il discepolo gli chiede di farlo impegnare nel servizio ai piedi di Rādhā nei kuñja di Vraja.'},
  {v:true,t:'Sul foglio che mi hai mandato è il terzo dei quattro versi «Prayers to recite before remembering Dīkṣā Mantras» (preghiere da recitare prima di ricordare i mantra della dīkṣā).'},
  {v:false,t:'In che punto dell’opera e in che momento Raghunātha dāsa Gosvāmī lo abbia scritto, e se «Stava Kalpadruma» sia il titolo di una raccolta o di un singolo stotra: non ho dati affidabili su questo.'}
 ],
 note:'Il testo del verso è quello dello Ślokāmṛta-bindu e del foglio. Il titolo dell’opera, «Śrī Stava Kalpadruma», è quello dello Ślokāmṛta-bindu e del ca-link-finder: non l’ho potuto confrontare con un’edizione. La devanāgarī l’ho ricavata io dal testo in caratteri latini. Il parola per parola è quello dello Ślokāmṛta-bindu, reso in italiano da me; le righe di grammatica (caso, numero, parti dei composti) sono mie.',
 sources:[
  'Testo del verso (IAST), parola per parola e traduzione inglese: Śrī Ślokāmṛta-bindu, p. 50, sezione «A prayer to Gurudeva to bestow rādhā-dāsyam» (PDF del progetto, «Slokamrta bindhu 1.pdf»; indice dei versi: «tvaṁ gopikā vṛṣa-raves tanayāntike ’si … 50»). Il foglio che mi hai mandato (n. 3) riporta lo stesso testo.',
  'ca-link-finder (repo gurudas-sda/ca-link-finder, cercata nelle trascrizioni inglesi): il verso compare in diverse trascrizioni, segnato come verso verificato con la fonte «Stava Kalpadruma, Śrīla Raghunātha dāsa Gosvāmī».',
  'Sūtra 42, 56, 72, 73 e 79 (e la definizione nel sūtra 17): Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto), controllati nell’elenco dei sūtra.',
  'Devanāgarī, genere, caso, composti, scansione, gaṇa, lakṣaṇa e nome del metro: conoscenza mia, da verificare; resa italiana del parola per parola mia.'
 ]
});
/* ----- fine Stava-kalpadruma · tvaṁ gopikā ----- */

/* ----- Vilāpa-kusumāñjali 16 ----- */
DATA.push({
 id:'vilapa-kusumanjali-16',
 label:'Vilāpa-kusumāñjali 16',
 src:'Vilāpa-kusumāñjali 16 · Raghunātha dāsa Gosvāmī',
 sub:'vasantatilakā · 14 sillabe per pāda',
 padas:[
  {iast:'pādābjayos tava vinā vara-dāsyam eva', dev:'पादाब्जयोस्तव विना वरदास्यमेव'},
  {iast:'nānyat kadāpi samaye kila devi yāce', dev:'नान्यत् कदापि समये किल देवि याचे ।'},
  {iast:'sakhyāya te mama namo ’stu namo ’stu nityaṁ', dev:'सख्याय ते मम नमोऽस्तु नमोऽस्तु नित्यं'},
  {iast:'dāsyāya te mama raso ’stu raso ’stu satyam', dev:'दास्याय ते मम रसोऽस्तु रसोऽस्तु सत्यम् ॥'}
 ],
 translation:'O Devī Rādhike! Il mio voto solenne è che non chiederò mai nulla se non quel servizio altissimo e diretto ai Tuoi piedi di loto. Offro praṇāma più e più volte al Tuo sakhītva, la posizione di Tua sakhī, ma il sentimento del mio cuore è esclusivamente per il Tuo dāsītva, la posizione di Tua ancella.',
 translationSrc:'Resa italiana mia della traduzione inglese dello Śrī Ślokāmṛta-bindu, p. 166 (PDF del progetto «Slokamrta bindhu 1.pdf»), identica a quella del foglio che mi hai mandato (n. 4, «Śrīla Raghunātha dāsa Gosvāmī prays to be solely attached to serving Śrī Rādhā (rādhā-dāsyam)»). Nel PDF il testo estratto ha alcuni diacritici rovinati: per quelli mi sono fidato del foglio.',
 words:[
  {k:'pāda-abjayoḥ',mean:'ai piedi di loto',info:'composto · saptamī dvivacana = locativo duale [mia conoscenza generale, da verificare]. Ślokāmṛta-bindu: «at the lotus feet». Nel verso compare come pādābjayos (sandhi).',parts:[['pāda','(m.) piede [mia conoscenza generale, da verificare]'],['abja','(n.) loto (nato dall’acqua) [mia conoscenza generale, da verificare]']]},
  {k:'tava',mean:'di Te',info:'Ślokāmṛta-bindu: «of You». Pronome yuṣmad · genitivo singolare [mia conoscenza generale, da verificare].'},
  {k:'vinā',mean:'eccetto, senza',info:'Ślokāmṛta-bindu: «except». Indeclinabile.'},
  {k:'vara',mean:'eccellente, altissimo',info:'Ślokāmṛta-bindu: «excellent». Nel verso è il primo membro di vara-dāsyam.'},
  {k:'dāsyam',mean:'servizio',info:'Ślokāmṛta-bindu: «service». Tema dāsya (n.) · accusativo singolare [mia conoscenza generale, da verificare].'},
  {k:'eva',mean:'certamente, soltanto',info:'Ślokāmṛta-bindu: «certainly». Indeclinabile; sottolinea la parola precedente.'},
  {k:'na',mean:'non',info:'Ślokāmṛta-bindu: «not». Nel verso na + anyat → nānyat (sandhi).'},
  {k:'anyat',mean:'qualcos’altro',info:'Ślokāmṛta-bindu: «anything else». Accusativo singolare neutro di anya [mia conoscenza generale, da verificare].'},
  {k:'kadā api',mean:'mai',info:'Ślokāmṛta-bindu: «ever». Nel verso compare come kadāpi (sandhi): con na, «mai».'},
  {k:'samaye',mean:'in un voto solenne',info:'Ślokāmṛta-bindu: «in a solmn covenant» (refuso nel PDF per «solemn»). Locativo singolare di samaya [mia conoscenza generale, da verificare].'},
  {k:'kila',mean:'certamente',info:'Ślokāmṛta-bindu: «certainly». Indeclinabile.'},
  {k:'devi',mean:'o Regina',info:'Ślokāmṛta-bindu: «O Queen». Vocativo singolare di devī [mia conoscenza generale, da verificare]. Nella traduzione: «O Devī Rādhike!».'},
  {k:'yāce',mean:'chiedo, imploro',info:'Ślokāmṛta-bindu: «I beg». Verbo yāc, presente 1ª singolare, ātmanepada [mia conoscenza generale, da verificare].'},
  {k:'sakhyāya',mean:'per l’amicizia (la posizione di sakhī)',info:'Ślokāmṛta-bindu: «for friendship» (nel PDF «sākhyāya», con ā: il verso ha sakhyāya). Dativo singolare di sakhya [mia conoscenza generale, da verificare]. Nella traduzione: «Your sakhītva, a position as Your sakhī».'},
  {k:'te',mean:'di Te',info:'Ślokāmṛta-bindu: «of You». Forma enclitica del genitivo di yuṣmad [mia conoscenza generale, da verificare].'},
  {k:'mama',mean:'di me',info:'Ślokāmṛta-bindu: «of me». Genitivo singolare di asmad [mia conoscenza generale, da verificare].'},
  {k:'namaḥ',mean:'omaggio, prostrazioni',info:'Ślokāmṛta-bindu: «obeisances». Tema namas (n.) [mia conoscenza generale, da verificare]. Nel verso namaḥ + astu → namo ’stu (sandhi).'},
  {k:'astu',mean:'sia, ci sia',info:'Ślokāmṛta-bindu: «may be». Verbo as, imperativo 3ª singolare [mia conoscenza generale, da verificare].'},
  {k:'namaḥ',mean:'omaggio, prostrazioni',info:'Ślokāmṛta-bindu: «obeisances». Ripetuto.'},
  {k:'astu',mean:'sia, ci sia',info:'Ślokāmṛta-bindu: «may be».'},
  {k:'nityam',mean:'eternamente, sempre',info:'Ślokāmṛta-bindu: «eternally». Avverbio [mia conoscenza generale, da verificare].'},
  {k:'dāsyāya',mean:'per il servizio',info:'Ślokāmṛta-bindu: «for service». Dativo singolare di dāsya [mia conoscenza generale, da verificare]. Nella traduzione: «Your dāsītva, a position as Your maidservant».'},
  {k:'te',mean:'di Te',info:'Ślokāmṛta-bindu: «of You».'},
  {k:'mama',mean:'di me',info:'Ślokāmṛta-bindu: «of me».'},
  {k:'rasaḥ',mean:'gusto, sentimento del cuore',info:'Ślokāmṛta-bindu: «taste, sentiment of the heart». Tema rasa (m.) · prathamā ekavacana = nominativo singolare [mia conoscenza generale, da verificare]. Nel verso rasaḥ + astu → raso ’stu (sandhi).'},
  {k:'astu',mean:'sia',info:'Ślokāmṛta-bindu: «let it be».'},
  {k:'rasaḥ',mean:'sapore, dolcezza (mellow)',info:'Ślokāmṛta-bindu: «mellow». Ripetuto.'},
  {k:'astu',mean:'sia',info:'Ślokāmṛta-bindu: «let it be».'},
  {k:'satyam',mean:'in verità',info:'Ślokāmṛta-bindu: «in truth». Tema satya (n.) · usato come avverbio [mia conoscenza generale, da verificare].'}
 ],
 surf:[
  [{t:'pādābjayos',e:[0]},{t:'tava',e:[1]},{t:'vinā',e:[2]},{t:'vara-dāsyam',e:[3,4]},{t:'eva',e:[5]}],
  [{t:'nānyat',e:[6,7]},{t:'kadāpi',e:[8]},{t:'samaye',e:[9]},{t:'kila',e:[10]},{t:'devi',e:[11]},{t:'yāce',e:[12]}],
  [{t:'sakhyāya',e:[13]},{t:'te',e:[14]},{t:'mama',e:[15]},{t:'namo',e:[16]},{t:'’stu',e:[17]},{t:'namo',e:[18]},{t:'’stu',e:[19]},{t:'nityaṁ',e:[20]}],
  [{t:'dāsyāya',e:[21]},{t:'te',e:[22]},{t:'mama',e:[23]},{t:'raso',e:[24]},{t:'’stu',e:[25]},{t:'raso',e:[26]},{t:'’stu',e:[27]},{t:'satyam',e:[28]}]
 ],
 sutra:{
  42:{txt:'daśāvatāra ekātmake militvā trivikramaḥ',tr:'Un daśāvatāra seguito dal suo ekātmaka si unisce a esso e diventa trivikrama (vocale lunga).',ex:'Esempio: hari + īhā → harīhā'},
  44:{txt:'u-dvaye o',tr:'Quando a-dvaya (a, ā) è seguito da u-dvaya (u, ū), si uniscono e diventano o.',ex:'Esempio: dvārakā + utsavaḥ → dvārakotsavaḥ',note:'a-dvayam è ripreso dal sūtra 43.'},
  56:{txt:'e-obhyām asya haro viṣṇupadānte',tr:'A-rāma (a) cade quando viene dopo una e o una o che sta a fine di viṣṇupada.',ex:'Esempio: hare + atra → hare ’tra'},
  72:{txt:'mo viṣṇucakraṁ viṣṇujane',tr:'Ma-rāma (m) a fine di viṣṇupada diventa viṣṇucakra (ṁ) quando segue un viṣṇujana (una consonante).',ex:'Esempio: kṛṣṇam + smarati → kṛṣṇaṁ smarati. Ma: kṛṣṇam iccha (segue una vocale, la m resta).'},
  73:{txt:'viṣṇucakrasya hariveṇur viṣṇuvarge, viṣṇupadāntasya tu vā',tr:'Il viṣṇucakra (ṁ) diventa l’hariveṇu dello stesso varga della consonante che segue, se segue un viṣṇuvarga; a fine di viṣṇupada è facoltativo.',ex:'Esempio: kṛṣṇaṁ kīrtayati → kṛṣṇaṁ kīrtayati oppure kṛṣṇaṅ kīrtayati'},
  79:{txt:'ca-chayoḥ śa-rāmaḥ, ṭa-ṭhayoḥ ṣa-rāmaḥ, ta-thayoḥ sa-rāmaḥ',tr:'Il viṣṇusarga (ḥ) diventa ś quando segue ca o cha, ṣ quando segue ṭa o ṭha, s quando segue ta o tha.',ex:'Esempio: kṛṣṇaḥ + carati → kṛṣṇaś carati',note:'Il PDF riprende la parola viṣṇusargaḥ da un sūtra precedente della versione Bṛhat.'},
  80:{txt:'ād a-rāma-gopālayor ur nityam',tr:'Un viṣṇusarga (ḥ) dopo a diventa sempre u quando segue a o un gopāla.',ex:'Esempio: kṛṣṇaḥ + gacchati → kṛṣṇo gacchati; kṛṣṇaḥ + atra → kṛṣṇo ’tra'}
 },
 sandhi:[
  {a:'pāda',b:'abjayoḥ',r:'pādābjayoḥ',sut:[42],note:'ā + a → ā (42), dentro il composto.'},
  {a:'pādābjayoḥ',b:'tava',r:'pādābjayos tava',sut:[79],note:'ḥ → s davanti a ta (79).'},
  {a:'na',b:'anyat',r:'nānyat',sut:[42],note:'a + a → ā (42).'},
  {a:'kadā',b:'api',r:'kadāpi',sut:[42],note:'ā + a → ā (42).'},
  {a:'namaḥ',b:'astu',r:'namo ’stu',sut:[80,44,56],note:'ḥ → u dopo a davanti a a (80); a + u → o (44); poi la a di astu cade dopo o a fine di viṣṇupada (56) e si scrive ’. È la stessa catena di kṛṣṇaḥ + atra → kṛṣṇo ’tra del vṛtti del 80. Succede quattro volte: namo ’stu namo ’stu e raso ’stu raso ’stu.'},
  {a:'nityam',b:'dāsyāya',r:'nityaṁ dāsyāya',sut:[72,73],note:'m → ṁ davanti a consonante (72). Con il 73 la nasale può anche diventare quella del varga seguente (qui n, perché d appartiene al ta-varga): è facoltativo, e nel verso c’è ṁ. Il sandhi passa sopra il confine fra il pāda 3 e il pāda 4. In dāsyam eva e in satyam la m resta: nel primo segue una vocale, il secondo è la fine del verso.'}
 ],
 seg:[
  [{t:'pād'},{t:'ā',s:[1]},{t:'bjayo'},{t:'s',s:[2]},{t:' tava vinā vara-dāsyam eva'}],
  [{t:'n'},{t:'ā',s:[3]},{t:'nyat kad'},{t:'ā',s:[4]},{t:'pi samaye kila devi yāce'}],
  [{t:'sakhyāya te mama nam'},{t:'o',s:[5]},{t:' '},{t:'’',s:[5]},{t:'stu nam'},{t:'o',s:[5]},{t:' '},{t:'’',s:[5]},{t:'stu nitya'},{t:'ṁ',s:[6]}],
  [{t:'dāsyāya te mama ras'},{t:'o',s:[5]},{t:' '},{t:'’',s:[5]},{t:'stu ras'},{t:'o',s:[5]},{t:' '},{t:'’',s:[5]},{t:'stu satyam'}]
 ],
 metrica:{
  name:'Vasantatilakā',
  syl:14,
  sylNote:'contate da me sul testo: 4 × 14 = 56',
  gana:'ta · bha · ja · ja · ga · ga',
  yati:'nessuna pausa fissa',
  yatiNote:'Non ho dati affidabili su una cesura fissa nel Vasantatilakā',
  yatiAt:99,
  lakshana:'uktā vasantatilakā tabhajā jagau gaḥ',
  scan:['GGLGLLLGLLGLGL','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG','GGLGLLLGLLGLGG'],
  note:'I quattro pāda hanno lo stesso schema ta-bha-ja-ja-ga-ga (GGL GLL LGL LGL GG). La m finale di una parola si conta unita alla vocale seguente (dās-ya-me-va). Una vocale breve prima di un nesso di consonanti si conta lunga: per esempio dāb di pādābjayos, nān di nānyat. Nel pāda 1 l’ultima sillaba (va di eva) è breve per natura: la segno com’è, senza forzarla lunga. Il nome del metro lo ricavo dallo schema, non da una fonte.'
 },
 context:[
  {v:true,t:'Lo Ślokāmṛta-bindu (p. 166) lo presenta così: «Śrīla Raghunātha dāsa Gosvāmī prays to be solely attached to serving Śrī Rādhā (rādhā-dāsyam)» (Raghunātha dāsa Gosvāmī prega di essere unicamente legato al servizio di Śrī Rādhā), e lo indica come Vilāpa-kusumāñjaliḥ (16). A parlare è l’autore, che si rivolge a Śrī Rādhā (devi, «O Devī Rādhike» nella traduzione).'},
  {v:true,t:'Sul foglio che mi hai mandato è il quarto dei quattro versi «Prayers to recite before remembering Dīkṣā Mantras» (preghiere da recitare prima di ricordare i mantra della dīkṣā).'},
  {v:false,t:'In che momento Raghunātha dāsa Gosvāmī abbia scritto questo verso e in che punto del poema stia nella sequenza dei versi: non ho dati affidabili su questo; so soltanto che lo Ślokāmṛta-bindu lo indica come Vilāpa-kusumāñjaliḥ 16.'}
 ],
 note:'Il testo del verso è quello dello Ślokāmṛta-bindu e del foglio. Nel ca-link-finder c’è una trascrizione che, con la stessa etichetta «Vilāpa-kusumāñjaliḥ (16)» e la stessa fonte, ha come primo pāda «gāndharvike tava vinā vara-dāsyam eva» invece di «pādābjayos tava vinā…»: è una variante che non ho potuto verificare; ho scritto la lezione dello Ślokāmṛta-bindu e del foglio. Nel parola per parola dello Ślokāmṛta-bindu c’è un refuso («solmn» per «solemn») e «sākhyāya» con la ā lunga, mentre il verso ha sakhyāya: ho scritto sakhyāya e segnalato il refuso. La devanāgarī l’ho ricavata io dal testo in caratteri latini. Il parola per parola è quello dello Ślokāmṛta-bindu, reso in italiano da me; le righe di grammatica (caso, numero, parti dei composti) sono mie.',
 sources:[
  'Testo del verso (IAST), parola per parola e traduzione inglese: Śrī Ślokāmṛta-bindu, p. 166, sezione «Rādhā-dāsyam» (PDF del progetto, «Slokamrta bindhu 1.pdf»). Il foglio che mi hai mandato (n. 4) riporta lo stesso testo.',
  'ca-link-finder (repo gurudas-sda/ca-link-finder, cercata nelle trascrizioni inglesi): il verso compare in molte trascrizioni con la lezione «pādābjayos tava vinā…» e in una con «gāndharvike tava vinā…», sempre segnato come verso verificato con la fonte «Vilāpa-kusumāñjaliḥ (16), Śrīla Raghunātha dāsa Gosvāmī» (Śrī Ślokāmṛtam-bindu).',
  'Sūtra 42, 44, 56, 72, 73, 79 e 80 (e la definizione nel sūtra 17): Hari-nāmāmṛta-vyākaraṇam di Jīva Gosvāmī, vol. 1 (PDF del progetto), controllati nell’elenco dei sūtra.',
  'Devanāgarī, genere, caso, composti, scansione, gaṇa, lakṣaṇa e nome del metro: conoscenza mia, da verificare; resa italiana del parola per parola mia.'
 ]
});
/* ----- fine Vilāpa-kusumāñjali 16 ----- */

/* ===== FINE RACCOLTA ===== */
