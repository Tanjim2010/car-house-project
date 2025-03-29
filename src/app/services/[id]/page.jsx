import { collectionsNameObj, dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';
import ServicesMenu from './components/ServicesMenu';
import DownloadSection from './components/DownloadSection';

const ServiceDetailPage = async ({ params }) => {

    const p = await params.id;
    const data = await dbConnect(collectionsNameObj.servicesDb).findOne({ _id: new ObjectId(p) });

    return (
        <div>
            <section className='relative w-full h-[300px] bg-cover bg-center rounded-xl flex items-center' style={{
                backgroundImage: 'url(/assets/images/banner/4.jpg)'
            }}>
                <h2 className="text-3xl text-white md:px-20 px-4 text-center font-semibold">Service Detail page</h2>
            </section>
            <section className='grid md:grid-cols-3 grid-cols-1 gap-5 md:my-28 my-10'>
                <div className='col-span-2'>
                    <img className='w-full md:h-[400px]' src={data?.img} alt={data.title} />
                    <h2 className='md:text-4xl text-2xl font-bold my-4'>{data?.title}</h2>
                    <p>{data.description}</p>
                    <div className='my-7 grid md:grid-cols-2 gap-4 md:grid-rows-2'>
                        {
                            data?.facility?.map(item => <div key={item?.name} className='bg-[#F3F3F3] p-9 space-y-3 border-t-2 border-[#FF3811] rounded-sm'>
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p>{item.details}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className='space-y-6'>
                    <ServicesMenu></ServicesMenu>
                    <DownloadSection></DownloadSection>
                    <div>
                        <h2 className='text-3xl text-center font-bold'>Price: ${data.price}</h2>
                        <button className='btn btn-block bg-[#FF3811] text-white mt-4'>Proceed CheckOut</button>
                    </div>
                </div>
            </section>
            <h1>
                service detail page id: {p}
            </h1>
            {/* <p>{JSON.stringify(data)}</p> */}
        </div>
    );
};

export default ServiceDetailPage;