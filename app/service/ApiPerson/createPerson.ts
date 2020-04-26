import {Person} from '../../model/Person';
const uuid = require('uuid/v4');
import {response} from '../../common/response';
import {mapper} from '../../common/clienteDynamo';

import 'source-map-support/register';

export const createPerson = async (event, _context) => {
    var result ;
    var reqBody= JSON.parse(event.body);
    var person:Person = new Person();
    person.mappingToRequest(reqBody);
    person.id = uuid();
    person.fechaCreacion=new Date().toISOString();

    await mapper.put({item: person}).then(() => {
        result = response(201, person);
    }).catch(
        err => result = response(err.statusCode, err)
    );

    return result;
}
