/**
 * Graph component showing recent Transactions
 *
 */

import React from "react";

import Button from "../common/Button";
import DropDown from "../dropDown";
import { useStateContext } from "../../Contexts/ContextProvider";

const RecentTransactions = ({ transactions }) => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Recent Transactions</p>
        <DropDown currentMode={currentMode} />
      </div>
      <div className="mt-10 w-72 md:w-400">
        {transactions.map((item) => (
          <div key={item.title} className="flex justify-between mt-4">
            <div className="flex gap-4">
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <div>
                <p className="text-md font-semibold">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
            <p className={`text-${item.pcColor}`}>{item.amount}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
        <div className="mt-3">
          <Button
            color="white"
            bgColor={currentColor}
            text="Add"
            borderRadius="10px"
          />
        </div>

        <p className="text-gray-400 text-sm">36 Recent Transactions</p>
      </div>
    </div>
  );
};

export default RecentTransactions;
