import React from "react";
import { useState } from "react";


export default function Accordion(){
    const [openIndex,setOpenIndex] = useState(null)

    const toggleAccordion = (index) =>{
        setOpenIndex(openIndex===index?null:index)
    }

    const items = [
        {
            title:"hi",
            content:"hello"
        },
        {
            title:"hey",
            content:"heyyye"
        },
        {
            title:"hoi",
            content:"hihihihih"
        }
    ]

    return (
    <div className="max-w-2xl mx-auto mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-700 mb-2 rounded-lg overflow-hidden"
        >
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 px-6 bg-gray-800 text-left text-white hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 bg-gray-900 text-gray-300 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
