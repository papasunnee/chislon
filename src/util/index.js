export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Loading = () => (
  <div
    class="spinner-border"
    role="status"
    style={{ width: "20px", height: "20px", borderWidth: "2px" }}
  >
    <span class="sr-only">Loading...</span>
  </div>
);
