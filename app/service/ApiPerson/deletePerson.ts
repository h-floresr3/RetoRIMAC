import {Person} from '../../model/Person';
import {response} from '../../common/response';
import {mapper} from '../../common/clienteDynamo';

import 'source-map-support/register';

export const deletePerson = async (event, _context) => {
    var result ;
    const reqBody = JSON.parse(event.body);
    //findPerson
    var person:Person = new Person();
    person.id = reqBody.id,
    
    await mapper.get({item: person}).then(()=>{
        mapper.delete({item: person});
    }).then(() => {
        result = response(201, person);
    }).catch(
        err => result = response(404,err)
    )
    return result;
}
