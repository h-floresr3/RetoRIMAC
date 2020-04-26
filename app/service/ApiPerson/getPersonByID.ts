import {Person} from '../../model/Person';
import {response} from '../../common/response';
import {mapper} from '../../common/clienteDynamo';

import 'source-map-support/register';

export const getPersonByID = async (event, _context) => {
    var result ;
    const person:Person = new Person();
    person.id = event.pathParameters.id,
    await mapper.get({item: person}).then((data)=>{
        result = response(201,data);
    }).catch(
        err => result = response(404,err)
    )
    return result;
}
