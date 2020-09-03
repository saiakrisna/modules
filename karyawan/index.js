import Employee, { karyawan } from './karyawan.js';
import Karyawan from './karyawan.js';

let newKaryawan = new Karyawan ("Supri", "CEO", "A");

console.log(newKaryawan);
document.getElementById("nama karyawan").innerHTML = newKaryawan.name;
document.getElementById("posisi karyawan").innerHTML = newKaryawan.posisi;
document.getElementById("Kinerja").innerHTML = newKaryawan.rate;