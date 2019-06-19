export const getWeather = async (zip, unit = 'I') => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=ed9dd8d639494194b3d4b3c1013a284c&postal_code=${zip}&days=5&units=${unit}`);
    return await response.json();
}
