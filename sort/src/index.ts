import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numberscollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberscollection);
// sorter.sort();
// console.log(numberscollection.data);

const characterscollection = new CharactersCollection('Keeley');
const sorter = new Sorter(characterscollection);
sorter.sort();
console.log(characterscollection.data);
