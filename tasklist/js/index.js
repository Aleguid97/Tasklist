const handleSubmit = function (e) {
  e.preventDefault()
  addTask()
  attachDelete()
}

const addTask = function () {
  let tasks = document.querySelector('#tasks')
  let inputField = document.querySelector('#newTask input')
  let newTask = `
      <div class="task">
          <span id="taskname">
              ${inputField.value}
          </span>
          <button class="delete">
              🦑
          </button>
      </div>
  `
  tasks.innerHTML += newTask
  inputField.value = ''
}


const attachDelete = function () {
  let allDeleteButtons = document.querySelectorAll('.delete')
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener('click', function () {
      this.parentNode.remove()
    })
  }
}

window.onload = function () {
  let form = document.querySelector('form')
  form.addEventListener('submit', handleSubmit)
}
