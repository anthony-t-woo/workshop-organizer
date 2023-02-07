/* Imports */
// this will check if we have a user and set signout link if it exists
import { getWorkshops, checkAuth, addParticipant } from '../fetch-utils.js';
import { renderWorkshopOption, renderPreview } from '../render-utils.js';

checkAuth();
/* Get DOM Elements */
const form = document.querySelector('.add-participant-form');
const select = document.querySelector('#workshop-dropdown');
const recentAdds = document.querySelector('.added-participants');
/* State */
let workshops = [];
let previewData = [];
/* Events */
window.addEventListener('load', async () => {
    workshops = await getWorkshops();
    console.log(workshops);
    workshops.forEach((workshop) => {
        let response = renderWorkshopOption(workshop);
        select.append(response);
    });
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    await addParticipant(formData.get('participant-name'), formData.get('workshop-select'));
    form.reset();
    const filteredWorkshop = workshops.filter(
        (a) => a.id === Number(formData.get('workshop-select'))
    );
    console.log(filteredWorkshop);
    previewData.push({
        name: formData.get('participant-name'),
        workshop: filteredWorkshop[0].name,
    });
    displayPreview();
});

/* Display Functions */
function displayPreview() {
    recentAdds.textContent = '';
    previewData.forEach((part) => {
        let response = renderPreview(part);
        recentAdds.append(response);
    });
}
