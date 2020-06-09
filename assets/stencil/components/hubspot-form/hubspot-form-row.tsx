import {FunctionalComponent, h} from '@stencil/core';

interface rowProps {
  label: string,
  placeholder: string,
  hidden: boolean,
  fieldType: string,
  name: string,
}

export const HubspotFormRow: FunctionalComponent<rowProps[]> = ( props ) => {
  return (
    <fieldset>
      <p>woohoo</p>
      {/* {props.map(({label, placeholder, hidden, fieldType, name}) => {
        label ?
        <label>{label}</label> : '';
        <input placeholder={placeholder} type={fieldType} hidden={hidden} name={name}/>
      })} */}
    </fieldset>
  )
}
