import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const company = new Company();
const user = new User();

const mapElement = document.getElementById('map');
if (!mapElement) {
  throw new Error('No map element found');
}
const map = new CustomMap(mapElement);
map.addMaker(user);
map.addMaker(company);
