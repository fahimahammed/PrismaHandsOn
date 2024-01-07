import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const userCreateInfo = await prisma.user.createMany({
        data: [
            {
                age: 12,
                name: "Søren Bramer-Schmidt",
                email: "schmidt@prisma.io",
                role: "ADMIN",
                country: "Germany",
            },
            {
                age: 7,
                name: "Nikolas Burk",
                email: "burk@prisma.io",
                country: "Germany",
            },
        ],
    });

    console.log("Created users: ", userCreateInfo.count);
}

main()
    .catch(err => console.error(err))