import { useState } from 'react';

const useForm = () => {
    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        event.persist();

        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    return { formValues, handleChange };
}

export default useForm;