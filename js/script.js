
const server = "http://localhost:3000/products/"

let names = [];

//read 

const readData = async () => {
    await axios.get(server).then(nam => names = nam.data)
    console.log(names);
    displayData()
}

readData()

const displayData = () => {
    divData.innerHTML = names.map(name => `<div>
        Name: ${name.name}  - 
        Price: ${name.price}
        <button onclick="deleteData('${name.id}')"> DELETE </button>
        <button onclick="updateData('${name.id}')"> UPDATE </button>
        </div>
      `).join("")
}

//delete 
const deleteData = async (id) => {
    console.log(id);
    await axios.delete(server + id).then(del => console.log(del))
    displayData()
}

//update

const updateData = async (id) => {
    console.log(id);
    await axios.put(server + id, {
        name: nameInput.value,
        price: priceInput.value,
    }).then(upd => console.log(upd))
    displayData()
}

//create

const addData = () => {
    console.log("helloooo");
    axios.post(server, {
        name: nameInput.value,
        price: priceInput.value
    }).then(ada => console.log(ada))
    displayData()
}













