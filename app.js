console.log("Let's get this party started!");

// displaying the GIF
const $gifArea = $("#gifArea");

function addGIF(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

$('#form').submit(async function (e) {
  e.preventDefault();
  const searchGIF = $('#searchGIF').val();
  $('#searchGIF').val('');
  const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchGIF,
      api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }
  });
  addGIF(response.data);
});


// Removing all GIFs
$('#removeGIF').click(function (e) {
  $gifArea.empty();
});