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
      // console.log(fileArr)
      let result = ''
      fileArr.forEach(obj => {
        result += objHandler(obj)
      })
      pageBody.innerHTML = result
    }
  }
}


function objHandler(obj) {
  if (!obj) return
  let element = `<${obj.tag}>`
  if (Array.isArray(obj.content)) {
    element += obj.content.map(e => objHandler(e))
  }
  else if (typeof obj.content === 'object') {
    element += objHandler(obj.content)
  }
  else if (typeof obj.content === 'string') {
    element += `${obj.content}`
  }
  element += `</${obj.tag}>`
  return element
}
