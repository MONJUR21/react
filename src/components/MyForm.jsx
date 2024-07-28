import React, { useState, useEffect, useRef } from "react";
import "./MyForm.css";

function MyForm() {
  const name = useRef(null);
  const email = useRef(null);
  useEffect(() => {
    name.current.style.backgroundColor = "red";
    email.current.style.backgroundColor = "yellow";
  });
  const [form, setForm] = useState({ username: "", email: "" });

  const handleChange = (e) => {
    // e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div ref={name}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div ref={email}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="button">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(form);
          }}
        >
          Submit me
        </button>
      </div>
    </form>
  );
}

export default MyForm;
