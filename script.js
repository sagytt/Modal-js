/*
    TODO: 2. Select the elements with the following ID's
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
 */

const modal = document.querySelector('#modal');
const openModalButton = document.querySelector('#open-modal-btn');
const closeModalButton = document.querySelector('#close-modal-btn');
const overlay = document.querySelector('#overlay');


//TODO: 3. Create a click event listener for the open-modal-btn
//that adds the class "open" to the modal
openModalButton.addEventListener('click', ()=>{
    //adding the css class to the div class
    modal.classList.add('open')
    overlay.classList.add('open')
})

// TODO: 4. Create a click event listener for the close-modal-btn
//that removes the class "open" from the modal
closeModalButton.addEventListener('click', closeModal)

// BONUS: Add a click event listener to the overlay that removes
// the class "open" from the modal and the overlay (clicking outside the modal body)
overlay.addEventListener("click", closeModal)

function closeModal(){
    modal.classList.remove('open')
    overlay.classList.remove('open')
}