
// const inversionistas = [{
//     "id": "1",
//     "nombre": "Juan",
//     "identificacion": "1314750603"
// }];
const inversionistas = [];

const getinversionistas = (req, res)=>{
    // res.send("En consola se muestran los datos")
    res.json({
        inversionistas
})
    
    for(let i = 0; i<inversionistas.length; i++){
        console.log(inversionistas[i])
    }

    return inversionistas;
}

const postInvers = (req, res)=>{
    const {id, nombre, identificacion} = req.body;
    // res.json({
    //     id,
    //     nombre,
    //     identificacion
    // })
    const newInv = {...req.body};
    
    // let data = JSON.stringify(req.body)
    inversionistas.push({newInv})
    res.send("correcto")
    console.log(newInv)
}

module.exports = {getinversionistas, postInvers}