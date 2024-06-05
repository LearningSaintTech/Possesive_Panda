import Image from "next/image";

const BlogPost = ({ post }) => (
  <div className="border border-gray-500 shadow-md rounded-lg">
    <Image
      src={post.image}
      alt="shadow"
      className="w-full h-auto rounded-t-lg"
    />
    <div className="p-4">
      <p className="text-blue-500 text-xl font-medium leading-7 tracking-wide">
        {post.categories}
      </p>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-900 text-lg leading-normal tracking-normal">
        {post.content}
      </p>
      <div className="flex justify-between border-t border-gray-500 mt-4 pt-2 opacity-50">
        <p>{post.writtenBy}</p>
        <p>{post.date}</p>

      </div>
      <p className="text-sm text-gray-500 mt-2">
        <strong>Tags:</strong> {post.tags.join(', ')}
      </p>
    </div>
  </div>
);

export default BlogPost;
