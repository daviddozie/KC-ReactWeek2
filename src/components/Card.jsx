import React from 'react';
import userIcon from '../assets/images/user_icon_img.png';

const Card = ({ title, name, age, location, hobbies, onClose }) => {
    return (
        <div className="card p-4 border border-gray-300 rounded-lg shadow-md relative">
            <div className="flex justify-between">
                <h4 className="font-extrabold">{title}</h4>
                <button
                    className="absolute top-2 right-2 bg-[#FE5962] text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={onClose}
                >
                    X
                </button>
            </div>
            <div className="bg-gray-200 rounded-lg mt-9 p-3">
                <div className="flex gap-6">
                    <img src={userIcon} alt="user" className="w-12 h-12" />
                    <div>
                        <h5 className="font-medium text-gray-600 text-sm">{name}</h5>
                        <h3 className="text-black font-medium text-sm">{age}</h3>
                    </div>
                </div>
                <h2 className="my-6 font-bold text-gray-700">{location}</h2>
                <div>
                    <ul className="grid grid-cols-3 gap-2">
                        {hobbies.map((hobby, index) => (
                            <li key={index} className="my-2 p-[5px] bg-blue-300 text-blue-800 text-center rounded-2xl">
                                {hobby}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
