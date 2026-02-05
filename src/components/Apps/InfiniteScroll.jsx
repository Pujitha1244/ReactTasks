import { useEffect, useRef, useState, useCallback } from "react";

const fetchData = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
  );
  if (!res.ok) throw new Error("API Error");
  return res.json();
};

export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading],
  );

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      try {
        setLoading(true);
        const newData = await fetchData(page);
        if (!ignore) setItems((prev) => [...prev, ...newData]);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
    return () => (ignore = true);
  }, [page]);

  return (
    <>
      <h3>Infinite Scroll</h3>

      {items.map((item, index) => (
        <div
          key={item.id}
          ref={index === items.length - 1 ? lastItemRef : null}
          style={{ padding: 10, border: "1px solid gray" }}
        >
          {item.title}
        </div>
      ))}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
