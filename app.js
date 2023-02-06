/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getWorkshops } from './fetch-utils.js';
import { renderWorkshop } from './render-utils.js';

/* Get DOM Elements */
const workshopsEl = document.querySelector('.workshops-container');

/* State */
let workshops = [];
let participants = [];
/* Events */
window.addEventListener('load', async () => {
    workshops = await getWorkshops();
    displayWorkshops();
});

/* Display Functions */
function displayWorkshops() {
    workshopsEl.textContent = '';
    workshops.forEach((workshop) => {
        let response = renderWorkshop(workshop);
        workshopsEl.append(response);
    });
}
