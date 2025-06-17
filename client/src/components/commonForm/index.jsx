import React from 'react'
import { Button } from '../ui/button'
import FormControllers from './formHandler'

const CommonForm = ({buttonText,formController,formData,setFormData,handleSubmit}) => {

    console.log(formData)
  return (
  <div className='flex flex-col gap-2'>

    <form onSubmit={handleSubmit}>
      {/* formController */}
      <FormControllers formController={formController} formData={formData} setFormData={setFormData}/>

      <Button type="submit" className="w-full mt-4">{buttonText  || "submit"}  </Button>
      
      </form>
  </div>
  )
}

export default CommonForm