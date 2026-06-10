/* Competition Is for Losers — shared playbook navigation.
   Progressive enhancement only: every Next-play button has a static
   chronological default in the HTML; this script makes it tour-aware. */
(function(){
"use strict";
var CHRONO=["search","appstore","icloud","imessage","maps","mfi","applepay","carplay","watch","airpods","signin","silicon","att","gemini"];
var MONEY =["appstore","search","airpods","watch","icloud","att","applepay","mfi","silicon","carplay","maps","imessage","signin","gemini"];
var FILE={search:"play-search.html",appstore:"play-app-store.html",icloud:"play-icloud.html",imessage:"play-imessage.html",
  maps:"play-maps.html",mfi:"play-mfi.html",applepay:"play-apple-pay.html",carplay:"play-carplay.html",watch:"play-watch.html",
  airpods:"play-airpods.html",signin:"play-signin.html",silicon:"play-silicon.html",att:"play-att.html",gemini:"competition-is-for-losers.html"};
var NAME={search:"Search Default",appstore:"App Store",icloud:"iCloud",imessage:"iMessage",maps:"Maps",mfi:"MFi / Lightning",
  applepay:"Apple Pay",carplay:"CarPlay",watch:"Apple Watch",airpods:"AirPods",signin:"Sign in with Apple",
  silicon:"Apple Silicon",att:"App Tracking Transparency",gemini:"Gemini · the gateway act"};
var TKEY="cifl.tour";
var m=location.search.match(/tour=(chrono|money)/);
try{ if(m) localStorage.setItem(TKEY,m[1]); }catch(e){}
function tour(){ try{return localStorage.getItem(TKEY)||"";}catch(e){return "";} }
function endTour(){ try{localStorage.removeItem(TKEY);}catch(e){} }
function order(t){ return t==="money"?MONEY:CHRONO; }
function nextOf(id,t){ var o=order(t),i=o.indexOf(id); return (i>=0&&i+1<o.length)?o[i+1]:null; }
window.cifNav={tour:tour,endTour:endTour,nextOf:nextOf,order:order,FILE:FILE,NAME:NAME};
document.addEventListener("DOMContentLoaded",function(){
  var grid=document.querySelector(".exitgrid[data-play]");
  var a=document.getElementById("exitnext");
  if(!grid||!a)return;
  var id=grid.getAttribute("data-play"), t=tour(), nid=nextOf(id,t);
  var lbl=document.getElementById("exitnextlbl"), nm=a.querySelector(".nm");
  if(nid){
    a.href=FILE[nid]+(t?("?tour="+t):"");
    if(nm)nm.innerHTML=NAME[nid]+' <span class="b">→</span>';
    if(lbl)lbl.textContent=t?("Next on the tour · "+(t==="money"?"follow the money":"chronological")):"Next play";
  }else{
    a.href="the-score.html";
    if(nm)nm.innerHTML='The score — the verdict <span class="b">→</span>';
    if(lbl)lbl.textContent="End of the tour";
  }
});
})();
