import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { PiBankBold } from "react-icons/pi";
import { ContentHeader } from "../../components/ContentHeader";
import kyashIcon from "../../components/icons/Kyash.png";
import paypayIcon from "../../components/icons/paypay.jpg";
import kyashQR from "./Kyash-QR.png";
import paypayUserimage from "./paypay-userimage.jpg";

export default function Payment() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 px-6 lg:flex-row lg:items-start lg:justify-center lg:px-10 lg:py-6">
      <div className="flex w-full flex-col gap-8 p-4 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-[30%]">
        <ContentHeader initialText="Payment" finalText="送金" />
        <PaymentCard
          icon={{
            src: paypayIcon,
          }}
          title="PayPay"
          description="PayPay ID: juglans"
          imageSrc={paypayUserimage}
          href="paypay://user/juglans"
        />
        <PaymentCard
          icon={{
            src: kyashIcon,
          }}
          title="Kyash"
          imageSrc={kyashQR}
          href="kyash://qr/u/3654958567120614335"
        />
        <PaymentCard
          icon={{
            node: <PiBankBold size="50px" />,
          }}
          title="口座"
          description="DMでお問い合わせください"
        />
      </div>
    </main>
  );
}

type RejectAll<T> = { [P in keyof T]?: never };

type OnlyOneOf<T> = {
  [P in keyof T]: RejectAll<Omit<T, P>> & Required<Pick<T, P>>;
}[keyof T];

type IconProp = OnlyOneOf<{
  node: React.ReactNode;
  src: string | StaticImport;
}>;

function PaymentCard({
  icon,
  imageSrc,
  title,
  description,
  href,
}: {
  description?: string;
  href?: string;
  icon?: IconProp;
  imageSrc?: string | StaticImport;
  title: string;
}) {
  const content = (
    <>
      <div className="flex items-center justify-start gap-4">
        {icon && (
          <>
            {icon.src ? (
              <Image
                src={icon.src}
                alt="icon"
                loading="eager"
                className="aspect-square w-[20%] rounded-full"
              />
            ) : (
              icon.node
            )}
          </>
        )}
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-2xl font-semibold 2xl:text-3xl">{title}</h2>
          {description && <p className="text-gray-500">{description}</p>}
        </div>
      </div>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          loading="eager"
          className="aspect-square w-[33%] rounded-lg object-contain"
        />
      )}
    </>
  );

  return (
    <>
      {href ? (
        <Link
          href={href}
          className="flex aspect-7/3 w-full items-center justify-between rounded-3xl border-2 border-gray-400 p-4 px-6 transition-transform duration-200 hover:scale-105 hover:bg-gray-200 hover:shadow-lg"
        >
          {content}
        </Link>
      ) : (
        <div className="flex aspect-7/3 w-full items-center justify-between rounded-3xl border-2 border-gray-400 p-4 px-6">
          {content}
        </div>
      )}
    </>
  );
}
