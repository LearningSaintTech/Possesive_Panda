import { blogPosts } from '../blog/Data';

export default function handler(req, res) {
  const { tags } = req.query;
  if (!tags) {
    res.status(400).json({ error: 'Tags query parameter is required' });
    return;
  }

  const tagArray = tags.split(',').map(tag => tag.trim());
  const filteredPosts = blogPosts.filter(post =>
    post.tags.some(tag => tagArray.includes(tag))
  );

  res.status(200).json(filteredPosts);
}
