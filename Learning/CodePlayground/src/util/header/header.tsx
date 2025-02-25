import './header.css';

interface HeaderProps {
    title: string;
    description: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <div className="header">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
