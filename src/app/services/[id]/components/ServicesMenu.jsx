"use client"
import { useState } from "react";

const services = [
    { name: 'Full Car Repair', active: true },
    { name: 'Engine Repair', active: false },
    { name: 'Automatic Services', active: false },
    { name: 'Engine Oil Change', active: false },
    { name: 'Battery Charge', active: false },
];
const ServicesMenu = () => {
    const [activeService, setActiveService] = useState('Full Car Repair');
    return (
        <div>
            <div className="p-6 bg-gray-100 rounded-lg w-full">
                <h2 className="text-lg font-bold mb-4">Services</h2>
                <div className="space-y-2">
                    {services.map((service) => (
                        <button
                            key={service.name}
                            onClick={() => setActiveService(service.name)}
                            className={`w-full cursor-pointer text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all 
              ${activeService === service.name ? 'bg-[#FF3811] text-white' : 'bg-white text-black hover:bg-gray-200'}`}
                        >
                            {service.name}
                            <span className="text-xl">→</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesMenu;