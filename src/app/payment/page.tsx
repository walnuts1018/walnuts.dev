import Image from "next/image";
import { PiBankBold } from "react-icons/pi";
import { ContentHeader } from "../../components/ContentHeader";

export default function Payment() {
  return (
    <main className="flex  min-h-screen items-center justify-start lg:items-start lg:justify-center px-6 lg:px-10 lg:py-6 flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-8 w-full sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-[30%] p-4">
        <ContentHeader initialText="Payment" finalText="送金" />
        <PaymentCard
          icon="/icons/paypay.jpg"
          title="PayPay"
          description="PayPay ID: juglans"
          imageSrc="/payments/paypay-userimage.jpg"
        />
        <PaymentCard
          icon="/icons/Kyash.png"
          title="Kyash"
          imageSrc="/payments/Kyash-QR.png"
        />
        <PaymentCard
          icon={<PiBankBold size="50px" />}
          title="口座"
          description="DMでお問い合わせください"
        />
      </div>
    </main>
  );
}

function PaymentCard({
  icon,
  imageSrc,
  title,
  description,
}: {
  icon?: string | React.ReactNode;
  imageSrc?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-center justify-between w-full p-4 px-6 border-2 border-gray-400 rounded-3xl aspect-[7/3]">
      <div className="flex items-center justify-start gap-4">
        {icon &&
          (typeof icon === "string" ? (
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="rounded-full aspect-square w-[30%]"
            />
          ) : (
            icon
          ))}
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-2xl 2xl:text-3xl font-semibold">{title}</h2>
          {description && <p className="text-gray-500">{description}</p>}
        </div>
      </div>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg object-contain aspect-square w-[33%]"
        />
      )}
    </div>
  );
}
