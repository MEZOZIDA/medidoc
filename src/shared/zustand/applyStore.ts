import { create } from "zustand";

type State = {
  name: string;
  setName: (name: string) => void;
  idNumber: string;
  setIdNumber: (idNumber: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  selectedDate: Date;
  setSelectedDate: (selectedDate: Date) => void;
  selectedTime: string;
  setSelectedTime: (selectedTime: string) => void;
  selectedCourseName: string;
  setSelectedCourseName: (selectedCourseName: string) => void;
  selectedCourseDetail: string;
  setSelectedCourseDetail: (selectedCourseDetail: string) => void;
  isTimeClicked: boolean;
  setIsTimeClicked: (nextToggle: boolean) => void;
  isDateClicked: boolean;
  setIsDateClicked: (nextDateToggle: boolean) => void;
  isCourseClicked: boolean;
  setIsCourseClicked: (isCourseClicked: boolean) => void;
};
const useApplyStore = create<State>()((set) => ({
  name: "",
  setName: (name) => set({ name }),
  idNumber: "",
  setIdNumber: (idNumber) => set({ idNumber }),
  phoneNumber: "",
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  selectedDate: new Date(),
  setSelectedDate: (selectedDate) => set({ selectedDate }),
  selectedTime: "",
  setSelectedTime: (selectedTime) => set({ selectedTime }),
  selectedCourseName: "",
  setSelectedCourseName: (selectedCourseName) => set({ selectedCourseName }),
  selectedCourseDetail: "",
  setSelectedCourseDetail: (selectedCourseDetail) =>
    set({ selectedCourseDetail }),
  isTimeClicked: false,
  setIsTimeClicked: (isTimeClicked) => set({ isTimeClicked }),
  isDateClicked: false,
  setIsDateClicked: (isDateClicked) => set({ isDateClicked }),
  isCourseClicked: false,
  setIsCourseClicked: (isCourseClicked) => set({ isCourseClicked })
}));
export default useApplyStore;
