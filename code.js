
$('#new-fact').click(function newJoke () {
  $( ".cat-images p" ).remove();
  $("p").add().appendTo(document.cat-images);
})

console.log('loaded')
$.getJSON('https://api.chucknorris.io/jokes/random', (data)=> {
  console.log(data)
})
