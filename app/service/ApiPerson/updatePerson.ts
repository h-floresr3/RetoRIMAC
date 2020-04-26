import {Person} from '../../model/Person';
import {response} from '../../common/response';
import {mapper} from '../../common/clienteDynamo';
import 'source-map-support/register';

export const updatePerson = async (event, _context) => {
    var result ;
    const reqBody = JSON.parse(event.body);
    var person:Person = new Person();
    person.id = reqBody.id,

    await mapper.get({item: person})
    .then((data) => {
        person.mappingToRequest(reqBody);
        person.fechaModificacion= new Date().toISOString();
        person.fechaCreacion = JSON.parse(JSON.stringify(data)).fechaCreacion
        mapper.put({item: person});
    }).then(() => {
        result = response(201, person);
    }).catch(
        err => result = response(404,err)
    )
    return result;
}
