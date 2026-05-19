import React from 'react';

export default function EmailInput({ value, onChange }) {
  return (
    <div className="relative flex-1 w-full">
      <input
        type="email"
        id="footer-email"
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          w-full h-[56px]
          bg-[rgba(22,22,22,0.7)]
          border border-[rgba(128,128,128,0.7)]
          text-white text-[1rem]
          px-4 pt-5 pb-2
          rounded md:rounded-md
          focus:outline-none focus:border-white focus:ring-[1px] focus:ring-white
          transition-all duration-200
          peer
        "
        autoComplete="email"
        required
      />
      <label
        htmlFor="footer-email"
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          text-[rgba(255,255,255,0.7)] text-[1rem]
          pointer-events-none
          transition-all duration-200 ease-in-out
          peer-focus:top-3.5 peer-focus:text-[0.75rem]
          peer-[:not(:placeholder-shown)]:top-3.5
          peer-[:not(:placeholder-shown)]:text-[0.75rem]
        "
      >
        Email address
      </label>
    </div>
  );
}
