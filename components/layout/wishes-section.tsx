import WishesForm from "../wishes-form";
import { WishesGuestDesktop, WishesGuestMobile } from "../wishes-guest";
import useSWR from "swr";
import { GuestWishes } from "@prisma/client";
import { fetcher } from "@/lib/utils";

export default function WishesSection() {
  const {
    data: wishes,
    error,
    isLoading,
  } = useSWR<GuestWishes[]>("/api/wishes", fetcher, {
    refreshInterval: 60000, // 1 minute
  });

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center container mx-auto py-10">
      <div className="flex flex-col gap-4">
        <div className="space-y-2 max-w-md text-center sm:text-left">
          <h2 className="font-niconne text-4xl sm:text-5xl text-foreground">
            Ucapan & Doa Untuk Kedua Mempelai
          </h2>
          <p className="font-poppins text-accent text-sm sm:text-base">
            Tuliskan ucapan dan doa terbaikmu untuk kedua mempelai.
          </p>
        </div>
        <div className="bg-secondary p-6 w-full sm:w-[500px] rounded-xl">
          <WishesForm />
        </div>
      </div>
      <WishesGuestDesktop
        wishes={wishes || []}
        isLoading={isLoading}
        error={error}
      />
      <WishesGuestMobile
        wishes={wishes || []}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
}
