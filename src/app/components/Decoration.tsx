export function UpperDecoration({
  className,
  innerClassName,
  primaryColor,
  secondaryColor,
}: {
  className?: string;
  innerClassName?: string;
  primaryColor?: string;
  secondaryColor?: string;
}) {
  primaryColor = primaryColor || "#94E5D2";
  secondaryColor = secondaryColor || "#745344";

  return (
    <div className={className}>
      <div className={`relative left-0 w-full ${innerClassName}`}>
        <div
          className={`w-[219.49px] h-[52.99px] left-[33.21px] top-0 absolute origin-top-left rotate-[25.98deg] rounded-[20px] opacity-75`}
          style={{
            backgroundColor: primaryColor,
            boxShadow:
              "4px 4px 4px 0px rgba(255, 255, 255, 0.56) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.15), -2px -4px 5px 0px rgba(37, 51, 48, 0.13) inset",
          }}
        />
        <div
          className={`w-[200.27px] h-[50.54px] left-0 top-[134.70px] absolute origin-top-left rotate-[-42.27deg] rounded-[20px] opacity-75`}
          style={{
            backgroundColor: primaryColor,
            boxShadow:
              "2px 2px 4px 0px rgba(255, 255, 255, 0.45) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.15), -2px -4px 5px 0px rgba(37, 51, 48, 0.13) inset",
          }}
        />
        <div
          className={`w-[219.49px] h-[52.99px] left-[58px] top-0 absolute origin-top-left rotate-[64.93deg] rounded-[20px] opacity-75`}
          style={{
            backgroundColor: secondaryColor,
            boxShadow:
              "4px 2px 4px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.1) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
        />
      </div>
    </div>
  );
}

export function LowerDecoration({
  className,
  innerClassName,
  primaryColor,
  secondaryColor,
}: {
  className?: string;
  innerClassName?: string;
  primaryColor?: string;
  secondaryColor?: string;
}) {
  primaryColor = primaryColor || "#94E5D2";
  secondaryColor = secondaryColor || "#745344";

  return (
    <div className={className}>
      <div className={`h-full w-full relative ${innerClassName}`}>
        <div className="absolute scale-[0.3] right-1 bottom-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="63"
            viewBox="0 0 56 63"
            fill="none"
          >
            <path
              d="M55.7468 0.37015L52.678 62.155L0.705183 28.6049L55.7468 0.37015Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
          </svg>
        </div>

        <div
          className="absolute bottom-[3rem] right-[2.6rem] w-[22px] h-[22px] origin-top-left rotate-[6.77deg] opacity-75"
          style={{
            border: `6px solid ${secondaryColor}`,
          }}
        />
        <div
          className="absolute bottom-[1.5rem] right-[4.2rem] w-[17px] h-[17px] rounded-full opacity-75"
          style={{
            backgroundColor: primaryColor,
          }}
        />
        <div
          className="absolute bottom-[1.35rem] right-[4rem] w-[9.2px] h-[9.2px] rounded-full opacity-75"
          style={{
            backgroundColor: secondaryColor,
          }}
        />
        <div className="absolute scale-[0.32] right-[-4.12rem] bottom-[-4.15rem]">
          <svg
            width="194"
            height="195"
            viewBox="0 0 194 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M194.5 0C168.958 -3.04587e-07 143.666 5.03089 120.068 14.8054C96.4702 24.58 75.0287 38.9067 56.9677 56.9677C38.9067 75.0287 24.58 96.4703 14.8054 120.068C5.03088 143.666 -3.85675e-06 168.958 0 194.5H22.3163C22.3163 171.889 26.77 149.498 35.423 128.608C44.076 107.718 56.759 88.7365 72.7477 72.7477C88.7365 56.759 107.718 44.076 128.608 35.423C149.498 26.77 171.889 22.3163 194.5 22.3163V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
            <path
              d="M194.5 0C168.958 -3.04587e-07 143.666 5.03089 120.068 14.8054C96.4702 24.58 75.0287 38.9067 56.9677 56.9677C38.9067 75.0287 24.58 96.4703 14.8054 120.068C5.03088 143.666 -3.85675e-06 168.958 0 194.5H22.3163C22.3163 171.889 26.77 149.498 35.423 128.608C44.076 107.718 56.759 88.7365 72.7477 72.7477C88.7365 56.759 107.718 44.076 128.608 35.423C149.498 26.77 171.889 22.3163 194.5 22.3163V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
            <path
              d="M194.5 0C168.958 -3.04587e-07 143.666 5.03089 120.068 14.8054C96.4702 24.58 75.0287 38.9067 56.9677 56.9677C38.9067 75.0287 24.58 96.4703 14.8054 120.068C5.03088 143.666 -3.85675e-06 168.958 0 194.5H22.3163C22.3163 171.889 26.77 149.498 35.423 128.608C44.076 107.718 56.759 88.7365 72.7477 72.7477C88.7365 56.759 107.718 44.076 128.608 35.423C149.498 26.77 171.889 22.3163 194.5 22.3163V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
            <path
              d="M194.5 0C168.958 -3.04587e-07 143.666 5.03089 120.068 14.8054C96.4702 24.58 75.0287 38.9067 56.9677 56.9677C38.9067 75.0287 24.58 96.4703 14.8054 120.068C5.03088 143.666 -3.85675e-06 168.958 0 194.5H22.3163C22.3163 171.889 26.77 149.498 35.423 128.608C44.076 107.718 56.759 88.7365 72.7477 72.7477C88.7365 56.759 107.718 44.076 128.608 35.423C149.498 26.77 171.889 22.3163 194.5 22.3163V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
          </svg>
        </div>
        <div className="absolute scale-[0.32] right-[-3.49rem] bottom-[-3.5rem]">
          <svg
            width="164"
            height="165"
            viewBox="0 0 164 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M164.5 0C142.898 -2.57607e-07 121.507 4.25492 101.549 12.5218C81.5905 20.7887 63.4562 32.9057 48.1809 48.1809C32.9057 63.4562 20.7887 81.5905 12.5218 101.549C4.25491 121.507 -3.26188e-06 142.898 0 164.5H3.99765C3.99765 143.423 8.14916 122.551 16.2152 103.078C24.2812 83.6054 36.1037 65.9117 51.0077 51.0077C65.9117 36.1037 83.6054 24.2812 103.078 16.2152C122.551 8.14917 143.423 3.99765 164.5 3.99765V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
            <path
              d="M164.5 0C142.898 -2.57607e-07 121.507 4.25492 101.549 12.5218C81.5905 20.7887 63.4562 32.9057 48.1809 48.1809C32.9057 63.4562 20.7887 81.5905 12.5218 101.549C4.25491 121.507 -3.26188e-06 142.898 0 164.5H3.99765C3.99765 143.423 8.14916 122.551 16.2152 103.078C24.2812 83.6054 36.1037 65.9117 51.0077 51.0077C65.9117 36.1037 83.6054 24.2812 103.078 16.2152C122.551 8.14917 143.423 3.99765 164.5 3.99765V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
            <path
              d="M164.5 0C142.898 -2.57607e-07 121.507 4.25492 101.549 12.5218C81.5905 20.7887 63.4562 32.9057 48.1809 48.1809C32.9057 63.4562 20.7887 81.5905 12.5218 101.549C4.25491 121.507 -3.26188e-06 142.898 0 164.5H3.99765C3.99765 143.423 8.14916 122.551 16.2152 103.078C24.2812 83.6054 36.1037 65.9117 51.0077 51.0077C65.9117 36.1037 83.6054 24.2812 103.078 16.2152C122.551 8.14917 143.423 3.99765 164.5 3.99765V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
            <path
              d="M164.5 0C142.898 -2.57607e-07 121.507 4.25492 101.549 12.5218C81.5905 20.7887 63.4562 32.9057 48.1809 48.1809C32.9057 63.4562 20.7887 81.5905 12.5218 101.549C4.25491 121.507 -3.26188e-06 142.898 0 164.5H3.99765C3.99765 143.423 8.14916 122.551 16.2152 103.078C24.2812 83.6054 36.1037 65.9117 51.0077 51.0077C65.9117 36.1037 83.6054 24.2812 103.078 16.2152C122.551 8.14917 143.423 3.99765 164.5 3.99765V0Z"
              fill={primaryColor}
              fill-opacity="0.75"
            />
          </svg>
        </div>
        <div className="absolute scale-[0.32] right-[-3.05rem] bottom-[-3.15rem]">
          <svg
            width="143"
            height="148"
            viewBox="0 0 143 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143.5 0C124.655 -2.31768e-07 105.995 3.82813 88.5849 11.2658C71.1747 18.7035 55.3554 29.6051 42.0302 43.3482C28.705 57.0913 18.1348 73.4067 10.9233 91.3629C3.71173 109.319 -2.84547e-06 128.564 0 148H36.1504C36.1504 133.461 38.9271 119.064 44.3219 105.631C49.7167 92.1982 57.624 79.9929 67.5924 69.712C77.5607 59.4311 89.3948 51.2758 102.419 45.7118C115.443 40.1478 129.403 37.284 143.5 37.284V0Z"
              fill={secondaryColor}
              fill-opacity="0.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
