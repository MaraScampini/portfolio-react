import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  [key: string]: unknown,
  user_name: string,
  user_email: string,
  message: string
}

export const Contact = () => {
  const emptyFormData = {
    user_name: "",
    user_email: "",
    message: ""
  }
  const [formData, setFormData] = useState<FormData>(emptyFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData) {
      emailjs
        .send('mara_gmail_service', 'template_contact', formData, {
          publicKey: 'AHTWSrXtMDh3c-7YM',
        })
        .then(
          () => setFormData(emptyFormData)
        );
    }

  };

  return (
    <div className='flex flex-col gap-y-5 mt-10 ms-10'>
      <div className='flex gap-x-10'>
        <div id='form' className='w-1/2 text-light-gray-text'>
          <p className='mb-5'>You can send me an email through this contact form:</p>
          <form className='flex flex-col gap-y-5 ' onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={(e) => handleInputChange(e)}
              className='h-12 border-2 border-dusty-pink text-dark-dusty-pink ps-5'
              placeholder='Your name' />
            <input
              type="email"
              name="user_email"
              onChange={(e) => handleInputChange(e)}
              value={formData.user_email}
              className='h-12 border-2 border-dusty-pink text-dark-dusty-pink ps-5'
              placeholder='Your email' />
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange(e)}
              className='h-60 border-2 resize-none border-dusty-pink text-dark-dusty-pink pt-3 ps-5'
              placeholder='Your message' />
            <div className='flex justify-center'>
              <button
                type="submit"
                className='w-60 h-12 border-2 border-dusty-pink text-dusty-pink font-bold text-xl 
              hover:bg-dusty-pink hover:text-gray-background transition-all duration-150'>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className='w-1/3 bg-red-200'>a</div>
      </div>
    </div>
  );
};

