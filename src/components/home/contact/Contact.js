import Button from "../../ui/Button";
import Title from "../../ui/Title";

const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <Title text="CONTACT" />
            <p className="text-center text-gray text-lg py-5">
                Got a project in mind and want to collaborate? Feel free to text
                me.
            </p>
            <div className="flex flex-col w-1/3">
                <input
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b-2 border-gray focus:border-secondary"
                    type="text"
                    placeholder="First Name"
                />
                <input
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b-2 border-gray focus:border-secondary"
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b-2 border-gray focus:border-secondary"
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    className="bg-dprimary text-light p-3 my-2 outline-0 border-b-2 border-gray focus:border-secondary resize-none"
                    cols="30"
                    rows="10"
                    placeholder="Message..."
                ></textarea>
                <Button className=" self-end">SUBMIT</Button>
            </div>
        </div>
    );
};
export default Contact;
