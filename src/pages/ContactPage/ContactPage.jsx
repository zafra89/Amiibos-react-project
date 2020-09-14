import React from 'react';
import { useForm } from "react-hook-form";
import './ContactPage.scss';

export default function ContactPage() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="contactpage-wrapper">
            <div>
                <h1>Contact Page:</h1>
            </div>
            <div>
                <form className="form-div" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name:</label>
                    <input className="form-div-item" type ="text" name="name" defaultValue="name" ref={register({ required: true })} />
                    {errors.name && <span>Field name is required</span>}

                    <label htmlFor="name">Email:</label>
                    <input className="form-div-item" type ="email" name="email" defaultValue="email@email.com" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/>
                    {errors.email && <span>Field email is required</span>}

                    <label htmlFor="name">Favourite Amiibo:</label>
                    <select className="form-div-item" name="favourite" ref={register({ required: true})}>
                        <option value="">--------</option>
                        <option value="Mario">Mario</option>
                        <option value="Luigi">Luigi</option>
                        <option value="Yoshi">Yoshi</option>
                        <option value="Peach">Peach</option>
                        <option value="Bowser">Bowser</option>
                    </select>
                    {errors.favourite && <span>You have to select your favourite Amiibo</span>}

                    <label htmlFor="name">Comment:</label>
                    <textarea className="form-div-item form-div-item-textarea" name="comment" placeholder="Here goes your comment..." ref={register({ required: true, minLength: 5, maxLength: 255})}></textarea>
                    {errors.comment && <span>Field comment is required and needs to have at least 5 characters long and no more than 255 characters</span>}

                    <input className="form-div-btnitem" type="submit" value="submit"/>
                </form>
            </div>
        </div>
    )
}
