var searchBox = document.getElementById("searchBox");
var searchResults = document.getElementById("searchResults");

searchBox.addEventListener("input", function() {
  var input = this.value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (input.trim() === '') {
        searchResults.innerHTML = ''; // پاک کردن نتایج در صورت خالی بودن باکس جستجو
      } else {
        searchResults.innerHTML = this.responseText;
      }
    }
  };

  xhr.open("GET", "search.php?q=" + input, true);
  xhr.send();
});

searchBox.addEventListener("blur", function() {
  if (this.value.trim() === '') {
    searchResults.innerHTML = ''; // پاک کردن نتایج هنگامیکه باکس جستجو از تمرکز خارج می‌شود
  }
});