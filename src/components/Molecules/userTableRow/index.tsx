import React from 'react'
import { Trash2, Edit2 } from 'lucide-react';

interface user {
    user:{
        id: number;
        name: string;
        email: string;
        delete: boolean;
        enable: boolean;
        createAt: string;
        updateAt: string;
        image: string;
        role: string;
    }[];
}


const Index = ({user}: user) => {
  return (
                                <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">
                                            <img className="object-cover w-10 h-10 rounded-full" src={user.image || 'http:/via.placeholder.com/150'} 
                                            alt={user.name || 'Avatar image'}/>
                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">{user.name}</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    
                                    {user.enabled ?(
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                            <h2 className="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>

                                    ):(
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-200/60 dark:bg-gray-800">
                                            <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                                            <h2 className="text-sm font-normal text-red-400">Inactive</h2>
                                        </div>

                                    )}      
                                    
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{user.role}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{user.email}</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                                                            {user.delete ?(
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">True</p>
                                        </div>

                                    ):(
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-200/60 dark:bg-gray-800">
                                            <p className="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">False</p>
                                        </div> 

                                    )}
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                            <Trash2 width={24} height={24} />
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                            <Edit2 width={24} height={24} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
  )
}

export default Index