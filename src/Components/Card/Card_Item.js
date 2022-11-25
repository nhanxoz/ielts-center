import React from "react";
import { motion } from "framer-motion";
export default function Card(props) {
  return (
    <motion.div
      className="card-long"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="image">
        <img src={`data:image/jpeg;base64,${props.item.thumnail}`} />
      </div>
      <div className="card-long-content">
        <a href={`${props.url}/${props.item.uuid}`} className="title">
          {props.item.title}
        </a>
        <div className="description">{props.item.summary}</div>
      </div>
    </motion.div>
  );
}
