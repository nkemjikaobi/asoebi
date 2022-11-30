import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDropzone } from "react-dropzone";

import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import FormikCustomCheckbox from "@components/atoms/FormikCustomCheckbox/FormikCustomCheckbox";
import FormikCustomSelect from "@components/atoms/FormikCustomSelect/FormikCustomSelect";
import Icon from "@components/atoms/Icons";

import "react-datepicker/dist/react-datepicker.css";
import BookingCartItems from "../BookingCartItems/BookingCartItems";

const BookingDetails = () => {
  const { getRootProps, getInputProps } = useDropzone();
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    // todo
  };

  const initialState = {
    eventType: "",
    isByInvitation: false,
  };

  interface Values {
    eventType: string;
    isByInvitation: boolean;
  }

  const eventTypes = [
    {
      id: 1,
      text: "Wedding",
      value: "wedding",
    },
    {
      id: 2,
      text: "Birthday",
      value: "birthday",
    },
    {
      id: 3,
      text: "Convocation",
      value: "convocation",
    },
  ];

  return (
    <div className="mr-6 w-[50%] normalLaptop:w-[60%]">
      <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={null}>
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="relative space-y-[2.313rem]">
              <div className="relative">
                <div>
                  <CustomLabel className="text-16" title="Invite Cover Page" />
                  <div
                    className="w-[21.438rem] mt-4 tablet:w-full h-[9.75rem] tablet:h-[12.5rem] flex justify-center flex-col items-center cursor-pointer "
                    id="upload"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <div className="flex justify-center mb-[2.125rem]">
                      <Icon className="block text-center" name="cloud" />
                    </div>
                    <p className="text-13 font-medium">
                      Drag and drop files or <span className="text-asoebiPurple-800">Browse</span>
                    </p>
                  </div>
                </div>
                <div className="block mt-4 tablet:hidden">
                  <BookingCartItems />
                </div>
                <div className="flex tablet:items-center flex-col tablet:flex-row w-full justify-between">
                  <div className="mt-8 w-[21.313rem] tablet:w-[17.438rem] mr-[0.625rem] normalLaptop:mr-0">
                    <CustomLabel className="text-14" title="Purchase End Date" />
                    <DatePicker
                      customInput={
                        <CustomInput
                          className="border rounded-[0.125rem] h-12 mr-4 mt-4 mb-4"
                          container="!pl-[1.688rem]"
                          icon="calendar"
                          iconClass="hover:cursor-pointer"
                          iconposition="start"
                          inputClassName="placeholder:text-xs normalLaptop:placeholder:text-14"
                          name="purchaseStartDate"
                          onChange={() => {}}
                          required
                          type="text"
                          value=""
                        />
                      }
                      dateFormat="yyyy-MM-dd"
                      id="startDate"
                      minDate={new Date()}
                      name="purchaseStartDate"
                      onChange={(date: Date) => setStartDate(date)}
                      placeholderText="Select start date."
                      required
                      selected={startDate}
                    />
                  </div>
                  <div className="mt-8 w-[21.313rem] tablet:w-[17.438rem]">
                    <CustomLabel className="text-14" title="Type of Event" />
                    <FormikCustomSelect
                      className="h-12 text-xs normalLaptop:text-14"
                      name="eventType"
                      options={eventTypes}
                      parentContainer="my-4"
                      placeholder="Select Event Type"
                    />
                  </div>
                </div>
                <div className="w-[14.688rem] mb-8 mt-4 capitalize text-asoebiGray-700">
                  <FormikCustomCheckbox
                    className="text-14 rounded-lg"
                    label="check this box if the event is strictly by invitation"
                    labelClassName="text-12 tablet:text-14 font-normal whitespace-nowrap"
                    labelPosition="end"
                    name="isByInvitation"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="hidden tablet:block">
        <BookingCartItems />
      </div>
    </div>
  );
};

export default BookingDetails;
