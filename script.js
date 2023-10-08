// Contoh penggunaan if-else
console.log("--> if-else");

let nilai = 80;

if (nilai >= 80) {
  console.log("Selamat! Anda lulus.");
} else {
  console.log("Maaf, Anda belum lulus.");
}

console.log("\n");

// Contoh penggunaan nested if
console.log("--> nested if");

let angka = 9;

if (angka > 0) {
  if (angka % 2 === 0) {
    console.log("Angka ini adalah angka genap.");
  } else {
    console.log("Angka ini adalah angka ganjil.");
  }
} else {
  console.log("Angka ini adalah angka negatif.");
}

console.log("\n");

// Contoh penggunaan switch case
console.log("--> switch case");

let hari = "Kamis";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu.");
    break;
  case "Kamis":
    console.log("Hari ini adalah hari Kamis.");
    break;
  case "Jum'at":
    console.log("Hari ini adalah hari Jum;at.");
    break;
  case "Sabtu":
    console.log("Hari ini adalah hari Sabtu.");
    break;
  default:
    console.log("Hari ini adalah hari lain.");
}

console.log("\n");

// Contoh penggunaan for statement
console.log("--> for statement");

for (let i = 1; i <= 7; i++) {
  console.log("Iterasi ke-" + i);
}

console.log("\n");

// Contoh penggunaan while statement
console.log("--> while statement");

let counter = 1;

while (counter <= 3) {
  console.log("Iterasi ke-" + counter);
  counter++;
}

console.log("\n");

// Contoh penggunaan do-while statement
console.log("--> do-while statement");

let counter2 = 1;

do {
  console.log("Iterasi ke-" + counter2);
  counter2++;
} while (counter2 <= 5);

console.log("\n");

// Contoh penggunaan function
console.log("--> function");

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(3, 4);
console.log("Hasil penjumlahan: " + hasil);