const socket = io();
let nameUser = prompt('cual es tu nombre')
document.querySelector("#nameUser").innerHTML = nameUser;

socket.on("message_back", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_client", "Hola servidor!");
});

const render = (data) => {

  let html = data
    .map((x) => {
      return `
         <div>
            <div>
              <p class='pname mb-0'><strong>${x.nombre}. Dice: </strong></p>
            </div>
            <div>
               <p class='pmsn mb-0'><strong>${x.msn} </strong></p>
            </div>
          </div>
        `;
    })
    .join(" ");

  console.log('datanombre .>', nameUser);

  document.querySelector("#caja").innerHTML = html;

};

const addMsn = () => {
  console.log("Hola")

  let obj = {
    nombre: nameUser,
    msn: document.querySelector("#msn").value
  }

  socket.emit("data_client", obj)

  document.querySelector("#msn").value = ""

  return false
}
