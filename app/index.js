window.addEventListener('load', () => {
  // 条件追加
  const addButton = document.getElementById('add-text')
  let inputCount = 1

  const addInput = () => {
    inputCount++
    let add_input = document.createElement('input')
    add_input.type = 'text'
    add_input.id = "term" + inputCount
    add_input.placeholder = "テキスト"
  
    const parent = document.getElementById('terms')
    parent.appendChild(add_input);
  }
  addButton.addEventListener('click', addInput)

  // 条件リセット
  const resetButton = document.getElementById('add-text-reset')

  const resetInput = () => {
    const parent = document.getElementById('terms')
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }

    let add_input = document.createElement('input')
    add_input.type = 'text'
    add_input.id = "term1"
    add_input.placeholder = "テキスト"

    parent.appendChild(add_input);

    inputCount = 1
  }
  resetButton.addEventListener('click', resetInput)

  // カウント
  const submit = document.getElementById('submit')
  const result = document.getElementById('result')
  
  const textCount = () => {
    let text = document.getElementById('count-text').value
    const terms = document.getElementById('terms')

    // 空白・改行削除
    text = text.replace(/\s+/g, '')

    for(i=1; i<=terms.childElementCount; i++) {
      let term = document.getElementById('term'+i).value
      text = text.replace(new RegExp(term, "g"), '')
    }
    result.textContent = text.length + "文字"
    result.classList.toggle("shake01")
    result.classList.toggle("shake02")
  }
  submit.addEventListener('click', textCount)
})
