import { collectionsNameObj, dbConnect } from "@/lib/dbConnect";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const ServicesSection = async () => {
    const data = await dbConnect(collectionsNameObj.servicesDb).find({}).toArray()

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full h-full gap-6">
            {data.map(service => (
                <div key={service?._id} className="border p-5 rounded-xl border-gray-300 ">
                    <div>
                        <img src={service?.img} className="w-full" alt={service?.title} />
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold">{service?.title}</h3>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-[#FF3811]">Price : {service?.price}</h3>
                            <Link href={`/services/${service._id}`}>
                                <FaArrowRight className="text-[#FF3811]" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesSection;
