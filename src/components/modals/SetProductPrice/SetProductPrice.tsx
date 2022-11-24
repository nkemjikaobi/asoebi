import { Form, Formik, FormikProps } from "formik";
import React from "react";
import * as yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";

import { ButtonProperties, CURRENCIES, errorMessages } from "@shared/libs/helpers";

interface SetProductPriceProps {
  setShowSetPrice: Function;
}

const SetProductPrice: React.FC<SetProductPriceProps> = ({ setShowSetPrice }) => {
  const handleSubmit = () => {};

  const initialState = {
    price: "",
  };

  const SetYourPriceSchema = yup.object().shape({
    price: yup.number().required(errorMessages.required).positive(errorMessages.positiveInteger).integer(errorMessages.integer),
  });

  return (
    <div className="bg-white w-[90%] mx-auto smallLaptop:w-[34rem] rounded-lg shadow-approveModal p-6">
      <div className="flex items-center justify-between mt-[0.938rem] mb-4">
        <h4>Set your price ({CURRENCIES.NAIRA})</h4>
        <Icon className="cursor-pointer" name="close" onClick={() => setShowSetPrice(false)} />
      </div>
      <hr />
      <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={SetYourPriceSchema}>
        {(props: FormikProps<any>) => (
          <Form>
            <div className="h-auto">
              <div className="">
                <div className="mt-8">
                  <CustomLabel className="text-14" title={`Price (${CURRENCIES.NAIRA})`} />
                  <FormikCustomInput min="0" name="price" placeholder="Enter your price" type="number" />
                </div>
              </div>
              <CustomButton
                customClass="w-full mb-[5.25rem] mt-[3.688rem]"
                handleClick={() => {}}
                size={ButtonProperties.SIZES.small}
                title="Set Price"
                type="submit"
                variant={ButtonProperties.VARIANT.primary.name}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SetProductPrice;
