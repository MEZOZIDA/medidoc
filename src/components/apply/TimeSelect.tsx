"use client";

import useApplyStore from "@/shared/zustand/applyStore";
import { getDate } from "@/utils/changeTimeFormat";
import React from "react";

const TimeSelect = () => {
  const { selectedDate, setSelectedTime, setIsTimeClicked } = useApplyStore();
  const morning = ["9:00", "10:00", "11:00", "12:00"];
  const afternoon = [
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ];
  const now = new Date(); // 현재 시간 가져오기

  const isSelectedDateBeforeAfterToday = (): "before" | "after" | "today" => {
    const nowDateObj = getDate(now);

    const selectedDateObj = getDate(selectedDate);

    if (selectedDateObj < nowDateObj) {
      return "before";
    } else if (selectedDateObj > nowDateObj) {
      return "after";
    } else {
      return "today";
    }
  };

  const isDisabled = (time: string) => {
    const [hour] = time.split(":");
    const selectedHour = parseInt(hour);

    if (isSelectedDateBeforeAfterToday() === "before") return true;
    if (isSelectedDateBeforeAfterToday() === "after") return false;

    // 현재 시간 이후의 시간은 활성화, 이전의 시간은 비활성화
    if (now.getHours() > selectedHour) {
      return true;
    } else {
      return false;
    }
  };

  const morningClick = (time: string) => {
    alert(`${time}시에 예약하시겠습니까?`);
    setSelectedTime(time);
    setIsTimeClicked(true);
  };

  const afternoonClick = (time: string) => {
    setSelectedTime(time);
    setIsTimeClicked(true);
  };
  return (
    <div>
      시간선택
      <div className="m-2">오전</div>
      <div>
        {morning.map((time, idx) => {
          return (
            <button
              key={idx}
              onClick={() => morningClick(time)}
              className={`border m-1 w-14 h-8 rounded-lg shadow-[0_1px_5px_-0px_rgba(0,0,0,0.3)] ${isDisabled(time) ? "disabled" : ""}`}
              disabled={isDisabled(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
      <div className="m-2">오후</div>
      <div>
        {afternoon.map((time, idx) => {
          return (
            <button
              key={idx}
              onClick={() => afternoonClick(time)}
              className={`border m-1 w-14 h-8 rounded-lg shadow-[0_1px_5px_-0px_rgba(0,0,0,0.3)] ${isDisabled(time) ? "disabled" : ""}`}
              disabled={isDisabled(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelect;
