const jsonFilePath = '/data/planetsDataEn.json'

export default async function fetchPlanetKeys(planetName) {
    try {

        if (!planetName) {
            console.error('Aucun nom de planète fourni.')
            return null
        }
        const response = await fetch(jsonFilePath)
        const planetsData = await response.json()
        const planetInfo = planetsData['planets'].find(planet => {
            const planetKey = Object.keys(planet)[0]
            return planetKey && planetKey.toLowerCase() === planetName.toLowerCase()
        });
        const planetData = planetInfo[Object.keys(planetInfo)]

        return [Object.keys(planetData), planetData]

    } catch (error) {
        console.error('Erreur:', error)
        throw error
    }
}