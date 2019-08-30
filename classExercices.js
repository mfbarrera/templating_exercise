
const generatePList = (list) => {
  list.forEach(element => {
    let miParrafo = document.createElement('p');
    const miText = document.createTextNode(element);
    miParrafo.appendChild(miText);
    document.body.appendChild(miParrafo);
  });
}

let array = [
  'frase 1',
  'frase 2',
  'frase 3',
  'frase 4',
  'frase 5',
  'frase 6',
  'frase 7',
  'frase 8',
]

let array2 = [
  'frase 12',
  'frase 22',
  'frase 32',
  'frase 42',
  'frase 52',
  'frase 62',
  'frase 72',
  'frase 82',
]

generatePList(array);
generatePList(array2);


const textSection = (title, content) => {
  let miSection = `
  <section class="mi-section">
    <h1>
      ${title}
    </h1>
    <p>
      ${content}
    </p>
  </section>`;
  document.body.innerHTML += miSection;
}

textSection('otro titulo', 'mas contenido');
textSection('tercer titulo', 'super contenido');