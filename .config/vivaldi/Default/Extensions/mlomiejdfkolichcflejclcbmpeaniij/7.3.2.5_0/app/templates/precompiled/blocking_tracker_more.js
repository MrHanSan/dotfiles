module.exports=function(t){var n,e="";Array.prototype.join;return e+='<div class="clear"></div>\n<div class="trk-moreinfo" style="display: none;">\n\t<div class="trk-description"></div>\n\t<div class="trk-srcs-title">'+(null==(n=t.panel_tracker_found_sources_title)?"":n)+'</div>\n\t<div class="trk-srcs">\n\t\t',t.sources.forEach(function(l){e+='\n\t\t\t<a target="_blank" class="trk-src-link"\n\t\t\t\t\ttitle="'+(null==(n=l.src)?"":n)+'"\n\t\t\t\t\thref="https://'+(null==(n=encodeURIComponent(window.App.GCACHE_SUB_DOMAIN))?"":n)+".ghostery.com/"+(null==(n=encodeURIComponent(t.language))?"":n)+"/gcache/?n="+(null==(n=encodeURIComponent(t.name))?"":n)+"&s="+(null==(n=encodeURIComponent(l.src))?"":n)+"&v=2&t="+(null==(n=l.type)?"":n)+'">\n\t\t\t\t'+(null==(n=l.src)?"":n)+"\n\t\t\t</a>\n\t\t"}),e+="\n\t</div>\n</div>\n"};