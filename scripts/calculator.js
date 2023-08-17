function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = base * height;
    const areaField = document.getElementById('triangle-area');
    areaField.innerText = area;

    const cmLine = document.getElementById('cm-line');
    cmLine.classList.remove("hidden");

}