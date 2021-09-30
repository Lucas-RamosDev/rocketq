import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')



function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? "Marcar como lida" : "Excluir"

  modalTitle.innerHTML = `${text} esta pergunta` 
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  check? modalButton.classList.remove('red') : modalButton.classList.add('red')



  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id
  const slug = check ? "check" : "delete"

  const form = document.querySelector('.modal form')
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)



  //abrir modal
  modal.open()
}


// --- ### AÇÕES BOTÃO MARCAR COMO LIDO ### ---
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta para ouvir qd o botão for clicado
  button.addEventListener('click', handleClick)
})



// --- ### AÇÕES BOTÃO EXCLUIR ### ---

// Quando o botão delete for clicado ele abre o modal
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  //adicionar a escuta para ouvir qd o botão for clicado
  button.addEventListener('click', (event) => handleClick(event, false))
})





