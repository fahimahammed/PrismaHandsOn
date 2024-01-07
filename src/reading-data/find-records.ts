import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // find all
    const findAllData = await prisma.user.findMany();

    // Find first
    const findFirstData = await prisma.user.findFirst({
        where: {
            id: 3,
            role: Role.ADMIN
        }
    });

    // find first or throw
    const findFirstOrThrow = await prisma.user.findFirstOrThrow({
        where: {
            id: 3,
            //email: "user@gmail.com"
        }
    });

    // find unique
    const findUnique = await prisma.user.findUnique({
        where: {
            id: 4
        }
    });

    // find unique or throw
    const findUniqueOrThrow = await prisma.user.findUniqueOrThrow({
        where: {
            id: 3
        }
    });

    // selet fields
    const selectFields = await prisma.user.findFirst({
        where: {
            id: 3
        },
        select: {
            name: true,
            age: true,
            email: true
        }
    })

    console.log(selectFields)
}

main()
    .catch(err => console.error(err))