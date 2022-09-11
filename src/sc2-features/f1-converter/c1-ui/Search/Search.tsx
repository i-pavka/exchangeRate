import React, {useEffect, useState} from 'react';
import {convertDataAC} from "../../c2-bll/convertReducer";
import {useAppDispatch} from "../../../../sc1-main/m2-bll/store";
import {parsInputData} from "../../../../sc3-utils/utilityFunctions";
import {InputText} from "../../../../sc1-main/m1-ui/common/components/InputText/InputText";

export const Search = ({setIncorrectValue}: {setIncorrectValue: (value: string) => void}) => {

  const dispatch = useAppDispatch();
  const [convertValue, setConvertValue] = useState('');

  useEffect(() => {
    const id: number = +setTimeout(() => {
      convertInputHandler();
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [convertValue])

  const convertValueHandler = (value: string) => {
    setConvertValue(value);
  }

  const convertInputHandler = () => {
    const inputData = parsInputData(convertValue);
    if (convertValue === "") {
      setIncorrectValue("");
      return;
    }
    if (inputData) {
      dispatch(convertDataAC(inputData));
      setIncorrectValue("");
    } else {
      setIncorrectValue("incorrect value");
    }
  }

  return (
    <div>
      <InputText
        value={convertValue}
        placeholder='convert...'
        onChangeText={convertValueHandler}
        onEnter={convertInputHandler}
      />
    </div>
  );
};
