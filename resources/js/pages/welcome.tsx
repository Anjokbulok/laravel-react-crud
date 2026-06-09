import { Head, Link } from '@inertiajs/react';

export default function LandingPage() {
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
                            src="/assets/logo.png"
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
                style={{ backgroundImage: "url('/assets/hero-1.jpg')" }}
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
        </>
    );
}