export default class SwapiService{

    url = "https://swapi.dev/api/";

   async getResource(resource){

      let req = await fetch(`${this.url}${resource}`);

      return await req.json();
    }

    getPerson(id){
        return this.getResource(`people/${id}`);
    }

    getAllPeople(){
      return this.getResource(`people`)
    }

    getPlanet(id){
      return this.getResource(`planets/${id}`);
    }

    getAllPlanent(){
      return this.getResource(`planets`)
    }
  }
