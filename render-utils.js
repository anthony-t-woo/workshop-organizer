import { deleteParticipant } from './fetch-utils.js';

export function renderWorkshopOption(data) {
    const option = document.createElement('option');
    option.textContent = data.name;
    option.value = data.id;
    return option;
}

export function renderWorkshop(data) {
    const div = document.createElement('div');
    const h3 = document.createElement('h2');
    const participantsDiv = document.createElement('div');

    div.classList.add('workshop');
    participantsDiv.classList.add('participants');

    h3.textContent = data.name;
    let participantsData = data.participants;

    participantsData.forEach((participant) => {
        const participantEl = document.createElement('p');
        participantEl.textContent = participant.name;
        participantEl.classList.add('participant');
        participantsDiv.append(participantEl);
        participantEl.addEventListener('click', async () => {
            await deleteParticipant(participant.id);
            location.reload();
        });
    });

    div.append(h3, participantsDiv);
    return div;
}

export function renderPreview(data) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = `${data.name} is signed up for ${data.workshop}`;
    div.append(p);
    return div;
}
