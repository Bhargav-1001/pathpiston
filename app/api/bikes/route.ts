import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) return NextResponse.json({ error: 'userId is required' }, { status: 400 });

    const bikes = await prisma.bike.findMany({ where: { userId: parseInt(userId) } });
    return NextResponse.json(bikes);
}

export async function POST(req: Request) {
    const body = await req.json();
    const { model, specs, photo, userId } = body;

    if (!model || !userId) return NextResponse.json({ error: 'Model and userId are required' }, { status: 400 });

    const newBike = await prisma.bike.create({
        data: { model, specs, photo, userId: parseInt(userId) }
    });

    return NextResponse.json(newBike, { status: 201 });
}
