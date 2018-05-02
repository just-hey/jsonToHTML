let fileInput = document.querySelector('#fileInput')
let pageBody = document.querySelector('#pageBody')

fileInput.addEventListener('change', handleIncomingFiles, false)

function handleIncomingFiles(e) {
  let targetArray = e.target.files
  for (var i = 0; i < targetArray.length; i++) {
    let reader = new FileReader()
    reader.readAsText(targetArray[i], 'UTF-8')
    reader.onload = (evt) => {
      let fileArr = JSON.parse(evt.target.result)
      console.log(fileArr)
    }
  }
}
