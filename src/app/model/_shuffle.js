// shuffle.jsx
export default function shuffle(array) {
  let length = array.length

  for(let i = length-1; i>0; i--){
    let randomIndex = Math.floor(Math.random()*(i+1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
  }
  return array
}



  