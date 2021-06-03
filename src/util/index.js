export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Loading = () => (
  <div
    className="spinner-border"
    role="status"
    style={{ width: "20px", height: "20px", borderWidth: "2px" }}
  >
    <span className="sr-only">Loading...</span>
  </div>
);
