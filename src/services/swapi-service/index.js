export default class SwapiService{

    url = "https://swapi.dev/api/";

   async getResource(resource){

      let req = await fetch(`${this.url}${resource}`);

      return await req.json();
    }

    getPerson(id){
        return this.getResource(`people/${id}`);
    }

    async getAllPeople(){
      const resp = await this.getResource(`people`); 
      console.log(resp.results);
      const  result = resp.results.map(this._transformPerson);
   
      return result;
    }

    async getPlanet(id){
      
      const planet = await this.getResource(`planets/${id}`);

      return this._transformPlanet(planet)
    }

    getAllPlanent(){
      return this.getResource(`planets`)
    }

    _extracIdFromUrl(url){
      const exp = /\/([0-9]+)\/$/;
      return exp.exec(url)[1]
    }

    _transformPerson = (person)=>{
    
      const id = this._extracIdFromUrl(person.url);
      return {
          id,
          name:person.name,
          birthYear:person.birth_year,
          height:person.height
      }
    }

    _transformPlanet(planet){
    
      const id = this._extracIdFromUrl(planet.url);
      return {
          id,
          name:planet.name,
          population:planet.population,
          rotationPeriod:planet.rotation_period,
          diameter:planet.diameter
      }
    }
  }
