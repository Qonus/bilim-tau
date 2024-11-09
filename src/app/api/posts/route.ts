// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import {clientPromise} from '../../../../lib/mongodb';

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const title = data.get('title') as string;
    const description = data.get('description') as string;
    
    // Parse `tags` from JSON string to array of strings
    const tags = JSON.parse(data.get('tags') as string) as string[];

    const files = data.getAll('files') as File[];

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('posts');

    // Process files (example only; actual file storage may vary)
    const uploadedFiles = files.map((file) => ({
      filename: file.name,
      contentType: file.type,
      size: file.size,
      // Placeholder for file storage path or URL
      path: `/uploads/${file.name}`,
    }));

    const newPost = {
      title,
      description,
      tags,
      files: uploadedFiles,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newPost);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to create post' });
  }
}
