
function getQueryStringFromURL(url) {
  const pts = url.split("?");
  const ind = pts.length - 1;
  return pts[ind];
}

