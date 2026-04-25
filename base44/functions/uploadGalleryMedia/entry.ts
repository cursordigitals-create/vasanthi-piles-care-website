import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Admin access required' }, { status: 403 });
    }

    const formData = await req.formData();
    const file = formData.get('file');
    const title = formData.get('title');
    const type = formData.get('type');
    const category = formData.get('category');

    if (!file || !title || !type || !category) {
      console.log('Missing fields:', { file: !!file, title, type, category });
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const uploadResult = await base44.integrations.Core.UploadFile({ file });

    const galleryItem = await base44.entities.GalleryItem.create({
      title: String(title),
      mediaUrl: uploadResult.file_url,
      type: String(type),
      category: String(category)
    });

    return Response.json({
      success: true,
      item: galleryItem
    });
  } catch (error) {
    console.error('Upload error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});