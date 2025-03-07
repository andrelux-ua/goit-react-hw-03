function ContactForm({ onAdd }) {
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    onAdd(newContact);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" required />
      <input name="number" type="tel" required />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
