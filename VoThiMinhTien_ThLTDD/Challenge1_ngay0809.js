var data = [
    {
        "Mark": {
            khoiluong: 78, chieucao: 1.69,
        },
        "John": {
            khoiluong: 92, chieucao: 1.95,
        },
    },
    {
        "Mark": {
            khoiluong: 95, chieucao: 1.88,
        },
        "John": {
            khoiluong: 85, chieucao: 1.76,
        },
    }
];
function BMI(datas) {
    return {
        "Mark": {
            ...datas.Mark,
            BMI: datas.Mark.khoiluong / (datas.Mark.chieucao * datas.Mark.chieucao)
        },
        "John": {
            ...datas.John,
            BMI: datas.John.khoiluong / (datas.John.chieucao * datas.Mark.chieucao)
        }
    }

}
var arrBMI = data.map(BMI)
console.log(arrBMI)
function Cb_arrBMI(v) {
    return v.Mark.BMI> v.John.BMI
}
var Arr_markHigherBMI = arrBMI.map(Cb_arrBMI)
console.log (Arr_markHigherBMI)
var x = Arr_markHigherBMI.forEach((v,i)=>{
    console.log(`data${i+1}: ${v}`)
})