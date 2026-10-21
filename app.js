const btnShowPass = document.querySelector(".btn-show-pass");
if (btnShowPass) {
  btnShowPass.addEventListener("click", function () {
    const passInput = document.getElementById("loginPass");
    if (passInput.type === "password") {
      passInput.type = "text";
      this.textContent = "Sembunyi";
    } else {
      passInput.type = "password";
      this.textContent = "Lihat";
    }
  });
}

const checkShowBoth = document.getElementById("showBothPass");
if (checkShowBoth) {
  checkShowBoth.addEventListener("change", function () {
    const passInputs = document.querySelectorAll(".pass-sync");
    passInputs.forEach((input) => {
      input.type = this.checked ? "text" : "password";
    });
  });
}

const forms = document.querySelectorAll(".needs-validation");

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      let isFormValid = true;

      const passFields = form.querySelectorAll('input[type="password"]');
      passFields.forEach((field) => {
        if (field.value.trim().length === 0 && field.value.length > 0) {
          field.setCustomValidity("Tidak boleh hanya spasi");
        } else {
          field.setCustomValidity("");
        }
      });

      const regPass = document.getElementById("regPass");
      const regPassConf = document.getElementById("regPassConf");
      if (regPass && regPassConf) {
        if (regPass.value !== regPassConf.value) {
          regPassConf.setCustomValidity("Sandi tidak sama");
        } else {
          regPassConf.setCustomValidity("");
        }
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        isFormValid = false;
      }

      form.classList.add("was-validated");

      if (isFormValid) {
        event.preventDefault();

        if (form.id === "formLogin") {
          document.getElementById("loginSuccess").classList.remove("d-none");
          setTimeout(() => {
            document.getElementById("loginSuccess").classList.add("d-none");
            form.reset();
            form.classList.remove("was-validated");
          }, 3000);
        } else if (form.id === "formRegister") {
          document.getElementById("regSuccess").classList.remove("d-none");
          setTimeout(() => {
            document.getElementById("regSuccess").classList.add("d-none");
            form.reset();
            form.classList.remove("was-validated");
          }, 3000);
        }
      }
    },
    false,
  );
});
