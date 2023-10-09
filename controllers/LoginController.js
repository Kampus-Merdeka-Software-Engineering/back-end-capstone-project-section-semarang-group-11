import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const index = async (req, res) => {
  try {
    const data = await prisma.login.findMany();
    res.json(data);
  } catch (error) {
    console.error(`Error creating promo:`, error);
  }
};

const storeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newLogin = await prisma.login.create({
      data: { email, password },
    });

    res.json({ message: "data masuk" });
  } catch (error) {
    console.error(`Error creating promo:`, error);
  }
};

const deleteLogin = async (req, res) => {
  try {
    const { id } = req.params;
    const newLogin = await prisma.login.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: `data dengan id ${id} terhapus` });
  } catch (error) {
    console.error(`Error creating promo:`, error);
  }
};

export default { index, storeLogin, deleteLogin };
