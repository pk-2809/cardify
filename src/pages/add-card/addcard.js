import styles from './addcard.module.css';
import { TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { NumberInput } from '@mantine/core';


export const AddCard = () => {
  return (
    <div className='flex justify-center w-full h-full'>
      <div className="my-2 w-11/12 rounded-lg">
        <div className="form flex gap-3 justify-between">
          <TextInput
            placeholder="First Name"
            label="First Name"
            classNames={styles}
            className='inpt'
          />
          <TextInput
            placeholder="Last Name"
            label="Last Name"
            classNames={styles}
            className='inpt'
          />
        </div>
        <div className="form flex gap-3 justify-between">
          <TextInput
            placeholder="Card Name"
            label="Your Card Name"
            classNames={styles}
            className='inpt'
          />

        </div>
        <div className="form flex gap-3 justify-between">
          <TextInput
            placeholder="Card Number"
            label="Card Number"
            classNames={styles}
            className='inpt w-full'
          />

        </div>
        <div className="form flex gap-3 justify-between">
          <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
          <MonthPickerInput
            label="Pick date"
            placeholder="Pick date"
          />
        </div>
      </div>
    </div>
  );
};

{/* <div className="bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
<div className="max-w-md mx-auto bg-white rounded p-8 shadow-lg">
  <h2 className="text-3xl mb-6 text-center font-bold text-gray-800">Credit Card Information</h2>
  <form>
    <div className="mb-4">
      <label htmlFor="holder_name" className="block text-sm font-medium text-gray-700">Card Holder Name</label>
      <input type="text" id="holder_name" name="holder_name" className="form-input w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" pattern="[A-Za-z\s]+" required />
    </div>
    <div className="mb-4">
      <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">Card Number</label>
      <input type="tel" id="card_number" name="card_number" className="form-input w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required />
    </div>
    <div className="flex mb-4 justify-between">
      
      <div className="w-1/3 mr-2">
        <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="month" id="start_date" name="start_date" className="form-input w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required />
      </div>
      <div className="w-1/3 ml-2">
        <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
        <input type="month" id="expiry_date" name="expiry_date" className="form-input w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required />
      </div>
    </div>
    <div className="flex mb-4 justify-between">
      <div className="w-1/2 mr-2">
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
        <input type="text" id="cvv" name="cvv" className="form-input w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" maxLength="3" pattern="\d{3}" required />
      </div>
      <div className="w-1/2 ml-2">
        <label htmlFor="bank_name" className="block text-sm font-medium text-gray-700">Bank Name</label>
        <select id="bank_name" name="bank_name" className="form-select w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required>
          <option value="">Select Bank</option>
          <option value="Axis">Axis</option>
          <option value="HDFC">HDFC</option>
          <option value="AU">AU</option>
          <option value="ICICI">ICICI</option>
        </select>
      </div>
    </div>
    <div className="flex mb-4 justify-between">
      <div className="w-1/2 mr-2">
        <label htmlFor="card_type" className="block text-sm font-medium text-gray-700">Card Type</label>
        <select id="card_type" name="card_type" className="form-select w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required>
          <option value="">Select Card Type</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <div className="w-1/2 ml-2">
        <label htmlFor="card_variant" className="block text-sm font-medium text-gray-700">Card Variant</label>
        <select id="card_variant" name="card_variant" className="form-select w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required>
          <option value="">Select Card Variant</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Rupay">Rupay</option>
        </select>
      </div>
    </div>
    <div className="flex justify-end">
      <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
  </form>
</div>
</div> */}