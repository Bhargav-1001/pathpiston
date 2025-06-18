import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const body = await req.json();
    const { model, specs, photo } = body;

    const updatedBike = await prisma.bike.update({
        where: { id },
        data: { model, specs, photo }
    });

    return NextResponse.json(updatedBike);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    await prisma.bike.delete({ where: { id } });

    return NextResponse.json({ message: 'Bike deleted' });
}
