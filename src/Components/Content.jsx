import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../Redux/GetData";

const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const { isLoading, contents, error } = useSelector((state) => state.content);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return error;
  }
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        padding: "1rem",
      }}
    >
      {contents.slice(0, 20).map((content) => (
        <div key={content.id} style={{ position: "relative" }}>
          <img
            src={`${content.thumbnailUrl}`}
            alt={`${content.title}`}
            style={{ width: "100%", height: "100%", borderRadius: "0.25rem" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Content;
