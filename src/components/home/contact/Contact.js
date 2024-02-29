import { useState } from "react";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { motion } from "framer-motion";

const Contact = ({ elRef }) => {
    const [formState, setFormState] = useState({});

    function setField(event) {
        setFormState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    const mailTo = `mailto:ogivuja@gmail.com?subject=${formState.subject} - ${formState.fname} ${formState.lname}&body=${formState.message}`;
    return (
        <div className="flex flex-col items-center pt-5" ref={elRef}>
            <Title text="CONTACT" />
            <p className="text-center text-gray text-lg py-5">
                Got a project in mind and want to collaborate? Feel free to text
                me.
            </p>
            <p className="text-center text-gray text-lg py-5">
                Fill in the form below or send me an email to:{" "}
                <span className="font-bold">ogivuja@gmail.com</span>
            </p>
            <motion.div
                className="flex flex-col w-1/3 lap:w-2/3 tab:w-3/4"
                transition={{
                    type: "tween",
                    duration: 1,
                    delay: 0.5
                }}
                initial={{ opacity: 0, scale: 0, translateX: 300 }}
                whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
                viewport={{ once: true }}
            >
                <input
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b border-gray focus:border-secondary"
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={formState.fname}
                    onChange={setField}
                />
                <input
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b border-gray focus:border-secondary"
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={formState.lname}
                    onChange={setField}
                />
                <input
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b border-gray focus:border-secondary"
                    type="subject"
                    placeholder="Subject"
                    name="subject"
                    value={formState.subject}
                    onChange={setField}
                />
                <textarea
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b border-gray focus:border-secondary resize-none"
                    cols="30"
                    rows="10"
                    placeholder="Message..."
                    name="message"
                    value={formState.message}
                    onChange={setField}
                ></textarea>
                <Button className="self-end" to={mailTo}>
                    SUBMIT
                </Button>
            </motion.div>
        </div>
    );
};
export default Contact;
