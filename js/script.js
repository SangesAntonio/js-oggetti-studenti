console.log('js ok')

/*1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

//elementi del DOm
const button=document.getElementById('button');
const inputName=document.getElementById('input-name');
const inputSurname=document.getElementById('input-secondName');
const inputEta=document.getElementById('input-eta');
const text=document.getElementById('output');
const textSecond=document.getElementById('output-due');


//creo un oggetto per descrivere lo studente
const studente ={
    nome: 'antonio',
    cognome: 'sanges',
    età: '25',
}

console.log(studente)
//stampo in pagina le propietà
button.addEventListener('click', function () {
    let print=' ';
    for(let key in studente){
        print += studente[key] + ' ';
        text.innerText=` ${print}`
        console.log(studente[key])
    }
})

//!seconda parte

//creo array di oggetti di studenti
const listaStudenti=[
        {
            nome: 'rosa', 
            cognome: 'martinelli', 
            età:'23',
        },
        {
            nome: 'Giustino',
             cognome: 'Leone', 
             età:'78'
        },
        {
            nome: 'Butcher', 
            cognome: 'Ren', 
            età:'48'
        },
        {
            nome: 'HomeLander', 
            cognome: 'usa', 
            età:'40'
        },
];



//ciclare su gli studenti 
button.addEventListener('click', function (){

    
    //aggiungere un nuovo oggetto
    const newName = inputName.value;
    const newSecondName = inputSurname.value;
    const newEta = inputEta.value;

    if(!newName && !newSecondName && !isNaN(newEta)){
        let printName='';
        for(let i = 0; i<listaStudenti.length; i++){
        let students=listaStudenti[i];
        
        printName += `<ul><li> ${students.nome} ${students.cognome}</li></ul>`;
        console.log(printName);
        
        //stampo in pagina
        textSecond.innerHTML= printName;
    
        }
    }else{
        //creo lista 
        listaStudenti.push({
            nome: newName,
            cognome:newSecondName,
            età:newEta,
        })
        
        let printName='';
        for(let i = 0; i<listaStudenti.length; i++){
        let students=listaStudenti[i];
        
        printName += `<ul><li> ${students.nome} ${students.cognome}</li></ul>`;
        console.log(printName);
        
        //stampo in pagina
        textSecond.innerHTML= printName;
        }
    }
    console.table(listaStudenti)
    
    
    
    
})



