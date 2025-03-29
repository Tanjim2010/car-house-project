'use client';

import { FaFileAlt } from 'react-icons/fa';

const downloads = [
    { name: 'Our Brochure', subtitle: 'Download' },
    { name: 'Company Details', subtitle: 'Download' },
];

export default function DownloadSection() {
    return (
        <div className="p-6 bg-black text-white rounded-lg w-full">
            <h2 className="text-lg font-bold mb-4">Download</h2>
            <div className="space-y-4">
                {downloads.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FaFileAlt className="text-xl" />
                            <div>
                                <p className="text-base font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-400">{item.subtitle}</p>
                            </div>
                        </div>
                        <button className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-lg text-white text-xl hover:bg-red-600 transition">
                            →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
