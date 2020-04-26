import { Person } from '../../model/Person';
import {response} from '../../common/response';
const fetch = require("node-fetch");
import 'source-map-support/register';

export const getAllPerson = async (event, _context) => {
  var result ;
  var listPerson:Array<Person> = new Array<Person>();
  await fetch('https://swapi.py4e.com/api/people')
    .then((response) => {
      return response.json();
    }).then((data) => {
      for(let a of data.results){
        var p:Person = new Person();
        p.mappingToIntegration(a);
        listPerson.push(p);
      }
    }).then(() => {
      result = response(201, listPerson);
  }).catch(
    err => result = response(404,err)
  )  
  return result;
}
