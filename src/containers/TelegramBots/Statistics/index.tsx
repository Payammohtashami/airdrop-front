import React from 'react';
import CountUp from 'react-countup';

const Statistics: React.FC = () => {
    const card = [
        {
            id: 1,
            value: 400,
            color: '#84DCC6',
            title: "Active Users",
        },
        {
            id: 2,
            value: 300,
            color: '#FF686B',
            title: "Positive Comment",
        },
        {
            id: 3,
            value: 300,
            color: '#9381FF',
            title: "Order",
        },
        {
            id: 4,
            value: 400,
            color: '#F6CB2B',
            title: "Min. Order",
        },
    ];
    return (
        <div className='grid grid-cols-4 mt-24 gap-3'>
            {card.map((item, index) => (
                <div key={item.id} style={{boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.05)'}} className=' bg-white col-span-2 lg:col-span-1 rounded-xl p-6 lg:p-8 flex flex-col items-center justify-center'>
                    <h3 className='text-5xl font-bold' style={{color: item?.color}}>
                        <CountUp
                            end={item.value} 
                            duration={2.75}
                        />
                    </h3>
                    <div className='w-full flex items-center h-[1px] bg-slate-100 my-3'>
                        <small className='rounded-xl w-1/4 h-1' style={{background: item?.color, marginLeft: `${25 * index}%`}}></small>
                    </div>
                    <h5 className='font-medium'>{item.title}</h5>
                </div>
            ))}
        </div>
    );
};

export default Statistics;