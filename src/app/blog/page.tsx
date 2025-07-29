import { source } from "@/lib/source";
import Link from "next/link";

function Blog() {
  const pages = source.getPages();
  console.log(pages)
  return (
    <div>
      <h1>Blog</h1>
      {/* <div>
        {pages.map((item) => {
          return (
            <Link href={item.url}>
              <h2>{item.data.title}</h2>

            </Link>
          )
        })}
      </div> */}
    </div>
  );
}

export default Blog