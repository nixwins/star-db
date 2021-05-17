export default class MockService {

    _planetList = [
        {
            name: "TEST planet1",
            population: 222222,
            Rotation: 2222,
            Diameter: 12333
        },
        {
            name: "TEST planet1",
            population: 222222,
            Rotation: 2222,
            Diameter: 12333
        },
    ];

    _planet = {
        name: "TEST planet1",
        population: 222222,
        Rotation: 2222,
        Diameter: 12333
    }

    getPlanet = async () => {
        return this._planet;
    }
    getAllPlanets = async () => {
        return this._planetList;
    }

}