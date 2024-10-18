import { useCallback, useEffect, useState } from "react";

const Timer3 = () => {
    const [countDownTime, setCountDownTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const getTimeDifference = (countDownTime) => {
        const currentTime = new Date().getTime();
        const timeDifference = countDownTime - currentTime;

        if (timeDifference < 0) {
            setCountDownTime({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            });
            clearInterval();
        } else {
            const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
            const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

            setCountDownTime({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
            });
        }
    };

    const startCountDown = useCallback(() => {
        const targetDate = new Date('2024-10-26T17:00:00-04:00'); // October 26, 2024, 5:00 PM EST
        const countDownInterval = setInterval(() => {
            getTimeDifference(targetDate.getTime());
        }, 1000);

        return () => clearInterval(countDownInterval);
    }, []);

    useEffect(() => {
        const cleanup = startCountDown();
        return cleanup;
    }, [startCountDown]);

    return (
        <div className="bg-[#191A24] sm:mb-[3.5vw] sm:py-[2.5vw] py-[10vw] mb-[10vw]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
                <div className="flex justify-center gap-3 sm:gap-8">
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                                {countDownTime?.days}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                        </div>
                        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                            {countDownTime?.days == 1 ? "Day" : "Days"}
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                                {countDownTime?.hours}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                        </div>
                        <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
                            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                                {countDownTime?.minutes}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                        </div>
                        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                                {countDownTime?.seconds}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                        </div>
                        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Timer3;