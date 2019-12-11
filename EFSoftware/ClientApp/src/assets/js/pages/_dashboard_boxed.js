$(function(){function t(t,e){function a(){s=n.node().getBoundingClientRect().width-r.left-r.right,v.attr("width",s+r.left+r.right),x.attr("width",s+r.left+r.right),u.range([0,s]),x.selectAll(".d3-axis-horizontal").call(m),x.selectAll(".d3-axis-subticks").attr("x1",u).attr("x2",u),x.selectAll(".d3-grid-dashed").call(y.tickSize(-s,0,0)),x.selectAll(".d3-axis-right").attr("transform","translate("+s+", 0)"),x.selectAll(".streamgraph-layer").attr("d",function(t){return k(t.values)})}var n=d3.select(t),r={top:5,right:50,bottom:40,left:50},s=n.node().getBoundingClientRect().width-r.left-r.right,e=e-r.top-r.bottom,i=30,l=n.append("div").attr("class","d3-tip e").style("display","none"),o=d3.time.format("%m/%d/%y %H:%M"),d=d3.time.format("%H:%M"),c=["#03A9F4","#29B6F6","#4FC3F7","#81D4FA","#B3E5FC","#E1F5FE"],u=d3.time.scale().range([0,s]),p=d3.scale.linear().range([e,0]),f=d3.scale.ordinal().range(c),m=d3.svg.axis().scale(u).orient("bottom").ticks(d3.time.hours,4).innerTickSize(4).tickPadding(8).tickFormat(d3.time.format("%H:%M")),h=d3.svg.axis().scale(p).ticks(6).innerTickSize(4).outerTickSize(0).tickPadding(8).tickFormat(function(t){return t/1e3+"k"}),g=h,y=d3.svg.axis().scale(p).orient("left").ticks(6).tickPadding(8).tickFormat("").tickSize(-s,0,0),v=n.append("svg"),x=v.attr("width",s+r.left+r.right).attr("height",e+r.top+r.bottom).append("g").attr("transform","translate("+r.left+","+r.top+")"),b=d3.layout.stack().offset("silhouette").values(function(t){return t.values}).x(function(t){return t.date}).y(function(t){return t.value}),w=d3.nest().key(function(t){return t.key}),k=d3.svg.area().interpolate("cardinal").x(function(t){return u(t.date)}).y0(function(t){return p(t.y0)}).y1(function(t){return p(t.y0+t.y)});d3.csv("assets/demo_data/dashboard/traffic_sources.csv",function(a,c){c.forEach(function(t){t.date=o.parse(t.date),t.value=+t.value});var v=b(w.entries(c));u.domain(d3.extent(c,function(t,e){return t.date})),p.domain([0,d3.max(c,function(t){return t.y0+t.y})]),x.append("g").attr("class","d3-grid-dashed").call(y);var A=x.append("g").attr("class","streamgraph-layers-group"),M=A.selectAll(".streamgraph-layer").data(v).enter().append("path").attr("class","streamgraph-layer").attr("d",function(t){return k(t.values)}).style("stroke","#fff").style("stroke-width",.5).style("fill",function(t,e){return f(e)}),C=M.style("opacity",0).transition().duration(750).delay(function(t,e){return 50*e}).style("opacity",1);x.append("g").attr("class","d3-axis d3-axis-left d3-axis-solid").call(h.orient("left")),d3.select(x.selectAll(".d3-axis-left .tick text")[0][0]).style("visibility","hidden"),x.append("g").attr("class","d3-axis d3-axis-right d3-axis-solid").attr("transform","translate("+s+", 0)").call(g.orient("right")),d3.select(x.selectAll(".d3-axis-right .tick text")[0][0]).style("visibility","hidden");var z=x.append("g").attr("class","d3-axis d3-axis-horizontal d3-axis-solid").attr("transform","translate(0,"+e+")").call(m);z.selectAll(".d3-axis-subticks").data(u.ticks(d3.time.hours),function(t){return t}).enter().append("line").attr("class","d3-axis-subticks").attr("y1",0).attr("y2",4).attr("x1",u).attr("x2",u);var B=A.append("g").attr("class","hover-line"),F=B.append("line").attr("y1",0).attr("y2",e).style("fill","none").style("stroke","#fff").style("stroke-width",1).style("pointer-events","none").style("shape-rendering","crispEdges").style("opacity",0),R=B.append("rect").attr("x",2).attr("y",2).attr("width",6).attr("height",6).style("fill","#03A9F4").style("stroke","#fff").style("stroke-width",1).style("shape-rendering","crispEdges").style("pointer-events","none").style("opacity",0);C.each("end",function(){M.on("mouseover",function(t,e){x.selectAll(".streamgraph-layer").transition().duration(250).style("opacity",function(t,a){return a!=e?.75:1})}).on("mousemove",function(t,e){mouse=d3.mouse(this),mousex=mouse[0],mousey=mouse[1],datearray=[];var a=u.invert(mousex);a=a.getHours();for(var n=t.values,r=0;r<n.length;r++)datearray[r]=n[r].date,datearray[r]=datearray[r].getHours();mousedate=datearray.indexOf(a),pro=t.values[mousedate].value,R.attr("x",mousex-3).attr("y",mousey-6).style("opacity",1),F.attr("x1",mousex).attr("x2",mousex).style("opacity",1),l.html("<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>"+t.key+"</div></li><li>Visits: &nbsp;<span class='text-semibold pull-right'>"+pro+"</span></li><li>Time: &nbsp; <span class='text-semibold pull-right'>"+d(t.values[mousedate].date)+"</span></li></ul>").style("display","block"),l.append("div").attr("class","d3-tip-arrow")}).on("mouseout",function(t,e){x.selectAll(".streamgraph-layer").transition().duration(250).style("opacity",1),R.style("opacity",0),l.style("display","none"),F.style("opacity",0)})}),n.on("mousemove",function(e,a){mouse=d3.mouse(this),mousex=mouse[0],mousey=mouse[1],l.style("top",mousey-$(".d3-tip").outerHeight()/2-2+"px"),mousex>=$(t).outerWidth()-$(".d3-tip").outerWidth()-r.right-2*i?l.style("left",mousex-$(".d3-tip").outerWidth()-i+"px").attr("class","d3-tip w"):l.style("left",mousex+i+"px").attr("class","d3-tip e")})}),$(window).on("resize",a),$(document).on("click",".sidebar-control",a)}function e(t,e){function a(){d3.transition().duration(m?7500:500).each(n)}function n(){function t(){i=r.node().getBoundingClientRect().width-s.left-s.right,u.attr("width",i+s.left+s.right),p.attr("width",i+s.left+s.right),g.range([0,i]),y.range([e,0]),p.select(".d3-axis-horizontal").call(v),p.select(".d3-axis-vertical").call(x.tickSize(0-i)),p.selectAll(".d3-line").attr("d",function(t,e){return h(t.values)}),p.selectAll(".d3-line-circle").attr("cx",function(t,e){return g(t.date)})}var a=d3.nest().key(function(t){return t.type}).map(formatted),n=f.val(),d=a[n];c.domain(d3.keys(d[0]).filter(function(t){return"date"!==t&&"type"!==t}));var m=c.domain().map(function(t){return{name:t,values:d.map(function(e){return{name:t,date:o(e.date),value:parseFloat(e[t],10)}})}}),h=d3.svg.line().x(function(t){return g(t.date)}).y(function(t){return y(t.value)}).interpolate("cardinal"),g=d3.time.scale().domain([d3.min(m,function(t){return d3.min(t.values,function(t){return t.date})}),d3.max(m,function(t){return d3.max(t.values,function(t){return t.date})})]).range([0,i]),y=d3.scale.linear().domain([d3.min(m,function(t){return d3.min(t.values,function(t){return t.value})}),d3.max(m,function(t){return d3.max(t.values,function(t){return t.value})})]).range([e,0]),v=d3.svg.axis().scale(g).orient("bottom").tickPadding(8).ticks(d3.time.days).innerTickSize(4).tickFormat(d3.time.format("%a")),x=d3.svg.axis().scale(y).orient("left").ticks(6).tickSize(0-i).tickPadding(8);p.append("g").attr("class","d3-axis d3-axis-horizontal d3-axis-solid").attr("transform","translate(0,"+e+")"),p.append("g").attr("class","d3-axis d3-axis-vertical d3-axis-transparent");var b=p.selectAll(".lines").data(m),w=b.enter().append("g").attr("class","lines").attr("id",function(t){return t.name+"-line"});w.append("path").attr("class","d3-line d3-line-medium").style("stroke",function(t){return c(t.name)}).style("opacity",0).attr("d",function(t){return h(t.values[0])}).transition().duration(500).delay(function(t,e){return 200*e}).style("opacity",1);var k=b.selectAll("circle").data(function(t){return t.values}).enter().append("circle").attr("class","d3-line-circle d3-line-circle-medium").attr("cx",function(t,e){return g(t.date)}).attr("cy",function(t,e){return y(t.value)}).attr("r",3).style("fill","#fff").style("stroke",function(t){return c(t.name)});k.style("opacity",0).transition().duration(500).delay(500).style("opacity",1),k.on("mouseover",function(t){l.offset([-15,0]).show(t),d3.select(this).transition().duration(250).attr("r",4)}).on("mouseout",function(t){l.hide(t),d3.select(this).transition().duration(250).attr("r",3)}),b.each(function(t){d3.select(d3.select(this).selectAll("circle")[0][0]).on("mouseover",function(t){l.offset([0,15]).direction("e").show(t),d3.select(this).transition().duration(250).attr("r",4)}).on("mouseout",function(t){l.direction("n").hide(t),d3.select(this).transition().duration(250).attr("r",3)})}),b.each(function(t){d3.select(d3.select(this).selectAll("circle")[0][d3.select(this).selectAll("circle").size()-1]).on("mouseover",function(t){l.offset([0,-15]).direction("w").show(t),d3.select(this).transition().duration(250).attr("r",4)}).on("mouseout",function(t){l.direction("n").hide(t),d3.select(this).transition().duration(250).attr("r",3)})});var A=d3.transition(b);A.select("path").attr("d",function(t,e){return h(t.values)}),A.selectAll("circle").attr("cy",function(t,e){return y(t.value)}).attr("cx",function(t,e){return g(t.date)}),d3.transition(p).select(".d3-axis-vertical").call(x),d3.transition(p).select(".d3-axis-horizontal").attr("transform","translate(0,"+e+")").call(v),$(window).on("resize",t),$(document).on("click",".sidebar-control",t)}var r=d3.select(t),s={top:5,right:30,bottom:30,left:50},i=r.node().getBoundingClientRect().width-s.left-s.right,e=e-s.top-s.bottom,l=d3.tip().attr("class","d3-tip").html(function(t){return"<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>"+t.name+" app</div></li><li>Sales: &nbsp;<span class='text-semibold pull-right'>"+t.value+"</span></li><li>Revenue: &nbsp; <span class='text-semibold pull-right'>$"+(25*t.value).toFixed(2)+"</span></li></ul>"}),o=d3.time.format("%Y/%m/%d").parse,d=(d3.time.format("%b %d, '%y"),["#4CAF50","#FF5722","#5C6BC0"]),c=d3.scale.ordinal().range(d),u=r.append("svg"),p=u.attr("width",i+s.left+s.right).attr("height",e+s.top+s.bottom).append("g").attr("transform","translate("+s.left+","+s.top+")").call(l),f=$("#select_date").multiselect({buttonClass:"btn btn-link text-semibold",enableHTML:!0,dropRight:!0,onChange:function(){a(),$.uniform.update()},buttonText:function(t,e){var a="";return t.each(function(){a+=$(this).html()+", "}),'<span class="status-mark border-warning position-left"></span>'+a.substr(0,a.length-2)}});$(".multiselect-container input").uniform({radioClass:"choice"}),d3.csv("assets/demo_data/dashboard/app_sales.csv",function(t,e){formatted=e,n()});var m;d3.select(window).on("keydown",function(){m=d3.event.altKey}).on("keyup",function(){m=!1})}function a(t,e,a){var n=d3.select(t),r={top:20,right:35,bottom:40,left:35},s=n.node().getBoundingClientRect().width-r.left-r.right,e=e-r.top-r.bottom,i=d3.time.format("%Y-%m-%d").parse,l=d3.bisector(function(t){return t.date}).left,o=d3.time.format("%b %d"),d=n.append("svg"),c=d.attr("width",s+r.left+r.right).attr("height",e+r.top+r.bottom).append("g").attr("transform","translate("+r.left+","+r.top+")"),u=d3.svg.area().x(function(t){return p(t.date)}).y0(e).y1(function(t){return f(t.value)}).interpolate("monotone"),p=d3.time.scale().range([0,s]),f=d3.scale.linear().range([e,0]),m=d3.svg.axis().scale(p).orient("bottom").ticks(d3.time.days,6).innerTickSize(4).tickPadding(8).tickFormat(d3.time.format("%b %d"));d3.json("assets/demo_data/dashboard/monthly_sales.json",function(t,h){function g(){var t=d3.mouse(this),a=t[0],s=(t[1],p.invert(a)),i=l(h,s),d=h[i-1],c=h[i],u=s-d.date>c.date-s?c:d;w.attr("transform","translate("+p(u.date)+","+e+")"),k.attr("transform","translate("+p(u.date)+","+f(u.value)+")"),a>=n.node().getBoundingClientRect().width-A.select("text").node().getBoundingClientRect().width-r.right-r.left?A.select("text").attr("text-anchor","end").attr("x",function(){return p(u.date)-15+"px"}).text(o(u.date)+" - "+u.value+" sales"):A.select("text").attr("text-anchor","start").attr("x",function(){return p(u.date)+15+"px"}).text(o(u.date)+" - "+u.value+" sales")}function y(){s=n.node().getBoundingClientRect().width-r.left-r.right,d.attr("width",s+r.left+r.right),c.attr("width",s+r.left+r.right),p.range([0,s]),c.selectAll(".d3-axis-horizontal").call(m),c.selectAll(".d3-axis-subticks").attr("x1",p).attr("x2",p),c.selectAll(".d3-area").datum(h).attr("d",u),c.selectAll(".d3-crosshair-overlay").attr("width",s)}if(t)return console.error(t);h.forEach(function(t){t.date=i(t.date),t.value=+t.value});var v=d3.max(h,function(t){return t.value}),x=h.map(function(t){return{date:t.date,value:0}});p.domain(d3.extent(h,function(t,e){return t.date})),f.domain([0,d3.max(h,function(t){return t.value})]);var b=c.append("g").attr("class","d3-axis d3-axis-horizontal d3-axis-solid").attr("transform","translate(0,"+e+")").call(m);b.selectAll(".d3-axis-subticks").data(p.ticks(d3.time.days),function(t){return t}).enter().append("line").attr("class","d3-axis-subticks").attr("y1",0).attr("y2",4).attr("x1",p).attr("x2",p),c.append("path").datum(h).attr("class","d3-area").attr("d",u).style("fill",a).transition().duration(1e3).attrTween("d",function(){var t=d3.interpolateArray(x,h);return function(e){return u(t(e))}});var w=c.append("g").attr("class","d3-crosshair-line").style("display","none");w.append("line").attr("class","vertical-crosshair").attr("y1",0).attr("y2",-v).style("stroke","#e5e5e5").style("shape-rendering","crispEdges");var k=c.append("g").attr("class","d3-crosshair-pointer").style("display","none");k.append("circle").attr("r",3).style("fill","#fff").style("stroke",a).style("stroke-width",1);var A=c.append("g").attr("class","d3-crosshair-text").style("display","none");A.append("text").attr("dy",-10).style("font-size",12),c.append("rect").attr("class","d3-crosshair-overlay").style("fill","none").style("pointer-events","all").attr("width",s).attr("height",e).on("mouseover",function(){k.style("display",null),w.style("display",null),A.style("display",null)}).on("mouseout",function(){k.style("display","none"),w.style("display","none"),A.style("display","none")}).on("mousemove",g),$(window).on("resize",y),$(document).on("click",".sidebar-control",y)})}function n(t,e,a){var n=d3.select(t),r={top:0,right:0,bottom:0,left:0},s=n.node().getBoundingClientRect().width-r.left-r.right,e=e-r.top-r.bottom,i=d3.time.format("%Y-%m-%d").parse,l=n.append("svg"),o=l.attr("width",s+r.left+r.right).attr("height",e+r.top+r.bottom).append("g").attr("transform","translate("+r.left+","+r.top+")"),d=d3.svg.area().x(function(t){return c(t.date)}).y0(e).y1(function(t){return u(t.value)}).interpolate("monotone"),c=d3.time.scale().range([0,s]),u=d3.scale.linear().range([e,0]);d3.json("assets/demo_data/dashboard/monthly_sales.json",function(t,e){function p(){s=n.node().getBoundingClientRect().width-r.left-r.right,l.attr("width",s+r.left+r.right),o.attr("width",s+r.left+r.right),c.range([0,s]),o.selectAll(".d3-area").datum(e).attr("d",d)}if(t)return console.error(t);e.forEach(function(t){t.date=i(t.date),t.value=+t.value});var f=(d3.max(e,function(t){return t.value}),e.map(function(t){return{date:t.date,value:0}}));c.domain(d3.extent(e,function(t,e){return t.date})),u.domain([0,d3.max(e,function(t){return t.value})]),o.append("path").datum(e).attr("class","d3-area").style("fill",a).attr("d",d).transition().duration(1e3).attrTween("d",function(){var t=d3.interpolateArray(f,e);return function(e){return d(t(e))}}),$(window).on("resize",p),$(document).on("click",".sidebar-control",p)})}function r(t,e,a,n,r,s,i,l){function o(){A.attr("transform",null).transition().duration(s).ease("linear").attr("transform","translate("+h(0)+",0)"),"area"==e?A.attr("d",v).attr("class","d3-area").style("fill",l):A.attr("d",y).attr("class","d3-line d3-line-medium").style("stroke",l)}function d(){p=c.node().getBoundingClientRect().width-u.left-u.right,x.attr("width",p+u.left+u.right),b.attr("width",p+u.left+u.right),h.range([0,p]),k.attr("width",p),b.select(".d3-line").attr("d",y),b.select(".d3-area").attr("d",v)}for(var c=d3.select(t),u={top:0,right:0,bottom:0,left:0},p=c.node().getBoundingClientRect().width-u.left-u.right,n=n-u.top-u.bottom,f=[],m=0;m<a;m++)f.push(Math.floor(Math.random()*a)+5);var h=d3.scale.linear().range([0,p]),g=d3.scale.linear().range([n-5,5]);h.domain([1,a-3]),g.domain([0,a]);var y=d3.svg.line().interpolate(r).x(function(t,e){return h(e)}).y(function(t,e){return g(t)}),v=d3.svg.area().interpolate(r).x(function(t,e){return h(e)}).y0(n).y1(function(t){return g(t)}),x=c.append("svg"),b=x.attr("width",p+u.left+u.right).attr("height",n+u.top+u.bottom).append("g").attr("transform","translate("+u.left+","+u.top+")"),w=b.append("defs").append("clipPath").attr("id",function(e,a){return"load-clip-"+t.substring(1)}),k=w.append("rect").attr("class","load-clip").attr("width",0).attr("height",n);k.transition().duration(1e3).ease("linear").attr("width",p);var A=b.append("g").attr("clip-path",function(e,a){return"url(#load-clip-"+t.substring(1)+")"}).append("path").datum(f).attr("transform","translate("+h(0)+",0)");"area"==e?A.attr("d",v).attr("class","d3-area").style("fill",l):A.attr("d",y).attr("class","d3-line d3-line-medium").style("stroke",l),A.style("opacity",0).transition().duration(750).style("opacity",1),setInterval(function(){f.push(Math.floor(Math.random()*a)+5),f.shift(),o()},i),$(window).on("resize",d),$(document).on("click",".sidebar-control",d)}function s(t,e){function a(){i=r.node().getBoundingClientRect().width-s.left-s.right,u.attr("width",i+s.left+s.right),p.attr("width",i+s.left+s.right),f.range([l,i-l]),y.attr("width",i),p.selectAll(".d3-line").attr("d",h(n)),p.selectAll(".d3-line-circle").attr("cx",h.x()),p.selectAll(".d3-line-guides").attr("x1",function(t,e){return f(t.date)}).attr("x2",function(t,e){return f(t.date)})}var n=[{date:"04/13/14",alpha:"60"},{date:"04/14/14",alpha:"35"},{date:"04/15/14",alpha:"65"},{date:"04/16/14",alpha:"50"},{date:"04/17/14",alpha:"65"},{date:"04/18/14",alpha:"20"},{date:"04/19/14",alpha:"60"}],r=d3.select(t),s={top:0,right:0,bottom:0,left:0},i=r.node().getBoundingClientRect().width-s.left-s.right,e=e-s.top-s.bottom,l=20,o=d3.time.format("%m/%d/%y").parse,d=d3.time.format("%a, %B %e"),c=d3.tip().attr("class","d3-tip").html(function(t){return"<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-check2 position-left'></i>"+d(t.date)+"</div></li><li>Sales: &nbsp;<span class='text-semibold pull-right'>"+t.alpha+"</span></li><li>Revenue: &nbsp; <span class='text-semibold pull-right'>$"+(25*t.alpha).toFixed(2)+"</span></li></ul>"}),u=r.append("svg"),p=u.attr("width",i+s.left+s.right).attr("height",e+s.top+s.bottom).append("g").attr("transform","translate("+s.left+","+s.top+")").call(c);n.forEach(function(t){t.date=o(t.date),t.alpha=+t.alpha});var f=d3.time.scale().range([l,i-l]),m=d3.scale.linear().range([e,5]);f.domain(d3.extent(n,function(t){return t.date})),m.domain([0,d3.max(n,function(t){return Math.max(t.alpha)})]);var h=d3.svg.line().x(function(t){return f(t.date)}).y(function(t){return m(t.alpha)}),g=p.append("defs").append("clipPath").attr("id","clip-line-small"),y=g.append("rect").attr("class","clip").attr("width",0).attr("height",e);y.transition().duration(1e3).ease("linear").attr("width",i);p.append("path").attr({d:h(n),"clip-path":"url(#clip-line-small)",class:"d3-line d3-line-medium"}).style("stroke","#fff");p.select(".line-tickets").transition().duration(1e3).ease("linear");var v=p.append("g").selectAll(".d3-line-guides-group").data(n);v.enter().append("line").attr("class","d3-line-guides").attr("x1",function(t,e){return f(t.date)}).attr("y1",function(t,a){return e}).attr("x2",function(t,e){return f(t.date)}).attr("y2",function(t,a){return e}).style("stroke","rgba(255,255,255,0.3)").style("stroke-dasharray","4,2").style("shape-rendering","crispEdges"),v.transition().duration(1e3).delay(function(t,e){return 150*e}).attr("y2",function(t,e){return m(t.alpha)});var x=p.insert("g").selectAll(".d3-line-circle").data(n).enter().append("circle").attr("class","d3-line-circle d3-line-circle-medium").attr("cx",h.x()).attr("cy",h.y()).attr("r",3).style("stroke","#fff").style("fill","#607D8B");x.style("opacity",0).transition().duration(250).ease("linear").delay(1e3).style("opacity",1),x.on("mouseover",function(t){c.offset([-10,0]).show(t),d3.select(this).transition().duration(250).attr("r",4)}).on("mouseout",function(t){c.hide(t),d3.select(this).transition().duration(250).attr("r",3)}),d3.select(x[0][0]).on("mouseover",function(t){c.offset([0,10]).direction("e").show(t),d3.select(this).transition().duration(250).attr("r",4)}).on("mouseout",function(t){c.direction("n").hide(t),d3.select(this).transition().duration(250).attr("r",3)}),d3.select(x[0][x.size()-1]).on("mouseover",function(t){c.offset([0,-10]).direction("w").show(t),d3.select(this).transition().duration(250).attr("r",4)}).on("mouseout",function(t){c.direction("n").hide(t),d3.select(this).transition().duration(250).attr("r",3)}),$(window).on("resize",a),$(document).on("click",".sidebar-control",a)}function i(t,e,a,n){function r(){var t=d3.interpolate(0,d);return function(e){var a=d/(100/e),n=c.endAngle(o*a);return c(t(n))}}var s=d3.select(t),i=2,l=Math.min(e/2,a/2)-i,o=2*Math.PI,d=$(t).data("progress"),c=d3.svg.arc().startAngle(0).innerRadius(0).outerRadius(l).endAngle(function(t){return t.value/t.size*2*Math.PI}),u=s.append("svg"),p=u.attr("width",e).attr("height",a).append("g").attr("transform","translate("+e/2+","+a/2+")"),f=p.append("g").attr("class","progress-meter");f.append("path").attr("d",c.endAngle(o)).style("fill","#fff").style("stroke",n).style("stroke-width",1.5);var m=f.append("path").style("fill",n);m.transition().ease("cubic-out").duration(2500).attrTween("d",r)}function l(t,e){var a=[{browser:"Google Adwords",icon:"<i class='icon-google position-left'></i>",value:1047,color:"#66BB6A"},{browser:"Social media",icon:"<i class='icon-share4 position-left'></i>",value:2948,color:"#9575CD"},{browser:"Youtube video",icon:"<i class='icon-youtube position-left'></i>",value:3909,color:"#FF7043"}],n=d3.select(t),r=2,s=e/2-r,i=d3.sum(a,function(t){return t.value}),l=d3.tip().attr("class","d3-tip").offset([-10,0]).direction("e").html(function(t){return"<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>"+t.data.icon+t.data.browser+"</div></li><li>Visits: &nbsp;<span class='text-semibold pull-right'>"+t.value+"</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>"+(100/(i/t.value)).toFixed(2)+"%</span></li></ul>"}),o=n.append("svg").call(l),d=o.attr("width",e).attr("height",e).append("g").attr("transform","translate("+e/2+","+e/2+")"),c=d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3*Math.PI).value(function(t){return t.value}),u=d3.svg.arc().outerRadius(s).innerRadius(s/2),p=d.selectAll(".d3-arc").data(c(a)).enter().append("g").attr("class","d3-arc").style("stroke","#fff").style("cursor","pointer"),f=p.append("path").style("fill",function(t){return t.data.color});f.on("mouseover",function(t,e){d3.select(this).transition().duration(500).ease("elastic").attr("transform",function(t){t.midAngle=(t.endAngle-t.startAngle)/2+t.startAngle;var e=Math.sin(t.midAngle)*r,a=-Math.cos(t.midAngle)*r;return"translate("+e+","+a+")"})}).on("mousemove",function(t){l.show(t).style("top",d3.event.pageY-40+"px").style("left",d3.event.pageX+30+"px")}).on("mouseout",function(t,e){d3.select(this).transition().duration(500).ease("bounce").attr("transform","translate(0,0)"),l.hide(t)}),f.transition().delay(function(t,e){return 500*e}).duration(500).attrTween("d",function(t){var e=d3.interpolate(t.startAngle,t.endAngle);return function(a){return t.endAngle=e(a),u(t)}})}function o(t,e){var a=[{status:"Active campaigns",icon:"<span class='status-mark border-blue-300 position-left'></span>",value:439,color:"#29B6F6"},{status:"Closed campaigns",icon:"<span class='status-mark border-danger-300 position-left'></span>",value:290,color:"#EF5350"},{status:"Pending campaigns",icon:"<span class='status-mark border-success-300 position-left'></span>",value:190,color:"#81C784"},{status:"Campaigns on hold",icon:"<span class='status-mark border-grey-300 position-left'></span>",value:148,color:"#999"}],n=d3.select(t),r=2,s=e/2-r,i=d3.sum(a,function(t){return t.value}),l=d3.tip().attr("class","d3-tip").offset([-10,0]).direction("e").html(function(t){return"<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>"+t.data.icon+t.data.status+"</div></li><li>Total: &nbsp;<span class='text-semibold pull-right'>"+t.value+"</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>"+(100/(i/t.value)).toFixed(2)+"%</span></li></ul>"}),o=n.append("svg").call(l),d=o.attr("width",e).attr("height",e).append("g").attr("transform","translate("+e/2+","+e/2+")"),c=d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3*Math.PI).value(function(t){return t.value}),u=d3.svg.arc().outerRadius(s).innerRadius(s/2),p=d.selectAll(".d3-arc").data(c(a)).enter().append("g").attr("class","d3-arc").style("stroke","#fff").style("cursor","pointer"),f=p.append("path").style("fill",function(t){return t.data.color});f.on("mouseover",function(t,e){d3.select(this).transition().duration(500).ease("elastic").attr("transform",function(t){t.midAngle=(t.endAngle-t.startAngle)/2+t.startAngle;var e=Math.sin(t.midAngle)*r,a=-Math.cos(t.midAngle)*r;return"translate("+e+","+a+")"})}).on("mousemove",function(t){l.show(t).style("top",d3.event.pageY-40+"px").style("left",d3.event.pageX+30+"px")}).on("mouseout",function(t,e){d3.select(this).transition().duration(500).ease("bounce").attr("transform","translate(0,0)"),l.hide(t)}),f.transition().delay(function(t,e){return 500*e}).duration(500).attrTween("d",function(t){var e=d3.interpolate(t.startAngle,t.endAngle);return function(a){return t.endAngle=e(a),u(t)}})}function d(t,e){var a=[{status:"Pending tickets",icon:"<i class='status-mark border-blue-300 position-left'></i>",value:295,color:"#29B6F6"},{status:"Resolved tickets",icon:"<i class='status-mark border-success-300 position-left'></i>",value:189,color:"#66BB6A"},{status:"Closed tickets",icon:"<i class='status-mark border-danger-300 position-left'></i>",value:277,color:"#EF5350"}],n=d3.select(t),r=2,s=e/2-r,i=d3.sum(a,function(t){return t.value}),l=d3.tip().attr("class","d3-tip").offset([-10,0]).direction("e").html(function(t){return"<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>"+t.data.icon+t.data.status+"</div></li><li>Total: &nbsp;<span class='text-semibold pull-right'>"+t.value+"</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>"+(100/(i/t.value)).toFixed(2)+"%</span></li></ul>"}),o=n.append("svg").call(l),d=o.attr("width",e).attr("height",e).append("g").attr("transform","translate("+e/2+","+e/2+")"),c=d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3*Math.PI).value(function(t){return t.value}),u=d3.svg.arc().outerRadius(s).innerRadius(s/2),p=d.selectAll(".d3-arc").data(c(a)).enter().append("g").attr("class","d3-arc").style("stroke","#fff").style("cursor","pointer"),f=p.append("path").style("fill",function(t){return t.data.color});f.on("mouseover",function(t,e){d3.select(this).transition().duration(500).ease("elastic").attr("transform",function(t){t.midAngle=(t.endAngle-t.startAngle)/2+t.startAngle;var e=Math.sin(t.midAngle)*r,a=-Math.cos(t.midAngle)*r;return"translate("+e+","+a+")"})}).on("mousemove",function(t){l.show(t).style("top",d3.event.pageY-40+"px").style("left",d3.event.pageX+30+"px")}).on("mouseout",function(t,e){d3.select(this).transition().duration(500).ease("bounce").attr("transform","translate(0,0)"),l.hide(t)}),f.transition().delay(function(t,e){return 500*e}).duration(500).attrTween("d",function(t){var e=d3.interpolate(t.startAngle,t.endAngle);return function(a){return t.endAngle=e(a),u(t)}})}function c(t,e,a,n,r,s,i,l,o){function d(){b.attr("height",0).attr("y",a).transition().attr("height",function(t){return y(t)}).attr("y",function(t){return a-y(t)}).delay(function(t,e){return e*i}).duration(s).ease(r)}function c(){b.attr("height",function(t){return y(t)}).attr("y",function(t){return a-y(t)})}function u(){h=m.node().getBoundingClientRect().width,v.attr("width",h),x.attr("width",h),g.rangeBands([0,h],.3),x.selectAll(".d3-random-bars").attr("width",g.rangeBand()).attr("x",function(t,e){return g(e)})}for(var p=[],f=0;f<e;f++)p.push(Math.round(10*Math.random())+10);var m=d3.select(t),h=m.node().getBoundingClientRect().width,g=d3.scale.ordinal().rangeBands([0,h],.3),y=d3.scale.linear().range([0,a]);g.domain(d3.range(0,p.length)),y.domain([0,d3.max(p)]);var v=m.append("svg"),x=v.attr("width",h).attr("height",a).append("g"),b=x.selectAll("rect").data(p).enter().append("rect").attr("class","d3-random-bars").attr("width",g.rangeBand()).attr("x",function(t,e){return g(e)}).style("fill",l),w=d3.tip().attr("class","d3-tip").offset([-10,0]);"hours"!=o&&"goal"!=o&&"members"!=o||b.call(w).on("mouseover",w.show).on("mouseout",w.hide),"hours"==o&&w.html(function(t,e){return"<div class='text-center'><h6 class='no-margin'>"+t+"</h6><span class='text-size-small'>meetings</span><div class='text-size-small'>"+e+":00</div></div>"}),"goal"==o&&w.html(function(t,e){return"<div class='text-center'><h6 class='no-margin'>"+t+"</h6><span class='text-size-small'>statements</span><div class='text-size-small'>"+e+":00</div></div>"}),"members"==o&&w.html(function(t,e){return"<div class='text-center'><h6 class='no-margin'>"+t+"0</h6><span class='text-size-small'>members</span><div class='text-size-small'>"+e+":00</div></div>"}),n?d():c(),$(window).on("resize",u),$(document).on("click",".sidebar-control",u)}function u(t,e,a,n,r,s,i,l){function o(t){w.attr("d",b.endAngle(f*t)),k.attr("d",b.endAngle(f*t)),A.text(m(t))}var d=d3.select(t),c=0,u=32,p=r,f=2*Math.PI,m=d3.format(".0%"),h=2*e,g=Math.abs((p-c)/.01),y=p<c?-.01:.01,v=d.append("svg"),x=v.attr("width",h).attr("height",h).append("g").attr("transform","translate("+h/2+","+h/2+")"),b=d3.svg.arc().startAngle(0).innerRadius(e).outerRadius(e-a);x.append("path").attr("class","d3-progress-background").attr("d",b.endAngle(f)).style("fill","#eee");var w=x.append("path").attr("class","d3-progress-foreground").attr("filter","url(#blur)").style("fill",n).style("stroke",n),k=x.append("path").attr("class","d3-progress-front").style("fill",n).style("fill-opacity",1),A=d3.select(t).append("h2").attr("class","mt-15 mb-5");d3.select(t).append("i").attr("class",s+" counter-icon").attr("style","top: "+(h-u)/2+"px"),d3.select(t).append("div").text(i),d3.select(t).append("div").attr("class","text-size-small text-muted").text(l);var M=c;!function t(){o(M),g>0&&(g--,M+=y,setTimeout(t,10))}()}var p=Array.prototype.slice.call(document.querySelectorAll(".switch"));p.forEach(function(t){new Switchery(t,{color:"#4CAF50"})}),$(".daterange-ranges").daterangepicker({startDate:moment().subtract("days",29),endDate:moment(),minDate:"01/01/2012",maxDate:"12/31/2016",dateLimit:{days:60},ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract("days",1),moment().subtract("days",1)],"Last 7 Days":[moment().subtract("days",6),moment()],"Last 30 Days":[moment().subtract("days",29),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract("month",1).startOf("month"),moment().subtract("month",1).endOf("month")]},opens:"left",applyClass:"btn-small bg-slate-600 btn-block",cancelClass:"btn-small btn-default btn-block",format:"MM/DD/YYYY"},function(t,e){$(".daterange-ranges span").html(t.format("MMMM D")+" - "+e.format("MMMM D"))}),$(".daterange-ranges span").html(moment().subtract("days",29).format("MMMM D")+" - "+moment().format("MMMM D")),t("#traffic-sources",330),e("#app_sales",255),a("#monthly-sales-stats",100,"#4DB6AC"),n("#messages-stats",40,"#5C6BC0"),r("#new-visitors","line",30,35,"basis",750,2e3,"#26A69A"),r("#new-sessions","line",30,35,"basis",750,2e3,"#FF7043"),r("#total-online","line",30,35,"basis",750,2e3,"#5C6BC0"),r("#server-load","area",30,50,"basis",750,2e3,"rgba(255,255,255,0.5)"),s("#today-revenue",50),i("#today-progress",20,20,"#7986CB"),i("#yesterday-progress",20,20,"#7986CB"),l("#campaigns-donut",42),o("#campaign-status-pie",42),d("#tickets-status",42),c("#hours-available-bars",24,40,!0,"elastic",1200,50,"#EC407A","hours"),c("#goal-bars",24,40,!0,"elastic",1200,50,"#5C6BC0","goal"),c("#members-online",24,50,!0,"elastic",1200,50,"rgba(255,255,255,0.5)","members"),
u("#hours-available-progress",38,2,"#F06292",.68,"icon-watch text-pink-400","Hours available","64% average"),u("#goal-progress",38,2,"#5C6BC0",.82,"icon-trophy3 text-indigo-400","Productivity goal","87% average"),$(".table tr").each(function(t){var e=$(this).find(".letter-icon-title"),a=e.eq(0).text().charAt(0).toUpperCase(),n=$(this).find(".letter-icon");n.eq(0).text(a)})});