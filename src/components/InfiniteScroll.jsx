import React, { useState, useEffect, useRef, useCallback } from "react";

const InfiniteScroll = () => {
  const URL = "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
  const ITEMS_PER_PAGE = 10;

  const [allData, setAllData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);

  // Fetch data once
  const fetchJsonData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setAllData(data);
      setVisibleData(data.slice(0, ITEMS_PER_PAGE));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchJsonData();
  }, []);

  // Load more items
  useEffect(() => {
    if (page === 1) return;

    const loadMore = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // simulate delay

      const startIdx = (page - 1) * ITEMS_PER_PAGE;
      const endIdx = startIdx + ITEMS_PER_PAGE;
      const newItems = allData.slice(startIdx, endIdx);

      if (newItems.length > 0) {
        setVisibleData((prev) => [...prev, ...newItems]);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    };

    loadMore();
  }, [page, allData]);

  // Observer for last element
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Infinite Scroll</h2>

      {/* Fixed 500x500 scrollable container */}
      <div className="w-[500px] h-[500px] overflow-y-auto border border-gray-300 p-2 rounded-lg">
        {visibleData.length > 0 ? (
          <div className="flex flex-col gap-2">
            {visibleData.map((data, idx) => {
              if (idx === visibleData.length - 1) {
                return (
                  <div
                    ref={lastItemRef}
                    key={data.id}
                    className="border border-teal-500 p-2 rounded"
                  >
                    {data.name} - {data.id}
                  </div>
                );
              }
              return (
                <div
                  key={data.id}
                  className="border border-teal-500 p-2 rounded"
                >
                  {data.name} - {data.id}
                </div>
              );
            })}
            {loading && (
              <div className="text-center text-gray-500 py-2">Loading...</div>
            )}
            {!hasMore && (
              <div className="text-center text-green-600 font-semibold py-2">
                ✅ All items rendered
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500">Loading initial data...</div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
