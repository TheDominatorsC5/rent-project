import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="bg-lightgray text-deepgray">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
                    <p className="text-center mb-10">
                        We're here to help you with all your property needs. Reach out to us through any of the channels below.
                    </p>

                    <form className="grid md:grid-cols-2 gap-6 bg-gray-100 p-10 rounded-lg shadow">
                        <input type="text" placeholder="Full Name" className="p-3 rounded border" />
                        <input type="email" placeholder="Email Address" className="p-3 rounded border" />
                        <input type="tel" placeholder="Phone Number" className="p-3 rounded border md:col-span-2" />
                        <select className="p-3 rounded border md:col-span-2">
                            <option>General Inquiry</option>
                            <option>Support</option>
                            <option>Feedback</option>
                        </select>
                        <textarea placeholder="Tell us how we can help you..." rows="4" className="p-3 rounded border md:col-span-2"></textarea>
                        <button className="bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 md:col-span-2">
                            Send Message
                        </button>
                    </form>

                    <div className="gap-6 mt-12">
                        <div className='bg-[#2C3E50] text-white p-6 rounded-lg shadow'>
                            <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
                            <p><strong>Office:</strong> 123 Business District, Suite 456, NY 10001</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Email:</strong> info@propertyhub.com</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow'>
                            <h4 className="text-xl font-semibold mb-6 mt-10">Quick Contact</h4>
                            <button className="w-full bg-gray-600  hover:bg-gray-700 text-white py-2 rounded mb-2">Chat on WhatsApp</button>
                            <button className="w-full bg-blue-900  hover:bg-gray-800 text-white py-2 rounded">Live Chat Support</button>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-2">Business Hours</h4>
                            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Platform Support</h3>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="bg-[#2C3E50] text-white p-6 rounded-lg shadow text-center">
                                <h4 className="font-bold text-white">FAQ</h4>
                                <p className="text-white">Find quick answers to common questions.</p>
                                <button className="text-blue-500 mt-2">View FAQ</button>
                            </div>
                            <div className="bg-[#2C3E50] text-white p-6 rounded-lg shadow text-center">
                                <h4 className="font-bold text-white">Technical Support</h4>
                                <p className="text-white">Get help with issues and platform functionality.</p>
                                <button className="text-blue-500 mt-2">Get Support</button>
                            </div>
                            <div className="bg-[#2C3E50] text-white p-6 rounded-lg shadow text-center">
                                <h4 className="font-bold text-white">Partnership</h4>
                                <p className="text-white">Interested in partnering with us?</p>
                                <button className="text-blue-500 mt-2">Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}