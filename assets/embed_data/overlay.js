google.maps.__gjsload__('overlay', function(_){var Nt=function(a){this.h=a},xla=function(){},Ot=function(a){a.ro=a.ro||new xla;return a.ro},yla=function(a){this.La=new _.Th(function(){var b=a.ro;if(a.getPanes()){if(a.getProjection()){if(!b.rn&&a.onAdd)a.onAdd();b.rn=!0;a.draw()}}else{if(b.rn)if(a.onRemove)a.onRemove();else a.remove();b.rn=!1}},0)},zla=function(a,b){function c(){return _.Uh(e.La)}var d=Ot(a),e=d.gm;e||(e=d.gm=new yla(a));_.pb(d.Za||[],_.F.removeListener);var f=d.Ya=d.Ya||new _.Rr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Ur=d.Ur||new Nt(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Za=[_.F.addListener(a,"panes_changed",c),_.F.addListener(g,"zoom_changed",c),_.F.addListener(g,"offset_changed",c),_.F.addListener(b,"projection_changed",c),_.F.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.qf&&(_.og(b,"Ox"),_.cg(b,148440))},Dla=function(a){if(a){var b=a.getMap();if(Ala(a)!==b&&b&&b instanceof _.qf){var c=b.__gm;c.overlayLayer?a.__gmop=new Bla(b,a,c.overlayLayer):c.h.then(function(d){d=d.Pa;var e=new Pt(b,d);d.nb(e);c.overlayLayer=e;Cla(a);Dla(a)})}}},Cla=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.h.unbindAll(),b.h.set("panes",null),b.h.set("projection",null),b.l.Wf(b),b.j&&(b.j=!1,b.h.onRemove?b.h.onRemove():b.h.remove()))}},Ala=function(a){return(a=a.__gmop)?a.map:null},
Bla=function(a,b,c){this.map=a;this.h=b;this.l=c;this.j=!1;_.og(this.map,"Ox");_.cg(this.map,148440);c.vf(this)},Ela=function(a,b){a.h.get("projection")!=b&&(a.h.bindTo("panes",a.map.__gm),a.h.set("projection",b))},Pt=function(a,b){this.m=a;this.l=b;this.h=null;this.j=[]};_.C(Nt,_.G);
Nt.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.he(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.h:null))};var Qt={};_.C(yla,_.G);Qt.vf=function(a){if(a){var b=a.getMap();(Ot(a).Br||null)!==b&&(b&&zla(a,b),Ot(a).Br=b)}};Qt.Wf=function(a){var b=Ot(a),c=b.Ya;c&&c.unbindAll();(c=b.Ur)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Za&&_.pb(b.Za,_.F.removeListener);b.Za=null;b.gm&&(b.gm.La.Id(),b.gm=null);delete Ot(a).Br};var Rt={};Bla.prototype.draw=function(){this.j||(this.j=!0,this.h.onAdd&&this.h.onAdd());this.h.draw&&this.h.draw()};Pt.prototype.dispose=function(){};Pt.prototype.Ac=function(a,b,c,d,e,f,g,h){var k=this.h=this.h||new _.Pn(this.m,this.l,function(){});k.Ac(a,b,c,d,e,f,g,h);a=_.A(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,Ela(b,k),b.draw()};Pt.prototype.vf=function(a){this.j.push(a);this.h&&Ela(a,this.h);this.l.refresh()};Pt.prototype.Wf=function(a){_.Gb(this.j,a)};Rt.vf=Dla;Rt.Wf=Cla;_.Ze("overlay",{zp:function(a){if(a){(0,Qt.Wf)(a);(0,Rt.Wf)(a);var b=a.getMap();b&&(b instanceof _.qf?(0,Rt.vf)(a):(0,Qt.vf)(a))}},preventMapHitsFrom:function(a){_.Bo(a,{onClick:function(b){return _.go(b.event)},ud:function(b){return _.Vn(b)},Hh:function(b){return _.Wn(b)},Xd:function(b){return _.Wn(b)},Dd:function(b){return _.Xn(b)}}).Ci(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.cf);a.addEventListener("contextmenu",_.cf);a.addEventListener("dblclick",_.cf);a.addEventListener("mousedown",
_.cf);a.addEventListener("mousemove",_.cf);a.addEventListener("MSPointerDown",_.cf);a.addEventListener("pointerdown",_.cf);a.addEventListener("touchstart",_.cf);a.addEventListener("wheel",_.cf)}});});
