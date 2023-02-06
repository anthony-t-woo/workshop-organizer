export function renderWorkshopOption(data) {
    const option = document.createElement('option');
    option.textContent = data.name;
    option.value = data.id;
    return option;
}

export function renderWorkshop(data) {
    const div = document.createElement('div');
    const h3 = document.createElement('h2');

    div.classList.add('workshop');

    h3.textContent = data.name;

    div.append(h3);
    return div;
}
