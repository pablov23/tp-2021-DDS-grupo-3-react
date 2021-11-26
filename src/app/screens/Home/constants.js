import roco from '~assets/roco.jpg';
import raki from '~assets/raki.jpg';
import ginger from '~assets/ginger.jpg';
import blu from '~assets/blu.jpg';
import mowgli from '~assets/mowgli.jpg';
import numa from '~assets/numa.jpg';
import penny from '~assets/penny.jpg';
import daya from '~assets/daya.jpg';
import zuri from '~assets/zuri.jpg';
import rucha from '~assets/rucha.jpg';
import bruno from '~assets/bruno.jpg';
import gonzalez from '~assets/gonzalez.jpg';

const GENDERS = {
  FEMALE: 'Hembra',
  MALE: 'Macho'
};

const RACES = {
  MIXED: 'Mestizo'
};

const SIZES = {
  SMALL: 'Pequeño',
  MEDIUM: 'Mediano',
  BIG: 'Grande'
};

const AGES = {
  PUPPY: 'Cachorro',
  ADULT: 'Adulto'
};

export const POSTS = [
  {
    id: '1',
    name: 'Raki',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.ADULT,
    image: raki
  },
  {
    id: '2',
    name: 'Ginger',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.MEDIUM,
    age: AGES.ADULT,
    image: ginger
  },
  {
    id: '3',
    name: 'Gonzalez',
    gender: GENDERS.MALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.PUPPY,
    image: gonzalez
  },
  {
    id: '4',
    name: 'Numa',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.SMALL,
    age: AGES.ADULT,
    image: numa
  },
  {
    id: '5',
    name: 'Penny',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.ADULT,
    image: penny
  },
  {
    id: '6',
    name: 'Roco',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.ADULT,
    image: roco
  },
  {
    id: '7',
    name: 'Daya',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.ADULT,
    image: daya
  },
  {
    id: '8',
    name: 'Zuri',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.ADULT,
    image: zuri
  },
  {
    id: '9',
    name: 'Blu',
    gender: GENDERS.MALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.ADULT,
    image: blu
  },
  {
    id: '10',
    name: 'Bruno',
    gender: GENDERS.MALE,
    race: RACES.MIXED,
    size: SIZES.BIG,
    age: AGES.ADULT,
    image: bruno
  },
  {
    id: '11',
    name: 'Mowgli',
    gender: GENDERS.MALE,
    race: RACES.MIXED,
    size: SIZES.SMALL,
    age: AGES.PUPPY,
    image: mowgli
  },
  {
    id: '12',
    name: 'Rucha',
    gender: GENDERS.FEMALE,
    race: RACES.MIXED,
    size: SIZES.MEDIUM,
    age: AGES.PUPPY,
    image: rucha
  }
];
