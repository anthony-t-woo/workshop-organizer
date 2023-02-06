export function renderWorkshop(data) {
    const option = document.createElement('option');
    option.textContent = data.name;
    option.value = data.id;
    return option;
}
