function domainName(url) {
  let clearLink = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  return clearLink.slice(0, clearLink.indexOf("."));
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
