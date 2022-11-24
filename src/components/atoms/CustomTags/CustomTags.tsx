import React, { useState } from "react";

import Icon from "../Icons";

interface CustomTagsProps {
  tags: Array<any>;
  setTags: Function;
}

const CustomTags: React.FC<CustomTagsProps> = ({ tags, setTags }) => {
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const handleKeyDown = (e: any) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;

    // Return if no word is inputed
    if (!value.trim()) return;

    // Update Tags
    setTags([...tags, value]);

    // Reset value
    e.target.value = "";
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  return (
    <>
      <div className="tags-input-container">
        {tags.map((tag: any, index: number) => (
          <div className="tag-item" key={index}>
            <span className="text text-14">{tag}</span>
            <span className="close" onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}
        <input className="tags-input focus:ring-0" onKeyDown={handleKeyDown} placeholder="Enter tags" type="text" />
      </div>
      <div className="flex items-center cursor-pointer mt-4 relative" onMouseLeave={() => setShowHelp(false)}>
        <Icon className="mr-4" name="info" />
        <span className="underline text-asoebiPurple-800 text-14" onMouseEnter={() => setShowHelp(true)}>
          what are tags?
        </span>
        {showHelp && (
          <div className="absolute top-8 smallLaptop:left-[30%] text-14 text-asoebiGray-150 w-[18.188rem] h-[6.563rem] p-[0.625rem] rounded-[0.25] bg-asoebiGray-160 shadow-tags">
            Tags are optional, but are a great way to enable your guests make a choice of the product to select from your booking. Enter short terms separated by comma.
          </div>
        )}
      </div>
    </>
  );
};

export default CustomTags;
