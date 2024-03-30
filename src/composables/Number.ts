export const readableNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}