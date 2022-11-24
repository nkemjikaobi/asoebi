import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomTags from "@components/atoms/CustomTags/CustomTags";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

interface AddTagsProps {
  setShowTags: Function;
}

const AddTags: React.FC<AddTagsProps> = ({ setShowTags }) => {
  const [tags, setTags] = useState<Array<any>>([]);

  return (
    <div className="bg-white w-[90%] mx-auto smallLaptop:w-[34rem] rounded-lg shadow-approveModal p-6">
      <div className="flex items-center justify-between mt-[0.938rem] mb-4">
        <h4>Tags</h4>
        <Icon className="cursor-pointer" name="close" onClick={() => setShowTags(false)} />
      </div>
      <hr />
      <CustomTags setTags={setTags} tags={tags} />
      <CustomButton
        customClass="w-full mb-[5.25rem] mt-[3.688rem]"
        handleClick={() => {}}
        isDisabled={tags.length === 0}
        size={ButtonProperties.SIZES.small}
        title="Add Tag"
        type="submit"
        variant={ButtonProperties.VARIANT.primary.name}
      />
    </div>
  );
};

export default AddTags;
