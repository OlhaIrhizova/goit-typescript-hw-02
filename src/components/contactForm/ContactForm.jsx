import { ErrorMessage, Field, Form, Formik } from "formik"
import { number } from "yup";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";


const ContactForm = ({onAdd}) => {
    const initialValues ={
        name :'',
        number: '',
    };
    const onlyLetters = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-\s]+$/;
    const phonereg = /^(\(\d{3}\)-|\d{3}-)\d{3}-\d{3}$/;
    const applySchema = Yup.object().shape({
        name: Yup.string().required('Required').min(3, 'Too short')
        .max(50, 'Too Long').matches(onlyLetters, 'Name can only contain letters'),
        number: Yup.string().required('Required').min(3, 'Too short').max(50, 'Too Long')
        .matches(phonereg, 'Invalid phone number format'),
    });

    const handleSubmit = (values,actions) => {
        console.log(values);
        onAdd({
            id:nanoid(),
            name: values.name,
            number: values.number
        });
        actions.resetForm();
       
    };


    return (
        <div className={css.formWrapper}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={applySchema}>
                {({values}) => (
                    <Form className={css.contactForm}> 
                    <label htmlFor="" className={css.label}> Name
                    <Field name = 'name' className = {css.input}/>
                    <ErrorMessage className={css.error} component='span' name='name'/>
                    </label>
                    <label className={css.label}> Number
                    <Field  name = 'number' type = 'text' className = {css.input}/>
                    <ErrorMessage className={css.error} component='span' name='number'/>
                    </label>
                    <button className={css.formBtn} type="submit">Add contact</button>

                   
                </Form>
                )}
            </Formik>
        </div>
    )

}
export default ContactForm;