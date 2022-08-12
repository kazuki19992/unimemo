import React from "react";
import Task from "../../atoms/cards/Task";

const TopCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg md:w-full w-10/12 mx-auto">
      <div className="p-3">
        <div className="mb-2 flex items-center space-x-1">
          <p className="font-bold">講義中...</p>
          <p className="flex-grow px-2 text-right bg-orange-500 rounded text-white font-bold text-xs">
            3限
          </p>
        </div>

        <p className="text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap w-full">
          高度オペレーティングシステム
        </p>
        <div className="flex justify-between text-sm text-ellipsis overflow-hidden whitespace-nowrap w-full text-gray-500">
          <p>2100号館03教室</p>
          <p>高橋</p>
        </div>
        {/* <hr className="my-3" /> */}
        <div className="flex justify-between space-x-1 mt-2">
          <div className="w-1/2">
            {/* 予定 */}
            <button className="rounded-lg w-full h-10 flex justify-center items-center bg-gray-200 text-gray-500">
              <p>タスク追加</p>
            </button>
            <Task taskName="期末考査" priority="highest" />
            <Task taskName="課題提出" priority="high" />
            <Task taskName="中レベルタスク" priority="middle" />
            <p className="text-sm text-gray-700 text-right">他1件のタスク...</p>
          </div>
          <div className="flex-grow">
            <button className="rounded-lg w-full h-10 flex justify-center items-center bg-gray-200 text-gray-500">
              <p>メモを書く</p>
            </button>
            <p className="text-sm text-gray-500">メモはありません</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
