import { NextResponse } from 'next/server';
import { client } from '../../../../lib/mongodb';

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const author = data.get('author') as string;
    const title = data.get('title') as string;
    const description = data.get('description') as string;
    const tags = JSON.parse(data.get('tags') as string) as string[];

    // Debug: log received files
    const files = data.getAll('files');
    console.log("Files received:", files);

    const uploadedFiles = files.map((file) => {
      if (file instanceof File) {
        return {
          filename: file.name,
          size: file.size,
          blob: file.bytes,
          type: file.type,
        };
      }
      return null;
    }).filter(Boolean);

    console.log("Parsed files:", uploadedFiles);

    // Connect to MongoDB
    const db = client.db('test');
    const collection = db.collection('posts');

    const newPost = {
      author,
      title,
      description,
      tags,
      likes: 0,
      files: uploadedFiles,  // Adjust for URLs if using cloud storage
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newPost);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ success: false, error: 'Failed to create post' });
  }
}

export async function GET() {
  try {
    const materials = await client.db().collection("posts").find({}).toArray();  // Replace with your actual collection name
    return new Response(JSON.stringify(materials), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch materials:", error);
    return new Response("Failed to fetch materials", { status: 500 });
  }
}
