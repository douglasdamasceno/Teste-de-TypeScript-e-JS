const people = [
  {
    id: 1,
    name: "João da Silva",
    birthday: "2000-10-03",
    address: {
      street: "Rua A",
      addressNumber: "35",
      district: "Beija Flor",
      complement: null,
      postalcode: "13250-000",
      city: "JUNDIAÍ",
      state: "SP",
    },
  },
  {
    id: 2,
    name: "Antônio José",
    birthday: "1983-01-09",
    address: {
      street: "Rua de Trás",
      addressNumber: "798",
      district: "São José",
      complement: "Apto 21",
      postalcode: "13250-010",
      city: "Itatiba",
      state: "SP",
    },
  },
  {
    id: 3,
    name: "Maria Antônia",
    birthday: "1996-12-15",
    address: {
      street: "Rua Floriano Peixoto",
      addressNumber: "340",
      district: "Centro",
      complement: "Bloco A Apto 45",
      postalcode: "19800-010",
      city: "Assis",
      state: "SP",
    },
  },
  {
    id: 4,
    name: "Italo Alves",
    birthday: "2007-06-03",
    address: {
      street: "Rua Alagoas",
      addressNumber: "35",
      district: "Centro",
      complement: null,
      postalcode: "86300-000",
      city: "Cornélio Procópio",
      state: "PR",
    },
  },
  {
    id: 5,
    name: "Miguel",
    birthday: "2010-12-10",
    address: {
      street: "Rua da Pedreira",
      addressNumber: "10",
      district: "Vila Tortuga",
      complement: null,
      postalcode: "28951-806",
      city: "Armação dos Búzios",
      state: "RJ",
    },
  },
];

// Questões 1
// Crie uma função que imprima o nome e a idade de cada pessoa.
function question1():void {
  const result = people.map((person) => ( { name: person.name ,age: getAge(person.birthday)}));
  // Nome e Data de nascimento
  // const result = people.map((person) => ( { name: person.name ,age: person.birthday}));
  console.log(result);
}
// Transformar data de nascimento em idade
function getAge(birthdayDate:string):number {
const birthday = new Date(birthdayDate);
const today = new Date();
let age = today.getFullYear() - birthday.getFullYear();
  if ( new Date(today.getFullYear(), today.getMonth(), today.getDate()) < 
       new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()) )
       age--;
  return age;
}

question1();

//Questão 2
//Crie uma função que imprima quantas pessoas o endereço não tem complemento
function question2() :void{
  const result = people.filter((person) => (  person.address.complement===null));
  console.log(result.length);
}
question2();


// Questões 3
// Crie uma função que imprima o array ordenado pelo nome da pessoa.
function question3():void {
  const result = people.sort(function (person1, person2) {
      if (person1.name > person2.name) {
        return 1;
      }
      if (person1.name < person2.name) {
        return -1;
      }
      return 0;
    });
  
  console.log(result);
}
question3();


// Questões 4
// Crie uma função que remova uma pessoa pelo id e imprima a pessoa removida.
function question4(id:number) :void{
  const index = people.map(person => {
      return person.id;
    }).indexOf(id);
    if(index===-1) return;
    const result = people[index];
    people.splice(index, 1); //removendo o elemento
    console.log(result);
}
question4(5);

// Questões 5
// Crie uma função que imprima o nome da pessoa e em qual cidade ela reside.
function question5() :void{
  const result = people.map((person) => ( { name: person.name ,city: person.address.city}));
  console.log(result);
}
//vai imprimir uma pessoa a menos porque foi removido no metodo acima, a pessoa do id=5
question5();


