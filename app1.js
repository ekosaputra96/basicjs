// multidimentional array
const seatingChart = [
    ['Eko', 'Cintami', 'Kiki'],
    ['Saputra', 'Lestaria', 'Noviana', 'Nadiya'],
    ['Putri', 'Wiwin', 'Irot', 'Ridwan']
];
for(let row of seatingChart){
    for(let student of row){
        console.log(student);
    }
}