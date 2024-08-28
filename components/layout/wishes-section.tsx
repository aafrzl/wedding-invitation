import WishesForm from "../wishes-form";
import { WishesGuestDesktop, WishesGuestMobile } from "../wishes-guest";
import useSWR from "swr";
import { GuestWishes } from "@prisma/client";
import { fetcher } from "@/lib/utils";
import { motion } from "framer-motion";

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
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-niconne text-4xl sm:text-5xl text-foreground"
          >
            Ucapan & Doa Untuk Kedua Mempelai
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
            className="font-poppins text-accent text-sm sm:text-base"
          >
            Tuliskan ucapan dan doa terbaikmu untuk kedua mempelai.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-secondary p-6 w-full sm:w-[500px] rounded-xl"
        >
          <WishesForm />
        </motion.div>
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
