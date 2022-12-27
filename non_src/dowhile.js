const hitungPangkat = (angka, pangkat) => {   
    let output = angka;
    for(let i = 0 ; i < pangkat-1 ; i++){
    output *= angka;
    }
    console.log(`hasil : ${output}`) 
    } 

    function hitungRangking(nilai){
        if ( nilai >= 90 && nilai < 100 ){ return `+A`} 
        else if ( nilai >= 80 && nilai < 90) return `A`
        }
        

    hitungPangkat(2,5)

    hitungRangking(86)

    console.log("akhir program")

   
const stokBarang = {
    kopi : "5 kg",
    gandum : "3kg",
    beras : "2kg",
    kehilanganStok : false,
    id : 13 
}

console.log(`stok gandum untuk id ${stokBarang.id} \nadalah ${stokBarang["gandum"]} `)


 const a  = `telur`
    console.log("output a adalah : "+a + "satu biji")  // output : output a adalah telur



let array = ["kopi","roti","teh",3000,"jahe",7.8,"telur"]
array.push("susu")
array.shift()
array.unshift("batagor")
array.splice(3,3)


array.forEach( elementArray1 => {
    console.log(elementArray1)
});