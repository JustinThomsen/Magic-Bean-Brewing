function getKegWeight() {

    let weight = prompt("Enter the keg weight in pounds (when empty - default fullsize)", "9.2");
    return weight;
}

function getTotalWeight() {
    let totalWeight = prompt("Enter the current keg weight", "9.3");
    return totalWeight;

}

function calculatePints() {
    let beerWeight = getTotalWeight() - getKegWeight();
    let totalBeers = (15.38 * beerWeight)/12;
    return totalBeers;
}