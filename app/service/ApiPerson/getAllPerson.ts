import {Person} from '../../model/Person';
import {response} from '../../common/response';
import {mapper} from '../../common/clienteDynamo';

import 'source-map-support/register';

export const getAllPerson = async (event, _context) => {
    var result ;
    var lisPerson:Array<Person> = new Array<Person>() ;
    for await (const person of mapper.scan({valueConstructor: Person})) {
        lisPerson.push(person);
    }
    result = response(201, lisPerson);
    return result;
}
