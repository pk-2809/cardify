import bgImage1 from "../../assets/bgImage1.png";
import { Input, PinInput, Button } from '@mantine/core';
import { At } from 'react-bootstrap-icons';
import "./login.css";

export const Login = () => {
  return (
    <div className="h-screen-full overflow-hidden primary-bg flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 h-1/2 md:h-screen-full grid place-items-center">
        <div className="w-4/5 max-w-md flex flex-col items-center">
          <h1 className="mb-4 font-semibold text-2xl md:text-3xl lg:text-4xl text-white">
            Welcome Back
          </h1>
          <Input placeholder="Your email" className="inpt" autoComplete="off" leftSection={<At size={16} />} />
          <PinInput className="mt-4" length={6} type="number" />
          <Button variant="filled" color="#E385EC" className="mt-6">Get Otp</Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-screen-full grid place-items-center">
        <img
          src={bgImage1}
          alt="logo"
          className="max-h-full w-11/12 max-w-96 lg:max-w-lg overflow-hidden"
        />
      </div>
    </div>
  );
};