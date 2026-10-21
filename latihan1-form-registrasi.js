var data = [
  { n: "Ahmad Fauzi", nim: "5115100001" },
  { n: "Andi Pratama", nim: "5115100002" },
  { n: "Anisah Putri", nim: "5115100003" },
];
var nama = document.getElementById("nama");
var saran = document.getElementById("saran");
var nim = document.getElementById("nim");

nama.addEventListener("input", function () {
  var k = nama.value.trim().toLowerCase();
  saran.innerHTML = "";
  if (k === "") {
    saran.style.display = "none";
    return;
  }

  var cocok = data.filter(function (d) {
    return d.n.toLowerCase().indexOf(k) === 0;
  });

  if (cocok.length > 0) {
    cocok.forEach(function (d) {
      var el = document.createElement("div");
      el.textContent = d.n + " (" + d.nim + ")";
      el.onclick = function () {
        nama.value = d.n;
        nim.value = d.nim;
        saran.style.display = "none";
      };
      saran.appendChild(el);
    });
    saran.style.display = "block";
  } else {
    saran.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (e.target !== nama && e.target !== saran) {
    saran.style.display = "none";
  }
});

document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  var err = document.getElementById("err");
  var ok = document.getElementById("ok");
  ok.textContent = "";
  err.textContent = "";

  if (
    !nama.value.trim() ||
    !nim.value.trim() ||
    !document.getElementById("mk").value ||
    !document.getElementById("dosen").value
  ) {
    err.textContent = "Semua kolom wajib diisi.";
    return;
  }
  ok.textContent = "Registrasi berhasil: " + nama.value;
});

document.getElementById("reset").addEventListener("click", function () {
  saran.style.display = "none";
  document.getElementById("err").textContent = "";
  document.getElementById("ok").textContent = "";
});
