import React from "react";

function Contact() {
  return (
    <main className="p-4">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form className="max-w-md space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </main>
  );
}

export default Contact;