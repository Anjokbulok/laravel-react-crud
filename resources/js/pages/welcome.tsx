import { Head, Link } from '@inertiajs/react';

interface Category {
    id: number;
    name: string;
    description: string | null;
}

interface Feature {
    id: number;
    title: string;
    description: string;
    featured_image: string | null;
    category: Category;
}

export default function LandingPage({ features = [] }: { features?: Feature[] }) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
                <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet" />
            </Head>

            <header className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/assets/images/logo.png"
                            className="h-12 w-auto"
                            alt="Comteq Logo"
                        />
                    </div>

                    {/* Menu */}
                    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <a href="#" className="hover:text-blue-700">
                            Home
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            About Us
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            Pages
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            Blog
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            Contact
                        </a>
                        <Link href="/features" className="hover:text-blue-700">
                            Features
                        </Link>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center space-x-6">
                        <div className="text-right">
                            <p className="text-xs text-gray-500">
                                Free Consultant
                            </p>
                            <p className="text-blue-600 font-semibold">
                                +36 55 540 069
                            </p>
                        </div>
                    </div>

                </div>
            </header>

           <section
                className="bg-cover bg-center h-[1024px] text-white relative"
                style={{ backgroundImage: "url('/assets/images/hero-1.jpg')" }}
            >
                {/* Overlay (optional pero recommended para readable ang text) */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="max-w-7xl mx-auto flex items-start justify-start h-full pt-72 relative z-10">

                    <div
                       
                    >

                        <h1 className="text-lg md:text-xl font-bold mb-6">
                            TECHNOLOGY-RELATED CONSULTANCY
                        </h1>

                        <p className="text-6xl md:text-7xl font-bold mb-10 leading-tight">
                            We bring great Ideas <br /> to life
                        </p>

                        <a
                            href="#"
                            className="inline-block text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-9 rounded"
                        >
                            Read More
                        </a>

                    </div>

                </div>
            </section>
            

            <section className="relative -mt-32 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-20">

    <div className="bg-white rounded-lg p-12 text-center shadow-lg group">
        <img
            src="/assets/images/service-1.png"
            alt="Consultancy"
            className="mx-auto mb-4 w-16 h-22"
        />
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700">
            Consultancy
        </h3>
        <p className="text-gray-700">
            We provide the most responsive and functional IT design for companies and businesses worldwide.
        </p>
    </div>

    <div className="bg-white rounded-lg p-12 text-center shadow-lg group">
        <img
            src="/assets/images/service-2.png"
            alt="Development"
            className="mx-auto mb-4 w-16 h-22"
        />
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700">
            Development
        </h3>
        <p className="text-gray-700">
            We provide the most responsive and functional IT design for companies and businesses worldwide.
        </p>
    </div>

    <div className="bg-white rounded-lg p-12 text-center shadow-lg group">
        <img
            src="/assets/images/service-1.png"
            alt="Support"
            className="mx-auto mb-4 w-16 h-22"
        />
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700">
            Support
        </h3>
        <p className="text-gray-700">
            We provide the most responsive and functional IT design for companies and businesses worldwide.
        </p>
    </div>

    <div className="bg-white rounded-lg p-12 text-center shadow-lg group">
        <img
            src="/assets/images/service-2.png"
            alt="Analytics"
            className="mx-auto mb-4 w-16 h-22"
        />
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700">
            Analytics
        </h3>
        <p className="text-gray-700">
            We provide the most responsive and functional IT design for companies and businesses worldwide.
        </p>
    </div>

</section>

{/* About Us Section */}
<section className="py-24 bg-white relative z-10">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGES */}
        <div className="relative flex flex-col lg:block gap-6 lg:gap-0">

            {/* Back Image */}
            <img
                src="/assets/images/blog-3.jpg"
                alt="About Us"
                className="rounded-lg w-full lg:w-[420px] shadow-lg"
            />

            {/* Front Image */}
            <img
                src="/assets/images/blog-2.jpg"
                alt="Team"
                className="rounded-lg w-full lg:w-[420px] shadow-xl lg:absolute lg:bottom-[-120px] lg:right-[30px]"
            />

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
                WHO WE ARE
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-snug">
                We specialise in helping our customers digitise their business
            </h2>

            <p className="text-gray-600 mb-8">
                Accelerate innovation with world-class tech teams.
                We’ll match you to an entire remote team of incredible
                freelance talent for all your software development needs.
            </p>

            {/* CEO CARD */}
            <div className="flex items-center gap-4 mb-8">
                <img
                    src="/assets/images/author-1.jpg"
                    alt="CEO"
                    className="w-12 h-12 rounded-full"
                />

                <div>
                    <p className="font-semibold text-blue-600">
                        Mita Walker
                    </p>

                    <p className="text-gray-500 text-sm">
                        CEO, Techmax
                    </p>
                </div>
            </div>

            {/* CHECKLIST */}
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span>
                    Solving complex problems
                </li>

                <li className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span>
                    We guarantee trusted service.
                </li>

                <li className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span>
                    Experts in technology fields
                </li>
            </ul>
        </div>

    </div>
</section>

{/* Skills Section */}
<section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
                <h1 className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[250px] font-bold text-blue-600 leading-none">
                    25+
                </h1>

                <p className="text-gray-500 mb-4">
                    Years of experience
                </p>

                <h2 className="text-5xl font-semibold text-gray-800 leading-snug">
                    We run all kinds of
                    <span className="text-blue-600">
                        {" "}IT <br />
                        services
                    </span>
                    {" "}that vow your success
                </h2>
            </div>

            {/* RIGHT SIDE */}
            <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                    Accelerate innovation with world-class tech teams.
                    We’ll match you to an entire remote technology.
                </h3>

                <div className="space-y-6">

                    {/* Skill 1 */}
                    <div>
                        <div className="flex justify-between text-lg mb-1">
                            <span>IT Management</span>
                            <span>80%</span>
                        </div>

                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: "80%" }}
                            ></div>
                        </div>
                    </div>

                    {/* Skill 2 */}
                    <div>
                        <div className="flex justify-between text-lg mb-1">
                            <span>Data Security</span>
                            <span>90%</span>
                        </div>

                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                    </div>

                    {/* Skill 3 */}
                    <div>
                        <div className="flex justify-between text-lg mb-1">
                            <span>Solution</span>
                            <span>90%</span>
                        </div>

                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        {/* BOTTOM 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {/* Card 1 */}
            <div className="relative rounded-lg overflow-hidden group">
                <img
                    src="/assets/images/skill-img-1.jpg"
                    alt="Data Security"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                <div className="absolute bottom-4 left-4 text-white transition-transform duration-300 group-hover:-translate-y-2">
                    <h4 className="text-2xl font-semibold">
                        Data Security
                    </h4>

                    <a href="#" className="text-xl text-blue-400">
                        Learn More →
                    </a>
                </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-lg overflow-hidden group">
                <img
                    src="/assets/images/skill-img-2.jpg"
                    alt="IT Management"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                <div className="absolute bottom-4 left-4 text-white transition-transform duration-300 group-hover:-translate-y-2">
                    <h4 className="text-2xl font-semibold">
                        IT Management
                    </h4>

                    <a href="#" className="text-xl text-blue-400">
                        Learn More →
                    </a>
                </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-lg overflow-hidden group">
                <img
                    src="/assets/images/skill-img-3.jpg"
                    alt="Digital Marketing"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                <div className="absolute bottom-4 left-4 text-white transition-transform duration-300 group-hover:-translate-y-2">
                    <h4 className="text-2xl font-semibold">
                        Digital Marketing
                    </h4>

                    <a href="#" className="text-xl text-blue-400">
                        Learn More →
                    </a>
                </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-lg overflow-hidden group">
                <img
                    src="/assets/images/skill-img-4.jpg"
                    alt="Networking"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                <div className="absolute bottom-4 left-4 text-white transition-transform duration-300 group-hover:-translate-y-2">
                    <h4 className="text-2xl font-semibold">
                        Networking
                    </h4>

                    <a href="#" className="text-xl text-blue-400">
                        Learn More →
                    </a>
                </div>
            </div>

        </div>

    </div>
</section>

{/* Counter Section */}
<section
    className="py-16 bg-cover bg-center"
    style={{
        backgroundImage: "url('/assets/images/counter-bg.jpg')",
    }}
>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

        <div>
            <img
                src="/assets/images/counter-1.png"
                alt="Projects Completed"
                className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-5xl font-bold text-white mb-2">
                354+
            </h2>
            <p className="text-white">
                Projects Completed
            </p>
        </div>

        <div>
            <img
                src="/assets/images/counter-2.png"
                alt="Satisfied Clients"
                className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-5xl font-bold text-white mb-2">
                199+
            </h2>
            <p className="text-white">
                Satisfied Clients
            </p>
        </div>

        <div>
            <img
                src="/assets/images/counter-3.png"
                alt="Web Site Analyse"
                className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-5xl font-bold text-white mb-2">
                99%
            </h2>
            <p className="text-white">
                Web Site Analyse
            </p>
        </div>

        <div>
            <img
                src="/assets/images/counter-4.png"
                alt="Clients Support Done"
                className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-5xl font-bold text-white mb-2">
                321+
            </h2>
            <p className="text-white">
                Clients Support Done
            </p>
        </div>

    </div>
</section>

{/* Case Study Section */}
<section className="bg-gray-100 py-16">

    <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <p className="text-blue-600 font-semibold text-lg">
            WHO WE ARE
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
            We are proud team of great project
        </h2>
    </div>

    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="relative group overflow-hidden rounded-lg">
            <img
                src="/assets/images/c-study-1.jpg"
                alt="Analytic Solutions"
                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white transition duration-500 group-hover:-translate-y-1">
                <h3 className="text-xl font-bold">
                    Analytic Solutions
                </h3>

                <p className="text-blue-400 text-sm mb-2">
                    IT Technology
                </p>

                <p className="text-sm">
                    Accelerate innovation with world-class tech teams...
                </p>
            </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden rounded-lg">
            <img
                src="/assets/images/c-study-2.jpg"
                alt="Aeroland Protocol"
                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white transition duration-500 group-hover:-translate-y-1">
                <h3 className="text-xl font-bold">
                    Aeroland Protocol
                </h3>

                <p className="text-blue-400 text-sm mb-2">
                    Cyber Security
                </p>

                <p className="text-sm">
                    Accelerate innovation with world-class tech teams...
                </p>
            </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden rounded-lg">
            <img
                src="/assets/images/c-study-3.jpg"
                alt="Product Design"
                className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white transition duration-500 group-hover:-translate-y-1">
                <h3 className="text-xl font-bold">
                    Product Design
                </h3>

                <p className="text-blue-400 text-sm mb-2">
                    UI/UX Design
                </p>

                <p className="text-sm">
                    Accelerate innovation with world-class tech teams...
                </p>
            </div>
        </div>

        <div className="col-span-1 md:col-span-3 text-center mt-8">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                See More Projects
            </button>
        </div>

    </div>
</section>

{/* Features Section */}
<section
    className="relative py-24 overflow-hidden bg-cover bg-center"
    style={{
        backgroundImage: "url('/assets/images/features-bg.jpg')",
    }}
>
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="relative flex justify-center items-center">

            {/* SHAPE BG */}
            <img
                src="/assets/images/features-shape.png"
                alt="Shape"
                className="absolute w-[500px] opacity-70"
            />

            {/* MAIN IMAGE */}
            <img
                src="/assets/images/features-img.png"
                alt="Features"
                className="relative z-10 w-[420px]"
            />

        </div>

        {/* RIGHT SIDE */}
        <div>

            <p className="text-blue-600 font-semibold uppercase mb-2">
                Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-8">
                We provide truly prominent IT solutions for your success
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* Item 1 */}
                <div className="flex items-start gap-4">
                    <img
                        src="/assets/images/features-1.png"
                        alt="Expert Team"
                        className="w-12 h-12"
                    />

                    <div>
                        <h4 className="font-semibold text-lg">
                            Expert Team
                        </h4>

                        <p className="text-gray-600 text-sm">
                            Accelerate innovation with world-class tech teams
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                    <img
                        src="/assets/images/features-2.png"
                        alt="Quality Control"
                        className="w-12 h-12"
                    />

                    <div>
                        <h4 className="font-semibold text-lg">
                            Quality Control
                        </h4>

                        <p className="text-gray-600 text-sm">
                            Accelerate innovation with world-class tech teams
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                    <img
                        src="/assets/images/features-3.png"
                        alt="Integration"
                        className="w-12 h-12"
                    />

                    <div>
                        <h4 className="font-semibold text-lg">
                            Integration
                        </h4>

                        <p className="text-gray-600 text-sm">
                            Accelerate innovation with world-class tech teams
                        </p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4">
                    <img
                        src="/assets/images/features-4.png"
                        alt="24/7 Support"
                        className="w-12 h-12"
                    />

                    <div>
                        <h4 className="font-semibold text-lg">
                            24/7 Support
                        </h4>

                        <p className="text-gray-600 text-sm">
                            Accelerate innovation with world-class tech teams
                        </p>
                    </div>
                </div>

            </div>

            <p className="text-gray-500 mt-6 text-sm">
                This is only glimpse see{" "}
                <a
                    href="#"
                    className="text-blue-600 font-semibold"
                >
                    All Features
                </a>
            </p>

        </div>

    </div>
</section>

{/* Team Section */}
<section className="bg-gray-50 py-20">

    <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
            Highly Professional Staffs
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
            IT technology and technical fields
            <br />
            professional staff
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Member 1 */}
            <div className="relative group overflow-hidden rounded-lg">
                <img
                    src="/assets/images/team-1.jpg"
                    alt="Mike Holder"
                    className="w-full h-[500px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 bg-white px-6 py-4 w-[80%] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Mike Holder
                    </h3>

                    <p className="text-blue-600 text-sm">
                        Founder, Techmax
                    </p>
                </div>
            </div>

            {/* Member 2 */}
            <div className="relative group overflow-hidden rounded-lg">
                <img
                    src="/assets/images/team-2.jpg"
                    alt="Sarah Wilson"
                    className="w-full h-[500px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 bg-white px-6 py-4 w-[80%] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Sarah Wilson
                    </h3>

                    <p className="text-blue-600 text-sm">
                        CEO, Techmax
                    </p>
                </div>
            </div>

            {/* Member 3 */}
            <div className="relative group overflow-hidden rounded-lg">
                <img
                    src="/assets/images/team-3.jpg"
                    alt="John Davis"
                    className="w-full h-[500px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 bg-white px-6 py-4 w-[80%] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                        John Davis
                    </h3>

                    <p className="text-blue-600 text-sm">
                        Manager, Techmax
                    </p>
                </div>
            </div>

        </div>

    </div>

</section>

{/* Feature Section */}
<section className="bg-white py-20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
                Features
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Explore Our Prominent Features
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f) => (
              <Link
                href={`/features/${f.id}`}
                key={f.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200"
                >
                  <img
                    src={f.featured_image ? `/storage/${f.featured_image}` : `https://placehold.co/600x400/e2e8f0/475569?text=${encodeURIComponent(f.title)}`}
                    alt={f.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow"
                >
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block"
                  >
                    {f.category?.name}
                  </span>

                  <h3 className="text-xl font-bold text-gray-850 mb-3 group-hover:text-blue-600 transition-colors duration-200"
                  >
                    {f.title}
                  </h3>

                  <p className="text-gray-650 text-sm mb-6 flex-grow line-clamp-3"
                  >
                    {f.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>

        {features.length === 0 && (
            <div className="text-center py-12 text-gray-500">
                No features available yet. Add some features from the dashboard.
            </div>
        )}
    </div>
</section>

{/* Testimonial Section */}
<section
    className="relative py-24 bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/images/testi-bg.jpg')" }}
>
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#020c2a]/90"></div>

    <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-white">
            <p className="text-blue-500 font-semibold uppercase mb-3">
                Client Testimonial
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                20k+ clients love our <br />
                service & IT related <br />
                solutions
            </h2>
        </div>

        {/* Right Cards */}
        <div className="grid gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-xl relative">
                <h3 className="text-blue-600 font-semibold text-lg mb-3">
                    Right Agency
                </h3>

                <p className="text-gray-600 mb-6">
                    Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/images/author-1.jpg"
                            alt="Author"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-semibold text-gray-800">
                                Mike Holder
                            </p>
                            <p className="text-sm text-blue-600">
                                CEO, Harlond inc
                            </p>
                        </div>
                    </div>

                    <span className="text-5xl text-blue-200">”</span>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-xl relative">
                <h3 className="text-blue-600 font-semibold text-lg mb-3">
                    They Are Best
                </h3>

                <p className="text-gray-600 mb-6">
                    Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/images/author-2.jpg"
                            alt="Author"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-semibold text-gray-800">
                                Mike Holder
                            </p>
                            <p className="text-sm text-blue-600">
                                CEO, Harlond inc
                            </p>
                        </div>
                    </div>

                    <span className="text-5xl text-blue-200">”</span>
                </div>
            </div>

        </div>
    </div>
</section>

{/* Blog Section */}
<section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase mb-2">
                News & Blog
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Trending article & stories
            </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
                {
                    img: "blog-1.jpg",
                    date: "08",
                    title: "Who Needs Extract Value From Data?"
                },
                {
                    img: "blog-2.jpg",
                    date: "10",
                    title: "Easy and Most Powerful Server and Platform."
                },
                {
                    img: "blog-3.jpg",
                    date: "08",
                    title: "Back up your database, store in a safe"
                }
            ].map((blog, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden group transition transform hover:-translate-y-2"
                >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                        <img
                            src={`/assets/images/${blog.img}`}
                            alt={blog.title}
                            className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
                        />

                        {/* Date */}
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-2 text-center rounded">
                            <p className="text-lg font-bold leading-none">
                                {blog.date}
                            </p>
                            <p className="text-xs">Aug</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span>👤 Andrew Paker</span>
                            <span>💬 0 Comments</span>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            {blog.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-6">
                            Accelerate innovation with world-class tech teams We'll match you to an entire remote.
                        </p>

                        <a
                            href="#"
                            className="text-blue-600 font-semibold flex items-center justify-between"
                        >
                            Read Full Article
                            <span className="transition group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            ))}

        </div>
    </div>
</section>

{/* Brand Logos Section */}
<section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Text */}
        <p className="text-gray-600 text-lg mb-10">
            Step forward to become one of{" "}
            <span className="text-blue-600 font-semibold">
                49,494
            </span>{" "}
            successful clients
        </p>

        {/* Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60">

            <img
                src="/assets/images/brand-1.png"
                alt="Brand 1"
                className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />

            <img
                src="/assets/images/brand-2.png"
                alt="Brand 2"
                className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />

            <img
                src="/assets/images/brand-3.png"
                alt="Brand 3"
                className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />

            <img
                src="/assets/images/brand-4.png"
                alt="Brand 4"
                className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />

            <img
                src="/assets/images/brand-5.png"
                alt="Brand 5"
                className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />

        </div>

    </div>
</section>
{/* Brand Logos Section End */}

{/* CTA SECTION */}
<section className="relative -mb-32 z-20">
    <div className="max-w-6xl mx-auto px-6">

        <div
            className="bg-cover bg-center rounded-lg px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
                backgroundImage: "url('/assets/images/cta-bg.jpg')",
            }}
        >
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
                Let’s make something
                <br />
                beautiful together
            </h2>

            <div className="flex items-center gap-6">
                <p className="text-white font-semibold text-lg">
                    +44 920 090 505
                </p>

                <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold"
                >
                    See More Projects
                </a>
            </div>
        </div>

    </div>
</section>

{/* FOOTER */}
<footer
    className="bg-cover bg-center text-white pt-40 pb-10"
    style={{
        backgroundImage: "url('/assets/images/footer-bg.jpg')",
    }}
>
    <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Company */}
            <div>
                <h2 className="text-2xl font-bold mb-4">
                    Techmax
                </h2>

                <p className="mb-3">
                    📞 +91 458 654 528
                </p>

                <p className="mb-3">
                    📧 info@example.com
                </p>

                <p>
                    📍 60 East 65th Street, NY
                </p>
            </div>

            {/* Links */}
            <div>
                <h3 className="text-lg font-semibold mb-4">
                    Useful Links
                </h3>

                <ul className="space-y-2 text-gray-300">
                    <li>
                        <a href="#" className="hover:text-white transition">
                            Terms & Conditions
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            About Company
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            Payment Gateway
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            Policy
                        </a>
                    </li>
                </ul>
            </div>

            {/* Services */}
            <div>
                <h3 className="text-lg font-semibold mb-4">
                    Our Services
                </h3>

                <ul className="space-y-2 text-gray-300">
                    <li>
                        <a href="#" className="hover:text-white transition">
                            Data Security
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            IT Management
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            Outsourcing
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            Networking
                        </a>
                    </li>
                </ul>
            </div>

            {/* Support */}
            <div>
                <h3 className="text-lg font-semibold mb-4">
                    Support
                </h3>

                <ul className="space-y-2 text-gray-300">
                    <li>
                        <a href="#" className="hover:text-white transition">
                            Documentation
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            Support
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            FAQs
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-white transition">
                            Download
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Techmax. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex gap-4">

                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>

                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
                >
                    <i className="fab fa-twitter"></i>
                </a>

                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>

            </div>

        </div>

    </div>

    {/* Scroll Top */}
    <button
        onClick={() =>
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
        className="fixed bottom-6 right-6 bg-blue-600 w-12 h-12 rounded-full text-white shadow-lg"
    >
        ↑
    </button>
</footer>

        </>
    );
}