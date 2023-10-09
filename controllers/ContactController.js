import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const index = async (req, res) => {
  try {
    const data = await prisma.contact.findMany();
    res.json(data);
  } catch (error) {
    console.error(`Error creating contact:`, error);
  }
};

const storeContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = await prisma.contact.create({
      data: { name, email, message },
    });

    res.json({ message: "data masuk" });
  } catch (error) {
    console.error(`Error creating contact:`, error);
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const newContact = await prisma.contact.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: `data dengan id ${id} terhapus` });
  } catch (error) {
    console.error(`Error creating contact:`, error);
  }
};

export default { index, storeContact, deleteContact };
