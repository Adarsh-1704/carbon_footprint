import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import InputComponent from "./InputComponent";





function InputCard(props) {
  const icon = props.icon
  const title = props.title;
  const handler = props.handler;
  const [sum, setSum] = useState(0);

  const sumHandler = (val) => {
    setSum(sum + val);
    handler(title , sum)
  }

  let [inputList, setInputList] = useState([1]);

  const addInputComponent = () => {
    let newInputList = [...inputList];
    let count = newInputList.length;
    newInputList.push(count + 1);
    setInputList(newInputList);
  };

  const removeInputComponent = () => {
    let newInputList = [...inputList];
    newInputList.pop();
    setInputList(newInputList);
  };

  let addBtn;
  let removeBtn;
  if (title === "Private Vehicle" || title === "Dairy") {
    addBtn = (
      <button
        className="btn btn-primary"
        onClick={(e) => {
          addInputComponent();
        }}
      >
        <p>+ Add</p>
      </button>
    );
    removeBtn = (
      <button
        className="btn btn-danger"
        onClick={(e) => {
          removeInputComponent();
        }}
      >
        <p>X</p>
      </button>
    );
  }

  return (
    <div className="my-4 mx-4 justify-content-center">
      <Card className="shadow-sm">
        <Card.Header>
          <h4>
            {icon}{title}
          </h4>
          <p>
            {addBtn} {removeBtn}
          </p>
        </Card.Header>
        {inputList.map((curr) => {
          return (
            <div key={curr}>
              {
                <InputComponent title={title} units={props.units}  sumHandler = {sumHandler}/>
              }
            </div>
          );
        })}
        
      </Card>
    </div>
  );
}

export default InputCard;
