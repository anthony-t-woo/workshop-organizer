/* Imports */
// this will check if we have a user and set signout link if it exists
import { getWorkshops, checkAuth, addParticipant } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();
/* Get DOM Elements */
const form = document.querySelector('.add-participant-form');
const select = document.querySelector('#workshop-dropdown');
/* State */
let workshops = [];
/* Events */
window.addEventListener('load', async () => {
    workshops = await getWorkshops();
    console.log(workshops);
    workshops.forEach((workshop) => {
        let response = renderWorkshop(workshop);
        select.append(response);
    });
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    await addParticipant(formData.get('participant-name'), formData.get('workshop-select'));
    form.reset();
});

/* Display Functions */
