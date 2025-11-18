import { Router } from "express";
const routeImc = Router();
 

routeImc.post("/desc", (req, res) => {
    const { peso, altura, nome } = req.body;
    const imc = peso / (altura * altura)
    
    if (imc < 18.5) {
        res.json({
            nome: nome,
            imc: imc,
            resultado: "abaixo do peso"

        })

    } else if (imc >= 18.5 && imc <= 24.9)
        res.json({
            nome: nome,
            imc: imc,
            resultado: "peso normal"
        })

    else if (imc >= 25 && imc <= 29.9)
        res.json({
            nome: nome,
            imc: imc,
            resultado: "excesso de peso"
        })

    else if (imc >= 30 && imc <= 34.9)
        res.json({
            nome: nome,
            imc: imc,
            resultado: "obesidade 1"
        })
    else if (imc >= 35 && imc <= 39.9)
        res.json({
            nome: nome,
            imc: imc,
            resultado: "obesidade 2"
        })
 else if (imc >= 40)
        res.json({
            nome: nome,
            imc: imc,
            resultado: "obesidade 3"
        })



})







export { routeImc }