window.onload = function() {
  const location = window.location.href;
  const url = new URL(location);
  const search_params = new URLSearchParams(url.search);

  if(!search_params.has('id') || search_params.get('id') == "") {
    window.location.href = './';
  }

  fetch(`https://api.unsplash.com/photos/${search_params.get('id')}?client_id=${API_KEY}`).then(convert_to_json)
  .then(function (data) {
    loadDetail(data);
  });
}

function loadDetail(data) {
  console.log(data);
  document.getElementById('detail_image').src = data.urls.regular;
  document.getElementById('detail_image').style.borderColor = data.color;
  document.getElementById('description_text').innerText = data.description;
  document.getElementById('username').innerText = data.user.username;
}