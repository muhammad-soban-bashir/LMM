import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormControllers = ({ formController, formData, setFormData }) => {
  const renderFormComponnetsByType = (item) => {
    let element = null;
    const value = formData[item.name] || "";
    switch (item.type) {
      case "input":
        element = (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            value={value}
            onChange={(e) => {
              setFormData({
                ...formData,
                [item.name]: e.target.value,
              });
            }}
          />
        );
        break;
      case "select":
        element = (
          <Select
            onValueChange={(value) => {
              setFormData({
                ...formData,
                [item.name]: value,
              });
            }}
            value={value}
          >
            <SelectTrigger>
              <SelectValue placeholder={item.placeholder}></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {item.options.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

        break;

      case "textarea":
        element = (
          <Textarea
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            value={value}
            onChange={(e) => {
              setFormData({
                ...formData,
                [item.name]: e.target.value,
              });
            }}
          />
        );
        break;

      default:
        element = (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            value={value}
            onChange={(e) => {
              setFormData({
                ...formData,
                [item.name]: e.target.value,
              });
            }}
          />
        );
        break;
    }

    return element;
  };
  return (
    <div>
      {formController && formController.length > 0
        ? formController.map((controleItem) => (
            <div className="flex flex-col m-2  gap-2" key={controleItem.name}>
              <label className="text-black " htmlFor={controleItem.name}>
                {controleItem.label}
              </label>
              {renderFormComponnetsByType(controleItem)}
            </div>
          ))
        : null}
    </div>
  );
};

export default FormControllers;
