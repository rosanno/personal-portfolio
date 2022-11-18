import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rosannomacabuhay@gmail.com?subject=${formData.subject}&body=${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-12 mt-48">
        <h4 className="text-lg md:text-3xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="decoration-[#2EB086]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#2EB086] h-7 w-7 animate-pulse" />
            <p>+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#2EB086] h-7 w-7 animate-pulse" />
            <p>rosannomacabuhay@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#2EB086] h-7 w-7 animate-pulse" />
            <p>Palanog Camalig, Albay</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto pb-20"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              type="text"
              className="contactInput"
              placeholder="Name"
            />
            <input
              {...register('email')}
              type="text"
              className="contactInput"
              placeholder="Email"
            />
          </div>

          <input
            {...register('subject')}
            type="text"
            className="contactInput"
            placeholder="Subject"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#2EB086] hover:bg-[#2EB086]/25 transition duration-500 py-3 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
