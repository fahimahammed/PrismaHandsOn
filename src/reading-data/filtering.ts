import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

const main = async () => {
    // AND & contains
    const posts = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: 'first',
                        mode: 'insensitive'
                    }
                },
                {
                    published: true
                }
            ]
        }
    });

    // Equality
    const techCategoryPosts = await prisma.category
        .findFirst({
            where: {
                name: { contains: "Technology" }
            },
        })
        .posts();

    // Greater than
    const users = await prisma.user.findMany({
        where: {
            age: {
                gt: 250
            },
        },
    });

    // In array
    const usersInArray = await prisma.user.findMany({
        where: { age: { in: [26, 30, 35] } },
    });

    // NOT
    const postsWithNot = await prisma.post.findMany({
        where: { NOT: [{ title: { contains: "Prisma" } }, { published: true }] },
    });

    console.log(postsWithNot)
}

main()
    .catch(err => console.error(err))