import React from "react";

function Registration() {
  return (
    <div className="registration">
      <h3>Qeydiyyat</h3>
      <hr />
      <div className="fromDiv">
        <form>
          <label>
            <p>Login:</p>
            <input type="text" />
          </label>
          <label>
            <p>Şifrə:</p>
            <input type="password" />
          </label>
          <label>
            <p>Şifrəni təsdiq etmək:</p>
            <input type="password" />
          </label>
          <label>
            <p>Ad:</p>
            <input type="text" />
          </label>
          <label>
            <p>Soyad:</p>
            <input type="text" />
          </label>
          <label>
            <p>E-mail:</p>
            <input type="text" />
          </label>
          <label>
            <p>Telefon:</p>
            <input type="number" />
          </label>
          <label>
            <p>Ölkə:</p>
            <input type="text" />
          </label>
          <label>
            <p>Ünvan:</p>
            <input type="text" />
          </label>
        </form>
        <div className="regBTN">
            <button>Göndər</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
