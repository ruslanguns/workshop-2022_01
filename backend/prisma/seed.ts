import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const result = await prisma.user.create({
    data: {
      title: 'Mi primer imagen',
      imageId: '/image.jpg',
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
