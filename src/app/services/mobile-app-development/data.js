import { icons, leverageIcons, purposeIcons } from "./images";
import banner from "../../../assets/services/banners/Mobile-App-Development-Service.png";

const top = {
  title: "Mobile App Development Service",
  paragraph: [
    `Stimulate your digital presence with mobile apps by Possessive Panda that combine form and function.`,
  ],

  title2: `Custom Mobile App Development`,
  paragraph2: [
    `Mobile applications are widely used in today's age. These mobile apps can come pre-installed on the device, can be downloaded and installed from a mobile app store (Google Play Store for Android and App Store for iOS) or accessed through a mobile web browser. Custom mobile app development is a comprehensive process that commences with planning and strategizing according to the business requirements, which is followed by the technical aspect of it, i.e., development. Once a prototype is ready for deployment, testing is done to make improvements and fix errors till it is prepared for launch. This entire process ensures the participation of all the internal stakeholders including developers, application owners, designers and project managers, ensuring that the specific needs of the client are met effectively.`,
  ],
  image: banner,
};

const ourMadeServices = [
  {
    num: "1",
    title: "Native App Development",
    description: `Native apps are tailored specifically for a single operating system (such as Android, iOS, etc). Unlike browser apps, they have the ability to utilize device hardware and capabilities, like microphone, camera, sensor, contacts, and more, in order to deliver an enhanced user experience through varied features.`,
  },
  {
    num: "2",
    title: "Cross-Platform App Development",
    description: `Apps that function on multiple operating systems are called cross-platform apps. Developers write a single codebase that can be used to deploy the application on various platforms. This solves the problem of developing the application separately for every operating system.`,
  },
  {
    num: "3",
    title: "Web App Development",
    description: `Applications that work exclusively on web browsers are called web applications. They cannot access the device hardware and capabilities but have the ability to work across web browsers on any device. Also, their development processes are much less complex and much more cost-efficient.`,
  },
  {
    num: "4",
    title: "Hybrid App Development",
    description: ` Hybrid apps merge the features of web apps and native apps. They are compatible across platforms but do not perform as well as native apps. The code is written once and subsequently reused for different platforms. Despite its flaws, this method of app development does save time and costs.`,
  },
];

const androidApp = [
  {
    num: "01",
    title: "What?",
    description: `Android app development creates applications for Android devices. Android, the operating system powered by Google, is the most widely used across the globe, supporting thousands of devices - from smartphones and tablets to wearables and smart TVs.`,
  },
  {
    num: "02",
    title: "How?",
    description: `The crucial first step for developing an Android app is coming up with an innovative concept. Once a concept is ideated, its structural planning, UI/UX designing, coding and testing is done before final deployment.`,
  },
  {
    num: "03",
    title: "Language?",
    description: `Java is the main programming language for Android app development. However, Kotlin, a more modern and refined language, has now gained popularity among developers, and consequently, official support from Google.`,
  },
  {
    num: "04",
    title: "IDE & SDK?",
    description: `Android developers utilize Android Studio, the official Integrated Development Environment for Android, for the best coding, debugging, and testing tools. The Android Software Development Kit provides libraries, APIs, and sample codes.`,
  },
  {
    num: "05",
    title: "Compatibility?",
    description: `Compatibility with numerous devices, different screen sizes, hardware configurations, and versions of the Android operating system makes it necessary for developers to create adaptable designs that give consistency across devices.`,
  },
  {
    num: "06",
    title: "Revenue?",
    description: `Android applications are available on Google Play Store, third-party app stores and also directly to users, which allows developers to reach a vast audience worldwide. They make money through paid downloads, in-app purchases, subscriptions, and ads.`,
  },
  {
    num: "7",
    title: "Security?",
    description: `Developers have to ensure that they implement the appropriate mechanisms to protect user data and thus the integrity of the application. This implies adherence to Google's guidelines and best practices regarding data encryption, authentication, and regular updates.`,
  },
];

const iosApp = [
  {
    num: "01",
    title: "What & How?",
    description: `iOS app development builds applications for Apple's iOS operating system. Like in the case of Android, the process of developing an iOS app involves conceptualizing, designing, coding, testing, and distribution.`,
  },
  {
    num: "02",
    title: "Language?",
    description: `Objective-C and Swift are two of the major code languages for iOS development. The most recent and popular one among those two is Swift because of its safety, performance, and clarity of expression.`,
  },
  {
    num: "03",
    title: "IDE & SDK?",
    description: `Android Studio’s counterpart for iOS is Xcode, Apple’s official integrated development environment (IDE). The iOS Software Development Kit (SDK) provides the libraries, APIs, and documentation required to create and ready an iOS app.`,
  },
  {
    num: "04",
    title: "Compatibility?",
    description: `Unlike Android, there are very limited devices (thus fewer screen sizes and hardware specifications) on iOS. This eases consistency in user experience, helping developers to concentrate on refining the UI and the functionality.`,
  },
  {
    num: "05",
    title: "Standards?",
    description: `Apple's Human Interface Guidelines makes sure that the app design is smooth and user-friendly while also keeping them within the visual and functional standards set by iOS. It covers aspects such as accessibility, typography and more.`,
  },
  {
    num: "06",
    title: "Testing?",
    description: `Testing is done with the help of physical devices and simulators built in by Xcode itself. TestFlight by Apple allows developers to distribute beta versions to testers, collect feedback, and identify and fix errors before the official release.`,
  },
  {
    num: "7",
    title: "Revenue?",
    description: `The Apple App Store has sky-high quality and security standards that ensure a safe and reliable UX. iOS apps earn through paid apps, in-app purchases, subscriptions, and advertising, where Apple Inc. claims part of the revenue.`,
  },
  {
    num: "8",
    title: "Security?",
    description: `Security and privacy are extremely vital in developing an iOS application. This requires an expertly planned security system that deals with data encryption, storage safety, and strict adherence of Apple's privacy policies.`,
  },
];

const servicesForVariousPurpose = {
  row1: [
    { name: `Travel & Tourism`, image: purposeIcons[10] },
    { name: `Healthcare`, image: purposeIcons[5] },
    { name: `EdTech`, image: purposeIcons[0] },
    { name: `Real Estate`, image: purposeIcons[3] },
  ],
  row2: [
    { name: `Transport`, image: purposeIcons[1] },
    { name: `Event`, image: purposeIcons[2] },
    { name: `E-Commerce`, image: purposeIcons[4] },
  ],
  row3: [
    { name: `Game`, image: purposeIcons[6] },
    { name: `Finance`, image: purposeIcons[7] },
    { name: `Restaurant`, image: purposeIcons[9] },
    { name: `Groceries`, image: purposeIcons[8] },
  ],
};

const tools = {
  buttons: [
    {
      name: `Development Frameworks`,
      id: "dev",
      images: [
        { image: icons[1], name: `Django` },
        { image: icons[2], name: `Flutter` },
        { image: icons[3], name: `Kotlin` },
        { image: icons[6], name: `Node` },
        { image: icons[7], name: `React` },
        { image: icons[8], name: `Springboot` },
      ],
    },
    {
      name: `Database Management`,
      id: "data",
      images: [
        { image: icons[4], name: `MySql` },
        { image: icons[5], name: `Mongoose` },
      ],
    },
    {
      name: `Deployment`,
      id: "deploy",
      images: [{ image: icons[0], name: `AWS` }],
    },
  ],
};

const leverage = [
  {
    title: "Quick & Easy Access",
    description: `With mobile apps, your customers can carry your entire brand in their pockets. Ease of access, regular notifications, and your app icon on their screens keeps your company's image in their minds whenever they use their smartphones`,
    image: leverageIcons[0],
  },
  {
    title: "Edge Over Web App Development",
    description: `Organisations cannot rely solely on websites and web apps. They lack a lot of features and functions that mobile apps provide, such as access to mobile hardware and capabilities, high quality performance and tailored experiences`,
    image: leverageIcons[1],
  },
  {
    title: "Improved Mobile App UI/UX",
    description: `Handy and efficient user interface of mobile apps provides for a user-friendly experience that enhances customer engagement. This convenience cannot be found in websites or web apps that function on larger devices`,
    image: leverageIcons[2],
  },
];

const faq = [
  {
    title: `How long would it take to create an app for my business?`,
    description: `It can vary as per your business's needs. The app will be strategically planned out, which will decide its features, complexity, structure, and overall approach. Accordingly, mobile applications development with advanced requirements will take more time than basic apps, which get finished in 1-3 months.`,
  },
  {
    title: `How much does it cost to build a mobile app?`,
    description: `Cost of getting your mobile app built and ready depends on the structure, features, app development software and tools that are employed, and other such requirements of the application. Possesive Panda gives you the option to set your budget frame for the project, keeping everything open to discussion to ensure maximum satisfaction.`,
  },
  {
    title: `How do I decide the type of mobile app for my company?`,
    description: `The type of application you should get developed for your company, along with its structure, features, app development software etc are decisions that come under the strategic planning of your app. Before the development process begins, the requirements of your company as well as market trends are analyzed and taken under consideration while planning the app so as to optimize it for maximum efficiency and competence.`,
  },
  {
    title: `Why is mobile app development important?`,
    description: `It can vary as per your business's needs. The app will be strategically planned out, which will decide its features, complexity, structure, and overall approach. Accordingly, mobile applications development with advanced requirements will take more time than basic apps, which get finished in 1-3 months.`,
  },
  {
    title: `What are the different kinds of mobile apps?`,
    description: `There are majorly three kinds of mobile applications, namely native apps, hybrid apps and web apps. Native apps are specific to their operating system. Hybrid apps are ones that work across platforms with some of the features of native apps as well. However, they do not perform as well as native apps do. Web apps work on web browsers across platforms but are unable to offer hardware features that native or hybrid apps do.`,
  },
  {
    title: `Why choose Possesive Panda for mobile app development?`,
    description: `Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more. Additionally, we hand the source code of the project over to the client, so that they can make updates and maintenance through any developer of their choice.`,
  },
];

export {
  top,
  ourMadeServices,
  androidApp,
  iosApp,
  servicesForVariousPurpose,
  tools,
  leverage,
  faq,
};
