
import { Chart } from './chart';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { React } from 'react';

it("renders loading icon when isLoading is true",()=>{
    const {container} = render(<Chart isLoading={true} />)
    console.log(container.firstChild)
})

it("renders container when isLoading is false",()=>{

})