//get all the keys
//const keys = document.querySelectorAll('.key')

function playNote(e) {
  const key = getKey(e)  
  const keyElement = document.querySelector(`div[data-key="${key}"]`)
  const doesKeyExist = keyElement
  if (doesKeyExist) {    
    playAudio(key)
    addPlayingClass(keyElement)
    showNote(keyElement)
  }
}

function getKey(e) {
  let key = ''
  if (e.type === 'keydown') {
    key = e.keyCode
  } else {
    key = e.target.dataset.key
  }
  return key
}

function showNote(element) {
  const noteContainer = document.querySelector('.note')
  const note = element.dataset.note
  noteContainer.textContent = note
}

function playAudio(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`)
  audio.currentTime = 0 //start at 0 mark
  audio.play()
}

function addPlayingClass(element) {
  element.classList.add('playing')
}

function removePlayingClass(element) {
  element.classList.remove('playing')
}

window.addEventListener('load', registerEvents)

function registerEvents() {
  //click with mouse
  const piano = document.querySelector('.piano')
  piano.addEventListener('click', playNote)
  piano.addEventListener('transitionend', function (e) {
    removePlayingClass(e.target)
  })
  //keyboard
  window.addEventListener('keydown', playNote)
}
