'use client'
import React, { useState, useEffect } from 'react';

const services = [
    {
        name: 'Administrative Support ',
        description: 'Our administrative support virtual assistants handle various tasks to keep your business running smoothly.',
        details: [
            { title: 'Email Management  ', description: 'Our e-mail management virtual assistants organize and respond to emails, filter spam, and prioritize important messages so that you won’t miss out on any important task or process.' },
            { title: 'Calendar Management', description: 'Our calendar management virtual assistants schedule appointments, send reminders, and manage calendar conflicts to ensure efficient time management.' },
            { title: 'Travel Arrangement', description: 'Our travel arrangement virtual assistants plan travel itineraries, book flights and accommodation, and ensure all travel details are organized so that you can enjoy your trips with no stress.' },
            { title: 'Meeting Coordination', description: 'Our meeting coordination sets up meetings, prepares agendas, creates MOM(s), and ensures all necessary participants are informed and prepared for smooth processes.' },
            { title: 'Document Management', description: 'Our document management virtual assistants organize files, maintain records, and ensure easy access to important documents, so that you don’t have to worry about them.' },
            { title: 'Bookkeeping Management', description: 'Our bookkeeping management virtual assistants handle account tasks such as invoicing, tracking expenses, and maintaining financial records.' },

        ]
    },
    {
        name: 'Customer Services',
        description: 'Dedicated virtual assistants to manage customer inquiries, complaints, and feedback.',
        details: [
            { title: 'Technical Support Assistant', description: 'Our technical support virtual assistants provide assistance with technical issues and queries of every sort related to products and services.' },
            { title: 'Concierge Service Assistant', description: 'Our concierge service virtual assistants offer personalized assistance for clients, such as booking services or providing information about local amenities. ' },
            { title: 'Live Chat Support Assistant', description: 'Our live chat support virtual assistants engage with customers and the audience of yours via live chat to answer inquiries and resolve issues in real-time.' },
            { title: 'Social Media Support', description: 'We have a team of social media virtual assistants who solely focus on managing audience interaction on various social media platforms and addressing feedback or crafting strategies for your growth.' },
            { title: 'Customer Feedback and Survey Assistant', description: 'Our customer feedback and survey assistants collect customer feedback through surveys and questionnaires and analyze results to improve your products and services.' },
        ]
    },
    {
        name: 'Content Creation ',
        description: 'Skilled content creators to produce engaging articles, blog posts, and social media content.',
        details: [
            { title: 'Content Writers ', description: 'Our content writer virtual assistants write content that is engaging and SEO friendly and involves the crafting of blogs, articles, newsletters, marketing material, and social media posts.' },
            { title: 'Social Media Content Creators', description: 'Our social media content creator develop engaging and tailored content for various platforms that will boost the number of your followers and online presence. ' },
            { title: 'Email Marketing Experts', description: 'Our email marketing virtual assistants design and manage email campaigns to enhance customer engagement and captivate new customers for better overall growth of your business.' },
            { title: 'Video Content Creators', description: 'Our video content creator virtual assistant produces video content for marketing or informational purposes and also handles your Youtube content and creates personalized content.' },
            { title: 'Graphic Designers', description: 'We have a dedicated team of graphic designers who craft content for branding and marketing needs; they are well equipped to deliver motion graphics.' },
            { title: 'Content Strategist', description: 'Our content strategist virtual assistants plan content strategies that align with your business goals and also build your brand’s online presence so that your business can thrive on growth.' },
        ]
    },
    {
        name: 'eCommerce Support',
        description: 'Specialized assistance for managing your online store, including inventory and order processing.',
        details: [
            { title: 'Product Management Virtual Assistants', description: 'Our product management virtual assistants oversee product listings, descriptions, and inventory management to reach your targeted customers.' },
            { title: 'Order Processing and Fulfillment', description: 'Our order processing and fulfillment virtual assistants handle order processing form receipt to delivery. ' },
            { title: 'Customer Service Virtual Assistants', description: 'Our customer service virtual assistant provides support specifically for your eCommerce customers so that you thrive on business success.' },
            { title: 'Marketplace Management ', description: 'Our marketplace management virtual assistants manage listings of your products and services on various eCommerce platforms like eBay, Amazon, Flipkart, etc. ' },
            { title: 'Digital Marketing Virtual Assistants', description: 'Our digital marketing virtual assistants implement online market strategies to drive sales and enhance conversion rates for your products and services.' },
        ]
    },
    {
        name: 'Data Management',
        description: 'Efficient organization and analysis of your business data for informed decision-making.',
        details: [
            { title: 'Data Entry Virtual Assistants', description: 'Our data entry virtual assistants input data into systems accurately and efficiently so that you can leverage that data for beneficial insights and your business growth.' },
            { title: 'Data Management Virtual Assistants', description: 'Our dtaa management virtual assistants organize and maintain databases to ensure dat integrity to help your business be free of any kind of data management issues. ' },
            { title: 'Data Research Virtual Assistants', description: 'Our data research virtual assistants conduct research to gather relevant data for business decisions.' },
            { title: 'Data Analysis Virtual Assistants', description: 'Our data analysis virtual assistants analyze data sets to provide insights that inform strategy, be it Advanced Excel, Tableau, or PowerBI.' },
        ]
    },
    {
        name: 'Project Management',
        description: 'Efficient organization and analysis of your business data for informed decision-making.',
        details: [
            { title: 'Track Management Virtual Assistants', description: 'Our tack management virtual assistants monitor project progress and ensure timelines are met.' },
            { title: 'Communication Virtual Assistants', description: 'Our communication virtual assistants facilitate communication among team members and stakeholders to ensure clarity on project goals.' },
            { title: 'Technical Virtual Assistants', description: 'Our technical virtual assistants for project management provide technical support related to your project requirements. ' },
            { title: 'Online Business Managers (OBM)', description: 'Our online business managers (OBM) oversee business operations remotely, often taking on managerial roles within projects.' },
            { title: 'Research Virtual Assistants', description: 'Our research virtual assistants conduct project related research for smooth development and deployment.' },
        ]
    },
    {
        name: 'Sales and Outreach',
        description: 'Efficient organization and analysis of your business data for informed decision-making.',
        details: [
            { title: 'Lead Generation Assistant', description: 'Our lead generation virtual assistants identify potential leads through various channels to boost sales and ROI(s).' },
            { title: 'Bulingual SDR', description: 'Our bilingual sales development representatives deal with leads in multiple languages or regional languages to broaden market reach and maximize sales.' },
            { title: 'Outbound Calling Agent', description: 'Our outbound calling agent conducts calls to potential clients and customers as part of sales outreach efforts.' },
            { title: 'CRM Data Entry Assistant', description: 'Our client relationship management (CRM) assistant maintains customer relationship management systems with accurate data entries.' }
        ]
    },
    {
        name: 'Web App Development ',
        description: 'Efficient organization and analysis of your business data for informed decision-making.',
        details: [
            { title: 'UI/UX Design Virtual Assistants', description: 'Our dedicated UI/UX virtual assistants focus on user interface design and customer experience (CX) optimization for web and mobile applications.' },
            { title: 'Frontend Developer Virtual Assistants', description: 'Our frontend development virtual assistants build intuitive website and mobile app applications, that are user-friendly and responsive using top technologies. ' },
            { title: 'Backend Development Virtual Assistants', description: 'Our backend development virtual assistants manage service-side logic and database interaction for websites and applications. ' },
            { title: 'Full-Stack Developer Virtual Assistant', description: 'Our full-stack development virtual assistant handles both frontend and backend development of your web applications to  leverage seamless customer engagement & processes.' },
            { title: 'Mobile App Developer Virtual Assistant', description: 'Our mobile app development virtual assistant specializes in creating and deploying applications for mobile and tablet devices across various platforms, such as Android and iOS. ' },
        ]
    },
    {
        name: 'Specialized Services',
        description: 'Efficient organization and analysis of your business data for informed decision-making.',
        details: [
            { title: 'Real Estate Virtual Assistants', description: 'We also offer real estate virtual assistant services solely aimed at assisting real estate processes with tasks related to property management and client handling.' },
            { title: 'Healthcare Virtual Assistants', description: 'Our healthcare virtual assistant services offer supporting healthcare providers by managing tasks that allow them to focus on patient care & thrive on business enhancement.' },
        ]
    }
];

export default function VirtualAssistantServices() {
    const [selectedService, setSelectedService] = useState(0);
    const [expandedService, setExpandedService] = useState(0); // Default to 0 (first service)

    useEffect(() => {
        setExpandedService(0); // Ensure the first service is expanded by default
    }, []);

    const toggleServiceExpansion = (index) => {
        setExpandedService(expandedService === index ? null : index);
    };

    return (
        <div className='bg-[#00111a] px-[5.208vw] '>
            <div className=" text-white hidden md:block ">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className=" w-[43.542vw] text-center text-[#fbfbfc] text-[2.5vw] font-semibold">Our Virtual Assistant Services</h1>
                    <p className="w-[59.844vw] text-center text-white text-[1.25vw] font-medium mt-[1.667vw]">
                        It doesn&apos;t matter if you are a small business, start-up, or well-established organization,
                        Possesive Panda offers virtual assistants across the globe for seamless and elevated services.
                    </p>
                </div>
                {/* Desktop View */}
                <div className="flex flex-col md:flex-row gap-8 mt-[3.229vw]">
                    <div className=''>
                        <div className="w-[24.427vw] h-[37.604vw] pt-[1.25vw] pb-[1.354vw] bg-[#131d22] flex-col justify-center items-center gap-[0.625vw] inline-flex">
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    className={`w-[21.927vw] h-[3.333vws] rounded-[0.313vw] border border-white/70 justify-center items-center inline-flex transition duration-300 text-center text-white/70 text-[1.25vw] font-normal px-[2.792vw] py-[0.729vw] ${selectedService === index ? 'bg-[#00111a]' : 'bg-[#131d22] hover:bg-gray-700'
                                        }`}
                                    onClick={() => setSelectedService(index)}
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-[60.99vw] h-[37.604vw] grid grid-cols-1 md:grid-cols-3 gap-[0.833vw] bg-[#131d22] px-[2.083vw] py-[1.25vw]">
                        {services[selectedService].details.map((detail, index) => (
                            <div
                                key={index}
                                className="w-[18.125vw] h-[16.927vw] bg-[#00111a] rounded-[1.042vw] flex-col justify-start items-start gap-[0.833vw] inline-flex px-[1.25vw] py-[1.25vw] relative transition-shadow duration-300 hover:shadow-[3px_7px_13.8px_0px_rgba(112,110,110,0.20)]"
                            >
                                <h3 className="text-white text-[1.25vw] font-medium">{detail.title}</h3>
                                <p className="text-white text-[0.833vw] font-normal overflow-y-auto max-h-[8vw]">{detail.description}</p>
                                <button className="h-[2.188vw] bg-[#00aff1] rounded-[0.26vw] justify-center items-center inline-flex transition duration-300 text-white text-[0.833vw] font-medium absolute bottom-[1.25vw] left-[1.25vw] right-[1.25vw]">
                                    Know More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Mobile View */}

            <div className="md:hidden text-white">
                <h1 className="text-center text-[#fbfbfc] text-[6vw] font-semibold mb-4">Our Virtual Assistant Services</h1>
                <p className="text-center text-white text-[3.5vw] font-medium mb-8">
                    Possessive Panda offers a full suite of Virtual Assistant services for your business growth.
                </p>
                <div className="flex flex-col space-y-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#131d22] rounded-lg overflow-hidden">
                            <button
                                className="w-full py-4 px-6 text-left text-white text-[4vw] font-medium flex justify-between items-center"
                                onClick={() => toggleServiceExpansion(index)}
                            >
                                {service.name}
                                <span className={`transform transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedService === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 py-4 space-y-4">
                                    {service.details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="bg-[#00111a] rounded-lg p-4">
                                            <h3 className="text-white text-[3.5vw] font-medium mb-2">{detail.title}</h3>
                                            <p className="text-white text-[3vw] mb-4">{detail.description}</p>
                                            <button className="w-full bg-[#00aff1] text-white py-2 rounded-md text-[3.5vw] font-medium">
                                                Know More
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}