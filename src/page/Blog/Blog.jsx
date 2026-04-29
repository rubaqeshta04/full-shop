import React, { useEffect, useState } from "react";
import PageTransition from "../../components/PageTransition";
import { Container, Skeleton } from "@mui/material";
import { fetchBlogs } from "../../api/api";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs
      .get("/posts")
      .then((res) => {
        setPosts(res.data || []);
      })
      .catch((error) => {
        console.error("Failed to load blog posts:", error);
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Skeleton variant="rectangular" width={300} height={100} />
      </div>
    );
  }

  return (
    <PageTransition>
      <Container className="py-12">
        <section className="mb-10 rounded-[32px] border border-(--border_color) bg-white p-8 shadow-sm">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.24em] text-(--main_color) mb-3">
            Blog
          </span>
          <h1 className="text-4xl font-bold text-(--color_heading) mb-4">
            Latest Articles & Tech Tips
          </h1>
          <p className="max-w-2xl text-gray-600">
            Browse a collection of API-powered articles to discover new
            products, tech insights, and styling tips for accessories.
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 12).map((post) => (
            <article
              key={post.id}
              className="rounded-[28px] border border-(--border_color) bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-(--color_heading) mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mb-5 max-h-24 overflow-hidden">
                {post.body}
              </p>
              <button className="inline-flex rounded-full bg-(--main_color) px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                Read More
              </button>
            </article>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
