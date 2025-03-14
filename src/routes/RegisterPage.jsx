import { SignUp } from '@clerk/clerk-react';
import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <SignUp signInUrl='/login'/>
        </div>
    );
};

export default RegisterPage;