import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
export default function CheckItemCarosel(props) {
  const items = props.items;
  const [count, setCount] = useState(6);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCounter) => prevCounter + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function createHtml(count) {
    let list = "";
    list = items.slice(0, 6).map((item, index) => {
      return index == count % 6 ? (
        <input
          type="radio"
          name="slides"
          id={`slide-${index}`}
          key={uuid()}
          defaultChecked="checked"
        />
      ) : (
        <input type="radio" name="slides" id={`slide-${index}`} key={uuid()} />
      );
    });
    return list;
  }
  return <>{createHtml(count)}</>;
}
