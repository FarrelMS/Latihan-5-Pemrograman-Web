var data = {
  "Jawa Timur": {
    "Kota Surabaya": {
      Gubeng: "60281",
      Tegalsari: "60261",
      Genteng: "60275",
      Sukolilo: "60111",
    },
    "Kota Malang": { Klojen: "65111", Lowokwaru: "65141", Blimbing: "65126" },
  },
  "DKI Jakarta": {
    "Jakarta Pusat": { Gambir: "10110", Menteng: "10310" },
  },
};

var prov = document.getElementById("prov");
var kota = document.getElementById("kota");
var kec = document.getElementById("kec");
var hasil = document.getElementById("hasil");

function isi(sel, items, teks) {
  sel.innerHTML = '<option value="">' + teks + "</option>";
  items.forEach(function (i) {
    var o = document.createElement("option");
    o.value = o.textContent = i;
    sel.appendChild(o);
  });
  sel.disabled = items.length === 0;
}

isi(prov, Object.keys(data), "Pilih Provinsi");

prov.onchange = function () {
  hasil.style.display = "none";
  isi(kec, [], "Pilih Kecamatan");
  isi(
    kota,
    prov.value ? Object.keys(data[prov.value]) : [],
    "Pilih Kabupaten / Kota",
  );
};

kota.onchange = function () {
  hasil.style.display = "none";
  isi(
    kec,
    kota.value ? Object.keys(data[prov.value][kota.value]) : [],
    "Pilih Kecamatan",
  );
};

document.getElementById("cari").onclick = function () {
  if (!prov.value || !kota.value || !kec.value) {
    hasil.style.display = "block";
    hasil.innerHTML =
      "<span style='color:red;'>Lengkapi Provinsi, Kabupaten/Kota, dan Kecamatan.</span>";
    return;
  }
  var kp = data[prov.value][kota.value][kec.value];
  hasil.style.display = "block";
  hasil.innerHTML = "<b>Kode Pos: " + kp + "</b> (Kecamatan " + kec.value + ")";
};
