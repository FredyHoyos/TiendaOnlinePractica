import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/config/prisma';


export default async function handler (req: NextApiRequest, res: NextApiResponse){
    switch(req.method){
        case 'GET':
            const users = await prisma.user.findMany();
            res.status(200).json(users);
            break;
        case 'POST':
            const {name, email} = req.body;
            if(!name || !email){
                res.status(400).json({error: 'Name and email are requiered'});
                return;
            }
            const newUser = await prisma.user.create({
                        data:{
                            name,
                            email,
                            role: "USER"
                        }
                    })
                    res.status(201).json(newUser);
                    break;
        case 'PUT':
            const {id, updateUser} = req.body;
            if(!id || !updateUser){
                res.status(400).json({error: 'ID and update data are requiered'});
                return;
            }
            const updatedUser = await prisma.user.update ({
                    where: {
                    id: id,
                },
                data: updateUser,
    
            });
            res.status(200).json(updatedUser);
            break;
        case 'DELETE':
            const {userId} = req.body;
            if(!userId){
                res.status(400).json({error: 'User ID is required'});
                return;
            }
            await prisma.user.delete({
                where: {
                    id: userId,
                }
            });
            res.status(204).end();
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).json({error: `Method ${req.method} Not Allowed`});
            break;
     }
            
}