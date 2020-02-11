function images (id, url){
const target = document.querySelector('#' + id)
target.src = url
}
images ('image-1', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FD3m66mDjWZ5EA%2Fgiphy.gif&f=1&nofb=1')

images ('image-2', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F37tuh92v7fylxXhd4A%2Fgiphy.gif&f=1&nofb=1')

images ('image-3', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F68.media.tumblr.com%2Fae3177ae4b4f74fad02a9b2dbd825543%2Ftumblr_osjvtgUm6Q1w43wzfo1_400.gif&f=1&nofb=1')

function slash (){
  return document.querySelector('#lines'
  ).style.textDecoration = 'line-through'
}
slash();  








// const newLi = document.createElement('li');
// newLi.innerText= 'Hello'
// const list = document.querySelector('ul');
// list.appendChild(newLi);


// function boderize(id, color){
//   const target = document.querySelector('#' + id)
//   target.style.border = '5px solid' + color;
// }
// borderize ('item-2', 'green')

// ol.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FD3m66mDjWZ5EA%2Fgiphy.gif&f=1&nofb=1')"