import React from "react";

export default function Button({name, link}) {
  return (
   <a href={link} target ="blank"> <button className="button">{name}</button></a>
  )
}
