function sleep(valor) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(valor);
    }, 3000);
  });
}


sleep("banana").then((value) =>{
    console.log(value);
})

