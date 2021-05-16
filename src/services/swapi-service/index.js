export default class SwapiService {

  _apiURL = "https://swapi.dev/api/";
  _imageURL = `https://starwars-visualguide.com/assets/img`;

  async getResource(resource) {

    let req = await fetch(`${this._apiURL}${resource}`);

    return await req.json();
  }

  getPerson = async (id) => {
    // const resp =  await
    return this._transformPerson(await this.getResource(`people/${id}`));
  }

  getAllPeople = async () => {
    const resp = await this.getResource(`people`);
    console.log(resp.results);
    const result = resp.results.map(this._transformPerson);

    return result;
  }

  getPlanet = async (id) => {

    const planet = await this.getResource(`planets/${id}`);

    return this._transformPlanet(planet)
  }


  getAllPlanets = async () => {
    const resp = await this.getResource('planets');

    return resp.results.map(this._transformPlanet);
  }

  getStarShip = async (id) => {
    const starShip = await this.getResource(`starships/${id}`);
    return this._transformStarShip(starShip)
  }


  getAllStarShip = async () => {
    const resp = await this.getResource('starships');
    return resp.results.map(this._transformStarShip)
  }

  _extractIdFromUrl = (url) => {
    const exp = /\/([0-9]+)\/$/;
    return exp.exec(url)[1]
  }

  _transformPerson = (person) => {

    const id = this._extractIdFromUrl(person.url);
    return {
      id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      height: person.height,
      imageURL: `${this._imageURL}/characters/${id}.jpg`
    }
  }

  _transformPlanet = (planet) => {
    //  console.log(planet.url)
    const id = this._extractIdFromUrl(planet.url);
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      imageURL: `${this._imageURL}/planets/${id}.jpg`
    }
  }

  _transformStarShip = (startShip) => {
    const id = this._extractIdFromUrl(startShip.url);
    return {
      id,
      name: startShip.name,
      imageURL: `${this._imageURL}/starships/${id}.jpg`
    }
  }
}
