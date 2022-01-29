import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const result = await prisma.user.create({
    data: {
      title: 'Mi primer imagen',
      imageUrl: '/image.jpg',
      description: 'Eiusmod velit aute dolore anim pariatur nisi.',
    },
  });

  console.log('Seed realizado', result);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
