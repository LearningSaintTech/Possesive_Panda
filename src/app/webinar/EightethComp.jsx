import React, { useState } from 'react';
import { Image } from '@/lib/next-compat';
import BG from '../../../public/assets/landing/formbg.svg';
import backg from '../../../public/assets/landing/lalabg.svg';
import PhoneInput from 'react-phone-input-2'
const EightethComp = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handlePhoneChange = (phone) => {
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
        setFormData((prev) => ({ ...prev, phone: formattedPhone }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { fname, lname, email, phone } = formData;
        const payload = {
            fname,
            lname,
            email,
            phone
        };

        try {
            console.log("Submitting form...");
            const response = await fetch('https://api.possesivepanda.com/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            const data = await response.json();
            console.log('User registered:', data);
            // Show success alert and reset the form
            alert('Register successful');
            setFormData({
                fname: '',
                lname: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            console.error('Error:', error);
            setError(error.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='px-[7.292vw] mt-[9.25vw] hidden sm:block'>
                <div className="relative py-[4.635vw] h-[25.156vw] flex items-center justify-center">
                    <Image
                        src={BG}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50 "
                    />
                    <div className="absolute inset-0 flex items-center justify-between ml-[5.677vw]">
                        <div className="text-white ">
                            <h2 className="w-[40.781vw] text-[#f0f2f2] text-[4.271vw] font-bold">What are you waiting for?</h2>
                            <button className="bg-[#00c2c5] text-white px-[1.25vw] py-[0.625vw] rounded-[0.313vw] text-[0.938vw] font-semibold hover:bg-[#00a9ac] transition-colors">
                                Register Now
                            </button>
                        </div>
                        <div className="w-[29.479vw] px-[3.385vw] py-[3.229vw] mr-[7.552vw] bg-[#152f2e] rounded-[0.833vw] shadow-lg flex-col justify-center items-center inline-flex">
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
                                    <div className="w-full flex justify-center mt-[2.161vw]">
                                        <button
                                            type="submit"
                                            className="w-auto px-[1.667vw] py-[0.625vw] bg-[#00c2c5] text-white text-[1.302vw] font-semibold font-['Open Sans'] rounded-md hover:bg-[#00a9ac] transition duration-300"
                                            disabled={loading}
                                        >
                                            {loading ? 'Registering...' : 'REGISTER NOW'}
                                        </button>
                                    </div>
                                </form>
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='block sm:hidden relative mt-[14.118vw]'>
                <div className='relative w-[100vw] h-[106.588vw]'>
                    <Image
                        src={backg}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-90"
                    />
                </div>
                <div className="mb-[25.118vw] z-10 px-6 py-10">
                    <div className="absolute top-[14.118vw] text-center mb-6">
                        <h2 className="text-white text-4xl font-bold mb-4">What are you waiting for?</h2>
                    </div>

                    <div className="absolute bottom-[-15vw] left-1/2 transform -translate-x-1/2 w-[76.941vw] px-[5.647vw] py-[9.882vw] bg-[#152f2e] rounded-[1.882vw] shadow flex flex-col justify-center items-center">
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
                                    className="w-full h-[9.882vw] px-[2.824vw] py-[1.176vw] rounded-[1.25vw] shadow-inner border border-[#d8d8d8] bg-white placeholder:text-[#152f2e]/50 text-black text-[2.5vw] font-normal font-['Open Sans']"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lname"
                                    placeholder="Last name"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    className="w-full h-[9.882vw] px-[2.824vw] py-[1.176vw] rounded-[1.25vw] shadow-inner border border-[#d8d8d8] bg-white placeholder:text-[#152f2e]/50 text-black text-[2.5vw] font-normal font-['Open Sans']"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-[9.882vw] px-[2.824vw] py-[1.176vw] rounded-[1.25vw] shadow-inner border border-[#d8d8d8] bg-white placeholder:text-[#152f2e]/50 text-black text-[2.5vw] font-normal font-['Open Sans']"
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
                                    className="w-full mt-[2.118vw] px-[2.824vw] py-[2.059vw] bg-[#00c2c5] text-white text-[3.529vw] font-bold font-['Open Sans'] rounded-md hover:bg-[#00a9ac] transition duration-300"
                                    disabled={loading}
                                >
                                    {loading ? 'Registering...' : 'REGISTER NOW'}
                                </button>
                            </form>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EightethComp;
