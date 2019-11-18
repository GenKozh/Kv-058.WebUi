    const birds = [
        {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
        {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
        {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
        {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
        {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
    ];
    const arrBirdID = birds.map(bird => bird.ID).map(lc => lc.toLowerCase());
    console.log(arrBirdID);

    const data = 
[
  {
    '_id': 0,
    'role': 'manager',
    'firstName': 'Bill',
    'lastName': 'Clinton',
    'salary': 1000,
    'experience': 20,
    'manager': 0,
    'team': [1,2,3],
    'dev_team': [2,3],
    'effCoeff': 0
    
  },
  {
    '_id': 1,
    'role': 'designer',
    'firstName': 'Vladimir',
    'lastName': 'Lenin',
    'salary': 800,
    'experience': 1,
    'manager': 1,
    'team': [],
    'dev_team': [],
    'effCoeff': .5
    
  },
  {
    '_id': 2,
    'role': 'developer',
    'firstName': 'Entony',
    'lastName': 'Hopkins',
    'salary': 900,
    'experience': 1.5,
    'manager': 1,
    'team': [],
    'dev_team': [],
    'effCoeff': 0
    
  },
  {
    '_id': 3,
    'role': 'developer',
    'firstName': 'John',
    'lastName': 'Travolta',
    'salary': 900,
    'experience': 10,
    'manager': 1,
    'team': [],
    'dev_team': [],
    'effCoeff': 0
    
  },
  {
    '_id': 4,
    'role': 'manager',
    'firstName': 'George',
    'lastName': 'Bush',
    'salary': 1000,
    'experience': 20,
    'manager': 0,
    'team': [5],
    'dev_team': [],
    'effCoeff': 0
    
  },
  {
    '_id': 5,
    'role': 'designer',
    'firstName': 'Barbara',
    'lastName': 'Streisand',
    'salary': 800,
    'experience': 1,
    'manager': 4,
    'team': [],
    'dev_team': [],
    'effCoeff': .5
    
  },
  {
    '_id': 5,
    'role': 'manager',
    'firstName': 'Yury',
    'lastName': 'Gagarin',
    'salary': 1000,
    'experience': 1,
    'manager': 0,
    'team': [],
    'dev_team': [],
    'effCoeff': .5
  },
  
];

let fields = [{type:'a',label:'email'},{type:'b',label:'name'},{type:'a',label:'tel'}]

let respone = []

for (var member of fields) {
    member => {
        console.log(member);
        // respone.push({[item.label]: ''})};
    };
};
   

for (const element of fields) {
    console.log(element);
    respone.push({[element.label]: ''});
  }

console.log(respone);