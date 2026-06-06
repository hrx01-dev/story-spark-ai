import React from 'react';

const BackHomeComponent = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gradient-to-r from-slate-800 via-blue-500/10 to-slate-800 rounded-lg p-2 hover:from-slate-800 hover:via-blue-500/30 hover:to-slate-800 transition text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto text-left"
    >
      <span className="flex items-center gap-2">
        {/* aria-hidden stops screen readers from reading the icon as noise */}
        <i className="fa-solid fa-backward" aria-hidden="true"></i>
        <span>Back</span>
      </span>
    </button>
  );
};

export default BackHomeComponent;
