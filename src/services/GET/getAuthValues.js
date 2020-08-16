export default function getAuthValues() {
  const parsed = window.location.hash
  .substring(9)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
  //window.location.hash = ""
  return parsed;
}