import { useFormStatus } from "react-dom";


export default function SubmitButton({ title, className, onclick }) {
    const { pending } = useFormStatus();


    return (
        <button
            type="submit"
            className={`${className} ${pending && "animate-pulse"}`}
            disabled={pending}
            onClick={onclick}
        >
            {pending ? "Submitting..." : title}
        </button>
    );
}