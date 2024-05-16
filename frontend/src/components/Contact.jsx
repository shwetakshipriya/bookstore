import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0d88df6f-24a2-4432-b385-5ffe99441cdc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000); // Clear message after 3 seconds
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setResult("");
      }, 3000); // Clear error message after 3 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form onSubmit={onSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-gray-400">Name</label>
            <input 
              type="text" 
              name="name" 
              className="w-full mt-1 p-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              required
            />
          </div>
          <div>
            <label className="block text-gray-400">Email</label>
            <input 
              type="email" 
              name="email" 
              className="w-full mt-1 p-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              required
            />
          </div>
          <div>
            <label className="block text-gray-400">Message</label>
            <textarea 
              name="message" 
              className="w-full mt-1 p-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit Form
          </button>
        </form>
        {result && (
          <span className="block mt-4 text-gray-400">{result}</span>
        )}
      </div>
    </div>
  );
}
