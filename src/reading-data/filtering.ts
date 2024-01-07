import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

const main = async () => {
    // AND
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



    console.log(posts)
}

main()
    .catch(err => console.error(err))