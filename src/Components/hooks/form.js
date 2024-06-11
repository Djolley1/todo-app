import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues = {}) => {
    const [values, setValues] = useState(defaultValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        callback({ ...values });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((values) => ({ ...values, [name]: value }));
    };

    useEffect(() => {
        setValues(defaultValues);
    }, [defaultValues]);

    return { 
        handleChange,
        handleSubmit,
        values,
    };
};

export default useForm;