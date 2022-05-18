function searchBlog() {
    var input, filter, ul, li, a, i, txtValue;
    document.getElementById('popular-searches').style.display = 'block';
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

document.addEventListener('mouseup', function (e) {
    let container = document.getElementById('popular-searches');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

function showPopularSearches() {
    document.getElementById('popular-searches').style.display = 'block';
}


$(document).ready(function () {

    $('#search').click(function() {
        showPopularSearches();
    });

    $('#search').keyup(function() {
        searchBlog();
    });
  
    $('.search-btn').click(function () {
        document.location.href = "./html/card-category.html";
    });
});