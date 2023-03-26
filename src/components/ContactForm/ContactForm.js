import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const ContactForm = () => {
    
    const [form, setForm] = useState({})
    
    const submitHandler = (ev) => {
        ev.preventDefault();

        const db = getFirestore();
        const contactFormCollection = collection(db, "contactForm");
        addDoc(contactFormCollection, form).then(({ snapshot }) => console.log(snapshot))
    }

    const changeHandler = (ev) => {
        const {name, value} = ev.target;
        setForm({...form, [name]: value});
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                name="name"
                id="name"
                value={form.name}
                onChange={changeHandler} 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={changeHandler} 
                />
            </div>
            <button>Terminar la compra</button>
        </form>
    )
};

export default ContactForm;