var listaAnimes = [
  "https://johto.legiaodosherois.com.br/wp-content/uploads/2021/08/legiao_4YmvHICdo9Zu.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71bELfIWTDL.jpg",
  "https://i.pinimg.com/originals/a8/b9/cd/a8b9cd2c55f5623d5f1aac1b4be6b241.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/512VBluGpqL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51A2eUuVBcL._SX327_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51W6wPKu6JL._SX337_BO1,204,203,200_.jpg"
];
imagemAnimes = document.getElementById("mostrarAnimes");

function Adicionar() {
  var link = document.getElementById("link").value;
  listaAnimes.push(link);
  imagemAnimes.innerHTML = mostrarAnimes.innerHTML + "<img src=" + link + ">";
}

for (var indice = 0; indice < listaAnimes.length; indice++) {
  document.write("<img src =" + listaAnimes[indice] + ">");
}
