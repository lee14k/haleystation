import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Create a FormData object, passing in the form event target
    const form = event.target;
    const formData = new FormData(form);
  
    // Retrieve form data using FormData methods
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      message: formData.get('message'),
    };
    console.log({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      message: formData.get('message'),
    });
    
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setIsModalOpen(true);
        console.log("Form submitted successfully");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
      const closeModal = () => {
     setIsModalOpen(false);
   };
  return (
    <div className="relative isolate bridal-one fancy-font pb-12">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2 contact-side-one ">
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </div>
            <h2 className="text-5xl font-bold tracking-tight text-white">
              Get in touch
            </h2>

            <dl className="mt-10 space-y-4 text-base leading-7 text-white">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only text-2xl">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd className="text-2xl">
                  1837 3rd Avenue North <br />
                  Escanaba, MI 49829{" "}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd className="text-2xl">
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    (906) 261-9159
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd className="text-2xl">
                  <a
                    className="hover:text-gray-900"
                    href="mailto:haleystationevents@gmail.com"
                  >
                    haleystationevents@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit}
        method="POST" className=" pt-12 ">
          <div className="px-16">
            <div className="flex flex-col gap-x-8 gap-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 "
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-rose-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Send message
              </button>
            </div>
            {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-content bg-white p-4 rounded-lg shadow-lg z-50">
            <p className="text-lg font-semibold text-green-600">Submission Successful!</p>
            <p>Your submission was successful. Thank you!</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
          </div>
        </form>
      </div>
    </div>
  );
}
