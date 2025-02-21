import './button.css';

interface ButtonProps {
    id: string;
    content: string;
}

export default function Button({ id, content }: ButtonProps) {
    return (
        <div className="button__container">
            <button id={id} className="button">{content}</button>
        </div>
    );
}