"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../Navbar/Categories";
import CategoryBox from "../Inputs/CatergoryInputs";
import CatergoryInput from "../Inputs/CatergoryInputs";
import { FieldValues, useForm } from "react-hook-form";

enum STEPS {
  Category = 0,
  Location = 1,
  Info = 2,
  Images = 3,
  Description = 4,
  Price = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.Category);
  const backStep = () => {
    setStep((value) => value - 1);
  };

  const nextStep = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.Price) {
      return "Submit";
    }
    return "Next";
  }, [step]);

  const secondaryLabel = useMemo(() => {
    if (step === STEPS.Category) {
      return undefined;
    }
    return "Back";
  }, [step]);

  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    }
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }
  

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CatergoryInput
              onClick={(category) =>
                setCustomValue('category', category)
              }
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
  

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="actionLabel"
      secondaryActionLabel={secondaryLabel}
      secondaryAction={step === STEPS.Category ? undefined : backStep}
      title="AirBnb Your Home"
    />
  
  );
};

export default RentModal;
