import React from 'react'
import {Input, Button, Select} from "./Style"

const Form = () => {
  return (
    <div>
      <form>
      <Input type="text" placeholder='Search' />
      <Select>
        <option value="Breakfast" hidden>
          Breakfast
        </option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
      </Select>
      <Button type='submit'>Search</Button>
      </form>
    </div>
  )
}

export default Form