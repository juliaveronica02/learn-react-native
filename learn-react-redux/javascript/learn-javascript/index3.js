// NaN is not a number.
// NaN example.
const nanValue = 5 * 'a';
console.log(`NaN value is "${nanValue}"`);
const ifNaN = isNaN(nanValue) ? 'NaN value' : 'not NaN value'
console.log("if NaN", ifNaN);

// undefined means not input or no value(score).
// undefined example.
let undefinedNumber;
console.log(`value from this variable is ${undefinedNumber}`);

// null example.
let valueNull = null
console.log(`value from variable valueNull is ${valueNull}`);

// parseInt example.
let nilaiKecepatan = "200 km";
let nilainyaAja = parseInt(nilaiKecepatan)
console.log(nilainyaAja);

let nilaiNominalDidepan = "km 20";
let nilainyaAja2 = parseInt(nilaiNominalDidepan);
console.log(nilainyaAja2);

// parseFloat example.
let celcius = "34.6 derajat celcius";
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);

// decode uri.
const alamatWebsite = "https://www.google.com?query=belajar html&"
console.log(`encode uri ${encodeURI(alamatWebsite)}`);
const alamatWebsite2 = 'http://127.0.0.1:5500/?nama=bambang%20pamungkas'
console.log(`decode uri ${decodeURI(alamatWebsite2)}`)

// string object.
const nama = "Julia";
console.log(nama)
console.log(`panjang variable nama  adalah ${nama.length}`)
console.log(`karakter ke dua adalah ${nama.charAt(1)}`)
console.log(`fungsi charAt dengan -1 menghasilkan ${nama.charAt(-1)}`);
console.log(`fungsi charAt dengan parameter 10 menghasilkan ${nama.charAt(10)}`);

let namaPanjang = `${nama} Veronica`;
console.log(namaPanjang)
console.log(namaPanjang.toUpperCase());
console.log(namaPanjang.toLowerCase());

// searching for a substring example.
const kalimat = "saya ingin jago koding supaya bisa di terima di perusahaan Google";
const kataPencarian = "jago koding";
//const kataDidapat = kalimat.indexOf(kataPencarian);
console.log(kalimat)
// if (kataDidapat > 0){
//     console.log(`kata ${kataPencarian} ditemukan di index ${kataDidapat}`);
// }else{
//     console.log(`kata ${kataPencarian} tidak ditemukan`);
// }

if (kalimat.includes(kataPencarian)){
    console.log(`kata ${kataPencarian} ditemukan `);
}else{
    console.log(`kata ${kataPencarian} tidak ditemukan`);
}

// special character usually prefix with backslash "\" example.
console.log('newline \n \n\n\n second newline')
console.log(' dia berkata "ya itu benar"  yang lain i can\'t do it ');

// learn number.
const num = 3.14;
console.log(num.toFixed(1));

// learn array.
const namaSiswaImpactByte = ['sony', 'frederick', 'ozy', 'indra', 'julia'];
const arrayKosong = [];
namaSiswaImpactByte.push('evan'); //nambah item di aray terakhir
console.log(namaSiswaImpactByte)
namaSiswaImpactByte.pop()
console.log(namaSiswaImpactByte);

// array for in.
for( let index in namaSiswaImpactByte){
    console.log(namaSiswaImpactByte[index]);
}

// learn array method.
const namaSiswaUIB = ['agnes', 'bill', 'river', 'oriq', 'vincent']
const namaSiswaGlints = namaSiswaImpactByte.concat(namaSiswaUIB) ; //concat .. gabung array
console.log(namaSiswaGlints);
console.log(namaSiswaImpactByte);

// learn array sorting.
console.log(namaSiswaGlints.sort())

const numbers = [3,6, 1, 0, 8, 11, 9];
console.log(numbers.sort());

// learn array join.
console.log(namaSiswaGlints.join(', '));

namaSiswaGlints.forEach(function(value,index, array) {
    console.log(value, index, array);
})

namaSiswaGlints.forEach((item, index, array) => {
    console.log(`nama siswa : ${item}`)
})

const namaSiswaDgnAsal = namaSiswaGlints.map((item, index) =>{
    const kota = ["Batam", "Medan", "Malang"];
    return {
        id: index + 1,
        name: item,
        asal: kota[index % 3]
    }
});

const newSiswa = {
    id: 10,
    name: 'Budi',
    asal: 'Medan'
}

namaSiswaDgnAsal.push(newSiswa)
console.log(namaSiswaDgnAsal);

// array find example.
const ditemukan = namaSiswaDgnAsal.find((item, index, array) => {
    if (item.asal == "Batam")
        return true;
    return false;
});
console.log(ditemukan);

// property value shorthand.
const name = "Babe";
const lastName = "Gokil";
const kelasnya = "businessman"
// the old way syntax.
// const person = {
//     name: name,
//     lastName: lastName,
//     kelas: kelasnya
// }

// new way syntax.
const person = {
    name,
    lastName,
    kelas: kelasnya
}
console.log(person.name);
console.log(person.lastName);

// assign object.
const bodyMeasure = {
    height: '170 cm',
    weight: '80 kg',
    kelas: 'pekerja'
}

const databaru = {
    tanggalLahir: '1 oktober'
}

const personWithMeasure = Object.assign({}, person, bodyMeasure, databaru);
console.log(person);
console.log(personWithMeasure);