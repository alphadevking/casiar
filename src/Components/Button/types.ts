export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    to?: string,
    className?: string,
    children?: React.ReactNode,
}

export interface CartProps {
    title?: string,
    to?: string,
    cartStyle?: React.ReactNode,
    cartStyleOnHover?: string,
    className?: string,
    children?: Element,
}

