import React, { useState } from "react";
import { FileUploadField, InputField, RadioGroupField, SelectField, TextAreaField } from "./formUtils";


const FormHeader = () => {
    return (
        <div className="relative h-64 bg-darkBlue overflow-hidden">
            <img
                src="https://readdy.ai/api/search-image?query=modern%20creative%20workspace%20with%20design%20elements%20and%20branding%20materials%2C%20elegant%20composition%20with%20gold%20and%20navy%20blue%20color%20scheme%2C%20professional%20atmosphere%20with%20soft%20lighting&width=1200&height=400&seq=onboarding-hero&orientation=landscape"
                alt="Creative workspace"
                className="w-full h-full object-cover object-top opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <i className="fas fa-pen-fancy text-gold text-3xl"></i>
                        <h1 className="text-3xl font-bold text-white">
                            Ink and <span className="text-gold">Pixels</span>
                        </h1>
                    </div>
                    <p className="text-lg text-gray-200">
                        Let&#39;s bring your creative vision to life
                    </p>
                </div>
            </div>
        </div>
    );
};

const FormFooter = () => {
    return (
        <div className="flex items-center justify-between pt-6">
            <p className="text-sm text-gray-500">
                <span className="text-red-500">*</span> Required fields
            </p>
            <button
                type="submit"
                className="bg-[#000028] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#000040] transition-colors duration-300 flex items-center space-x-2 !rounded-button cursor-pointer whitespace-nowrap"
            >
                <span>Submit</span>
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    );
};

const MainForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        companyName: "",
        address: "",
        postcode: "",
        businessType: "",
        budget: "",
        deliveryLocation: "",
        productType: "",
        message: "",
        files: [],
        referralSource: "",
    });

    console.log(formData)

    const businessTypes = [
        "Retail",
        "Manufacturing",
        "Services",
        "Technology",
        "Healthcare",
        "Education",
        "Other",
    ];

    const productTypes = [
        "Branding Materials",
        "Packaging Solutions",
        "Printed Materials",
        "Custom Products",
        "Corporate Merchandise",
        "Other",
    ];

    const referralSources = [
        "Search Engine",
        "Social Media",
        "Word of Mouth",
        "Advertisement",
        "Business Directory",
        "Other",
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (files) => {
        if (files) {
            setFormData((prev) => ({
                ...prev,
                files: Array.from(files || []),
            }));
        }
    };


    return (
        <form
            action="https://formsubmit.co/69713c2543292f8fb3ef95f074dfe9b5"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6"
        >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="http://localhost:5173/" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_subject" value="New submission for inks and pixels!" />

            <div className="grid gap-6 md:grid-cols-2">
                <InputField
                    label="First Name"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                />
                <InputField
                    label="Last Name"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                />
                <InputField
                    label="Telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder="+234 123 456 7890"
                />
            </div>

            <InputField
                label="Company Name"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your Company Name"
            />

            <div className="grid gap-6 md:grid-cols-2">
                <InputField
                    label="Address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Business Street"
                />
                <InputField
                    label="Postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleInputChange}
                    placeholder="12345"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <SelectField
                    label="Business Type"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    options={businessTypes}
                />
                <InputField
                    label="Budget Consideration"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Your budget range"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <InputField
                    label="Delivery Location"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    placeholder="Delivery address if different"
                />
                <SelectField
                    label="Type of Product"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleInputChange}
                    options={productTypes}
                />
            </div>

            <TextAreaField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements..."
            />

            <FileUploadField
                label="Attach Files"
                name="files"
                onChange={handleFileChange}
            />

            <RadioGroupField
                label="How did you hear about us?"
                name="referralSource"
                options={referralSources}
                value={formData.referralSource}
                onChange={handleInputChange}
            />
            <FormFooter />
        </form>
    );
};

export const GetStartedSections = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-darkBlue to-lightBlue">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <FormHeader />
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-[#000028] mb-6">
                            Get Started
                        </h2>
                        <MainForm />
                    </div>
                </div>
            </div>
        </div>
    );
};
