import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberscollection = new NumbersCollection([10, 3, -5, 0]);
const sorter1 = new Sorter(numberscollection);
sorter1.sort();
console.log(numberscollection.data);

const characterscollection = new CharactersCollection('Keeley');
const sorter2 = new Sorter(characterscollection);
sorter2.sort();
console.log(characterscollection.data);
