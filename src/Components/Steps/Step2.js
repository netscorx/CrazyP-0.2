import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../store/helpers/helpersSlice";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_STEP2_SCHEMA } from "./Settings/Schemes";
import QuestionIco from "../Theme/Icons/Question";
// import CustomSelect from "./Settings/CustomElements/CustomSelect";

export default function Step2() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.helpers.step);

  return (
    <div class="items-start pb-[166px]">
      <Formik
        initialValues={{
          FavoriteCharter: "",
          TimeOfSettings: "",
          PlaceOfSettings: "",
          AmountCharacter: "",
          PointOfView: [],
        }}
        validationSchema={STORY_BOOK_STEP2_SCHEMA}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div class="w-[550px] pb-[32px] left-0">
              <div class="flex flex-col gap-[10px] start pb-[17px]">
                <h2 class="font-textSec text-text-color text-[20px]">
                  Your Favorite Character
                </h2>
                <p class="font-textSec text-text-color text-[12px]">
                  Example: Harry Potter, Sherlock Holmes
                </p>
              </div>
              <Field
                component="input"
                data-testid="FavoriteCharter"
                name="FavoriteCharter"
                label="FavoriteCharter"
                type="text"
                placeholder="Favorite Character"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="FavoriteCharter" component="div" />
              <div class="flex flex-col gap-[10px] start pb-[17px] pt-[48px]">
                <h2 class="font-textSec text-text-gray text-[16px]">
                  Settings
                </h2>
                <h2 class="font-textSec text-text-color text-[20px]">
                  Time of Setting
                </h2>
                <p class="font-textSec text-text-color text-[12px]">
                  Example: Medieval, Modern-Day, Future, Japanese imperial era
                </p>
              </div>
              <Field
                component="input"
                data-testid="TimeOfSettings"
                name="TimeOfSettings"
                label="TimeOfSettings"
                type="text"
                placeholder="Time of Settings"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="TimeOfSettings" component="div" />
              <div class="flex flex-col gap-[10px] start pb-[17px] pt-[32px]">
                <h2 class="font-textSec text-text-color text-[20px]">
                  Place of Setting
                </h2>
                <p class="font-textSec text-text-color text-[12px]">
                  Example: Magic World, Castle, Future, Japanese imperial era
                </p>
              </div>
              <Field
                component="input"
                data-testid="PlaceOfSettings"
                name="PlaceOfSettings"
                label="PlaceOfSettings"
                type="text"
                placeholder="Place of Settings"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="PlaceOfSettings" component="div" />
              <div class="flex flex-col gap-[10px] start pb-[17px] pt-[48px]">
                <h2 class="font-textSec text-text-gray text-[16px]">
                  Element of Story
                </h2>
                <h2 class="font-textSec text-text-color text-[20px]">
                  Amount Character
                </h2>
              </div>
              <Field
                component="input"
                data-testid="AmountCharacter"
                name="AmountCharacter"
                label="AmountCharacter"
                type="number"
                placeholder="0"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="AmountCharacter" component="div" />
              <div class="flex flex-col gap-[10px] start pb-[17px] pt-[32px]">
                <h2 class="font-textSec text-text-color text-[20px]">
                  Point of View
                </h2>
                <div class="flex items-center gap-[8px]">
                  <p class="font-textSec text-text-color text-[12px]">
                    First Person
                  </p>
                  <QuestionIco />
                </div>
                <div class="flex items-center gap-[8px]">
                  <p class="font-textSec text-text-color text-[12px]">
                    Second Person
                  </p>
                  <QuestionIco />
                </div>
                <div class="flex items-center gap-[8px]">
                  <p class="font-textSec text-text-color text-[12px]">
                    Third Person
                  </p>
                  <QuestionIco />
                </div>
              </div>
              <Field
                component="select"
                data-testid="PointOfView"
                name="PointOfView"
                label="PointOfView"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              >
                <option value="First Person">First Person</option>
                <option value="Second Person">Second Person</option>
                <option value="Third Person">Third Person</option>
              </Field>
              {/* <Field
                component={CustomSelect}
                data-testid="PointOfView"
                name="PointOfView"
                label="PointOfView"
                options={["First Person", "Second Person", "Third Person"]}
              /> */}
            </div>
            <div class="flex justify-between">
              <button
                onClick={() => {
                  dispatch(setStep(step - 1));
                }}
                class="text-regular text-[18px] text-textSec"
              >
                Back
              </button>
              <button
                class="btn flex items-center"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  dispatch(setStep(step + 1));
                }}
              >
                next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
