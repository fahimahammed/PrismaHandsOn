import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    console.log("Project Running successfully!")
}

main()
    .catch(err => console.error(err))