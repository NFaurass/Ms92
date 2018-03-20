//Mahwos92 URL Shorener Service By Ladin Saruaf
//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
    'facebook':'https://www.facebook.com/nidal.faurass.3/',
    'gplus':"https://plus.google.com/107056584662952688552",
    'twitter':"https://twitter.com/faurass_nidal",
    'youtube':"https://www.youtube.com/channel/UCrU3wu2bT-e8PiZGiT_UVxg?sub_confirmation=1",
    'instagram':"https://www.instagram.com/nidal_faurass",
    'rss':"http://feeds.feedburner.com/Mahwos92",
    's92':"https://shortener92.blogspot.com",
    'app':"http://www.mediafire.com/file/633ok97294n4uf9/com_mahwos92_app.apk",
}
if(key){
    if(urls[key]){
        window.location.href=urls[key]
    }else{
        document.write("'"+key+"' not found :(");
    }
}
//]]>
