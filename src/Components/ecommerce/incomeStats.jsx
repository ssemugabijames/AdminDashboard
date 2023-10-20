/**
 * Income Statistics Cards
 *
 */

import React from "react";

const IncomeStats = ({ statistics }) => {
  return (
    <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
      {statistics.map((item) => (
        <div
          key={item.title}
          className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
        >
          <button
            type="button"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
          >
            {item.icon}
          </button>
          <p className="mt-3">
            <span className="text-lg font-semibold">{item.amount}</span>
            <span className={`text-sm text-${item.pcColor} ml-2`}>
              {item.percentage}
            </span>
          </p>
          <p className="text-sm text-gray-400  mt-1">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default IncomeStats;
