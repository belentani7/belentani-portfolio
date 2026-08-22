/* DESIGN: Órbita de Judas — contacto directo, claro y honesto sobre sus límites estáticos. */
import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type ContactState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactState = { name: "", email: "", message: "" };

export default function ContactComposer() {
  const [form, setForm] = useState(initialState);
  const [notice, setNotice] = useState("");

  const submitDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setNotice("Completa nombre, correo y mensaje antes de abrir el borrador.");
      return;
    }

    const subject = encodeURIComponent(`Mensaje desde BELENTANI — ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nCorreo: ${form.email}\n\n${form.message}`);
    setNotice("Se abrirá un borrador en tu cliente de correo. Añade el destinatario oficial antes de enviarlo.");
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submitDraft} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Nombre</label>
        <input
          id="contact-name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          autoComplete="name"
          placeholder="Tu nombre"
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Correo</label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          autoComplete="email"
          placeholder="tu@correo.com"
        />
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Cuéntanos desde qué punto de la órbita escribes."
          rows={5}
        />
      </div>
      <div className="contact-form__action">
        <button className="signal-button" type="submit">
          Abrir borrador <ArrowUpRight size={17} />
        </button>
        <p>Formulario local: no almacena información ni envía mensajes por sí mismo.</p>
      </div>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
