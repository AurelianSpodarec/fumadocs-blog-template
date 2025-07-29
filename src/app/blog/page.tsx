import { sourceBlog } from "@/lib/source";
import Link from "next/link";

function Blog() {
  const pages = sourceBlog.getPages();
  console.log(pages)
  return (
    <div>
      <h1>Blog</h1>
      <div className="grid grid-cols-3">
        {pages.map((item) => {
          return (
            <Link key={item.url} href={item.url}>
              <h2>{item.data.title}</h2>
              <img src={item.data.thumbnail} />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Blog