function calculateCost() {
    const petType = document.getElementById('petType').value;
    const careDuration = document.getElementById('careDuration').value;
    let costPerMonth;

    switch(petType) {
        case 'dog':
            costPerMonth = 100;
            break;
        case 'cat':
            costPerMonth = 70;
            break;
        case 'bird':
            costPerMonth = 30;
            break;
        default:
            costPerMonth = 0;
    }

    const totalCost = costPerMonth * careDuration;
    document.getElementById('costResult').textContent = `Total Care Cost: $${totalCost}`;
}
