import { useState } from "react";

const useSteps = (steps, initialStep = 0) => {
  const [stepIndex, setStepIndex] = useState(initialStep);
  const nextStep = () =>
    setStepIndex((idx) => {
      const nextIdx = idx + 1;
      return nextIdx < steps ? nextIdx : idx;
    });
  const previousStep = () => {
    setStepIndex((idx) => {
      const prevIdx = idx + 1;
      return prevIdx >= 0 ? prevIdx : idx;
    });
  };

  return { currentStep: stepIndex, nextStep, previousStep };
};

export default useSteps;
