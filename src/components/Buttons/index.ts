type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    children?: any;
    title?: string;
    loading?: boolean;
    className?: string;
}

export const buttonSizeClasses: Record<ButtonSize, string> = {
    small: "py-2 px-3 text-sm m-1",
    medium: "py-3 px-4 text-sm m-1",
    large: "py-7 px-6 text-sm m-1",
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
    primary: "text-slate-600 bg-[#89daf3] hover:shadow-xl duration-300 rounded-xl block",
    secondary: "bg-transparent border text-slate-600 border-slate-400 rounded-xl duration-300 hover:shadow-xl",
};
