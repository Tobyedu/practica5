// const concepto_inversion = [{
//     "id": "1",
//     "concepto": "Juan",
//     "detalle": "1314750603"
// }];
const concepto_inversion = [];
const getConcepto_Inv = (req, res)=>{
    res.json({
        concepto_inversion
    })
    
    for(let i = 0; i<concepto_inversion.length; i++){
        console.log(concepto_inversion[i])
    }

    return concepto_inversion;
}

const postConcepto = (req, res)=>{
    const {id, concepto, detalle} = req.body;
   
    const newInv = {...req.body};
    

    concepto_inversion.push({newInv})
    res.send("correcto")
    console.log(newInv)
}

module.exports = {getConcepto_Inv, postConcepto}