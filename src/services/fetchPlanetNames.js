const jsonFilePath = '/data/planetsDataEn.json'

export default async function fetchPlanetNames() {
    try {
        const response = await fetch(jsonFilePath)
        const data = await response.json()
        return data.planets.map((planet) => Object.keys(planet)[0])
    } catch (error) {
        console.error('error:', error)
        return []
    }
}