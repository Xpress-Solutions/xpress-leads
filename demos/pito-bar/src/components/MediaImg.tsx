import { useState, type ImgHTMLAttributes } from "react";

export function MediaImg({
  className = "",
  onLoad,
  onError,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [ready, setReady] = useState(false);

  return (
    <img
      {...rest}
      className={`${className} ${ready ? "is-ready" : "is-pending"}`.trim()}
      onLoad={(event) => {
        setReady(true);
        onLoad?.(event);
      }}
      onError={(event) => {
        setReady(true);
        onError?.(event);
      }}
    />
  );
}
