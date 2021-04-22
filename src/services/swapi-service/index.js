export default class SwapiService {

  _apiURL = "https://swapi.dev/api/";
  _imageURL = `https://starwars-visualguide.com/assets/img`;

  async getResource(resource) {

    let req = await fetch(`${this._apiURL}${resource}`);

    return await req.json();
  }

  async getPerson(id) {
    // const resp =  await
    return this._transformPerson(await this.getResource(`people/${id}`));
  }

  async getAllPeople() {
    const resp = await this.getResource(`people`);
    // console.log(resp.results);
    const result = resp.results.map(this._transformPerson);

    return result;
  }

  async getPlanet(id) {

    const planet = await this.getResource(`planets/${id}`);

    return this._transformPlanet(planet)
  }

  getAllPlanet() {
    return this.getResource(`planets`)
  }

  _extracIdFromUrl(url) {
    const exp = /\/([0-9]+)\/$/;
    return exp.exec(url)[1]
  }

  _transformPerson = (person) => {

    const id = this._extracIdFromUrl(person.url);
    return {
      id,
      name: person.name,
      birthYear: person.birth_year,
      height: person.height,
      imageURL: `${this._imageURL}/characters/${id}.jpg`
    }
  }

  _transformPlanet(planet) {

    const id = this._extracIdFromUrl(planet.url);
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      imageURL: `${this._imageURL}/planets/${id}.jpg`
    }
  }
}
