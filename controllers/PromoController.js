import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const index = async(req, res) => {
    try {
        const data = await prisma.promo.findMany()
       res.json(data)
    } catch (error) {
        console.error(`Error creating promo:`, error);
    }
};

const storePromo = async (req,res) => {
    try {
        const { name, email, telp} = req.body;
        const newPromo = await prisma.promo.create({
            data: {name, email, telp}
        });

        res.json({message: 'data masuk'});
    } catch (error) {
        console.error(`Error creating promo:`, error);
    }
};

const deletePromo = async (req,res) => {
    try {
        const { id } = req.params;
        const newPromo = await prisma.promo.delete({
            where:{id: parseInt(id)}
        });

        res.json({message: `data dengan id ${id} terhapus`});
    } catch (error) {
        console.error(`Error creating promo:`, error);
    }
};


export default {index, storePromo, deletePromo}