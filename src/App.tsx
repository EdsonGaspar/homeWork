import { useState } from "react";

export function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <h1>Formulário</h1>
        <form>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(evento) => {
              setName(evento.target.value);
              // console.log(name);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evento) => {
              setEmail(evento.target.value);
              // console.log(evento);
            }}
          />
          <input
            type="password"
            name="password"
            id="senha"
            value={password}
            onChange={(evento) => {
              setPassword(evento.target.value);
              // console.log(evento);
            }}
          />
          <button
            onClick={() =>
              alert(`Nome: ${name} Email: ${email} Senha: ${password}`)
            }
          >
            Get Info
          </button>
        </form>
      </div>
    </>
  );
}
