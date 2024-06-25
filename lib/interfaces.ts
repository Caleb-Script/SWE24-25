export interface Suchkriterium {
  key: string;
  value: string;
}

export type LoginDaten = {
  username: string;
  password: string;
};

export type Token = {
    access_token: string;
    refresh_token: string;
    expires_in: string;
};

export interface InputFieldProps {
    name: string;
    label: string;
    type: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    step?: string | number;
    min?: string | number;
    max?: string | number;
    defaultValue?: string | number;
    required: boolean;
    handleInputBlur: (
        event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
}

export interface Option {
    value: string;
    label: string;
}

export interface SelectFieldProps {
    name: string;
    label: string;
    options: Option[];
    required: boolean;
    defaultValue?: string;
    handleInputBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
}
