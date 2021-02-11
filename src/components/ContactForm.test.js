import React from 'react';
import {render, screen} from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';



test("renders without errors", () => {
    render(<ContactForm/>);
});