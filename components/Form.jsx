"use client";
import { useState } from "react";

export default function Form({ setText, setBgColor, setImage }) {
  return (
    <div className="max-w-lg mx-auto mt-6 p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">Customize the Banner</h2>
      
      {/* Change Banner Text */}
      <label className="block mb-2 font-medium">Banner Text</label>
      <input
        type="text"
        placeholder="Enter new banner text"
        className="w-full px-3 py-2 border rounded-md mb-4"
        onChange={(e) => setText(e.target.value)}
      />

      {/* Change Banner Background Color */}
      <label className="block mb-2 font-medium">Background Color</label>
      <input
        type="color"
        className="w-full h-10 cursor-pointer mb-4"
        onChange={(e) => setBgColor(e.target.value)}
      />

      {/* Change Banner Image */}
      <label className="block mb-2 font-medium">Banner Image (URL)</label>
      <input
        type="text"
        placeholder="Enter image URL"
        className="w-full px-3 py-2 border rounded-md mb-4"
        onChange={(e) => setImage(e.target.value)}
      />
    </div>
  );
}
