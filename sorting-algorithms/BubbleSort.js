function BubbleSort(lista) {
  let n = lista.length;
  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - i - 1; j++)
      if (lista[j] > lista[j + 1]) {
        //swap[i]
        let temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
  console.log(lista);
}

BubbleSort([10,2,3,4,1])