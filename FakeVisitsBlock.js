var block = [&#39;10khits.com&#39;, &#39;alexaboostup.com&#39;, &#39;www.10khits.com&#39;, &#39;hit4hit.org&#39;, &#39;hitleap.com&#39;, &#39;otohits.com&#39;, &#39;z.com&#39;];
for (var b = block.length; b--;) {
if (document.referrer.match(block[b]))
window.location = &quot;https://www.google.com/&quot;;
}
