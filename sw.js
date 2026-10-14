/* Śloka Drill: service worker. Fa funzionare l'app anche senza rete.
   Prima la rete (ogni file caricato sulla repo arriva subito), se la rete manca usa la copia salvata sul telefono.
   Non serve modificarlo quando si aggiornano i versi o il codice. */
var CACHE='sloka-drill';
var CORE=['./','index.html','stile.css','app.js','versi.js','manifest.webmanifest','icon.png'];

self.addEventListener('install',function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return Promise.all(CORE.map(function(u){
        return fetch(u,{cache:'reload'}).then(function(r){if(r.ok)return c.put(u,r)}).catch(function(){});
      }));
    }).then(function(){return self.skipWaiting()})
  );
});

self.addEventListener('activate',function(e){
  e.waitUntil(
    caches.keys().then(function(ks){
      return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}));
    }).then(function(){return self.clients.claim()})
  );
});

self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET')return;
  var url=new URL(req.url);
  var same=url.origin===self.location.origin;
  var fonts=/(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(url.hostname);
  if(same){
    e.respondWith(
      fetch(req.url,{cache:'no-cache'}).then(function(res){
        if(res&&res.ok&&!url.search){
          var cp=res.clone();
          caches.open(CACHE).then(function(c){c.put(req,cp)});
        }
        return res;
      }).catch(function(){
        return caches.match(req,{ignoreSearch:true}).then(function(hit){
          return hit||(req.mode==='navigate'?caches.match('index.html'):Response.error());
        });
      })
    );
  }else if(fonts){
    e.respondWith(
      caches.match(req).then(function(hit){
        var net=fetch(req).then(function(res){
          if(res&&(res.ok||res.type==='opaque')){
            var cp=res.clone();
            caches.open(CACHE).then(function(c){c.put(req,cp)});
          }
          return res;
        }).catch(function(){return hit});
        return hit||net;
      })
    );
  }
});
