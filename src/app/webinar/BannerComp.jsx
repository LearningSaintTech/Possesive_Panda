import React, { useState } from 'react';
import { Image } from '@/lib/next-compat';
import bg from "../../../public/assets/landing/bg.svg";
import mobile from '../../../public/assets/landing/mobilebg.svg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const BannerComp = ({ scrollToThirdComp }) => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhoneChange = (phone) => {
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
        setFormData((prev) => ({ ...prev, phone: formattedPhone }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
                       const response = await fetch('https://api.possesivepanda.com/user/register', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Registration failed. Please try again.');
            }
    
            // Handle successful registration
            const result = await response.json();
            console.log('Registration successful:', result);
            alert('Registration successful!');  // Add alert here
            setFormData({ fname: '', lname: '', email: '', phone: '' }); // Clear form
    
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative h-[50vw] bg-gray-900 hidden sm:block">
                <div className="absolute inset-0">
                    <Image
                        src={bg}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="Background"
                    />
                </div>

                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="relative z-10 h-full flex items-center px-[3.333vw]">
                    <div className="flex flex-col items-start text-white ml-[4.5vw]">
                        <h3 className="text-[#00c2c5] text-[1.667vw] font-normal leading-[1.875vw]">Real Estate Reimagined</h3>
                        <h1 className="text-[#f0f2f2] text-[5vw] font-semibold leading-tight  w-[80vw] mt-[1.563vw] mb-[1.563vw]">
                            Leverage Virtual Assistants to Propel Your Business
                        </h1>
                        <p className="text-[#f0f2f2] text-[1.25vw] font-normal leading-[1.875vw] tracking-wide">
                            Revolutionize Your Real Estate Business with Our Comprehensive Webinar
                        </p>
                        <button
                            className="mt-[1.667vw] px-[1.25vw] py-[0.625vw] bg-[#00c2c5] rounded-lg text-[#f0f2f2] text-[0.938vw] font-bold font-['Open Sans'] hover:bg-[#00a9ac] transition duration-300"
                            onClick={scrollToThirdComp}
                        >
                            Know More
                        </button>
                    </div>
                </div>
            </div>

            {/* White background section */}
            <div className="h-[15vw] bg-white hidden sm:block"></div>

            {/* Form overlay */}
            <div className="absolute bottom-[4vw] right-[7.292vw] z-20 hidden sm:block">
                <div className="w-[29.479vw] px-[3.385vw] py-[3.229vw] bg-[#152f2e] rounded-[0.833vw] shadow-lg flex-col justify-center items-center inline-flex">
                    <div className="w-full flex-col justify-start items-center">
                        {/* Title and description */}
                        <div className="w-full text-center mb-[2.5vw]">
                            <h2 className="text-white text-[2.083vw] font-semibold mb-[0.833vw]">
                                Book Your Slot
                            </h2>
                            <p className="text-[#c3c3c3] text-[0.833vw] font-normal font-['Open Sans']">
                                Register now and thrive on the result-driven ways to boost your real estate business.
                            </p>
                        </div>

                        {/* Form fields */}
                        <form className="w-full flex-col justify-start items-center gap-[1.25vw]" onSubmit={handleSubmit}>
                            <div className="w-full mb-[1.25vw]">
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="First Name"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    className="w-full p-[0.833vw] rounded-[0.313vw] shadow-inner border border-[#d8d8d8] bg-white placeholder:text-[#152f2e]/50 text-black text-[1.094vw] font-normal font-['Open Sans']"
                                    required
                                />
                            </div>
                            <div className="w-full mb-6">
                                <input
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    className="w-full p-[0.833vw] rounded-[0.313vw] shadow-inner border border-[#d8d8d8] bg-white placeholder:text-[#152f2e]/50 text-black text-[1.094vw] font-normal font-['Open Sans']"
                                    required
                                />
                            </div>
                            <div className="w-full mb-6">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-[0.833vw] rounded-[0.313vw] shadow-inner border border-[#d8d8d8] bg-white placeholder:text-[#152f2e]/50 text-black text-[1.094vw] font-normal font-['Open Sans']"
                                    required
                                />
                            </div>
                            <div className="w-full mb-6">
                            <PhoneInput
                                            country={'in'}
                                            value={formData.phone}
                                            placeholder="Phone Number"  // Add the placeholder here

                                            onChange={handlePhoneChange}  // Use the specific handler for phone input
                                            containerStyle={{ width: '100%' }}  // Optional: Ensuring full width style
                                            inputStyle={{
                                                width: '100%',
                                                height: '3.5vw',
                                                padding: '0.833vw',
                                                paddingLeft: '2.5vw',
                                                borderRadius: '0.313vw',
                                                border: '1px solid #d8d8d8',
                                                color: '#152f2e',
                                                fontSize: '1.094vw',
                                                fontFamily: 'Open Sans',
                                            }}
                                            required
                                        />
                            </div>

                            {/* Submit button */}
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="w-auto px-[1.667vw] py-[0.625vw] bg-[#00c2c5] text-white text-[1.302vw] font-semibold font-['Open Sans'] rounded-md hover:bg-[#00a9ac] transition duration-300"
                                    disabled={loading}
                                >
                                    {loading ? 'REGISTERING...' : 'REGISTER NOW'}
                                </button>
                            </div>
                            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>

            <div className='sm:hidden block'>
                <div className="w-full max-w-[100vw] mx-auto bg-[#f0f2f2] relative mb-[101.647vw]">
                    <div className="relative">
                        <Image
                            src={mobile}
                            width={425}
                            height={703}
                            alt="Background"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute left-[7.059vw] top-[23.529vw] flex flex-col justify-end items-start gap-[8.471vw] max-w-[85.882vw]">
                            <div className="flex flex-col justify-start items-start gap-[2.824vw]">
                                <div className="flex flex-col justify-start items-start gap-[0.941vw]">
                                    <p className="text-[#00c2c5] text-[2.824vw] font-normal font-['Open Sans'] leading-[8.471vw]">
                                        Real Estate Reimagined
                                    </p>
                                    <h1 className="text-[#f0f2f2] text-[8.471vw] font-bold font-['Times New Roman'] leading-tight">
                                        Leverage Virtual Assistants to Propel Your Business
                                    </h1>
                                </div>
                                <p className="text-[#f0f2f2] text-[3.765vw] font-normal font-['Open Sans'] max-w-[76.235vw]">
                                    Revolutionize Your Real Estate Business with Our Comprehensive Webinar
                                </p>
                            </div>
                            <button
                                className="w-full h-[11.294vw] px-[7.529vw] py-[5.647vw] bg-[#00c2c5] rounded flex justify-center items-center"
                                onClick={scrollToThirdComp}
                            >
                                <span className="text-[#f0f2f2] text-[4.706vw] font-semibold font-['Open Sans']">Know More</span>
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-[-97vw] left-1/2 transform -translate-x-1/2 w-[76.941vw] px-[5.647vw] py-[9.882vw] bg-[#152f2e] rounded-[1.882vw] shadow flex flex-col justify-center items-center">
                        <div className="w-full flex flex-col justify-start items-center gap-[5.647vw]">
                            <div className="w-full flex flex-col justify-start items-center gap-[0.941vw]">
                                <h2 className="text-center text-white text-[5.647vw] font-bold font-['Times New Roman']">Book Your Slot</h2>
                                <p className="w-full max-w-[60.706vw] opacity-80 text-center text-white text-[2.824vw] font-normal font-['Open Sans']">
                                    Register now and thrive on the result-driven ways to boost your real estate business.
                                </p>
                            </div>
                            <form className="w-full max-w-[65.882vw] flex flex-col justify-start items-start gap-[1.882vw]" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="First name"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    className="w-full h-[9.882vw] px-[2.824vw] py-[1.882vw] bg-white rounded shadow-inner border border-[#d8d8d8] placeholder:text-[#152f2e]/50 text-black text-[3.294vw] font-normal font-['Open Sans']"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    className="w-full h-[9.882vw] px-[2.824vw] py-[1.882vw] bg-white rounded shadow-inner border border-[#d8d8d8] placeholder:text-[#152f2e]/50 text-black text-[3.294vw] font-normal font-['Open Sans']"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-[9.882vw] px-[2.824vw] py-[1.882vw] bg-white rounded shadow-inner border border-[#d8d8d8] placeholder:text-[#152f2e]/50 text-black text-[3.294vw] font-normal font-['Open Sans']"
                                    required
                                />
                                <PhoneInput
                                    country={'in'}
                                    value={formData.phone}
                                    placeholder="Phone Number"  // Add the placeholder here

                                    onChange={handlePhoneChange}  // Use the specific handler for phone input
                                    containerStyle={{ width: '100%' }}  // Optional: Ensuring full width style
                                    inputStyle={{
                                        width: '100%',
                                        height: '9.5vw',
                                        padding: '0.833vw',
                                        paddingLeft: '10.5vw',
                                        borderRadius: '1.313vw',
                                        border: '1px solid #d8d8d8',
                                        color: '#152f2e',
                                        fontSize: '4.235vw',
                                        fontFamily: 'Open Sans',
                                    }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full px-[15.059vw] py-[2.353vw] bg-[#00c2c5] rounded text-white text-[3.765vw] font-semibold font-['Open Sans'] leading-tight"
                                    disabled={loading}
                                >
                                    {loading ? 'REGISTERING...' : 'REGISTER NOW'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerComp;



