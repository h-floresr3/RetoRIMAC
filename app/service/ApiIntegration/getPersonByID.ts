import { Person } from '../../model/Person';
import {response} from '../../common/response';
const fetch = require("node-fetch");
import 'source-map-support/register';

export const getPersonByID = async (event, _context) => {
  var result ;
  var listPerson:Person = new Person();
  await fetch(`https://swapi.py4e.com/api/people/${event.pathParameters.id}`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      listPerson.mappingToIntegration(data);
    }).then(() => {
      result = response(201, listPerson);
  }).catch(
    err => result = response(404,err)
  )  
  return result;
}
