import React, { useState } from "react";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setMessage("Formulário enviado com sucesso!");
    } else {
      setMessage("Por favor, insira um email válido.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button id="submit" type="submit">
        Submit
      </button>
      {message && (
        <div
          className={
            message.includes("sucesso") ? "success-message" : "error-message"
          }
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default Form;
