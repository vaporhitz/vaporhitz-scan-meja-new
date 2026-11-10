(function(){
var C=window.CONFIG,$=function(i){return document.getElementById(i)};
function toast(m){var t=$("toast");t.textContent=m;t.classList.add("show");setTimeout(function(){t.classList.remove("show")},1800)}
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}

$("logo").src=C.logo;$("nama").textContent=C.nama;$("tagline").textContent=C.tagline;
$("foot").textContent=C.footer||"";document.title=C.nama;
$("gmaps").href=C.gmaps;

/* accordion */
["wifiItem","rateItem"].forEach(function(id){
  var it=$(id);it.querySelector(".btn").onclick=function(){it.classList.toggle("open")};
});

/* menu */
var built=false;
$("menuJudul").textContent=C.menu.judul;
function openMenu(){
  if(!built){built=true;C.menu.halaman.forEach(function(u,i){
    var im=document.createElement("img");im.src=u;im.alt="Menu halaman "+(i+1);im.loading=i<2?"eager":"lazy";$("menuPages").appendChild(im)})}
  $("menuOv").classList.add("show");$("menuOv").scrollTop=0;document.body.style.overflow="hidden";
}
function closeMenu(){$("menuOv").classList.remove("show");document.body.style.overflow=""}
$("menuBtn").onclick=openMenu;$("menuClose").onclick=closeMenu;

/* wifi */
function esc(s){return s.replace(/([\\;,:"])/g,"\\$1")}
function copyTxt(t){
  try{navigator.clipboard.writeText(t).then(function(){toast("Tersalin ✓")},function(){toast("Tahan teks untuk menyalin")})}
  catch(e){toast("Tahan teks untuk menyalin")}
}
C.wifi.forEach(function(w){
  var box=el("div","net");
  function line(label,val,btnTxt){
    var r=el("div","row"),l=el("div"),s=el("span",null,label),c=el("code",null,val);
    l.appendChild(s);l.appendChild(c);
    var b=el("button","btn sm",btnTxt);b.onclick=function(){copyTxt(val)};
    r.appendChild(l);r.appendChild(b);return r;
  }
  box.appendChild(line(w.ket||"Nama WiFi",w.nama,"Salin nama"));
  box.appendChild(line("Password",w.password,"Salin"));
  var qd=el("div","qr show"),qi=document.createElement("img");qi.alt="Barcode WiFi "+w.nama;qd.appendChild(qi);
  try{var q=qrcode(0,"M");q.addData("WIFI:T:WPA;S:"+esc(w.nama)+";P:"+esc(w.password)+";;");q.make();qi.src=q.createDataURL(6,2)}
  catch(e){qd.style.display="none"}
  box.appendChild(el("p","hint","Scan barcode untuk langsung tersambung"));box.appendChild(qd);$("wifiList").appendChild(box);
});

/* rating */
var rating=0,sb=$("stars");
for(var i=1;i<=5;i++){(function(n){
  var b=el("button",null,"★");b.type="button";b.setAttribute("aria-label",n+" bintang");
  b.onclick=function(){rating=n;[].forEach.call(sb.children,function(c,j){c.classList.toggle("on",j<n)})};
  sb.appendChild(b)})(i)}
$("send").onclick=function(){
  if(!rating){toast("Pilih bintang dulu ya");return}
  var F=C.form||{};
  if(F.action&&F.entryBintang){
    var body=new URLSearchParams();
    body.append(F.entryBintang,String(rating));
    if(F.entryKesan)body.append(F.entryKesan,$("kesan").value.trim());
    try{fetch(F.action,{method:"POST",mode:"no-cors",body:body})}catch(e){}
  }
  $("rateForm").style.display="none";$("done").style.display="block";
};
})();
